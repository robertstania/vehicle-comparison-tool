/*eslint-disable*/
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CarInfo = ({car}) => {
    console.log('carinfo:', car)

  return (
    <div>
      <Card>
        <CardBody>
          <CardImg top width="100%" src={car.photo_url} alt="Card image cap" />
          <CardSubtitle>Year: {car.year}</CardSubtitle>
          <CardSubtitle>Make: {car.make}</CardSubtitle>
          <CardSubtitle>Model: {car.model}</CardSubtitle>
          <CardSubtitle>Price: {car.price}</CardSubtitle>
          <CardSubtitle>Miles: {car.miles}</CardSubtitle>
          <CardSubtitle>Location ID: {car.location_id}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}


export default (CarInfo)
