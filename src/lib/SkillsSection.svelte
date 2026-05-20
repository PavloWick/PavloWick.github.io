<script>
  import { skills } from "./portfolio.js";
</script>

<section class="section" id="skills" aria-labelledby="skills-title">
  <div class="shell">
    <div class="section-heading">
      <p class="section-kicker">Skills</p>
      <h2 id="skills-title">Tools and areas of focus.</h2>
    </div>
    <div class="skills-grid">
      {#each skills as category}
        <article class="skill-card">
          <h3>{category.title}</h3>
          <ul>
            {#each category.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </div>
</section>
