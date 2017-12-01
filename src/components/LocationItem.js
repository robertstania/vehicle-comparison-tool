/*eslint-disable*/
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class LocationItem extends React.Component {
  render(){
    return (
      <div>
        <Card>
          <CardBody>
            <CardSubtitle>Name: {this.props.location ? this.props.location.name : ''}</CardSubtitle>
            <CardSubtitle>Address: {this.props.location ? this.props.location.address : ''}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    )
  }
}
export default LocationItem;
