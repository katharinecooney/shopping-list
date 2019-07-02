import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import uuid from "uuid";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", quantity: "2 gallons", id: uuid() },
        { name: "Bread", quantity: "2 loaves", id: uuid() }
      ]
    };
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
            {item.name}:{item.quantity}
          </li>
        ))}
      </ul>
    );
  }

  addItem = (item) => {
    let newItem = {...item, id: uuid()}
    this.setState(currentState => ({
      items: [...currentState.items, newItem]
    }))
  }

  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem}/>
      </div>
    );
  }
}
export default ShoppingList;
