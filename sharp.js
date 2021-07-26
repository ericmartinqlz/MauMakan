const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

fs.readdirSync(target)
  .forEach((image) => {
    // 1200px prefix -large.webp
    sharp(`${target}/${image}`)
      .webp()
      .resize(1200)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-large.webp`));

    // 1200px prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-large.jpg`));

    // 900px prefix -medium.webp
    sharp(`${target}/${image}`)
      .webp()
      .resize(900)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-medium.webp`));

    // 900px prefix -medium.jpg
    sharp(`${target}/${image}`)
      .resize(900)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-medium.jpg`));

    // 900px prefix -small.webp
    sharp(`${target}/${image}`)
      .webp()
      .resize(600)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.webp`));

    // 600px prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(600)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.jpg`));
  });
