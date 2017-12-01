import React from 'react';
import { connect } from 'react-redux';
import CarItem from './CarItem';
import { Container, Row, Col } from 'reactstrap';

class AllCars extends React.Component {
  render () {
    let listOfCars = this.props.cars.map(car => {
      return (
        <Col key={car.id} md="3" style={{marginBottom: 15}}>
          <CarItem car={car} />
        </Col>
      )
    })
    return (
      <Container style={{paddingTop: 20}}>
        <Row>{listOfCars}</Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps, null)(AllCars);
