const {h, Component} = require('preact')

module.exports = class MyComponent extends Component {
  render () {
    return (
      <p className='my-component'>
        Hello {this.props.name}! 👋
      </p>
    )
  }
}
