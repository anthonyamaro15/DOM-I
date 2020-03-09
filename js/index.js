const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const { nav, cta, "main-content": mainCont, contact, footer } = siteContent;

const links = document.querySelectorAll("header nav a");

const subTitle = document.querySelector(".cta-text h1");
const getStartedBtn = document.querySelector(".cta-text button");

const ctaImg = document.querySelector("#cta-img");

const toph4 = document.querySelector(".top-content div:first-child h4");
const topParagraph = document.querySelector(".top-content div:first-child p");

const bottomh4 = document.querySelector(".top-content div:last-child h4");
const bottomParagraph = document.querySelector(".top-content div:last-child p");

const middleImg = document.querySelector("#middle-img");

const servicesh4 = document.querySelector(
  ".bottom-content .text-content:nth-child(1) h4"
);
const servicesP = document.querySelector(
  ".bottom-content .text-content:nth-child(1) p"
);

const producth4 = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
const productP = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);

const visionh4 = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
const visionP = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);

const contacth4 = document.querySelector(".contact h4");
const contactPs = document.querySelectorAll(".contact p");
const footerP = document.querySelector("footer p");

// THIS ARE ALL THE NAV LINKS
links[0].textContent = nav["nav-item-1"];
links[1].textContent = nav["nav-item-2"];
links[2].textContent = nav["nav-item-3"];
links[3].textContent = nav["nav-item-4"];
links[4].textContent = nav["nav-item-5"];
links[5].textContent = nav["nav-item-6"];

subTitle.textContent = cta.h1;
getStartedBtn.textContent = cta.button;
ctaImg.src = cta["img-src"];
toph4.textContent = mainCont["features-h4"];
topParagraph.textContent = mainCont["features-content"];
bottomh4.textContent = mainCont["about-h4"];
bottomParagraph.textContent = mainCont["about-content"];
middleImg.src = mainCont["middle-img-src"];
servicesh4.textContent = mainCont["services-h4"];
servicesP.textContent = mainCont["services-content"];
producth4.textContent = mainCont["product-h4"];
productP.textContent = mainCont["product-content"];
visionh4.textContent = mainCont["vision-h4"];
visionP.textContent = mainCont["vision-content"];
contacth4.textContent = contact["contact-h4"];
contactPs[0].textContent = contact.address;
contactPs[1].textContent = contact.phone;
contactPs[2].textContent = contact.email;
footerP.textContent = footer.copyright;
