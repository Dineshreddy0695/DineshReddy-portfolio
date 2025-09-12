import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    
    const SERVICE_ID = "service_ezya6lm";       
    const TEMPLATE_OWNER = "template_x3l6t6s";  
    const TEMPLATE_USER = "template_6ea86mc";    
    const PUBLIC_KEY = "dUU5uT6vAgnrlL_xy";

    const handleSubmit = (e) => {
        e.preventDefault();

        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_OWNER, formRef.current, PUBLIC_KEY)
            .then(() => {
                console.log("Sent to owner");

                
                return emailjs.send(SERVICE_ID, TEMPLATE_USER, {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }, PUBLIC_KEY);
            })
            .then(() => {
                alert(" Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error(" EmailJS Error:", error);
                alert("Failed to send. Check console for details.");
            });
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="items-center text-4xl font-bold bg-blue-500 bg-clip-text text-transparent px-0 py-20">
                Get In Touch
            </h2>
           
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:border-blue-500 focus:border-blue-500 focus:bg-blue-500/5"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:border-blue-500 focus:border-blue-500 focus:bg-blue-500/5"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    rows={4}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:border-blue-500 focus:border-blue-500 focus:bg-blue-500/5"
                />
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded">
                    Send
                </button>
            </form>
        </section>
    );
};
