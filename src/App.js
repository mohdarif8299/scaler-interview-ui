import logo from './logo.svg';
import './App.css';
import { Route, withRouter, Switch } from "react-router-dom";
import meeting from './components/meeting-component';
import Example from './components/all-meetings-component';
import AllMeeting from './components/all-meetings-component';
import Meeting from './components/meeting-component';
import Header from './components/app-header';
import UpdateMeeting from './components/update-meeting';

function App() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-12">
            <Header></Header>
            <Switch>
               <Route
                exact
                path="/"
                component={() => (
                  <AllMeeting/>
                )}
              ></Route>
              <Route
                exact
                path="/create-meeting"
                component={() => (
                  <Meeting/>
                )}
              ></Route>
               <Route
                exact
                path="/update"
                component={() => (
                  <UpdateMeeting/>
                )}
              ></Route>
              </Switch>
          </div>
      </div>
    </div>
  );
}
export default withRouter(App);
