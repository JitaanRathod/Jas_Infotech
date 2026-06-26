const IndustryCard = ({ image, icon: Icon, title, description }) => {
  return (
    <div className="industry-card">
      {image ? (
        <div className="industry-card__image-top">
          <img src={image} alt={title} loading="lazy" />
          <div className="industry-card__image-overlay">
            <h3>{title}</h3>
          </div>
        </div>
      ) : (
        <div className="industry-card__icon-top" aria-hidden="true">
          {Icon && <Icon size={40} />}
          <h3>{title}</h3>
        </div>
      )}
      <div className="industry-card__body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IndustryCard;
