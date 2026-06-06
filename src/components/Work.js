import React, { useState } from 'react';

function Work() {
  const projects = [
    {
      title: 'Indoor Sports Complex Management System',
      description: 'A full stack web application built using the MERN stack. Manages bookings, facilities and members of an indoor sports complex.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      images: [
        'sports1.jpg', 'sports2.jpg', 'sports3.jpg',
        'sports4.jpg', 'sports5.jpg', 'sports6.jpg', 'sports7.jpg'
      ],
    },
    {
      title: 'University Event Management System',
      description: 'A full stack web application built using the MERN stack. Helps universities manage and organize events efficiently.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      images: [
        'events1.png', 'events2.png', 'events3.png',
        'events4.png', 'events5.png'
      ],
    },
    {
      title: 'Spring Boot Web Application',
      description: 'A web application built using Spring Boot. Features a clean and modern design with powerful backend functionality.',
      tags: ['Spring Boot', 'Java'],
      images: [
        'spring1.jpeg', 'spring2.jpeg', 'spring3.jpeg',
        'spring4.jpeg', 'spring5.jpeg'
      ],
    },
    {
      title: 'Mobile App - Android Studio',
      description: 'A mobile application developed using Android Studio. Features a modern and intuitive user interface for a smooth user experience.',
      tags: ['Android Studio', 'Java'],
      images: [
        'android1.png', 'android2.png', 'android3.png',
        'android4.png', 'android5.png'
      ],
    },
    {
      title: 'Mobile UI Design - Figma',
      description: 'A mobile application UI design created using Figma. Features a clean and modern design with a focus on user experience.',
      tags: ['Figma', 'UI/UX'],
      images: [
        'figma1.png', 'figma2.png', 'figma3.png',
        'figma4.png', 'figma5.png', 'figma6.png'
      ],
    },
  ];

  return (
    <section style={styles.section} id="My Work">
      <p style={styles.small}>My Portfolio</p>
      <h2 style={styles.title}>My Latest Work</h2>
      <p style={styles.sub}>
        I offer a range of services including web design, mobile app
        development, UI/UX design, and creative solutions to bring
        your ideas to life.
      </p>

      <div style={styles.list}>

        {/* Web Projects */}
        <div id="web-projects">
          <ProjectCard project={projects[0]} />
          <br />
          <ProjectCard project={projects[1]} />
          <br />
          <ProjectCard project={projects[2]} />
        </div>

        {/* Mobile Projects */}
        <div id="mobile-projects">
          <ProjectCard project={projects[3]} />
        </div>

        {/* UI/UX Projects */}
        <div id="uiux-projects">
          <br />
          <ProjectCard project={projects[4]} />
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? project.images.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === project.images.length - 1 ? 0 : current + 1);
  };

  return (
    <div style={styles.card}>

      {/* Image Gallery */}
      <div style={styles.imageBox}>
        <img
          src={project.images[current]}
          alt={project.title}
          style={styles.image}
        />

        {/* Left Arrow */}
        <button onClick={prev} style={styles.arrowLeft}>‹</button>

        {/* Right Arrow */}
        <button onClick={next} style={styles.arrowRight}>›</button>

        {/* Dots */}
        <div style={styles.dots}>
          {project.images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                ...styles.dot,
                background: i === current ? '#e91e8c' : 'rgba(255,255,255,0.5)',
              }}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div style={styles.counter}>
          {current + 1} / {project.images.length}
        </div>
      </div>

      {/* Card Content */}
      <div style={styles.cardBody}>
        <h3 style={styles.projectTitle}>{project.title}</h3>
        <p style={styles.projectDesc}>{project.description}</p>
        <div style={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

    </div>
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
    gap: '30px',
  },
  card: {
    background: '#1a1535',
    borderRadius: '15px',
    border: '1px solid #2d2060',
    overflow: 'hidden',
    textAlign: 'left',
  },
  imageBox: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
    background: '#0d0b1e',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  arrowLeft: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    fontSize: '22px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowRight: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    fontSize: '22px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '6px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  counter: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    background: 'rgba(0,0,0,0.5)',
    color: 'white',
    padding: '3px 8px',
    borderRadius: '10px',
    fontSize: '12px',
  },
  cardBody: {
    padding: '20px',
  },
  projectTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color: 'white',
  },
  projectDesc: {
    color: '#aaaaaa',
    lineHeight: '1.7',
    fontSize: '15px',
    marginBottom: '15px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tag: {
    background: '#3d1b8c',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '13px',
    color: '#dddddd',
  },
};

export default Work;