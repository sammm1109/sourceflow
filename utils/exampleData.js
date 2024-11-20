// Image content data
export const imageContentList = () => {
  if (typeof window !== "undefined") {
    return [
      { src: "/images/microsoft.png", alt: "Microsoft" },
      { src: "/images/oracle.png", alt: "Oracle" },
      { src: "/images/atlassian.png", alt: "Atlassian" },
      { src: "/images/cloudfare.png", alt: "Cloudfare" },
      { src: "/images/vmware.png", alt: "VMware" },
    ];
  }
  return [];
};

// Job listings data
export const latestJobsData = [
  {
    id: 1,
    title: "Software Engineer",
    location: "London",
    salary: "£65,000",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    programmingLang: "Python",
    createdDate: "29/08/2023",
    cardStyle: "card_yellow", // You can use different classes for card styles
    locationImg: "/images/location_blue_logo.png",
    salaryImg: "/images/dollar_blue_logo.png",
    btnClass: "btnViewJob",
    cardColor: "#064EA4",
  },
  {
    id: 2,
    title: "Software Engineer",
    location: "London",
    salary: "£65,000",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    programmingLang: "Python",
    createdDate: "29/08/2023",
    cardStyle: "card_blue",
    locationImg: "/images/location_white_logo.png",
    salaryImg: "/images/dollar_white_logo.png",
    btnClass: "btnViewJob",
    cardColor: "#fff",
  },
  {
    id: 3,
    title: "Software Engineer",
    location: "London",
    salary: "£65,000",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    programmingLang: "Python",
    createdDate: "29/08/2023",
    cardStyle: "card_lightorange",
    locationImg: "/images/location_blue_logo.png",
    salaryImg: "/images/dollar_blue_logo.png",
    btnClass: "btnViewJob",
    cardColor: "#064EA4",
  },
];
