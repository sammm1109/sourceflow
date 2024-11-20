import { useState, useEffect } from "react";
import Modal from "../components/modal";
import styles from "../styles/home.module.scss";
import SwiperComponent from "../components/swiperSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SwiperSlide } from "swiper/react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { latestJobsData, imageContentList } from "../utils/exampleData";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [jobs, setJobs] = useState([]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const imagesData = imageContentList();
    setImages(imagesData);
    setJobs(latestJobsData);
  }, []);

  return (
    <div className={styles.content}>
      {/* Banner Section */}
      <div className={styles.banner_outer}>
        <div className={styles.banner_wrap}>
          <div className={`col-md-8 ${styles.leftBanner}`}>
            <div className="col-12 col-md-12">
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
            <div
              className={`col-6 d-none d-sm-block d-md-none ${styles.rightBanner}`}>
              <img className={styles.profileImg} src="/images/profile.png" />
            </div>
          </div>
          <div
            className={`col-12 col-md-4 d-none d-md-block ${styles.rightBanner}`}>
            <img className={styles.profileImg} src="/images/profile.png" />
          </div>
        </div>
      </div>

      {/* partner section */}
      <div className={styles.partnerSection}>
        <p style={{ color: "#D2D2D2" }}>Who we work with</p>
        <div>
          <SwiperComponent
            slides={images.map((image, index) => (
              <div key={index} className="swiper-partner-slide">
                <img
                  className="partnerSectionImg"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
            spaceBetween={10}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay config here
            showNavigation={false}
          />
        </div>
      </div>

      {/* Latest Jobs section */}
      <div className={styles.jobSection}>
        <h1 className={styles.jobSectionTitle}>Latest Jobs</h1>
        <div className={styles.jobSectionCont}>
          <div className="jobSectionRow">
            <SwiperComponent
              slides={jobs.map((job) => (
                <div
                  key={job.id}
                  className={`${styles.jobSectionCard} ${
                    styles[job.cardStyle]
                  }`}>
                  <div className={styles.programmingLang}>
                    <img
                      src="/images/python_logo.png"
                      className={styles.pythonLogo}
                    />
                    <span style={{ color: "#064EA4" }}>
                      {job.programmingLang}
                    </span>
                  </div>
                  <div
                    className={
                      job.cardStyle === "card_blue"
                        ? styles.jobTitle_white
                        : styles.jobTitle
                    }>
                    {job.title}
                  </div>
                  <div className={styles.desc_location_dollar}>
                    <img src={job.locationImg} />
                    <span className={styles.locationText}>{job.location}</span>
                  </div>
                  <div className={styles.desc_location_dollar}>
                    <img src={job.salaryImg} />
                    <span className={styles.locationText}>{job.salary}</span>
                  </div>
                  <div
                    className={styles.desc_location_dollar}
                    style={{ color: job.cardColor }}>
                    {job.description}
                  </div>
                  <button
                    type="button"
                    className={`btn ${styles[job.btnClass]}`}>
                    View the job
                  </button>
                  <div
                    className={styles.createdDate}
                    style={{ color: job.cardColor }}>
                    Posted on {job.createdDate}
                  </div>
                </div>
              ))}
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              autoplay={false}
              showNavigation={true}
              tableSlidesPerView={1}
              prevEl=".jobs-button-prev"
              nextEl=".jobs-button-next"
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
            <div className={styles.viewMoreJobs} onClick={handleOpenModal}>
              <u>View more jobs</u>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onClose={handleCloseModal} title="View More Jobs">
        <p>Please click the link below to view more.</p>
        <a href="https://www.sourceflow.co.uk/jobs">
          <u style={{ color: "blue" }}>https://www.sourceflow.co.uk/jobs</u>
        </a>
      </Modal>
      {/* Latest Jobs section */}
    </div>
  );
}
