import React, { Component } from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';
import Article from './Components/Article';
import Articles from './Components/Articles';

class App extends Component {
  state={
    art:{}
  }
  fetchedArticle(at){
    this.setState({art:at})

  }
  render(){
  return (
    <Router>
    <div className="App">
      <Switch>
  <Route path="/Article" exact render={(props)=><Article {...props} art={this.state.art} onClickHandler={this.fetchedArticle} />}/>
        <Route path="/Articles" render={(props)=><Articles {...props} onClickHandler={this.fetchedArticle}/>}/>
         <Route path="/Articles/CreateArticle" component={CreateArticle}/>
        <Route path="/Articles/UpateArticle" render={(props)=><UpdateArticle {...props}  art={this.state.art} />}/>
      </Switch>
    </div>
    </Router>
  );
}
}

export default App;
