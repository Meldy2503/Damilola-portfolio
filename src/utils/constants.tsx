import project1 from "../assets/images/project31.webp";
import project4 from "../assets/images/project34.webp";
import project2 from "../assets/images/project36.webp";
import project3 from "../assets/images/project33.webp";
import project11 from "../assets/images/project11.svg";
import project22 from "../assets/images/project22.svg";
import expert1 from "../assets/images/expert2.webp";
import expert2 from "../assets/images/expert3.webp";
import expert3 from "../assets/images/expert1.webp";
import stock1 from "../assets/images/intro5.png";
import stock2 from "../assets/images/intro2.png";
import stock3 from "../assets/images/intro3.png";
import stock4 from "../assets/images/intro4.png";
import hifi1 from "../assets/images/hi-fi1.webp";
import hifi2 from "../assets/images/hi-fi2.webp";
import hifi3 from "../assets/images/hi-fi3.webp";
import hifi4 from "../assets/images/hi-fi4.webp";
import hifi5 from "../assets/images/hi-fi5.webp";
import task11 from "../assets/images/task11.webp";
import task12 from "../assets/images/task12.webp";
import task13 from "../assets/images/task13.webp";
import task21 from "../assets/images/task21.webp";
import task22 from "../assets/images/task22.webp";
import task23 from "../assets/images/task23.webp";
import task24 from "../assets/images/task24.webp";
import task25 from "../assets/images/task25.webp";
import task31 from "../assets/images/task31.webp";
import task32 from "../assets/images/task32.webp";
import task33 from "../assets/images/task33.webp";

export const menuData = [
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "My Processs",
    id: "#process",
  },
  {
    name: "My Expertise",
    id: "#expertise",
  },

  {
    name: "Testimonials",
    id: "#testimonials",
  },
  {
    name: "About Me",
    id: "#aboutMe",
  },
];
export const processData = [
  {
    title: "Discovery",
    text1:
      "I kick start my process with this phase where i engage in discovery sessions with my clients and stakeholders to understand the project's scope, address specific problems, and validate the need for the proposed solution. ",
    text2:
      "The goal here is to uncover project goals, estimate timelines, and gain insights into overall product roadmaps.",
  },
  {
    title: "UX Research",
    text1:
      "Following discovery sessions, I utilize essential UX Research Methodologies to gather crucial insights for crafting a usable product. ",
    text2:
      "These insights inform solutions that in-still user confidence and aid businesses in saving or generating revenue.",
  },
  {
    title: "Design Strategy",
    text1:
      "After gathering vital insights from the business and target audience, I brainstorm to determine the best approach for structuring product features, considering web or mobile solutions.  ",
    text2:
      "I create an information architecture that visualizes the element arrangement and establish a user flow, showcasing how users navigate through the solution with diverse user case scenarios",
  },
  {
    title: "Wire-framing",
    text1:
      "Here, i translate the envisioned direction into low-fidelity sketches to inform stakeholders and gather crucial feedback. ",
    text2:
      "This iterative process ensures insights are considered before advancing to the high-fidelity stage for refined and detailed designs",
  },
  {
    title: "Hi-Fidelity",
    text1:
      "At this point, I begin to elevate initially approved low-fidelity designs to high-fidelity visuals while integrating brand colors and occasionally introducing new palettes that align with the product's essence.  ",
    text2:
      "I also collaborate with existing design systems and component libraries to ensure uniformity. ",
  },
  {
    title: "Usability Testing",
    text1:
      "At this final phase, i test out the product's efficiency with the specific users of the product whom i initially interviewed/conducted surveys with. ",
    text2:
      "These individuals offers invaluable feedback crucial for enhancing existing experiences and workflows.",
  },
];

