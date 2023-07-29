// ath : 1.7
// ath_change_percentage : -89.63928
// ath_date : "2021-03-27T03:43:35.178Z"
// atl : 0.02199898
// atl_change_percentage : 701.03645
// atl_date : "2022-12-30T08:16:30.345Z"
// circulating_supply : 2097547687.26523
// current_price : 0.176164
// fully_diluted_valuation : 931393130
// high_24h : 0.177993
// id : "conflux-token"
// image : "https://assets.coingecko.com/coins/images/13079/large/3vuYMbjN.png?1631512305"
// last_updated : "2023-07-29T08:46:09.287Z"
// low_24h : 0.172195
// market_cap : 369657949
// market_cap_change_24h : 8593218
// market_cap_change_percentage_24h : 2.37997
// market_cap_rank : 100
// max_supply : null
// name : "Conflux"
// price_change_24h : 0.00393072
// price_change_percentage_24h : 2.2822
// roi : null
// symbol : "cfx"
// total_supply : 5284997962.62513
// total_volume : 13797251




const fetchCoins = async () => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1');
    const coins = await data.json();


    const dom = document.querySelector('.coins');

    coins.forEach(coin => {
        const newElement = document.createElement('div');
        newElement.className = 'coin single';
        newElement.innerHTML = 
        `
            <div class='coin-head'>
                <img src=${coin.image} class='coin-img'/>
                <div>
                    <h2 class='coin-symbol'>${coin.symbol}</h2>
                    <p class='coin-name'>${coin.name}</p>
                </div>
            </div>
            <div class='price-change'>
                ${coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div class='current-price'>
                $${coin.current_price}
            </div>
            <div class='other'>
                <p class='total'>${coin.total_volume}</p>
                <p class='market'>$${coin.market_cap}</p>
            </div>
        `;
        dom.appendChild(newElement);
    });


}

fetchCoins();



//grid selector

const grid = document.querySelector('.grid');
const list = document.querySelector('.list');
const coins = document.querySelector('.listOfCoins')
const coin = document.querySelector('.single');

grid.addEventListener('click',()=>{
    if('active' === grid.classList[1]){
        return ;
    }
    else{

        coins.classList.remove('coins-list');
        coins.classList.add('coins');
        grid.classList.toggle('active');
        list.classList.toggle('active');
    }
})

list.addEventListener('click',()=>{
    if('active' === list.classList[1]) return ;
    else {
        coins.classList.remove('coins');
        coins.classList.add('coins-list');
        list.classList.toggle('active');
        grid.classList.toggle('active');
    }
})

//grid selector end