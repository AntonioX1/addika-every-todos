import React, { Component }                         from 'react'
import { BrowserRouter as Router, Route, Switch }   from 'react-router-dom'
import TodoListContainer                            from './containers/TodoListContainer'
import TodoContainer                                from './containers/TodoContainer'
import TodoNewContainer                             from './containers/TodoNewContainer'
import './App.css'

class App extends Component {

  render() {

    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/todos/new" component={ TodoNewContainer }></Route>
          <Route exact path="/todos/:id" render={ props => <TodoContainer id={ Number(props.match.params.id) }/> }></Route>
          <Route exact path="/todos/:id/edit" render={ props => <TodoContainer id={ Number(props.match.params.id) }/> } />
          <Route exact path="/" component={ TodoListContainer }></Route>
          <Route exact path="/todos" component={ TodoListContainer }></Route>
        </Switch>
        </div>
      </Router>
    );

  }

}

export default App;
