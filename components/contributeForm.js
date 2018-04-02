import React, {Component} from 'react';
import{Form, Input, Message, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import Web3 from '../ethereum/web3_local';
import {Router} from '../routes';

class ContributeForm extends Component{
    
    state = {
        successMessage:'',
        errorMessage:'',
        loading:false,
        value:'100'
    }
    
     onContribue = async (event)=>{
        event.preventDefault();//prevents to submit itself
        this.setState({errorMessage:'',successMessage:''});
        
        try{
            this.setState({loading:true});
            const accounts = await Web3.eth.getAccounts();
            const campaign = Campaign(this.props.address);
            
             const transaction = await campaign.methods.contribute().send({
                    from:accounts[0],
                    value:Web3.utils.toWei(this.state.value,'ether')
                });
             this.setState({successMessage:transaction});
             
             Router.replaceRoute(`/campaigns/${this.props.address}`);
             
        }catch(e){
              this.setState({errorMessage:e.name});
        }
        this.setState({loading:false});

    }
    
    
    render(){

        return (
                 <Form onSubmit={this.onContribue} error={!!this.state.errorMessage} success={!!this.state.successMessage}>
                        <Form.Field>
                            <label>Amount to Contribue</label>
                            <Input 
                            label="ether"
                            labelPosition="right"
                            onChange={event => this.setState({value:event.target.value})}                            
                         />
                        </Form.Field>
                        
                        <Message error header='Bad Number' content={this.state.errorMessage}/>
                        
                        <Button primary loading={this.state.loading} type='submit'>Contribue</Button>
                       
                        <Message success header='Transaction Success :' content={this.state.successMessage}/>
                    </Form>
                );
    }
}
;

export default ContributeForm;
    