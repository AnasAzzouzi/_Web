import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import OutputText from './Components/OutputText'
import InputText from './Components/InputText'
import marked from 'marked'

class App extends Component {
  state ={
    marked:' hello',
    unmarked :' world'
  }
  changeHandler=e=>{
    const text = e.target.value;
   this.setState({unmarked:text})
   
  }
  getMarkdownText(text){
    var rawMarkup=marked(text,{sanitize:true})
    return {__html:rawMarkup}
  }
  render(){
  return (
    <div className="App">

      <div class="flex-container">

          <InputText changeHandle={e=>this.changeHandler(e)}/>

          <OutputText newText={this.getMarkdownText(this.state.unmarked)}/>

      </div>

    </div>

  );
}
}

export default App;
