import 'preact/devtools'
import MyComponent from './my-component'
import {h, render} from 'preact'
import {hydrateInitialState} from 'reshape-preact-components/lib/browser'

const el = document.querySelector('.my-component')
const vdom = hydrateInitialState(el.dataset.state, {
  'my-component': MyComponent
})

render(vdom, document.body, el)
