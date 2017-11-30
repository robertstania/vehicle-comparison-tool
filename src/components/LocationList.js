import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import LocationInfo from './LocationInfo'

class LocationList extends Component {
  render() {
    let containerMargin = { marginTop: '35px' }
    let listOfLocations = this.props.locations.map(location => {
      return (
        <Col key={location.id} md={4}>
          <LocationInfo location={location} />
        </Col>
      )
    })
    return (
      <Container style={containerMargin}>
        <Row>
          {listOfLocations}
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    locations: state.locations
  }
}

export default connect(mapStateToProps, null)(LocationList)
