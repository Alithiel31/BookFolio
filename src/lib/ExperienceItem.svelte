<script>
  let { year, title, description, school } = $props();
</script>

<div class="workeduc-box">
  <div class="workeduc-content">
    <span class="year"><i class="bx bxs-calendar"></i> {year}</span>
    <h3>{title}</h3>
    <p><strong>{school}</strong></p>
    <p>{description}</p>
  </div>
</div>

<style lang="scss">
  .workeduc-box {
    border-left: var(--border);
    margin-top: 2rem;

    .workeduc-content {
      position: relative;
      padding: 0 0 0 1rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -0.65rem;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background: var(--main-color);
      }

      .year {
        color: var(--main-color);
        font-size: 1.2rem;
        i {
          margin-right: .4rem;
          font-size: 1.2rem;
        }
      }

      h3 {
        font-size: 1.4rem;
        margin: .3rem 0;
      }

      p {
        font-size: 0.9rem;
        text-align: left;
      }
    }
  }
</style>