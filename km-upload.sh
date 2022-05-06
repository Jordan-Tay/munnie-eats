#!/bin/bash

echo "What changes have you made?"
read commit_message
read -p "Have you verified your changes locally (y/n): " verified
if [ $verified = y ]
then
  git add .
  git commit -m "$commit_message"
  npm run deploy
  git push
else
  echo "Please verify your changes, run:"
  echo "  npm start"
fi