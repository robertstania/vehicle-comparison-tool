/*eslint-disable*/
import React from 'react';
import {connect} from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class LocationInfo extends React.Component {
  render() {
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
function mapStateToProps(state, props) {
  // console.log('props in mstp', props);
  return {
    location: state.locations.filter(location => location.id == props.match.params.locations_id)[0]
  }
}
export default connect(mapStateToProps, null)(LocationInfo);
