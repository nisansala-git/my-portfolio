import React from 'react';

function Hero() {
  return (
    <section style={styles.section} id="Home">

      <div style={styles.photoCircle}>
        <img src="photo.jpg" alt="Nisansala" style={styles.photo} />
      </div>

      <p style={styles.greeting}>Hi! I'm Nisansala Ariyathilake 👋</p>

      <h1 style={styles.title}>
        Web Developer &<br />AI Enthusiast
      </h1>

      <p style={styles.bio}>
        I'm a self-driven undergraduate at SLIIT, passionate about 
        building meaningful digital experiences through web and 
        mobile development. Let's build something amazing together!
      </p>

      <div style={styles.buttons}>
        <a href="#Contact" style={styles.btnOutline}>contact me →</a>
        {/* <a href="/resume.pdf" download style={styles.btnFill}>
          Download my resume ↓
          </a> */}
      </div>

    </section>
  );
}

const styles = {
  section: {
    textAlign: 'center',
    padding: '80px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  photoCircle: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid #e91e8c',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  greeting: {
    color: '#cccccc',
    fontSize: '18px',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    lineHeight: '1.3',
  },
  bio: {
    color: '#aaaaaa',
    lineHeight: '1.8',
    fontSize: '16px',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    marginTop: '10px',
  },
  btnOutline: {
    padding: '15px',
    border: '2px solid white',
    borderRadius: '50px',
    color: 'white',
    textAlign: 'center',
    fontSize: '16px',
  },
  btnFill: {
    padding: '15px',
    background: 'white',
    borderRadius: '50px',
    color: 'black',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Hero;