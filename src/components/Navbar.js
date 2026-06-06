import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>
        Nisansala<span style={styles.dot}>.</span>
      </h2>

      <button onClick={() => setOpen(!open)} style={styles.menuBtn}>☰</button>

      {open && (
        <div style={styles.menu}>
          <button onClick={() => setOpen(false)} style={styles.closeBtn}>✕</button>
          {['Home', 'About', 'Skills', 'Services', 'My Work', 'Contact'].map(item => (
            <a key={item} href={`#${item}`} style={styles.link}
               onClick={() => setOpen(false)}>{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 30px',
    background: '#0d0b1e',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid #2d2060'
  },
  logo: {
    color: 'white',
    fontSize: '24px'
  },
  dot: {
    color: '#e91e8c'
  },
  menuBtn: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '28px',
    cursor: 'pointer'
  },
  menu: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '30%',
    height: '100vh',
    background: '#2d1b69',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 30px',
    gap: '30px',
    zIndex: 200
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    alignSelf: 'flex-end'
  },
  link: {
    color: 'white',
    fontSize: '20px'
  },
};

export default Navbar;