# Atrajit Sarkar - Mathematics Portfolio

A beautifully designed Jekyll website showcasing the academic portfolio of Atrajit Sarkar, MSc in Mathematics from IIT Delhi and PhD aspirant specializing in Number Theory, Analysis, and Algebra.

## 🚀 Quick Start

### Prerequisites
- Ruby (version 2.7 or higher)
- Bundler gem
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd math-portfolio
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the development server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the website:**
   Open your browser and navigate to `http://localhost:4000`

## 📁 Project Structure

```
math-portfolio/
├── _config.yml          # Site configuration
├── _layouts/            # HTML layouts
│   ├── default.html     # Main layout with navigation
│   └── page.html        # Page layout for content pages
├── _pages/              # Content pages (Markdown)
│   ├── education.md     # Academic background
│   ├── achievements.md  # Awards and honors
│   ├── cv.md           # Curriculum vitae
│   └── contact.md      # Contact information
├── assets/
│   └── css/
│       └── main.css    # Custom styles
├── index.html          # Home page (HTML for visual appeal)
├── Gemfile             # Ruby dependencies
└── README.md           # This file
```

## 🎨 Features

### Design & User Experience
- **Responsive Design:** Fully responsive layout that works on all devices
- **Modern UI:** Clean, professional design with smooth animations
- **Math Support:** MathJax integration for mathematical expressions
- **Fast Loading:** Optimized CSS and minimal JavaScript
- **Accessibility:** Keyboard navigation and screen reader friendly

### Content Management
- **Pure Markdown:** All content pages written in Markdown for easy editing
- **Maintainable Structure:** Organized file structure for easy updates
- **SEO Optimized:** Meta tags, structured data, and semantic HTML
- **Social Integration:** Links to professional social media profiles

### Technical Features
- **Jekyll Static Site:** Fast, secure static site generation
- **GitHub Pages Ready:** Can be deployed to GitHub Pages
- **Custom CSS Variables:** Easy theme customization
- **Mobile Navigation:** Hamburger menu for mobile devices

## ✏️ Editing Content

### Adding New Pages

1. Create a new Markdown file in the `_pages/` directory
2. Add front matter with layout, title, and permalink:
   ```yaml
   ---
   layout: page
   title: Your Page Title
   subtitle: Optional subtitle
   permalink: /your-page/
   ---
   ```
3. Write your content in Markdown
4. Update navigation in `_config.yml` if needed

### Editing Existing Pages

- **Education:** Edit `_pages/education.md`
- **Achievements:** Edit `_pages/achievements.md`
- **CV:** Edit `_pages/cv.md`
- **Contact:** Edit `_pages/contact.md`
- **Home:** Edit `index.html`

### Customizing Appearance

- **Colors:** Modify CSS variables in `assets/css/main.css`
- **Fonts:** Update font imports in `_layouts/default.html`
- **Layout:** Modify layouts in `_layouts/` directory

## 🔧 Configuration

### Site Settings (`_config.yml`)
- Update personal information
- Modify navigation menu
- Change social media links
- Adjust SEO settings

### Key Configuration Options:
```yaml
title: Your Name - Mathematics Portfolio
email: your.email@example.com
description: Your description
author:
  name: Your Name
  email: your.email@example.com
  linkedin: your-linkedin-profile
  github: your-github-username
```

## 📱 Responsive Features

- **Mobile-First Design:** Optimized for mobile devices
- **Flexible Grid:** Content adapts to screen size
- **Touch-Friendly:** Large touch targets for mobile users
- **Fast Loading:** Minimal resource usage on mobile networks

## 🎓 Mathematical Content

### MathJax Integration
Write mathematical expressions using LaTeX syntax:
- Inline math: `$E = mc^2$`
- Display math: `$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$`

### Example Usage:
```markdown
The Riemann Zeta function is defined as:
$$\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s}$$

For complex analysis, we often use $|z| = \sqrt{a^2 + b^2}$.
```

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `gh-pages`)

### Other Hosting Platforms
- **Netlify:** Connect GitHub repository for automatic deployments
- **Vercel:** Import repository and deploy
- **Custom Server:** Build with `bundle exec jekyll build` and serve `_site/` directory

## 🛠️ Development

### Local Development
```bash
# Install dependencies
bundle install

# Start development server with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

### Adding Features
- New layouts: Add to `_layouts/` directory
- New styles: Extend `assets/css/main.css`
- New functionality: Add JavaScript to `_layouts/default.html`

## 📝 Content Guidelines

### Writing Style
- Use clear, professional language
- Include relevant keywords for SEO
- Structure content with proper headings
- Add links to external resources when appropriate

### Markdown Features
- Use `##` for main sections
- Use `###` for subsections
- Add emphasis with `**bold**` and `*italic*`
- Create lists with `-` or `1.`
- Add links: `[text](url)`

## 🔍 SEO Features

- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags for social sharing
- Structured data markup
- Optimized images with alt text

## 📞 Support

For questions about customizing or extending this portfolio:

1. **Documentation:** Check Jekyll documentation
2. **Issues:** Common problems and solutions in project issues
3. **Community:** Jekyll community forums and resources

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Jekyll, designed for academic excellence and professional presentation.**
