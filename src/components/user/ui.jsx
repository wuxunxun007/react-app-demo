import React, {Component} from 'react';

export default class UI extends Component {
  componentDidMount () {
  }
  render () {
    console.log('props', this.props)
    return (
      <div className = "container">
        <div className = "box">
          用户中心
        </div>
        <footer>页面底部</footer>
      </div>
    )
  }
}
