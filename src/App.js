/*eslint-disable*/
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router';
import { getCars } from './actions/cars';
import { getLocations } from './actions/locations';
import TopNav from './components/TopNav';
import CarList from './components/CarList';
import CarInfo from './components/CarInfo';
import CarAddEdit from './components/CarAddEdit';
import LocationList from './components/LocationList';
import LocationAddEdit from './components/LocationAddEdit';
import LocationInfo from './components/LocationInfo';
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
    this.props.getCars();
    this.props.getLocations();
  }

  render () {
    return (
      <div className="App">
        <TopNav />
          <Container style={{marginTop: 25}}>
           <Button
             onClick={() => this.setState({ showAddForm: !this.state.showAddForm})}
             >
             Add Car
           </Button>
         </Container>
         {this.state.showAddForm && <Row>
           <Col>
             <CarInfo/>
           </Col>
         </Row>}
        <CarList />
          <Router>
            <Switch>
              <Route exact path='/' component={CarList}/>
              <Route exact path='/cars' component={CarList}/>
              <Route exact path='/locations' component={LocationList}/>
              <Route exact path='/cars/new' component={CarAddEdit}/>
              <Route exact path='/locations/new' component={LocationAddEdit}/>
              <Route exact path='car/:cars_id' exact render={({match}) => (
                  <CarInfo car={cars.find(car =>car.id == match.params.cars_id )}/> )}/>
              <Route exact path='/cars/:cars_id/edit' component={CarAddEdit}/>
              <Route exact path='location/:locations_id' exact render={({match}) => (
                  <LocationInfo location={locations.find(location =>location.id == match.params.locations_id )}/> )}/>
              <Route exact path='/locations/:locations_id/edit' component={LocationAddEdit}/>
              <Route exact path='/compare' component={VehicleComparisonScreen}/>
            </Switch>
          </Router>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCars: bindActionCreators(getCars, dispatch),
    getLocations: bindActionCreators(getLocations, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
