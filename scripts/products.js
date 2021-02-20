const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, '../data');

// Read files
const file = fs.readFileSync(path.resolve(dataDir, 'products.csv')).toString();
const categories = JSON.parse(fs.readFileSync(path.resolve(dataDir, 'categories.json')).toString());

// Parse csv
const rows = parse(file, { columns: true, skipEmptyLines: true });

// Process rows
const products = rows.reduce((acc, row) => {
  if (categories.find((c) => c.categoryId === row.categoryId)) {
    acc.push({
      productId: row.productId,
      categoryId: row.categoryId,
      name: row.name,
      fullName: row.fullName || undefined,
      description: row.description,
      image: `/images/products/${row.productId}/1.png`,
      brand: row.brand || undefined,
      principals: row.principals ? row.principals.split(',') : [],
    });
  } else {
    console.warn(`${row.name} - invalid category`);
  }

  return acc;
}, []);

// Generate jsons
fs.writeFileSync(path.resolve(dataDir, 'products.json'), JSON.stringify(products));
