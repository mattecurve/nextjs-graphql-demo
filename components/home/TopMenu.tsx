import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./../../styles/Home.module.css";

export function TopMenu() {
  return (
    <div className='container-fluid'>
      <div className={styles.mainHims}>
          <h2>hims</h2>
          <div className={styles.hamburg}>
              <FontAwesomeIcon
                  style={{ height: ' auto', width: '16px' }}
                  icon={faBars}
              />
          </div>
          <button className='button button4'>
              <p>WHAT WE TREAT</p>
          </button>
      </div>
    </div>
  );
}
