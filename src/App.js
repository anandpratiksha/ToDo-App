import './App.css';
import React, { useState } from 'react'
import ToDoList from './ToDoList';

function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList('');
  }


  const deleteItem = (id) => {

    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="main_div">
      <div className="bear">
        <div className="mouth"><div className="lip">(</div>

        </div>
        <div className="eyel"></div>
        <div className="eyer"></div>
        <div className="earl"><div className="earshadow1"></div></div>
        <div className="earr"><div className="earshadow2"></div></div>
        <div className="handr"></div>
        <div className="handl"></div>
      </div>
      <div className="center_div post">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text"
          onChange={itemEvent}
          placeholder="Add your work"
          value={inputList} />
        <button onClick={listOfItems}>+</button>
        <ol>
          {
            Items.map((itemval, index) => {
              return <ToDoList
                key={index}
                itemval={itemval}
                id={index}
                onSelect={deleteItem}
              />
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
