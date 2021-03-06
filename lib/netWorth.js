const formatNum = d3.format(",.0f");

let netWorth = 60000000;
let igFollowers = 21600000;
let twitFollowers = 12700000;

document.getElementById('net-worth').innerHTML = formatNum(netWorth);
document.getElementById('ig-followers').innerHTML = formatNum(igFollowers);
document.getElementById('twit-followers').innerHTML = formatNum(twitFollowers);

const update = (value) => {
  return value + (Math.random() * (value*0.0000005));
}

export const updateValues = () => {
  const interval = setInterval(function() {
    netWorth = update(netWorth, 'netWorth');
    igFollowers = update(igFollowers, 'igFollowers');
    twitFollowers = update(twitFollowers, 'twitFollowers');

    document.getElementById('net-worth').innerHTML = `<a class="netWorth" href='https://wealthygorilla.com/stephen-curry-net-worth'>${formatNum(netWorth)}<a/>`;
    document.getElementById('ig-followers').innerHTML = `<a class="netWorth" href='https://www.instagram.com/stephencurry30'>${formatNum(igFollowers)}<a/>`;
    document.getElementById('twit-followers').innerHTML = `<a class="netWorth" href='https://www.twitter.com/stephencurry30'>${formatNum(twitFollowers)}<a/>`
  }, 1000);
}
