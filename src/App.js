import React from 'react' ; 
import logo from './LCO-logo-white.png' ;  
import "./App.css" ; 

//class based component 

class App extends React.Component { 
    constructor(props){
      super(props) ; 
      this.state = {
        newItem : "" ,
        list : [] 
      } 
    }

   addItem(toDoValue){
     if(toDoValue){
       const newItem = {
         id : Date.now() , 
         value : toDoValue,  
         isDone : false 
       }
       const list = [...this.state.list] ;
       list.push(newItem) ; 

       //update the state 
       this.setState({
          //inside what we want to update 
          list  , 
          newItem : "" 
       })
     }
   } 

   deleteItem(id) {
        const list = [...this.state.list] ;  
        const updateList = list.filter(item=> item.id!=id) 
        this.setState({
          list : updateList 
        })
   }

   updateInput (input){
     this.setState ({newItem : input}) ; 
   }

    render() {
      return ( 
       <div>
          <img src = {logo} width="100" height="100" className ="logo"/>
          <h1 className="app-title">Daily To Do App</h1>
          <div className="container">
            Add an Item .. 
            <br/> 
            <input type="text" 
            className="input-text" 
            placeholder = "Write a Todo" 
            required 
            value = {this.state.newItem}  
            onChange = {e => this.updateInput(e.target.value)}  
            /> 
            <button className="add-btn" 
            onClick = {() => this.addItem(this.state.newItem)} 
            disabled = {!this.state.newItem}
            >Add To Do</button> 
            <div className="list">
              <ul> 
                {this.state.list.map(item=>{
                  return (
                    <li key = {item.id}>
                      <input type="checkbox" 
                       name = "isDone" 
                       checked = {item.isDone} 
                      /> 
                      {item.value}
                      <button className="btn" 
                      onClick = {() => this.deleteItem(item.id)}>
                        Delete
                      </button>
                    </li>
                  )
                })}
                <li>
                  <input type="checkbox" name="" id=""/> 
                  Record Youtube Video 
                  <button className="btn">Delete</button>
                </li>
              </ul>
            </div>
          </div>
       </div>
      )
    }
} 

export default App ; 