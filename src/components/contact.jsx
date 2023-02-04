import ContactCSS from "./contact.module.css";
import Title from "./title";
import Button from "./button";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const sendEmail = () => {};

  return (
    <div className={ContactCSS.contactMain}>
      <Title title="Contact" />
      <div className={ContactCSS.contactFormContainer}>
        <form>
          <div className={ContactCSS.inputContainer}>
            <input
              type="text"
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label for="name" className={ContactCSS.floatingLabel}>
              Your name:
            </label>
          </div>
          <div className={ContactCSS.inputContainer}>
            <input
              type="email"
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="email" className={ContactCSS.floatingLabel}>
              Email:
            </label>
          </div>
          <textarea
            rows={10}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
