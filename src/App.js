import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component{

  state = {
    email:"",
    password:"",
    res:""
  }

  handleChange= async e=>{
    await this.setState({
      [e.target.name]:e.target.value
    })

  }
  handleSubmit = e =>{
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);

    let formData = new FormData();
    formData.append("email",this.state.email);
    formData.append("password",this.state.password);

    const url = "http://localhost/backend/Login.php";
    axios.post(url,formData)
    .then(res=>console.log(res.data.trim()))
    
    .catch(err=>console.log(err));

  }

  
  render(){
    return(
      <div className="App">
      <label>Email</label>
      <input onChange={this.handleChange}  value={this.state.email} className="form-control" name="email" type="text" required placeholder="Enter your email" />
      <br/>
      <label>Password</label>
      <input  onChange={this.handleChange} value={this.state.password} className="form-control" name="password" type="password"  />
      <button onClick={this.handleSubmit}className="btn btn-sucess" id="submit">Login</button>
      </div>
    );
  }
}

export default App;
