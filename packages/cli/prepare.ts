import path from 'path';
import fs from 'fs/promises';
import { glob } from 'glob';

async function copyFiles() {
  const templatePath = path.join(__dirname, '../base-ui');
  console.log('templatePath:', templatePath);
  const appFileList = await glob(`${templatePath}/**/*.*`, {
    ignore: [`${templatePath}/node_modules/**`, `${templatePath}/package.json`],
  });
  const destinationPath = `${process.cwd()}/dist/template`;
  fs.mkdir(destinationPath, { recursive: true });
  // copy all files from fileList to the destination
  for (const file of appFileList) {
    const destination = path.join(destinationPath, path.basename(file));
    await fs.copyFile(file, destination);
  }
}

copyFiles()
  .then(() => {
    console.log('Files copied successfully');
  })
  .catch((error) => {
    console.error('Error copying files:', error);
  });
