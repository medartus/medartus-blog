import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function readFile(locale,file) {
  const fileContent =  await fs.readFileSync(path.join(root, 'data', locale, file), 'utf8');
  const jsonFile = JSON.parse(fileContent);
  return jsonFile.projects;
}
