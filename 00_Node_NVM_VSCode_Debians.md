# Node.js Isolated Installation & VS Code Debugging Guide

## 1. Install NVM

```bash
# From https://github.com/nvm-sh/nvm

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash 
```

### 2. Reload Shell Configuration

```bash
source ~/.bashrc     # or ~/.zshrc if using Zsh or whatever you use
```

### 3. Install Node.js

```bash
# As 2025 March, 22.14.0 is the LTS

nvm ls-remote           # Check latest versions available

nvm install 22.14.0     # Install specific version (This, the latest LTS version)

nvm use 22.14.0         # Use this version
```

### 4. Verify Installation

```bash
node --version

which node         # Note this path for VS Code configuration
```

## Configure VS Code Debugging

Create `.vscode/launch.json` in your project:

```json
{
     "version": "0.2.0",
     "configurations": [
 {
     "type": "node",
     "request": "launch",
     "name": "Debug Current File",
     "skipFiles": ["<node_internals>/**"],
     "program": "${file}",
     "runtimeExecutable": "/home/youruser/.nvm/versions/node/v22.14.0/bin/node",
     "console": "integratedTerminal"
 }
 ]
}
```

> **Note**: Replace `/home/youruser/...` with the path from `which node`

## Usage Instructions

1. Open any JavaScript file in your project

2. Set breakpoints by clicking left of line numbers

3. Press `F5` or:
   
   - Open Run and Debug view (`Ctrl+Shift+D`)
   
   - Select "Debug Current File"
   
   - Click green play button

## Optional: Nodemon Configuration

For automatic restart on file changes:

1. Install nodemon:

```bash
npm install -g nodemon
```

2. Add to `launch.json`:

```js
{
     "type": "node",
     "request": "launch",
     "name": "Debug with Nodemon",
     "runtimeExecutable": "nodemon",
     "program": "${file}",
     "restart": true,
     "console": "integratedTerminal"
}
```

This setup keeps Node.js versions isolated per project and enables seamless debugging in VS Code.
