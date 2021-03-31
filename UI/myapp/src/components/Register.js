import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password : e.target.value
        })
    }

    onSubmit(e){
        //handle the register button function
        e.preventDefault();

        let formData = new FormData();

        formData.append( 'email', this.state.email );
        formData.append( 'password', this.state.password );

        const url= "http://localhost:80/omobioApp/register.php";
        axios.post(url,formData).then( res=>console.log(res.data) )

        this.setState({
            email : '',
            password : ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} id="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}