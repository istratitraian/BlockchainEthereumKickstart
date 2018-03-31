import React, {Component} from 'react';
import{Card,Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/layout'
import {Link,Router} from '../routes';
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
    renderCampaigns(){

       const items =  this.props.campaigns.map(address => {
            return {
                header: address,
                description:<a>View Campaign</a>,
                fluid: true
            };
        });
        return <Card.Group centered items={items} />;
    }
    render(){
        return <Layout>
                    <h3>Open Campaign</h3>
                    <Button primary floated="right" content='New Contract' icon='plus circle' labelPosition='right'  />
                    <div>{this.renderCampaigns()}</div>
                </Layout>;
    }
}
;

export default CampaignIndex;


