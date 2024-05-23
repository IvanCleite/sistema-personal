function openMenu() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.querySelector(".dropdown-menu").classList.add("show");
}

function closeMenu() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.querySelector(".dropdown-menu").classList.remove("show");
}

function closeNav() {
  const buttonNavbarToggler = document.querySelector(".navbar-toggler");
  const openDivNavbarCollapse = document.querySelector(".navbar-collapse");
  openDivNavbarCollapse.className = "navbar-collapse collapse";
  buttonNavbarToggler.className = "navbar-toggler collapsed";
}

function disableLinks() {
  disableLink('videos')
  disableLink('financeiro')
  disableLink('alunos')
  disableLink('cadastra')
  disableLink('edita')
  disableLink('lista')
}

function disableLink(link) {
  let linkdisable = document.getElementById(link);
  linkdisable.removeAttribute("href");
  linkdisable.removeAttribute("onclick");
  linkdisable.removeAttribute("onmouseenter");
  linkdisable.style.color = "rgba(13, 105, 41)";
  linkdisable.className = "dropdown-item nav-link linkDisabled";
}

function button(textG, hrefG, divG) {
  let buttonG = document.createElement("a");
  buttonG.className = "btn btn-warning mt-3 mb-3 me-3";
  buttonG.setAttribute("href", hrefG);
  buttonG.innerHTML = textG;

  let divBG = document.getElementById(divG);
  divBG.insertBefore(buttonG, divBG[0]);
}
