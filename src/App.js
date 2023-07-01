import React from 'react';
import Navbar from './common/Navbar/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Login from "./components/Login/Login"
import Register from "./components/Login/Register"
import ListCustomer from './components/Customer/ListCustomer';
import DetailCustomer from './components/Customer/DetailCustomer';
import EditCustomer from './components/Customer/EditCustomer';

const App = () => {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/gallery' exact component={Gallery}></Route>
                <Route path='/contact' exact component={Contact}></Route>
                <Route path='/sign-in' component={Login} />
                <Route path='/Register' component={Register} />
                <Route path='/list-customer' component={ListCustomer} />
                <Route path='/customer/detail/:customerId' component={DetailCustomer} />
                <Route path='/customer/edit/:customerId' component={EditCustomer} />
            </Switch>
        </Router>
    </>
  )
}

export default App