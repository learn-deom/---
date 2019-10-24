import React, {Component,useState} from 'react';
import logo from './logo.svg';
import './App.css';
class InputNumber extends Component{
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
	 setValue(e) {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        <input type='text' value={this.state.value}></input>
    }

}
function App(){
	 const [value,setValue] = useState('aaa')
	 return (
		 <div>
			  <InputNumber value={value} onChange={e=>{}}/>
			  <InputNumber defaultValue={value} onChange={e=>{}}/>
		 </div>
	 )
}

export default App;
