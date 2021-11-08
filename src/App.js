import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './Components/Header'
import { Home } from './Components/Home/Home'
import { About } from './Components/About'
import { Contacts } from './Components/Contacts'
import { Blog } from './Components/Blog'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
