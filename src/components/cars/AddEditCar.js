import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCar } from '../../actions/cars';

class AddEditCar extends React.Component {
  state = {
    year: 0,
    make: '',
    model: '',
    miles: 0,
    price: 0,
    photo_url: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCar(this.state)
    this.props.history.push('/cars')
  }

  render () {
    return (
      <Container style={{marginTop: 30}}>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleYear">Year</Label>
            <Input
              type="number"
              id="exampleYear"
              value={this.state.year}
              onChange={(e) => this.setState({year: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleMake">Make</Label>
            <Input
              type="text"
              id="exampleMake"
              value={this.state.make}
              onChange={(e) => this.setState({make: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleModel">Model</Label>
            <Input
              type="text"
              id="exampleModel"
              value={this.state.model}
              onChange={(e) => this.setState({model: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleMiles">Miles</Label>
            <Input
              type="number"
              id="exampleMiles"
              value={this.state.miles}
              onChange={(e) => this.setState({miles: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePrice">Price</Label>
            <Input
              type="number"
              id="examplePrice"
              value={this.state.price}
              onChange={(e) => this.setState({price: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePhotoUrl">Photo Url</Label>
            <Input
              type="text"
              id="examplePhotoUrl"
              value={this.state.photo_url}
              onChange={(e) => this.setState({photo_url: e.target.value})}
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
    addCar: bindActionCreators(addCar, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddEditCar);
