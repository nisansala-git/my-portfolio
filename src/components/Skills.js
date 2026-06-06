import React from 'react';

function Skills() {
  const categories = [
    {
      name: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Kotlin', 'Python', 'C++', 'C', 'HTML', 'CSS'],
    },
    {
      name: 'Frontend',
      items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Express.js', 'Django'],
    },
    {
      name: 'Mobile Development',
      items: ['Kotlin', 'Android'],
    },
    {
      name: 'Database',
      items: ['MongoDB', 'Firebase', 'MySQL'],
    },
    {
      name: 'DevOps & Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'AWS'],
    },
  ];

  return (
    <section style={styles.section} id="Skills">

      <h2 style={styles.title}>Skills & Technologies</h2>
      <p style={styles.sub}>Technologies I work with</p>

      <div style={styles.list}>
        {categories.map(cat => (
          <div key={cat.name} style={styles.box}>
            <h3 style={styles.catName}>{cat.name}</h3>
            <div style={styles.tags}>
              {cat.items.map(item => (
                <span key={item} style={styles.tag}>{item}</span>
              ))}
            </div>
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
  title: {
    fontSize: '36px',
    color: '#9c7af5',
    marginBottom: '10px',
  },
  sub: {
    color: '#aaaaaa',
    marginBottom: '40px',
    fontSize: '16px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  box: {
    background: '#1a1535',
    padding: '25px',
    borderRadius: '15px',
    border: '1px solid #2d2060',
    textAlign: 'left',
  },
  catName: {
    marginBottom: '15px',
    fontSize: '18px',
    color: 'white',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tag: {
    background: '#2d2060',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#dddddd',
  },
};

export default Skills;