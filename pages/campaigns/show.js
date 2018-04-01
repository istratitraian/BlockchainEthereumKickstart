import React, {Component} from 'react';
//import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import Layout from '../../components/layout'
import{Card} from 'semantic-ui-react';

class ComponentShow extends Component{
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsLength: summary[2],
            approvalsCount: summary[3],
            manager: summary[4]
        };
    }
    render(){
        return (
                <Layout>
                    <h2>Show </h2>
                </Layout>
                );
    }
}
;

export default ComponentShow;