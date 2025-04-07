const FeatureBox = ({ title, description, icon }) => {
  return (
    <div className="featureBox">
      <span>{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureBox;
