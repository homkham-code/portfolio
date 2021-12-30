// START HEADER SECTION
// Start Navbar
const navbaritems = document.querySelector('.navbaritems');
const navbuttons = document.querySelector('.navbuttons');
const navmenus = document.querySelectorAll('.navmenus');
const navhomes = document.querySelector('.navhomes');

navbuttons.addEventListener('click',()=>document.querySelector('.navbuttons').classList.toggle('changes'));

window.addEventListener('scroll',()=>{
    let getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly <= 400){
        removeactiveitem();
        homemenus.classList.add('active');
    }
    
    if(getscrolly >= 450){
        navbaritems.classList.remove('d-none');
    }else{
        navbaritems.classList.add('d-none');
    }
});

navmenus.forEach(navmenu=>{
    // console.log(menuitem);

    navmenu.addEventListener('click',(e)=>{
        let data = navmenu.getAttribute('href');
        // console.log(data);

        removenavmenus();
        e.target.classList.add('active');
    });  
});

// remove current active item 
function removenavmenus(){
    navmenus.forEach(navmenu=>{
        navmenu.classList.remove('active');
    });
}

// End Navbar  

// Start Banner
const menuitems = document.querySelectorAll('.menuitems');
// console.log(menuitems);

menuitems.forEach(menuitem=>{
    // console.log(menuitem);

    menuitem.addEventListener('click',(e)=>{
        let data = menuitem.getAttribute('href');
        // console.log(data);

        removeactiveitem();
        e.target.classList.add('active');
    });
});

navhomes.addEventListener('click',()=>{
    removeactiveitem();
    homemenus.classList.add('active');
});

// remove current active item 
function removeactiveitem(){
    menuitems.forEach(menuitem=>{
        menuitem.classList.remove('active');
    });
}
// End Banner
// END HEADER SECTION 



// START CONTACT SECTION 
const homemenus = document.querySelector('.homemenus');
const contactmenus = document.querySelector('.contactmenus');
const conbtns = document.querySelector('.conbtns');

conbtns.addEventListener('click',()=>{
    contactmenus.classList.remove('active');
    homemenus.classList.add('active');

    navbuttons.classList.remove('changes');
});
// END CONTACT SECTION 



// Start Floating Button Section 
const buttons = document.getElementById('buttons');

window.addEventListener('scroll',()=>{
    let getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 400){
        buttons.classList.add('active');
    }else{
        buttons.classList.remove('active');
    }
});

buttons.addEventListener('click',()=>{
    location.href = '#home';
    removeactiveitem();
    homemenus.classList.add('active');
});
// End Floadting Button Section 