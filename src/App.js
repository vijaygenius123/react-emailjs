import logo from './logo.svg';
import './App.css';
import emailjs from '@emailjs/browser';
import {useRef} from "react";


function App() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="App">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name"/>
                <label>Email</label>
                <input type="email" name="user_email"/>
                <label>Message</label>
                <textarea name="message"/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
}

export default App;
