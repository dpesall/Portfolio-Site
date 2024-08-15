import React from 'react';
import styles from "../styles/Resume.styles.js";

import linkedinLogo from "../assets/linkedin-white.png"
import githubLogo from "../assets/github-white.png"

const Resume = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>Drew Pesall</h1>
        <div style={styles.contactInfo}>
          <div style={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/drew-pesall" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <img src={linkedinLogo} alt="LinkedIn" style={styles.socialLogo} />
            </a>
            <a href="https://github.com/dpesall" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <img src={githubLogo} alt="GitHub" style={styles.socialLogo} />
            </a>
          </div>
        </div>
      </header>

      <section style={styles.summary}>
        <p>Experienced software engineer with skills in full-stack development, API implementation, data analytics, and automation. Proficient in a variety of programming languages including Java, Python, C#, Clojure, Ruby, and JavaScript as well as AWS tools such as S3, CloudWatch, and Elasticsearch. Strong experience in agile software development, CI/CD pipelines, and reducing build times.</p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <div style={styles.skillsContainer}>
          <ul style={styles.skillsList}>
            <li>Full-Stack Development</li>
            <li>API implementation</li>
            <li>Talented Communicator</li>
          </ul>
          <ul style={styles.skillsList}>
            <li>Data analytics</li>
            <li>Automation</li>
            <li>CI/CD Pipeline Management</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Experience</h2>
        <div style={styles.job}>
          <h3>Software Engineer III, Program Manager / Innovim, Remote</h3>
          <p style={styles.jobDate}>JANUARY 2022 – PRESENT</p>
          <p>I work on NASA's Earthdata Search tool, writing code to build out new features, extend our Search API, fix bugs to increase performance and response latency, and optimize build times in our CI/CD pipeline. I also lead the development of a web tool that displays predictions for extreme precipitation events in the Western United States.</p>
        </div>
        <div style={styles.job}>
          <h3>Technology LDP – Software Engineering / Ameriprise Financial, Minneapolis MN</h3>
          <p style={styles.jobDate}>MAY 2020 – DECEMBER 2022</p>
          <p>As a Technology LDP, I rotated through three teams, working on automation, data analytics, and building an API for enterprise clients using technologies like C#, .NET, and AWS tools. I reduced the team's workload by over 100 hours per month by implementing automated script deployment and deploying a secure and scalable API utilizing AWS OpenSearch and Athena, reducing API response latency by up to 70%.</p>
        </div>
        <div style={styles.job}>
          <h3>Software Engineer Intern / Ameriprise Financial, Minneapolis MN</h3>
          <p style={styles.jobDate}>MAY 2019 – MAY 2020</p>
          <p>I designed and developed new capabilities for a web application to analyze and correct data, created a user-friendly UI with intuitive controls, and developed back-end integration for website-database interactions. Additionally, I demonstrated strong social and leadership skills through task organization, generating solutions, and giving presentations.</p>
        </div>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Education</h2>
        <div style={styles.education}>
          <h3>University of North Dakota</h3>
          <h3>B.S. Computer Science & B.A. Mathematics</h3>
          <p>2016-2020</p>
          <p>GPA: 3.744</p>
        </div>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Certifications</h2>
        <ul style={styles.volunteerList}>
          <li>Certified SAFe 6 Practitioner</li>
          <li>Site Reliability Engineering (SRE) FoundationSM Certification</li>
        </ul>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Volunteer Activities</h2>
        <ul style={styles.volunteerList}>
          <li>Small Group Leader – Eaglebrook Church 2022 - Present</li>
          <li>Large Group Teacher – Eaglebrook Church 2020 - Present</li>
          <li>Habitat for Humanity 2020 – 2021</li>
          <li>Peer Tutor – Calculus I, II, III, Differential Equations 2016 - 2020</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;