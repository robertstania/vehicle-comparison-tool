import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addCar } from '../actions/cars'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CarAddEdit extends Component {
  state = {
    year: '',
    make: '',
    model: '',
    miles: '',
    photo_url: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCar(this.state)
  }

  render () {
    return (
      <div>
        <Card>
          <CardBody>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="firstName">First Name</Label>
                      <Input
                        type="text"
                        id="firstName"
                        onChange={(e) => this.setState({ year: e.target.value })}
                        value={this.state.year}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="lastName">Last Name</Label>
                      <Input
                        type="text"
                        id="lastName"
                        onChange={(e) => this.setState({ make: e.target.value })}
                        value={this.state.make}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="model">Company</Label>
                      <Input
                        type="text"
                        id="model"
                        onChange={(e) => this.setState({ model: e.target.value })}
                        value={this.state.model}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="miles">Email</Label>
                      <Input
                        type="text"
                        id="miles"
                        onChange={(e) => this.setState({ miles: e.target.value })}
                        value={this.state.miles}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="photoUrl">Photo Url</Label>
                  <Input
                    type="text"
                    id="photoUrl"
                    onChange={(e) => this.setState({ photo_url: e.target.value })}
                    value={this.state.photo_url}
                  />
                </FormGroup>
                <Button type="submit">Submit</Button>
              </Form>
            </Container>
          </CardBody>
        </Card>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCar: bindActionCreators(addCar, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CarAddEdit)
