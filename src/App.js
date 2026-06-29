import { useSelector } from 'react-redux';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About'
import Nav from './components/Nav';
import Profile from './components/Profile';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const { dark } = useSelector(s => s.profile);

  return (
    <div className={dark ? 'dark-mode' : 'light-mode'}>
      <Nav />
      <Profile />
      <div className="container py-5">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <FloatingActions />
    </div>
  )
}
