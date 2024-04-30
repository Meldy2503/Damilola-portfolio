'ise client' 
 
 import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { PiMediumLogoBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
// import { FaInstagram, FaTwitter } from "react-icons/fa";


export const menuData = [
  {
    name: "Stock Button",
    path: "/stock-button",
  },
  {
    name: "Pyyr Reward",
    path: "/pyyr-reward",
  },

  {
    name: "Igetguy",
    path: "/igetguy",
  },
  {
    name: "Dobble",
    path: "/dobble",
  },
];

export const icons = [
  {
    name: "Email",
    icon: <MdOutlineEmail key="email" />,
    href: "mailto:damilolabamgbelu@gmail.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram key="instagram" />,
    href: "https://www.instagram.com/dharmmey_bams?igsh=MXQ1ZjJyNzY0dnJpZQ%3D%3D&utm_source=qr",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter key="twitter" />,
    href: "https://x.com/damilolalice?s=21",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin key="linkedin" />,
    href: "https://www.linkedin.com/in/damilolabamgbelu",
  },
  {
    name: "Medium",
    icon: <PiMediumLogoBold key="Medium" />,
    href: "https://medium.com/@damilolabamgbelu",
  },
];
