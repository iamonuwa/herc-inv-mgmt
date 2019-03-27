import React, { Component } from 'react';
import AddItem from './Components/AddItem';
import Web3 from 'web3'
import contract from './Contract Reference/EthInvReference';
import MyInventory from './Components/MyInventory';
import ItemShop from './Components/ItemShop';
import './App.css';


class App extends Component {

  constructor(){
    super();

    //This handles the states of components.
    this.state = {
      itemShopSelected: true,
      myInventorySelected: false,
      addItemSelected: false,
    }

    //Initializes the Web3 connection instance.
    if(typeof window.web3 != 'undefined'){
      console.log("Using web3 detected from external source like Metamask");
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.web3 = new Web3(new 
      Web3.providers.HttpProvider("http://localhost:8545"));
    }

    //Sets the account, for it to be recognized by Metamask 
    window.web3.eth.defaultAccount = window.web3.eth.accounts[0]

    //Sets the contract connection for the instance.
    const MyContract = window.web3.eth.contract(contract.ABI);
    this.state.ContractInstance = MyContract.at(contract.address);
    
  }

  
  renderItemShop(){
    this.setState({itemShopSelected: true})
    this.setState({myInventorySelected: false})
    this.setState({addItemSelected: false})
  }

  renderAddItem(){
    this.setState({itemShopSelected: false})
    this.setState({myInventorySelected: false})
    this.setState({addItemSelected: true})
  }

  renderMyInv(){
    this.setState({itemShopSelected: false})
    this.setState({myInventorySelected: true})
    this.setState({addItemSelected: false})
  }


  render() {

    let renderItemShop;
    let renderAddItem;
    let renderMyInv;

    if(this.state.itemShopSelected === true){
      renderItemShop = <ItemShop contractInstance = {this.state.ContractInstance} />;
      renderAddItem = '';
      renderMyInv = '';
      
      
    }
    
    
    if(this.state.myInventorySelected === true){
      renderMyInv = <MyInventory contractInstance = {this.state.ContractInstance} />;
      renderItemShop ='';
      renderAddItem = '';
    }
    
    if(this.state.addItemSelected === true){
      renderAddItem = <AddItem contractInstance = {this.state.ContractInstance}/>;
      renderMyInv = '';
      renderItemShop = '';
    }

    if(contract.ownerAddress === window.web3.eth.accounts[0]){
      
    }

    


    return (
      <div className="App">
          <div className="navbar-fixed">
            <nav className="white z-depth-0 ">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo purple-text"><img className="logo-image" src="logo.png"/><b>Inventory Management</b></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#" className="purple-text" onClick={this.renderAddItem.bind(this)}>+</a></li>
                  <li><a href="#" className="purple-text" onClick={this.renderItemShop.bind(this)}>Buy</a></li>
                  <li><a href="#" className="purple-text" onClick={this.renderMyInv.bind(this)}>Inventory</a></li>
                </ul>
              </div>
              <div className="divider"></div>
            </nav>
          </div>


          {renderItemShop}
          {renderAddItem}
          {renderMyInv}
              
          
      </div>
    );
  }
}

export default App;
