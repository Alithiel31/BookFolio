<script>
  import { onMount } from "svelte";
  import ExperienceItem from "./lib/ExperienceItem.svelte";
  import BookPage from "./lib/BookPage.svelte";
  import "./app.css";
  import SkillCategory from "./lib/SkillCategory.svelte";
  import profilePic from './assets/profilePic.jpg';

  import "./styles/body.css";
  import "./styles/btnBox.css";
  import "./styles/contactMe.css";
  import "./styles/myServices.css";
  import "./styles/nextButton.css";
  import "./styles/portfolio.css";
  import "./styles/profilePage.css";
  import "./styles/rightPage.css";
  import "./styles/skillsBox.css";
  import "./styles/socialMedia.css";

  let coverTurned = $state(false);
  let coverZIndex = $state(100);
  let pages = $state([
    { turned: false, zIndex: 10 },
    { turned: false, zIndex: 9 },
    { turned: false, zIndex: 8 },
  ]);

  onMount(() => {
    setTimeout(() => {
      coverTurned = true;
    }, 2100);
    setTimeout(() => {
      coverZIndex = -1;
    }, 2800);
    pages.forEach((_, i) => {
      setTimeout(
        () => {
          pages[pages.length - 1 - i].turned = false;
          setTimeout(() => {
            pages[pages.length - 1 - i].zIndex = 10 + i;
          }, 500);
        },
        (i + 1) * 200 + 2100,
      );
    });
  });

  function togglePage(i) {
    pages[i].turned = !pages[i].turned;
    setTimeout(() => {
      pages[i].zIndex = pages[i].turned ? 20 + i : 20 - i;
    }, 500);
  }

  function contactMe() {
    pages.forEach((_, i) => {
      setTimeout(
        () => {
          pages[i].turned = true;
          setTimeout(() => {
            pages[i].zIndex = 20 + i;
          }, 500);
        },
        (i + 1) * 200 + 100,
      );
    });
  }

  function backToProfile() {
    pages.forEach((_, i) => {
      setTimeout(
        () => {
          let idx = pages.length - 1 - i;
          pages[idx].turned = false;
          setTimeout(() => {
            pages[idx].zIndex = 10 + i;
          }, 500);
        },
        (i + 1) * 200 + 100,
      );
    });
  }

  const socialLinks = [
    {
      href: "mailto:jacques.duchamplecheval@gmail.fr",
      icon: "bx bx-envelope",
      label: "Send me an e-mail !",
    },
    {
      href: "https://github.com/Alithiel31",
      icon: "fa-brands fa-github",
      label: "Meet me on Github !",
    },
    {
      href: "www.linkedin.com/in/jacques-duchamplecheval",
      icon: "fa-brands fa-linkedin",
      label: "Meet me on LinkedIn !",
    },
  ];

  const skillGroups = [
    {
      name: "Front-End",
      icon: "bx-code-block",
      list: [
        { name: "HTML", type: "main" },
        { name: "CSS", type: "main" },
        { name: "JS", type: "main" },
        { name: "Svelte", type: "framework", parent: "Framework" },
      ],
    },
    {
      name: "Back-End",
      icon: "bx-server",
      list: [
        { name: "Node.js", type: "main" },
        { name: "Express", type: "main" },
        { name: "SQL", type: "main" },
        { name: "Sequelize", type: "framework", parent: "ORM" },
      ],
    },
  ];
</script>

