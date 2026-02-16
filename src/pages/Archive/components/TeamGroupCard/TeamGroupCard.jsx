export const TeamGroupCard = ({ title, groupImage }) => {
  return (
    <div className="team-group-card">
      <div className="team-group-card-image-container">
        {groupImage ? (
          <img
            src={groupImage}
            alt={title}
            className="team-group-card-image"
          />
        ) : (
          <div className="team-group-card-placeholder"></div>
        )}
      </div>

      <div className="team-group-card-title-container">
        <h4 className="team-group-card-title">
          {title}
        </h4>
      </div>
    </div>
  );
};
