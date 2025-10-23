# https://jerrysam3912.github.io/
# Pink Pastel Multipage Portfolio
**Documentation / Project Report**

## 1. Overview
The **Pink Pastel Multipage Portfolio** is a modern, responsive website built with pure **HTML5, CSS3**, and lightweight **JavaScript**.  
It showcases a clean, elegant aesthetic using a pastel pink color palette and soft shadows, designed as a personal portfolio template.

The project demonstrates the ability to organize a multi-page static website using **one single CSS file** while maintaining consistent visual design and responsiveness.

---

## 2. Objectives
- Build a multi-page personal portfolio (Home, About, Projects, Gallery, Blog, Contact, Map, Policy).
- Maintain **only one CSS file** (`assets/css/style.css`) for all pages.
- Implement a consistent pastel theme and smooth UI motion.
- Ensure clean structure, reusability, and responsive design across devices.

---

## 3. Technical Stack
| Component | Description |
|------------|--------------|
| **HTML5** | Semantic structure using `<header>`, `<main>`, and `<footer>`. |
| **CSS3 (Single file)** | Modern variables, gradients, shadows, and responsive grid. |
| **JavaScript (reveal.js)** | Adds a scroll-based fade-in effect with IntersectionObserver. |
| **Responsive Design** | Works seamlessly on desktop, tablet, and mobile. |
| **SVG Assets** | Placeholder illustrations for UI mockups. |

---

## 4. Folder Structure
```
portfolio-multipage-pink/
│
├── index.html
├── about.html
├── projects.html
├── gallery.html
├── blog.html
├── contact.html
├── map.html
├── policy.html
│
└── assets/
    ├── css/
    │   └── style.css        # The only stylesheet for all pages
    ├── js/
    │   └── reveal.js        # Minimal JS for on-scroll animations
    └── img/
        ├── ph1.svg
        ├── ph2.svg
        └── ph3.svg
```

---

## 5. Design System

### 🎨 Color Palette
| Name | Code | Usage |
|------|------|--------|
| Pink 500 | `#ff69b4` | Primary accent |
| Rose 500 | `#ec4899` | Gradient blend |
| Surface | `#171721` | Card / section background |
| Text | `#f8f9fa` | Primary text |
| Muted | `#a6adb4` | Secondary text |

### 🧭 Layout
- Sticky header with glassmorphism blur.  
- Balanced section spacing and readable typography.  
- Auto-fit grid layout using `minmax(260px, 1fr)` for project cards.  
- Soft hover shadows and smooth scaling transitions.

### ✨ Animation
- Elements reveal smoothly when scrolled into view.  
- Motion automatically disabled if user prefers reduced motion.

---

## 6. Page Overview
| Page | Purpose |
|------|----------|
| **Home** | Intro and highlights. |
| **About** | Personal summary and skill set. |
| **Projects** | Portfolio showcase with cards and demo buttons. |
| **Gallery** | Visual previews or UI mockups. |
| **Blog** | Short posts and thoughts. |
| **Contact** | Message form with name, email, and textarea. |
| **Map** | Placeholder map area for office or study location. |
| **Policy** | Privacy and terms of use. |

---

## 7. Key Features
✅ Fully responsive layout  
✅ One single CSS file across all pages  
✅ Soft pastel theme and clean visual hierarchy  
✅ Smooth reveal animations  
✅ Semantic HTML and easy scalability  

---

## 8. Future Enhancements
- Add **light/dark mode toggle**.  
- Connect the **contact form** to backend email or API.  
- Add **resume/CV** or **project showcase page**.  
- Optimize CSS and preload web fonts for better performance.

---


