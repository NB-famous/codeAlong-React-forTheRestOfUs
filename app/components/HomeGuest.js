import React, {useState} from 'react'
import Page from './Page'
import Axios from 'axios'




const HomeGuest = () => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    async function handleSubmit(event){
        event.preventDefault()
        try{
            await Axios.post('http://localhost:3001/register', {
            // providing hard coded data for now -> pw is 12 char min         
            username, email, password})
            console.log("user succesful") 

        }catch(error){
            console.log("ERROR")
        }
        
        /* Axios.post('http://localhost:3001/register', {
        // providing hard coded data for now -> pw is 12 char min         
        username:"test", email:"test@test.com", password:"nikko1234567"}) */
    }

    return (
        <Page wide={true} title="Home">
            <div className="row align-items-center">
                <div className="col-lg-7 py-3 py-md-5">
                    <h1 className="display-3">Remember Writing?</h1>
                    <p className="lead text-muted">
                        Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.
                    </p>
                </div>
                <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username-register" className="text-muted mb-1">
                                <small>Username</small>
                            </label>
                            <input onChange={event => setUsername(event.target.value)} id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-register" className="text-muted mb-1">
                                <small>Email</small>
                            </label>
                            <input onChange={event => setEmail(event.target.value)} id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-register" className="text-muted mb-1">
                                <small>Password</small>
                            </label>
                            <input onChange={event => setPassword(event.target.value)} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
                        </div>
                        <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                        Sign up For ComplexApp
                        </button>
                    </form>
                </div>
            </div>
        </Page>
    )
}

export default HomeGuest