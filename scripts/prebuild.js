import { readdir } from 'fs';
import sharp from 'sharp';

const sourceFolder = 'static/images';
const prefix = 'small_';

readdir(sourceFolder, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  // Filter out only image files (you may want to expand this list)
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|avif)$/i.test(file));

  // Process each image
  imageFiles.forEach(imageFile => {
    const inputFile = `${sourceFolder}/${imageFile}`;
    const outputFileSmall = `${sourceFolder}/small/${imageFile}`;
    const outputFileMedium = `${sourceFolder}/medium/${imageFile}`;

    sharp(inputFile)
      .rotate()
      .resize({ width: 300 })
      .toFile(outputFileSmall, (err, info) => {
        if (err) {
          console.error(`Error processing ${imageFile}:`, err);
        } else {
          console.log(`Processed ${imageFile} and saved as ${prefix}${imageFile}`);
        }
      });
      sharp(inputFile)
      .rotate()
      .resize({ width: 500 })
      .toFile(outputFileMedium, (err, info) => {
        if (err) {
          console.error(`Error processing ${imageFile}:`, err);
        } else {
          console.log(`Processed ${imageFile} and saved as ${prefix}${imageFile}`);
        }
      });
  });
});