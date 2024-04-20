import hifi1 from "../../assets/images/hi-fi1.webp";
import hifi2 from "../../assets/images/hi-fi2.webp";
import hifi3 from "../../assets/images/hi-fi3.webp";
import hifi4 from "../../assets/images/hi-fi4.webp";
import hifi5 from "../../assets/images/hi-fi5.webp";
import stock1 from "../../assets/images/stock-pro2.webp";
import stock2 from "../../assets/images/stock-pro3.webp";
import stock3 from "../../assets/images/stock-pro4.webp";
import stock4 from "../../assets/images/stock-pro5.webp";
import task11 from "../../assets/images/task11.webp";
import task12 from "../../assets/images/task12.webp";
import task13 from "../../assets/images/task13.webp";
import task21 from "../../assets/images/task21.webp";
import task22 from "../../assets/images/task22.webp";
import task23 from "../../assets/images/task23.webp";
import task24 from "../../assets/images/task24.webp";
import task25 from "../../assets/images/task25.webp";
import task31 from "../../assets/images/task31.webp";
import task32 from "../../assets/images/task32.webp";
import task33 from "../../assets/images/task33.webp";

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
    title: "Home Screen",
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
    text1:
      "One effective method adopted was to engage in a table talk with a few Stock Button staff members. ",
    text2:
      "This conversation helped to decipher the core parts that'd give a wholesome experience with the results intended. It became evident that to boost revenue, incorporating a feature that monitors individual sales trend and overall stock levels is crucial.",
    img: [task13, task12, task11],
  },
  {
    title: "User Flow",
    text1:
      "The goal of developing a user flow was to meticulously map out the user journey for three critical aspects: product monitoring, supplier management, and report analysis.",
    text2:
      " This involved systematically visualizing and understanding the sequence of interactions users would undertake within each flow, ensuring intuitive navigation, optimal user experience, and efficient accomplishment of tasks",
    img: [task21, task22, task23, task24, task25],
  },
  {
    title: "Wireflow",
    text1:
      "The creation of wireframes served the purpose of establishing expectations for the final product's appearance and providing a clear direction for the optimal visual approach.",
    text2:
      " This strategic step aimed to ensure that the eventual design, crafted in the final stages, has been thoroughly considered and adheres to the best design practices. ",
    img: [task31, task32, task33],
  },
];
