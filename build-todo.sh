#!/bin/bash

cd _todo-ts

npm install
npm build

[ -d ../todos ] && rm -rf ../todos
mv dist/ ../todos
sed -i.bak "s/\/{{site.baseurl}}\/\/assets\//\/todos\/assets\//g" ../todos/index.html