export const projectData = [
  {
    img: project1,
    icon: project11,
    title: "Stockbutton",
    iconColor: "#214758",
    heading: "An Inventory mobile app for business management.",
    text: "Stock button is an E-commerce Inventory App designed to facilitate seamless and efficient management of the business's inventory in relation to its online retail operations. This app serves as a digital tool that enables the business (Stock Button) to monitor, control, and optimize their product stock levels, sales, and order fulfilment processes. ",
    path: "/stock-button",
  },
  {
    img: project2,
    title: "Pyyr Reward",
    iconColor: "#6345B3",
    heading: "A web app enabling purchase of gift vouchers from leading brands",
    text: "Pyyr Rewards is a web-based loyalty platform designed to elevate customer loyalty. Within this platform, businesses or service providers, directly acquire digital gift vouchers from brands. These vouchers are then electronically awarded to customers who are part of a loyalty program.",
    path: "/pyyr-reward",
  },
  {
    img: project3,
    title: "Igetguy",
    iconColor: "#E46509",
    heading: "A service based mobile app that connects artisans to end-users ",
    text: "I Get Guy is a service rendering app designed to bridge the gap between skilled artisans providing services and end-users urgently seeking experienced service providers in specific localities.",
    path: "/igetguy",
  },
  {
    img: project4,
    icon: project22,
    iconColor: "#DC93BD",
    title: "Dobble",
    heading: "A web-based procurement software for organisations.",
    text: "Dobble is an innovative web-based procurement solution meticulously designed for organizations to streamline their expenditure management. It facilitates the seamless processing of operational requests and needs from staff members, contributing to the efficient operation of the business ensuring that the company operates within its budgetary limits, promoting financial prudence and effective spending practices.",
    path: "/dobble",
  },
];

export const expertiseData = [
  {
    img: expert3,
    title: "UX Strategy",
    text: "I find the sweet spots between what users want in order to make their lives easier and what the business needs to accomplish in order to survive and prosper. As a UX Strategist, i thrive in identifying the gap and the overlaps between these two goals and how design can serve both of these masters",
    tags: [
      "Collaboration",
      "Mind Mapping",
      "Ideation",
      "User-Centricity",
      "Communication",
      "Adaptability",
      "Innovation",
    ],
  },
  {
    img: expert1,
    title: "UI Design",
    text: "I utilize my strong visual design skills, including an understanding of color theory, typography, and layout to create visually appealing and cohesive designs while using the understanding of user flows, information architecture, to create seamless transitions between different elements of a user interface.",
    tags: [
      "Typography",
      "Color Theory",
      "Interaction Design",
      "UI Elements",
      "Iconography",
      "Prototyping",
      "Wireframing",
    ],
  },

  {
    img: expert2,
    title: "UX Research ",
    text: "I utilize a range of research methodologies such as interviews, surveys, usability testing, card sorting, and competitive analysis to develop empathy maps that highlight user pain points and behaviors, identify industry trends and standards, and pinpoint potential business advantages. This process enhances the desirability of the solution by incorporating a comprehensive understanding of user needs, competitive landscapes, and strategic opportunities",
    tags: [
      "Empathy Map",
      "User Journey",
      "User Personas",
      "User Surveys",
      "Interviews",
      "Double Diamond Method",
      "Brainstorming",
    ],
  },
];

export const testimonialData = [
  {
    img: "",
    text: "The results of the service were nothing short of remarkable. The end product far exceeded my expectations, showcasing the team's commitment to delivering excellence. It's clear that they take great pride in their work, and that pride shines through...",
    reviewer: "Tumininu Grey",
  },
  {
    img: "",
    text: "I would wholeheartedly recommend this service to anyone in need. This is a team that is not only skilled and dedicated but also genuinely cares about their clients' satisfaction. If you're looking for a service that combines expertise, professionalism, and a personal touch, look no further this is it!",
    reviewer: "First Bank",
  },
  {
    img: "",
    text: "I recently had the pleasure of experiencing an absolutely outstanding service that left me thoroughly impressed. From start to finish, every aspect of the service rendered was handled with the utmost professionalism, care, and attention to detail.",
    reviewer: "Charles Donga, Firstbank PLC",
  },
  {
    img: "",
    text: "I recently had the pleasure of experiencing an absolutely outstanding service that left me thoroughly impressed. From start to finish, every aspect of the service rendered was handled with the utmost professionalism, care, and attention to detail.",
    reviewer: "Victor Gbenga",
  },
  {
    img: "",
    text: "I recently had the pleasure of experiencing an absolutely outstanding service that left me thoroughly impressed. From start to finish, every aspect of the service rendered was handled with the utmost professionalism, care, and attention to detail.",
    reviewer: "Emelder Okafor",
  },
];

