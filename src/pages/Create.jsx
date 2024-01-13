import React, {useState} from 'react';
import "../styles/Create.css";
import {useNavigate} from "react-router-dom"
import { errorMessage, successMessage } from '../toast/toast.js';
import API from '../Api/api.js';

const Create = () => {
  // Name, age ,email, experience,current,expected,notice
  const [Name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [current,setCurrent] = useState("");
  const [expected, setExpected] = useState("");
  const [notice, setNotice] = useState("");

  const navigate= useNavigate()

  const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
      const userInfo ={Name, age ,email, experience,current,expected,notice};
      const postData = await API.post(
        "/create",
        userInfo
      );
      if (postData.data.status === 1) {
        successMessage(postData.data.response);
        navigate("/final")
      } else {
        errorMessage(postData.data.response);
      }

    }catch(error){
      errorMessage(error.message);
      return console.log(error.message)
    }
  }


  return (
    <div className='main'>
    <div className='form'>
        <h3 className='head'>Job Application!</h3>
        <form className='content'>    
            <input type="text" 
            placeholder='Name'
            value={Name}
            name="name"
            onChange={(e)=>setName(e.target.value)}
            />
            <input type="number"
             placeholder='Age' 
             value={age}
             name="age"
             onChange={(e)=>setAge(e.target.value)}
             />
            <input type="text" placeholder='Email'
            value={email}
            name="email"
            onChange={(e)=>setEmail(e.target.value)} />

            <input type="text" placeholder='Experience'
            value={experience}
            name='experience'
            onChange={(e)=>setExperience(e.target.value)} />

            <input type="number" placeholder='Current CTC'
             value={current}
             name='current'
             onChange={(e)=>setCurrent(e.target.value)}
             />
            <input type="text" placeholder='Expected CTC' 
            value={expected}
            name='expected'
            onChange={(e)=>setExpected(e.target.value)}/>
            <input type="text" placeholder='Notice period'
            value={notice}
            name="notice"
            onChange={(e)=>setNotice(e.target.value)}
            />

            <button className='submit' onClick={handleSubmit}>SUBMIT</button>
        </form>
    </div>
    </div>
  )
}

export default Create