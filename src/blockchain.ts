import  {Block} from "./block";
class BlockChain {
    private blockchain :Array<Block>;

    constructor(){
        this.blockchain = [this.startGenesisBlock()]
    }

    startGenesisBlock(){
        return new Block(0,{});
    }

    obatainLatestBlock(){
        return this.blockchain[this.blockchain.length -1];
    }

    addNewBlock(newBlock:Block){
        newBlock.setPrevHas(this.obatainLatestBlock().getHash());
        if(this.blockchain.length !== 0){
            newBlock.setHash(newBlock.computeHash());
        }
        
        this.blockchain.push(newBlock);
    }

    checkChainValidity(){
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i - 1];

            if(currentBlock.getHash() !== currentBlock.computeHash()) {
                return false;
            }

            if(currentBlock.getPrevHash() !== previousBlock.getHash()) {
                return false;
            }

        }
        return true;
    }
}
export {BlockChain}