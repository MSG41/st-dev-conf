import fs from 'fs';
import path from 'path';
import { put } from '@vercel/blob';

const folderPath = 'public/cubeImages'; 
async function uploadImages() {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const fileData = fs.readFileSync(filePath);
    const blob = await put(`images/${file}`, fileData, {
      access: 'public',
    });
    console.log(`✅ Uploaded ${file} → ${blob.url}`);
  }
}

uploadImages().catch(console.error);
