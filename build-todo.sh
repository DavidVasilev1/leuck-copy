#!/bin/bash

cd _todo-ts

pnpm install
pnpm run build

[ -d ../todos ] && rm -rf ../todos
mv dist/ ../todos
sed -i.bak "s/\/assets\//\/todos\/assets\//g" ../todos/index.html
