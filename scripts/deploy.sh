#!/usr/bin/env bash

echo -e "\033[36mDeploying...... \033[0m"

npm run build

set -e

# gh-pages deploy
cd dist
git init
git add --all
git commit -m 'deploy'
git push -f git@github.com:Save404/agriculture-fe.git master:gh-pages

cd -

echo -e "\033[33mDeploy done ~~~ \033[0m"
