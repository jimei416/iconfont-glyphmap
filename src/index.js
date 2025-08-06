// 基础入口文件
const fs = require("fs");

function cssToGlyphMap(cssFilePath) {
  const css = fs.readFileSync(cssFilePath, "utf-8");
  const glyphMap = {};
  const regex =
    /\.icon-([a-zA-Z0-9_-]+):before\s*\{\s*content:\s*"\\([a-fA-F0-9]+)";/g;
  let match;
  while ((match = regex.exec(css)) !== null) {
    glyphMap[match[1]] = parseInt(match[2], 16);
  }
  return glyphMap;
}

module.exports = { cssToGlyphMap };
module.exports.default = { cssToGlyphMap };
