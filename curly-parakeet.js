import express from "express";
import { getDirname } from "./utils/filePath.js";
import path from "path"
const __dirname = getDirname(import.meta.url);
const app = express();
app.use(express.static(path.join(__dirname,"src")));
app.listen(60001,()=>{console.log("http://localhost:60001")})