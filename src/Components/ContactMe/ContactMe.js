import React, {useState} from "react"
import {send} from "emailjs-com"

const ContactMe = () => {

    const [toSend, setToSend] = useState({
        from_name: "",
        to_name: "Tobias",
        message: "",
        reply_to: "",
    });

    const clearForm = () => {
        setToSend({
            from_name:"",
            message:"",
            reply_to:""});
        alert("Message sent!");
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_wbdupbn',
            'template_gq6dvma',
            toSend,
            'user_wQHWnk99ChNBBBXhNBktz'
        )
        clearForm()
    };

    const handleChange = (e) => {
        setToSend({
            ...toSend, [e.target.name]: e.target.value 
        });
    };

    return (
        <div className="text-center form-group">
            <h2>Contact Me!</h2>
            <form onSubmit={onSubmit}>
                <div className="m-3 fromName">
                    <input
                        size="30"
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="m-3 fromEmail">
                    <input
                        size="30"
                        type="email"
                        name="reply_to"
                        placeholder="Your Email"
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                </div>
                <div className="m-3 mailMessage">
                    <textarea 
                        rows="7" 
                        cols="50"
                        type="textarea"
                        name="message"
                        placeholder="Your Message"
                        value={toSend.message}
                        onChange={handleChange}
                    />
                </div>
                
                <button type="submit" className="btn-danger">Send</button>
            </form>
        </div>
    )
}

export default ContactMe