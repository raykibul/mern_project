import React from 'react';
 
class UserTable extends React.Component{
  

    render(){
        return (
            <div>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                        
                    </tr>

                  {this.props.userList.map((user)=> (

                    <tr>
                        <td>{user.userName}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>
                        <button onClick= {() => this.props.isUpdating(true,user)}>Edit</button>
                        <button onClick= {() => this.props.deleteUser(user._id)}>Delete</button>
                        </td>
                    </tr>

                  ))}
                    
                    
                 
                    
                </table>
            </div>
        )
    }

}


export default UserTable