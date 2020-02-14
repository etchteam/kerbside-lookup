#!/bin/bash

if [ "$1" == "" ]; then
  echo "You must supply a version number"
  exit 1
fi

npm run dist

npm version $1 --no-git-tag-version

git add -f package.json package-lock.json dist

git commit -m v$1

git tag v$1

git push origin v$1
