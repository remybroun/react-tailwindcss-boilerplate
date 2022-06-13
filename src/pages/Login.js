import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";


const login = (email, password) => dispatch => {
  console.log("LOGIN")
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
          user: {
            first_name : "first_name",
            last_name: "last_name",
            role:"role",
            email: "email",
            id: "id",
            phone: "phone",
        },
      }
    });
}
const Login = (props) => {
  const handleLogin = (e) => {
    e.preventDefault()
    // props.login("email", "password")
  }
  console.log(props.isAuthenticated)
  if(props.isAuthenticated)
    return <Redirect to="/" />


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">Sign in to Just</h2>
          </div>
          <form className="space-y-6" onSubmit={(e) =>handleLogin(e)} method="POST">
            <div>
              <div className="isolate -space-y-px rounded-md shadow-sm">
                <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                  <label htmlFor="job-title" className="block w-full text-xs font-medium text-gray-700 text-left">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="job-title"
                    id="job-title"
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Head of Tomfoolery"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto">
              <div className="text-sm">
                <a href="#" className="font-medium text-black hover:text-black">
                  Can't sign in?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Sign in
              </button>
            </div>
          </form>
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    OTPVerified: state.OTPVerified,
    OTP_ERROR: state.OTP_ERROR,
    loginError: state.loginError,
  }
};

export default connect(mapStateToProps, { login })(Login);

