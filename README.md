# Ami Ashish Buch - Academic Portfolio

A professional academic portfolio website built with Next.js and Tailwind CSS, showcasing the work and research of Computer Science undergraduate Ami Ashish Buch.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modern UI**: Clean, minimalistic design with shadcn/ui components
- **Modular Architecture**: Easy to extend and maintain
- **Academic Focus**: Tailored for academic and research presentation
- **Self-Hostable**: Not locked to any specific platform

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **TypeScript**: Full TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd ami-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

### Static Export (Optional)

To generate a static export:

\`\`\`bash
npm run build
npm run export
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── research/          # Research experience
│   ├── resume/            # Resume page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   └── theme-provider.tsx # Theme provider
├── data/                 # Data files
│   ├── projects.ts       # Projects data
│   └── research.ts       # Research data
├── lib/                  # Utility functions
└── public/               # Static assets
\`\`\`

## Customization

### Adding Projects

Edit \`data/projects.ts\` to add or modify projects:

\`\`\`typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo.com"
  }
]
\`\`\`

### Adding Research Experience

Edit \`data/research.ts\` to add or modify research entries:

\`\`\`typescript
export const research = [
  {
    title: "Research Title",
    institution: "Institution Name",
    duration: "Date Range",
    advisor: "Advisor Name",
    description: "Research description...",
    contributions: ["Contribution 1", "Contribution 2"],
    technologies: ["Tech1", "Tech2"],
    outcomes: ["Outcome 1", "Outcome 2"]
  }
]
\`\`\`

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in \`tailwind.config.ts\`
- Global styles in \`app/globals.css\`
- Component-specific styles inline

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Self-Hosting

1. Build the project: \`npm run build\`
2. Start the server: \`npm start\`
3. Or use a process manager like PM2

### Static Export

1. Add \`output: 'export'\` to \`next.config.js\`
2. Run \`npm run build\`
3. Serve the \`out\` directory

## Contact Information

- **Email**: abuch2@wisc.edu
- **LinkedIn**: [Ami Buch](https://www.linkedin.com/in/ami-buch-1a0874212/)
- **Institution**: University of Wisconsin-Madison

## License

This project is open source and available under the [MIT License](LICENSE).
\`\`\`
# amibuch.github.io
