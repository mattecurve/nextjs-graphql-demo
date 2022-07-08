import Image from "next/image";
import styles from "./../../styles/Home.module.css";
import HomeImage from "./../../public/hims-blog-atf.png";

export function BannerSection() {
  return (
    <div className={styles.mainHead}>
      <div className='container'>
          <div className='row'>
              <div className='col-lg-6 col-md-12 '>
                  <h1
                      className={
                          styles.title +
                          ' text-lg-start text-center sm-12'
                      }
                  >
                      Savoir Faire
                  </h1>

                  <p
                      className={
                          styles.description +
                          ' text-lg-start text-center'
                      }
                  >
                      it&apos;s french. say it how it&apos;s
                      supposed to be said. it&apos; ll make your mouth feel funny.
                  </p>
              </div>
              <div className='col-lg-6 col-md-12'>
                  <div className={styles.image}>
                      <Image
                          src={HomeImage}
                          className={styles.image + 'img-fluid'}
                          alt='Savoir Faire'
                      />
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
}
