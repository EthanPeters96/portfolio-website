# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, a beautiful design, and full responsiveness across all devices.

## ✨ Features

-   **Modern Design**: Clean, professional layout with smooth animations
-   **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
-   **Interactive Elements**: Hover effects, smooth scrolling, and engaging animations
-   **Contact Form**: Functional contact form with validation
-   **Fast Performance**: Built with Vite for optimal loading speed
-   **Accessible**: Semantic HTML and proper ARIA labels

## 🛠️ Built With

-   **React 18** - UI library
-   **Tailwind CSS** - Utility-first CSS framework
-   **Framer Motion** - Animation library
-   **Lucide React** - Beautiful icons
-   **Vite** - Fast build tool

## 📋 Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal information and key statistics
3. **Skills** - Technical skills organized by category
4. **Projects** - Showcase of featured and other projects
5. **Contact** - Contact form and social links
6. **Footer** - Additional links and information

## 🚀 Getting Started

### Prerequisites

-   Node.js (version 16 or higher)
-   npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## 🎨 Customization

### Personal Information

Update the following files with your information:

-   **src/components/Hero.jsx** - Name, description, and social links
-   **src/components/About.jsx** - Bio, experience, and statistics
-   **src/components/Skills.jsx** - Your technical skills
-   **src/components/Projects.jsx** - Your projects with images and links
-   **src/components/Contact.jsx** - Contact information
-   **src/components/Footer.jsx** - Footer content

### Styling

-   **Colors**: Modify the color palette in `tailwind.config.js`
-   **Fonts**: Update font families in `tailwind.config.js` and `index.html`
-   **Animations**: Customize animations in component files using Framer Motion

### Images

Replace project images in `src/components/Projects.jsx` with your own:

-   Use high-quality images (800x600px recommended)
-   Consider using services like Unsplash for placeholder images
-   Optimize images for web to ensure fast loading

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

-   Mobile: < 768px
-   Tablet: 768px - 1024px
-   Desktop: > 1024px

## 🔧 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🌟 Key Features Explained

### Smooth Scrolling

Navigation links use smooth scrolling to sections using the native `scrollIntoView` API.

### Animations

Framer Motion provides:

-   Scroll-triggered animations
-   Hover effects
-   Loading animations
-   Staggered children animations

### Form Handling

The contact form includes:

-   Real-time validation
-   Loading states
-   Success/error feedback
-   Responsive design

## 🚀 Deployment

You can deploy this portfolio to various platforms:

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`:
    ```json
    "scripts": {
      "deploy": "gh-pages -d dist"
    }
    ```
3. Run: `npm run build && npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy coding!** 🎉
