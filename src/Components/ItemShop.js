import React, { Component } from 'react';
import ItemShopItem from './ItemShopItem';
import Web3 from 'web3'

class ItemShop extends Component {
    
    constructor(){
        super();

        this.state = {
            basket: [],
            currentShopItems: []
            
        }
    }

    getShopItems(){
        this.props.contractInstance.getNonce((err, result) => {

            let nonce = result.c[0];
            for(let i=1; i<=nonce; i++ ){
                this.props.contractInstance.getShopItem(i,
                {
                    gas: 300000, 
                    from: window.web3.eth.accounts[0]

                },
                    (err, result) => {
                        if(result[3].c[0] > 0){
                            let updatedShopItems = this.state.currentShopItems;
                            updatedShopItems.push({

                                itemId: result[0].c[0],
                                itemName: result[1],
                                itemPrice: result[2].c[0],
                                itemSupply: result[3].c[0]

                            })
                            this.setState({currentShopItems: updatedShopItems})
                        }    
                    }
                );   
            }
        });     
    }


    componentDidMount(){
        this.getShopItems();
    }



    onPickedItem(qty, id, price){
        let currentBasket = this.state.basket;
        currentBasket.push({
            itemId: parseInt(id),
            itemQty: parseInt(qty),
            itemPrice:  parseInt(price)
        })
        this.setState({basket: currentBasket});
    }

    onResetCart(){
        this.setState({basket: []})
    }

    onCheckOut(){
        let currentBasket = this.state.basket;
        if(currentBasket.length > 0){
            if(currentBasket.length === 1){
                this.props.contractInstance.buyItem(currentBasket[0].itemId, currentBasket[0].itemQty,
                    {
                        gas: 300000, 
                        from: window.web3.eth.accounts[0],
                        value: window.web3.toWei((currentBasket[0].itemPrice*currentBasket[0].itemQty)/10000, 'ether')
                    }, (err, result) => {
                        if(err){
                            alert("Transaction Cancelled!");
                            this.onResetCart();
                        }
                        else{
                            alert("Transaction Successful!");
                            this.onResetCart();
                        }
                    }
                )
            }
            else{
                let ids = currentBasket.map((item) => {return item.itemId});
                let qtys = currentBasket.map((item) => {return item.itemQty});
                let grandTotal = 0.0;
                for(let i=0; i<currentBasket.length; i++){
                    grandTotal = grandTotal + (currentBasket[i].itemPrice * currentBasket[i].itemQty);
                }
               


                this.props.contractInstance.buyBatchItems(ids, qtys,
                    {
                        gas: 300000, 
                        from: window.web3.eth.accounts[0],
                        value: window.web3.toWei(grandTotal/10000, 'ether')
                    }, (err, result) => {
                        if(err){
                            alert("Transaction Cancelled!");
                            this.onResetCart();
                        }
                        else{
                            alert("Transaction Successful!");
                            this.onResetCart();
                        }
                    }
                )
            }
        }
    }

    render() {

    let items;
    if(this.state.currentShopItems){
        items = this.state.currentShopItems.map(item => {
            return (
                <ItemShopItem onPick={this.onPickedItem.bind(this)} key={item.itemId} item = {item}/>
            );
        });
    }

    let totalPrice = 0.0;
    let totalItems = 0;
    let currentBasket = this.state.basket
    for(let i = 0; i<currentBasket.length; i++){
        totalPrice = (totalPrice + (currentBasket[i].itemPrice * currentBasket[i].itemQty));
        totalItems = totalItems + parseInt(currentBasket[i].itemQty);
    }

    
    return (
        <div className="ItemShop">
            
            <div className="card white purple-text text-darken-1" id="shop-navbar">
                <div className="row" id="shop-navbar-inner">
                <div className="col s6">
                    <div className="col s1"></div>
                    <div className="col s8" id="left-wing">
                        <div className="col s4 grey-text text-darken-1" id="cart-counter">
                        Items in the Cart: {totalItems}
                        </div>
                        <div className="col s8">
                        <div className="col s6 grey-text text-darken-1" id="price-counter">
                            Overall Price: {totalPrice/10000} ETH
                        </div>
                        <div className="col s3" id="reset-button">
                            <b><a href="#" class="teal-text text-lighten-2" onClick={this.onResetCart.bind(this)} >RESET</a></b>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col s6" id="check-out">
                    <a href="#" class="teal-text text-lighten-2" onClick={this.onCheckOut.bind(this)}><b>CHECK OUT</b></a>
                </div>
                </div>
            </div>

            <div className="container" id="shop-main-container">
                <div className="card white hoverable" id="shop-main-card">
                <h4 className="purple-text text-darken-2">Shop Inventory</h4>
                <div className="divider"></div>
                <br/>

                <table>
                <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th class="center-align">Stocks</th>
                    <th className="center-align">Quantity</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {items}
                </tbody>
                </table>
                
                </div>
            </div>

            
          
        </div>
      );
  }
}

export default ItemShop;
