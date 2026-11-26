import React from "react";
import { Card11, Card22, Card25 } from "./TeamCards";
// import AnimatedCursor from "react-animated-cursor";
import { motion } from 'framer-motion';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Team.css";
import { teamBoard } from "./TeamData/Board";
import { teamExec } from "./TeamData/Executives";
import { teamHeads } from "./TeamData/Heads";
import { teamLeads } from "./TeamData/Leads";
import { mentors } from "./TeamData/Mentor_Mentee_Board";
import { teamMentors } from "./TeamData/Mentors";
import { teamWorking } from "./TeamData/Working";
import TeamList from "./TeamList";

const Team = () => {
  return (
    <div>
      {/* <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #fff",
        }}
      /> */}
      <Navbar />
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      >
        <div className="container">
          <div className="container-top">
            <h1
              className="Ultrabold comp"
              style={{ marginTop: "8rem", marginBottom: "7rem" }}
            >
              Behind the Scenes
            </h1>
          </div>
          {/* Salaah Heads — Card #11: Diagonal Clip-Path Wipe */}
          <div id="team-section">
            <h1 className="team_headline Regular">Salaah Heads</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {teamHeads.map((member, i) => (
                  <Card11 key={i} {...member} />
                ))}
              </div>
            </div>
          </div>

          {/* Board of Governance — Card #22: Holographic Light Sweep */}
          <div id="team-section">
            <h1 className="team_headline Regular">Board of Governance</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {teamBoard.map((member, i) => (
                  <Card22 key={i} {...member} />
                ))}
              </div>
            </div>
          </div>

          {/* Mentor Mentee Board — Card #25: 3D Cursor-Tilt Pop-Out */}
          <div id="team-section">
            <h1 className="team_headline Regular">Mentor Mentee Board</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {mentors.map((member, i) => (
                  <Card25 key={i} {...member} />
                ))}
              </div>
            </div>
          </div>

          {/* Executives — Card #11: Diagonal Clip-Path Wipe (4th section cycles back) */}
          <div id="team-section">
            <h1 className="team_headline Regular">Executives</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {teamExec.map((member, i) => (
                  <Card11 key={i} {...member} />
                ))}
              </div>
            </div>
          </div>

          {/* Leads — Card #22: Holographic Light Sweep (5th section) */}
          <div id="team-section">
            <h1 className="team_headline Regular">Leads</h1>
            <div style={{ marginBottom: "7rem" }}>
              <div className="teamCard_grid">
                {teamLeads.map((member, i) => (
                  <Card22 key={i} {...member} />
                ))}
              </div>
            </div>
          </div>
          <div id="team-section">
            <h1 className="team_headline Regular">Mentors & Members</h1>
            <div style={{ marginBottom: "7rem", marginTop: "3rem" }}>
              <div className="teamCard_grid">
                {teamMentors.map(({ name, title }, i) => {
                  return <TeamList key={i} name={name} title={title} />;
                })}
              </div>
            </div>
          </div>
          <div id="team-section">
              <h1 className="team_headline Regular">Working Committee</h1>
              <div style={{ marginBottom: "7rem",marginTop: "3rem" }}>
                <div className="teamCard_grid">
                  {teamWorking.map(({ name, title }, i) => {
                    return <TeamList key={i} name={name} title={title} />;
                  })}
                </div>
              </div>
            </div>            
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Team;
