import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Diary from './containers/Diary/Diary';
import Add from './containers/Add/Add';
import News from './containers/News/News';
import Edit from './components/DiaryEdit/DiaryEdit';
import Contacts from './containers/Contacts/Contacts';


export class App extends Component {
  render() {
    return (
      <Layout>
      <Switch>
          <Route path="/" exact component={Diary}/>
          <Route path="/news" component={News}/>
          <Route path="/add" component={Add}/>
          <Route path="/edit/:id" component={Edit}/>
          <Route path="/contacts" component={Contacts}/>
      </Switch>
      </Layout>
    );
  }
}

export default App
