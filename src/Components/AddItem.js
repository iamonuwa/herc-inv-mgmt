import React, { Component } from 'react';

class AddItem extends Component {

    constructor() {
        super()
        this.state = {
            firstActive: "",
            secondActive: "",
            thirdActive: ""
        };
    }

    handleSubmit(e){
        this.props.contractInstance.mint(
            this.refs.itemName.value, 
            this.refs.itemQuantity.value,
            "N/A", 18, "N/A",
            window.web3.toWei(this.refs.itemPrice.value, 'ether'),
        {gas: 300000}, (err, result) => {console.log(err)})
       
        e.preventDefault();
    }

    onNameClicked(){
        this.setState({firstActive: "active"});
    }

    onPriceClicked(){
        this.setState({secondActive: "active"});    
    }

    onSupplyClicked(){
        this.setState({thirdActive: "active"});
    }

    render() {

        return (
            
            <div className="AddItem">

                <div className="container" id="add-main-container">
                    <div className="card white z-depth-2 hoverable" id="add-main-card">
                        <br/>
                        <h4 className="purple-text text-darken-2">Add items for the your shop!</h4>
                        <div className="divider"></div>
                        <br/>
                        <div className="row">
                            <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                                
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="text" ref="itemName" id="item_name" className="validate" required="required"/>
                                        <label className={this.state.firstActive} onClick={this.onNameClicked.bind(this)} htmlFor="item_name">Item Name</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="number" step="any" ref="itemPrice" id="item_price" className="validate" required="required"/>
                                        <label className={this.state.secondActive} onClick={this.onPriceClicked.bind(this)} htmlFor="item_price">Ether Price</label>
                                        <span className="helper-text">Input in Ether value (e.g. 1.37)</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="number" ref="itemQuantity" id="item_qty" className="validate" required="required"/>
                                        <label className={this.state.thirdActive} onClick={this.onSupplyClicked.bind(this)} htmlFor="item_qty">Total Supply</label>
                                    </div>
                                </div>
                                
                                <div className="col s12 right-align teal-text text-lighten-2" id="add-button">
                                    <button className="btn waves-effect waves-light" type="submit" name="action" >Add Item
                                        <i className="material-icons right">add</i>
                                    </button>
                                </div>
                            </form>       
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}
export default AddItem;
