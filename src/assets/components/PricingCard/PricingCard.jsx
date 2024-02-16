import styles from "./PricingCard.module.css";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function PricingCard({ card }) {
  const themeClasses = {
    "Start Up": styles["card--startup"],
    Pro: styles["card--pro"],
    Enterprise: styles["card--enterprise"],
  };

const {label, price, duration, image, imageAlt, benefits} = card

  const themeClass = themeClasses[label];

  return (
    <div className={`${styles.card} ${themeClass}`}>
      <div className={`${styles.card__wrapper} center-vertical`}>
        <span className={styles.card__label}>{label}</span>
        <div>
          <img className={styles.card__image} src={image} alt={imageAlt} />
        </div>
        <div className={styles["card__price-label"]}>
          <span className={styles["card__price-amount"]}>{price}</span>

          {duration && (
            <span className={styles["card__price-duration"]}>{duration}</span>
          )}
        </div>
        <span className={styles["card__benefits-label"]}>
          Every thing in Free, Plus
        </span>
        <ul className={styles.card__benefits}>
          {benefits.map((benefit) => {
            return (
              <li
                key={benefit}
                className={`${styles.card__benefits} center-horizontal`}
              >
                <img
                  alt="check"
                  className={styles["card__benefit-icon"]}
                  src="/icons/check.png"
                />
                {benefit}
              </li>
            );
          })}
        </ul>
        <Button className={styles.card__button}>Cooose</Button>
      </div>
    </div>
  );
}

PricingCard.propTypes = {
  card: PropTypes.exact({
    label: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default PricingCard;
