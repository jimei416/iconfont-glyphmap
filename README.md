# iconfont-glyphmap

将 iconfont CSS 文件自动转换为 react-native-vector-icons 所需的 glyphMap 对象。

## 安装

```bash
npm install iconfont-glyphmap
```

## 使用

### CommonJS

```js
const { cssToGlyphMap } = require("iconfont-glyphmap");
const glyphMap = cssToGlyphMap("test/style.css");
console.log(glyphMap);
```

### ESModule / TypeScript

```ts
import { cssToGlyphMap } from "iconfont-glyphmap";
const glyphMap = cssToGlyphMap("test/style.css");
console.log(glyphMap);
```

## 类型支持

本工具包内置 TypeScript 类型声明

## 贡献

欢迎 PR 和 issue。

## License

MIT
