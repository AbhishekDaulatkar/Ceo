import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

 

export default class ShowSpecificCeo extends Component {
    constructor(){
        super();
        this.state={
            Ceo:[],
            ceoId:'',
            firstName:'',
            lastName:'',
            e_Mail:'',
            contactNumber:'',
            department:'',
            dateJoined:'',
            leaveBalance:'',
            password:'',
            checkPassword:''
        
        }
        this.update=this.update.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
    ShowSpecific()
    {
        
        {    let ceoId=this.state.ceoId;
            fetch("http://localhost:50734/api/CeoDetails/ShowSpecific/"+ceoId,
            {
                "method":"GET",
                "headers": 
                {
                    "content-type":"application/json",
                     "accept":"application/json"
                },
        body:JSON.stringify({
    
                
                firstName:this.state.firstName,
                lastName:this.state.lastName ,
                e_Mail:this.state.e_Mail,
                contactNumber:this.state.contactNumber,
                department:this.state.department,
                dateJoined:this.state.dateJoined ,
                password:this.state.password ,
                checkPassword:this.state.checkPassword;
    
              })
        }
    }
    }
