#!usr/bin/env bash
# exitt on error
set -o errexit

npm install
npm run build
npm run typeorm migration:run -- -d dist/data-source