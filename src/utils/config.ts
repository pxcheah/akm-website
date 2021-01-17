import fs from 'fs';
import path from 'path';

export function getData<T>(name: string) {
  const data = fs.readFileSync(path.resolve(process.cwd(), 'data', `${name}.json`));
  return JSON.parse(data.toString()) as T;
}
