<script>
  // On récupère les propriétés (props) en Svelte 5
  let { pageData, index, front, back, onToggle } = $props();
</script>

<div 
  class="book-page page-right" 
  class:turn={pageData.turned} 
  style="z-index: {pageData.zIndex}"
>
  <div class="page-front">
    {@render front()}
    
    <span class="number-page">{index * 2 + 1}</span>
    <button type="button" class="nextprev-btn" onclick={onToggle} aria-label="Next Page">
      <i class="bx bx-chevron-right"></i>
    </button>
  </div>

  <div class="page-back">
    {@render back()}

    <span class="number-page">{index * 2 + 2}</span>
    <button type="button" class="nextprev-btn back" onclick={onToggle} aria-label="Previous Page">
      <i class="bx bx-chevron-left"></i>
    </button>
  </div>
</div>

<style>

.nextprev-btn {
    /* BaseLine */
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 2rem;
    color: var(--second-text-color);
    
  /* Positionning */
    position: absolute;
    bottom: .9rem;
    right: 1.5rem;
    width: 2rem;
    height: 2rem;
    
    /* Flexbox */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.5s;

    &:hover {
        color: var(--main-color);
    }

    &.back {
        left: 1.5rem;
        right: auto;
    }
}

</style>