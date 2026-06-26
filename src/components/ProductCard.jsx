import { ArrowRight, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, name, category, badge, description, onEnquire }) => {
  const navigate = useNavigate();
  const handleEnquire = onEnquire || (() => navigate('/contact'));

  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img src={image} alt={name} loading="lazy" />
        {badge && <span className="product-card__badge">{badge}</span>}
        {category && <span className="product-card__category">{category}</span>}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        {description && <p className="product-card__desc">{description}</p>}
        <button
          className="btn btn--outline-red product-card__btn"
          onClick={handleEnquire}
          aria-label={`Enquire about ${name}`}
        >
          Enquire Now
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
