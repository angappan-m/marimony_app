import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../assets/css/login.css';
import Axios from 'axios';
import Api from '../../Api';

const Login = () => {
    const [data,setData] = useState({
        email: '',
        pass: ''
    });

    const handleEvent = (e) => {
        var newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post(Api.base_uri+Api.login_uri,data).then((res) => {
            console.log(res.data);
            if(res.data.status){
                alert(res.data.message);
            }else{
                alert(res.data.message);
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className="container">
            <br/>
            <div className="card shadow-lg">
            <div class="form-content register-box">
            <form onSubmit={handleSubmit}>
                <div class="form-group form-box">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" value={data.email} onChange={(e) => handleEvent(e)} id="email" placeholder="Email Address" />
                </div>
                <div class="form-group form-box">
                    <label for="pass">Password</label>
                    <input type="password" class="form-control" value={data.pass} onChange={(e) => handleEvent(e)} id="pass" placeholder="Password" />
                </div>
               <div class="forgetpass">
<Link to="#">Forget Password</Link>
</div>
                <button type="submit" class="btn register-button">Login</button>
           
</form>

<div class="register">
<Link to="#">Create a new Account</Link>
            </div>
</div>
            </div>
        </div>
    )
};

export default Login;
