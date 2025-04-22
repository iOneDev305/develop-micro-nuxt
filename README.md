# Micro Dashboard

A micro frontend dashboard built with Nuxt 3, featuring a modular architecture with independent features that can be developed and deployed separately.

## Project Structure

```
/micro-dashboard/
├── apps/
│   ├── shell/            # Main Nuxt 3 application
│   ├── feature-a/        # Analytics Dashboard Feature
│   └── feature-b/        # User Management Feature
├── packages/
│   ├── shared/           # Shared components, composables, assets
├── package.json          # Workspaces setup
└── README.md            # This file
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Start production server:
```bash
npm run start
```

## Features

- 🏗 Modular architecture with independent features
- 🔄 Shared components and utilities
- 🚀 Fast development with Hot Module Replacement
- 📦 Optimized production build
- 🎨 Modern UI with responsive design

## Development

Each feature is developed as an independent Nuxt 3 application and integrated into the main shell application. This allows for:

- Independent development and deployment
- Isolated testing and maintenance
- Scalable feature additions
- Shared component library

## Contributing

1. Create a new feature in the `apps` directory
2. Add the feature to the shell's `nuxt.config.ts`
3. Implement your feature using the shared components
4. Submit a pull request 