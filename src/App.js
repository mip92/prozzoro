import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "./redux/reduxstore";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Error404 from "./components/e404/e404";
import Preloader from "./components/Preloader/Preloader";
import Profile from "./components/Profile/Profile";
import HeaderContainer from "./components/Header/Header.jsx";
import Cabinet from "./components/Cabinet/Cabinet";


class App extends React.Component {
  render() {
      if (this.props.initialized==true) {
          return <Preloader/>
      }
      return(
          <div className='app-wrapper'>
              <HeaderContainer/>
              <div className="app-wrapper-content">
                  <Switch>
                      <Route exact path="/" render={() => <Redirect to='/registration'/>}/>
                      <Route path="/registration" render={() => <Registration/>}/>
                      <Route path="/login" render={() => <Login/>}/>
                      <Route path="/profile" render={() => <Profile/>}/>
                      <Route path="/cabinet" render={() => <Cabinet/>}/>
                      <Route path="*" render={() => <Error404/>}/>
                  </Switch>

              </div>
              <div className='error'>{this.props.globalError}</div>
          </div>
      )
  };
}
const mapStateToProps = (state) => ({
    initialized: state.initialized,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {},
    ))(App);

const ProzzoroApp=() => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
  )
}
export default ProzzoroApp;
