import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ avatar, username, tag, location, stats }) => {
  const formattedNumber = (number) => number.toLocaleString("en");

  // Wynik: "1,000"

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img src={avatar} className={styles.avatar} alt="User avatar" />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>
            {formattedNumber(stats.followers)}
          </span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>
            {formattedNumber(stats.views)}
          </span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>
            {formattedNumber(stats.likes)}
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    follower: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
