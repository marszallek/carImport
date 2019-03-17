const app = new Vue({
    el: '#app',
    data: {
        currencyRate: 3.5,
        price: 1000,
        marketPrice: 20000,
        placeOfOrigin: 'Transport do Nowego Yorku',
    },
    computed: {
        copartCharges: function () {
            return Math.round(this.price * 0.1);
        },
        smallEngineTax: function () {
            return Math.round(this.marketPrice * 0.6 * 0.031);
        },
        bigEngineTax: function () {
            return Math.round(this.marketPrice * 0.6 * 0.186)
        },
        priceToNewYork() {
            return this.placeOfOrigin;
        },
        customTaxPoland: function () {
            return Math.round((+this.price + 800) * this.currencyRate * 0.1)
        },
        customTaxGermany: function () {
            return Math.round((+this.price + 700) * this.currencyRate * 0.1)
        },
        vatTaxPoland: function () {
            return Math.round((+this.price + this.customTaxPoland) * 0.23 * this.currencyRate)
        },
        vatTaxGermany: function () {
            return Math.round((+this.price + this.customTaxGermany) * 0.19 * this.currencyRate)
        },
        engineSmallPoland: function () {
            return Math.round((+this.price + this.copartCharges + +this.priceToNewYork + 800) * this.currencyRate +
                this.customTaxPoland + this.smallEngineTax + this.customTaxPoland + 1500 + 2000);
        },
        engineBigPoland: function () {
            return Math.round((+this.price + this.copartCharges + +this.priceToNewYork + 800) * this.currencyRate +
                this.customTaxPoland + this.bigEngineTax + this.customTaxPoland + 1500 + 2000);
        },
        engineSmallGermany: function () {
            return Math.round((+this.price + this.copartCharges + +this.priceToNewYork + 700) * this.currencyRate +
                this.customTaxGermany + this.smallEngineTax + this.customTaxPoland + 1200 + 2500 + 2000);
        },
        engineBigGermany: function () {
            return Math.round((+this.price + this.copartCharges + +this.priceToNewYork + 700) * this.currencyRate +
                this.customTaxGermany + this.bigEngineTax + this.customTaxPoland + 1200 + 2500 + 2000);
        }
    }
});

$(function() {
    $.getJSON('https://api.fixer.io/latest?symbols=USD', function(data) {
      var usdRate = data.rates.USD.toString();
      var commaFormatted = usdRate.replace('.', ',')
      document.getElementById('rate_usd').innerHTML = commaFormatted;
    });
  });