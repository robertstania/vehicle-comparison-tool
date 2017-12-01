/*eslint-disable*/
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class CarItem extends React.Component {
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
export default CarItem;

{/*Functional Component Versions
const CarInfo = (props) => {
  console.log('car info:', props.car)
  console.log('props', props)

  return (
    <div>
      <Card>
        <CardBody>
          <CardImg top width="100%" src={props.car ? props.car.photo_url : ''} alt="Card image cap" />
          <CardSubtitle>Year: {props.car ? props.car.year : ''}</CardSubtitle>
          <CardSubtitle>Make: {props.car ? props.car.make : ''}</CardSubtitle>
          <CardSubtitle>Model: {props.car ? props.car.model : ''}</CardSubtitle>
          <CardSubtitle>Price: {props.car ? props.car.price : ''}</CardSubtitle>
          <CardSubtitle>Miles: {props.car ? props.car.miles : ''}</CardSubtitle>
          <CardSubtitle>Location ID: {props.car ? props.car.location_id : ''}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}
export default (CarInfo)

const CarItem = ({car}) => {
  return (
    <div>
      <Card style={{minHeight: 272}}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{car.make} {car.model}</CardTitle>
          <CardSubtitle>{car.year}</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};
export default CarItem;*/}
