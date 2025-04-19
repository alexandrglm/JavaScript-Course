/*
 * 2025 Update fixed:
 * Refactorized code to newer context array-alike system
*/

module.exports = {
    '/node-0' : {
      target: 'https://api.github.com',
      changeOrigin: true,
      secure: true,
      headers: {
        Host: 'api.github.com',
        Cookie: ''
      }
    },
    pathRewrite: (path) => path.replace(/^\/node-0/, '')
  },
{
  '/node-0' : {
    target: 'https://registry.npmjs.org',
    changeOrigin: true,
    secure: true,
    headers: {
      Host: 'registry.npmjs.org',
      Cookie: ''
    }
  },
  pathRewrite: (path) => path.replace(/^\/node-1/, '')
};
