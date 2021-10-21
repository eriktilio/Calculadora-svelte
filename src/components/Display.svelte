<script lang="ts">
  export let value: string;

  $: fontSize = value.length > 20 ? "small" : `s-${value.length}`;
</script>

<div class={`display ${fontSize}`}>
  <span>{value}</span>
</div>

<style>
  .display {
    display: flex;
    flex: 1;
    padding: 0px 5px;
    margin: 2px 1px;
    border-radius: 4px;
    justify-content: flex-end;
    align-items: center;
    background-color: #ffff;
    overflow: hidden;
    font-size: 1.7rem;
  }

  .s-10 {
    font-size: 1.5rem;
  }
  .s-11 {
    font-size: 1.35rem;
  }
  .s-12 {
    font-size: 1.25rem;
  }

  .small {
    font-size: 0.6rem;
  }
</style>
