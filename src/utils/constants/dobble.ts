import task1 from "../../assets/images/dobble-task1.webp";
import task2 from "../../assets/images/dobble-task2.webp";
import task3 from "../../assets/images/dobble-task3.webp";
import dobbleHifi1 from "../../assets/images/dobble-hifi1.webp";
import dobbleHifi2 from "../../assets/images/dobble-hifi2.webp";
import dobbleHifi3 from "../../assets/images/dobble-hifi3.webp";
import dobbleHifi4 from "../../assets/images/dobble-hifi4.webp";
import dobbleHifi5 from "../../assets/images/dobble-hifi5.webp";
import dobbleHifi6 from "../../assets/images/dobble-hifi6.webp";
import dobbleHifi7 from "../../assets/images/dobble-hifi7.webp";

export const taskData = [
  {
    img: task1,
    subTitle: "WHAT I DID",
    title1: "I embarked on series of ",
    title2: "product research",
    title3: "due to the complexity of the system.",
    text: "I had a lean timeframe provided for this project, and as such my first major task was to ensure the right features were fleshed out for the software within a stipulated period of time. ",
  },
  {
    img: task2,
    subTitle: "RESEARCH METHODOLOGY",
    title1: "The major research technique adopted for this product was",
    title2: "Competitive Analysis",
    title3: "",
    text: "This meant that i had to thoroughly look through similar product’s interfaces, understand the features they had and the thought process behind every feature they introduced to their users. This gave me room to leverage the Market Research they may have done to arrive at their solutions.",
  },

  {
    img: task3,
    subTitle: "KEY TAKEAWAYS",
    title1: "I identified the  ",
    title2: "core features  ",
    title3: "similar products had working for them ",
    text: "With the feedbacks i drew from similar products i noticed the core features they have that should also be represented on our solution, i also identified some missing piece that that can serve as an edge for the product in the market today.",
  },
];

export const dobbleHifiCards = [
  {
    title: "Requisition",
    text: "The requisition flow covers the entire process it’d require for a staff within the organisation to submit request for items they need. The requisition could be a cash or purchase request, it could also be a request for refund or reimbursement in cases whereby a requester spend above or below a stipulated amount.",
    img: dobbleHifi1,
  },
  {
    title: "Approvals",
    text: "Based off the policies that may have been created in the settings module, requests are either approved or declined by certain user on the system. Approval of requests may however require more than one individual and can be edited to fit stipulated budgets in cases where it exceeds budget limit.",
    img: dobbleHifi2,
  },
  {
    title: "Procurement",
    text: "The procurement modules captures all that is required to purchase items requested by staffs from external vendors or from the items available in the inventory. At the point of purchase, PO Requests are created with selected vendors which had been added to the system from the settings module. RFQs are created with these POs and sent to selected vendors. These RFQs are sent back with various quotation from selected vendor. RFQ can also be made public to appear in the general marketplace or not.",
    img: dobbleHifi3,
  },
  {
    title: "RFQ (Request for Quotation)",
    text: "The Request for Quotation feature is a part of the procurement module. Here all quotation sent in by vendors for a specific PO are addressed. The organisation chooses to either accept or decline, or choose to renegotiate offers.",
    img: dobbleHifi4,
  },
  {
    title: "Billing",
    text: "The billing module processes payments for Items that has been purchased from vendors. An agreed payment term and due date would have been shared with the organisation via an invoice from the vendor which would be processed by the billing officer and sent in for approval.",
    img: dobbleHifi5,
  },
  {
    title: "Wallet",
    text: "The wallet system helps to process bulk and individual payments to vendors after invoices has been processed and approved from the billing module",
    img: dobbleHifi6,
  },
  {
    title: "Marketplace",
    text: "The Marketplace module serves as an avenue for organisations to access vendors listed publicly who are necessarily not their internal vendors. Here, organisations ca request for quotation for POs that has been created by a procurement officer.",
    img: dobbleHifi7,
  },
];
