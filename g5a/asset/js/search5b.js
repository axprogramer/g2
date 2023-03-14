function tableSearchEng(){
    let input, filter, table, tr, td, textValue;
    input = document.getElementById("myInputEn");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody5A");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++){
       
        td = tr[i].getElementsByTagName("td")[1];

        if(td){
            textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}

function tableSearchKh(){
    let input, filter, table, tr, td, textValue;
    input = document.getElementById("myInputKh");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody5A");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++){
       
        td = tr[i].getElementsByTagName("td")[2];

        if(td){
            textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}
function tableSearchEngB(){
    let input, filter, table, tr, td, textValue;
    input = document.getElementById("myInputEn");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody1");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++){
       
        td = tr[i].getElementsByTagName("td")[1];

        if(td){
            textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}

function tableSearchKhB(){
    let input, filter, table, tr, td, textValue;
    input = document.getElementById("myInputKh");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody1");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++){
       
        td = tr[i].getElementsByTagName("td")[2];

        if(td){
            textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }

}

function clickEng(){
    var inputKh = document.getElementById("myInputKh");
    inputKh.style.display = "none";
    var inputEn = document.getElementById("myInputEn");
    inputEn.style.display = "";

}
function clickKh(){
    var inputKh = document.getElementById("myInputKh");
    inputKh.style.display = "";
    var inputEn = document.getElementById("myInputEn");
    inputEn.style.display = "none";

}
clickEng();
//Count Total st and Female
//October
$(document).ready(function ()
{
    var Sf = "F";
    $("#btnTotalOct").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody2 td").closest("tr").length;
        var show = document.getElementById("TotalSsOct");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2Oct");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody2 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFOct");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2Oct");
        show3.innerHTML = noOfOccurance;

    }

})

//November
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody3 td").closest("tr").length;
        var show = document.getElementById("TotalSsNov");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2Nov");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody3 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFNov");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2Nov");
        show3.innerHTML = noOfOccurance;

    }

})

//December
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody4 td").closest("tr").length;
        var show = document.getElementById("TotalSsDec");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2Dec");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody4 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFDec");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2Dec");
        show3.innerHTML = noOfOccurance;

    }

})

//January
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody5 td").closest("tr").length;
        var show = document.getElementById("TotalSsJan");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2Jan");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody5 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFJan");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2Jan");
        show3.innerHTML = noOfOccurance;

    }

})


//February
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody6 td").closest("tr").length;
        var show = document.getElementById("TotalSsFeb");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2Feb");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody6 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFFeb");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2Feb");
        show3.innerHTML = noOfOccurance;

    }

})

//1st Semester
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody7 td").closest("tr").length;
        var show = document.getElementById("TotalSsFirstSeme");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2FirstSeme");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody7 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFFirstSeme");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2FirstSeme");
        show3.innerHTML = noOfOccurance;

    }

})

//1st Semester Result
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody8 td").closest("tr").length;
        var show = document.getElementById("TotalSsFirstSemeR");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2FirstSemeR");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody8 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFFirstSemeR");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2FirstSemeR");
        show3.innerHTML = noOfOccurance;

    }

})

//March
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody9 td").closest("tr").length;
        var show = document.getElementById("TotalSsMarch");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2March");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody9 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFMarch");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2March");
        show3.innerHTML = noOfOccurance;

    }

})
//April-May
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody10 td").closest("tr").length;
        var show = document.getElementById("TotalSsMay");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2May");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody10 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFMay");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2May");
        show3.innerHTML = noOfOccurance;

    }

})
//June
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody11 td").closest("tr").length;
        var show = document.getElementById("TotalSsJune");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2June");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody11 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFJune");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2June");
        show3.innerHTML = noOfOccurance;

    }

})
//July
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody18 td").closest("tr").length;
        var show = document.getElementById("TotalSsJuly");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2July");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody18 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFJuly");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2July");
        show3.innerHTML = noOfOccurance;

    }

})
//2nd Semester
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody12 td").closest("tr").length;
        var show = document.getElementById("TotalSsSeSeme");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2SeSeme");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody12 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFSeSeme");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2SeSeme");
        show3.innerHTML = noOfOccurance;

    }

})
//2nd Semester Result
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody13 td").closest("tr").length;
        var show = document.getElementById("TotalSsSeSemeR");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2SeSemeR");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody13 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFSeSemeR");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2SeSemeR");
        show3.innerHTML = noOfOccurance;

    }

})
//Annual Year
$(document).ready(function ()
{
    var Sf = "F";
    $("input[type=button]").click(function ()
    {
        getOccurance(Sf);
        var rowCount = $("#tbody15 td").closest("tr").length;
        var show = document.getElementById("TotalSsAnnYear");
        show.innerHTML = rowCount;
        var show2 = document.getElementById("TotalSs2AnnYear");
        show2.innerHTML = rowCount;



    });

    function getOccurance(word)
    {
        var noOfOccurance = 0;

        $("#tbody15 td:gt(2)").each(function (ind, obj)
        {
            if (word == $.trim($(obj).text())) noOfOccurance++;

        });

        var show = document.getElementById("TotalSFAnnYear");
        show.innerHTML = noOfOccurance;
        var show3 = document.getElementById("TotalSF2AnnYear");
        show3.innerHTML = noOfOccurance;

    }

})
