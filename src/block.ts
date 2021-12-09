import crypto from 'crypto';

class Block {
    private id :number;
    private timestamp:number;
    private data:Object
    private prevHash:string;
    private hash:string;

    constructor(id : number,data:Object,prevHash =""){
        this.id = id;
        this.timestamp = Date.now();
        this.data=data;
        this.prevHash = prevHash;
        this.hash = this.computeHash();
    }
    computeHash(){
        let strBlock = this.getPrevHash() +""+this.id+ this.timestamp + JSON.stringify(this.data);
        return crypto.createHmac('sha256',"540D0842E3E80BA74647EF079C7D0F00F679E772F634223B9ED53C4823DC41D5").update(strBlock).digest('hex');

    }
    getPrevHash(){
        return this.prevHash;
    }
    setPrevHas(block:string){
        this.prevHash = block;
    }
    getHash(){
        return this.hash;
    }
    setHash(hash:string){
        this.hash = hash;
    }
}

export {Block}
