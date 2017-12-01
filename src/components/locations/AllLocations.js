import React from 'react';
import { connect } from 'react-redux';
import LocationItem from './LocationItem';
import { Container, Row, Col } from 'reactstrap';

class AllLocations extends React.Component {
  render () {
    let listOfLocations = this.props.locations.map(location => {
      return (
        <Col key={location.id} md="3" style={{marginBottom: 15}}>
          <LocationItem location={location} />
        </Col>
      )
    })
    return (
      <Container style={{paddingTop: 20}}>
        <Row>{listOfLocations}</Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    locations: state.locations
  }
}

export default connect(mapStateToProps, null)(AllLocations);
