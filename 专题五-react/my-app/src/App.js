import React, {Component, useState} from 'react';
import './App.css';
import Test from './test'
/*
* 受控和非受控组件
* */
class InputNumber extends Component {
	 constructor(props) {
		  super(props)
		  this.state = {
				innerValue: ''
		  }
	 }

	 get isControl() {
		  return 'value' in this.props
	 }

	 get value() {
		  if (this.isControl) {
				return this.props.value
		  } else {
				return this.state.innerValue
		  }
	 }

	 render() {
		  return (
			  <input
				  value={this.value}
				  onChange={(e) => {
						if (!this.isControl) {
							 this.setState({
								  innerValue: e.target.value
							 })
						}
						this.props.onChange(e)
				  }}
			  />
		  )
	 }

	 componentDidMount() {
		  this.setState({
				innerValue: this.props.defaultValue
		  })

	 }
}

function App() {
	 const [value, setValue] = useState('aaa')
	 return (
		 <div>
			  <Test/>
			  <InputNumber value={value} onChange={e => setValue(
				  e.target.value
			  )}/>
			  <InputNumber defaultValue={value} onChange={e => {
			  }}/>
		 </div>
	 )
}

export default App;
