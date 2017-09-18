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
* Create index.html

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

## Install babel
