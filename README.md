# Webpack Basics

[![N|Solid](https://i.blogs.es/a4a869/webpack/original.png)](https://webpack.github.io/)

This is what we have completed so far:

  - [x] Get a local copy of this repo.
  - [x] Get webpack (dev server) up and running, with the dist/index.html as the root.
  - [x] Get all .js files for the listed components (footer and header) inside the 'scr' folder into the single 'dist/assests/bundle.js' file.

  Now, what about using some loaders?

  We decided to use es6 classes in our project, and at the moment of this writing they are not supported by all browsers.
You can check what's the current status here: [es6 classes Supported browsers](https://caniuse.com/#search=classes).

So, let's add a feature to our webpack project to transpile es6 to es5. 
Try to do the following:

- [ ]  Add babel-loader and babel-preset-es2015
- [ ] Modify the webpack.config.js file to make the es6 .js files transpile to es5 into the dist/assets/bundle.js final asset.
