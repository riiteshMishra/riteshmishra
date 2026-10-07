# Data

The `/data` directory contains structured static data used throughout the portfolio.

It is divided into two main categories:

```text
/data
├── layout/
└── content/
```

## Layout

The `layout` directory contains data related to the common website layout and elements that can appear across multiple pages.

Examples:

```text
/data/layout
├── navigation.ts
├── footer.ts
├── social-links.ts
└── index.ts
```

Typical data includes:

- Navigation items
- Footer links
- Social links
- Common layout links
- Header-related configuration
- Other reusable layout configuration

---

## Content

The `content` directory contains the actual portfolio content.

Examples:

```text
/data/content
├── home.ts
├── about.ts
├── projects.ts
├── skills.ts
├── experience.ts
├── services.ts
└── index.ts
```

Typical data includes:

- Home page content
- About page content
- Projects
- Skills
- Experience
- Services
- Education
- Testimonials
- Other page-specific content

---

## Rule

Keep **layout-related data** inside `/data/layout` and **portfolio/page content** inside `/data/content`.

```text
layout → How the website is structured
content → What the website says
```
