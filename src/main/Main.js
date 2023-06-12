import React from 'react';
// import firebase from '../admin/firebase'
import firebase from '../admin/firebase'
import { Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {

  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          toast("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          toast("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      .then(Navigate('./admin/Products'))
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  
  refreshPage() {
    window.location.reload(false);
  }
  


  render() {
    return (
      <><h1 align="center">Login</h1>
      <div class="box">
        <h2>Enter Mobile</h2>
        <form onSubmit={this.onSignInSubmit}>
          
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange} />

          <button type="submit" class="btn-group">Login</button>
          
          <button type="submit" defaultValue={true} onClick={this.onSignInSubmit} >Resend OTP</button>
          
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div></>
      
    )
  }
}
export default App