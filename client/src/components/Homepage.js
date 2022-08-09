import axios from 'axios';
import React from 'react';
import Register from "./Register";
import Update from './Update';
import UserTable from './UserTable';

class Homepage extends React.Component{

    constructor(props){
        super(props)
        this.state = {userList : [],is_updating : false , updatingUser:{username:'',phone:'',email:''}}
        
    }

    componentDidMount(){
        this.load();
    }

    handleDeleteButtonClick=(user_id)=>{
        const id = user_id;
        if(!id ){
            alert("invalid Object _ID");
        }else{
            axios.delete(`http://127.0.0.1:3020/user/${id}`).then((res)=>{
                if(res.status===422){
                    alert(`error: ${res.data}`);
                }else if(res.status===200){
                   this.load();
                }
            
            });
        }
    }
    handleCancellUpdateClick =()=>{
            this.setState({is_updating:false})
    }

    handleUpdateclick = (value,user)=>{
        
        this.setState({is_updating:value});
        this.setState({updatingUser:{username:user.userName,phone:user.phone,email:user.email,_id:user._id}});
    }
    
     load = ()=>{
        axios.get("http://127.0.0.1:3020/")
        .then((res)=>{
          if(res.status===422){
            alert(`Error: ${res.data}`)
          }else if(res.status===200){
              this.setState({userList: res.data});
              
          }
      
      });
    }


    render(){
        const is_updating = this.state.is_updating;
        let update ;

        if(is_updating){
            update =  <Update reloadUser={this.load} cancellClick={this.handleCancellUpdateClick} user ={this.state.updatingUser} />;
        }

        return (
            <div>
                <Register reloadUser={this.load} />
                {update}
                <UserTable userList ={this.state.userList} isUpdating={this.handleUpdateclick} deleteUser={this.handleDeleteButtonClick} />
               
            </div>
           
        )
    }


}

export default Homepage