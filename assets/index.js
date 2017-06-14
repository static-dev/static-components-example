import 'preact/devtools'
import MyComponent from './my-component'
import {h, render} from 'preact'

render(
  <MyComponent name='BrooklynJS' />,
  document.body,
  document.querySelector('.my-component')
)
