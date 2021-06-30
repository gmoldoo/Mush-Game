const earningsUpdater = document.getElementById("earnings-updater")
const moneyUpdater = document.getElementById("money")

const earningsText = "Money earn by press: "
const moneyText = "Money: "

const errorEl = document.getElementById("error")
const next_upgrade = document.getElementById("next-upgrade")
const rank = document.getElementById("rank")

let money = 0
let earningPerClick = 1

const upgrades = [1,2, 3, 4, 5, 10, 15, 20, 30, 50, 100, 200, 250, 500]
const costs = [50, 100, 150, 300, 500, 600, 700, 800, 10000, 16000, 32000, 64000, 128000]
const ranks = ["Noob", "Good", "Insane", "Godlike"]

rank.style.color = "red"

function increase(){
    money += earningPerClick
    moneyUpdater.innerHTML = moneyText + money;
}

function upgrade(){
    const indexOfCurrentE = upgrades.indexOf(earningPerClick)
    
    
    if (money >= costs[indexOfCurrentE] && earningPerClick != 500){
        next_upgrade.innerHTML = "Required money for next upgrade: " + costs[indexOfCurrentE + 1]
        earningPerClick = upgrades[indexOfCurrentE + 1]
        earningsUpdater.innerHTML = earningsText + earningPerClick
        money -= costs[indexOfCurrentE]
        moneyUpdater.innerHTML = moneyText + money;

        errorEl.innerHTML = "Succesfully bought!"
        errorEl.style.color = "green"
        
    }else if(earningPerClick === 500){
        errorEl.innerHTML = "No upgrades remained!"
        errorEl.style.color = "gold"
    
    }else{
        errorEl.innerHTML = "Not enough money!"
        errorEl.style.color = "red"
    }

    if(earningPerClick >= 20){
        rank.innerHTML = "Rank: " + ranks[1]
        rank.style.color = "green"
    } 
    if(earningPerClick >= 200){
        rank.innerHTML = "Rank: " + ranks[2]
        rank.style.color = "powderblue"
    }
    if(earningPerClick === 500){
        rank.innerHTML = "Rank: " + ranks[3]
        rank.style.color = "gold"
        next_upgrade.innerHTML = "Congrats for finishing the game! No upgrades remained!"
        next_upgrade.style.color = "gold"
    }


}




function hideErorrEl(){
    errorEl.innerHTML = ""
}

setInterval(hideErorrEl,5000)
