const {h, Component} = require('preact')

module.exports = class MyComponent extends Component {
  render () {
    return (
      <p className='my-component' data-state={this.props._state}>
        Hello {this.props.name}! 👋
      </p>
    )
  }
}
