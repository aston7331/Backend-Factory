import { Request, Response, NextFunction } from 'express';
// import { uploadFileToAzure } from '../services/uploadService';

export const uploadFileController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ success: false, error: 'No file uploaded' });
      return;
    }
    const file = req.file;
    console.log(file);
    // const result = await uploadFileToAzure(file);
    // res.status(200).json({ success: true, url: result });
  } catch (err) {
    next(err);
  }
};
