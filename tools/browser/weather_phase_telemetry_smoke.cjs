const { firefox } = require('playwright');

const baseUrl = process.env.AUTOMATION_BASE_URL || 'http://127.0.0.1:8090';

async function probe(page, weather) {
  await page.goto(
    `${baseUrl}/?renderer=pixeldart&automation=1&captureSeed=7&captureDay=20&captureHour=14&captureWeather=${weather}&captureShutters=open`,
    { waitUntil: 'load' },
  );
  await page.waitForFunction(
    () => document.querySelector('#game')?.getAttribute('data-boot-phase') === 'running',
    null,
    { timeout: 15000 },
  );
  return page.locator('#game').evaluate((canvas) => ({
    phase: canvas.getAttribute('data-renderer-weather-phase'),
    wind: canvas.getAttribute('data-renderer-weather-wind-mps'),
    snowRate: canvas.getAttribute('data-renderer-weather-snow-accumulation-mps'),
    impacts: canvas.getAttribute('data-renderer-weather-impact-count'),
    surface: canvas.getAttribute('data-renderer-weather-surface'),
    particles: canvas.getAttribute('data-renderer-rain-particles'),
    averageSpeedMps: canvas.getAttribute('data-renderer-rain-particles-average-speed-mps'),
    flow: {
      paths: canvas.getAttribute('data-renderer-rain-flow-paths'),
      particles: canvas.getAttribute('data-renderer-rain-flow-particles'),
      capturedMassKg: canvas.getAttribute('data-renderer-rain-flow-captured-mass-kg'),
      drainedMassKg: canvas.getAttribute('data-renderer-rain-flow-drained-mass-kg'),
      overflowMassKg: canvas.getAttribute('data-renderer-rain-flow-overflow-mass-kg'),
    },
    fire: {
      flame: canvas.getAttribute('data-renderer-fire-flame-particles'),
      whiteSmoke: canvas.getAttribute('data-renderer-fire-white-smoke-particles'),
      blackSmoke: canvas.getAttribute('data-renderer-fire-black-smoke-particles'),
    },
    reflection: {
      intensity: canvas.getAttribute('data-renderer-reflection-intensity'),
      confidence: canvas.getAttribute('data-renderer-reflection-confidence'),
      mode: canvas.getAttribute('data-renderer-reflection-mode'),
    },
    clouds: {
      coverage: canvas.getAttribute('data-renderer-sky-cloud-coverage'),
      density: canvas.getAttribute('data-renderer-sky-cloud-density'),
      samples: canvas.getAttribute('data-renderer-sky-cloud-samples'),
      phase: canvas.getAttribute('data-renderer-sky-cloud-phase'),
    },
  }));
}

async function main() {
  const browser = await firefox.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  try {
    const samples = {
      rain: await probe(page, 'rain'),
      overcast: await probe(page, 'overcast'),
    };
    for (const [name, sample] of Object.entries(samples)) {
      if (!sample.phase || Number.isNaN(Number(sample.wind)) ||
          Number.isNaN(Number(sample.snowRate)) ||
          Number.isNaN(Number(sample.impacts)) ||
          Number.isNaN(Number(sample.particles)) ||
          !Number.isFinite(Number(sample.averageSpeedMps)) ||
          Number(sample.averageSpeedMps) < 0 || !sample.surface ||
          !Number.isFinite(Number(sample.flow?.paths)) ||
          !Number.isFinite(Number(sample.flow?.particles)) ||
          !Number.isFinite(Number(sample.flow?.capturedMassKg)) ||
          !Number.isFinite(Number(sample.flow?.drainedMassKg)) ||
          !Number.isFinite(Number(sample.flow?.overflowMassKg))) {
        throw new Error(`invalid ${name} weather telemetry: ${JSON.stringify(sample)}`);
      }
      for (const value of Object.values(sample.fire ?? {})) {
        if (!Number.isInteger(Number(value)) || Number(value) < 0) {
          throw new Error(`invalid ${name} fire telemetry: ${JSON.stringify(sample.fire)}`);
        }
      }
      JSON.parse(sample.surface);
      const reflectionIntensity = Number(sample.reflection?.intensity);
      const reflectionConfidence = Number(sample.reflection?.confidence);
      if (!Number.isFinite(reflectionIntensity) || reflectionIntensity < 0 ||
          reflectionIntensity > 4 || !Number.isFinite(reflectionConfidence) ||
          reflectionConfidence < 0 || reflectionConfidence > 1 ||
          sample.reflection?.mode !== 'environment-fallback') {
        throw new Error(`invalid ${name} reflection telemetry: ${JSON.stringify(sample.reflection)}`);
      }
      const cloudCoverage = Number(sample.clouds?.coverage);
      const cloudDensity = Number(sample.clouds?.density);
      const cloudSamples = Number(sample.clouds?.samples);
      const cloudPhase = Number(sample.clouds?.phase);
      if (!Number.isFinite(cloudCoverage) || cloudCoverage < 0 || cloudCoverage > 1 ||
          !Number.isFinite(cloudDensity) || cloudDensity < 0 || cloudDensity > 1 ||
          !Number.isInteger(cloudSamples) || cloudSamples < 4 || cloudSamples > 24 ||
          !Number.isFinite(cloudPhase)) {
        throw new Error(`invalid ${name} cloud telemetry: ${JSON.stringify(sample.clouds)}`);
      }
    }
    console.log(JSON.stringify(samples));
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
