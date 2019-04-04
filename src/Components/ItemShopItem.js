import React, { Component } from 'react';

class ItemShopItem extends Component {

    constructor(){
        super();

        this.state = {
            inputValue: 0.0
        }

    }

    handlePick(e){
        if(this.state.inputValue === '' || this.state.inputValue < 1) {
            alert("Please set the quantity of the item.")
        }
        else{
            if(this.props.item.itemSupply > 0){
                this.props.onPick(this.state.inputValue, this.props.item.itemId, this.props.item.itemPrice);
            }
            else{
                alert("This item is out of stock!")
            }
        }
        e.preventDefault();
    }

    updateInputValue(evt){
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        return [
                <tr key className="ItemShopItem">
                    <td>{this.props.item.itemName}</td>
                    <td>{this.props.item.itemPrice/10000} ETH</td>
                    <td className="center-align">{this.props.item.itemSupply}</td>
                    <td className="center-align"><input className="qty-textfield" style={{width: "100px"}} type="number" onChange={this.updateInputValue.bind(this)}/></td>
                    <td className="right" style={{marginTop:"10px"}}>
                        <a className="waves-effect waves-light btn teal lighten-2 hoverable" style={{width: "160px"}} onClick={this.handlePick.bind(this)}><i className="material-icons right">add_shopping_cart</i>Add to</a>
                    </td>
                </tr>
            ];
    }
}

export default ItemShopItem;


