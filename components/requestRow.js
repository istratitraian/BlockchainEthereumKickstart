import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import Web3 from "../ethereum/web3_local";
import Campaign from "../ethereum/campaign"; //i used props.campaign in /campaigns/index.js
import { Router } from "../routes";

class RequestRow extends Component {
  state = {
    isFinalizeDisabled: true,
    approving: false,
    finalizing: false
  };

  refresh() {
    console.log(" --- refresh() address = ", this.props.address);
    Router.replaceRoute(`/campaigns/${this.props.address}/requests/index`);
  }

  onApprove = async event => {
    event.preventDefault(); //prevents to submit itself
    try {
      this.setState({ approving: true });
      const campaign = Campaign(this.props.address);
      const accounts = await Web3.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
      this.refresh();
    } catch (e) {
      console.log(" --- ERROR onApprove : ", e);
    }
    this.setState({ approving: false });
  };

  onFinalize = async event => {
    event.preventDefault(); //prevents to submit itself
    if (this.props.request.approvalCount >= this.props.approvers) {
      try {
        this.setState({ finalizing: true, isFinalizeDisabled: false });
        const campaign = Campaign(this.props.address);
        const accounts = await Web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
          from: accounts[0]
        });
        this.refresh();
      } catch (e) {}

      this.setState({ finalizing: false, isFinalizeDisabled: true });
    }
  };

  render(props) {
    const { Row, Cell } = Table;
    // const pps = this.props.request;
    // const req = pps.request;
    const readyToFinalize =
      this.props.request.approvalCount >= this.props.approvers / 2;
    return (
      <Row
        disabled={this.props.request.complete}
        positive={readyToFinalize && !this.props.request.complete}
      >
        <Cell>{this.props.id}</Cell>
        <Cell>{this.props.request.description}</Cell>
        <Cell>{Web3.utils.fromWei(this.props.request.value, "ether")}</Cell>
        <Cell>{this.props.request.recipient}</Cell>
        <Cell>
          {this.props.request.approvalCount}/{this.props.approvers}
        </Cell>
        <Cell>
          {this.props.request.complete ? null : (
            <Button
              basic
              color="green"
              loading={this.state.approving}
              onClick={this.onApprove}
            >
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          <Button
            basic
            disabled={this.state.isFinalizeDisabled}
            color="teal"
            loading={this.state.finalizing}
            onClick={this.onFinalize}
          >
            Finalize
          </Button>
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
