import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = ({ isOpen, onClose }) => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState("");


    const SERVICE_ID = "service_ezya6lm";       
    const TEMPLATE_OWNER = "template_x3l6t6s";  
    const TEMPLATE_USER = "template_6ea86mc";    
    const PUBLIC_KEY = "dUU5uT6vAgnrlL_xy";
    const MAILBOXLAYER_KEY = "c32110224b8b74489092860dd8691a4c"; 

    // Check if the email is real using Mailboxlayer
const verifyEmail = async (email) => {
  try {
    const response = await fetch(
      `https://apilayer.net/api/check?access_key=${MAILBOXLAYER_KEY}&email=${email}&smtp=1&format=1`
    );
    const data = await response.json();

    // mailboxlayer says format_valid + smtp_check = true → valid mailbox
    return data.format_valid && data.smtp_check;
  } catch (error) {
    console.error("Email verification error:", error);
    return false;
  }
};


  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatusMessage("");
  setStatusType("");

  try {
    // First check if the email is real
    const isReal = await verifyEmail(formData.email);

    if (!isReal) {
      setStatusMessage("❌ Invalid email id (mailbox not found)");
      setStatusType("error");
      return; // stop here
    }

    // If valid → send emails
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_OWNER, formRef.current, PUBLIC_KEY);
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_USER,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      PUBLIC_KEY
    );

    setStatusMessage("✅ Message sent successfully!");
    setStatusType("success");
    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatusMessage("❌ Failed to send. Please try again.");
    setStatusType("error");
  } finally {
    setLoading(false); // ensures button always resets
  }
};



    if (!isOpen) return null;

    return (
        <div
            className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-black/70"
            onClick={onClose}
        >
            <div
                className="relative bg-gray-900 rounded-lg shadow-xl w-full max-w-lg p-8 mx-4 overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
               
                <button
                    className="absolute top-3 right-3 text-white text-xl hover:text-red-500"
                    onClick={onClose}
                >
                    X
                </button>

                <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
                    Get In Touch
                </h2>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Example@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        rows={4}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 w-full py-3 rounded text-white font-semibold hover:bg-blue-600 transition"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                    {statusMessage && (
                        <p
                            className={`text-center mt-2 text-sm ${
                            statusType === "error" ? "text-red-500" : "text-green-400"
                            }`}
                        >
                            {statusMessage}
                        </p>
                        )}

                </form>
            </div>
        </div>
    );
};
