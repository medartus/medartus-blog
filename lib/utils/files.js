import fs from 'fs'
import path from 'path'

const root = process.cwd()

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

const flatternArray = (input) =>
  input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])

const map = (fn) => (input) => input.map(fn)

const walkDir = (fullPath) => {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath)
}

const pathJoinPrefix = (prefix) => (extraPath) => path.join(prefix, extraPath)

const getAllFilesRecursively = (folder) =>
  pipe(fs.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flatternArray)(folder)

export default getAllFilesRecursively


export async function readLocaleFile(locale,file) {
  const fileContent =  await fs.readFileSync(path.join(root, 'data', locale, file), 'utf8');
  const jsonFile = JSON.parse(fileContent);
  return jsonFile;
}
