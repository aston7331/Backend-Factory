import { BlobServiceClient } from '@azure/storage-blob';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

// Add your Azure Storage connection string here
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING || '';
// Add your Azure Storage container name here
const AZURE_STORAGE_CONTAINER_NAME = process.env.AZURE_STORAGE_CONTAINER_NAME || '';

// Commented out for development: Ensure environment variables are set before running in production
// if (!AZURE_STORAGE_CONNECTION_STRING || !AZURE_STORAGE_CONTAINER_NAME) {
//   throw new Error('Azure Storage connection string or container name not set in environment variables');
// }

console.log('Azure Storage connection string or container name not set. Please add your bucket string or name.');

// const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
// const containerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME);

// export const uploadFileToAzure = async (file: Express.Multer.File): Promise<string> => {
//   const blobName = uuidv4() + '-' + file.originalname;
//   const blockBlobClient = containerClient.getBlockBlobClient(blobName);
//   await blockBlobClient.uploadData(file.buffer, {
//     blobHTTPHeaders: { blobContentType: file.mimetype }
//   });
//   return blockBlobClient.url;
// };