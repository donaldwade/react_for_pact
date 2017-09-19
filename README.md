# How to get set up

## Things you need

* NVM
* Node
* Yarn
* Webpack
* Babel
* React
* Tape (BlueTape)
* Pact

## Install Node Version Manager (NVM)
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
source ~/.bashrc
```

## Install node
```bash
nvm install --lts
```

## Install yarn
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

## Initialise
```bash
yarn init
```

## Install webpack
```bash
yarn add -D webpack
```

## Check things are ok
* Create `dist/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <div id="root"></div>
<script src="bundle.js"></script>
</body>
</html>
```

* Create `src/index.js`
```javascript
import _ from 'lodash';

const component() => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
```

## Install babel
```bash
yarn add -D babel-cli babel-preset-env
```

## Create a `webpack.config.js` file
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

### Edit `package.json` to add a build script and configure babel
```diff
{
  "name": "react_for_pact",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:donaldwade/react_for_pact.git",
  "license": "MIT",
+ "babel": {
+   "presets": ["env"]
+ },
+ "scripts": {
+   "build": "webpack"
+ },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.0",
    "webpack": "^3.6.0"
  },
  "dependencies": {
    "lodash": "^4.17.4"
  }
}
```

## Test that things work properly
```
yarn build
```

## Install React and React DOM
```
yarn add react react-dom
```

## Add babel-loader for webpack
```bash
yarn add -D babel-loader
```

## Configure webpack to use babel-loader

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
```

## Add the babel react preset
```bash
yarn add -D babel-preset-react
```
In `package.json`
```json
"babel": {
  "presets": [
    "env",
    "react"
  ]
}

```
## Add blue-tape for testing
```bash
yarn add blue-tape colortape
```

## Add babel-register
```
yarn add -D babel-register
```

Modify `package.json`
```json
{
  "name": "react_for_pact",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:donaldwade/react_for_pact.git",
  "license": "MIT",
  "babel": {
    "presets": [
      "env",
      "react"
    ]
  },
  "scripts": {
    "build": "webpack",
    "test": "tape -r babel-register **/*.test.js | colortape"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.0",
    "babel-preset-react": "^6.24.1",
    "babel-register": "^6.26.0",
    "webpack": "^3.6.0"
  },
  "dependencies": {
    "blue-tape": "^1.0.0",
    "colortape": "^0.1.2",
    "lodash": "^4.17.4",
    "react": "^15.6.1",
    "react-dom": "^15.6.1"
  }
}

```

