<script lang="ts">
  import Button from "./Button.svelte";
  import Row from "./Row.svelte";
  import generateNumbers from "../utils/generateNumbers";
  import Display from "./Display.svelte";
  import CalculatorModel from "../model/CalculatorModel";

  let calc = new CalculatorModel();
  const numberEntered = (num: string) => (calc = calc.digitNumber(num));
  const pointerEntered = () => (calc = calc.digitPointer());
  const operationEntered = (operation: string) =>
    (calc = calc.digitOperation(operation));
  const resolveEntered = () => (calc = calc.calculate());
  const clearDisplay = () => (calc = calc.clear());
</script>

<div class="calculator">
  <Display value={calc.value} />
  <Row>
    <Button emphasis button75 text="AC" onClick={clearDisplay} />
    <Button operation text="/" onClick={operationEntered} />
  </Row>
  {#each generateNumbers as group, i}
    <Row>
      {#each group as number}
        <Button text={String(number)} onClick={numberEntered} />
      {/each}
      {#if i === 0}
        <Button operation text="*" onClick={operationEntered} />
      {/if}
      {#if i === 1}
        <Button operation text="+" onClick={operationEntered} />
      {/if}
      {#if i === 2}
        <Button operation text="-" onClick={operationEntered} />
      {/if}
    </Row>
  {/each}
  <Row>
    <Button button50 text="0" onClick={numberEntered} />
    <Button text="," onClick={pointerEntered} />
    <Button operation text="=" onClick={resolveEntered} />
  </Row>
</div>

<style>
  .calculator {
    display: flex;
    height: 440px;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    flex-direction: column;
    background-color: var(--color-background);
  }
</style>
