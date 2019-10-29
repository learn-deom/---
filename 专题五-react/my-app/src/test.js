import confirm from "./confirm";
import React from 'react'
import {Component} from "react";

class Test extends Component {
	 async handleOk() {
		  let res = await confirm("确定删除吗")
		  if (res) {
				console.log("是")
		  } else {
				console.log("否")
		  }
	 }
 	 render() {
		  return (
			  <div onClick={this.handleOk}>test</div>
		  )
	 }
	 async componentDidMount() {
		  let res = await confirm("确定删除吗")
		  if (res) {
				console.log("是")
		  } else {
				console.log("否")
		  }
	 }
}

export default Test