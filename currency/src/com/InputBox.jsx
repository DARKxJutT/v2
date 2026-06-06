import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions = [],
}) {
  return (
    <div className="bg-gray-100 rounded-xl p-4">

      <h3 className="font-semibold mb-2">
        {label}
      </h3>

      <div className="flex gap-3">

        <input
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(Number(e.target.value))
          }
          className="
          flex-1
          p-3
          rounded-lg
          border
          outline-none
          "
        />

        <select
          value={currency}
          onChange={(e) =>
            onCurrencyChange &&
            onCurrencyChange(e.target.value)
          }
          className="
          p-3
          rounded-lg
          border
          outline-none
          "
        >
          {currencyOptions.map((curr) => (
            <option
              key={curr}
              value={curr}
            >
              {curr}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default InputBox;