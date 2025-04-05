import path from "path";
import { fileURLToPath } from "url";
export function getDirname(metaUrl){
    const __fileName = fileURLToPath(metaUrl);
    return path.dirname(__fileName);
}