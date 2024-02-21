let table = new DataTable('#table_cliente', {
    language: {
        url: '//cdn.datatables.net/plug-ins/2.0.0/i18n/pt-BR.json',
    },
});

$(document).ready(function () {
    $(selector).inputmask("99-9999999");  //static mask
    $(selector).inputmask({ "mask": "(999) 999-9999" }); //specifying options
    $(selector).inputmask("9-a{1,3}9{1,3}"); //mask with dynamic syntax
});