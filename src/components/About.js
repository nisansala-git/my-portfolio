import React from 'react';

function About() {
  return (
    <section style={styles.section} id="About">

      <p style={styles.small}>Introduction</p>
      <h2 style={styles.title}>About Me</h2>

      <img src="photo.jpg" alt="Nisansala" style={styles.photo} />

      <p style={styles.bio}>
        I'm a self-driven undergraduate at SLIIT, passionate about 
        building meaningful digital experiences. With strong 
        problem-solving skills and a love for both web and mobile 
        development, I aim to contribute to impactful, innovative 
        projects while continuously learning and improving.
      </p>

      <div style={styles.cards}>

        <div style={styles.card}>
          <span style={styles.icon}>💻</span>
          <strong>Languages</strong>
          <p style={styles.cardText}>
            JavaScript, TypeScript, Java, PHP, Kotlin, Python, C++, C, HTML, CSS
          </p>
        </div>

        <div style={styles.card}>
          <span style={styles.icon}>🎓</span>
          <strong>Education</strong>
          <p style={styles.cardText}>Undergraduate at SLIIT</p>
        </div>

        <div style={styles.card}>
          <span style={styles.icon}>💼</span>
          <strong>Projects</strong>
          <p style={styles.cardText}>Built more than 5 projects</p>
        </div>

      </div>

    </section>
  );
}

const styles = {
  section: {
    padding: '80px 30px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  small: {
    color: '#aaaaaa',
    fontSize: '16px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  photo: {
    width: '280px',
    height: '350px',
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: '20px',
    marginBottom: '30px',
  },
  bio: {
    color: '#aaaaaa',
    lineHeight: '1.8',
    fontSize: '16px',
    marginBottom: '40px',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    background: '#1a1535',
    padding: '25px',
    borderRadius: '15px',
    textAlign: 'left',
    border: '1px solid #2d2060',
  },
  icon: {
    fontSize: '30px',
    display: 'block',
    marginBottom: '12px',
  },
  cardText: {
    color: '#aaaaaa',
    marginTop: '8px',
    lineHeight: '1.6',
  },
};

export default About;