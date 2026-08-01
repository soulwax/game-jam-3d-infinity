







const int vertexStride = 14; 
const int vertsPerQuad = 6; 
const int floatsPerQuad = vertsPerQuad * vertexStride;
const int bytesPerVertex = vertexStride * 4;


const int attrPosOffset = 0; 
const int attrNormalOffset = 3; 
const int attrColorOffset = 6; 
const int attrAlphaOffset = 10; 
const int attrUvOffset = 11; 


const int instanceAttributeCount = 5; 
const int instanceFloatsPerInstance = 20; 
const int instanceBytesPerInstance = instanceFloatsPerInstance * 4;


const int indexBytesPerIndex = 2; 
