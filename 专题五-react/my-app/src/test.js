import confirm from "./confirm";
import React from 'react'
import {Component} from "react";

class Test extends Component {
	 render() {
		  return (
			  <div>test</div>
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