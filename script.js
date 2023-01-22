var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var tet = document.getElementById("tether")

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd",
    "method": "GET",
    "headers":{}
}

$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    tet.innerHTML = response.tether.usd;
});
