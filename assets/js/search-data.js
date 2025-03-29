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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
