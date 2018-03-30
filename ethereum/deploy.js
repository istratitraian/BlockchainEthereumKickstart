const HDWalletPorvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//const {
//    interface,
//    bytecode
//} = require('./compile');

 const compiledFactory = require('./build/CampaignFactory.json');

//my Chrome mnemonic
const provider = new HDWalletPorvider(
        'december pony gun slab shrimp wine ball dutch hat cinnamon hundred track',
        'https://rinkeby.infura.io/eIwwjgj5xmZFQyh0450I'
        );


const GAS = '1000000';
let accounts;
let result;

const web3 = new Web3(provider);

const deploy = async () => {
    accounts = await web3.eth.getAccounts(); //wait for all acounts
    console.log(' --- Connected to account[0] = ', accounts[0]);

    const abi = JSON.parse(compiledFactory.interface);
//    console.log(' --- abi : ',abi);
    
    result = await new web3.eth.Contract(abi)
            .deploy({
                data: compiledFactory.bytecode
            })
            .send({
                from: accounts[0],
                gas: GAS
//               , value: web3.utils.toWei(AMOUNT_ETHER, 'ether')
            });
//    console.log(interface);
    console.log(' <<< Contract deployed to address = ', result.options.address);

};
deploy();
