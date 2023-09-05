
import { Component } from 'react';
import './App.css';
import AddItem from './components/addItem/addItem';
import TodoItems from './components/todoItem/todoItems';

class App extends Component {
  state= {
    items:[
      {id: 1, name:'houda', age:'22'},
      {id: 2, name:'afaf', age:'17'},
      {id: 3, name:'najat', age:'40'},
    ]
  }

  deleteItem= (id)=>{
    /**let items= this.state.items;
    let i=items.findIndex(Item=>Item.id==id)
    items.splice(i,1)
    this.setState({items})**/

    let items= this.state.items.filter(Item=>{return Item.id != id})
    this.setState({items})
  }

  addItem= (item)=>{
    let items= this.state.items;
    items.push(item)
    this.setState({items})
  }

  render(){
    return (
      <div className="App">
        To List App
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
  
}

export default App;
