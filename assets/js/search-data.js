// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-photos",
          title: "photos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-joined-optical-imaging-system-labs-as-a-graduate-researcher",
          title: 'I joined Optical Imaging System Labs as a graduate researcher.',
          description: "",
          section: "News",},{id: "news-i-won-a-silver-prize-at-the-samsung-humantech-paper-awards",
          title: 'I won a silver prize at the Samsung Humantech Paper Awards.',
          description: "",
          section: "News",},{id: "news-i-received-the-graduate-biomedical-research-fellowship-and-will-visit-duke-university-for-a-year",
          title: 'I received the Graduate Biomedical Research Fellowship and will visit Duke University for...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-for-my-project-regarding-phase-mask-design-at-the-grc-2022",
          title: 'I gave a talk for my project regarding phase mask design at the...',
          description: "",
          section: "News",},{id: "news-i-won-an-excellence-prize-at-the-14th-electronics-times-paper-awards",
          title: 'I won an excellence prize at the 14th Electronics Times Paper Awards!',
          description: "",
          section: "News",},{id: "news-i-was-at-the-ces-2023-to-showcase-my-smartphone-fpm",
          title: 'I was at the CES 2023 to showcase my smartphone FPM.',
          description: "",
          section: "News",},{id: "news-my-paper-was-featured-as-a-cover-article-for-the-january-issue-of-optica",
          title: 'My paper was featured as a cover article for the January issue of...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-for-my-virtual-staining-work-at-the-spie-photonics-west-2023",
          title: 'I gave a talk for my virtual staining work at the SPIE Photonics...',
          description: "",
          section: "News",},{id: "news-i-won-the-best-presentation-award-at-the-3rd-quantitative-phase-imaging-symphosium",
          title: 'I won the best presentation award at the 3rd Quantitative Phase Imaging Symphosium....',
          description: "",
          section: "News",},{id: "news-i-won-the-excellence-academic-paper-award-from-yonsei-university",
          title: 'I won the excellence academic paper award from Yonsei university.',
          description: "",
          section: "News",},{id: "news-i-won-the-nrf-fellowship-for-next-generation-researchers",
          title: 'I won the NRF fellowship for next-generation researchers.',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-for-semi-supervised-virtual-staining-technique-at-the-photonics-west-2024",
          title: 'I gave a talk for semi-supervised virtual staining technique at the Photonics West...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-for-privacy-preserving-imaging-with-lensless-cameras-at-the-grc-2024",
          title: 'I gave a talk for privacy preserving imaging with lensless cameras at the...',
          description: "",
          section: "News",},{id: "news-i-won-the-best-presentation-award-at-the-4th-quantitative-phase-imaging-symphosium",
          title: 'I won the best presentation award at the 4th Quantitative Phase Imaging Symphosium....',
          description: "",
          section: "News",},{id: "projects-computational-3d-polarization-microscopy",
          title: 'Computational 3D polarization microscopy',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-portable-microscope-on-a-smartphone",
          title: 'Portable microscope on a smartphone',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-phase-mask-design-for-lensless-camera",
          title: 'Phase Mask Design for Lensless Camera',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-interactive-arts",
          title: 'Interactive Arts',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-virtual-staining-for-digital-pathology",
          title: 'Virtual Staining for Digital Pathology',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-compuational-gigapixel-microscopy-with-multi-camera-array-microscope",
          title: 'Compuational gigapixel microscopy with multi-camera array microscope',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-fourier-ptychographic-phase-retrieval-with-convex-optimization",
          title: 'Fourier Ptychographic Phase Retrieval With Convex Optimization',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-single-shot-temporal-speckle-correlation-imaging",
          title: 'Single-Shot Temporal Speckle Correlation Imaging',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-snapshot-hyperspectral-imaging",
          title: 'Snapshot Hyperspectral Imaging',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-high-speed-lensless-eye-tracker",
          title: 'High-Speed Lensless Eye Tracker',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
