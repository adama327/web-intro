let btc=new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')
let eth= new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade')
let litecoin=new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade')
let solana=new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade')
let shibinu=new WebSocket('wss://stream.binance.com:9443/ws/shibusdt@trade')
let Binacecoin=new WebSocket('wss://stream.binance.com:9443/ws/busdusdt@trade')
let USDcoin=new WebSocket('wss://stream.binance.com:9443/ws/usdcusdt@trade')
let XRP=new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade')
let cardano=new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade')
let dogecoin=new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade')




let stockpriceeth = document.getElementById('prix-eth') 
let stockpricebtc = document.getElementById('prix-btc')
let stockpriceusdc = document.getElementById('prix-usdc') 
let stockpricebnb = document.getElementById('prix-bnb') 
let stockpricexrp = document.getElementById('prix-xrp') 
let stockpricesol = document.getElementById('prix-sol') 
let stockpriceada = document.getElementById('prix-ada') 
let stockpricedoge = document.getElementById('prix-doge') 
let stockpriceshib = document.getElementById('prix-shib') 
let stockpricelc = document.getElementById('prix-lc') 


let lastPrice = null


eth.onmessage = (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(4)+" $"
    stockpriceeth.innerText=parseFloat(stockobject.p).toFixed(4)+" $";
    stockpriceeth.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
}

btc.onmessage= (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(4)+" $"
    stockpricebtc.innerText=parseFloat(stockobject.p).toFixed(4)+" $";
    stockpricebtc.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
   
}

USDcoin.onmessage= (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(5)+" $"
    stockpriceusdc.innerText=parseFloat(stockobject.p).toFixed(5)+" $";
    stockpriceusdc.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
   
}

Binacecoin.onmessage= (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(5)+" $"
    stockpricebnb.innerText=parseFloat(stockobject.p).toFixed(5)+" $";
    stockpricebnb.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
   
}

XRP.onmessage= (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(5)+" $"
    stockpricexrp.innerText=parseFloat(stockobject.p).toFixed(5)+" $";
    stockpricexrp.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
   
}

cardano.onmessage= (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(5)+" $"
    stockpriceada.innerText=parseFloat(stockobject.p).toFixed(5)+" $";
    stockpriceada.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
   
}

solana.onmessage= (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(5)+" $"
    stockpricesol.innerText=parseFloat(stockobject.p).toFixed(5)+" $";
    stockpricesol.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
   
}

dogecoin.onmessage= (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(5)+" $"
    stockpricedoge.innerText=parseFloat(stockobject.p).toFixed(5)+" $";
    stockpricedoge.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
   
}

shibinu.onmessage= (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(5)+" $"
    stockpriceshib.innerText=parseFloat(stockobject.p).toFixed(5)+" $";
    stockpriceshib.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
   
}

litecoin.onmessage= (event) =>{
    let stockobject = JSON.parse(event.data);
    let price=parseFloat(stockobject.p).toFixed(5)+" $"
    stockpricelc.innerText=parseFloat(stockobject.p).toFixed(5)+" $";
    stockpricelc.style.color= !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
    lastPrice=price
   
}





document.querySelector('.btndev').addEventListener('click',search)
function search (){
    var select = document.querySelector("select");
    var devise = select.value;
    var input = document.querySelector("input");
    var montant = input.value
    var key="e89e9f56b5e74c48a7543ec4677e0467"
    var url="https://api.currencyfreaks.com/latest?apikey="+key
    fetch(url).then(x => x.json()).then(r =>  getrsult(r,devise,montant))


}

function getrsult (API,devise,montant){
   if(montant>0){
    var tconv=API.rates[devise]
    var conv = montant / tconv 
    document.querySelector('#conversion').innerHTML="= "+conv.toFixed(3) +" $"
    document.querySelector('.avertok').setAttribute('class','avert')
    document.querySelector('.usdh').setAttribute('class','usds')
   }
   else if(montant.length===0){
        document.querySelector('.avert').setAttribute('class','avertok')
       document.querySelector('.usds').setAttribute('class','usdh')
   }
   else if(montant<0){
    document.querySelector('.avert').setAttribute('class','avertok')
    document.querySelector('.usds').setAttribute('class','usdh')
}

}



