<script lang="ts">
  import Calculator from "./components/Calculator.svelte";
</script>

<main>
  <Calculator />
</main>

<style>
  :global(body) {
    background-color: black;
    padding: 0px;
  }
  :root {
    --color-background: #5555;
    --color-operation: orange;
    --color-emphasis: red;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
