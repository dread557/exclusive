export const convertCurrency = (
  price: number,
  selectedCurrency: "USD" | "NGN"
) => {
  if (selectedCurrency === "USD") {
    // Assuming 1 USD = 1000 NGN
    return (price / 1000)?.toFixed(2); // Convert NGN to USD
  }
  return price?.toFixed(2);
};
