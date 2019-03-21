const app = new Vue({
    el: '#app',
    data: {
        currencyRate: 3.8,
        price: 1000,
        marketPrice: 20000,
        placeOfOrigin: 2,
        states: [
            {id: 1, value: 800, label: 'AL - Alabama'},
            {id: 2, value: 0, label: 'AK - Alaska'},
            {id: 3, value: 1200, label: 'AZ - Arizona'},
            {id: 4, value: 900, label: 'AR - Arkansas'},
            {id: 5, value: 1200, label: 'CA - California'},
            {id: 6, value: 1000, label: 'CO - Colorado'},
            {id: 7, value: 800, label: 'CT - Connecticut'},
            {id: 8, value: 600, label: 'DE - Delaware'},
            {id: 9, value: 800, label: 'FL - Florida'},
            {id: 10, value: 800, label: 'GA - Georgia'},
            {id: 11, value: 1, label: 'HI - Hawaii'},
            {id: 12, value: 1500, label: 'ID - Idaho'},
            {id: 13, value: 800, label: 'IL - Illinois'},
            {id: 14, value: 800, label: 'IN - Indiana'},
            {id: 15, value: 900, label: 'IA - Iowa'},
            {id: 16, value: 900, label: 'KS - Kansas'},
            {id: 17, value: 800, label: 'KY - Kentucky'},
            {id: 18, value: 900, label: 'LA - Louisiana'},
            {id: 19, value: 800, label: 'ME - Maine'},
            {id: 20, value: 600, label: 'MD - Meryland'},
            {id: 21, value: 800, label: 'MA - Massachusetts'},
            {id: 22, value: 800, label: 'MI - Michigan'},
            {id: 23, value: 1000, label: 'MN - Minesota'},
            {id: 24, value: 800, label: 'MS - Mississippi'},
            {id: 25, value: 900, label: 'MO - Missouri'},
            {id: 26, value: 1500, label: 'MT - Montana'},
            {id: 27, value: 1000, label: 'NE - Nebraska'},
            {id: 28, value: 1200, label: 'NV - Nevada'},
            {id: 29, value: 800, label: 'NH - New Hampshire'},
            {id: 30, value: 600, label: 'NJ - New Jersey'},
            {id: 31, value: 1000, label: 'NM - New Mexico'},
            {id: 32, value: 600, label: 'NY - New York'},
            {id: 33, value: 600, label: 'NC - North Carolina'},
            {id: 34, value: 1000, label: 'ND - North Dakota'},
            {id: 35, value: 600, label: 'OH - Ohio'},
            {id: 36, value: 900, label: 'OK - Oklahoma'},
            {id: 37, value: 1500, label: 'OR - Oregon'},
            {id: 38, value: 600, label: 'PA - Pennsylvania'},
            {id: 39, value: 800, label: 'RI - Rhode Island'},
            {id: 40, value: 600, label: 'SC - South California'},
            {id: 41, value: 1000, label: 'SD - South Dakota'},
            {id: 42, value: 800, label: 'TN - Tennessee'},
            {id: 43, value: 900, label: 'TX - Texas'},
            {id: 44, value: 1200, label: 'UT - Utah'},
            {id: 45, value: 800, label: 'VT - Vermont'},
            {id: 46, value: 600, label: 'VA - Virginia'},
            {id: 47, value: 1500, label: 'WA - Washington'},
            {id: 48, value: 600, label: 'WV - West Virginia'},
            {id: 49, value: 900, label: 'WI - Wisconsin'},
            {id: 50, value: 1000, label: 'WY - Wyoming'}
        ],
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
        priceToNewYork: function () {
            if(this.placeOfOrigin === 0){
                alert('Zwariowałeś??? Transport z Alaski do Nowego Yorku? :):) Ja się tego nie podejmę!!!')
            }else if(this.placeOfOrigin === 1){
                alert('Na Hawaje to sobie można pojechać a nie samochody przywozić')
            }else return this.placeOfOrigin;
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

// set endpoint and your access key
endpoint = 'live'
access_key = '618b84c46bd93d0253e2fa295a8ef4a4';
// get the most recent exchange rates via the "live" endpoint:
$.ajax({
    url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {
        document.getElementById('rate').innerHTML = Math.round(json.quotes.USDPLN * 1000) / 1000;
    }
})