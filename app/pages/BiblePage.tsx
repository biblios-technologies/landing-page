import { ArrowRight } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import brandMark from "../images/B.png";

const features = [
  { title: "Read with attention", text: "Move through Scripture at your own pace and notice what invites a closer look." },
  { title: "Understand in context", text: "Explore original language meaning and translation notes without leaving the passage." },
  { title: "Ask and study", text: "Build a study from selected verses, follow a question, or return to a saved study." },
  { title: "Remember and respond", text: "Highlight what stands out and keep your reflections in a searchable Notes library." },
];

const BiblePage = () => (
  <div className="page-root bible-page">
    <SiteHeader />
    <main>
      <section className="bible-hero">
        <div className="shell bible-hero-grid">
          <div className="bible-hero-copy">
            <p className="eyebrow"><span /> Biblios Bible</p>
            <h1>A Bible app built for spiritual formation.</h1>
            <p>Biblios helps you practice close reading, faithful study, honest reflection, and everyday response to Scripture.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://www.bibliosbible.com" target="_blank" rel="noreferrer">Open Biblios Bible <ArrowRight /></a>
              <a className="text-link" href="#how-it-works">See how it works <ArrowRight /></a>
            </div>
          </div>
          <div className="hero-mobile-stage" aria-label="Biblios Bible mobile application screens">
            <figure className="app-phone mobile-reader">
              <img src="/biblios-app/live-mobile-reader.jpg" alt="Mobile Biblios Bible reader showing James chapter 5 and word meanings" />
            </figure>
            <figure className="app-phone mobile-word-study">
              <img src="/biblios-app/live-mobile-word-study.jpg" alt="Mobile Biblios Word Study search screen" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section bible-features" id="how-it-works">
        <div className="shell practice-layout">
          <div className="practice-heading">
            <p className="eyebrow eyebrow-dark"><span /> A rhythm for formation</p>
            <h2>Read. Understand. Practice.</h2>
            <p className="practice-intro">Move from opening the Bible to being formed by it, one passage and one faithful practice at a time.</p>
          </div>
          <div className="feature-list-clean">
            {features.map((feature) => (
              <article key={feature.title}><h3>{feature.title}</h3><p>{feature.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-showcase">
        <div className="shell showcase-grid">
          <div className="showcase-shots" aria-label="Current Biblios Bible study screens">
            <figure className="live-app-frame study-shot">
              <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>Study Tools</span></div>
              <img src="/biblios-app/live-study-tools.jpg" alt="Biblios Study Tools open beside a selected Bible passage" />
            </figure>
            <figure className="live-app-frame word-shot">
              <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>Word Study</span></div>
              <img src="/biblios-app/live-word-study.jpg" alt="Biblios Word Study search screen" />
            </figure>
          </div>
          <div className="showcase-copy">
            <p className="eyebrow eyebrow-light"><span /> Study that shapes you</p>
            <h2>Go deeper. Carry it with you.</h2>
            <p>Use word meanings, translation notes, passage studies, and your own notes to move from curiosity toward understanding and response.</p>
            <ul className="check-list check-list-light">
              <li>Original language word meanings</li>
              <li>Translation notes and reading tools</li>
              <li>Studies built from a passage or question</li>
              <li>Searchable notes and saved studies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bible-company">
        <div className="shell bible-company-card">
          <div className="company-mark"><img src={brandMark} alt="Biblios" /></div>
          <div>
            <p className="eyebrow eyebrow-light"><span /> Built by Biblios Technologies</p>
            <h2>Built for a life formed by Scripture.</h2>
          </div>
          <a className="button button-light" href="https://www.bibliosbible.com" target="_blank" rel="noreferrer">Open the app <ArrowRight /></a>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
);

export default BiblePage;
