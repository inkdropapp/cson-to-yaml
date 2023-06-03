# A quick converter from CSON to YAML

```sh
npm i @inkdropapp/cson-to-yaml
```

## Usage

```js
import { cson2yaml } from '../'
import YAML from 'js-yaml'

const cson = `array: [
  1
  2
  3
]`
const yaml = cson2yaml(cson)
const json = YAML.load(yaml)
```
