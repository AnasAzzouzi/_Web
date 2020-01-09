import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Articles extends Component{
    state={
        articles:[]
    }
    componentDidMount(){
        axios.get('http://localhost:4001/api/Articles').then(res=>this.setState({articles:res.data}))

    }
    render(){
        return(
        <div>
            
            {this.state.article.map((art)=>{
                <div>
                <h1>{art.title}</h1>
                <p>{art.substr(1,100)}</p>
                <Link to="/Article" onClick={()=>{this.props.onClickHandler(art)}}>ReadMore</Link>
                <hr/>
                </div>
            })}


        </div>
        );
    }
}
export default Articles