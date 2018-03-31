import React, {Component} from 'react';
import factory from '../ethereum/factory';

// Here we use Next.js

class CampaignIndex extends Component{
//    state = {
//        campaign: []
//
//    };

    static

    async componentDidMount(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(' --- campaigns = ', campaigns);
    }
    
    render(){
        return <div>Campaign Index!</div>;
    }
};

export default CampaignIndex;

//export default () => {
//    return <h2>Index.js page </h2>;
//};


