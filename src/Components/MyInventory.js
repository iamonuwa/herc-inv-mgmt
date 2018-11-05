import React, { Component } from 'react';
import InventoryItem from './InventoryItem';


const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

class MyInventory extends Component {
    
    constructor(){
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            currentInvItems: [],
            toggle: false,
            inputValue1: '', 
            inputValue2: 0,
            chosenId: 0
        }
    }

    toggle(_id) {

        this.setState(prevState => ({
          toggle: !prevState.toggle,
          chosenId: _id
        }));
    }

    update1stInputValue(evt){
        this.setState({
            inputValue1: evt.target.value
        });
    }

    update2ndInputValue(evt){
        this.setState({
            inputValue2: evt.target.value
        });
    }

    sendGift(){
        this.props.contractInstance.giveItem(this.state.inputValue1, this.state.chosenId, this.state.inputValue2,
            {
                gas: 300000
            },(err, result) => {
                this.toggle(0);
                alert("Transaction Successful!");
            }
        );
    }

    getInvItems(){
        this.props.contractInstance.getNonce((err, result) => {
            let nonce = result.c[0];
            for(let i=1; i<=nonce; i++ ){
                this.props.contractInstance.getInventoryItem(i,
                {
                    gas: 300000, 
                    from: window.web3.eth.accounts[0]
                },
                (err, result) => {
                        console.log(nonce);
                        console.log(result);
                        if(result[3].c[0] > 0){
                            let updatedInvItems = this.state.currentInvItems;
                            updatedInvItems.push({

                                itemId: result[0].c[0],
                                itemName: result[1],
                                itemQty: result[3].c[0]

                            })
                            this.setState({currentInvItems: updatedInvItems});
                        }    
                    }
                );
            }
        });     
    }



    componentDidMount(){
       
        this.getInvItems();
    }

    render() {

        let items;
       
        if(this.state.currentInvItems){
            items = this.state.currentInvItems.map(item => {
                return (
                    <InventoryItem send={this.toggle.bind(this)} key={item.itemId} item = {item}/>
                );}
            );   
        }

        let modal = [];
        modal.push(
        <div className="modal hoverable align-center" id="modalDisplay" style={this.state.toggle ? display : hide}>
            <div className="modal-content">
                <br/>
                <h4 className="purple-text text-darken-1">Confirm Transaction</h4>
                <div class="divider"></div>
                <br/>
                <br/>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" onChange={this.update1stInputValue.bind(this)} id="address"/>
                        <label className="active" placeholder="Input the address" htmlFor="address">Recepient</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="number" onChange={this.update2ndInputValue.bind(this)}  id="item_qty"/>
                        <label className="active" placeholder="Input the quantity" htmlFor="item_qty">Quantity</label>
                    </div>
                </div>
            </div>
        <div className="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat teal-text text-lighten-2" onClick={this.sendGift.bind(this)}><b>Confirm</b></a>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat teal-text text-lighten-2" onClick={this.toggle}><b>Cancel</b></a>
        </div>
        </div>
        );
    
    return (
        <div className="MyInventory">
            <div className="container" id="inv-main-container">
                <div className="card white" id="inv-main-card">
                    <br/>
                    <h4 className="purple-text text-darken-2">My Inventory</h4>
                    <div className="divider"></div>
                    <br/>
                    {modal}
                    <table>
                    <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th className="right">Gift</th>
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

export default MyInventory;
