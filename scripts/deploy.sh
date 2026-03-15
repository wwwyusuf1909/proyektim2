#!/bin/bash

# Simple deployment script for the Link Hub
echo "Deploying the Link Hub..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
fi

# Add files
git add .

# Commit changes
git commit -m "Deployment update: $(date)"

# Push to origin
git push origin main

echo "Deployment complete!"
