import styles from "../styles/footer.module.scss";

export default function Footer() {
  const footerLeftItemList = [
    {
      id: "1",
      title: "LinkedIn",
      src: "/images/linkedIn.png",
    },
    {
      id: "2",
      title: "Facebook",
      src: "/images/facebook.png",
    },
    {
      id: "3",
      title: "Instagram",
      src: "/images/insta.png",
    },
    {
      id: "4",
      title: "Twitter",
      src: "/images/twitter.png",
    },
  ];

  const footerRightSitemapItemList = [
    {
      id: "1",
      title: "Explore",
      links: [
        { itemName: "Homepage", href: "/" },
        { itemName: "For jobseekers", href: "/" },
        { itemName: "For clients", href: "/" },
        { itemName: "Our sectors", href: "/" },
        { itemName: "Resources", href: "/" },
        { itemName: "Contact us", href: "/" },
      ],
    },
    {
      id: "2",
      title: "Sectors",
      links: [
        { itemName: "Software engineering", href: "/" },
        { itemName: "DevOps", href: "/" },
        { itemName: "Cloud", href: "/" },
        { itemName: "Infrastructure", href: "/" },
        { itemName: "Testing", href: "/" },
        { itemName: "Security", href: "/" },
      ],
    },
    {
      id: "3",
      title: "Services",
      links: [
        { itemName: "Service 1", href: "/" },
        { itemName: "Service 2", href: "/" },
        { itemName: "Service 3", href: "/" },
        { itemName: "Service 4", href: "/" },
        { itemName: "Service 5", href: "/" },
        { itemName: "Service 6", href: "/" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.util}>
        <div className={styles.inner}>
          <div className={styles.contactus}>
            <div className={styles.footerCompanyName}>
              Software Recruitment co.
            </div>
            <ul style={{ padding: 0 }}>
              {footerLeftItemList.map((item) => (
                <li key={item.id} className={styles.myListItem}>
                  <img src={item.src} alt={`${item.title} Logo`} />
                </li>
              ))}
            </ul>
          </div>

          <ul className={styles.sitemap}>
            {footerRightSitemapItemList.map((siteItem) => (
              <li key={siteItem.id} className={styles.siteItem}>
                <ul>
                  <li>
                    <p className={styles.sitemapTitle}>{siteItem.title}</p>
                  </li>
                  {siteItem.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className={styles.sitemapLink}>
                        {link.itemName}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
