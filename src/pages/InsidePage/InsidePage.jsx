import React from 'react';
import { Link } from 'react-router-dom'; // for routing

const InsidePage = () => {
  return (
    <div className="inside-page-container">
      <header className="header">
        <div className="logo">FitAura</div>
        <nav>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/settings" className="nav-link">Settings</Link>
          <Link to="/logout" className="nav-link">Logout</Link>
        </nav>
      </header>

      <main className="main-content">
        <section className="welcome-section">
          <h1>Welcome back, [User Name]!</h1>
          <p>Here’s your personalized health and fitness dashboard.</p>
        </section>

        <section className="summary-section">
          <div className="health-summary">
            <h2>Health Summary</h2>
            <p>Blood Pressure: 120/80</p>
            <p>Heart Rate: 75 bpm</p>
            <p>Steps: 8,500</p>
          </div>
          <div className="fitness-progress">
            <h2>Fitness Progress</h2>
            <p>Weight: 70 kg</p>
            <p>Goal: Lose 5 kg</p>
            <p>Calories Burned Today: 350 kcal</p>
          </div>
        </section>

        <section className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/workouts">Workouts</Link></li>
            <li><Link to="/nutrition">Nutrition Plans</Link></li>
            <li><Link to="/sleep">Sleep Tracking</Link></li>
            <li><Link to="/symptoms">Health Symptoms</Link></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 FitAura. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InsidePage;
