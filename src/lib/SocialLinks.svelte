<script>
  import { socials } from "./portfolio.js";
</script>

<div class="social-icons" aria-label="Social and quick links">
  {#each socials as social}
    <a href={social.href} target="_blank" rel="noreferrer" class="icon-link" aria-label={social.label}>
      <img src={social.icon} alt="" />
    </a>
  {/each}
</div>
