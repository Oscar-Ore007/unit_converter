let num = window.prompt("Enter number")

dnum = document.getElementById("number")
dnum.textContent = num

dlength = document.getElementById("length")
dvolume = document.getElementById("volume")
dmass = document.getElementById("mass")

dlength.textContent = "Length (Meter/Feet)"
dlen = document.getElementById("len")

dvolume.textContent = "Volume (Liters/Gallons)"
dvol = document.getElementById("vol")

dmass.textContent = "Mass (Kilograms/Pounds)"
dmas = document.getElementById("mas")


function convLen() {
    let m2f = dnum.textContent * 3.28084
    let f2m = dnum.textContent * 0.3048
    dlen.textContent = dnum.textContent + " meters = " + m2f.toFixed(3) + " feet | " + 
    dnum.textContent + " feet = " + f2m.toFixed(3) + " meters"
}

function convVol() {
    let l2g = dnum.textContent * 0.264172
    let g2l = dnum.textContent * 3.78541
    dvol.textContent = dnum.textContent + " liters = " + l2g.toFixed(3) + " gallons | " + 
    dnum.textContent + " gallons = " + g2l.toFixed(3) + " liters"
}

function convMas() {
    let k2p = dnum.textContent * 2.20462
    let p2k = dnum.textContent * 0.453592
    dmas.textContent = dnum.textContent + " kilos = " + k2p.toFixed(3) + " pounds | " + 
    dnum.textContent + " pounds = " + p2k.toFixed(3) + " kilos"
}