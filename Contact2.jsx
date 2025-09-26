import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export function Contact2() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loading, setLoading] = useState(false);
 
    
    const SERVICE_ID = "service_ezya6lm";       
    const TEMPLATE_OWNER = "template_x3l6t6s";  
    const TEMPLATE_USER = "template_6ea86mc";    
    const PUBLIC_KEY = "dUU5uT6vAgnrlL_xy";

    // Validate email with Mailboxlayer API
    async function verifyEmail(email) {
        try {
            const res = await fetch(
                `https://apilayer.net/api/check?access_key=${MAILBOXLAYER_KEY}&email=${email}`
            );
            const data = await res.json();
            console.log("Mailboxlayer response:", data);

            // Decide invalid cases
            if (data.format_valid === false ||
                data.mx_found === false ||
                data.smtp_check === false ||
                data.disposable === true) {
                return false;
            }
            return true;
        } catch (error) {
            console.error("Mailboxlayer API error:", error);
            return false;
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");
        setEmailError("");

        // Validate email existence
        const isReal = await verifyEmail(formData.email);

       if (!isReal) {
        setStatusMessage("❌ Invalid email id (mailbox not found)");
        setStatusType("error");
        setLoading(false);
        return;
    }


        // Send via EmailJS
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_OWNER, formRef.current, PUBLIC_KEY)
            .then(() => {
                return emailjs.send(SERVICE_ID, TEMPLATE_USER, formData, PUBLIC_KEY);
            })
            .then(() => {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                setStatus("❌ Failed to send message. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact2" className="py-10 ">
            <div className="container mx-auto max-w-lg px-4">
                <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                <form ref={formRef} onSubmit={sendEmail} className="flex flex-col space-y-4">
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="p-2 border rounded" />

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`p-2 border rounded w-full ${emailError ? "border-red-500" : ""}`} />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">{emailError}</p>
                        )}
                    </div>

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="p-2 border rounded h-32"
                    ></textarea>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white py-2 px-4 rounded transition`}
                    >
                        {loading ? "Validating..." : "Send"}
                    </button>
                </form>

                {/* Status Message */}
                {status && <p className="mt-4 text-center">{status}</p>}
            </div>
        </section>
    );
}
