var userName;
document.getElementById('loginn').onclick=function promptUser(){
    userName = prompt("what is your name?");
    localStorage.setItem('userName',userName)
    console.log(localStorage.getItem('userName'));
    document.getElementById('loginn').style.display="none";
};
