import React, {Component} from 'react'
import ReactDOM from "react-dom";
import './index.css'
const confirm = async(message) => {
	 return new Promise((resolve, reject) => {
		  let body = document.body;
		  let showDom = document.createElement("div");
		  body.appendChild(showDom);
		  class ConfirmComponent extends Component {
				handleConfirm() {
					 ReactDOM.unmountComponentAtNode(showDom)
					 document.body.removeChild(showDom)
					 resolve(true)
				}
				handleCancel() {
					 ReactDOM.unmountComponentAtNode(showDom)
					 document.body.removeChild(showDom)
					 resolve(false)
				}
				render() {
					 return (
						 <div className="confirm-wins-container">
							  <div className="wins">
									<div className="title">提示</div>
									<div className="desc">{message}</div>
									<span onClick={this.handleConfirm}>确定</span>
									<span onClick={this.handleCancel}>取消</span>
							  </div>
						 </div>
					 )
				}
		  }
		  ReactDOM.render(<ConfirmComponent/>, showDom)
	 })

}
export default confirm