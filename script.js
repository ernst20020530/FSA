
$(document).ready(function () {
    $("input.NonNegativeNumber").keydown(function (e) {
        if (e.ctrlKey == true) {
            e.preventDefault();
            return;
        }

        if (e.keyCode >= 0x30 && e.keyCode <= 0x39 ||
            e.keyCode >= 0x60 && e.keyCode <= 0x69 ||
            e.keyCode == 0xBE ||
            e.keyCode == 0x6E ||
            e.keyCode == 0x8)
            return;

        e.preventDefault();
        return;
    })
});


$(document).ready(function () {
    $("input.Number").keydown(function (e) {
        if (e.ctrlKey == true) {
            e.preventDefault();
            return;
        }

        if (e.keyCode >= 0x30 && e.keyCode <= 0x39 ||
            e.keyCode >= 0x60 && e.keyCode <= 0x69 ||
            e.keyCode == 0xBE || e.keyCode == 0x6E || e.keyCode == 0x8 || e.keyCode == 0x6D) {
            return;
        }

        e.preventDefault();
        return;
    })
});


$(document).ready(function () {
    $("input.Number").change(function () {
        var value = parseFloat($(this).val());
        if (value < 0)
            $(this).css("color", "red");
        else
            $(this).css("color", "black");
    })
});


function GetAndValidiateField(id) {
    var element = document.getElementById(id);
    var value = parseFloat(element.value);
    if (isNaN(value))
    {
        element.value = element.defaultValue;
        return parseFloat(element.value);
    }
    return value;
}