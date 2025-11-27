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
  },{id: "nav-people",
          title: "people",
          description: "Faculty, student, and alumni of the Wearable Computing Group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-student-presents-at-virginia-academy-of-science",
        
          title: "Student Presents at Virginia Academy of Science",
        
        description: "Student research presentation at Virginia Academy of Science",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/spring2025/";
          
        },
      },{id: "post-undergraduate-researchers-present-at-capwic-and-sieds-2024",
        
          title: "Undergraduate Researchers Present at CAPWIC and SIEDS 2024",
        
        description: "Research presentations at two conferences",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/spring2024/";
          
        },
      },{id: "post-students-present-wearables-research-at-ncur-2023",
        
          title: "Students Present Wearables Research at NCUR 2023",
        
        description: "Megan Caulfield and Justin Blevins present haptic feedback research at NCUR",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ncur2023/";
          
        },
      },{id: "post-new-research-students-additional-grants-awarded",
        
          title: "New Research Students. Additional Grants Awarded.",
        
        description: "Fall 2021 updates on new undergraduate researchers and grant awards",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/fall2021-update/";
          
        },
      },{id: "post-wearable-computing-lab-researchers-present-at-several-conferences",
        
          title: "Wearable Computing Lab Researchers Present at Several Conferences",
        
        description: "Spring 2021 conference presentations by undergraduate researchers",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/ieee-capwic-2021/";
          
        },
      },{id: "post-undergraduate-researcher-presents-at-marcus-2019",
        
          title: "Undergraduate Researcher Presents at MARCUS 2019",
        
        description: "Stephen Mitchell presents athlete performance research at MARCUS",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/marcus2019/";
          
        },
      },{id: "post-undergraduate-researcher-presents-at-acm-capwic",
        
          title: "Undergraduate Researcher Presents at ACM CAPWIC",
        
        description: "Sanarea Ali presents wearable computing research at CAPWIC 2019",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/capwic/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-site-launched-people-completed-projects-under-construction",
          title: 'Site Launched! - People Completed, Projects Under Construction.',
          description: "",
          section: "News",},{id: "projects-athlete-performance",
          title: 'Athlete Performance',
          description: "Wearable technology for monitoring and enhancing athletic performance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/athlete_performance/";
            },},{id: "projects-at-home-physical-therapy",
          title: 'At-Home Physical Therapy',
          description: "Wearable systems for remote physical therapy monitoring and guidance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/physical_therapy/";
            },},{id: "projects-support-for-visual-impairment",
          title: 'Support for Visual Impairment',
          description: "Wearable technology to assist individuals with visual impairments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/visual_impairment/";
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
