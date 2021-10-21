export default class CalculatorModel {
    private _value: string;
    private _count: number;
    private _operation: string;
    private _clearDisplay: boolean;

    constructor(
        value: string = null,
        count: number = null,
        operation: string = null,
        clearDisplay = false
    ) {
        this._value = value;
        this._count = count;
        this._operation = operation;
        this._clearDisplay = clearDisplay;
    }

    get value() {
        return this._value?.replace(".", ",") || "0";
    }

    digitNumber(newValue: string) {
        return new CalculatorModel(
            (this._clearDisplay || !this._value) ? newValue : this._value + newValue,
            this._count,
            this._operation,
            false
        );
    }

    digitPointer() {
        return new CalculatorModel(
            this._value?.includes('.') ? this._value : this._value + ".",
            this._count,
            this._operation,
            false
        );
    }

    digitOperation(nextOperation: string) {
        return this.calculate(nextOperation);
    }

    calculate(nextOperation: string = null) {
        const accumulator = !this._operation
            ? parseFloat(this.value)
            : eval(`${this._count} ${this._operation} ${this.value}`);

        return new CalculatorModel(
            !this._operation ? this.value : `${accumulator}`,
            accumulator,
            nextOperation,
            nextOperation ? true : false
        );
    }

    clear() {
        return new CalculatorModel();
    }
}