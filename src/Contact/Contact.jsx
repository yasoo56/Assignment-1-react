import React, { useEffect } from 'react'
import { Form, Link } from 'react-router-dom'

export default function Contact() {
    useEffect(() => {
        document.title = "Contact"
    }, [])
    return <>
        <div className='contact'>
            <div className="container text-center">
                <h1>CONTACT SECTION</h1>
                <div className='after'></div>
                <i class="fa-solid fa-star"></i>
                <div className='before'></div>
                <Form>
                    <input type="text" placeholder='userName' className='form-control w-50 mx-auto ' />
                    <input type="number" placeholder='userAge' className='form-control w-50 mx-auto my-4 ' />
                    <input type="email" placeholder='userEmail' className='form-control w-50 mx-auto  ' />
                    <input type="password" placeholder='userPassword' className='form-control w-50 mx-auto my-4 ' />
                    <button >Send Message</button>
                </Form>
            </div>

        </div>

    </>
}
