var cash = 1
var generators = []
var lastUpdate = Date.now()

for (var i = 0; i < 10; i++) {
    var generator = {
        cost: Math.pow(Math.pow(10, i),i),
        bought: 0,
        amount: 0,
        mult: 1,
    }
    generators.push(generator)
}

function format(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantisa = amount * Math.pow(10, power)
    if (power < 3 ) return amount.toFixed(2)
    return mantisa.toFixed(2) + "e" + power
}

function updateGUI() {
    document.getElementById("currency").textContent = "You have " + format(money) + "€"
 for (var i = 0; i < 10; i++) {
     var g = generators[1]
     document.getElementById("gen" + (i + 1)).innerHTML = "Amount: " + format(g.amount) + "<br>Bought: " + g.bought + "<br>Multi: "+g.mult + "x<br>Cost: " + format(g.cost)
 }
}

function ploop(diff) {
    money += generators[0].amount * generators [0].mult * diff
    for (var i = 1; i < 10; i++) {
        generators[i-1].amount +=generators[i].amount * generators.mult * diff / 5
    }
}

fucntion mainloop() {
    var diff = (Date.now() - lastUpdate) / 1000

    ploop(diff)
    updateGUI()

    lastUpdate = Date.now()
}

setInterval(mainLoop, 100)

updateGUI()