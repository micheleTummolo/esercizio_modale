$(document).ready(function () {
    $('.open-modal').click(function () {
        var modalId = $(this).data('modal')
        $('#' + modalId).removeClass('modal--closed')
    })

    $('.modal__close').click(function () {
        $(this).parents('.modal').addClass('modal--closed')
    })
});