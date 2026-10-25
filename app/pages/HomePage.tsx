import { ArrowRight } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const diagnosticAreas = [
  { number: "01", title: "People journeys", text: "See where guests, members, volunteers, and care needs move smoothly, and where people quietly fall through gaps." },
  { number: "02", title: "Ministry operations", text: "Map how work moves across staff and teams so ownership is clear and ministry is not held together by memory." },
  { number: "03", title: "Technology ecosystem", text: "Understand what each tool is doing, what is duplicated, and what should connect, change, or disappear." },
  { number: "04", title: "Data and decisions", text: "Turn scattered information into a trustworthy view of what is happening and what deserves attention next." },
];

const process = [
  { number: "01", title: "Listen", text: "Hear from the people closest to the work." },
  { number: "02", title: "Map", text: "Trace how people, information, and decisions actually move." },
  { number: "03", title: "Design", text: "Prioritize the changes that will make ministry easier to support." },
];

const outcomes = [
  "A clear picture of how your church operates today",
  "The gaps creating friction, delay, or dropped follow up",
  "A prioritized roadmap for the next 90 days",
];

const HomePage = () => (
  <div className="page-root home-page">
    <SiteHeader />
    <main>
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Church systems · technology · organizational design</p>
            <h1>Build a healthier church <em>behind the scenes.</em></h1>
            <p className="hero-lede">Biblios helps churches understand how ministry actually works and design practical systems that support your people, your leaders, and your mission.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://zcal.co/gabbitaylor/free-consultation" target="_blank" rel="noreferrer">Book a systems conversation <ArrowRight /></a>
              <a className="text-link" href="#diagnostic">Explore the diagnostic <ArrowRight /></a>
            </div>
            <div className="hero-principles" aria-label="What Biblios considers">
              <span>People</span><i /> <span>Process</span><i /> <span>Technology</span><i /> <span>Mission</span>
            </div>
          </div>

          <div className="systems-visual" aria-label="A connected ministry system map">
            <div className="visual-label">Your ministry system</div>
            <div className="system-node node-center"><span>Mission</span></div>
            <div className="system-node node-one"><i /> <span>People</span></div>
            <div className="system-node node-two"><i /> <span>Tools</span></div>
            <div className="system-node node-three"><i /> <span>Care</span></div>
            <div className="system-node node-four"><i /> <span>Process</span></div>
            <svg className="system-lines" viewBox="0 0 600 560" aria-hidden="true">
              <path d="M300 280C230 210 175 165 115 128" />
              <path d="M300 280C380 205 430 160 495 120" />
              <path d="M300 280C220 350 165 395 110 446" />
              <path d="M300 280C380 350 425 400 500 448" />
            </svg>
            <div className="visual-note">See the whole system, not just the loudest problem.</div>
          </div>
        </div>
      </section>

      <section className="section diagnostic-section" id="diagnostic">
        <div className="shell diagnostic-layout">
          <div className="diagnostic-copy">
            <p className="eyebrow eyebrow-light"><span /> Flagship service</p>
            <h2>The Church Systems Diagnostic</h2>
            <p>A focused engagement that gives church leaders a shared, evidence based view of what is happening and a realistic plan for what to improve first.</p>
            <ul className="check-list">{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
            <div className="scope-row" aria-label="Areas examined">
              {diagnosticAreas.map((area) => <span key={area.title}>{area.title}</span>)}
            </div>
            <a className="button button-light" href="https://zcal.co/gabbitaylor/free-consultation" target="_blank" rel="noreferrer">Talk through your church <ArrowRight /></a>
          </div>
          <div className="deliverable-stack" aria-label="Diagnostic deliverables">
            <div className="deliverable-card deliverable-back"><span>Current state map</span></div>
            <div className="deliverable-card deliverable-mid"><span>Gap analysis</span></div>
            <div className="deliverable-card deliverable-front">
              <div className="document-top"><span>Biblios / Church Systems Diagnostic</span></div>
              <div className="document-title">Your ministry systems roadmap</div>
              <div className="document-line line-long" /><div className="document-line" /><div className="document-line line-short" />
              <div className="document-priorities">
                <span>01</span><p>Stabilize the guest follow up path</p>
                <span>02</span><p>Clarify ownership across teams</p>
                <span>03</span><p>Connect the information that matters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="approach">
        <div className="shell">
          <div className="process-heading">
            <p className="eyebrow eyebrow-dark"><span /> Our approach</p>
            <h2>Clarity before complexity.</h2>
            <p>Understand what is happening first. Then choose the right change.</p>
          </div>
          <div className="process-grid">
            {process.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="about">
        <div className="shell contact-card">
          <div>
            <p className="eyebrow eyebrow-dark"><span /> Why Biblios</p>
            <h2>Systems in service of mission.</h2>
            <p>Biblios brings ministry, organizational design, and technology together so your systems help people rather than slow them down.</p>
            <div className="founder-note"><span>You work directly with Gabbi, founder and systems architect.</span></div>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="https://zcal.co/gabbitaylor/free-consultation" target="_blank" rel="noreferrer">Book a free 15 minute call <ArrowRight /></a>
            <a className="text-link" href="mailto:hello@bibliostechnologies.com">hello@bibliostechnologies.com</a>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
);

export default HomePage;
