import React,{ Component } from "react";
import  Test  from "./test";
import { Router } from "react-router-dom";

class testList extends Component {

  
  
  
  render(){
    let zzz=()=>{
        console.log("ㅋㅋㅋ");
        // console.log(<Test></Test>)
        return <Test></Test>
    }
    return (
      <div>
        <ul>
          <li
           onClick={zzz}
          >data1</li>
          <li>데이터셋2</li>
          <li>데이터셋3</li>
        </ul>
        
      </div>
      
    );
  }
}
export default testList;