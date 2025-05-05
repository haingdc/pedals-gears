# Pedals Gears CSS

Bộ thư viện CSS buttons có thể tùy chỉnh.

## Cài đặt

```
npm install pedals-gears-css
```

## Sử dụng

### Import cụ thể file CSS (Recommended)

```javascript
// Import trực tiếp file CSS cụ thể
import 'pedals-gears-css/dist/styles/buttons.css';
import 'pedals-gears-css/dist/styles/buttons.custom.css';

// Hoặc chỉ import file bạn cần
import 'pedals-gears-css/dist/styles/buttons.css'; // Chỉ import buttons cơ bản
```

Trong CSS:
```css
/* Chỉ import buttons styles cơ bản */
@import '~pedals-gears-css/dist/styles/buttons.css';

/* Import styles tùy chỉnh */
@import '~pedals-gears-css/dist/styles/buttons.custom.css';
```

### Import tất cả styles

```javascript
// Nếu bạn muốn import tất cả styles
import 'pedals-gears-css/dist/styles/index.css';
```

### Import với JavaScript APIs

```javascript
// Import đường dẫn để sử dụng với Dynamic Import hoặc require.context
const { buttons, buttonsCustom } = require('pedals-gears-css');

// Ví dụ với webpack
require(buttons); // Import file buttons.css
require(buttonsCustom); // Import file buttons.custom.css

// Hoặc với ES modules
import { buttons, buttonsCustom } from 'pedals-gears-css';
import(buttons); // Dynamic import
```

## Classes

### Basic Buttons
Các class button cơ bản được định nghĩa trong `buttons.css`

### Custom Buttons
Custom button styles được định nghĩa trong `buttons.custom.css`:

- `.btn-custom`: Button với gradient blue
- `.btn-large`: Button lớn
- `[data-icon="cloud"]`: Button với icon cloud

## Sử dụng với các bundlers phổ biến

### Webpack
```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

### Vite
```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // CSS modules hỗ trợ sẵn
});
```

## License

MIT