#!/bin/bash

# Install dependencies in all workspaces
npm install

# Install dependencies in each app
cd apps/shell && npm install && cd ../..
cd apps/feature-a && npm install && cd ../..
cd apps/feature-b && npm install && cd ../..
cd apps/feature-admin && npm install && cd ../..

# Start the development server
cd apps/shell && npm run dev 