export const stockButtonImg = [stock1, stock2, stock3, stock4];

export const stockIntroCards = [
  {
    title: "A Dashboard System",
    text: "The dashboard system provides a consolidated interface which presents a summarized view of products added within a specified time frame.",
    showMore:
      "This feature allows users to track the evolution of their product catalog, monitor sales trends, and keep a close eye on the current inventory levels. It maintains a detailed record of items that have been sold, offering insights into the sales history and the existing stock levels for each product",
  },
  {
    title: "Product Management",
    text: "This feature ensures there’s a synergy between the stock in the inventory and the sales of individual items, enhancing overall operational efficiency.",
    showMore:
      " The product monitoring feature was crucial in ensuring there’s a synergy between the stock in the inventory and the sales of individual item. This implies that once inventory has been taken, sales from the e-commerce automatically reflect on the inventory balance, providing accurate insights on stock levels",
  },
  {
    title: "Report Analysis",
    text: "With the Report system, the business gets insights into key metrics such as stock level, turnover rate, etc. over a desired time frame.",
    showMore:
      "The goal of this feature was to help the business with insights into key metrics such as stock levels, turnover rates, and reorder frequencies, enabling businesses to assess their overall inventory performance and anticipate future inventory needs more accurately, reducing the risk of stock-outs or overstock situations.",
  },
  {
    title: "Supplier Management",
    text: "The supplier management feature Enables the business place orders directly from the inventory app with accurate update on stock levels on delivery. ",
    showMore:
      "To create a more holistic solution, the supplier module was an added feature, the goal here was to enable the business place orders directly from the inventory app. This integration would streamline the entire ordering process, from creating purchase orders to receiving and updating stock levels upon delivery",
  },
];
export const stockHifiCards = [
  {
    title: "Onboarding",
    text: "The onboarding process depicts the initiation of the inventory manager into the app. During this phase, they articulate their intended use of the application, concurrently providing the login credentials given by the administrator",
    img: hifi1,
  },
  {
    title: "Dashboard",
    text: "On the home screen, the inventory manager sees latest notifications or alerts related to inventory status, low stock, or other important updates. A card that summarises the stock level, a graph that shows the sales trend, and a table that displays the available products and their statuses.",
    img: hifi2,
  },
  {
    title: "Product",
    text: "On the product screen, the inventory manager sees summary cards that summarises the total amount of products available (the number of orders and the number of sold items in a specific period of timeframe selected), a data table that shows the products available ad their stock level and a button to add more product.",
    img: hifi3,
  },
  {
    title: "Report",
    text: "On the product screen, the inventory manager sees summary cards that summarises the total amount of products available (the number of orders and the number of sold items in a specific period of timeframe selected), a data table that shows the products available ad their stock level and a button to add more product.",
    img: hifi4,
  },
  {
    title: "Supplier",
    text: "In the suppliers menu of the inventory app, the inventory manager interfaces with A comprehensive list of all registered suppliers, displaying key information such as contact details, delivery performance, and order history.  Capability to easily add new suppliers to the system, including relevant details such as name, contact information, and preferred terms",
    img: hifi5,
  },
];

export const stockTaskCards = [
  {
    title: "User Research",
    text1: 'One effective method adopted was to engage in a table talk with a few Stock Button staff members. ',
    text2: "This conversation helped to decipher the core parts that'd give a wholesome experience with the results intended. It became evident that to boost revenue, incorporating a feature that monitors individual sales trend and overall stock levels is crucial.",
    img: [task11, task12, task13],

  },
  {
    title: "User Flow",
    text1: "The goal of developing a user flow was to meticulously map out the user journey for three critical aspects: product monitoring, supplier management, and report analysis.",
    text2: " This involved systematically visualizing and understanding the sequence of interactions users would undertake within each flow, ensuring intuitive navigation, optimal user experience, and efficient accomplishment of tasks",
    img: [task21, task22, task23, task24, task25],

  },
  {
    title: "Wireflow",
    text1: "The creation of wireframes served the purpose of establishing expectations for the final product's appearance and providing a clear direction for the optimal visual approach.",
    text2: " This strategic step aimed to ensure that the eventual design, crafted in the final stages, has been thoroughly considered and adheres to the best design practices. ",
    img: [task31, task32, task33],

  },
];
