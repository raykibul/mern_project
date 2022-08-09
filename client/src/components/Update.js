import axios from 'axios';
import React from 'react';

class Update extends React.Component{
    constructor (props){
        super(props);
        
        this.state = {username:this.props.user.username,phone:this.props.user.phone,email:this.props.user.email }

        console.log(this.props.reloadUser);
    }
    
    componentDidMount(){
        this.setState({username:this.props.user.username,phone:this.props.user.phone,email:this.props.user.email})
    }

    


    updateButtonClick = ()=>{
        const  username = this.state.username;
        const phone = this.state.phone;
        const email = this.state.email;
        const id = this.props.user._id

        if(!email || !username || !phone){
            alert("please insert every input!");
        }else{
            axios.patch(`http://127.0.0.1:3020/user/${id}`,{
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
                <h1> Update Form</h1>
      <label>UserName: </label>
      <input type="text" defaultValue={this.state.username} onChange={(event)=>{
        this.setState({username: event.target.value}
            )
      }} />
      <label>User Phone: </label>
      <input type="text" defaultValue={this.state.phone} onChange={(event)=>{
        this.setState({phone: event.target.value}
            )
      }}/>
      <label>User Email: </label>
      <input type="text" value={this.state.email} onChange={(event)=>{
        this.setState({email: event.target.value}
            )
      }}/>
      <button onClick={this.updateButtonClick}>Update User</button>
      <button onClick={()=>this.props.cancellClick()}>Cancell</button>
      <h1>User Details</h1>
            </div>
        );
    }
}

export default Update