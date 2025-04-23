# Nuxt Standalone Feature

A standalone Nuxt.js feature module that can be easily integrated into any Nuxt project.

## Prerequisites

- Node.js 16.x or later
- npm or yarn

## Quick Start

1. Clone the repository:
```bash
git clone [repository-url]
cd nuxt-standalone-feature
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static files
- `npm run preview` - Preview production build

## Features

- Built with Nuxt 3
- Color mode support
- TailwindCSS integration
- Icon support

## Project Structure

```
nuxt-standalone-feature/
├── pages/           # Route pages
├── app.vue         # Main application file
├── nuxt.config.ts  # Nuxt configuration
└── package.json    # Project dependencies
```

## Integration Guide

To integrate this feature into your existing Nuxt project:

1. Copy the required components and pages
2. Install the dependencies:
```bash
npm install @nuxtjs/color-mode @nuxtjs/tailwindcss nuxt-icon
```

3. Update your `nuxt.config.ts` to include the necessary modules

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 