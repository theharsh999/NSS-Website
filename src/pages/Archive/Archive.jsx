import { TeamMemberCard } from "./components/TeamMemberCard/TeamMemberCard";
import { TeamGroupCard } from "./components/TeamGroupCard/TeamGroupCard";
import { teamsData } from "./data/teamsData";
import "./Archive.css";

const Archive = () => {
  return (
    <div className="archive-page">
      <header className="archive-header">
        <div className="archive-container">
          <h1 className="archive-title">
            Archive
          </h1>
          <p className="archive-subtitle">
            Honoring our past councils and support team
          </p>
        </div>
      </header>

      <main className="archive-main">
        {teamsData.map((yearData, yearIndex) => (
          <section key={yearData.year} className={yearIndex > 0 ? "archive-section archive-section-spacing" : "archive-section"}>
            <div className="archive-year-heading">
              <h2 className="archive-year-title">
                Academic Year {yearData.year}
              </h2>
            </div>

            <div className="archive-council">
              <h3 className="archive-section-title">
                Council Members
              </h3>
              <div className="archive-grid archive-grid-council">
                {yearData.council.map((member, index) => (
                  <TeamMemberCard
                    key={`${yearData.year}-council-${index}`}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                  />
                ))}
              </div>
            </div>

            <div className="archive-junior-council">
              <h3 className="archive-section-title">
                Junior Council
              </h3>
              <div className="archive-grid archive-grid-junior">
                {yearData.juniorCouncil.map((member, index) => (
                  <TeamMemberCard
                    key={`${yearData.year}-junior-${index}`}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                  />
                ))}
              </div>
            </div>

            <div className="archive-grid archive-grid-groups">
              <TeamGroupCard
                title={yearData.technicalTeam.title}
                groupImage={yearData.technicalTeam.groupImage}
              />
              <TeamGroupCard
                title={yearData.creativeTeam.title}
                groupImage={yearData.creativeTeam.groupImage}
              />
            </div>
          </section>
        ))}
      </main>

      <footer className="archive-footer">
        <div className="archive-container">
          <p className="archive-footer-text">
            National Service Scheme — Not Me But You
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Archive;
