import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

//import Layout from './hoc/layout/layout.component'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact pacth='/' component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
