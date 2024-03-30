const hamburgermenu=document.querySelector(".hamburgermenu");
const sidebar=document.querySelector(".sidebar");
const close=document.querySelector(".close");

function openMenu(){
    sidebar.style.right = "0";
}

function closeMenu(){
    sidebar.style.right="-100%";
}
//window.onresize = function(){ location.reload(); }

function diabetes_github(){
    window.open("https://github.com/mettash94/Django-App-Diabetes-Prediction-.git", '_blank').focus();
}

function crm_github(){
    window.open("https://github.com/mettash94/Customer-and-Appointment-Management.git", '_blank').focus();
}

function ecommerce_github(){
    window.open("https://github.com/mettash94/BridXe-Internship.git",'_blank' ).focus();
    
}

function ux_livesite(){
    window.open("https://shwethamett.wixsite.com/my-site-2/case-study",'_blank' ).focus();
    
}

var items = document.getElementsByClassName("fade-item");
		for (let i = 0; i < items.length; ++i) {
      fadeIn(items[i], i * 1000)
    }
    function fadeIn (item, delay) {
      setTimeout(() => {
        item.classList.add('fadein')
      }, delay)
    }