import fs from 'fs';
import path from 'path';

const PRODUCT_PATH = path.join(__dirname, '../json_files', 'product.json');

const readJsonFile = (path) =>
  new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
    .then((data) => JSON.parse(data))
    .catch((error) => {
      throw error;
    });

export const getProducts = () => readJsonFile(PRODUCT_PATH);
