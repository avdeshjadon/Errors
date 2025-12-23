# HTTP Error Pages Collection

A collection of beautifully designed, animated error pages for common HTTP status codes. Each page features the same consistent design with engaging SVG animations and responsive layouts.

## 🌐 Live Demo

Visit the live error pages hosted on GitHub Pages:

| Error Code | Description | Live Demo |
|------------|-------------|-----------|
| **400** | Bad Request | [🔗 View Demo](https://avdeshjadon.github.io/Errors/400_error/) |
| **401** | Unauthorized | [🔗 View Demo](https://avdeshjadon.github.io/Errors/401_error/) |
| **403** | Forbidden | [🔗 View Demo](https://avdeshjadon.github.io/Errors/403_error/) |
| **404** | Not Found | [🔗 View Demo](https://avdeshjadon.github.io/Errors/404_error/) |
| **500** | Internal Server Error | [🔗 View Demo](https://avdeshjadon.github.io/Errors/500_error/) |
| **503** | Service Unavailable | [🔗 View Demo](https://avdeshjadon.github.io/Errors/503_error/) |

## 📁 Project Structure

Each error page is now organized in its own folder with separated concerns:

```
400_error/
├── index.html          # Main HTML file
└── src/
    ├── style.css       # Stylesheet
    └── script.js       # JavaScript animations
401_error/
├── index.html
└── src/
    ├── style.css
    └── script.js
403_error/
├── index.html
└── src/
    ├── style.css
    └── script.js
404_error/
├── index.html
└── src/
    ├── style.css
    └── script.js
500_error/
├── index.html
└── src/
    ├── style.css
    └── script.js
503_error/
├── index.html
└── src/
    ├── style.css
    └── script.js
```

## 📋 Error Pages Details

| File | Error Code | Description |
|------|------------|-------------|
| `400_error/` | 400 Bad Request | Invalid or malformed request data |
| `401_error/` | 401 Unauthorized | Authentication required |
| `403_error/` | 403 Forbidden | Access denied/insufficient permissions |
| `404_error/` | 404 Not Found | Page or resource not found |
| `500_error/` | 500 Internal Server Error | Server-side error |
| `503_error/` | 503 Service Unavailable | Service temporarily unavailable |

## ✨ Features

- **🎨 Consistent Design**: All pages share the same visual style and branding
- **📱 Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **🎭 Smooth Animations**: Engaging CSS animations with staggered timing effects
- **🖼️ Interactive SVG**: Animated hand-in-hole illustration with continuous motion
- **⚡ Lightweight**: Fast loading with minimal dependencies
- **🔧 Easy to Customize**: Clean, well-structured HTML/CSS code

## 🎬 Animations

Each error page includes:
- **Scale-up animation** for the main SVG illustration
- **Fade-in scale effect** for the main heading
- **Slide-in from left** for the error code
- **Fade-in from bottom** for the description text
- **Continuous loop animation** for the hand/hole interaction

## 🎯 Usage

### Web Servers

Configure your web server to serve these pages for their respective error codes:

#### Apache (.htaccess)
```apache
ErrorDocument 400 /errors/400_error/
ErrorDocument 401 /errors/401_error/
ErrorDocument 403 /errors/403_error/
ErrorDocument 404 /errors/404_error/
ErrorDocument 500 /errors/500_error/
ErrorDocument 503 /errors/503_error/
```

#### Nginx
```nginx
error_page 400 /errors/400_error/;
error_page 401 /errors/401_error/;
error_page 403 /errors/403_error/;
error_page 404 /errors/404_error/;
error_page 500 /errors/500_error/;
error_page 503 /errors/503_error/;
```

#### Express.js (Node.js)
```javascript
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/errors/404_error/index.html');
});

app.use((err, req, res, next) => {
  if (err.status === 500) {
    res.status(500).sendFile(__dirname + '/errors/500_error/index.html');
  }
  // Add other error handling as needed
});
```

## 📱 Responsive Breakpoints

The error pages are optimized for multiple screen sizes:

- **Desktop Large**: 1601px and above
- **Desktop**: 1025px - 1600px
- **Tablet**: 768px - 1024px
- **Mobile Large**: 480px - 767px
- **Mobile**: 320px - 479px
- **Mobile Small**: Below 320px

## 🎨 Customization

### Colors
The main colors used in the design:
- **Background**: `#ececec`
- **Text Primary**: `#333333`
- **Text Secondary**: `#666666`
- **Text Light**: `#888888`
- **SVG Background**: `#f6f5f4`
- **SVG Shadow**: `#C0C0C0`
- **SVG Hole**: `#333333`
- **Hand Color**: `#F6AF74` with `#F6B075` stroke

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Main Heading**: 32px-46px (responsive)
- **Error Code**: 22px-30px (responsive)
- **Description**: 15px-18px (responsive)

### Modifying Messages
To customize error messages, update the text content in each file:

```html
<div class="error-text">
    <h1>Oops!</h1>
    <h2>404 – Page Not Found</h2>
    <p>Your custom error message here</p>
</div>
```

## 📦 Dependencies

- **Snap.svg**: For SVG animations (loaded from CDN)
  - `https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.3.0/snap.svg-min.js`

## 🌐 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ iOS Safari 12+
- ✅ Android Chrome 60+

## 📄 License

These error pages are free to use for both personal and commercial projects. Feel free to modify and customize as needed.

## 🤝 Contributing

Feel free to submit issues or pull requests to improve these error pages. Suggestions for additional error codes or design improvements are welcome!

---

**Created**: December 2025  
**Last Updated**: December 23, 2025