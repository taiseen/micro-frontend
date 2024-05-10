
## Inside a empty folder, run...
- install 
    - npm init -y
    - npm install html-webpack-plugin nodemon webpack webpack-cli webpack-dev-server
    - npm install echarts

- create 
    - public directory & index.html file...
        - add id inside tag for set dynamic value
    - src directory & index.js file...
        - add needful code in js for rendering...

- config -> webpack.config.js file
    - require('html-webpack-plugin')
    - use it inside --> module.exports = {... , plugins: [array...]}
    
- npm run start

## Module Federation - (MFD)
- the process of loading separately complied app at runtime