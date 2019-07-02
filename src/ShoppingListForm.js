import React, { Component } from 'react'

class ShoppingListForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      quantity: ''
    }
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          // needs to match the label's htmlFor
          id="name"
          // needs to match the state
          name="name"
          value={this.state.name}
          onChange={this.handleChange}/>
        <label htmlFor="name">Quantity</label>
        <input 
          type="text"
          // needs to match the label's htmlFor
          id="quantity"
          // needs to match the state
          name="quantity"
          value={this.state.quantity}
          onChange={this.handleChange}/>
      </form>
    )
  }
}

export default ShoppingListForm;