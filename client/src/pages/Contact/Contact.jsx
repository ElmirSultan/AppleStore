import "./contact.scss";
import ElmirSultanImg from "../../assets/images/elmirsultan.png";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { message } from "antd";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [text, setText] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    setNameInput("");
    setEmailInput("");
    setText("");
    message.success("your message has been sent.")
  };
  return (
    <section className="contact-section">
      <h1>Contact</h1>
      <div className="contact-box">
        <div className="left-side">
          <img src={ElmirSultanImg} alt="Elmir Sultan image" />
          <h2>Elmir Sultan</h2>
        </div>
        <div className="right-side">
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              placeholder="Name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your messeage..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <Button buttonText={"Submit"} buttonClick={onSubmitForm} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
