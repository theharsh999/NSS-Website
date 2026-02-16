export const TeamMemberCard = ({ name, position, image }) => {
  return (
    <div className="team-member-card">
      <div className="team-member-card-image-container">
        {image ? (
          <img
            src={image}
            alt={name}
            className="team-member-card-image"
          />
        ) : (
          <div className="team-member-card-placeholder"></div>
        )}
      </div>

      <h4 className="team-member-card-name">
        {name}
      </h4>

      <p className="team-member-card-position">
        {position}
      </p>
    </div>
  );
};
