// setting the towers and disk vars
const towers = document.querySelectorAll('.tower')
const disks = document.querySelectorAll('.disk')
let gameTower = [ [], [], [] ]

for (i=0;i<disks.length;i++){
    gameTower[0].push(disks[i])
}
let lastTower1 = gameTower[0][gameTower[0].length - 1]
let lastTower2 = gameTower[1][gameTower[1].length - 1]
let lastTower3 = gameTower[2][gameTower[2].length - 1]




let active = false
disks[2].addEventListener('click',() => {
    if (disks[2].style.borderWidth != '10px'){
        disks[2].style.borderWidth = '10px'
        active = true
    }else{
        disks[2].style.borderWidth = '1px'
        active = false
    }
})





