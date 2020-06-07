import React, { Component } from 'react'
import InputBox from './InputBox'
import Todos from "./Todos"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom"
import Modal from './Modal';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <InputBox/>
        <Todos />
        <Modal />
      </div>
    )
  }
}
