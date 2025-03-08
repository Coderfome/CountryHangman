function toggleModal(modalId){
    if(document.getElementById(modalId).style.display == 'none'){
        showModal(modalId)
    }
    else{
        hideModal(modalId)
    }   
}

function showModal(modalId){
    setTimeout(()=>{
    document.getElementById(modalId).style.display = 'block'
    document.getElementById('main').style.opacity = '40%'
    document.getElementById('nav').style.opacity = '40%'
    buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.disabled = true
    });
    closeButtons = document.querySelectorAll('.closeBtn')
    closeButtons.forEach(button => {
        button.disabled = false
    })
    }, 1)
    
}

function hideModal(modalId){
    document.getElementById(modalId).style.display = 'none'
    document.getElementById('main').style.opacity = '100%'
    document.getElementById('nav').style.opacity = '100%'
    buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.disabled = false
    });
}

document.getElementById('main').addEventListener('click', e=>{
    hideAllModals()
})

function hideAllModals(){
    
    modals = document.getElementsByClassName("modal");
    for (var i = 0; i<modals.length; i += 1){
        hideModal(modals[i].id)
    }
}

function showNotification(notificationId){
    document.getElementById(notificationId).style.display = 'block'
    setTimeout(()=>{
        document.getElementById(notificationId).style.display = 'none'
    }, 1000)
}