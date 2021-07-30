export const useFilters = (num) => {
  const currencyNGN = (num) => {
    return `N${num}`
  }

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const formatNumber = (num) => currencyNGN(numberWithCommas(num))

  return {
    currencyNGN,
    numberWithCommas,
    formatNumber
  }
}