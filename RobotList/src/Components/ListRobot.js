import React,{Component} from 'react'
import Robots from '../Data/Robots'

 class ListRobot extends Component{

    state={
        Roboto:Robots,
        color:'#ffffff'
    }
    

    changer=(e)=>{

      var val=e.target.value

      this.setState({
          Roboto :Robots.filter(rbt=>rbt.Nom.startsWith(val))
      })
      console.log('in state color is '+this.state.color)
      
      //var items =document.getElementsByClassName('flex-item')

          //  for(var i=0 ; i<items.length; i++){
            
             //   items[i].style.backgroundColor=this.state.color;
            //}
      }

      ColorChanger=(e)=>{
        console.log(e.target.value)
        this.setState({
            color :e.target.value
        })
        
        var items =document.getElementsByClassName('flex-item')

            for(var i=0 ; i<items.length; i++){
            
                items[i].style.backgroundColor=e.target.value;
            }
    }
    render(){
            
        
        return(
        <div>
            <label>Search</label>&nbsp;
           <input type='text' onChange={this.changer}/>
           <br/>
           <label>Chose Color</label>&nbsp;
           <input type="color" id='col' onChange={this.ColorChanger}/>

            <div class="flex-container">
                 
                {this.state.Roboto.map((robot)=>

                <div class="flex-item">

                    <img  class='pic' src={robot.img}/>

                    <h3>{robot.Nom}</h3>

                    <h4>{robot.Prenom}</h4>
                </div>
                )
                }
            </div>
        </div>
            

        );
    }
}
export default ListRobot