#!/bin/bash

read -rp "enter the new version (e.g., 1.2.3): " version

if [[ ! $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "invalid version format. Use semantic versioning like '1.2.3'"
  exit 1
fi

read -rp "release version $version? (y/n): " confirm
if [[ $confirm != "y" ]]; then
  echo "release canceled"
  exit 1
fi

echo "updating version in meta.toml"
sed -i '' "s/themeVersion = \".*\"/themeVersion = \"$version\"/" data/til/meta.toml

echo "generating changelog"
git-chglog --next-tag "v$version" -o CHANGELOG.md

echo "committing changes"
git add data/til/meta.toml CHANGELOG.md
git commit -m "chore: release v$version"

echo "tagging code as v$version"
git tag "v$version"

echo "pushing to remote"
git push origin main
git push origin "v$version"

echo "release process completed for version $version"
