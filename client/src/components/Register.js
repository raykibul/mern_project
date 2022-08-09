import axios from 'axios';
import React from 'react';

class Register extends React.Component{
    constructor (props){
        super(props);
        this.state = {username:"",phone:"",email:""}
        console.log(this.props.reloadUser);
    }

    submitButtonClick = ()=>{
        const  username = this.state.username;
        const phone = this.state.phone;
        const email = this.state.email;
        if(!email || !username || !phone){
            alert("please insert every input!");
        }else{
            axios.post("http://127.0.0.1:3020/user",{
                username: username,
                phone:phone,
                email: email
            }).then((res)=>{
                if(res.status===422){
                    alert(`error: ${res.data}`);
                }else if(res.status===200){
                    this.props.reloadUser();
                     
                }
            
            });
        }

    }

    render(){
        return (
            <div>
                <h1>New User Form</h1>
      <label>UserName: </label>
      <input type="text" onChange={(event)=>{
        this.setState({username: event.target.value}
            )
      }} />
      <label>User Phone: </label>
      <input type="text" onChange={(event)=>{
        this.setState({phone: event.target.value}
            )
      }}/>
      <label>User Email: </label>
      <input type="text"onChange={(event)=>{
        this.setState({email: event.target.value}
            )
      }}/>
      <button onClick={this.submitButtonClick}>Add New User</button>
   </div>
        );
    }
}

export default Register