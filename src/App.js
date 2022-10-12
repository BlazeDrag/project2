import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/navbar";
import News from "./component/news";
// import { createContext } from "react";
export default class App extends Component {
  state={progress:""}
  setprog=(prog)=>{
    this.setState({progress:prog})
  }
  render() {
    return (
      <>
       <div className="stick">
        <Navbar /></div>
        {this.state.progress&&<div className="lo stick "></div>}
        
        <div className="ver">
        <Routes >
          <Route
            exact
            path="/"
            element={
             <News setprogress={this.setprog}key={"business"} heading="Business" category={"business"} />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
             <News setprogress={this.setprog} key={"sports"} heading="Sports" category={"sports"} />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News setprogress={this.setprog}
                key="entertainment"
                heading="Entertainment"
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
             <News setprogress={this.setprog} key="general" heading="General" category={"general"} />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={<News setprogress={this.setprog} key="health" heading="Health" category={"health"} />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
              setprogress={this.setprog}
                key="technology"
                heading="Technology"
                category={"technology"}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
             <News setprogress={this.setprog} key="science" heading="Science" category={"science"} />
            }
          ></Route>
        </Routes></div>
      
      </>
    );
  }
}
