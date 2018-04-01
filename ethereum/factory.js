import web3 from './web3_local';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
        JSON.parse(CampaignFactory.interface),
        '0xAdaa967093681bc7B288756D489A9c68Bdbc38CF'
        );
export default instance;