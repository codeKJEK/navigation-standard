const init = () => {
  const bannerLinks = [
    {
      title: "skip",
      href: "#", // link to main content
      text: "Skip Navigation Links",
    },
    {
      title: "logo",
      href: "#", // link to home page or top of page
      text: "KuKo Design",
      //   text: `<img src="path" alt="logo alt" /> KuKo Design`,
    },
  ];

  const navigationLinks = [
    {
      text: "Home",
      href: "#", // link to home page or top of page
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"/></svg>`,
    },
    {
      text: "About",
      href: "#", // link to about page or section
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/></svg>`,
    },
    {
      text: "Services",
      href: "#", // link to service page or section
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.05 24.05"><path d="M21.73,14.33a10,10,0,0,1-1,2.6l.95.91a1,1,0,0,1,0,1.42l-2.08,2.15a1,1,0,0,1-1.41,0l-.95-.91a10.34,10.34,0,0,1-2.56,1.11l0,1.31a1,1,0,0,1-1,1l-3,.05a1,1,0,0,1-1-1l0-1.31a10,10,0,0,1-2.6-1l-.91.95a1,1,0,0,1-1.42,0L2.59,19.59a1,1,0,0,1,0-1.41l.91-.95a10.34,10.34,0,0,1-1.11-2.56l-1.31,0a1,1,0,0,1-1-1l0-3a1,1,0,0,1,1-1l1.31,0a10,10,0,0,1,1-2.6l-.95-.91a1,1,0,0,1,0-1.42L4.41,2.59a1,1,0,0,1,1.41,0l.95.91A10.34,10.34,0,0,1,9.33,2.36l0-1.31a1,1,0,0,1,1-1l3,0a1,1,0,0,1,1,1l0,1.31a10,10,0,0,1,2.6,1l.91-.95a1,1,0,0,1,1.42,0l2.15,2.08a1,1,0,0,1,0,1.41l-.91.95a10.34,10.34,0,0,1,1.11,2.56l1.31,0a1,1,0,0,1,1,1l.05,3a1,1,0,0,1-1,1Zm-6.49.8a4.5,4.5,0,1,0-6.37.11A4.52,4.52,0,0,0,15.24,15.13Z" transform="translate(0.02 0.02)"/></svg>`,
    },
    {
      text: "Portfolio",
      href: "#", // link to portfolio page or section
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"/></svg>`,
    },
    {
      text: "Contact",
      href: "#", // link to contact page or section
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2z"/></svg>`,
    },
  ];

  const bannerContainer = document.querySelector(".banner__container");
  const bannerConfig = bannerLinks
    .map((link) => {
      const { title, href, text } = link;
      return `
        <a href="${href}" class="banner__${title} flex__center">${text}</a>
    `;
    })
    .join("");
  bannerContainer.insertAdjacentHTML("afterbegin", bannerConfig);

  const bannerList = document.querySelector(".banner__list");

  const navConfig = navigationLinks
    .map((link) => {
      const { text, href, icon } = link;
      return `
        <li class="banner__item" role="none">
            <a href="${href}" class="banner__menuitem flex__center" role="menuitem">
                ${icon}${text}        
            </a>
        </li>
      `;
    })
    .join("");
  bannerList.insertAdjacentHTML("afterbegin", navConfig);
};

window.addEventListener("load", init);
