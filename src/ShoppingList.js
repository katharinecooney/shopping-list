import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons" },
        { name: "Bread", qty: "2 loaves" }
      ]
    };
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }

  addItem = (item) => {
    this.setState(currentState => ({
      items: [...currentState.items, item]
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
