import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    IndexRedirect,
    Redirect
} from 'react-router';
import App from 'components/App';
import Test from 'components/Test';
// import NotFound from '../components/NotFound';
import TodoList from 'components/Todos/TodoList';
import Home from 'components/Home';
import Blog from 'components/Blog';

import exampleRoutes from './example';

export default class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/test' component={Test} />
                <Route path='/todo' component={TodoList} />
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='blog' component={Blog} />
                    {exampleRoutes}
                </Route>
            </Router>
        );
    }
}
