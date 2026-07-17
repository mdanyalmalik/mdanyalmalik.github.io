import './App.css'
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPenClip } from 'react-icons/fa6';

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="intro-lockup">
          <h1 className="site-title">
            DANYAL MALIK
          </h1>
          <p className="site-subtitle">MS CS @ Oxford</p>
        </div>
        <nav className="social-links" aria-label="Social links">
          <a
            href="https://blog.danyalmalik.net/"
            target="_blank"
            rel="noopener noreferrer"
            title="Check out my blog"
          >
            <FaPenClip />
          </a>
          <a
            href="https://twitter.com/_danyalmalik"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow me on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/mdanyalmalik"
            target="_blank"
            rel="noopener noreferrer"
            title="Github Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mdanyalmalik"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect with me on Linkedin"
          >
            <FaLinkedin />
          </a>
        </nav>
      </header>

      <div className="checkerboard" aria-hidden="true"></div>

      <main className="hero-panel">
        <div className="portrait-panel">
          <img
            src="/graduation.png"
            alt="Danyal Malik in graduation dress"
            className="portrait-image"
          />
        </div>

        <section className="bio-panel" aria-label="About Danyal Malik">
          <p className="bio-copy">
            Hi, my name's Danyal. I am an MSc Advanced Computer Science student
            at the University of Oxford, with a bachelor's degree in computer
            science and a minor in mathematics from LUMS. My work focuses on
            machine learning, reinforcement learning, multi-agent systems, and
            game theory, with research experience in cooperation and reputation
            in multi-agent settings, audio deepfake detection, and TTS evaluation.
            I also enjoy building applied AI systems, from geospatial models for
            water-quality prediction to efficient OCR and forecasting pipelines.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <a
          href="mailto:danyalm2002@gmail.com"
        >
          danyalm2002@gmail.com
        </a>
      </footer>
    </div>
  );
}
