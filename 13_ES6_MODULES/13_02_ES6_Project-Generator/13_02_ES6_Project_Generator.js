/*
Setting up 


1. Set up NMP (done)
2. Import devcamp-js-builder -g (GLOBALLY!) (may be required to import it globally as root, try to avoid this when posible)
3. Start by typing js-generate. A "new creation" menu will be shown:

? What project template would you like to generate? (Use arrow keys)
❯ es6-starter 
  react-bootstrap 
  react-redux 
  react-redux-router 
  react-router 
  react-skeleton 
  react-typescript 


4. We've created a simple ES6-Starter at ../13_00_testNode/

5. Close, into ./src/ we got bootstrap.js (index.js).

6. Before Initializing the possible dependences by `npm install`, try to refresh them, by performing the necessary changes in the code ot be updated to the new features/methods/etc. 

7. Once initialised by `npm start`, a record like this is shown in terminal:

$ npm start

> es6-starter@1.0.0 start
> webpack serve --config webpack/dev.config.js

<i> [webpack-dev-server] [HPM] Proxy created: /node-0  -> https://api.github.com
<i> [webpack-dev-server] [HPM] Proxy created: /node-1  -> https://registry.npmjs.org
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:3000/, http://[::1]:3000/
<i> [webpack-dev-server] Content not from webpack is served from './13_00_testNode/static' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
assets by path *.js 3.39 MiB
  asset vendors.js 3.39 MiB [emitted] (name: vendors) (id hint: vendor)
  asset app.js 3.67 KiB [emitted] (name: app)
asset index.html 486 bytes [emitted]
asset favicon.ico 0 bytes [emitted]
runtime modules 29.7 KiB 14 modules
modules by path ./node_modules/core-js/ 609 KiB 584 modules
modules by path ./node_modules/core-js-pure/ 132 KiB 127 modules
modules by path ./node_modules/@pmmmwh/react-refresh-webpack-plugin/ 53.2 KiB 23 modules
modules by path ./node_modules/webpack-dev-server/client/ 84.8 KiB 8 modules
modules by path ./node_modules/webpack/hot/*.js 5.17 KiB 4 modules
modules by path ./node_modules/html-entities/dist/commonjs/*.js 34.2 KiB 4 modules
modules by path ./src/*.js 2.36 KiB
  ./src/vendor.js 1.3 KiB [built] [code generated]
  ./src/bootstrap.js 1.06 KiB [built] [code generated]
modules by path ./node_modules/react-refresh/ 12.3 KiB
  ./node_modules/react-refresh/runtime.js 218 bytes [built] [code generated]
  ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js 12.1 KiB [built] [code generated]
+ 6 modules
webpack 5.99.5 compiled successfully in 2722 ms


***
The server is already started at https://localhost:3000

*/

