const assert = require('assert');
const ganache = require('ganache-cli'); // Local test network
const Web3 = require('web3'); // portal to Etherium World
const web3 = new Web3(ganache.provider()); // private, public keys

//const {interface, bytecode} = require('../compile');

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');


const AMOUNT_ETHER = '10';
const GAS = '1000000';

let accounts;
let campaignFactory;
let campaign;
let campaignAddress;


beforeEach(async () => {
    accounts = await web3.eth.getAccounts(); //wait for all acounts
    console.log(' --- beforeEach : ', accounts[0]);
    console.log('-------------------------------------------');

    campaignFactory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
            .deploy({
                data: compiledFactory.bytecode
            })
            .send({
                from: accounts[0],
                gas: GAS
            });

    await campaignFactory.methods.createCampaign('100')
            .send({from: accounts[0],
                gas: GAS
            });

//    campaignAddress = await campaignFactory.methods.getDeployedCampaigns().call()[0];
    [campaignAddress] = await campaignFactory.methods.getDeployedCampaigns().call();

    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignAddress);

});

describe('describe Kickstart TESTS', () => {


    it('test 1: deploy a factory and campaign ', async () => {
        assert.ok(campaignFactory.options.address);
        assert.ok(campaign.options.address);
    });
    
    it('test 2: deploy a factory and campaign ', async () => {
    });
    it('test 3: deploy a factory and campaign ', async () => {
    });


//        await campaignFactory.methods.enter().send({
//            from: accounts[0],
//            value: web3.utils.toWei(AMOUNT_ETHER, 'ether')
//        });
//
//        const initBalance = await web3.eth.getBalance(accounts[0]);
//
//        await campaignFactory.methods.pickWinner().send({
//            from: accounts[0]
//        });
//
//        const winner = await campaignFactory.methods.winner().call({
//            from: accounts[0]
//        });
//
//        const finalBalance = await web3.eth.getBalance(accounts[0]);
//
//        const diff = (finalBalance - initBalance);
//        console.log(" --- test 4: initBalance = " + toEther(initBalance) + ", finalBalance = " + toEther(finalBalance));
//        // console.log(' --- test 4 : diff = ' + toEther(diff)+" : "+toEther(new Number(web3.utils.toWei('0.01', 'ether'))));
//        console.log(' --- test 4 : gas spended = ' + (100.0 - toEther(finalBalance)) + ", winner : " + winner);
//        assert(diff > new Number(web3.utils.toWei((new Number(AMOUNT_ETHER) - 0.01) + '', 'ether')));

});

