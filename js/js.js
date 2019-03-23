let Pics = {

    props: {

        link: {type: String, default:"https://images5.alphacoders.com/344/344961.jpg"}
    },

    template: `<img class="image" :src="link">`
}

let Carousel = {

    components: { Pics },

    props: {

        taille: { type: Number, default: 3, require: true }
    },

    methods: {  

        afficheImage: window.onload = function () { 
            
            var images = document.getElementsByClassName("image");
            
            for (let i = 0; i <= images.length; i++) {
                    
                if (i >=3 ) {
                        
                    images[i].style.display = "none";    
                }   
            }
        },

        skipImage: function () {

            var images = document.getElementsByClassName("image");

            console.log("adzaeaze");
        }
    },

    template: `<div class="carousel"> 
                        <pics link="https://images5.alphacoders.com/344/344961.jpg"></pics>
                        <pics link="https://images5.alphacoders.com/344/344961.jpg"></pics> 
                        <pics link="https://images5.alphacoders.com/344/344961.jpg"></pics> 
                        <pics link="https://images5.alphacoders.com/344/344961.jpg"></pics> 
                        <pics link="../assets/luffy.jpg"></pics>
                        <pics link="../assets/kid.jpg"></pics>
                        <pics link="../assets/zoro.jpg"></pics>
                        <pics link="../assets/Tokyo-Ghoul.jpg"></pics> 
                    <span class="arrow" id ="arrowLeft">&#8636;</span>
                    <span class="arrow" id ="arrowRight" @onclick="skipImage">&#8640;</span>
                </div>`
}

new Vue ({

    components: {Carousel, Pics},

    el: '#app', 

    data: {

    }
})