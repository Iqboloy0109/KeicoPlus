#!/bin/bash

# PRODUCTION DEPLOYMENT

set -e

echo "🔄 Updating code from repository..."
git reset --hard
git checkout master
git pull origin master

echo "🗑️  Removing old dist folder..."
rm -rf dist

echo "🛑 Stopping existing containers..."
docker compose down || true

echo "🔨 Building and starting containers..."
docker compose up -d --build

echo "✅ Deployment completed!"
echo "🌐 Application running on http://localhost:6004"