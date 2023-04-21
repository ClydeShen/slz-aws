#!/usr/bin/env bash

set -e
REGION="ap-southeast-2"
DIST_FOLDER="../slz-infrastructure/dist"
BUILD_FOLDER="../slz-infrastructure/build"
# BUILD_FOLDER="build"
echo "Building the application for $REGION"

# Remove previous build
rm -rf $DIST_FOLDER
rm -rf $BUILD_FOLDER

# Create build folder
mkdir -p $DIST_FOLDER
mkdir -p $BUILD_FOLDER

# Compile JS files to build folder
npx esbuild src/functions/**/*.js \
  --bundle \
  --minify \
  --sourcemap \
  --outdir=$DIST_FOLDER \
  --platform=node \
  --target=node16 \
  --format=cjs

echo "Creating zip file..."

# cd dist
# # zip the built code into the build folder
# zip -r ../$BUILD_FOLDER/slz-lambda-fns.zip ./*

# cd ..
echo "Build complete!"