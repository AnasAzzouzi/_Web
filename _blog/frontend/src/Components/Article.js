import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Article extends Component{
    state={
        art:{}
    }
    componentDidMount(){
        axios.get('http://localhost:4001/api/Article',{data:{_id:this.props.art._id}}).then(res=>this.setState({art:res.data}))

    }
    render(){
        return(
        <div>
            
            {this.state.article.map((art)=>{
                <div>
                <h1>{art.title}</h1>
                <p>{art.substr(1,100)}</p>
                <Link to="/Article">ReadMore</Link>
                <Link to="/UpdateArticle" onClick={this.props.onClickHandler(this.state.art)}>Update</Link>
                <Link to="/DeleteArticle">Delete</Link>
                <hr/>
                </div>
            })}


        </div>
        );
    }
}
export default Article