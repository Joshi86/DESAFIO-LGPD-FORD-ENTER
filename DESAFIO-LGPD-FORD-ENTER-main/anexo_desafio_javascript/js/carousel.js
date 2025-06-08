

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        Carousel.carouselArr = arr;
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Next(); // mostra o primeiro slide

            // Loop automático
            Carousel._interval = setInterval(function() {
                Carousel.NextButton();
            }, 3000);
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }

    static Next() {
        const car = Carousel.carouselArr[Carousel._sequence];
        const carDiv = document.getElementById("carousel");
        carDiv.innerHTML = `<img src="img/${car.image}" style="height: 120%;">`;

        const carTitle = document.getElementById("carousel-title");
        carTitle.innerHTML = `<a href="${car.url}">${car.title}</a>`;

        const radio = document.getElementById('radio' + (Carousel._sequence + 1));
        if (radio) {
            radio.checked = true;
        }
    }

    static NextButton() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.Next();
    }

    static PrevButton() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel.Next();
    }
}

// Ouvintes de evento para os botões
window.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            Carousel.NextButton();
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            Carousel.PrevButton();
        });
    }
});