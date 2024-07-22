#!/bin/bash

# Run yarn build
yarn build

# Check if build was successful
if [ $? -eq 0 ]; then
  # Build successful, add changes and commit
  # git add .
  # git commit -m "Build successful"

  # Push changes
  git push origin main
else
  # Build failed
  echo "Build failed, deployment aborted."
fi