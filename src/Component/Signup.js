import "./signuppage.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [data, setdata] = useState([])

    const [successMessage, setsuccessmessage] = useState("")
    const [errormsg, seterrormsg] = useState("")
   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    
    }

    const handeler = (e) => {
        e.preventDefault();
        console.log(data)
        if (!data.fullname || !data.Email || !data.Password) {
            seterrormsg('All fields are mandatory')
            return
        }

        if (data.Password !== data.Confirmpassword) {
            seterrormsg('Passwords do not match')
            return
        }

        const AccessToken = generateAccessToken();
        localStorage.setItem('token', JSON.stringify({...data, AccessToken})) 
        setsuccessmessage("Signup successful")
     }

     const generateAccessToken = () => {

        return Math.random().toString(36).substring(2, 10)+Math.random().toString(36).substring(2, 10)

        };




    return (
        <div className="formdata">
            
            <form className="formda" onSubmit={handeler}>
                <h1>Signup</h1>
                <input type="text" name="fullname" placeholder="Full Name" onChange={handleInputChange} />
                <input type="email" name="Email" placeholder="Email" />
                <input type="Password" name="Password" placeholder="Password" onChange={handleInputChange}/>
                <input type="Password" name="Confirmpassword" placeholder="Confirm Password" />
                <button type="submit" name="submit" onChange={handleInputChange} >Sign up</button>
                {errormsg && <p style={{ color: 'red' }}>{errormsg}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
            

        </div>



    )
}

export default Signup;