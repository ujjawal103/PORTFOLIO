import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const Contact = () => {
 const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs.sendForm(
      'service_6p2ybam',
      'template_z31uuxc',
      form.current,
      'wdy_4oVczcyk-45tv'
    ).then(
      (result) => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setLoading(false); // Stop loading
      },
      (error) => {
        toast.error("Failed to send message.");
        // console.error(error);
        setLoading(false); // Stop loading
      }
    );
  };

  return (
    <div className="contact" id='contact'>
      <div className="contactImg">
          <img src="/contact.png" alt="Connections" width={350} />
      </div>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <input name="title" placeholder="Enter Role..." required />
          <input name="user_name" placeholder="Name" required />
          <input name="user_email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : null}
          {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
