const AboutCard = ({ firstText, secondText }) => {
  return (
    <div className="aboutCard">
      <div className="aboutCardBg">
        <div className="firstText">
          {firstText}
          <span className="secondText">{secondText}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
