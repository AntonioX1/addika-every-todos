import React, { Component }                         from 'react'
import { BrowserRouter as Router, Route, Switch }   from 'react-router-dom'
import TaskListContainer                            from './containers/TaskListContainer'
//import TodoContainer                                from './containers/TodoContainer'
//import TodoNewContainer                             from './containers/TodoNewContainer'
import './App.css'

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ TaskListContainer }></Route>
        </Switch>
      </Router>
      /*<Router>
        <div>
        <Switch>
          <Route exact path="/tasks/new" component={ TodoNewContainer }></Route>
          <Route exact path="/tasks/:id" render={ props => <TodoContainer id={ Number(props.match.params.id) }/> }></Route>
          <Route exact path="/tasks/:id/edit" render={ props => <TodoContainer id={ Number(props.match.params.id) }/> } />
          <Route exact path="/" component={ TaskListContainer }></Route>
          <Route exact path="/tasks" component={ TaskListContainer }></Route>
        </Switch>
        </div>
      </Router>*/
    );

  }

}

export default App;
