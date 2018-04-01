import React, {Component} from 'react';
//import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import Layout from '../../components/layout'
import{Card} from 'semantic-ui-react';
import web3 from '../../ethereum/web3_local';

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
    
       renderCampaign(){

       const {
            minimumContribution,
            balance,
            requestsLength,
            approvalsCount,
            manager
        } = this.props;


       const items = [
  {
    header: minimumContribution+' (wei)',
    description: 'Minimum contribution ammount in wei',
    meta: 'Minimum Contribution'
  },
  {
    header: web3.utils.fromWei(balance,'ether')+' ETH',
    description: 'The balance is how mutch money this campaign has to spend.',
    meta: 'Balance'
  },
  {
    header: requestsLength,
    description: 'How many requests ',
    meta: 'Requests'
  },
  {
    header: approvalsCount,
    description: 'Number of approvals',
    meta: 'Approvals'
  },
  {
    header: manager,
    description: 'The manager created this campaign and can create requests to widraw modey',
    meta: 'Manager',
      style:{overflowWrap:'break-word'}
  }
 
];
        return <Card.Group centered items={items} />;
    }
    
    render(){
        return (
                <Layout>
                    <h2>Show </h2>
                     <div>{this.renderCampaign()}</div>
                </Layout>
                );
    }
}
;

export default ComponentShow;