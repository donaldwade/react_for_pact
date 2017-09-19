# How to get set up

## Things you need

* NVM
* Node
* Yarn
* Webpack
* Babel
* React
* Tape (BlueTape)

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
<script src="bundle.js"></script>
</body>
</html>
```

* Create `src/index.js`
```javascript
import _ from 'lodash';

const component() => {
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




