import React, {Component} from 'react';
//import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import Layout from '../../components/layout';
import ContributeForm from '../../components/contributeForm';
import{Card,Grid,Button} from 'semantic-ui-react';
import Web3 from '../../ethereum/web3_local';
import {Link} from '../../routes';

class CampaignShow extends Component{
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        return {
            address:props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsLength: summary[2],
            approvalsCount: summary[3],
            manager: summary[4]
        };
    }
    
       renderCampaign(){

       const {
            address,
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
    header: Web3.utils.fromWei(balance,'ether')+' ETH',
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
      style:{overflowWrap:'break-word',width:600,minWidth:200}
  }
 
];
        return <Card.Group centered items={items} />;
    }
    
    render(){
        return (
                <Layout>
                    <h2>Show </h2>
                    <Grid>
                    <Grid.Row>
                    <Grid.Column width={10}>
                     <div>{this.renderCampaign()}</div>
                    </Grid.Column>
                    
                    <Grid.Column width={6}>
                     <ContributeForm address={this.props.address}/>
                    </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column>
                             <Link route={`/campaigns/${this.props.address}/requests`}>
                        <a>
                            <Button primary>View Requests</Button>
                        </a>
                    </Link>
                    </Grid.Column>
                        </Grid.Row>
                     </Grid>
                </Layout>
                );
    }
}
;

export default CampaignShow;