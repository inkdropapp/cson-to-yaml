import { cson2yaml } from '../'
import YAML from 'js-yaml'
import fs from 'fs'
import path from 'path'

test('Basic', () => {
  const cson = `array: [
  1
  2
  3
]`
  const yaml = cson2yaml(cson)
  expect(yaml).toBe(`array: [
  1,
  2,
  3,
]`)
  const json = YAML.load(yaml)
  expect(json).toEqual({ array: [1, 2, 3] })
})

test('Config file', () => {
  const csonFixture = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'config.cson'),
    'utf8'
  )
  const jsonFixture = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'fixtures', 'config.json'), 'utf8')
  )
  const yaml = cson2yaml(csonFixture)
  console.log('yaml:', yaml)
  const json = YAML.load(yaml)
  expect(json).toEqual(jsonFixture)
})
