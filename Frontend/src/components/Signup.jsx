import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { toast } from "sonner"

import React, { useState } from 'react'

const Signup = () => {
    const [input, setInput] = useState ({
        username:"",
        email:"",
        password:""
    });
    const {loading, setLoading} = useState(false);
    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]:e.target.value});
    }

    const signupHandler = async (e) => {
        e.prevenDefault();
        try {
            setLoading(true);
            const res = await axios.post('http://localhost:8000/api/v1/user/register', input, {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res.data.success) {
                toast.success(res.data.message);
                setInput({
                    username:"",
                    email:"",
                    password:""
                });
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }finally{
            setLoading(false);
        }
    }
    return (
        <div className='flex items-center w-screen h-screen justify-center'>
            <form onSubmit={signupHandler} action="" className="shadow-lg flex flex-col gap-5 p-8">
                <div>
                    <h1>LOGO</h1>
                    <p>Signup to see photos & videos from your friends</p>
                    
                </div>
                <div>
                    <span className="font-medium">Username</span>
                    <Input
                        type="text"
                        name="username"
                        value={input.username}
                        onChange={changeEventHandler}
                        className="focus-visible:ring-transparent my-2"     
                    />
                </div>
                <div>
                    <span className="font-medium">Email</span>
                    <Input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={changeEventHandler}
                        className="focus-visible:ring-transparent my-2"     
                    />
                </div>
                <div>
                    <span className="font-medium">Password</span>
                    <Input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={changeEventHandler}
                        className="focus-visible:ring-transparent my-2"     
                    />
                </div>
                <Button type="submit">Signup</Button>
            </form>
        </div>
    )
}

export default Signup