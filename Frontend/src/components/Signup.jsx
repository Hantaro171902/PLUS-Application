import { Label } from "./ui/label"
import { Input } from "./ui/input"

import React from 'react'

const Signup = () => {
  return (
    <div className='flex items-center w-screen h-screen justify-center'>
        <form actio className="shadow-lg flex flex-col gap-5 p-8">
            <div>
                <h1>LOGO</h1>
                <p>Signup to see photos & videos from your friends</p>
                
            </div>
            <div>
                <span className="font-medium">Username</span>
                <Input
                    type="text"
                    className="focus-visible:ring-transparent my-2"
                  
                />
            </div>
        </form>
    </div>
  )
}

export default Signup