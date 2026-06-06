import React from 'react';

function Services() {
  const services = [
    {
      icon: '🌐',
      name: 'Web Design',
      desc: 'Web development is the process of building and programming websites and web applications that look great and work smoothly.',
      link: '#web-projects',
    },
    {
      icon: '📱',
      name: 'Mobile App',
      desc: 'Mobile app development involves creating software for mobile devices, delivering smooth and engaging user experiences.',
      link: '#mobile-projects',
    },
    {
      icon: '🎨',
      name: 'UI/UX Design',
      desc: 'UI/UX design focuses on creating a seamless user experience by designing intuitive and visually appealing interfaces.',
      link: '#uiux-projects',
    },
  ];

  return (
    <section style={styles.section} id="Services">

      <p style={styles.small}>What I Offer</p>
      <h2 style={styles.title}>My Services</h2>
      <p style={styles.sub}>
        I offer a range of services including web design, mobile app 
        development, UI/UX design and creative solutions to help 
        bring your ideas to life.
      </p>

      <div style={styles.list}>
        {services.map(s => (
          <div key={s.name} style={styles.card}>

            <div style={styles.iconBox}>
              <span style={styles.icon}>{s.icon}</span>
            </div>

            <strong style={styles.name}>{s.name}</strong>
            <p style={styles.desc}>{s.desc}</p>

            <a href={s.link} style={styles.link}>
              Learn More →
            </a>

          </div>
        ))}
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
  list: {
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
  iconBox: {
    background: '#e91e8c',
    width: '55px',
    height: '55px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
  },
  icon: {
    fontSize: '28px',
  },
  name: {
    fontSize: '18px',
    display: 'block',
    marginBottom: '10px',
  },
  desc: {
    color: '#aaaaaa',
    lineHeight: '1.7',
    fontSize: '15px',
  },
  link: {
    color: 'white',
    display: 'inline-block',
    marginTop: '15px',
    fontSize: '15px',
  },
};

export default Services;