import './App.css'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="logo-mark">ES</div>
        <nav className="site-nav">
          <a href="#tournaments">Tournaments</a>
          <a href="#about">About</a>
          <a href="#how">How It Works</a>
          <a href="#trust">Trust</a>
          <a href="#contact">Contact</a>
        </nav>
        <button 
  className="cta primary"
  onClick={() => window.open(
    "https://expo.dev/artifacts/eas/quuCxCX83nskzGk1XUhNE2.apk",
    "_blank"
  )}
>
  Download App
</button>
      </header>

      <main>
        <section className="hero" id="tournaments">
          <div className="hero-copy">
            <p className="eyebrow">Official E-Sports Event Organizer</p>
            <h1>Compete. Win. Rise in E-Sports.</h1>
            <p className="lead">
              Join daily online tournaments, challenge top players, win real prizes,
              and build your competitive gaming profile in a fair, verified arena.
            </p>
            <div className="hero-actions">
              <button className="cta primary">Download App</button>
              <button className="cta secondary">Explore Tournaments</button>
            </div>
            <div className="hero-stats">
              <div>
                <span className="stat">Daily</span>
                <p>New tournaments every day</p>
              </div>
              <div>
                <span className="stat">Fast</span>
                <p>Quick payouts & verified results</p>
              </div>
              <div>
                <span className="stat">Fair</span>
                <p>Anti-cheat and organizer checks</p>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <h3>Tonight's Featured Event</h3>
              <p className="panel-title">ES Clash Cup</p>
              <div className="panel-row">
                <span>Entry</span>
                <strong>Rs.200</strong>
              </div>
              <div className="panel-row">
                <span>Prize Pool</span>
                <strong>Rs.600</strong>
              </div>
              <div className="panel-row">
                <span>Slots</span>
                <strong>12 Players</strong>
              </div>
              <a className="cta primary full" href="#how">Join Tournament</a>
            </div>
            <div className="panel-glow" />
          </div>
        </section>

        <section className="highlights">
          <div className="section-head">
            <h2>Why Players Choose Es</h2>
            <p>Competitive, transparent, and built for winning.</p>
          </div>
          <div className="grid four">
            <div className="card">
              <h3>Daily Tournaments</h3>
              <p>Always something to play, from quick matches to grand events.</p>
            </div>
            <div className="card">
              <h3>Real Prizes</h3>
              <p>Cash rewards and sponsor bonuses with verified payouts.</p>
            </div>
            <div className="card">
              <h3>Secure Matches</h3>
              <p>Organizer verification, match tracking, and dispute support.</p>
            </div>
            <div className="card">
              <h3>Fair Competition</h3>
              <p>Anti-cheat policies and transparent scoring for every event.</p>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="section-head">
            <h2>About Us</h2>
            <p>We build esports events that are competitive, safe, and fun.</p>
          </div>
          <div className="grid two">
            <div className="card outline">
              <h3>Vision</h3>
              <p>
                To create a fair, high-energy gaming ecosystem where players showcase
                skill, gain recognition, and win meaningful rewards.
              </p>
            </div>
            <div className="card outline">
              <h3>Mission</h3>
              <p>
                Organize professional tournaments, grow esports participation, and
                deliver secure, transparent prize distribution for every event.
              </p>
            </div>
          </div>
        </section>

        <section className="how" id="how">
          <div className="section-head">
            <h2>How It Works</h2>
            <p>Four simple steps from download to victory.</p>
          </div>
          <div className="grid four">
            <div className="step">
              <span className="step-number">01</span>
              <h3>Download the App</h3>
              <p>Get started on Android and set up your player profile.</p>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <h3>Browse Events</h3>
              <p>Choose from daily tournaments and featured cups.</p>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <h3>Join & Compete</h3>
              <p>Pay the entry fee and receive instant match details.</p>
            </div>
            <div className="step">
              <span className="step-number">04</span>
              <h3>Win Prizes</h3>
              <p>Rank on the leaderboard and claim rewards fast.</p>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="section-head">
            <h2>Tournament Features</h2>
            <p>Everything needed for competitive, organized play.</p>
          </div>
          <div className="grid three">
            <div className="card">
              <h3>Multi-Game Support</h3>
              <p>Host multiple titles with custom rules and formats.</p>
            </div>
            <div className="card">
              <h3>Live Rankings</h3>
              <p>Real-time leaderboards and transparent results.</p>
            </div>
            <div className="card">
              <h3>Verified Scheduling</h3>
              <p>Clear match timing and event reminders for every player.</p>
            </div>
          </div>
        </section>

        <section className="trust" id="trust">
          <div className="section-head">
            <h2>Security & Trust</h2>
            <p>Built for reliability, compliance, and player safety.</p>
          </div>
          <div className="grid two">
            <div className="card">
              <h3>Secure Payments</h3>
              <p>Trusted payment gateways with encrypted transactions.</p>
            </div>
            <div className="card">
              <h3>Organizer Verification</h3>
              <p>Every event is checked for legitimacy and fairness.</p>
            </div>
            <div className="card">
              <h3>Anti-Cheat Policies</h3>
              <p>Monitoring tools, reporting, and strict enforcement.</p>
            </div>
            <div className="card">
              <h3>Transparent Payouts</h3>
              <p>Clear prize breakdowns with verified distribution.</p>
            </div>
          </div>
        </section>

        <section className="community">
          <div className="section-head">
            <h2>Community First</h2>
            <p>A competitive environment that stays welcoming and fun.</p>
          </div>
          <div className="grid two">
            <div className="card outline">
              <h3>Growing Player Base</h3>
              <p>Meet skilled gamers, streamers, and rising talents.</p>
            </div>
            <div className="card outline">
              <h3>Recognition & Growth</h3>
              <p>Build your profile, earn rankings, and get noticed.</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <div className="section-head">
            <h2>FAQ</h2>
            <p>Answers to the questions players ask most.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>How do I join a tournament?</summary>
              <p>Download the app, choose a tournament, and pay the entry fee.</p>
            </details>
            <details>
              <summary>Is payment secure?</summary>
              <p>Yes. We use trusted payment partners with encrypted transactions.</p>
            </details>
            <details>
              <summary>How are prizes distributed?</summary>
              <p>Payouts are verified and delivered quickly after results are confirmed.</p>
            </details>
            <details>
              <summary>Which games are supported?</summary>
              <p>We host multiple titles and add new games regularly.</p>
            </details>
            <details>
              <summary>Is the app free?</summary>
              <p>The app is free to download. Some events have entry fees.</p>
            </details>
          </div>
        </section>

        <section className="legal">
          <div className="section-head">
            <h2>Legal & Transparency</h2>
            <p>We take responsibility and compliance seriously.</p>
          </div>
          <div className="grid four">
            <a className="legal-link" href="#">Terms & Conditions</a>
            <a className="legal-link" href="#">Privacy Policy</a>
            <a className="legal-link" href="#">Refund Policy</a>
            <a className="legal-link" href="#">Responsible Gaming</a>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-head">
            <h2>Contact</h2>
            <p>We respond fast. Let’s build the next esports event together.</p>
          </div>
          <div className="grid two">
            <div className="card">
              <h3>Support</h3>
              <p>Email: navvyush666@gmail.com </p>
            </div>
            <div className="card">
              <h3>Community</h3>
              <p>Discord, Telegram, and social channels coming soon.</p>
              <button className="cta secondary">Join Community</button>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div>
            <h2>Ready to prove your skills?</h2>
            <p>Download the app and start competing today.</p>
          </div>
          <div className="final-actions">
            <button className="cta primary">Android Download</button>
            <button className="cta ghost">iOS Coming Soon</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 E0 Sports. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
