let dropbtn = document.querySelector('.drop')
let dropbtnNews = document.querySelector('.news')
let myDropdown = document.querySelector(".dropCont");
let myDropdownNews = document.querySelector(".newsCont");

dropbtn.onclick = () => {
  myDropdown.classList.add('anim_start')
  myDropdown.classList.toggle("show")
  ;}  

  dropbtnNews.onclick = () => {
    myDropdownNews.classList.add('anim_start')
    myDropdownNews.classList.toggle("show")
    ;} 

  window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
      if (myDropdownNews.classList.contains('show')) {
        myDropdownNews.classList.remove('show');
      }
  }
}










