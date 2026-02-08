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
  /* Petit tips CSS pour que tes boutons ressemblent à tes anciens spans */
  .nextprev-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: inherit; /* Pour garder la couleur de ton icône */
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>