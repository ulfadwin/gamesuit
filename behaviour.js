let acak = Math.floor(Math.random() * 3)
let acak2 = Math.floor(Math.random() * 3)

let path_gambar_p1 = ""
let path_gambar_p2 = ""

path_gambar_p1 = [
    "images/kertas-kiri.png",
    "images/batu-kiri.png",
    "images/gunting-kiri.png",
]

path_gambar_p2 = [
    "images/kertas-kanan.png",
    "images/batu-kanan.png",
    "images/gunting-kanan.png",
]

document.querySelector("#player1").setAttribute("src" , path_gambar_p1[acak])
document.querySelector("#player2").setAttribute("src" , path_gambar_p2[acak2])

let p1_kertas = (acak == 0)
let p1_batu = (acak == 1)
let p1_gunting = (acak == 2)

let p2_kertas = (acak2 == 0)
let p2_batu = (acak2 == 1)
let p2_gunting = (acak2 == 2)

//p1 menang / p2 kalah
if ((p1_batu && p2_gunting) || (p1_gunting && p2_kertas) || (p1_kertas && p2_batu)){
    document.querySelector("#pesan_p1").innerHTML = "Kamu Menang !"
    document.querySelector("#pesan_p2").innerHTML = "Kamu Kalah"
    document.querySelector("#pesan_p1").classList.add("menang")
    document.querySelector("#pesan_p2").classList.add("kalah")
}

//p2 menang / p1 kalah
if ((p2_batu && p1_gunting) || (p2_gunting && p1_kertas) || (p2_kertas && p1_batu)){
    document.querySelector("#pesan_p1").innerHTML = "Kamu Kalah"
    document.querySelector("#pesan_p2").innerHTML = "Kamu Menang !"
    document.querySelector("#pesan_p1").classList.add("kalah")
    document.querySelector("#pesan_p2").classList.add("menang")
}

//seri
if (acak == acak2){
    document.querySelector("#pesan_p1").innerHTML = "Game Seri"
    document.querySelector("#pesan_p2").innerHTML = "Game Seri"
    document.querySelector("#pesan_p1").classList.add("seri")
    document.querySelector("#pesan_p2").classList.add("seri")
}


