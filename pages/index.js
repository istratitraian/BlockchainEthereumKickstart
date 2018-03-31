import React, {Component} from 'react';
import factory from '../ethereum/factory';

// Here we use Next.js

class CampaignIndex extends Component{
//    state = {
//        campaign: []
//
//    };

    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }
    render(){
        return <div>Campaign Index!
    <div>{this.props.campaigns}</div>
</div>;
    }
}
;

export default CampaignIndex;

//export default () => {
//    return <h2>Index.js page </h2>;
//};


