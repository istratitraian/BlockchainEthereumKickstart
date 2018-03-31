
import Web3 from 'web3';

let web3;
if(typeof window !== 'undefined' && window.web3 !== 'undefined'){// we are inthe browser
    web3 = new Web3(window.web3.currentProvider);
} else{ // we are on the server 
//expose address for testing only
    web3 = new Web3(new Web3.providers.HttpProvider(
            'https://rinkeby.infura.io/eIwwjgj5xmZFQyh0450I'
            ));
}
//console.log(' --- web3 = ', web3);
export default web3;
/*
 * web3-providers-http
 * 
 * 
 * var HttpProvider = function HttpProvider(host, timeout, headers) {
 this.host = host || 'http://localhost:8545';
 this.timeout = timeout || 0;
 this.connected = false;
 this.headers = headers;
 };
 */

