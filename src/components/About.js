import React from "react";

const AboutPage = () => {
  return (
    <div style={{ background: "#f2f2f2",padding:"40px", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{ maxWidth: "800px", padding: "40px", backgroundColor: "black",color:"white", borderRadius: "10px" }}>
        <h2 style={{ color: "white", marginBottom: "20px", textAlign: "center" }}>About Jobseeker</h2>
        <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "20px", textAlign: "justify" }}>
          Welcome to Jobseeker, the ultimate platform for job seekers to find their dream jobs. We understand the challenges faced by job seekers in today's competitive job market, and we are here to help you overcome those challenges and succeed in your job search.
        </p>
        <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "20px", textAlign: "justify" }}>
          Our mission is to connect job seekers with the right opportunities and empower them with the tools and resources they need to land their ideal job. Whether you're a recent graduate, a seasoned professional looking for a career change, or someone seeking part-time or remote work, Jobseeker has got you covered.
        </p>
        <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "20px", textAlign: "justify" }}>
          With our user-friendly interface, extensive job listings, and powerful search capabilities, finding job openings that match your skills, experience, and aspirations has never been easier. You can create a personalized profile, upload your resume, and apply for jobs directly through our platform.
        </p>
        <p style={{ fontSize: "20px", lineHeight: "1.6", marginBottom: "20px", textAlign: "justify" }}>
          We also offer a range of resources and tips to enhance your job search, including interview preparation guides, resume writing advice, and career development articles. Our goal is to equip you with the knowledge and strategies to stand out from the competition and impress potential employers.
        </p>
        <p style={{ fontSize: "20px", lineHeight: "1.6", textAlign: "justify" }}>
          Join Jobseeker today and take the next step towards your dream career. We are committed to helping job seekers like you succeed, and we can't wait to see you thrive in your professional journey.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
