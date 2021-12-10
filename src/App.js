import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchSmurfs} from './actions/index'

const App = (props)=> {
  const {loading, error} = props
  console.log('LOOK HERE',props)
  useEffect( () => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
      // smurf: state.smurf,
      loading: state.loading,
      error: state.error
    }
}
export default connect(mapStateToProps, {fetchSmurfs}) (App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component. done
//2. Call the fetchSmurfs action when the component mounts.