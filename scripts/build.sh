#!/usr/bin/env bash

set -e
REGION="ap-southeast-2"
echo "Building the application for $REGION"

# Remove previous build
rm -rf dist
rm -rf build

# Create build folder
mkdir -p dist
mkdir -p build

# Compile JS files to build folder
npx esbuild src/functions/**/*.js \
  --bundle \
  --minify \
  --sourcemap \
  --outdir=dist \
  --platform=node \
  --target=node16 \
  --format=cjs

echo "Creating zip file..."

# zip the built code into the build folder
zip -r build/slz-lambda-fns.zip dist/

echo "Build complete!"