import React,{Component} from 'react'
import text from '../Data/MarkedText'




 class InputText extends Component{

    render(){

        return(

            <div class="flex-item">

                <h1>Input add Your Markdown Text</h1>
                <textarea rows="60" cols="60"onChange={this.props.changeHandle}/>

            </div>
        );
    }



 }
export default InputText 