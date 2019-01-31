[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

# HIDEOUT PARSE

Parse Path Of Exile.

## Installation

```sh
yarn add hideout-parse

# or

npm install hideout-parse
```

## Usage

JavaScript

```html
<input type="file" id="files" name="files[]" />
```

```js
import HideoutParse from 'hideout-parse';

window.onload = () => {
  document.getElementById('files').onchange = readFile;
};

function readFile() {
  file = this.files[0];
  var fReader = new FileReader();           
  fReader.onload = (e) => {
    const parse = HideoutParse(e.target.result);
    console.log(parse);
  };
  fReader.readAsText(file);
}
```

Node.js

```js
import fs from 'fs';
import HideoutParse from 'hideout-parse';

const file = fs.readFileSync('./test.hideout');
const parse = HideoutParse(file.toString());

console.log(parse);
```

## License

[MIT](http://opensource.org/licenses/MIT)
