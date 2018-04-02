import React, {Component} from 'react';
import {Link} from '../../../routes';
import Layout from '../../../components/layout';
import{Card,Grid,Button} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';

class RequestIndex extends Component{
    
    static async getInitialProps(props){
        const {address} = props.query;
        
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        
        const requests = await Promise.all(
                Array(parseInt(requestCount))
                .fill()
                .map((element, index) =>{
                 return campaign.methods.requests(index).call();   
                })
                );
//        console.log(' --- requests = ',requests);
        
        return {address,requests,requestCount};
    }
    
    render(){
        return (
                <Layout>
                    <h2>Requests</h2>
                    
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                <a><Button primary>Create Request</Button></a>
                </Link>
                    
                </Layout>
                );
    }
}
;

export default RequestIndex;