$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index')>-1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }

    //Posts
    if(window.location.href.indexOf('index')>-1){
        var posts=[
            {
                title: 'El amigable vecino Spiderman',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Spiderman se enfrenta en sus 3 películas con villanos como el Duende Verde, el Dr. Octopus, Venom, Duende Verde Jr. El hombre de arena.'
            },
            {
                title: 'El sorprendente Spiderman',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Spiderman a lo largo de sus dos películas se enfrentará a villanos como el Lagarto, Electro, Duende verde Jr., Rhino.'
            },
            {   title: 'Spiderman',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'A través de varias películas tuvo que hacer frente a villanos como el Buitre, Mysterio, Duende verde, Electro, Dr. Octopus, Lagarto, El hombre de arena.'
            },
        ];

        posts.forEach((item, index)=>{
            var post =`
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
            
            $("#posts").append(post);
            
        });
    }
    
    //Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    //Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html,body').animate({
            scrollTop:0
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function(){
        var form_name=$("#form_name").val();

        localStorage.setItem("form_name",form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong><br> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeón
    if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion();
    }

    //Reloj
    if(window.location.href.indexOf('reloj')>-1){

        setInterval(function(){
            var reloj = moment().format("HH:mm:ss");
            $('#reloj').html(reloj);
        },1000);
    }

    // Validación
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTop: true
        });
    }


});