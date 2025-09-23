import thumb1 from "../assets/images/slghome.png";
// import thumb2 from "../assets/images/diya-thumbnail.png";
import thumb2 from "../assets/images/bill_home.png";
import thumb3 from "../assets/images/mgflower.png";
import thumb4 from "../assets/images/cchome.png";

//billing-app
import image1 from "../assets/images/bill_dashboard_dark.png";
import image2 from "../assets/images/bill_dashboard.png";
import image3 from "../assets/images/bill_home.png";
import image4 from "../assets/images/bill_purchase.png";
import image5 from "../assets/images/bill_purchaseview.png";
import image7 from "../assets/images/bill_report.png";
import image8 from "../assets/images/bill_stock.png";
import image9 from "../assets/images/sales_report.png";
import image10 from "../assets/images/bill_mobile.jpeg";
import image11 from "../assets/images/bill_mobilecart.jpeg";
import image12 from "../assets/images/bill_mobilefinal.jpeg";
import image13 from "../assets/images/bill_mobileprint.jpeg";

//mgflower
import flower from "../assets/images/mgflower.png";
import flower1 from "../assets/images/mgflower1.png";

//slg
import slg from "../assets/images/slghome.png";
import slg1 from "../assets/images/slg-atten1.png";
import slg2 from "../assets/images/slg-atten-admin.png";
import slg3 from "../assets/images/slg-collreport.png";
import slg4 from "../assets/images/slg-course.png";
import slg5 from "../assets/images/slg-doc.png";
import slg6 from "../assets/images/slg-emp.png";
import slg7 from "../assets/images/slg-emp-log.png";
import slg8 from "../assets/images/slg-fm-att.png";
import slg9 from "../assets/images/slg-fm-colupdate.png";
import slg10 from "../assets/images/slg-fm-dash.png";
import slg11 from "../assets/images/slg-fm-dash1.png";
import slg12 from "../assets/images/slg-home1.png";
import slg13 from "../assets/images/slg-home2.png";
import slg14 from "../assets/images/slg-home3.png";
import slg15 from "../assets/images/slg-home4.png";
import slg16 from "../assets/images/slg-leave.png";
import slg17 from "../assets/images/slg-leave-req.png";
import slg18 from "../assets/images/slg-logs.png";
import slg19 from "../assets/images/slg-rm-att.png";
import slg20 from "../assets/images/slg-rm-dash.png";
import slg21 from "../assets/images/slg-star.png";
import slg22 from "../assets/images/slg-tl-att.png";
import slg23 from "../assets/images/slg-tl-rmcol.png";
import slg24 from "../assets/images/slg-user1.png";
import slg25 from "../assets/images/slg-user2.png";
import slg26 from "../assets/images/slg-user3.png";
import slg27 from "../assets/images/slg-users.png";
import slg28 from "../assets/images/slg-home6.png";
import slg29 from "../assets/images/slg-starhistory.png";
import slg30 from "../assets/images/slg-rm-month.png";
import slg31 from "../assets/images/slg-deduction.png";



//client control
import cc1 from "../assets/images/cchome.png";
import cc2 from "../assets/images/cc1.png";
import cc3 from "../assets/images/cc2.png";
import cc5 from "../assets/images/cc4.png";
import cc6 from "../assets/images/cc5.png";


const projects = [
  {
    id: "Course-Platform",
    title: "SLG Online Course Platform and Employee Management",
    thumbnail: thumb1,
    images: [
      slg1,slg2,slg3,slg4,slg5,slg6,slg7,slg8,slg9,slg10,slg11,slg12,slg13,slg14,slg15,slg16,slg17,slg18,slg19,slg20,slg21,slg22,slg23,slg24,slg25,slg26,slg27,slg28,slg29,slg30,slg31
      
    ],
    description:
      "Developed and maintained an online trading course platform with a built-in CRM tailored for three employee roles (FM, RM, TL). The platform featured secure role-based dashboards, course management, and user account control. Integrated seamless payment processing with Razorpay, along with modules for attendance tracking, leave management, document handling, and course management. Enhanced usability and engagement by designing responsive pages, including a polished landing page.",
    tech: ["React with Vite", "Tailwind CSS", "Node.j", "Vite", "Express.js", "MongoDB Atlas", "Razorpay Integration"],
    liveUrl: "https://slgdigipvtltd.in/",
  },
  {
    id: "Billing-app",
    title: "Django Billing Management System",
    thumbnail: thumb2,
    images: [
      image1,image2,image3,image8,image5,image4,image7,image9,image10,image11,image13
    ],
    description:"A comprehensive, full-stack billing management web application built with Django that streamlines business operations through automated billing processes. The platform features secure user authentication, complete product catalog management, and dynamic bill generation with real-time calculations. Key functionalities include a customizable dashboard for quick insights, advanced inventory reporting with analytics, and filtered bill reporting by specific date ranges for precise financial tracking. The system offers intuitive CRUD operations for managing inventory items and billing transactions, allowing seamless addition, updating, and removal of products and bills. Built with mobile-first responsive design, the application ensures optimal user experience across all devices. This robust solution enhances business efficiency, reduces manual errors, and improves productivity through automated financial management workflows. Demo Login with this crediansial - User ID: admin and password: Fashion@123",
    tech: [ "Django", "Sqlite", "Bootstrap", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://demobilling.pythonanywhere.com/",
  },
  {
    id: "landing-page-flower",
    title: "MG Flowers",
    thumbnail: thumb3,
    images: [
      flower,flower1
    ],
    description:
      "MG Flowers - An elegant floral landing page showcasing premium Indian flower arrangements and decoration services for all occasions. Discover nature's beauty through our visually stunning digital floral collection.",
    tech: ["React","Bootstrap", "HTML", "CSS"],
    liveUrl: "https://mgflowers.in/",
  },
  {
    id: "landing-page-client",
    title: "Client Control Landing Page",
    thumbnail: thumb4,
    images: [
      cc1,cc6,cc2,cc5,cc3,
    ],
    description:
      "I worked on ClientCtrl, a modern CRM platform that helps businesses manage customers, leads, orders, and invoices in one place. The website delivers a clean, user-friendly interface with features like lead tracking, billing, and communication tools. Users can call, email, or send WhatsApp and SMS messages directly from the dashboard. My focus was on building a smooth, feature-rich experience that streamlines business workflows. This project strengthened my skills in creating scalable, efficient, and intuitive web applications.",
    tech: ["React","Bootstrap", "HTML", "CSS"],
    liveUrl: "https://clientctrl.app/",
  },
];

export default projects;
