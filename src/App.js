/*eslint-disable*/
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router';
import { getCar } from './actions/cars';
import { getLocation } from './actions/locations';
import TopNav from './components/TopNav';
import CarList from './components/CarList';
import CarInfo from './components/CarInfo';
import CarAddEdit from './components/CarAddEdit';
import LocationList from './components/LocationList';
import LocationInfo from './components/LocationInfo';
import LocationAddEdit from './components/LocationAddEdit';
import VehicleComparisonScreen from './components/VehicleComparisonScreen';
import { Container, Row, Col, Button } from 'reactstrap';


import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

class App extends React.Component {
  state = {
   showAddForm: false
 }

  componentDidMount(){
    this.props.getCar();
    this.props.getLocation();
  }

  render () {
    return (
      <div className="App">
        <TopNav />
          <Container style={{marginTop: 25}}>
           <Button
             onClick={() => this.setState({
               showAddForm: !this.state.showAddForm
             })}
             >
             Add Car
           </Button>
         </Container>
         {this.state.showAddForm && <Row>
           <Col>
             <CarInfo/>
           </Col>
         </Row>}
          <Router>
            <Switch>

              <Route exact path='/'
                component={CarList}/>
              <Route exact path='/cars'
                component={CarList}/>
              <Route exact path='/cars/new'
                component={CarAddEdit}/>

              <Route exact path='/cars/:cars_id' component={CarInfo}/>

              <Route exact path='/cars/:cars_id/edit'
                component={CarAddEdit}/>


              <Route exact path='/locations'
                component={LocationList}/>
              <Route exact path='/locations/new'
                component={LocationAddEdit}/>
              <Route exact path='locations/:locations_id'
                exact render={({match}) => (
                  <LocationInfo location={locations.find(location =>
                      location.id == match.params.locations_id
                  )}/>
                )}/>
              <Route exact path='/locations/:locations_id/edit'
                component={LocationAddEdit}/>

              <Route exact path='/compare'
                component={VehicleComparisonScreen}/>
            </Switch>
          </Router>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCar: bindActionCreators(getCar, dispatch),
    getLocation: bindActionCreators(getLocation, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
