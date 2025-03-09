

function showNotification(notificationId){
    document.getElementById(notificationId).style.display = 'block'
    setTimeout(()=>{
        document.getElementById(notificationId).style.display = 'none'
    }, 1000)
}

function openFullNav(){
    document.querySelector('.smallScreen').style.display = 'none';
    document.querySelector('.bigScreen').style.display = 'block';
}