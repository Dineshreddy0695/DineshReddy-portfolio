import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const SERVICE_ID = 'service_ezya6lm';
    const TEMPLATE_ID = 'template_de1zbgk';
    const PUBLIC_KEY = 'dUU5uT6vAgnrlL_xy';
    const handlesubmit = (e) => {
        e.preventDefault();

        // 1️⃣ Send to YOU (owner)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_OWNER, formRef.current, PUBLIC_KEY)
            .then(() => {
                console.log("✅ Sent to owner");

                // 2️⃣ Send greeting to USER
                return emailjs.send(SERVICE_ID, TEMPLATE_USER, {
                    name: formData.name,
                    email: formData.email
                }, PUBLIC_KEY);
            })
            .then(() => {
                alert("✅ Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error("❌ EmailJS Error:", error);
                alert("Failed to send. Check console.");
            });

   

    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="items-center text-4xl font-bold bg-blue-500 bg-clip-text text-transparent px-0 py-20">Get In Touch</h2>
            <form className="space-y-6" onSubmit={handlesubmit}>
                <div className="relative">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:border-blue-500 focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Your Name"
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />
                </div>
                <div className="relative">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none hover:border-blue-500 focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Example@gmail.com"
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                </div>
                <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        className="h-40 w-full bg-white/5 border border-white/10 rounded px-19 py-3 text-white transition focus:outline-none hover:border-blue-500 focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Your Message"
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded hover:-translate-y-1 transition-all">
                    Send Message
                </button>
            </form>
        </section>
    );

<>import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const SERVICE_ID = "service_ezya6lm";       
    const TEMPLATE_OWNER = ":template_x3l6t6s";
    const TEMPLATE_USER = "template_6ea86mc";
    const PUBLIC_KEY = "dUU5uT6vAgnrlL_xy";

    const handlesubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_OWNER, formRef.current, PUBLIC_KEY)
            .then(() => {
                console.log(" Sent to owner");

                return emailjs.send(SERVICE_ID, TEMPLATE_USER, {
                    name: formData.name,
                    email: formData.email
                }, PUBLIC_KEY);
            })
        emailjs.sendForm(SERVICE_ID, TEMPLATE_OWNER, formRef.current, PUBLIC_KEY)
            .then(() => {
                console.log(" Sent to owner");

                
                return emailjs.send(SERVICE_ID, TEMPLATE_USER, {
                    name: formData.name,
                    email: formData.email
                }, PUBLIC_KEY);
            })
            .then(() => {
                alert(" Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error(" EmailJS Error:", error);
                alert("Failed to send. Check console.");
            });
    };

    return (
         <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
         <h2 className="items-center text-4xl font-bold bg-blue-500 bg-clip-text text-transparent px-0 py-20">Get In Touch</h2>
           
        <form ref={formRef} onSubmit={handlesubmit} className="space-y-6 w-full max-w-md">
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
</>
}
}