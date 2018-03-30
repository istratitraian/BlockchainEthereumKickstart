/* global __dirname */
require('events').EventEmitter.defaultMaxListeners = 15;

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');


const campaignPath = path.resolve(__dirname, 'contracts', 'Kickstart.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const contracts = solc.compile(source, 1).contracts;

fs.removeSync(buildPath);
fs.ensureDirSync(buildPath);

for(let contract in contracts){
    fs.outputJsonSync(
            path.resolve(buildPath, contract.replace(':', '') + '.json'),
            contracts[contract]
            );
}

console.log(" <<< End of Compile! ", __dirname);
