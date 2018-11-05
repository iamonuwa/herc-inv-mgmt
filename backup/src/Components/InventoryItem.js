import React, { Component } from 'react';



class ItemShopItem extends Component {

    constructor(){
        super();
        

        this.state = {
        }
    }
    
    handleSend(){
        this.props.send(this.props.item.itemId);
    }
    

    render() {

        return [
            <tr key className="InventoryItem">
                <td>{this.props.item.itemName}</td>
                <td>{this.props.item.itemQty}</td>
                <td className="right">
                    <a className="waves-effect waves-light btn-small teal-text text-lighten-2" onClick={this.handleSend.bind(this)}>
                    <i class="material-icons right">card_giftcard</i><b>Send To</b></a>
                </td>
            </tr>
            
        ];
  }
}

export default ItemShopItem;
