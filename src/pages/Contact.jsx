import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { motion } from "motion/react"

const Contact = () => {
 const form = useRef();
  const [loading, setLoading] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_API
    ).then(
      (result) => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setLoading(false); // Stop loading
      },
      (error) => {
        toast.error("Failed to send message.");
        // console.error("❌ Email send failed:", error.text || error);
        setLoading(false); // Stop loading
      }
    );
  };

  return (
    <div className="contact" id='contact'>
      <motion.div className="contactImg">
          <motion.img src="/contact.png" alt="Connections" width={350} 
          animate={{
            x : [0 , 20 , 20 ,-20 ,0],
            y : [0 , 0 , 20 , 0 , -20]
          }}
          transition={{
            delay : 0.5,
            duration : 2,
            repeat : Infinity,
            repeatType : 'reverse',
          }}
          drag
          whileDrag={{
          scale : 0.8
          }}
          dragConstraints={{           //boundary while draging
          left : 0,
          right : 50,
          top : 20,
          bottom : 0
          }}
          dragDirectionLock="true"        //now at a time only in a single direction (any) dragging
        />
      </motion.div>
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
