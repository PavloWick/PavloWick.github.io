<script>
  import AboutSection from "./lib/AboutSection.svelte";
  import ContactSection from "./lib/ContactSection.svelte";
  import HeroSection from "./lib/HeroSection.svelte";
  import ProjectsSection from "./lib/ProjectsSection.svelte";
  import SkillsSection from "./lib/SkillsSection.svelte";
  import Starfield from "./lib/Starfield.svelte";
</script>

<svelte:head>
  <meta property="og:title" content="Pavlo Puzik | Portfolio" />
  <meta
    property="og:description"
    content="Computer science portfolio focused on software engineering, systems design, embedded programming, and cybersecurity."
  />
</svelte:head>

<Starfield />
<HeroSection />

<main>
  <AboutSection />
  <SkillsSection />
  <ProjectsSection />
  <ContactSection />
</main>
