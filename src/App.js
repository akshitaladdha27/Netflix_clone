import React, { useState } from "react";
import "./App.css"; // Ensure you have the correct CSS file
import logo from "./images/logo.png";



function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const [email, setEmail] = useState(""); // ✅ Fix for "email is not defined"

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log("Clicked Index:", index);
    console.log("Current Open Index:", openIndex);
  };
  

  const faqs = [
    { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a variety of movies, TV shows, and more." },
    { question: "How much does Netflix cost?", answer: "Netflix plans start at ₹149 per month, with different pricing for higher plans." },
    { question: "Where can I watch?", answer: "You can watch Netflix on any internet-connected device with the Netflix app." },
    { question: "How do I cancel?", answer: "You can cancel anytime online in your account settings." },
    { question: "What can I watch on Netflix?", answer: "Netflix offers a wide range of movies, TV shows, documentaries, and more." },
    { question: "Is Netflix good for kids?", answer: "Yes! Netflix has a kids’ section with family-friendly content." }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:5000/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <header id="navbar">
      <img src={logo} alt="Netflix Logo" className="logo" />
        <div className="nav-buttons">
          <div className="dropdown">
            <button className="dropbtn">Language</button>
            <div className="dropdown-content">
              <button onClick={() => console.log("Switched to English")}>English</button>
              <button onClick={() => console.log("Switched to Hindi")}>Hindi</button>
            </div>
          </div>
          <button className="btn">Sign in</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <strong>Unlimited movies, TV <br /> shows and more</strong>
          </h1>
          <p className="hero-subtitle">Starts at ₹149. Cancel at any time.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <form onSubmit={handleSubmit} className="email-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-large">
              Get Started &gt;
            </button>
          </form>
        </div>
      </section>

      <div>
      {/* Trending Section */}
      <section className="trending">
        <h2>Trending Now</h2>
        <div className="movies-container">
          <div className="movies">
            <div
              className="movie"
              style={{ backgroundImage: "url('/pushpa2.jpeg')" }}
            >
              <span className="rank">1</span>
            </div>
            <div
              className="movie"
              style={{ backgroundImage: "url('/dhoomdham.jpeg')" }}
            >
              <span className="rank">2</span>
            </div>
            <div
              className="movie"
              style={{ backgroundImage: "url('/squidgame.jpg')" }}
            >
              <span className="rank">3</span>
            </div>
            <div
              className="movie"
              style={{ backgroundImage: "url('/luckybaskhar.jpg')" }}
            >
              <span className="rank">4</span>
            </div>
            <div
              className="movie"
              style={{ backgroundImage: "url('/venom.jpg')" }}
            >
              <span className="rank">5</span>
            </div>
            <div
              className="movie"
              style={{ backgroundImage: "url('/bhoolbhulaiya.jpg')" }}
            >
              <span className="rank">6</span>
            </div>
            <div
              className="movie"
              style={{ backgroundImage: "url('/mismatched.jpeg')" }}
            >
              <span className="rank">7</span>
            </div>
            <div
              className="movie"
              style={{ backgroundImage: "url('/amaran.jpeg')" }}
            >
              <span className="rank">8</span>
            </div>
            <div
              className="movie"
              style={{ backgroundImage: "url('/south.jpeg')" }}
            >
              <span className="rank">9</span>
            </div>
            <div
              className="movie"
              style={{ backgroundImage: "url('/devara.avif')" }}
            >
              <span className="rank">10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2 className="info-title">More reasons to join</h2>
        <div className="info-boxes">
          <div className="info-box">
            <p>Enjoy on your TV</p>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
            <span className="icon">🖥️</span>
          </div>
          <div className="info-box">
            <p>Download your shows to watch offline</p>
            <p>Save your favorites easily and always have something to watch.</p>
            <span className="icon">📥</span>
          </div>
          <div className="info-box">
            <p>Watch everywhere</p>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
            <span className="icon">🔭</span>
          </div>
          <div className="info-box">
            <p>Create profiles for kids</p>
            <p>
              Send kids on adventures with their favorite characters in a space
              made just for them.
            </p>
            <span className="icon">👥</span>
          </div>
        </div>
      </section>
    </div>

    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question} <span className="toggle-icon">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    <div className="ready-to-watch">
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="email-container">
        <input type="email" placeholder="Enter your email" className="email-input" />
        <button className="btn-large">Get Started &gt;</button>
      </div>
    </div>

      <footer>
        <p>© 2025 Netflix Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
