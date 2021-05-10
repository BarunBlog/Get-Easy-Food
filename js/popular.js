const inner_container_elements = document.querySelectorAll('.inner-container');
const card_elements = document.querySelectorAll('.card');

// Items
const image_elements = document.querySelectorAll('.dish img');
const header_elements = document.querySelectorAll('.card .info h3');
const star_elements = document.querySelectorAll('.card .info .stars');
const price_elements = document.querySelectorAll('.card .info .price');
const description_elements = document.querySelectorAll('.card .info .description');
const button_elements = document.querySelectorAll('.card .info .order a .btn');

//Moving Animation Event
ln = inner_container_elements.length;

for(let element=0; element<ln; element++){

    inner_container_elements[element].addEventListener('mousemove', e => {
        //console.log(e.pageX, e.pageY);

        let centerX = inner_container_elements[element].offsetLeft + inner_container_elements[element].offsetWidth / 2;
        let centerY = inner_container_elements[element].offsetTop + inner_container_elements[element].offsetHeight / 2;

        let distanceFromCenterX = e.pageX - centerX;
        let distanceFromCenterY = e.pageY - centerY;


        /*let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 150;
        let yAxis = xAxis * 2;*/
        
        card_elements[element].style.transform = `rotateX(${distanceFromCenterY/25}deg) rotateY(${distanceFromCenterX/15}deg)`;
    });

    // Animate In
    card_elements[element].addEventListener('mouseenter', e => {
        card_elements[element].style.transition = "none";
        console.log(header_elements[element]);

        // Popout
        header_elements[element].style.transform = `translateZ(100px)`;
        image_elements[element].style.transform = `translateZ(150px) rotateZ(-40deg)`;
        star_elements[element].style.transform = `translateZ(70px)`;
        price_elements[element].style.transform = `translateZ(30px)`;
        description_elements[element].style.transform = `translateZ(30px)`;
        button_elements[element].style.transform = `translateZ(20px)`;

    });

    // Animate Out
    inner_container_elements[element].addEventListener('mouseleave', e => {
        card_elements[element].style.transition = "all 0.5s ease";
        card_elements[element].style.transform = `rotateY(0deg) rotateX(0deg)`;

        // Popback
        header_elements[element].style.transform = `translateZ(0px)`;
        image_elements[element].style.transform = `translateZ(0px) rotateZ(0deg)`;
        star_elements[element].style.transform = `translateZ(0px)`;
        price_elements[element].style.transform = `translateZ(0px)`;
        description_elements[element].style.transform = `translateZ(0px)`;
        button_elements[element].style.transform = `translateZ(0px)`;
    });
}
