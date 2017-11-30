import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import CarInfo from './CarInfo'

class CarList extends Component {
  render() {
    let containerMargin = { marginTop: '35px' }
    let listOfCars = this.props.cars.map(car => {
      return (
        <Col key={car.id} md={4}>
          <CarInfo car={car} />
        </Col>
      )
    })
    return (
      <Container style={containerMargin}>
        <Row>
          {listOfCars}
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps, null)(CarList)
