<script>
  import { onMount } from "svelte";

  let stars = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createStars() {
    const height = Math.max(document.body.scrollHeight, window.innerHeight);

    stars = Array.from({ length: 120 }, (_, index) => {
      const size = random(4, 8);

      return {
        id: index,
        size,
        left: random(0, Math.max(window.innerWidth - 10, 0)),
        top: random(0, Math.max(height - 10, 0)),
        duration: random(5, 8),
        delay: random(0, 8)
      };
    });
  }

  onMount(() => {
    createStars();

    let timeoutId;
    const handleResize = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(createStars, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

<div class="stars" aria-hidden="true">
  {#each stars as star (star.id)}
    <span
      class="star"
      style={`--size: ${star.size}px; --left: ${star.left}px; --top: ${star.top}px; --duration: ${star.duration}s; --delay: ${star.delay}s`}
    ></span>
  {/each}
</div>
