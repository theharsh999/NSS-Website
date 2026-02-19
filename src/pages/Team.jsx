import React from "react";
import { useEffect } from "react";
import { Map } from "../components/Common/index";
import Socials from "../components/Common/Socials";
import Chairperson from "../components/Team/chairperson";
// import Images from "../assets/team/index";
import newImages from "../assets/team2025-2026/index";
import ProgramOfficer from "../components/Team/programOfficer";
import DeputyProgramOfficer from "../components/Team/deputyprogramOfficer";
import Scroller from "../components/Scroller";
import JcContainer from "../components/TeamCardcontainer";
import TeamCreativeTeam from "../components/TeamCreativeTeam";

const Team = () => {
  useEffect(() => {
    document.title = "Teams | TCET NSS UNIT";
  });

  return (
    <div>
      <Chairperson />
      <ProgramOfficer />
      <DeputyProgramOfficer />
      <Scroller />
      <JcContainer />
      <TeamCreativeTeam
        simple_image={newImages.Technical}
        hd_image={newImages.Technical}
        name={"Technical Team"}
        text={"Excellence in Execution, Professionalism in Service"}
      />
      <TeamCreativeTeam
        simple_image={newImages.Creative_reduced}
        hd_image={newImages.Creative}
        name={"Creatives Team"}
        text={
          "Creativity is Seeing what others see and Thinking what noone else ever though"
        }
      />
      <TeamCreativeTeam
        simple_image={newImages.CouncilandPo}
        hd_image={newImages.CouncilandPo}
        name={"Pillars of TCET NSS UNIT"}
        text={"TCET NSS: Empowering Change, One Heartbeat at a Time."}
      />
      <Socials />
      <Map />
    </div>
  );
};

export default Team;
