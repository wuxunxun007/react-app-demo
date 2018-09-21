import React, {Component} from 'react';
import style from './style.css';
export default class UI extends Component {
  componentDidMount () {
    this.props.getBannerList();
    this.props.getProList();
  }
  render () {
    console.log('props', this.props)
    return (
      <div className = "container">
        <div className = {style.box}>
        <ul>
          {
            this.props.prolist.map((item,index) => {
              return (
                <li key = {item.id}>{item.title}</li>
              )
            })
          }
        </ul>

        </div>
        <footer>页面底部</footer>
      </div>
    )
  }
}
