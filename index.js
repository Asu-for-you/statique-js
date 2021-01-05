import fs from 'fs'
import path from "path"

const readFile = filename => {
	const rawFile = fs.readFileSync(filename, "utf8")
}

readFile(path)