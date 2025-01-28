"use client"

import React, { useState } from 'react';
//import {loginUser, signUpUser} from './actions'


export default function LoginPage({session, name, balance}){
    const [errorMessage, setErrorMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true)
    const [em, setEm] = useState("")

    function handleLogin(formData){
        const email = formData.get('email'); 
        const password = formData.get('password')

        /*
    
        loginUser(email, password)
        .then((data) => {
          if(data["status"] ===  "neterror"){
            setErrorMessage("Network Error!")
            balance(0)
            session(false)
            name("")
          }   
          else if(data["status"] === true){
            session(data["status"])
            name(data["name"])
            balance(data["balance"])
          }
          else{
            setErrorMessage('Incorrect username or password.');
            balance(0)
            session(false)
            name("")
          }
        });

        */
        
    }

    function handleSignup(formData){
      const name = formData.get('name'); 
      const sex = formData.get('sex')
      const edu = formData.get('edu'); 
      const email = formData.get('email'); 
      const password = formData.get('password')


      /*
      signUpUser(name, sex, edu, email, password)
      .then((data) => {
              
        if(data["status"] == "neterror"){
          setErrorMessage("Network Error")
        }
        else if(data["status"] == true){
          switchLogin()
          setEm("")
        }
        else{
          setErrorMessage('Please Try again!');
        }
      });

      */

    }

    function switchLogin(){
      setIsLogin(true)
      setErrorMessage("")
    }

    function switchSignup(){
      setIsLogin(false)
      setErrorMessage("")
    }

    function handleEmailChange(e){
      setEm(e.target.value)
    }

    return(
      <>
      {
        isLogin?

        <div className="flex items-center justify-center p-16 flex-grow">
          <div className="bg-white p-10 rounded-lg shadow-md w-96">
              <h1 className="text-2xl font-bold mb-6 text-black flex items-center justify-center w-full">Login</h1>
              
              {errorMessage && (
                <div className="text-red-500 mb-4">
                  {errorMessage}
                </div>
              )}
              
              <form action={handleLogin}>
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900" value={em} onChange={handleEmailChange}>Email</label>
                      <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Enter your email" name="email"/>
                  </div>
                  <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                      <input type="password" id="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Enter your password" name="password"/>
                  </div>
                <div className="flex items-center justify-center w-full mt-6">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-4">Login</button> 
                    <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded" onClick={switchSignup}>Signup</button> 
                </div>
              </form>
          
          </div>
        </div>

        :
        
        <div className="flex items-center justify-center flex-grow">
          <div className="bg-white p-10 rounded-lg shadow-md w-96">
              <h1 className="text-2xl font-bold mb-6 text-black flex items-center justify-center w-full">Sign Up</h1>
              
              {errorMessage && (
                <div className="text-red-500 mb-4">
                  {errorMessage}
                </div>
              )}
              
              <form action={handleSignup}>
                  <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900">Full Name</label>
                      <input type="text" id="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Enter your Name" name="name"/>
                  </div>
                  <div classname="mb-4">
                    <label htmlFor="sex" className="block text-sm font-medium text-gray-900">Sex</label>
                    <select 
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black mb-4"
                          name = "sex"
                      >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          
                      </select>
                  </div>
                  <div classname="mb-4">
                    <label htmlFor="edu" className="block text-sm font-medium text-gray-900">Educational Status</label>
                    <select 
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black mb-4"
                          name = "edu"
                      >
                          <option value="">Select</option>
                          <option value="highschool">HighScool</option>
                          <option value="univ">University Student</option>
                          <option value="undergrad">Under Gradguate</option>
                          <option value="masters">Masters</option>
                          <option value="phd">PHD</option>
                          <option value="others">Others</option>

                          
                      </select>
                  </div>
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                      <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Enter your email" name="email"/>
                  </div>
                  <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                      <input type="password" id="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black" placeholder="Enter your password" name="password"/>
                  </div>
                <div className="flex items-center justify-center w-full mt-6">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-4">Signup</button> 
                    <button type="buttom" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded" onClick={switchLogin}>Login</button> 
                    
                </div>
              </form>
          
          </div>
        </div>
      }
      </>

    );
}