import styles from "./../../../styles/Home.module.css";

export function DiscoverMore() {
  return (
    <div className='text-center'>
        <div className={styles.discoverLabel}>
            <p className='mb-5'>
                Discover more about mens health
            </p>
        </div>
    </div>
  );
}

export function ExploreSection() {
  return (
    <div className={styles.partTwo}>
        <div className='text-center'>
            <div className={styles.explore}>
                <h2 className='mb-4 '>
                    Explore the Hims Journal
                </h2>
            </div>
        </div>
    </div>
  );
}
