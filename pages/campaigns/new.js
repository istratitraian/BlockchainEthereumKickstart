import { Form, Button,Input,Message } from 'semantic-ui-react';
import React, {Component} from 'react';
import Factory from '../../ethereum/factory';
import Layout from '../../components/layout'
import web3 from '../../ethereum/web3_local';
import {Router} from '../../routes';


class CampaignNew extends Component{
    
     state = {
        errorMessage:'',
        loading:false,
        minimumContribution:'100'
    }
    
    onCreate = async (event)=>{
        event.preventDefault();
        this.setState({errorMessage:''});
     try{
        this.setState({isLoading:true});
        const accounts = await web3.eth.getAccounts();
        await Factory.methods.createCampaign(this.state.minimumContribution).send({
            from:accounts[0]
        });
        Router.pushRoute('/');
     }catch(e){
         this.setState({errorMessage:e.message});
     }
     this.setState({isLoading:false});
    }
    render(){
        return (
                <Layout>
                    <h2>New Campaign</h2>
                 
                    <Form onSubmit={this.onCreate} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>Minimium Contribution</label>
                            <Input 
                            
                            label="wei"
                            value={this.minimumContribution}
                            onChange={event => this.setState({minimumContribution:event.target.value})}        
                            labelPosition="right"/>
                        </Form.Field>
                        
                        <Message error header='Bad Number' content={this.state.errorMessage}/>
                        
                        <Button primary loading={this.state.loading} type='submit'>Create!</Button>
                    </Form>
                
                </Layout>
                );
    }
}
;

export default CampaignNew;