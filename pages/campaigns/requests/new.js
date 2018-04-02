import React, {Component} from 'react';
import Layout from '../../../components/layout';
import{Button, Form, Message, Input} from 'semantic-ui-react';
import Web3 from '../../../ethereum/web3_local';
import {Link, Router} from '../../../routes';
import Campaign from '../../../ethereum/campaign';

class RequestNew extends Component{
    
    state = {
        description:'',
        value:'',
        recipient:'',
        successMessage:'',
        errorMessage:'',
        loading:false
    };
    
    
    static async getInitialProps(props){
        const {address} = props.query;
        return {address};
    }


     onSubmit = async (event)=>{
        event.preventDefault();
        this.setState({errorMessage:'',successMessage:''});

     try{
        this.setState({loading:true});
        const accounts = await Web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);
        
        const{description,value,recipient} = this.state;
        
        const transaction = await campaign.methods.createRequest(
                description,Web3.utils.toWei(value,'ether'),recipient)
                .send({from:accounts[0]});
        
         this.setState({successMessage:transaction});
        
//        Router.pushRoute('/');
     }catch(e){
         this.setState({errorMessage:e.message});
     }
     this.setState({loading:false});
    }

    render(){
        return (
                <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
        <a>Back</a>
        </Link>
                    <h2>New Request</h2>
                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.successMessage}>
                        <Form.Field>
                            <label>Description</label>
                            <Input value={this.state.description}
                                onChange={event => this.setState({description:event.target.value})}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Value</label>
                            <Input value={this.state.value} label="ether" labelPosition="right"
                                onChange={event => this.setState({value:event.target.value})}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Recipient</label>
                            <Input value={this.state.recipient}
                                onChange={event => this.setState({recipient:event.target.value})}/>
                        </Form.Field>
                        
                        <Message error header='Bad Number' content={this.state.errorMessage}/>
                        
                        <Button primary loading={this.state.loading} type='submit'>Create!</Button>
                        <Message success header='Transaction Success :' content={this.state.successMessage}/>
                            </Form>
                    </Layout>
                );
    }
}
;

export default RequestNew;