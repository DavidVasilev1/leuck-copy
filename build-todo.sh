#!/bin/bash

cd _todo-ts || exit

pnpm install
pnpm run build

cp dist/index.js ../assets/js/todos.js
