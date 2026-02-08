<script>
  let { year, title, description, school } = $props();
</script>

<div class="workeduc-content">
  <span class="year"><i class="bx bxs-calendar"></i> {year}</span>
  <h3>{title}</h3>
  <p>{school}</p>
  <p>{description}</p>
</div>
