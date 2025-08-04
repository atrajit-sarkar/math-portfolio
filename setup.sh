#!/bin/bash

# Setup script for Jekyll Math Portfolio
echo "Setting up Jekyll Math Portfolio..."

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "Ruby is not installed. Please install Ruby first."
    exit 1
fi

# Check if Bundler is installed
if ! command -v bundle &> /dev/null; then
    echo "Installing Bundler..."
    gem install bundler
fi

# Install dependencies
echo "Installing Jekyll and dependencies..."
bundle install

# Build the site
echo "Building the site..."
bundle exec jekyll build

echo "Setup complete! Run 'bundle exec jekyll serve' to start the development server."
