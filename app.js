const APP_VERSION = "1.0";
const CONSENT_COOKIE_NAME = "saurabh_cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
const CONSENT_VERSION = 1;

document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.getElementById("topbar");
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const themeBtn = document.getElementById("themeBtn");
  const langBtn = document.getElementById("langBtn");
  const printBtn = document.getElementById("printBtn");
  const year = document.getElementById("year");
  const version = document.getElementById("version");
  const skillSearch = document.getElementById("skillSearch");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const sendBtn = document.getElementById("sendBtn");
  const emailLink = document.getElementById("emailLink");
  const privacyConsent = document.getElementById("privacyConsent");
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieOptions = document.getElementById("cookieOptions");
  const cookieCustomizeBtn = document.getElementById("cookieCustomizeBtn");
  const cookieRejectBtn = document.getElementById("cookieRejectBtn");
  const cookieSaveBtn = document.getElementById("cookieSaveBtn");
  const cookieAcceptBtn = document.getElementById("cookieAcceptBtn");
  const cookieAnalytics = document.getElementById("cookieAnalytics");
  const cookieSettingsBtn = document.getElementById("cookieSettingsBtn");
  const root = document.documentElement;

  // Parallax Pointer Interactive Backdrop
  const setupInteractiveBackground = () => {
    const canAnimateBackdrop = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    let activeTimer = 0;
    let latestX = window.innerWidth * 0.5;
    let latestY = window.innerHeight * 0.34;

    const setBackgroundPosition = (x, y) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      const offsetX = ((x / width) - 0.5) * 22;
      const offsetY = ((y / height) - 0.5) * 22;

      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
      root.style.setProperty("--bg-x", `${offsetX.toFixed(2)}px`);
      root.style.setProperty("--bg-y", `${offsetY.toFixed(2)}px`);
      root.style.setProperty("--bg-x-inverse", `${(-offsetX).toFixed(2)}px`);
      root.style.setProperty("--bg-y-inverse", `${(-offsetY).toFixed(2)}px`);
    };

    const queueBackgroundPosition = (event) => {
      latestX = event.clientX;
      latestY = event.clientY;

      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        setBackgroundPosition(latestX, latestY);
        animationFrame = 0;
      });
    };

    const pulseBackground = () => {
      root.classList.add("bg-active");
      window.clearTimeout(activeTimer);
      activeTimer = window.setTimeout(() => {
        root.classList.remove("bg-active");
      }, 650);
    };

    const updateScrollShift = () => {
      root.style.setProperty("--scroll-shift", `${(window.scrollY * -0.035).toFixed(2)}px`);
    };

    setBackgroundPosition(window.innerWidth * 0.5, window.innerHeight * 0.34);

    if (!canAnimateBackdrop || prefersReducedMotion) return;

    updateScrollShift();
    window.addEventListener("pointermove", queueBackgroundPosition, { passive: true });
    window.addEventListener("pointerdown", pulseBackground, { passive: true });
    window.addEventListener("scroll", updateScrollShift, { passive: true });
    window.addEventListener("resize", () => {
      setBackgroundPosition(window.innerWidth * 0.5, window.innerHeight * 0.34);
      updateScrollShift();
    }, { passive: true });
  };

  setupInteractiveBackground();

  // Multi-Language Translation dictionary (English / Hindi)
  const translations = {
    en: {
      metaTitle: "Saurabh Patil | Associate Solution Architect",
      metaDescription: "Portfolio of Saurabh Patil: Associate Solution Architect and React & Node.js Specialist with 4+ years of experience building and scaling mission-critical web applications.",
      canonicalUrl: "https://saurabh374.github.io/saurabh-portfolio/",
      ogLocale: "en_US",

      skip: "Skip to content",
      navAria: "Main Navigation",
      openNav: "Open navigation",
      quickInfo: "Quick Info",
      langBtnAria: "Switch to Hindi",
      themeAria: "Toggle theme",
      legalLinksAria: "Legal links",
      brandRole: "Associate Solution Architect • React & Node.js • DevOps",

      navProfile: "Profile",
      navSkills: "Skills",
      navProjects: "Projects",
      navExperience: "Experience",
      navEducation: "Education",
      navContact: "Contact",

      themeBtn: "Theme",
      printBtn: "Resume / PDF",

      heroPill: "Associate Solution Architect • Full-Stack Engineer",
      heroSubtitle: "Associate Solution Architect • Nagpur, MH, India",
      heroLead: "Dedicated Associate Solution Architect & Full-Stack Engineer with 4+ years of experience designing, building, and scaling mission-critical web applications and APIs. Expert in React, Next.js, Node.js, PHP, and AWS. Spearheaded the architectural migration of SimpleWorks CRM from PHP to React, boosting page-loads by 30% and cutting API latency by 40%, while strengthening security and developer productivity.",

      quickContact: "Contact",
      quickProjects: "Projects",
      quickSkills: "Skills",
      resumeLink: "Resume",

      kpiExp: "Years Experience",
      kpiProjects: "Projects Delivered",
      kpiMigration: "System Migrated",

      focusTitle: "Focus",
      focus1: "High-performance React & Next.js user interfaces",
      focus2: "Scalable Microservices & Real-time WebSockets APIs",
      focus3: "DevOps containerization, Nginx routing & AWS cloud hosting",

      profileTitle: "Associate Solution Architect Profile",
      profileText: "I am an Associate Solution Architect with 4+ years of experience designing, building, and scaling mission-critical web applications and APIs. I have a proven track record of transitioning legacy PHP monoliths into decoupled, event-driven microservices using React, Node.js, and AWS. My expertise lies in designing secure Backend-for-Frontend (BFF) layers, optimizing database query latency, and setting up automated CI/CD pipelines to streamline deployment workflows.",

      strengthsTitle: "Strengths",
      strength1: "Migration & Scalability: Experience refactoring legacy code into decoupled microservices.",
      strength2: "Performance & Latency Optimization: Focused on speed, clean database indexing, and caching.",
      strength3: "DevOps & Automation: Skilled in Docker containerization and AWS CI/CD pipelines.",

      areasTitle: "Areas of Interest",
      areasNote: "Continuous learning in distributed queueing systems, system security protocols, and advanced automated testing.",

      skillsTitle: "Technical Skills",
      skillsHint: "Use search to highlight specific libraries, tools, or frameworks.",
      skillPlaceholder: "Search e.g. React, Docker, AWS...",

      archTitle: "Architecture & Design",
      archText: "Design patterns, distributed systems, decoupled microservices, and secure API gateways.",

      frontendText: "Responsive design, state management, optimized rendering, and custom hooks.",
      backendText: "Scalable API routes, real-time sync with Socket.IO, database schemas, and fast caching stores.",
      engineeringTitle: "DevOps & Tools",
      engineeringText: "Dockerized apps, Nginx reverse proxies, cloud infrastructure hosting, and automated testing.",

      projectsTitle: "Web & Mobile Projects",
      projectsIntro: "A selection of recent personal, academic, and freelance projects showcasing full-stack capabilities.",
      gtaDesc: "A visually striking, SEO-optimized landing page for GTA VI built with Next.js and React. Features pixel-perfect responsive layouts, lazy-loaded assets, and performant animations to engage fans.",
      gta1: "Next.js & React Framework structure",
      gta2: "Pixel-perfect layouts & lazy-loaded assets",
      gta3: "Performant CSS animations & high SEO scores",
      
      chatifyDesc: "Full-featured chat app built with Next.js, Node.js, Express, and MongoDB microservices. Enables real-time messaging, typing indicators, presence status with Socket.IO, OTP-based email auth, and image messaging.",
      chatify1: "Socket.IO real-time notification layer",
      chatify2: "RabbitMQ asynchronous message queues",
      chatify3: "Redis cache and JWT cookie authentication",

      jyotishWebDesc: "Content-rich astrology platform using React, CodeIgniter, and AWS. Scaled to 10K+ monthly users with Redis-backed caching and CI/CD deployment pipelines.",
      jyotishWeb1: "CodeIgniter PHP backend framework",
      jyotishWeb2: "React single-page dashboard app",
      jyotishWeb3: "AWS EC2 hosting with CloudFront & Redis caching",

      jyotishAppDesc: "Flutter-based mobile companion to the Jyotish Vishwakosh platform. Includes Firebase Authentication, push notifications, and real-time updates with less than 2% crash rate post-launch.",
      jyotishApp1: "Flutter Android & iOS framework compatibility",
      jyotishApp2: "Firebase authentication and remote analytics config",
      jyotishApp3: "FCM Push Notification integration",

      experienceTitle: "Professional Experience",
      expSimpleWorksWhen: "Apr 2022 – Present",
      expSimpleWorksTitle: "SimpleWorks",
      expAsaRoleTitle: "Associate Solution Architect",
      expAsaWhenRole: "Apr 2024 – Present • Nagpur, Hybrid",
      expAsaBullet1: "Led migration of 75% of SimpleWorks CRM modules from PHP/Smarty to React, cutting load times by 30% and API latency by 40%.",
      expAsaBullet2: "Architected Node.js microservices with Redis caching and WebSockets, enabling real-time updates and improving scalability.",
      expAsaBullet3: "Strengthened security by implementing BFF (Backend-for-Frontend) architecture, AES-GCM encryption, and secure cookies.",
      expAsaBullet4: "Partnered with project/design teams to re-engineer workflows, directly contributing to a 30% sales increase (validated via analytics/A-B testing).",
      expSeRoleTitle: "Software Engineer",
      expSeWhenRole: "Apr 2022 – Apr 2024 • Nagpur, On-site",
      expSeBullet1: "Improved DevOps by containerizing services, migrating from Apache to Nginx, and building CI/CD pipelines with AWS + Sentry, reducing deployment times by 25%.",
      expSeBullet2: "Expanded Playwright test suite to 60% of React modules, reducing regression bugs and boosting release confidence.",
      expSeBullet3: "Provided L2/L3 production support, resolving escalated issues and assisting senior stakeholders during critical incidents.",

      expFreelanceWhen: "Feb 2020 – Apr 2021",
      expFreelanceTitle: "Freelance Software Engineer • Whiteboard Software",
      expFreelanceRole: "Legacy Migrations & Mobile Development",
      expFreelanceBullet1: "Developed custom CodeIgniter applications, migrating databases and refactoring routes.",
      expFreelanceBullet2: "Built the Jyotish Vishwakosh web platform, serving 10,000+ monthly users.",
      expFreelanceBullet3: "Coded a companion mobile application in Flutter with Firebase Authentication.",

      educationTitle: "Education & Timeline",
      eduMcaWhen: "Feb 2021 – Jun 2022",
      eduMcaSchool: "Shri Ramdeobaba College of Engineering & Management, Nagpur",
      eduMcaDegree: "MCA (Master of Computer Applications) • CGPA: 8.6 / 10",
      eduMcaBullet1: "Specialized in full-stack web architectures, distributed systems, and database optimization.",
      eduMcaBullet2: "Engaged in advanced cloud computing modules, microservices configurations, and design patterns.",

      eduBcaWhen: "Jun 2017 – May 2020",
      eduBcaSchool: "Shri Shivaji Science College, Nagpur",
      eduBcaDegree: "BCA (Bachelor of Computer Applications) • Grade: 64%",
      eduBcaBullet1: "Acquired strong foundational knowledge in programming concepts, data structures, and relational databases.",
      eduBcaBullet2: "Practiced software engineering methodologies and web development basics.",

      certsTitle: "Certifications",
      certsText: "Professional certifications validate expertise in cloud computing and modern tech platforms.",
      certAwsDesc: "Official AWS Certified Solutions Architect – Associate credential validating expertise in designing resilient, secure, high-performing, and cost-optimized distributed systems on AWS.",
      certAwsPractitionerDesc: "Official cloud practitioner certification verifying foundational expertise in AWS cloud services, security concepts, and architecture principles.",
      certOracleBadge: "Java",
      certOracleDesc: "Oracle Certified Associate, Java SE 8 Programmer credential validating core Java development, OOP design principles, and syntax capabilities.",
      certOracleOrg: "Oracle Certification",
      viewCert: "View Certificate",

      contactTitle: "Get in Touch",
      contactIntro: "I am open to discuss freelance opportunities, technical challenges, or software engineering positions.",
      linksTitle: "Links & Info",
      emailLink: "Send Email",
      contactPhoneKey: "Phone",

      formTitle: "Contact Form",
      formName: "Name",
      formNamePh: "Your name",
      formEmailPh: "Email for reply",
      formSubject: "Subject",
      formSubjectPh: "Brief subject",
      formMessage: "Message",
      formMessagePh: "Write message...",
      formPrivacyConsentPrefix: "I agree to send this form data to get in touch.",
      sendBtn: "Send Message",

      formSending: "Sending message...",
      formSendingButton: "Sending...",
      formSuccess: "Message sent successfully.",
      formPrivacyRequired: "Please accept the consent terms before sending.",
      formError: "Failed to send message. Please email me directly.",

      privacyLink: "Privacy Policy",
      cookiesLink: "Cookies",
      cookieSettings: "Cookie settings",
      cookieBannerTitle: "Privacy Settings",
      cookieBannerText: "I use essential cookies to remember system configurations like theme and language preference. Optional analytical cookies can be activated below.",
      cookieNecessary: "Necessary",
      cookieNecessaryText: "Saves active UI configuration selections.",
      cookieAnalytics: "Analytics",
      cookieAnalyticsText: "Aggregates basic site visitation metrics.",
      cookieCustomize: "Customize",
      cookieReject: "Reject",
      cookieSave: "Save Choice",
      cookieAccept: "Accept All",
      footerText: "Personal Portfolio • Associate Solution Architect"
    },

    hi: {
      metaTitle: "सौरभ पाटिल | एसोसिएट सॉल्यूशन आर्किटेक्ट",
      metaDescription: "सौरभ पाटिल का पोर्टफोलियो: 4+ वर्षों के अनुभव के साथ एसोसिएट सॉल्यूशन आर्किटेक्ट और React व Node.js विशेषज्ञ।",
      canonicalUrl: "https://saurabh374.github.io/saurabh-portfolio/?lang=hi",
      ogLocale: "hi_IN",

      skip: "विषय पर जाएं",
      navAria: "मुख्य नेविगेशन",
      openNav: "नेविगेशन खोलें",
      quickInfo: "त्वरित जानकारी",
      langBtnAria: "अंग्रेजी में बदलें",
      themeAria: "थीम बदलें",
      legalLinksAria: "कानूनी लिंक",
      brandRole: "एसोसिएट सॉल्यूशन आर्किटेक्ट • React & Node.js • DevOps",

      navProfile: "प्रोफ़ाइल",
      navSkills: "कौशल",
      navProjects: "परियोजनाएं",
      navExperience: "अनुभव",
      navEducation: "शिक्षा",
      navContact: "संपर्क",

      themeBtn: "थीम",
      printBtn: "बायोडाटा / PDF",

      heroPill: "एसोसिएट सॉल्यूशन आर्किटेक्ट • फुल-स्टैक इंजीनियर",
      heroSubtitle: "एसोसिएट सॉल्यूशन आर्किटेक्ट • नागपुर, भारत",
      heroLead: "4+ वर्षों के अनुभव के साथ समर्पित एसोसिएट सॉल्यूशन आर्किटेक्ट और फुल-स्टैक इंजीनियर, जो वेब ऐप्स और एपीआई बनाने और स्केल करने में माहिर हैं। React, Next.js, Node.js, PHP और AWS के विशेषज्ञ। SimpleWorks CRM के PHP से React में बड़े पैमाने पर माइग्रेशन का नेतृत्व किया, जिससे पेज लोड 30% बढ़ा और एपीआई लेटेंसी 40% कम हुई, साथ ही सुरक्षा और डेवलपर उत्पादकता को मजबूत किया।",

      quickContact: "संपर्क",
      quickProjects: "परियोजनाएं",
      quickSkills: "कौशल",
      resumeLink: "बायोडाटा",

      kpiExp: "वर्षों का अनुभव",
      kpiProjects: "पूरी की गई परियोजनाएं",
      kpiMigration: "सिस्टम माइग्रेट किया गया",

      focusTitle: "मुख्य फोकस",
      focus1: "उच्च प्रदर्शन वाले React और Next.js यूजर इंटरफेस",
      focus2: "स्केलेबल माइक्रोसर्विसेज और रियल-टाइम WebSockets एपीआई",
      focus3: "DevOps कंटेनराइजेशन, Nginx राउटिंग और AWS क्लाउड होस्टिंग",

      profileTitle: "एसोसिएट सॉल्यूशन आर्किटेक्ट प्रोफ़ाइल",
      profileText: "मैं एक एसोसिएट सॉल्यूशन आर्किटेक्ट हूं, जिसे 4 से अधिक वर्षों का व्यावहारिक अनुभव है। मेरे पास React, Node.js और AWS का उपयोग करके लीगेसी PHP मोनोलिथ को डीकपल्ड, इवेंट-ड्रिवन माइक्रोसर्विसेज में स्थानांतरित करने का एक सिद्ध ट्रैक रिकॉर्ड है। मेरी विशेषज्ञता सुरक्षित बैकएंड-फॉर-फ्रंटएंड (BFF) परतों को डिजाइन करने, डेटाबेस क्वेरी लेटेंसी को अनुकूलित करने और परिनियोजन वर्कफ़्लू को सुव्यवस्थित करने के लिए स्वचालित CI/CD पाइपलाइनों को स्थापित करने में है।",

      strengthsTitle: "मेरी ताकत",
      strength1: "माइग्रेशन और स्केलेबिलिटी: लीगेसी कोड को डीकपल्ड माइक्रोसर्विसेज में रिफैक्टर करने का अनुभव।",
      strength2: "प्रदर्शन और लेटेंसी ऑप्टिमाइज़ेशन: गति, डेटाबेस इंडेक्सिंग और कैशिंग पर विशेष ध्यान।",
      strength3: "DevOps और ऑटोमेशन: डॉकर कंटेनराइजेशन और AWS CI/CD पाइपलाइनों में कुशल।",

      areasTitle: "रुचि के क्षेत्र",
      areasNote: "डिस्ट्रिब्यूटेड कतार प्रणाली, सिस्टम सुरक्षा प्रोटोकॉल और परिष्कृत स्वचालित परीक्षण में निरंतर सीखना जारी है।",

      skillsTitle: "तकनीकी कौशल",
      skillsHint: "विशिष्ट कौशल या टूल को हाइलाइट करने के लिए खोज बार का उपयोग करें।",
      skillPlaceholder: "खोजें जैसे React, Docker, AWS...",

      archTitle: "आर्किटेक्चर और डिज़ाइन",
      archText: "डिज़ाइन पैटर्न, वितरित प्रणाली, डीकपल्ड माइक्रोसर्विसेज और सुरक्षित एपीआई गेटवे।",

      frontendText: "उत्तरदायी डिजाइन, राज्य प्रबंधन, अनुकूलित रेंडरिंग और कस्टम हुक्स।",
      backendText: "स्केलेबल एपीआई रूट, Socket.IO के साथ रियल-टाइम सिंक, डेटाबेस स्कीमा और कैशिंग।",
      engineeringTitle: "DevOps और उपकरण",
      engineeringText: "डॉकर ऐप्स, Nginx रिवर्स प्रॉक्सी, क्लाउड इंफ्रास्ट्रक्चर होस्टिंग और स्वचालित परीक्षण।",

      projectsTitle: "वेब और मोबाइल परियोजनाएं",
      projectsIntro: "फुल-स्टैक क्षमताओं को प्रदर्शित करने वाली हालिया व्यक्तिगत, शैक्षणिक और फ्रीलांस परियोजनाओं का चयन।",
      gtaDesc: "Next.js और React के साथ बनाई गई GTA VI के लिए एक आकर्षक, SEO-अनुकूलित लैंडिंग पेज। प्रशंसकों को आकर्षित करने के लिए रिस्पॉन्सिव लेआउट, लेजी-लोडेड एसेट्स और एनिमेशन शामिल हैं।",
      gta1: "Next.js और React फ्रेमवर्क संरचना",
      gta2: "सटीक लेआउट और लेजी-लोडेड एसेट्स",
      gta3: "बेहतरीन CSS एनिमेशन और उच्च SEO स्कोर",

      chatifyDesc: "Next.js, Node.js, Express और MongoDB माइक्रोसर्विसेज के साथ निर्मित रियल-टाइम चैट ऐप। Socket.IO के साथ संदेश भेजने, टाइपिंग इंडिकेटर्स, उपस्थिति स्थिति और OTP आधारित प्रमाणीकरण की सुविधा है।",
      chatify1: "Socket.IO रियल-टाइम नोटिफिकेशन परत",
      chatify2: "RabbitMQ एसिंक्रोनस संदेश कतार",
      chatify3: "Redis कैश और JWT कुकी प्रमाणीकरण",

      jyotishWebDesc: "React, CodeIgniter और AWS का उपयोग करने वाला ज्योतिष मंच। Redis-समर्थित कैशिंग और CI/CD परिनियोजन पाइपलाइनों के साथ 10K+ मासिक उपयोगकर्ताओं तक बढ़ाया गया।",
      jyotishWeb1: "CodeIgniter PHP बैकएंड फ्रेमवर्क",
      jyotishWeb2: "React सिंगल-पेज डैशबोर्ड ऐप",
      jyotishWeb3: "AWS EC2 होस्टिंग CloudFront और Redis के साथ",

      jyotishAppDesc: "ज्योतिष मंच का फ्लटर-आधारित मोबाइल साथी। इसमें फायरबेस प्रमाणीकरण, पुश नोटिफिकेशन और रीयल-टाइम अपडेट शामिल हैं, जिसमें 2% से कम क्रैश दर है।",
      jyotishApp1: "फ्लटर एंड्रॉइड और iOS अनुकूलता",
      jyotishApp2: "फायरबेस प्रमाणीकरण और रिमोट एनालिटिक्स",
      jyotishApp3: "FCM पुश नोटिफिकेशन एकीकरण",

      experienceTitle: "व्यावसायिक अनुभव",
      expSimpleWorksWhen: "अप्रैल 2022 – वर्तमान",
      expSimpleWorksTitle: "SimpleWorks",
      expAsaRoleTitle: "एसोसिएट सॉल्यूशन आर्किटेक्ट",
      expAsaWhenRole: "अप्रैल 2024 – वर्तमान • नागपुर, हाइब्रिड",
      expAsaBullet1: "PHP/Smarty से React में 75% SimpleWorks CRM मॉड्यूल के माइग्रेशन का नेतृत्व किया, जिससे लोड समय 30% और एपीआई लेटेंसी 40% कम हुई।",
      expAsaBullet2: "Redis कैशिंग और WebSockets के साथ Node.js माइक्रोसर्विसेज को आर्किटेक्ट किया, जिससे वास्तविक समय अपडेट सक्षम हुए और स्केलेबिलिटी में सुधार हुआ।",
      expAsaBullet3: "BFF (बैकएंड-फॉर-फ्रंटएंड) आर्किटेक्चर, AES-GCM एन्क्रिप्शन और सुरक्षित कुकीज़ लागू करके सुरक्षा को मजबूत किया।",
      expAsaBullet4: "वर्कफ़्लोज़ को फिर से इंजीनियर करने के लिए प्रोजेक्ट/डिज़ाइन टीमों के साथ भागीदारी की, जिससे बिक्री में 30% की वृद्धि हुई (एनालिटिक्स/ए-बी परीक्षण के माध्यम से सत्यापित)।",
      expSeRoleTitle: "सॉफ्टवेयर इंजीनियर",
      expSeWhenRole: "अप्रैल 2022 – अप्रैल 2024 • नागपुर, ऑन-साइट",
      expSeBullet1: "सेवाओं को कंटेनराइज़ करके, Apache से Nginx में माइग्रेट करके, और AWS + Sentry के साथ CI/CD पाइपलाइनों का निर्माण करके DevOps में सुधार किया, जिससे परिनियोजन समय में 25% की कमी आई।",
      expSeBullet2: "React मॉड्यूल के 60% तक Playwright परीक्षण सूट का विस्तार किया, जिससे प्रतिगमन (regression) बग कम हुए और रिलीज का विश्वास बढ़ा।",
      expSeBullet3: "L2/L3 उत्पादन सहायता प्रदान की, जटिल समस्याओं का समाधान किया और महत्वपूर्ण घटनाओं के दौरान वरिष्ठ हितधारकों की सहायता की।",


      expFreelanceWhen: "फरवरी 2020 – अप्रैल 2021",
      expFreelanceTitle: "फ्रीलांस सॉफ्टवेयर इंजीनियर • Whiteboard Software",
      expFreelanceRole: "लीगेसी माइग्रेशन और मोबाइल डेवलपमेंट",
      expFreelanceBullet1: "डेटाबेस को माइग्रेट करके और कोडइग्निटर में रूटों को रिफैक्टर करके कस्टम CodeIgniter ऐप्स विकसित किए।",
      expFreelanceBullet2: "ज्योतिष विश्वकोश वेब प्लेटफॉर्म का निर्माण किया, जो प्रति माह 10,000+ सक्रिय उपयोगकर्ताओं को सेवा प्रदान करता है।",
      expFreelanceBullet3: "फायरबेस ऑथेंटिकेशन के साथ फ्लटर में एक मोबाइल साथी एप्लिकेशन कोड किया।",

      educationTitle: "शिक्षा और समयरेखा",
      eduMcaWhen: "फरवरी 2021 – जून 2022",
      eduMcaSchool: "श्री रामदेवबाबा कॉलेज ऑफ इंजीनियरिंग एंड मैनेजमेंट, नागपुर",
      eduMcaDegree: "MCA (मास्टर ऑफ कंप्यूटर एप्लीकेशंस) • CGPA: 8.6 / 10",
      eduMcaBullet1: "फुल-स्टैक वेब आर्किटेक्चर, डिस्ट्रिब्यूटेड सिस्टम और डेटाबेस ऑप्टिमाइज़ेशन में विशेषज्ञता।",
      eduMcaBullet2: "क्लाउड कंप्यूटिंग मॉड्यूल, माइक्रोसर्विसेज कॉन्फ़िगरेशन और डिज़ाइन पैटर्न सीखे।",

      eduBcaWhen: "जून 2017 – मई 2020",
      eduBcaSchool: "श्री शिवाजी साइंस कॉलेज, नागपुर",
      eduBcaDegree: "BCA (बैचलर ऑफ कंप्यूटर एप्लीकेशंस) • ग्रेड: 64%",
      eduBcaBullet1: "प्रोग्रामिंग अवधारणाओं, डेटा संरचनाओं और रिलेशनल डेटाबेस में मजबूत आधारभूत ज्ञान प्राप्त किया।",
      eduBcaBullet2: "सॉफ्टवेयर इंजीनियरिंग पद्धतियों और वेब विकास की बुनियादी बातों का अभ्यास किया।",

      certsTitle: "प्रमाण पत्र",
      certsText: "व्यावसायिक प्रमाणपत्र क्लाउड कंप्यूटिंग और आधुनिक तकनीकी मंचों में विशेषज्ञता को सत्यापित करते हैं।",
      certAwsDesc: "AWS पर लचीली, सुरक्षित, उच्च प्रदर्शन वाली और लागत-अनुकूलित वितरित प्रणालियों को डिजाइन करने में विशेषज्ञता को सत्यापित करने वाला आधिकारिक AWS सॉल्यूशंस आर्किटेक्ट - एसोसिएट प्रमाण पत्र।",
      certAwsPractitionerDesc: "AWS क्लाउड सेवाओं, सुरक्षा अवधारणाओं और वास्तुकला सिद्धांतों में बुनियादी विशेषज्ञता को सत्यापित करने वाला आधिकारिक क्लाउड प्रैक्टिशनर प्रमाणपत्र।",
      certOracleBadge: "जावा",
      certOracleDesc: "जावा प्रोग्रामिंग क्षमताओं, ऑब्जेक्ट-ओरिएंटेड अवधारणाओं और कोर एपीआई उपयोग को सत्यापित करने वाला ओरेकल आधिकारिक प्रमाण पत्र।",
      certOracleOrg: "ओरेकल सर्टिफिकेशन",
      viewCert: "प्रमाण पत्र देखें",

      contactTitle: "संपर्क करें",
      contactIntro: "मैं फ्रीलांस अवसरों, तकनीकी चुनौतियों या सॉफ्टवेयर इंजीनियरिंग पदों पर चर्चा करने के लिए तैयार हूं।",
      linksTitle: "लिंक और जानकारी",
      emailLink: "ईमेल भेजें",
      contactPhoneKey: "फ़ोन",

      formTitle: "संपर्क फ़ॉर्म",
      formName: "नाम",
      formNamePh: "आपका नाम",
      formEmailPh: "जवाब के लिए ईमेल",
      formSubject: "विषय",
      formSubjectPh: "संक्षिप्त विषय",
      formMessage: "संदेश",
      formMessagePh: "अपना संदेश लिखें...",
      formPrivacyConsentPrefix: "मैं संपर्क करने के लिए इस फॉर्म डेटा को भेजने के लिए सहमत हूं।",
      sendBtn: "संदेश भेजें",

      formSending: "संदेश भेजा जा रहा है...",
      formSendingButton: "भेजा जा रहा है...",
      formSuccess: "संदेश सफलतापूर्वक भेजा गया।",
      formPrivacyRequired: "कृपया भेजने से पहले सहमति शर्तों को स्वीकार करें।",
      formError: "संदेश भेजने में विफल। कृपया मुझे सीधे ईमेल करें।",

      privacyLink: "गोपनीयता नीति",
      cookiesLink: "कुकीज़",
      cookieSettings: "कुकी सेटिंग्स",
      cookieBannerTitle: "गोपनीयता सेटिंग्स",
      cookieBannerText: "मैं थीम और भाषा प्राथमिकता जैसी सिस्टम सेटिंग्स को याद रखने के लिए आवश्यक कुकीज़ का उपयोग करता हूँ। वैकल्पिक कुकीज़ नीचे सक्रिय की जा सकती हैं।",
      cookieNecessary: "आवश्यक",
      cookieNecessaryText: "सक्रिय यूआई कॉन्फ़िगरेशन चयन को सहेजता है।",
      cookieAnalytics: "एनालिटिक्स",
      cookieAnalyticsText: "बुनियादी साइट विज़िट मेट्रिक्स एकत्र करता है।",
      cookieCustomize: "कस्टमाइज़ करें",
      cookieReject: "अस्वीकार करें",
      cookieSave: "चयन सहेजें",
      cookieAccept: "सभी स्वीकार करें",
      footerText: "व्यक्तिगत पोर्टफोलियो • एसोसिएट सॉल्यूशन आर्किटेक्ट"
    }
  };

  const staticTextTranslations = {
    "Web App": { en: "Web App", hi: "वेब ऐप" },
    "Freelance": { en: "Freelance", hi: "फ्रीलांस" },
    "Mobile App": { en: "Mobile App", hi: "मोबाइल ऐप" },
    "HTML5": { en: "HTML5", hi: "HTML5" },
    "CSS3": { en: "CSS3", hi: "CSS3" },
    "JavaScript": { en: "JavaScript", hi: "जावास्क्रिप्ट" },
    "TypeScript": { en: "TypeScript", hi: "टाइपस्क्रिप्ट" },
    "React": { en: "React", hi: "React" },
    "Next.js": { en: "Next.js", hi: "Next.js" },
    "Node.js": { en: "Node.js", hi: "Node.js" },
    "PHP": { en: "PHP", hi: "PHP" },
    "MySQL": { en: "MySQL", hi: "MySQL" },
    "SQL": { en: "SQL", hi: "SQL" },
    "Docker": { en: "Docker", hi: "Docker" },
    "AWS": { en: "AWS", hi: "AWS" },
    "Git": { en: "Git", hi: "Git" },
    "GitHub": { en: "GitHub", hi: "GitHub" },
    "Frontend": { en: "Frontend", hi: "फ्रंटएंड" },
    "Backend & DB": { en: "Backend & DB", hi: "बैकएंड और डेटाबेस" },
    "DevOps & Tools": { en: "DevOps & Tools", hi: "DevOps और उपकरण" },
    "Redux": { en: "Redux", hi: "Redux" },
    "Tailwind CSS": { en: "Tailwind CSS", hi: "Tailwind CSS" },
    "Material UI": { en: "Material UI", hi: "Material UI" },
    "styled-components": { en: "styled-components", hi: "styled-components" },
    "TanStack Query": { en: "TanStack Query", hi: "TanStack Query" },
    "Express": { en: "Express", hi: "Express" },
    "MongoDB": { en: "MongoDB", hi: "MongoDB" },
    "Redis": { en: "Redis", hi: "Redis" },
    "WebSockets": { en: "WebSockets", hi: "WebSockets" },
    "REST APIs": { en: "REST APIs", hi: "REST APIs" },
    "Nginx": { en: "Nginx", hi: "Nginx" },
    "GitHub Actions": { en: "GitHub Actions", hi: "GitHub Actions" },
    "Sentry": { en: "Sentry", hi: "Sentry" },
    "Playwright": { en: "Playwright", hi: "Playwright" },
    "Apache JMeter": { en: "Apache JMeter", hi: "JMeter" },
    "Jira": { en: "Jira", hi: "Jira" },
    "Live Demo": { en: "Live Demo", hi: "डेमो देखें" },
    "GitHub Repository": { en: "GitHub Repository", hi: "GitHub रिपॉजिटरी" },
    "Live Site": { en: "Live Site", hi: "साइट देखें" },
    "Play Store": { en: "Play Store", hi: "प्ले स्टोर" },
    "Solution Architecture": { en: "Solution Architecture", hi: "सॉल्यूशन आर्किटेक्चर" },
    "Systems Design": { en: "Systems Design", hi: "सिस्टम डिज़ाइन" },
    "Microservices": { en: "Microservices", hi: "माइक्रोसर्विसेज" },
    "Distributed Systems": { en: "Distributed Systems", hi: "वितरित प्रणाली" },
    "Design Patterns": { en: "Design Patterns", hi: "डिज़ाइन पैटर्न" },
    "RabbitMQ": { en: "RabbitMQ", hi: "RabbitMQ" },
    "GenAI": { en: "GenAI", hi: "GenAI" }
  };

  const isSupportedLanguage = (lang) => Object.prototype.hasOwnProperty.call(translations, lang);

  const getStoredValue = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return "";
    }
  };

  const setStoredValue = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {}
  };

  const getUrlLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    return isSupportedLanguage(queryLang) ? queryLang : "";
  };

  const getBrowserLanguage = () => {
    const languages = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ""];

    for (const language of languages) {
      const code = String(language).toLowerCase().split("-")[0];
      if (code === "hi") return "hi";
      if (code === "en") return "en";
    }
    return "";
  };

  const getCurrentLanguage = () => {
    const urlLang = getUrlLanguage();
    if (urlLang) return urlLang;

    const savedLang = getStoredValue("portfolio.lang");
    if (isSupportedLanguage(savedLang)) return savedLang;

    const browserLang = getBrowserLanguage();
    if (isSupportedLanguage(browserLang)) return browserLang;

    return "en";
  };

  const applyTextTranslations = (lang) => {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });
  };

  const applyAttributeTranslations = (lang) => {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const attrConfig = el.getAttribute("data-i18n-attr");
      if (!attrConfig) return;

      attrConfig.split(",").forEach((pair) => {
        const [attrName, key] = pair.split(":").map((p) => p.trim());
        if (attrName && key && Object.prototype.hasOwnProperty.call(dict, key)) {
          el.setAttribute(attrName, dict[key]);
        }
      });
    });
  };

  const applyStaticTranslations = (lang) => {
    // Translate technical badge texts and tags dynamically
    document.querySelectorAll(".tag, .badge, .project-links .link, .stack-label, .card.skill h3").forEach((el) => {
      if (!el.dataset.staticOriginal) {
        el.dataset.staticOriginal = el.textContent.trim();
      }
      const original = el.dataset.staticOriginal;
      const trans = staticTextTranslations[original];
      if (trans && trans[lang]) {
        el.textContent = trans[lang];
      }
    });
  };

  const setMetaContent = (selector, content) => {
    const el = document.querySelector(selector);
    if (el && content) el.setAttribute("content", content);
  };

  const applyLanguage = (lang, options = {}) => {
    const activeLang = isSupportedLanguage(lang) ? lang : "en";
    const dict = translations[activeLang];

    document.documentElement.lang = activeLang;
    document.title = dict.metaTitle;
    setMetaContent('meta[name="description"]', dict.metaDescription);
    setMetaContent('meta[property="og:title"]', dict.metaTitle);
    setMetaContent('meta[property="og:url"]', dict.canonicalUrl);
    setMetaContent('meta[property="og:locale"]', dict.ogLocale);
    setMetaContent('meta[property="og:description"]', dict.metaDescription);
    setMetaContent('meta[name="twitter:title"]', dict.metaTitle);
    setMetaContent('meta[name="twitter:description"]', dict.metaDescription);
    
    applyTextTranslations(activeLang);
    applyAttributeTranslations(activeLang);
    applyStaticTranslations(activeLang);

    if (langBtn) {
      langBtn.textContent = activeLang === "en" ? "HI" : "EN";
      langBtn.setAttribute("aria-label", dict.langBtnAria);
    }

    if (options.updateUrl && window.history && window.history.pushState) {
      const target = new URL(window.location.href);
      if (activeLang === "hi") {
        target.searchParams.set("lang", "hi");
      } else {
        target.searchParams.delete("lang");
      }
      window.history.pushState({ lang: activeLang }, "", `${target.pathname}${target.search}${target.hash}`);
    }

    setStoredValue("portfolio.lang", activeLang);
  };

  // Initialize Language
  const initialLang = getCurrentLanguage();
  applyLanguage(initialLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const cur = document.documentElement.lang || "en";
      const next = cur === "en" ? "hi" : "en";
      applyLanguage(next, { updateUrl: true });
    });
  }

  window.addEventListener("popstate", () => {
    applyLanguage(getCurrentLanguage());
  });

  // Dark/Light Theme Control
  const savedTheme = getStoredValue("portfolio.theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "dark";
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      setStoredValue("portfolio.theme", next);
    });
  }

  // Scroll effect on Header
  const handleScroll = () => {
    if (topbar) {
      topbar.classList.toggle("scrolled", window.scrollY > 24);
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Navigation Mobile Hamburger Menu Toggle
  if (navToggle && mainNav && topbar) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!topbar.contains(e.target)) {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Live Skill Search filtering
  if (skillSearch) {
    skillSearch.addEventListener("input", () => {
      const query = skillSearch.value.trim().toLowerCase();
      const tags = document.querySelectorAll("[data-skill]");

      tags.forEach((tag) => {
        const skill = tag.getAttribute("data-skill") || "";
        const visibleText = tag.textContent || "";
        const searchable = `${skill} ${visibleText}`.toLowerCase();

        tag.classList.remove("highlight", "dim");

        if (!query) return;

        if (searchable.includes(query)) {
          tag.classList.add("highlight");
        } else {
          tag.classList.add("dim");
        }
      });
    });
  }

  // Decode Email Action
  if (emailLink) {
    emailLink.addEventListener("click", (e) => {
      e.preventDefault();
      const encoded = emailLink.getAttribute("data-mail");
      if (encoded) {
        window.location.href = `mailto:${window.atob(encoded)}`;
      }
    });
  }

  // Print CV / PDF Action
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Form Submit API Integration using FormSubmit (free & setup-less)
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const activeLang = document.documentElement.lang || "en";
      const dict = translations[activeLang];

      if (privacyConsent && !privacyConsent.checked) {
        if (formStatus) formStatus.textContent = dict.formPrivacyRequired;
        privacyConsent.focus();
        return;
      }

      const formData = new FormData(contactForm);

      if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.textContent = dict.formSendingButton;
      }
      if (formStatus) formStatus.textContent = dict.formSending;

      try {
        const res = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (!res.ok) throw new Error("Network response not ok");

        contactForm.reset();
        if (formStatus) formStatus.textContent = dict.formSuccess;
      } catch (err) {
        if (formStatus) formStatus.textContent = dict.formError;
      } finally {
        if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.textContent = dict.sendBtn;
        }
      }
    });
  }

  // Scroll Animations using IntersectionObserver
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -32px 0px"
    });

    document.querySelectorAll(".reveal").forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("visible");
    });
  }

  // Cookie Consent management Banner
  const getCookieValue = (name) => {
    const cookies = document.cookie ? document.cookie.split("; ") : [];
    const cookie = cookies.find((item) => item.startsWith(`${name}=`));
    return cookie ? cookie.slice(name.length + 1) : "";
  };

  const setupCookieConsent = () => {
    const consent = getCookieValue(CONSENT_COOKIE_NAME);
    
    if (consent) {
      if (cookieBanner) cookieBanner.hidden = true;
    } else {
      if (cookieBanner) cookieBanner.hidden = false;
    }

    cookieCustomizeBtn?.addEventListener("click", () => {
      if (cookieOptions) cookieOptions.hidden = !cookieOptions.hidden;
      if (cookieSaveBtn) cookieSaveBtn.hidden = !cookieSaveBtn.hidden;
      cookieCustomizeBtn.setAttribute("aria-expanded", String(!cookieOptions?.hidden));
    });

    const savePreferences = (preferences) => {
      const secure = window.location.protocol === "https:" ? "; Secure" : "";
      const value = encodeURIComponent(JSON.stringify({
        version: CONSENT_VERSION,
        necessary: true,
        analytics: Boolean(preferences.analytics),
        updatedAt: new Date().toISOString()
      }));
      document.cookie = `${CONSENT_COOKIE_NAME}=${value}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
      if (cookieBanner) cookieBanner.hidden = true;
    };

    cookieRejectBtn?.addEventListener("click", () => {
      savePreferences({ analytics: false });
    });

    cookieAcceptBtn?.addEventListener("click", () => {
      savePreferences({ analytics: true });
    });

    cookieSaveBtn?.addEventListener("click", () => {
      savePreferences({ analytics: Boolean(cookieAnalytics?.checked) });
    });

    cookieSettingsBtn?.addEventListener("click", () => {
      if (cookieBanner) cookieBanner.hidden = false;
      if (cookieOptions) cookieOptions.hidden = false;
      if (cookieSaveBtn) cookieSaveBtn.hidden = false;
    });
  };

  setupCookieConsent();

  if (year) year.textContent = new Date().getFullYear();
  if (version) version.textContent = APP_VERSION;
});
