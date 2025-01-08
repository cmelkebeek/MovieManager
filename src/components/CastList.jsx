import CastCard from "./CastCard";
import styles from "./CastList.module.css";

const CastList = ({ cast }) => {
  return (
    <div className={styles.castList}>
      {cast.map((actor, index) => (
        <CastCard
          key={index}
          actor={actor}
        />
      ))}
    </div>
  );
};

export default CastList;