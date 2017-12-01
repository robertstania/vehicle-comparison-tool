/*eslint-disable*/
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router';
import { Container, Row, Col, Button } from 'reactstrap';

import { getCar } from './actions/cars';
import TopNav from './components/TopNav';
import AllCars from './components/cars/AllCars';
import OneCar from './components/cars/OneCar';
import CarItem from './components/cars/CarItem';
import AddEditCar from './components/cars/AddEditCar';

import { getLocation } from './actions/locations';
import AllLocations from './components/locations/AllLocations';
import OneLocation from './components/locations/OneLocation';
import LocationItem from './components/locations/LocationItem';
import AddEditLocation from './components/locations/AddEditLocation';

import CompareVehicles from './components/CompareVehicles';


import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

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
          {/*<Container style={{marginTop: 25}}>
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
           </Col>
         </Row>} */}
          <Router>
            <Switch>

              <Route exact path='/' component={AllCars} />
              <Route exact path='/cars' component={AllCars} />
              <Route exact path='/cars/new' component={AddEditCar}/>
              <Route exact path='/cars/:cars_id' component={OneCar}/>
              <Route exact path='/cars/:cars_id/edit' component={AddEditCar}/>

              <Route exact path='/locations' component={AllLocations}/>
              <Route exact path='/locations/new' component={AddEditLocation}/>
              <Route exact path='/locations/:locations_id' component={OneLocation}/>
              <Route exact path='/locations/:locations_id/edit' component={AddEditLocation}/>

              <Route exact path='/compare' component={CompareVehicles}/>

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
