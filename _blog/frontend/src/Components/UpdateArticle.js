import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UpdateArticle extends Component{
    state={
        art:{}
    }
    componentDidMount(){
        axios.get('http://localhost:4001/api/Article',{data:{_id:this.props.art._id}}).then(res=>this.setState({art:res.data}))

    }
    render(){
        return(
        <div>
            
            <form method="PUT">
                <label>Name</label><br/>
                <input type="text"/>
                <label>Title</label><br/>
                <input type="text"/>
                <label>Catagory</label><br/>
                <input type="text"/>
                <label></label><br/>
                <input type="text"/>
                <label></label><br/>
                <input type="text"/>
                <label></label><br/>
                <textarea rows="/>
            </form>

        </div>
        );
    }
}
export default UpdateArticle