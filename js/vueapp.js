const app = new Vue({
    el: '#app',
    data: {
        currencyRate: 3.8,
        price: 1000,
        marketPrice: 10000,
        placeOfOrigin: 1,
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
            if(this.placeOfOrigin === 49){
                alert('Zwariowałeś??? Transport z Alaski do Nowego Yorku? :):) Ja się tego nie podejmę!!!')
            }else if(this.placeOfOrigin === 50){
                alert('Na Hawaje to sobie można pojechać a nie samochody przywozić')
            }else if(this.placeOfOrigin > 0 && this.placeOfOrigin < 16){
                return 800
            }else if(this.placeOfOrigin > 15 && this.placeOfOrigin < 20){
                return 1200
            }else if(this.placeOfOrigin > 19 && this.placeOfOrigin < 28){
                return 900
            }else if(this.placeOfOrigin > 27 && this.placeOfOrigin < 36){
                return 1000
            }else if(this.placeOfOrigin > 35 && this.placeOfOrigin < 46){
                return 600
            }else if(this.placeOfOrigin > 45 && this.placeOfOrigin < 49){
                return 1500
            };
        },
        customTaxPoland: function () {
            return Math.round((this.price + 800) * this.currencyRate * 0.1)
        },
        customTaxGermany: function () {
            return Math.round((this.price + 700) * this.currencyRate * 0.1)
        },
        vatTaxPoland: function () {
            return Math.round((this.price + this.customTaxPoland) * 0.23 * this.currencyRate)
        },
        vatTaxGermany: function () {
            return Math.round((this.price + this.customTaxGermany) * 0.19 * this.currencyRate)
        },
        engineSmallPoland: function () {
            return Math.round((this.price + this.copartCharges + this.priceToNewYork + 800) * this.currencyRate +
                this.customTaxPoland + this.smallEngineTax + this.customTaxPoland + 1500 + 2000);
        },
        engineBigPoland: function () {
            return Math.round((this.price + this.copartCharges + this.priceToNewYork + 800) * this.currencyRate +
                this.customTaxPoland + this.bigEngineTax + this.customTaxPoland + 1500 + 2000);
        },
        engineSmallGermany: function () {
            return Math.round((this.price + this.copartCharges + this.priceToNewYork + 700) * this.currencyRate +
                this.customTaxGermany + this.smallEngineTax + this.customTaxPoland + 1200 + 2500 + 2000);
        },
        engineBigGermany: function () {
            return Math.round((this.price + this.copartCharges + this.priceToNewYork + 700) * this.currencyRate +
                this.customTaxGermany + this.bigEngineTax + this.customTaxPoland + 1200 + 2500 + 2000);
        }
    }
});

for (let i = 2; i <= 5.01; i += 0.1){
    const rateInLoop = document.getElementById('loopRate');
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = Math.round(i * 10) / 10;
    rateInLoop.options.add(option);
}

for (let i = 1000; i <= 100000; i = i+= 100){
    const priceInLoop = document.getElementById('loopPrice');  
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    priceInLoop.options.add(option);
}

for (let i = 10000; i <= 500000; i = i+= 2000){
    const marketPriceInLoop = document.getElementById('loopMarketPrice'); 
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    marketPriceInLoop.options.add(option);
}

/* set endpoint and your access key
endpoint = 'live'
access_key = '618b84c46bd93d0253e2fa295a8ef4a4';
// get the most recent exchange rates via the "live" endpoint:
$.ajax({
    url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {
        document.getElementById('rate').innerHTML = Math.round(json.quotes.USDPLN * 1000) / 1000;
    }
})*/