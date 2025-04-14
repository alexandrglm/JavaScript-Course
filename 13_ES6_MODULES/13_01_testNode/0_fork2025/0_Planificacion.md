
## 1. Evaluación

- npm audit / nmp outdated / 

- Antiguas VS Actuales:
Para ES6 Starter:  
```
Upgrading /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/package.json
[====================] 26/26 100%

 autoprefixer              ^9.1.0  →  ^10.4.21
 babel-eslint              ^8.2.6  →   ^10.1.0
 babel-loader              ^7.1.5  →   ^10.0.0
 babel-polyfill           ^6.23.0  →   ^6.26.0
 babel-preset-env          ^1.6.0  →    ^1.7.0
 babel-preset-react       ^6.1.18  →   ^6.24.1
 clean-webpack-plugin     ^0.1.16  →    ^4.0.0
 copy-webpack-plugin       ^4.5.2  →   ^13.0.0
 cross-env                 ^5.2.0  →    ^7.0.3
 eslint                    ^5.3.0  →   ^9.24.0
 eslint-loader             ^2.1.0  →    ^4.0.2
 eslint-plugin-react       ^7.1.0  →   ^7.37.5
 express                  ^4.16.3  →    ^5.1.0
 file-loader              ^1.1.11  →    ^6.2.0
 html-webpack-plugin       ^3.2.0  →    ^5.6.3
 uglifyjs-webpack-plugin   ^1.2.7  →    ^2.2.0
 url-loader                ^1.0.1  →    ^4.1.1
 webpack                  ^4.16.4  →   ^5.99.5
 webpack-cli               ^3.1.0  →    ^6.0.1
 webpack-dev-middleware    ^3.1.3  →    ^7.4.2
 webpack-dev-server        ^3.1.5  →    ^5.2.1
 webpack-merge             ^4.1.0  →    ^6.0.1
```
- Trazar TODOS los breaking changes
```
$ npm start

> es6-starter@1.0.0 start
> webpack serve --config webpack/dev.config.js

(node:89633) [DEP_WEBPACK_DEV_SERVER_PROXY_ROUTES_ARGUMENT] DeprecationWarning: Invalid proxy configuration:

{
  "/node-0": {
    "target": "https://api.github.com",
    "secure": true,
    "headers": {
      "Host": "api.github.com",
      "Cookie": ""
    }
  },
  "/node-1": {
    "target": "https://registry.npmjs.org",
    "secure": true,
    "headers": {
      "Host": "registry.npmjs.org",
      "Cookie": ""
    }
  },
  "logLevel": "info"
}

The use of proxy object notation as proxy routes has been removed.
Please use the 'router' or 'context' options. Read more at https://github.com/chimurai/http-proxy-middleware/tree/v2.0.6#http-proxy-middleware-options
(Use `node --trace-deprecation ...` to show where the warning was created)
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:3000/, http://[::1]:3000/
<i> [webpack-dev-server] Content not from webpack is served from '/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/static' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
assets by path *.js 2.23 MiB
  asset app.js 1.12 MiB [emitted] (name: app)
  asset vendor.js 1.12 MiB [emitted] (name: vendor) (id hint: vendor)
asset index.html 485 bytes [emitted]
asset favicon.ico 0 bytes [emitted]
runtime modules 55.3 KiB 26 modules
modules by path ./node_modules/core-js-pure/ 132 KiB 127 modules
modules by path ./node_modules/@pmmmwh/react-refresh-webpack-plugin/ 43.9 KiB 22 modules
modules by path ./node_modules/webpack-dev-server/client/ 84.8 KiB 8 modules
modules by path ./node_modules/webpack/hot/*.js 5.17 KiB 4 modules
modules by path ./node_modules/html-entities/dist/commonjs/*.js 34.2 KiB
  ./node_modules/html-entities/dist/commonjs/index.js 5.29 KiB [built] [code generated]
  + 3 modules
modules with errors 78 bytes [errors]
  ./src/bootstrap.js 39 bytes [built] [code generated] [1 error]
  ./src/vendor.js 39 bytes [built] [code generated] [1 error]
modules by path ./node_modules/react-refresh/ 12.3 KiB
  ./node_modules/react-refresh/runtime.js 218 bytes [built] [code generated]
  ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js 12.1 KiB [built] [code generated]
+ 5 modules

ERROR in ./src/bootstrap.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find package 'babel-plugin-transform-class-properties' imported from /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/babel-virtual-resolve-base.js
    at __node_internal_ (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:225:9)
    at new NodeError (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:195:5)
    at packageResolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:899:9)
    at moduleResolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:939:18)
    at defaultResolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:1017:15)
    at resolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:1030:12)
    at tryImportMetaResolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/files/plugins.js:149:45)
    at resolveStandardizedNameForImport (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/files/plugins.js:174:19)
    at resolveStandardizedName (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/files/plugins.js:186:22)
    at loadPlugin (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/files/plugins.js:56:7)
    at loadPlugin.next (<anonymous>)
    at createDescriptor (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-descriptors.js:140:16)
    at createDescriptor.next (<anonymous>)
    at step (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:261:32)
    at evaluateAsync (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:291:5)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:44:11
    at Array.forEach (<anonymous>)
    at Function.async (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:43:15)
    at Function.all (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:216:13)
    at Generator.next (<anonymous>)
    at createDescriptors (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-descriptors.js:102:41)
    at createDescriptors.next (<anonymous>)
    at createPluginDescriptors (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-descriptors.js:99:17)
    at createPluginDescriptors.next (<anonymous>)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/gensync-utils/functional.js:39:27
    at Generator.next (<anonymous>)
    at mergeChainOpts (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-chain.js:349:34)
    at mergeChainOpts.next (<anonymous>)
    at chainWalker (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-chain.js:316:14)
    at chainWalker.next (<anonymous>)
    at loadFileChain (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-chain.js:191:24)
    at loadFileChain.next (<anonymous>)
    at buildRootChain (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-chain.js:108:31)
    at buildRootChain.next (<anonymous>)
    at loadPrivatePartialConfig (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/partial.js:72:62)
    at loadPrivatePartialConfig.next (<anonymous>)
    at loadPartialConfig (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/partial.js:115:25)
    at loadPartialConfig.next (<anonymous>)
    at step (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:269:25)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:273:13
    at async.call.result.err.err (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:223:11)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:50:45
    at step (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:287:14)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:273:13
    at async.call.result.err.err (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:223:11)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:189:28
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/gensync-utils/async.js:67:7
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:113:33
    at step (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:287:14)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:273:13
    at async.call.result.err.err (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:223:11)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:189:28
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read/context:68:3)

ERROR in ./src/vendor.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find package 'babel-plugin-transform-class-properties' imported from /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/babel-virtual-resolve-base.js
    at __node_internal_ (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:225:9)
    at new NodeError (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:195:5)
    at packageResolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:899:9)
    at moduleResolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:939:18)
    at defaultResolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:1017:15)
    at resolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:1030:12)
    at tryImportMetaResolve (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/files/plugins.js:149:45)
    at resolveStandardizedNameForImport (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/files/plugins.js:174:19)
    at resolveStandardizedName (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/files/plugins.js:186:22)
    at loadPlugin (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/files/plugins.js:56:7)
    at loadPlugin.next (<anonymous>)
    at createDescriptor (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-descriptors.js:140:16)
    at createDescriptor.next (<anonymous>)
    at step (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:261:32)
    at evaluateAsync (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:291:5)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:44:11
    at Array.forEach (<anonymous>)
    at Function.async (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:43:15)
    at Function.all (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:216:13)
    at Generator.next (<anonymous>)
    at createDescriptors (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-descriptors.js:102:41)
    at createDescriptors.next (<anonymous>)
    at createPluginDescriptors (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-descriptors.js:99:17)
    at createPluginDescriptors.next (<anonymous>)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/gensync-utils/functional.js:39:27
    at Generator.next (<anonymous>)
    at mergeChainOpts (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-chain.js:349:34)
    at mergeChainOpts.next (<anonymous>)
    at chainWalker (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-chain.js:316:14)
    at chainWalker.next (<anonymous>)
    at loadFileChain (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-chain.js:191:24)
    at loadFileChain.next (<anonymous>)
    at buildRootChain (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/config-chain.js:108:31)
    at buildRootChain.next (<anonymous>)
    at loadPrivatePartialConfig (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/partial.js:72:62)
    at loadPrivatePartialConfig.next (<anonymous>)
    at loadPartialConfig (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/config/partial.js:115:25)
    at loadPartialConfig.next (<anonymous>)
    at step (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:269:25)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:273:13
    at async.call.result.err.err (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:223:11)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:50:45
    at step (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:287:14)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:273:13
    at async.call.result.err.err (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:223:11)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:189:28
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/@babel/core/lib/gensync-utils/async.js:67:7
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:113:33
    at step (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:287:14)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:273:13
    at async.call.result.err.err (/home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:223:11)
    at /home/dos/Desktop/DevCamps/JavaScript-Course/13_ES6_MODULES/13_00_testNode/node_modules/gensync/index.js:189:28
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read/context:68:3)

ERROR in SplitChunksPlugin
Cache group "vendor" conflicts with existing chunk.
Both have the same name "vendor" and existing chunk is not a parent of the selected modules.
Use a different name for the cache group or make sure that the existing chunk is a parent (e. g. via dependOn).
HINT: You can omit "name" to automatically create a name.
BREAKING CHANGE: webpack < 5 used to allow to use an entrypoint as splitChunk. This is no longer allowed when the entrypoint is not a parent of the selected modules.
Remove this entrypoint and add modules to cache group's 'test' instead. If you need modules to be evaluated on startup, add them to the existing entrypoints (make them arrays). See migration guide of more info.

webpack 5.99.5 compiled with 3 errors in 1634 ms
```


## 2. Primera priorización

- Criticas:     npm audit --severity critical

- Funcionales:  

- React y dependencias de todos los templates


- npx npm-check-updates -u


## 3. Actuación

1. Desarrollo:      eslint, babel, ...

2. Principales:     react-x

3. Secundarias/Resto:

