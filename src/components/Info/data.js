import mainLogo from'../../images/banner.png';

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About",
  headline: "Let's secure your assets",
  description:
    "We offer advanced security assessment of your organization assets via simulating hackers' approach which aids in identifying security gaps on them. We will also suggest remediation steps to patch the identified vulnerabilities.",
  imgStart: false,
  img: require("../../images/red-teaming.svg").default,
  alt: "Red Teaming",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "workflow",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Workflow",
  headline: "Complete workflow of our projects",
  description:
    "We use a workflow consisting of 6 steps. Each of these steps are completed successfully and the detailed final report is prepared and presented to the customer.",
  imgStart: true,
  img: require("../../images/workflow.svg").default,
  alt: "Workflow",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "pricing",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Discounted Pentest Service",
  headline: "We support young global startups",
  description:
    "Our team supports successful young startups accross the world and offers them pentest services with huge discounts.",
  imgStart: false,
  img: require("../../images/startups.svg").default,
  alt: "Startups",
  dark: false,
  primary: false,
  darkText: true,
};

export const NavbarFooter = {
  img: mainLogo,
  alt: "logo"  
}
