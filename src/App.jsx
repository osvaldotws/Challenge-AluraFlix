import React from "react";
import "./App.css";

const VideoCard = ({ title, instructor, category }) => (
  <div className="video-card">
    <h3>{title}</h3>
    <p>{instructor}</p>
    <p>{category}</p>
    <div className="card-actions">
      <button>Delete</button>
      <button>Edit</button>
    </div>
  </div>
);

const App = () => {
  const videos = [
    { title: "React Basics", instructor: "John Doe", category: "Front End" },
    {
      title: "JavaScript Fundamentals",
      instructor: "Jane Smith",
      category: "Front End",
    },
    {
      title: "SQL Introduction",
      instructor: "Bob Johnson",
      category: "Back End",
    },
    // Add more sample videos as needed
  ];

  return (
    <div className="app">
      <header>
        <h1>VideoFlix</h1>
        <nav>
          <button>HOME</button>
          <button>NEW VIDEO</button>
        </nav>
      </header>
      <main>
        <section className="featured-video">
          <h2>Featured Video</h2>
          <VideoCard
            title="React Challenge"
            instructor="Featured Instructor"
            category="Front End"
          />
        </section>
        <section className="video-grid">
          <h2>Front End</h2>
          <div className="grid">
            {videos
              .filter((v) => v.category === "Front End")
              .map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
          </div>
          <h2>Back End</h2>
          <div className="grid">
            {videos
              .filter((v) => v.category === "Back End")
              .map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
          </div>
        </section>
      </main>
      <footer>
        <p>VideoFlix © 2024</p>
      </footer>
    </div>
  );
};

export default App;
