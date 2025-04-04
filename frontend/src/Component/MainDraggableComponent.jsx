import React, { Component } from 'react'
import FormComp from './FormComp';


let count=0;
export default class MainDraggableComponent extends Component {

 constructor(props){
      super(props);
      this.state={
        pictureStatus:true
      };

 } 

 handlePictureStatusClick(){
    this.setState(prev=>!prev.pictureStatus);
    this.render();
 }


  render() {
    
    return (
      <>
      <FormComp
      pictureStatus={this.state.pictureStatus}
      handlePictureStatusClick={this.handlePictureStatusClick.bind(this)}
      />
      </>
    )
  }
}
