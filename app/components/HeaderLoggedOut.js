import React, { useEffect, useState } from "react"
import Axios from 'axios'

const HeaderLoggedOut = (props) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(event){
        event.preventDefault()

        try{
            const response = await Axios.post("http://localhost:3001/login", {
                username,
                password
            });
            if(response.data) {
                console.log("this is response", response)
                localStorage.setItem("appToken", response.data.token) // Then object is from response we made through url attach to MongoDB
                localStorage.setItem("appUsername", response.data.username)
                localStorage.setItem("appAvatar", response.data.avatar)
                props.setLoggedIn(true)

            } else {
                console.log("incorrect something")
            }
        }
        catch(err){
            console.log("ERROR")
        }

    }

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
        <div className="row align-items-center">
            <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                <input onChange={event => setUsername(event.target.value)} name="username" className="form-control form-control-sm input-dark" type="text" placeholder="Username" autoComplete="off" />
            </div>
            <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                <input onChange={event => setPassword(event.target.value)} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
            </div>
            <div className="col-md-auto">
                <button className="btn btn-success btn-sm">Sign In</button>
            </div>
        </div>
    </form>
  )
}

export default HeaderLoggedOut