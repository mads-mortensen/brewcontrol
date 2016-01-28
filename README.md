# Brewcontrol

Application for managing small-scale beer brewing.

### Features
* Create or import beer
* Customize beer
* Add
    * Components (ex. brewing calendar, color, style description)
    * Data source (API endpoint, local file, etc.) to update the beer data automatically (temperature, presure, gravity and more)
    * Control access points, to control brewing from anywhere

### Stack

* [Node.js]
* [MongoDB]
* [Express]
* [Vue.js]

[Webpack] is used with [vue-loader] to support one-file Vue components.

[vue-loader]: <http://vuejs.github.io/vue-loader/>
[Node.js]: <https://nodejs.org/>
[Express]: <http://expressjs.com/>
[Vue.js]: <http://vuejs.org/>
[Webpack]: <https://webpack.github.io/>

### Version
No releases yet. In early stage.

### Installation

You need [Gulp] and [MongoDB].

[Gulp]: <http://gulpjs.com/>
[MongoDB]: <https://www.mongodb.org/>

**1)** *Install dependencies*
```sh
$ npm install
```
**2)** *Run gulp*
```sh
$ gulp
```
> Default task will also start watch task for Webpack (JavaScript and Vue components) and style (Sass)

**3)** *Make sure **MongoDB** is running*

**4)** *Run Express*
```sh
$ npm start
```

### License
[MIT license]

[MIT license]: <https://tldrlegal.com/license/mit-license>