const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-card__icon" aria-hidden="true">
        <Icon size={24} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
    </div>
  );
};

export default ServiceCard;
