# Personal Portfolio

This is a modern personal portfolio website built using Next.js with the latest App Router, TypeScript, Tailwind CSS, shadcn/ui, Lucide icons, and Framer Motion. The portfolio showcases projects, skills, and provides a contact form for inquiries.

## Features

- **Responsive Design**: The website is fully responsive and looks great on all devices.
- **Dark/Light Theme Toggle**: Users can switch between dark and light modes.
- **Animated Components**: Utilizes Framer Motion for smooth animations.
- **SEO Optimized**: Includes metadata for better search engine visibility.
- **Contact Form**: A functional contact form that uses API routes for submissions.

## Project Structure

```
portfolio
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── head.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── projects
│   │   │   └── page.tsx
│   │   ├── resume
│   │   │   └── page.tsx
│   │   └── api
│   │       └── contact
│   │           └── route.ts
│   ├── components
│   │   ├── ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── modal.tsx
│   │   │   └── dropdown.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── project-card.tsx
│   │   ├── testimonial.tsx
│   │   ├── contact-form.tsx
│   │   └── theme-toggle.tsx
│   ├── lib
│   │   ├── analytics.ts
│   │   └── mailer.ts
│   ├── hooks
│   │   └── use-theme.ts
│   ├── styles
│   │   └── tailwind.css
│   └── types
│       └── index.ts
├── .gitignore
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`.

## Technologies Used

- **Next.js**: For server-side rendering and static site generation.
- **TypeScript**: For type safety and better development experience.
- **Tailwind CSS**: For utility-first CSS styling.
- **shadcn/ui**: For UI components.
- **Lucide Icons**: For scalable vector icons.
- **Framer Motion**: For animations and transitions.

## License

This project is licensed under the MIT License. See the LICENSE file for details.