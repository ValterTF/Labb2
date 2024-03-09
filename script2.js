// Mitt script för product.html 
// Valter Thomas Fyrberg, vath0008@ad.umu.se

$(document).ready(function () {
    $('.information').show();

    // Toggle, som visar eller tar bort informationen om knappen trycks ner
    $('#toggleInformation').click(function () {
        $('.information').toggle();
    });
    
    // Göm de olika filtrerna
    $('.filterbox').hide();

    // Toggle, som visar eller tar bort filtrerna om knappen trycks ner. Med fade
    $('#filter').click(function () {
        $('.filterbox').fadeToggle();
    });

    // Göm filterna om "Clear" kanppen trycks ner
    $('#clear').click(function () {
        $('.filterbox').fadeOut();
    });

    // Gör så att filter knappen ändrar färg då man drar musen över den
    $('#filter').hover(
        function () {
            $(this).css('color', 'black'); // Svart färg
        },
        function () {
            $(this).css('color', ''); // Återställ
        }
    );
});
