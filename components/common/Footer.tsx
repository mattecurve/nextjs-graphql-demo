import Image from "next/image";
import styles from "./../../styles/Home.module.css";
import logo from "./../../public/logo.png";

export function FooterMenu(props: any) {
  return (
    <div className='col-md-2 col-6 mb-md-0 mb-4'>
      <h6 className='pb-4'>{props.title}</h6>
      <ul className='list-group'>
      {props.menus.map((menu: any, index: number) =>
        <li className={styles.footerGroupLink + ' list-group-item'} key={index+'_'+menu.text}>
          <a href='#'>{menu.text}</a>
          <span className='d-block small'>{menu.subText}</span>
        </li>
      )}
      </ul>
    </div>
  );
}

export function Footer(props: any) {
  const {footerMenuList} = props;

  return (
    <div className='container-fluid bg-black footerContainer'>
              <div className='row justify-content-md-evenly justify-content-left text-white pt-5 pb-5 px-2 container'>
                  <div className='col-md-4 col-6 pt-2 '>
                      <h3 className={styles.emailInputTitle + ' pb-3'}>
                        Get the latest from Hims
                      </h3>
                      <input
                          type='email'
                          placeholder='Email address'
                          className={styles.emailInput + ' px-3'} />
                  </div>
                  {
                    footerMenuList.map((footerMenuItem: any, i: number) =>
                      <FooterMenu key={'footerMenuItem_'+i} title={footerMenuItem.title} menus={footerMenuItem.menus} />
                    )
                  }
              </div>

              <div className={styles.termsFooterSection + ' row bg-black pb-5'}>
                  <div className='col-md-8 col-12 bg-black d-flex flex-row'>
                    <Image
                        alt='Logo'
                        src={logo}
                        className={styles.forHimsFooterLogo}
                        width="76px"
                        height="65px"
                    />
                    <ul className='list-group d-flex flex-row ms-4'>
                  {['Terms & conditions', 'Privacy Policy', 'Sitemap', 'CCPA: Do Not Sell My Personal Information'].map((menu: any, index: number) =>
                    <li className={styles.footerGroupLink + ' list-group-item'} key={index+'_'+menu}>
                      <a href='#'>{menu}</a>
                    </li>
                  )}
                  </ul>
                  </div>
                  <div className='col-md-4 col-12'></div>
              </div>
          </div>
  );
}
