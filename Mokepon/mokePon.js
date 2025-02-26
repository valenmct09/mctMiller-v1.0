let attackPlayer
let attackEnemy
let lifesAmountPetEnemy=5
let lifesAmountPetPlayer=5

function loadWindow(){
    let selectAttack=document.getElementById('selectAttack')
    selectAttack.style.display='none'
    let buttonPetPlayer=document.getElementById('buttonPetPlayer')
    buttonPetPlayer.addEventListener('click', selectPetPlayer)
    let buttonFire=document.getElementById('fireAttack')
    buttonFire.addEventListener('click',fireAttack)
    let buttonWater=document.getElementById('waterAttack')
    buttonWater.addEventListener('click',waterAttack)
    let buttonAir=document.getElementById('airAttack')
    buttonAir.addEventListener('click',airAttack)
    let buttonGround=document.getElementById('groundAttack')
    buttonGround.addEventListener('click',groundAttack)
    let buttonRestart=document.getElementById('buttonRestart')
    buttonRestart.style.display='none'
    buttonRestart.addEventListener('click',restart)
}
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function selectPetPlayer(){
    let petDogger=document.getElementById('Dogger')
    let petCatoushe=document.getElementById('Catoushe')
    let petJobsty=document.getElementById('Jobsty')
    let petRatooh=document.getElementById('Ratooh')
    let petItzuru=document.getElementById('Itzuru')
    let spanPetPlayer=document.getElementById('petPlayerName')
    let buttonPetPlayer=document.getElementById('buttonPetPlayer')
    if(petDogger.checked){
        alert("Seleccionaste a Dogger")
        spanPetPlayer.innerHTML="Dogger"
    } else if(petCatoushe.checked){
        alert("Seleccionaste a Catoushe")
        spanPetPlayer.innerHTML="Catoushe"
    } else if(petJobsty.checked){
        alert("Seleccionaste a Jobsty")
        spanPetPlayer.innerHTML="Jobsty"
    } else if(petRatooh.checked){
        alert("Seleccionaste a Ratooh")
        spanPetPlayer.innerHTML="Jobsty"
    } else if(petItzuru.checked){
        alert("Seleccionaste a Itzuru")
        spanPetPlayer.innerHTML="Itzuru"
    } else {
        alert("Selecciona una mascota")
    }
    buttonPetPlayer.disabled=true
    selectPetEnemy()
}
function selectPetEnemy(){
    let randomAttack=random(1,5)
    let spanPetEnemy=document.getElementById('petEnemyName')
    if(randomAttack==1){
        alert("Tu rival ha seleccionado a Dogger")
        spanPetEnemy.innerHTML="Dogger"
    } else if(randomAttack==2){
        alert("Tu rival ha seleccionado a Catoushe")
        spanPetEnemy.innerHTML="Catoushe"
    } else if(randomAttack==3){
        alert("Tu rival ha seleccionado a Jobsty")
        spanPetEnemy.innerHTML="Jobsty"
    } else if(randomAttack==4){
        alert("Tu rival ha seleccionado a Ratooh")
        spanPetEnemy.innerHTML="Ratooh"
    } else if(randomAttack==5){
        alert("Tu rival ha seleccionado a Itzuru")
        spanPetEnemy.innerHTML="Itzuru"
    } let selectAttack=document.getElementById('selectAttack')
    selectAttack.style.display='block'
    let selectPet=document.getElementById('selectPet')
    selectPet.style.display='none'
}
function selectAttackEnemy(){
    let randomAttackType=random(1,4)
    if(randomAttackType==1){
        attackEnemy='Fuego'
        alert(attackEnemy)
    } else if(randomAttackType==2){
        attackEnemy='Agua'
        alert(attackEnemy)
    } else if(randomAttackType==3){
        attackEnemy='Aire'
        alert(attackEnemy)
    } else if(randomAttackType==4){
        attackEnemy='Tierra'
        alert(attackEnemy)
    }
    fight()
}
function createMessage(result){
    let sectionMessages=document.getElementById('result')
    let playerAttacks=document.getElementById('playerAttacks')
    let enemyAttacks=document.getElementById('enemyAttacks')
    let newPlayerAttack=document.createElement('p')
    let newEnemyAttack=document.createElement('p')
    sectionMessages.innerHTML=result
    playerAttacks.innerHTML=attackPlayer
    enemyAttacks.innerHTML=attackEnemy
    playerAttacks.appendChild(newPlayerAttack)
    enemyAttacks.appendChild(newEnemyAttack)
}
function fight(){
    let spanLifesAmountPetPlayer=document.getElementById('lifesAmountPetPlayer')
    let spanLifesAmountPetEnemy=document.getElementById('lifesAmountPetEnemy')
    if (attackEnemy==attackPlayer){
            createMessage("Es un empate");
        } else if(attackPlayer=="Fuego"&&attackEnemy=="Aire"){
            createMessage("Ganaste");
            lifesAmountPetEnemy--
            spanLifesAmountPetEnemy.innerHTML=lifesAmountPetEnemy
        } else if(attackPlayer=="Tierra"&&attackEnemy=="Agua"){
            createMessage("Ganaste");
            lifesAmountPetEnemy--
            spanLifesAmountPetEnemy.innerHTML=lifesAmountPetEnemy
        } else if(attackPlayer=="Aire"&&attackEnemy=="Tierra"){
            createMessage("Ganaste");
            lifesAmountPetEnemy--
            spanLifesAmountPetEnemy.innerHTML=lifesAmountPetEnemy
        } else if(attackPlayer=="Agua"&&attackEnemy=="Fuego"){
            createMessage("Ganaste");
            lifesAmountPetEnemy--
            spanLifesAmountPetEnemy.innerHTML=lifesAmountPetEnemy
        } else {
            createMessage("Perdiste");
            lifesAmountPetPlayer--
            spanLifesAmountPetPlayer.innerHTML=lifesAmountPetPlayer
        }
        checkLifes()
}
function checkLifes(){
    if(lifesAmountPetEnemy==0){
        createFinalMessage("¡Felicidades! Has ganado este combate.")
    } else if(lifesAmountPetPlayer==0){
        createFinalMessage("¡Oh, no! Has perdido este combate")
    }
}
function createFinalMessage(finalResult){
    let sectionFinalMessage=document.getElementById('result')
    sectionFinalMessage.innerHTML=finalResult
    let buttonFire=document.getElementById('fireAttack')
    buttonFire.disabled=true
    let buttonWater=document.getElementById('waterAttack')
    buttonWater.disabled=true
    let buttonAir=document.getElementById('airAttack')
    buttonAir.disabled=true
    let buttonGround=document.getElementById('groundAttack')
    buttonGround.disabled=true
    let buttonRestart=document.getElementById('buttonRestart')
    buttonRestart.style.display='flex'
    let playerAttacks=document.getElementById('playerAttacks')
    playerAttacks.style.display='none'
    let enemyAttacks=document.getElementById('enemyAttacks')
    enemyAttacks.style.display='none'
}
function fireAttack(){
    attackPlayer='Fuego'
    alert(attackPlayer)
    selectAttackEnemy()
}
function waterAttack(){
    attackPlayer='Agua'
    alert(attackPlayer)
    selectAttackEnemy()
}
function airAttack(){
    attackPlayer='Aire'
    alert(attackPlayer)
    selectAttackEnemy()
}
function groundAttack(){
    attackPlayer='Tierra'
    alert(attackPlayer)
    selectAttackEnemy()
}
function restart(){
    location.reload()
}
window.addEventListener('load',loadWindow)




