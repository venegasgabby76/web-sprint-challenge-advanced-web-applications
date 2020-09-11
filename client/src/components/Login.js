import React from "react";
import axios from "axios";


class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.payload);
        this.props.history.push("/protected");
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (

      <div className="login">
        <h3>Welcome Back. Login to see your friends</h3>
        <div className="login-form">
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <br />

            <button className="log-button">Log in</button>

          </form>
        </div>
      </div>
    );
  }
}

export default Login;