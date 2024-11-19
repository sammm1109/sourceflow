import Layout from "../components/Layout";
import styles from "../styles/home.module.scss"; // CSS module for specific page styles
import SwiperComponent from "../components/swiperSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const slidesContent = [
    <img className={styles.partnerSectionImg} src="/images/microsoft.png" />,
    <img className={styles.partnerSectionImg} src="/images/oracle.png" />,
    <img className={styles.partnerSectionImg} src="/images/atlassian.png" />,
    <img className={styles.partnerSectionImg} src="/images/cloudfare.png" />,
    <img className={styles.partnerSectionImg} src="/images/vmware.png" />,
  ];

  const latestJobsSlidesContent1 = [
    <div>asdasd</div>,
    <div>asdasd</div>,
    <div>asdasd</div>,
  ];

  const latestJobsSlidesContent = [
    <div className={`${styles.jobSectionCard} ${styles.card_yellow}`}>
      <div className={styles.programmingLang}>
        <img src="/images/python_logo.png" className={styles.pythonLogo} />
        <span style={{ color: "#064EA4" }}>Python</span>
      </div>
      <div className={styles.jobTitle}>Software Engineer</div>
      <div className={styles.desc_location_dollar}>
        <img src="/images/location_blue_logo.png" />
        <span className={styles.locationText}>Londan</span>
      </div>
      <div className={styles.desc_location_dollar}>
        <img src="/images/dollar_blue_logo.png" />
        <span className={styles.locationText}>£65,000</span>
      </div>
      <div className={styles.desc_location_dollar} style={{ color: "#064EA4" }}>
        Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in
        aliquam.
      </div>
      <button type="button" className={`btn ${styles.btnViewJob}`}>
        View the job
      </button>
      <div className={styles.createdDate}>Posted on 29/08/2023</div>
    </div>,
    <div className={`${styles.jobSectionCard} ${styles.card_blue}`}>
      <div className={styles.programmingLang}>
        <img src="/images/python_logo.png" className={styles.pythonLogo} />
        <span style={{ color: "#064EA4" }}>Python</span>
      </div>
      <div className={styles.jobTitle_white}>Software Engineer</div>
      <div className={styles.desc_location_dollar}>
        <img src="/images/location_white_logo.png" />
        <span className={styles.locationText_White}>Londan</span>
      </div>
      <div className={styles.desc_location_dollar}>
        <img src="/images/dollar_white_logo.png" />
        <span className={styles.locationText_White}>£65,000</span>
      </div>
      <div className={styles.desc_location_dollar} style={{ color: "#fff" }}>
        Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in
        aliquam.
      </div>
      <button type="button" className={`btn ${styles.btnViewJob}`}>
        View the job
      </button>
      <div className={styles.createdDate} style={{ color: "#fff" }}>
        Posted on 29/08/2023
      </div>
    </div>,
    <div className={`${styles.jobSectionCard} ${styles.card_lightorange}`}>
      <div className={styles.programmingLang}>
        <img src="/images/python_logo.png" className={styles.pythonLogo} />
        <span style={{ color: "#064EA4" }}>Python</span>
      </div>
      <div className={styles.jobTitle}>Software Engineer</div>
      <div className={styles.desc_location_dollar}>
        <img src="/images/location_blue_logo.png" />
        <span className={styles.locationText}>Londan</span>
      </div>
      <div className={styles.desc_location_dollar}>
        <img src="/images/dollar_blue_logo.png" />
        <span className={styles.locationText}>£65,000</span>
      </div>
      <div className={styles.desc_location_dollar} style={{ color: "#064EA4" }}>
        Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in
        aliquam.
      </div>
      <button type="button" className={`btn ${styles.btnViewJob}`}>
        View the job
      </button>
      <div className={styles.createdDate}>Posted on 29/08/2023</div>
    </div>,
  ];

  return (
    <div className={styles.content}>
      {/* Banner Section */}
      <div className={`row ${styles.banner_outer}`}>
        <div className={`col-12 col-md-8 ${styles.leftBanner}`}>
          <p style={{ marginBottom: "20px" }}>
            Software Recruitment Specialists
          </p>
          <h1 className={styles.bannerTitle}>Elevate your career</h1>
          <div className={`input-group ${styles.searchBar}`}>
            <input
              type="search"
              className={`form-control ${styles.bannerInput}`}
              placeholder="E.g. networking"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button
              type="button"
              className={`btn ${styles.bannerSearchBtnInput}`}>
              Search jobs
            </button>
          </div>
        </div>
        <div className={`col-12 col-md-4 ${styles.rightBanner}`}>
          <img className={styles.profileImg} src="/images/profile.png" />
        </div>
      </div>

      {/* partner section */}
      <div className={styles.partnerSection}>
        <p style={{ color: "#D2D2D2" }}>Who we work with</p>
        <SwiperComponent
          slides={slidesContent}
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay config here
          showNavigation={false}
          className="swiper-partner-slide"
        />
      </div>

      {/* Latest Jobs section */}
      <div className={styles.jobSection}>
        <h1 className={styles.jobSectionTitle}>Latest Jobs</h1>
        <div className={styles.jobSectionCont}>
          <div className={styles.jobSectionRow}>
            <SwiperComponent
              slides={latestJobsSlidesContent}
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              autoplay={false}
              showNavigation={true}
              tableSlidesPerView={1}
              prevEl={".jobs-button-prev"}
              nextEl={".jobs-button-next"}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className={styles.jobSection_button}>
              <button className={`jobs-button-prev ${styles.btnIcon}`}>
                <span className={styles.iconSpan}>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className={styles.icon}
                  />
                </span>
              </button>
              <button className={`jobs-button-next ${styles.btnIcon}`}>
                <span className={styles.iconSpan}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.icon}
                  />
                </span>
              </button>
            </div>
            <div>View more jobs</div>
          </div>
        </div>
      </div>
      {/* Latest Jobs section */}
    </div>
  );
}
