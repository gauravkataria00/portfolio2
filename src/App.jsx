import { useEffect, useState } from 'react';

const typeLines = [
  'Developer | Learner | Builder',
  'Building Real Projects',
  'Learning React and Tailwind CSS',
  'Building with Vite.js',
  'Consistency Beats Everything',
];

const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    items: [
      ['HTML5', 'html5-original.svg'],
      ['CSS3', 'css3-original.svg'],
      ['JavaScript', 'javascript-original.svg'],
      ['React', 'react-original.svg'],
      ['Tailwind CSS', 'tailwindcss-original.svg'],
      ['Vite.js', 'vitejs-original.svg'],
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🔧',
    items: [
      ['Git', 'git-original.svg'],
      ['GitHub', 'github-original.svg', true],
      ['VS Code', 'vscode-original.svg'],
      ['Figma', 'figma-original.svg'],
      ['Vercel', 'vercel-original.svg', true],
    ],
  },
];

const projects = [
  {
    icon: '⚡',
    name: 'Elite5',
    status: '🟡 Live repo',
    statusClass: 'status-progress',
    description: 'Public HTML and JavaScript project with a deployed preview at elite5-beta.vercel.app.',
    stack: ['HTML', 'JavaScript', 'Vercel'],
    href: 'https://github.com/gauravkataria00/Elite5',
  },
  {
    icon: '🎮',
    name: 'UI7 eSports',
    status: '🟢 Live repo',
    statusClass: 'status-active',
    description: 'Professional eSports tournament platform built with React, Vite, and Tailwind CSS.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    href: 'https://github.com/gauravkataria00/ui7',
  },
  {
    icon: '🥛',
    name: 'Dairy Management System',
    status: '🔵 Live repo',
    statusClass: 'status-planning',
    description: 'A full dairy operations app for client management, milk entries, settlements, payments, and reporting.',
    stack: ['React', 'Vite', 'SQLite'],
    href: 'https://github.com/gauravkataria00/dm',
  },
];

const socials = [
  ['GitHub', '@gauravkataria00', 'https://github.com/gauravkataria00', 'fab', 'fa-github', 'social-github'],
  ['LinkedIn', 'Gaurav Kataria', 'https://www.linkedin.com/in/gaurav-kataria-82a72a359', 'fab', 'fa-linkedin', 'social-linkedin'],
  ['WhatsApp', '+91 87081 95687', 'https://wa.me/918708195687', 'fab', 'fa-whatsapp', 'social-whatsapp'],
  ['Gmail', 'gavim0009@gmail.com', 'mailto:gavim0009@gmail.com', 'fas', 'fa-envelope', 'social-gmail'],
];

