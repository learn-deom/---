import React, {Component} from 'react'
import ReactDOM from "react-dom";
import './index.css'
const confirm = async (message) => {
	 let toggle = false
	 let body = document.body;
	 let showDom = document.createElement("div");
	 // 设置基本属性
	 showDom.style.position = 'absolute';
	 showDom.style.top = '0px';
	 showDom.style.left = '0px';
	 showDom.style.width = window.innerWidth + 'px';
	 showDom.style.height = window.innerHeight + 'px';
	 showDom.style.zIndex = '999999';
	 body.appendChild(showDom);

	 class ConfirmComponent extends Component {
		  render() {
				return (
					<div className="confirm-wins-container">
						 <div className="wins">
							  <div className="title">提示</div>
							  <div className="desc">{message}</div>
						 </div>
					</div>
				)
		  }
		  componentDidMount() {
				toggle = true
		  }
	 }
	 await ReactDOM.render(<ConfirmComponent/>, showDom)
	 return toggle
}

export default confirm