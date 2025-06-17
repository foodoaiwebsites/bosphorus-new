#!/usr/bin/env bash
set -euo pipefail
 
# Move to the repo root
cd "$(git rev-parse --show-toplevel)"
 
# Ensure we’re not in a detached HEAD or bare repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not inside a valid Git working tree."
  exit 1
fi
 
# Remove existing submodule entry (if any)
if git config --file .gitmodules --get-regexp "^submodule\.src/submodule/table-ordering\." > /dev/null 2>&1; then
  echo "Removing existing submodule config..."
  git submodule deinit -f src/submodule/table-ordering || true
  git rm -f src/submodule/table-ordering || true
  rm -rf .git/modules/src/submodule/table-ordering
fi
 
# Clean local content dir if needed
rm -rf src/submodule/table-ordering
 
# Add the submodule
echo "Adding submodule..."
git submodule add -f "https://foodoaiwebsites:${GITHUB_REPO_CLONE_TOKEN}@github.com/foodoaiwebsites/shared-table-order-component.git" src/submodule/table-ordering
 
# Sync & init
git submodule sync
git submodule update --init --recursive