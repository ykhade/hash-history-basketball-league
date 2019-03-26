import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import Navbar from './Navbar';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/players'} component={Players}/>
                        <Route path={'/teams'} component={Teams}/>
                        <Route render={() => <h1 className={'text-center'}>Four oh Four. </h1>}/> (//Default 404 route)
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
