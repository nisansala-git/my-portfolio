import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setLoading(true);

      emailjs.send(
        'service_inc5wgk',
        'template_mod05go',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        '1aUENoeK9OLHLkHJ0'
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert('Something went wrong. Please try again!');
        setLoading(false);
      });

    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <section style={styles.section} id="Contact">

      <p style={styles.small}>Contact with me</p>
      <h2 style={styles.title}>Get in touch</h2>
      <p style={styles.sub}>
        I am currently open to new opportunities and collaborations.
        Whether you have a project in mind, a question, or just want
        to say hello, feel free to reach out!
      </p>

      {sent ? (
        <div style={styles.successBox}>
          <span style={{ fontSize: '40px' }}>🎉</span>
          <h3>Message Sent!</h3>
          <p style={{ color: '#aaa', marginTop: '10px' }}>
            Thank you! I'll get back to you soon.
          </p>
          <button
            onClick={() => setSent(false)}
            style={styles.btn}>
            Send Another
          </button>
        </div>
      ) : (
        <div style={styles.form}>
          <input
            style={styles.input}
            placeholder="Enter your name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            style={styles.input}
            placeholder="Enter your email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            style={styles.textarea}
            placeholder="Enter your message"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <button
            onClick={handleSubmit}
            style={styles.btn}
            disabled={loading}>
            {loading ? 'Sending...' : 'Submit now'}
          </button>
        </div>
      )}

      <div style={styles.footer}>
        <p style={{ color: '#aaa' }}>Made with ❤️ by Nisansala</p>
      </div>

    </section>
  );
}

const styles = {
  section: {
    padding: '80px 30px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  small: {
    color: '#aaaaaa',
    fontSize: '16px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  sub: {
    color: '#aaaaaa',
    lineHeight: '1.8',
    marginBottom: '40px',
    fontSize: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '18px',
    background: '#1a1535',
    border: '1px solid #2d2060',
    borderRadius: '10px',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '18px',
    background: '#1a1535',
    border: '1px solid #2d2060',
    borderRadius: '10px',
    color: 'white',
    fontSize: '16px',
    height: '150px',
    resize: 'none',
    outline: 'none',
  },
  btn: {
    padding: '18px',
    background: 'white',
    borderRadius: '50px',
    color: 'black',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
  successBox: {
    background: '#1a1535',
    padding: '40px',
    borderRadius: '15px',
    border: '1px solid #2d2060',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
  },
  footer: {
    marginTop: '60px',
    paddingTop: '30px',
    borderTop: '1px solid #2d2060',
    width: '100%',
  },
};

export default Contact;