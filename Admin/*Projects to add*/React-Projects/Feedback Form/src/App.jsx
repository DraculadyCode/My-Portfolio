import "./App.css";
import { useState } from "react";
import "./components/Input.css";
import "./components/Input.jsx";

function App() {
  const [data, setData] = useState({ title: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }
  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log(data);
  }
  return (
    <main>
      <h1>Feedback form</h1>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              value={data.title}
              onChange={onChange}
              label="Title"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={onChange}
              label="Email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              type="textarea"
              value={data.message}
              onChange={onChange}
              label="Message"
            />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </main>
  );
}

export default App;
