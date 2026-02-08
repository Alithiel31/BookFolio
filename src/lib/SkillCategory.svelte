<script>
  let { category, icon, skills = [] } = $props();
</script>

<div class="skills-content">
  <h3>
    {#if icon}<i class="bx {icon}"></i>{/if}
    {category}
  </h3>
  
  <div class="skills-list">
    {#each skills as skill}
      <div class="skill-item {skill.type}">
        {#if skill.type === 'framework'}
          <span class="label">{skill.parent} :</span>
        {/if}
        <span class="name">{skill.name}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 10px;
  }

  .skill-item.main {
    font-weight: 500;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
  }

  /* Petit point devant les langages principaux */
  .skill-item.main::before {
    content: "•";
    color: #00abf0;
    margin-right: 10px;
  }

  .skill-item.framework {
    margin-left: 25px; /* Décalage pour l'effet hiérarchique */
    font-size: 0.95rem;
    color: #555;
  }

  .label {
    font-style: italic;
    margin-right: 5px;
    color: #888;
  }

  .name {
    color: #333;
  }
</style>