const iconUrl = (file) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${file.replace('-original.svg', '')}/${file}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typed, setTyped] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const current = typeLines[lineIndex];
    const complete = typed === current;
    const empty = typed.length === 0;
    const timer = window.setTimeout(() => {
      if (complete) setDeleting(true);
      else if (empty && deleting) {
        setDeleting(false);
        setLineIndex((index) => (index + 1) % typeLines.length);
      } else {
        setTyped(current.slice(0, typed.length + (deleting ? -1 : 1)));
      }
    }, complete ? 1800 : empty && deleting ? 400 : deleting ? 35 : 70);
    return () => window.clearTimeout(timer);
  }, [typed, lineIndex, deleting]);

  useEffect(() => {
    const closeMenu = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', closeMenu);
    return () => window.removeEventListener('keydown', closeMenu);
  }, []);

  const navItems = ['about', 'skills', 'projects', 'focus', 'stats', 'contact'];

  return (
    <>
      <a href="#home" className="skip-link">Skip to main content</a>
      <div id="particles-js" aria-hidden="true" />

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo"><span className="logo-bracket">&lt;</span>GK<span className="logo-bracket">/&gt;</span></a>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links">
            {navItems.map((item) => <li key={item}><a href={`#${item}`} className="nav-link" onClick={() => setMenuOpen(false)}>{item[0].toUpperCase() + item.slice(1)}</a></li>)}
          </ul>
          <button className="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <a className="hero-avatar" href="https://github.com/gauravkataria00" target="_blank" rel="noreferrer" aria-label="Open Gaurav Kataria GitHub profile">
              <img src="https://avatars.githubusercontent.com/u/203610420?v=4" alt="Gaurav Kataria GitHub profile picture" />
              <span className="hero-avatar-badge"><i className="fab fa-github" /> GitHub profile</span>
            </a>
            <p className="hero-greeting">👋 Hello, I&apos;m</p>
            <h1 className="hero-name">Gaurav Kataria</h1>
            <div className="hero-typed-wrapper"><span>{typed}</span><span className="cursor">|</span></div>
            <p className="hero-desc">Developer · Learner · Builder from India 🇮🇳 &nbsp;·&nbsp; Turning real-world ideas into clean code</p>
            <div className="hero-cta"><a href="#projects" className="btn btn-primary">View My Work</a><a href="#contact" className="btn btn-outline">Get In Touch</a></div>
            <div className="hero-socials">{socials.map(([, , href, family, icon]) => <a key={icon} href={href} target="_blank" rel="noreferrer" aria-label={icon}><i className={`${family} ${icon}`} /></a>)}</div>
          </div>
          <div className="hero-scroll"><span>Scroll Down</span><i className="fas fa-chevron-down" /></div>
        </section>

        <section className="section" id="about"><div className="container"><h2 className="section-title">👨‍💻 About Me</h2><div className="about-grid"><div className="about-code"><div className="code-header"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /><span className="code-filename">gaurav.js</span></div><pre className="code-block"><code><span className="kw">const</span> <span className="var">gaurav</span> = {'{'}{`\n  name     : "Gaurav Kataria",\n  role     : "Developer | Learner | Builder",\n  location : "India 🇮🇳",\n  passions : ["Web Development", "Problem Solving"],\n  learning : ["React", "Tailwind CSS", "Vite.js"],\n  focus    : "Real-world projects + consistency",\n  motto    : "Consistency beats everything."\n`}{'}'};</code></pre></div><div className="about-info"><p className="about-text">Hey there! I&apos;m a <strong>Developer</strong>, <strong>Learner</strong>, and <strong>Builder</strong> focused on real-world projects. I care about practical problem solving, steady improvement, and building things that actually work.</p><ul className="about-list"><li><i className="fas fa-graduation-cap" /> <strong>BCA Student</strong></li><li><i className="fas fa-seedling" /> Learning <strong>React</strong> and <strong>Tailwind CSS</strong></li><li><i className="fas fa-rocket" /> Building real-world projects with <strong>Vite.js</strong></li><li><i className="fas fa-brain" /> Improving <strong>problem solving</strong> and <strong>logic</strong></li><li><i className="fas fa-bolt" /> Goal: <strong>Top 1% Developer</strong></li></ul><div className="about-badges"><span className="badge"><i className="fas fa-map-marker-alt" /> India</span><span className="badge"><i className="fas fa-briefcase" /> Developer</span><span className="badge"><i className="fas fa-compass" /> Learner</span><span className="badge"><i className="fas fa-heart" /> Builder</span></div></div></div></div></section>

        <section className="section section-dark" id="skills"><div className="container"><h2 className="section-title">🛠️ Tech Stack &amp; Tools</h2>{skillGroups.map((group) => <div className="skills-category" key={group.title}><h3 className="skills-cat-title"><span>{group.icon}</span> {group.title}</h3><div className="skills-grid">{group.items.map(([name, icon, invert]) => <div className="skill-card" key={name}><img src={iconUrl(icon)} alt={name} loading="lazy" className={invert ? 'invert' : ''} /><span>{name}</span></div>)}</div></div>)}</div></section>

        <section className="section" id="projects"><div className="container"><h2 className="section-title">🚀 Featured Projects</h2><div className="projects-grid">{projects.map((project) => <a className="project-card project-card-link" href={project.href} target="_blank" rel="noreferrer" key={project.name}><div className="project-header"><div className="project-icon">{project.icon}</div><span className={`status ${project.statusClass}`}>{project.status}</span></div><h3 className="project-name">{project.name}</h3><p className="project-desc">{project.description}</p><div className="project-stack">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div><span className="project-cta">Open GitHub repo <i className="fas fa-arrow-up-right-from-square" /></span></a>)}</div></div></section>

        <section className="section section-dark" id="focus"><div className="container"><h2 className="section-title">🔥 What I&apos;m Building</h2><div className="focus-grid"><div className="focus-card"><h3>What I&apos;m learning</h3><ul><li>React</li><li>Tailwind CSS</li><li>Vite.js</li></ul></div><div className="focus-card focus-quote"><h3>Mindset</h3><p>Consistency beats everything.</p></div></div></div></section>

        <section className="section section-dark" id="stats"><div className="container"><h2 className="section-title">📊 GitHub Statistics</h2><div className="stats-grid"><div className="stats-card"><img className="stats-img" src="https://github-readme-stats.vercel.app/api?username=gauravkataria00&show_icons=true&theme=tokyonight&hide_border=true" alt="GitHub Stats" loading="lazy" /></div><div className="stats-card"><img className="stats-img" src="https://github-readme-stats.vercel.app/api/top-langs/?username=gauravkataria00&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages" loading="lazy" /></div></div><div className="stats-streak"><img className="stats-img" src="https://streak-stats.demolab.com?user=gauravkataria00&theme=tokyonight&hide_border=true" alt="GitHub Streak" loading="lazy" /></div><div className="stats-activity"><img className="stats-img full-width" src="https://github-readme-activity-graph.vercel.app/graph?username=gauravkataria00&theme=tokyo-night&bg_color=1a1040&color=a78bfa&line=7c3aed&point=ffffff&hide_border=true" alt="GitHub Activity Graph" loading="lazy" /></div></div></section>

        <section className="section" id="contact"><div className="container"><h2 className="section-title">🌐 Connect With Me</h2><p className="contact-sub">I&apos;m always open to new opportunities, collaborations, or just a friendly chat. Let&apos;s connect!</p><div className="social-cards">{socials.map(([name, handle, href, family, icon, colorClass]) => <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={`social-card ${colorClass}`} key={name}><div className="social-icon"><i className={`${family} ${icon}`} /></div><div className="social-info"><span className="social-platform">{name}</span><span className="social-handle">{handle}</span></div><i className="fas fa-arrow-right social-arrow" /></a>)}</div></div></section>
      </main>

      <footer className="footer"><div className="container"><div className="footer-logo"><span className="logo-bracket">&lt;</span>GK<span className="logo-bracket">/&gt;</span></div><p className="footer-quote"><i className="fas fa-quote-left" /> Build. Break. Learn. Repeat. 🚀 <i className="fas fa-quote-right" /></p><div className="footer-socials">{socials.map(([, , href, family, icon]) => <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} aria-label={icon} key={icon}><i className={`${family} ${icon}`} /></a>)}</div><p className="footer-copy">&copy; 2026 Gaurav Kataria · Made with <i className="fas fa-heart" style={{ color: '#ff6b6b' }} /> and lots of ☕</p></div></footer>
    </>
  );
}

export default App;
