import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent";
import './customApps.css';
import {book} from '../config';

export default class extends Component {
  constructor(props){
    super(props);

    this.state = {
        fields: {},
        errors: {}
    }
 }

 handleValidation(){
     let fields = this.state.fields;
     let errors = {};
     let formIsValid = true;

     //Name
     if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Cannot be empty";
     }

     if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[A-Z]+$/)){
           formIsValid = false;
           errors["name"] = "Only letters";
        }        
     }
     
    this.setState({errors: errors});
    return errors;
}
 


  handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});

    this.handleValidation();


    }

  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
        <div className="container">
            <h1>Bukit Vista</h1>
            <div className="parent">
                <div className="portal">
                    <h3>{book.word2}</h3>
                </div>
                <div className ="book">
                    <h4>{book.word1}</h4>
                    <input type="text" placeholder="Input Code" onChange={this.handleChange.bind(this, "name")} ></input>
                </div>
            </div>
        </div>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
