import {Block} from "../block";

import {BlockChain} from "../blockchain";

let a = new Block(1,{name:"Bandity", address:"12345678"}, "0" );
let b = new Block(2,{name:"Bandity", address:"123"}, a.getHash())

let chain = new BlockChain() // Init our chain
chain.addNewBlock(a) // Add block a
chain.addNewBlock(b) // Add block b
console.log(chain) // Print out the blockchain
console.log("Validity: " + JSON.stringify(chain.checkChainValidity()))
