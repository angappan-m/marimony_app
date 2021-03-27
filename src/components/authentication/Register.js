import React,{Component,useState} from 'react';
import Axios from 'axios';
import '../../assets/css/register.css';
import Api from '../../Api';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            pass: '',
            dob:'',
            fname: '',
            occup: '',
            designation: '',
            org: '',
            off_add: '',
            district: '',
            state: '',
            pincode: '',
            phone: '',
            email: '',
            pc_add: '',
            eduqual: '',
            hobbies: '',
            aadhar_no: '',
    };
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        Axios.post(Api.base_uri+Api.reg_user_uri,this.state)
        .then((res) => {
            console.log(res.data);
            if(res.data.status){
                alert(res.data.message);
                // return <Redirect to="/login" />
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    render(){
        const{ name,pass,dob,fname,occup,designation,org,off_add,district,state,pincode,phone,email,pc_add,eduqual,hobbies,aadhar_no } = this.state;
        return (
            <div className="container">
                <br/>
                <div className="card shadow-lg">
                <div class="form-content register-box">
                <form method='POST' onSubmit={this.handleSubmit}>
                    <div class="form-group form-box">
                        <label for="inputname">Name</label>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} class="form-control" id="inputname" placeholder="Name" required/>
                    </div>
                    <div class="form-group form-box ">
                        <label for="inputdob">Password</label>
                        <input type="password" class="form-control" name="pass" value={pass} onChange={this.changeHandler} id="inputdob" placeholder="Password" required/>
                    </div>
                    <div class="form-group form-box ">
                        <label for="inputdob">Date of Birth</label>
                        <input type="date" class="form-control" name="dob" value={dob} onChange={this.changeHandler} id="inputdob" placeholder="Date of Birth" required/>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputfathersname">Father`s Name</label>
                        <input type="text" class="form-control" name="fname" value={fname} id="inputfathersname" onChange={this.changeHandler} placeholder="Father`s Name" required/>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputoccupationdetails">Occupation Details</label>
                        <input type="text" class="form-control" name="occup" value={occup} id="inputoccupationdetails" onChange={this.changeHandler} placeholder="Occupation Details" required/>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputdesignation">Designation</label>
                        <input type="text" class="form-control" name="designation" value={designation} id="inputdesignation" onChange={this.changeHandler} placeholder="Designation" required/>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputorganisation">Organisation</label>
                        <input type="text" class="form-control" name="org" value={org} id="inputorganisation" placeholder="Organisation" onChange={this.changeHandler} required/>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputAddress">Office Address</label>
                        <input type="text" class="form-control" name="off_add" value={off_add} id="inputAddress" placeholder="Office Address" onChange={this.changeHandler} required/>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputstate">State</label>
                        <input type="text" class="form-control" name="state" value={state} id="inputstate" placeholder="State" onChange={this.changeHandler} required/>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputdistrict">District</label>
                        <input type="text" class="form-control" name="district" value={district} id="inputdistrict" placeholder="District" onChange={this.changeHandler} required/>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputpincode">Pincode</label>
                        <input type="text" class="form-control" name="pincode" value={pincode} id="inputpincode" placeholder="Pincode" onChange={this.changeHandler}  required/>
                    </div>
    
                    <div className="row">
                        <div class="form-group form-box col-md-6">
                            <label for="inputphone">Phone Number</label>
                            <input type="number" name="phone" class="form-control" value={phone} id="inputphone" placeholder="Phone" onChange={this.changeHandler}  required/>
                        </div>
                        <div className="row">
                        </div>
                        <div class="form-group form-box col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" name="email" value={email} id="inputEmail4" placeholder="Email" onChange={this.changeHandler}  required/>
                        </div>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputpersonalcommunicationdetails">Personal & Communication Details</label>
                        <input type="text" class="form-control" name="pc_add" value={pc_add} id="inputpersonalcommunicationdetails" placeholder="Personal & Communication Details" onChange={this.changeHandler} required/>
                    </div>
    
                    <div class="form-group form-box ">
                        <label for="inputeducation">Educational Qualification</label>
                        <input type="text" class="form-control" name="eduqual" value={eduqual} id="inputeducation" placeholder="Educational Qualification" onChange={this.changeHandler} required/>
                    </div>
                    <div class="form-group form-box ">
                        <label for="inputhobbies">Your Special Interest, Hobbies</label>
                        <input type="text" class="form-control" name="hobbies" value={hobbies} id="inputhobbies" placeholder="Your Special Interest, Hobbie" onChange={this.changeHandler} required/>
                    </div>
                    <div class="form-group form-box">
                        <label for="inputadhaar">Adhaar No</label>
                        <input type="text" class="form-control" name="aadhar_no" value={aadhar_no} id="inputadhaar" placeholder="Adhaar No" onChange={this.changeHandler} required/>
                    </div>
                    <button type="submit" class="btn register-button">Register</button>
                </form>
                </div>
                </div>
            </div>
        );
    }
}
export default Register;
