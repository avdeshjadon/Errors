# HTTP Error Pages

Beautiful, animated error pages for common HTTP status codes with smooth SVG animations and responsive design.

## Live Demos

[![400 Error](https://img.shields.io/badge/400-Bad_Request-FF5252?style=for-the-badge)](https://avdeshjadon.github.io/Errors/400_error/)
[![401 Error](https://img.shields.io/badge/401-Unauthorized-FF9800?style=for-the-badge)](https://avdeshjadon.github.io/Errors/401_error/)
[![403 Error](https://img.shields.io/badge/403-Forbidden-F44336?style=for-the-badge)](https://avdeshjadon.github.io/Errors/403_error/)
[![404 Error](https://img.shields.io/badge/404-Not_Found-E91E63?style=for-the-badge)](https://avdeshjadon.github.io/Errors/404_error/)
[![500 Error](https://img.shields.io/badge/500-Internal_Server_Error-9C27B0?style=for-the-badge)](https://avdeshjadon.github.io/Errors/500_error/)
[![503 Error](https://img.shields.io/badge/503-Service_Unavailable-3F51B5?style=for-the-badge)](https://avdeshjadon.github.io/Errors/503_error/)

## Features

✨ **Smooth Animations** - Engaging CSS animations with SVG interactions  
📱 **Fully Responsive** - Optimized for all screen sizes  
🎨 **Consistent Design** - Unified look across all error pages  
⚡ **Lightweight** - Fast loading with minimal dependencies  
🔧 **Easy Integration** - Simple to integrate with any web server

## Usage

### Apache (.htaccess)
```apache
ErrorDocument 400 /errors/400_error/
ErrorDocument 404 /errors/404_error/
ErrorDocument 500 /errors/500_error/
```

### Nginx
```nginx
error_page 400 /errors/400_error/;
error_page 404 /errors/404_error/;
error_page 500 /errors/500_error/;
```

### Express.js
```javascript
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/404_error/index.html');
});
```

## Project Structure

```
error_code/
├── index.html
└── src/
    ├── style.css
    └── script.js
```

---

**Made by [Avdesh Jadon](https://github.com/avdeshjadon)** | December 2025