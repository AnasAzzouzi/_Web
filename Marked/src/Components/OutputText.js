import React,{Component} from 'react'
import marked from 'marked'




 class OutputText extends Component{

    render(){

        return(

            <div class="flex-item">

                <h1> Output </h1>
                <p dangerouslySetInnerHTML={this.props.newText}></p>

            </div>
        );
    }



 }
export default OutputText 