module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number < 20){
      return units[number]
    } else if (number < 100){
        if (number % 10 === 0){
      return tens[Math.floor(number/10 - 2)]
        } else {
          return tens[Math.floor(number/10 - 2)] + ' ' + units[number % 10]
        }
    } else if (number < 1000){
        if (number % 10 === 0 && (number % 100 === 0)){
          return units[Math.floor(number/100)] + ' hundred'
        } else {
          if ((number % 100) < 20){
            return units[Math.floor(number/100)] + ' hundred ' + units[Math.floor((number % 100))]
          } else {
            if (number % 10 === 0){
            return units[Math.floor(number/100)] + ' hundred ' + tens[Math.floor((((number % 100) - (number % 10)) / 10) - 2)]
            } else {
              return units[Math.floor(number/100)] + ' hundred ' + tens[Math.floor((((number % 100) - (number % 10)) / 10) - 2)] + ' ' + units[number % 10]
            }
        }
        }
    } else {
      return 'error'
    }
}