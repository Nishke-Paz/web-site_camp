import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import BasicInformation from './components/pages/BasicInformation.js';
import Education from './components/pages/Education.js';
import EducationalStandards from './components/pages/EducationalStandards';
import ForParents from './components/pages/ForParents';
import InformationProgram from './components/pages/InformationProgram';
import OrganizationVacations from './components/pages/OrganizationVacations';
import TouristCashback from './components/pages/TouristCashback';
import AntiCorruption from './components/pages/AntiCorruption';
import Contacts from './components/pages/Contacts';
import BuyTicket from './components/BuyTicket.js';
import docs from './components/Docs.js';
import NotFound from './components/pages/NotFound';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import  './index.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstTour: {
        name: '1 смена',
        ticketCounter: 90
      },
      secondTour: {
        name: '2 смена',
        ticketCounter: 90
      },
      thirdTour: {
        name: '3 смена',
        ticketCounter: 90
      },
      fourthTour: {
        name: '4 смена',
        ticketCounter: 90
      }
    }
  }

  changeTicket = (name) => {
    let nameForChange;
    Object.keys(this.state).forEach(item => {
      if (this.state[item].name == name) nameForChange = item;
    })
    this.setState((state) => ({
      [nameForChange]: {
        name: this.state[nameForChange].name,
        ticketCounter: this.state[nameForChange].ticketCounter - 1
      }
    }));
  }
  
  render(){
    return(
      <>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path='/'><Main numberOfVouchers={this.state.firstTour.ticketCounter}></Main></Route>
            <Route path='/BasicInformation' component={BasicInformation}></Route>
            <Route path='/docs' component={docs}></Route>
            <Route path='/Education' component={Education}></Route>
            <Route path='/EducationalStandards' component={EducationalStandards}></Route>
            <Route path='/ForParents' component={ForParents}></Route>
            <Route path='/InformationProgram' component={InformationProgram}></Route>
            <Route path='/OrganizationVacations' component={OrganizationVacations}></Route>
            <Route path='/TouristCashback' component={TouristCashback}></Route>
            <Route path='/AntiCorruption' component={AntiCorruption}></Route>
            <Route path='/Contacts' component={Contacts}></Route>
            <Route path='/BuyTicket'><BuyTicket changeTicket={this.changeTicket}></BuyTicket></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  };
}

export default App;
