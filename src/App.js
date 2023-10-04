import React, { Component } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDKa5FG1SDuj45e9rEnbDva3oM4Z-ikX4A",
  authDomain: "loginpage-5a532.firebaseapp.com",
  projectId: "loginpage-5a532",
  storageBucket: "loginpage-5a532.appspot.com",
  messagingSenderId: "800397492147",
  appId: "1:800397492147:web:e0bf67c31d712a754a95c6",
  measurementId: "G-XE51X7TRP5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      message: "",
      type: 1,
    }
  }
  pageSwitchHandler = (e) => {
    e.preventDefault();
    this.setState({ page: !this.state.page, message: null });
  }

  registrationHandler = (event) => {
    event.preventDefault();
    // get method
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword) {
      this.setState({ message: "Passwords do not match", type: 0 });
      return;
    }
    const auth = firebase.auth();
    const authPromise = auth.createUserWithEmailAndPassword(email, password);
    authPromise
      .then((data) => {
        auth.currentUser.sendEmailVerification();
        this.setState({ message: "Registration successful", type: 1 }, () => {
          //set method
          event.target.email.value = "";
          event.target.password.value = "";
          event.target.confirmPassword.value = "";
        });
        // console.log(data);
      })
      .catch((error) => {
        this.setState({ message: error.message, type: 0 });
        // console.log(error);
      });

  };
  googleLoginHandler = () => {

    const provider = new GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((response) => {

      })
      .catch((error) => {
        // console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        this.setState({ message: errorMessage,  errorCode, type: 0 });
      })
  }
  facebookLoginHandler = () => {
    const provider = new FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        // console.log(error);
      })

  }

  loginHandler = (event) => {
    event.preventDefault();
    const auth = firebase.auth();
    const email = event.target.email.value;
    const password = event.target.password.value;
    auth.signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user.emailVerified === true)
          this.setState({ message: "Login successful", type: 1 })
        else
          this.setState({ message: "Your email is not verified yet!", type: 0 })
      })
      .catch((error) => {
        this.setState({ message: error.message, type: 0 });
        // console.log(error);
      });
  }

  render() {
    return (
      // <div>
      //   {
      //     this.state.page ? (
      //       <Register type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} register={this.registrationHandler} />
      //     ) : (
      //       <Login type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} login={this.loginHandler} />)
      //   }

      // </div >
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} login={this.loginHandler} />} /> */}
          <Route path="/" element={<Register facebook={this.facebookLoginHandler} google={this.googleLoginHandler} type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} register={this.registrationHandler} />} />
          <Route path="/register" element={<Register facebook={this.facebookLoginHandler} google={this.googleLoginHandler} type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} register={this.registrationHandler} />} />
          <Route path="/login" element={<Login type={this.state.type} message={this.state.message} switch={this.pageSwitchHandler} login={this.loginHandler} />} />
        </Routes>
      </Router>
    )
  }
}

export default App
