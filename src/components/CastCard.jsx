import styles from "./CastCard.module.css";

const CastCard = ({ actor }) => {
  return (
    <div className={styles.castCard}>
      <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={`${actor.name}`} className={styles.castImage} />
      <div className={styles.castInfo}>
        <h3 className={styles.castName}>{actor.name}</h3>
        <p className={styles.castRole}>{actor.role}</p>
      </div>
    </div>
  );
};

export default CastCard;
