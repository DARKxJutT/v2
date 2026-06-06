return (
  <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">

    <div className="bg-white w-[450px] rounded-2xl shadow-2xl p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        Currency Converter
      </h1>

      <InputBox
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        currency={from}
        onCurrencyChange={setFrom}
        currencyOptions={options}
      />

      <div className="flex justify-center my-4">
        <button
          onClick={swap}
          className="
          bg-blue-500
          hover:bg-blue-600
          text-white
          px-6
          py-2
          rounded-full
          transition
          "
        >
          ⇅ Swap
        </button>
      </div>

      <InputBox
        label="To"
        amount={convertedAmount}
        currency={to}
        onCurrencyChange={setTo}
        currencyOptions={options}
      />

      <button
        onClick={convert}
        className="
        w-full
        mt-6
        bg-green-500
        hover:bg-green-600
        text-white
        py-3
        rounded-xl
        font-semibold
        transition
        "
      >
        Convert Currency
      </button>

    </div>

  </div>
);