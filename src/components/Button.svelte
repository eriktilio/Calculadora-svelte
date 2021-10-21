<script lang="ts">
  export let text: string;
  export let button75: boolean = false;
  export let button50: boolean = false;
  export let operation: boolean = false;
  export let emphasis: boolean = false;

  export let onClick: (value: string) => void = () => {};
</script>

<button
  class="button"
  on:click={() => onClick(text)}
  class:button-75={button75}
  class:button-50={button50}
  class:operation
  class:emphasis
>
  {text}
</button>

<style>
  .button {
    height: 60px;
    margin: 1px;
    border: 1px solid var(--color-background);
    border-radius: 4px;
    user-select: none;
    flex-basis: 25%;
    transition: all 0.1s ease-in-out;
  }
  .button:hover {
    cursor: pointer;
    transform: scale(0.98);
  }
  .button:active {
    transform: translateY(2px);
  }
  .button-50 {
    flex-basis: 51%;
  }
  .button-75 {
    flex-basis: 78%;
  }

  .operation {
    color: white;
    background-color: var(--color-operation);
  }
  .emphasis {
    color: white;
    background-color: var(--color-emphasis);
  }
</style>
