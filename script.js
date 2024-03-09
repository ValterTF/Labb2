// Mitt script för index.html hemsidan
// Valter Thomas Fyrberg, vath0008@ad.umu.se

// Funktion för att visa lokala tiden
function Localtime() {

    // Få tiden som ska visas i timmar, minuter och sekunder
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Lägger till noller ifall det behövs
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // Spara i en string som ska visa tiden samt retunera den
    var TimeString = hours + ':' + minutes + ':' + seconds;
    return TimeString;
}

// Funktion som ska uppdatera tiden varje sekund i HTML:n
function updateTime() {
    var timeElement = document.getElementById('timeDisplay');
    if (timeElement) {
        var getTime = Localtime();
        timeElement.textContent = getTime;
    }
}
// Uppdatera tiden varje sekund
setInterval(updateTime, 1000);


document.addEventListener('DOMContentLoaded', function () {

    // Funktion som gör "image2" .1 större då musen ligger över den 
    function ImageLarger() {
        var image2 = document.getElementById('image2');
        image2.style.transform = 'scale(1.1)';
    }

    // Funktion som ska återställa bilden då musen inte är kvar på bilden 
    function ImageRestore() {
        var image2 = document.getElementById('image2');
        image2.style.transform = 'scale(1)';
    }

    // Funktion som ska köra en aleart() för att visa att en extren sida kommer att öppnas 
    function AleartShow() {
        alert("Detta tar dig till Eketorn Trailer AB sida");
    }

    // Event listeners för bilden
    var image2 = document.getElementById('image2');
    image2.addEventListener('mouseenter', ImageLarger);
    image2.addEventListener('mouseleave', ImageRestore);
    image2.addEventListener('click', AleartShow);


    // Andra funkionen som är för för logo (Glappfri, toppen av sidan)

    // Gör så att logo bild blir 'bold' och 'black'
    function LogoChange() {
        var logo = document.getElementById('logo');
        logo.style.fontWeight = 'bold';
        logo.style.color = 'black';
    }

    // Funktion som återställer logo till orginal
    function LogoRestore() {
        var logo = document.getElementById('logo');
        logo.style.fontWeight = 'normal';
        logo.style.color = ''; // Återställer färgen
    }

    // Event listeners för logo
    var logo = document.getElementById('logo');
    logo.addEventListener('mouseenter', LogoChange);
    logo.addEventListener('mouseleave', LogoRestore);
});

