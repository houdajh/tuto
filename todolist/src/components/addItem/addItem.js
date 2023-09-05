
import { Component } from 'react';
import './addItem.css'
class AddItem extends Component {
 
    state={
        name:'',
        age:'',
    }

    handleChange=(e) =>{
        console.log(e.target.value)
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        this.props.addItem(this.state)
        this.setState({
            name:'',
            age:'',
        })
    }
  render(){
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='ENTER YOUR NAME ...'  id='name' onChange={this.handleChange} value={this.state.name}></input>
            <input type='number' placeholder='ENTER YOUR AGE ...'  id='age' onChange={this.handleChange} value={this.state.age}></input>
            <input type='submit' value='Add'></input>
        </form>
      </div>
    );
  }
  
}

export default AddItem;