<div class="wrapper">
  <div class="cover cover-left"></div>
  <div
    class="cover cover-right"
    class:turn={coverTurned}
    style="z-index: {coverZIndex}"
  ></div>

  <div class="book">
    <div class="book-page page-left">
      <div class="profile-page">
        <img src={profilePic} alt="Profile picture" />
        <h1>Jacques Duchamplecheval</h1>
        <h3>Application Creator & Web Developer</h3>
        <p>Hi, I'm a web Developer. Let's build the future together</p>

        <div class="social-media">
          {#each socialLinks as link}
            <a
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class={link.icon}></i>
            </a>
          {/each}
        </div>

        <div class="btn-box">
          <button class="btn contact-me" onclick={contactMe}>Contact Me!</button
          >
        </div>
      </div>
    </div>

    <BookPage pageData={pages[0]} index={0} onToggle={() => togglePage(0)}>
      {#snippet front()}
        <h1 class="title">Work Experience</h1>
        <div class="workeduc-box">
          <ExperienceItem
            year="2023-2025"
            title="Pharmaceutical Manufacturing Technician"
            school="Delpharm - Gaillard"
            description="Managed high-precision industrial processes and complex data (EBR) under strict quality standards."
          />

          <ExperienceItem
            year="2019-2023"
            title="Butter Production Line Lead / Teacher"
            school="ENILV - La Roche sur Foron"
            description="Led an industrial production facility and managed a small team."
          />

          <ExperienceItem
            year="2018-2020"
            title="Technical Assistant - Nuclear Power Sector"
            school="Optim Industries"
            description="Managed technical data for the French nuclear sector using SAP and SDIN. Specialized in data compliance and process auditing under strict regulatory standards."
          />
        </div>
      {/snippet}
      {#snippet back()}
        <h1 class="title">Education</h1>
        <div class="workeduc-box">
          <ExperienceItem
            year="2025-2026"
            title="Full Stack Web Developer"
            school="O'Clock"
            description="Specialization: Application Design & Development.
            Frontend & Backend Development, project-Based Learning."
          />

          <ExperienceItem
            year="2015-2016"
            title="Professional Bachelor's Degree (LP) in Industrial Processes"
            school="Claude Bernard University Lyon 1"
            description="Focused on process optimization and industrial system management."
          />

          <ExperienceItem
            year="2012-2015"
            title="Associate Degree in Chemical Engineering"
            school="Claude Bernard University Lyon 1"
            description="Foundational training in chemical engineering and technical thermodynamics."
          />
        </div>
      {/snippet}
    </BookPage>

    <BookPage pageData={pages[1]} index={1} onToggle={() => togglePage(1)}>
      {#snippet front()}
        <h1 class="title">My Services</h1>
        <div class="services-box">
          <div class="services-content">
            <i class="bx bx-laptop"></i>
            <h3>Web Developpement</h3>
          </div>
        </div>
        <div class="services-box">
          <div class="services-content">
            <i class="bx bx-group"></i>
            <h3>Project Management</h3>
          </div>
        </div>
      {/snippet}
      {#snippet back()}
        <h1 class="title">My Skills</h1>

        <div class="skills-box">
          {#each skillGroups as group}
            <SkillCategory
              category={group.name}
              icon={group.icon}
              skills={group.list}
            />
          {/each}
        </div>
      {/snippet}
    </BookPage>

    <BookPage pageData={pages[2]} index={2} onToggle={() => togglePage(2)}>
      {#snippet front()}
        <h1 class="title">Latest Project</h1>
        <div class="portfolio-box">
          <div class="img-box"><img src="" alt="" /></div>
        </div>
      {/snippet}
      {#snippet back()}
        <h1 class="title">Contact Me!</h1>
        <div class="contact-box">
          <form
            action="https://formspree.io/f/maqdyqky"
            method="POST"
            target="_blank"
          >
            <label>
              <input
                type="text"
                name="name"
                class="field"
                placeholder="Full Name :"
                required
              />
            </label>

            <label>
              <input
                type="email"
                name="email"
                class="field"
                placeholder="Email Address"
                required
              />
            </label>

            <label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                class="field"
                placeholder="Your Message"
                required
              ></textarea>
            </label>

            <label>
              <input type="submit" value="Send" class="btn" />
            </label>
          </form>
        </div>

        <button class="back-profile" onclick={backToProfile}>
          <p>Profile</p>
          <i class="bx bxs-user"></i>
        </button>
      {/snippet}
    </BookPage>
  </div>
</div>
