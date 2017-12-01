/*eslint-disable*/
import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLocation } from '../../actions/locations';

class AddEditLocation extends React.Component {
  state = {
    name: '',
    address: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addLocation(this.state)
    this.props.history.push('/locations')
  }

  render () {
    return (
      <Container style={{marginTop: 30}}>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input
              type="text"
              id="exampleName"
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              type="text"
              id="exampleAddress"
              value={this.state.address}
              onChange={(e) => this.setState({address: e.target.value})}
            />
          </FormGroup>
          <Button color="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addLocation: bindActionCreators(addLocation, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddEditLocation);
