import express from 'express';
import multer from 'multer';
import { uploadFileController } from '../controllers/uploadController';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Store file in memory for Azure upload

// POST /api/upload
router.post('/', upload.single('file'), uploadFileController);

export default router;
