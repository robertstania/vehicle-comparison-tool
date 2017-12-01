/*eslint-disable*/
import React from 'react';
import {connect} from 'react-redux';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class OneLocation extends React.Component {
  render() {
    let locationInventory = this.props.cars.map(car => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <ListGroupItem>{this.props.car.year} {this.props.car.make} {this.props.car.model}</ListGroupItem>
        </Link>
      )
    })
    return (
      <Container style={{marginTop: 20}}>
        <h2>{this.props.location ? this.props.location.name: ''}</h2>
        <h4>{this.props.location ? this.props.location.address: ''}</h4>

        <ListGroup>
          {locationInventory}
        </ListGroup>

      </Container>
      // <div>
      //   <Card>
      //     <CardBody>
      //       <CardSubtitle>Name: {this.props.location ? this.props.location.name : ''}</CardSubtitle>
      //       <CardSubtitle>Address: {this.props.location ? this.props.location.address : ''}</CardSubtitle>
      //     </CardBody>
      //   </Card>
      // </div>
    )
  }
}
function mapStateToProps(state, props) {
  // console.log('props in mstp', props);
  return {
    location: state.locations.filter(location => location.id == props.match.params.locations_id)[0],
    cars: state.cars.filter(car => car.location_id == props.match.params.cars_id)
  }
}
export default connect(mapStateToProps, null)(OneLocation);





{/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const OneLocation = ({location, cars}) => {
  let locationInventory = cars.map(car => {
    return (
      <Link to={`/cars/${car.id}`} key={car.id}>
        <ListGroupItem>{car.year} {car.make} {car.model}</ListGroupItem>
      </Link>
    )
  })
  return (
    <Container style={{marginTop: 20}}>
      <h2>{location ? location.name: ''}</h2>
      <h4>{location ? location.address: ''}</h4>

      <ListGroup>
        {locationInventory}
      </ListGroup>

    </Container>
  )
}

function mapStateToProps(state, props) {
  return {
    location: state.locations.filter(location => location.id == props.match.params.id)[0],
    cars: state.cars.filter(car => car.location_id == props.match.params.id)
  }
}

export default connect(mapStateToProps, null)(OneLocation);*/}
