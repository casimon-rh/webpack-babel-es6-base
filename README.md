# webpack-babel-es6-base

Plantilla inicial para trabajar con proyectos basados en JQuery + Bootstrap y Webpack

## Built With

- [Babel](https://babeljs.io/) - JavaScript compiler
- [Webpack](https://webpack.js.org/) - Module bundler
- [Bootstrap 4](http://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://www.npmjs.com/package/husky) - Git Hooks


## Estructura de directorios

    .
    ├── .vscode                 # VS Code Config
    │   ├── launch.json
    │   └── settings.json
    ├── assets                  # Assets directory
    ├── css                     # Stylesheets
    │   └── index.css               # Main style
    ├── dist                    # Webpack results
    ├── js                      # Javascript Code
    │   ├── index.js                # Main Javascript File
    │   └── other.js                # Aditional Javascripts, import by modules (ES6)
    ├── .dockerignore           # Exclude node_modulesand docker files from docker build
    ├── .eslintrc.yml           # ESLint config
    ├── .gitignore              # Git ignore
    ├── .prettierrc             # Prettier style
    ├── baseLocation.conf       # Docker nginx config
    ├── baseServer.conf         # Docker nginx config
    ├── Dockerfile              # Docker image
    ├── entrypoint.sh           # Prepare Nginx Docker config
    ├── favicon.ico             # Favicon
    ├── index.html              # Main html file
    ├── package-lock.json       # Node dependencies
    ├── package.json            # Node dependencies
    ├── README.md 
    ├── rebuild.sh              # Automation of docker builds
    ├── webpack.config.js       # Webpack Dev Instructions
    └── webpack.config.prod.js  # Webpack Prod Instructions
