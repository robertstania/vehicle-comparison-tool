/*eslint-disable*/
import React from 'react';
import {connect} from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class OneCar extends React.Component {
  render(){
    return (
      <div>
        <Card>
          <CardBody>
            <CardImg top width="100%" src={this.props.car ? this.props.car.photo_url : ''} alt="Card image cap" />
            <CardSubtitle>Year: {this.props.car ? this.props.car.year : ''}</CardSubtitle>
            <CardSubtitle>Make: {this.props.car ? this.props.car.make : ''}</CardSubtitle>
            <CardSubtitle>Model: {this.props.car ? this.props.car.model : ''}</CardSubtitle>
            <CardSubtitle>Price: {this.props.car ? this.props.car.price : ''}</CardSubtitle>
            <CardSubtitle>Miles: {this.props.car ? this.props.car.miles : ''}</CardSubtitle>
            <CardSubtitle>Location ID: {this.props.car ? this.props.car.location_id : ''}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    car: state.cars.filter(car => car.id == props.match.params.cars_id)[0]
  }
}
export default connect(mapStateToProps, null)(OneCar);
