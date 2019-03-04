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
    h1: "DOM \n Is \n Awesome",
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
logo.src = siteContent["nav"]["img-src"];

// links

let linksData = siteContent["nav"];

// task 3 new Content
let node = document.createElement("a");
let node1 = document.createElement("a");
// let testNode = document.createTextNode("hello");
// console.log(testNode);
// let test = node.appendChild(testNode);
// console.log(test);

let test1 = document.querySelector("nav");
test1.prepend(node1);
test1.appendChild(node);
let links = document.querySelectorAll("a");
// console.log(links);
links.forEach(function(item, i) {
  // console.log(item);
  item.style.color = "green";
  item.textContent = linksData[`nav-item-${i + 1}`];

  if (item.textContent === "") {
    item.textContent = "heehlo";
  }
});

// cta
let cta = siteContent["cta"];

//cta img
let ctaImg = document.getElementById("cta-img");
ctaImg.src = cta["img-src"];

//cta text
let ctaText = document.querySelector(".cta-text");

let ctaChilds = ctaText.childNodes;

for (let i = 1; i < ctaChilds.length; i += 2) {
  let cur = ctaChilds[i];
  if (cur === ctaChilds[1]) {
    cur.textContent = cta["h1"];
  }
  if (cur === ctaChilds[3]) {
    cur.textContent = cta["button"];
  }
}
// ctaText.childNodes[1].textContent = cta["h1"];
// ctaText.childNodes[3].textContent = cta["button"];

//main siteContent
let topContent = document.querySelector(".top-content");

let mainContent = siteContent["main-content"];

// for (let i = 0; i < topContent.children.length; i++) {
//   let topContentChild = topContent.children[i];
//
//   for (let j = 0; j < topContentChild.children.length; i++)
//
//   console.log(topContent.children[i]);
// }

topContent.children[0].children[0].textContent = mainContent["features-h4"];
topContent.children[0].children[1].textContent =
  mainContent["features-content"];
topContent.children[1].children[0].textContent = mainContent["about-h4"];
topContent.children[1].children[1].textContent = mainContent["about-content"];

//middle img
let middleImg = document.getElementById("middle-img");
middleImg.src = mainContent["middle-img-src"];

//bottom Content
let bottomContent = document.querySelector(".bottom-content");

bottomContent.children[0].children[0].textContent = mainContent["services-h4"];
bottomContent.children[0].children[1].textContent =
  mainContent["services-content"];
bottomContent.children[1].children[0].textContent = mainContent["product-h4"];
bottomContent.children[1].children[1].textContent =
  mainContent["product-content"];
bottomContent.children[2].children[0].textContent = mainContent["vision-h4"];
bottomContent.children[2].children[1].textContent =
  mainContent["vision-content"];

//contact
let contact = document.querySelector(".contact");

let contactInfo = siteContent["contact"];

contact.children[0].textContent = contactInfo["contact-h4"];
contact.children[1].textContent = contactInfo["address"];
contact.children[2].textContent = contactInfo["phone"];
contact.children[3].textContent = contactInfo["email"];

//footer
let footer = document.querySelector("footer");

let footerInfo = siteContent["footer"];

footer.children[0].textContent = footerInfo["copyright"];
