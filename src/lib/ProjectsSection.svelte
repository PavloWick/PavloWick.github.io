<script>
  import { experience, projects } from "./portfolio.js";
</script>

<section class="section projects-section" id="projects" aria-labelledby="projects-title">
  <div class="shell">
    <div class="section-heading">
      <p class="section-kicker">Projects & Experience</p>
      <h2 id="projects-title">Selected work and current path.</h2>
    </div>
    <div class="project-experience-grid">
      <div>
        <h3 class="column-title">Projects</h3>
        <div class="stack-grid">
          {#each projects as project}
            <article class="project-card">
              <div class="project-media">
                <img src={project.image} alt={`${project.title} screenshot`} />
              </div>
              <div class="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div class="tech-list" aria-label={`${project.title} technologies`}>
                  {#each project.technologies as technology}
                    <span>{technology}</span>
                  {/each}
                </div>
                {#if project.link}
                  <a href={project.link} target="_blank" rel="noreferrer">View project</a>
                {/if}
              </div>
            </article>
          {/each}
        </div>
      </div>

      <div>
        <h3 class="column-title">Experience & Education</h3>
        <div class="stack-grid">
          {#each experience as item}
            <article class="experience-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
