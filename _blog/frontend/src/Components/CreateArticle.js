import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class CreateArticle extends Component{
    state={
        name:'',
        title:'',
        content:'',

    }

    render(){
        return(
        <div>
            <form method="POST">
            <label></label><br/>
                <input type="text"/>
                <label></label><br/>
                <input type="text"/>
                <label></label><br/>
                <input type="text"/>
            </form>
            
            


        </div>
        );
    }
}
export default CreateArticle