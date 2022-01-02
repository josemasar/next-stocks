const InputSelector = () => {
  return (
    <div className="mx-auto w-40">
      <label
        htmlFor="ticker"
        className="block text-sm font-medium text-gray-700 text-center"
      >
        Ticker
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="ticker"
          id="ticker"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-7 sm:text-sm border-gray-300 rounded-md text-center"
          placeholder="MSFT"
        />
      </div>
    </div>
  );
};

export default InputSelector;
