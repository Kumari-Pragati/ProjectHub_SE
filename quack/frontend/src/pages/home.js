import React from 'react';
import '../css/HomePage.css'; 

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [
        ['Washing Machine', 'Kudasan', 'assets/washingmachine.jpeg', 2],
        ['AC Repair', 'Sector 6', 'assets/ac.jpg', 4],
        ['Short circuit issue', 'Koba', 'assets/shortcircuit.jpeg', 4]
      ]
    };
  }

  render() {
    return (
      <div className="home-page">
        <header className="header">
          <h1>Dashboard</h1>
          <div className="header-buttons">
            <button onClick={() => console.log('View all')}>View all</button>
            <button onClick={() => console.log('Notification button clicked')}>
              <i className="material-icons">notifications_none</i>
            </button>
            <button onClick={() => console.log('Profile button clicked')}>
              <img src="assets/profileicon.jpg" alt="Profile" />
            </button>
          </div>
        </header>
        <section className="queries-section">
          <h2>Queries You Can Resolve</h2>
          <div className="worker-list">
            {this.state.workers.map((worker, index) => (
              <div className="worker-card" key={index}>
                <img className="worker-image" src={worker[2]} alt="Worker" />
                <p className="worker-name">{worker[0]}</p>
                <p className="worker-job">{worker[1]}</p>
                <p className="worker-rating">{worker[3]} days</p>
              </div>
            ))}
          </div>
        </section>
        <section className="working-on-section">
          <h2>Working on</h2>
          <div className="query-list">
            <div className="query-card">
              <p>1 AC Repair</p>
              <p>Kudasan</p>
            </div>
            <div className="query-card">
              <p>2 AC Repair</p>
              <p>Sector 5</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
