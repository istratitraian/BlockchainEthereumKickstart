import web3 from './web3_local';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
        JSON.parse(CampaignFactory.interface),
        '0xaBc79Ee9Df4CF84FF451aC3996c5cf020bCeF656'
//        '0xFCD00AE7E89331AA2D23c6c9F9b3f5F79CEE3289'
        );
export default instance;