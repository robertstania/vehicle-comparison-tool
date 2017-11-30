/*eslint-disable*/
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const LocationInfo = ({location}) => {
    console.log('location info:', location)

  return (
    <div>
      <Card>
        <CardBody>
          <CardSubtitle>Name: {location.name}</CardSubtitle>
          <CardSubtitle>Address: {location.address}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}

export default (LocationInfo)
