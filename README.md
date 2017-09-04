# Webpack Basics

[![N|Solid](https://i.blogs.es/a4a869/webpack/original.png)](https://webpack.github.io/)

This is what we have completed so far:

  - [x] Get a local copy of this repo.
  - [x] Get webpack (dev server) up and running, with the dist/index.html as the root.
  - [x] Get all .js files for the listed components (footer and header) inside the 'scr' folder into the single 'dist/assests/bundle.js' file.
  - [x] Add babel-core, babel-loader and babel-preset-es2015.
  - [x] Modify the webpack.config.js file to make the es6 .js files transpile to es5 into the dist/assets/bundle.js final asset.

Pretty cool.

Let's now use sass in our project. 
The idea is to have every component with its own .scss file (already there for you), having them gather into a single file (main.scss -> already there as well), and finally, get them compiled into the dist/assets/main.css file

