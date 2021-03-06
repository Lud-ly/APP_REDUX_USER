import React, { Component } from 'react';
import UserList from '../containers/user_list';
import UserDetail from '../containers/user_detail';
import MyNav from './nav';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <MyNav/>
        <UserList/>
        <UserDetail/>
        <Footer/>
      </div>
    );
  }
}
