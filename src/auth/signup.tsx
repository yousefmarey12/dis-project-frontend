
import { useEffect, useRef } from "react";

export function Signup({ setCurrentUser }) {
    let formRef = useRef<HTMLFormElement>(null)

    let func = () => {
        let formData = new FormData(formRef.current as HTMLFormElement)
        let obj = Object.create(null)
        formData.forEach((v, k) => {
            obj[k] = v
        })
        fetch('https://nodeuni.fly.dev/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then((v) => {
                return v.json()
            })
            .then((v) => {
                let obj = JSON.parse(v)
                setCurrentUser(obj)

            })
    }
    return (
        <form ref={formRef} id="form_signup">
            <div id="signup">
                <h1>Sign Up</h1>
                <label htmlFor="signup_email">Email</label>
                <input id="signup_email" name="signup_email" placeholder="Enter Email" type="email" />
                <label htmlFor="signup_password">Password</label>
                <input id="signup_password" name="signup_password" placeholder="Enter Password" type="password" />

            </div>

            <button onClick={func} type="submit">Submit</button>
        </form>
    )


}