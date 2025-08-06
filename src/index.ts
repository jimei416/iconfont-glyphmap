import * as fs from "fs";

export function cssToGlyphMap(cssFilePath: string): Record<string, number> {
  const css = fs.readFileSync(cssFilePath, "utf-8");
  const glyphMap: Record<string, number> = {};
  const regex =
    /\.icon-([a-zA-Z0-9_-]+):before\s*\{\s*content:\s*"\\([a-fA-F0-9]+)";/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(css)) !== null) {
    glyphMap[match[1]] = parseInt(match[2], 16);
  }
  return glyphMap;
}
