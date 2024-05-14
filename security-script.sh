#!/usr/bin/env bash
npm audit fix
npm install --save-dev html-webpack-plugin@5.5.0
npm update
npm audit fix --audit-level=critical --force
npm audit --audit-level=critical