const currencyValues = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "INR",
    "ILS",
    "IMP",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
]


const selectEle = document.querySelector("#currency-one")
const amountEle_one = document.querySelector("#amount-one")
const selectEle2 = document.querySelector("#currency-two")
const amountEle_two = document.querySelector("#amount-two")
const swapBtn = document.querySelector("#swap")
const rateEle = document.querySelector("#rate")


currencyValues.forEach((value, index) => {
    const optionEle = document.createElement("option")
    optionEle.setAttribute("value", value)
    optionEle.innerText = value
    selectEle.append(optionEle)
    if (optionEle.value == "USD") {
        optionEle.setAttribute("selected", "")
    }
})

async function currencyValue() {

    currency_one = selectEle.value
    currency_two = selectEle2.value

   try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    const data = await response.json()
    rateEle.innerHTML= `1 ${currency_one} = ${data.rates[currency_two]} ${currency_two}`

    amountEle_two.value = (amountEle_one.value * data.rates[currency_two]).toFixed(2)
   }
   catch (err) {
    console.log(err);
   }
}

selectEle.addEventListener("change", currencyValue)
selectEle2.addEventListener("change", currencyValue)
amountEle_one.addEventListener("input", currencyValue)

swapBtn.addEventListener("click", () =>{
    const temp = selectEle.value
    selectEle.value = selectEle2.value
    selectEle2.value = temp
    currencyValue()
})

currencyValue()