$(document).ready(function () {
    //////////////////ALL VARIABLES////////////////
    var variableShow = 1;

    var flag = 0;

    var roomType;
    var adults;
    var children;

    ///////////////////ALL FUNCTIONS////////////////////////    

    
    
    
    var changeImageRoom = function () {
        $('#allRooms').css('display', 'grid');
        $('#room .diamond').css('background-image', 'url(./images/diamond3.png)');
        $('#room').css('background-color', '#fbf1de');

        $('#allSuites').css('display', 'none');
        $('#suite .diamond').css('background-image', 'url(./images/diamond2.png)');
        $('#suite').css('background-color', 'white');

    }

    var changeImageSuite = function () {
        $('#allRooms').css('display', 'none');
        $('#room .diamond').css('background-image', 'url(./images/diamond2.png)');
        $('#room').css('background-color', 'white');

        $('#allSuites').css('display', 'grid');
        $('#suite .diamond').css('background-image', 'url(./images/diamond3.png)');
        $('#suite').css('background-color', '#fbf1de');


    }






    //////////////////////////CLICK ACTIONS//////////////////
    $("#roomClick").click(function () {
        console.log("Happening");
        changeImageRoom();
    })


    $("#suiteClick").click(function () {
        console.log("Happening again");
        changeImageSuite();
    })
    $("#filterClick").click(function () {
        console.log("Happening again");
    })









    $(".facilities").click(function () {
        ///////////////Constructor////////////

        var display = $(this).nextAll('ul').css("display");

        console.log(display);



        if (display === "block") {
            console.log("inside");
            $(this).nextAll('ul').css("display", 'none');
            $(this).nextAll('div').css('background-image', 'url(./images/diamond3.png)');
            variableShow++;
        } else {
            $(this).nextAll('ul').css("display", 'block');
            $(this).nextAll('div').css('background-image', 'url(./images/diamond2.png)');
            variableShow++;
        }


    })



    $("#checkAvailability").click(function () {
        ///////////////Constructor////////////

        roomType = $("#roomType option:selected").text();
        adults = $("#adult option:selected").text();
        children = $("#child option:selected").text();
        $("#childBook").val(children);


        console.log(roomType);
        console.log(adults);
        console.log(children);
        $("#myModal").css("display", "block");

        $("#adultBook option:selected").text($("#adult option:selected").text());
        $(".childBook option:selected").text($("#child option:selected").text());
        $("#roomtypeBook option:selected").text($("#roomType option:selected").text());
        console.log($("#child option:selected").text());
        console.log($(".childBook option:selected").text());
        console.log($("#adultBook option:selected").text());

    });


    $("#close").click(function () {

        $("#myModal").css("display", "none");
    });



    //////////////////////////////////////////////////////////EVENTS PAGE VALIDATION//////////////////////////////////////////////////
   /* var isDate = function (text) {
        if (!/^[01]?\d\/[0-3]\d\/\d{4}$/.test(text)) return false;

        var index1 = text.indexOf("/");
        var index2 = text.indexOf("/", index1 + 1);
        var month = parseInt(text.substring(0, index1));
        var day = parseInt(text.substring(index1 + 1, index2));

        if (month < 1 || month > 12) {
            return false;
        }
        //if( day > 31 ) { return false; }
        else {
            switch (month) {
                case 2:
                    if (day > 28) {
                        return false;
                    } // doesn't handle leap year
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if (day > 30) {
                        return false;
                    }
                    break;
                default:
                    if (day > 31) {
                        return false;
                    }
                    break;
            }
        }
        return true;


    };*/





    ///////////////////////////////////////////////////////CONTACT US PAGE//////////////////////////////////////////////
   /* $("#send").click(function () {
        // clear any previous error messages
        var isValid = true; // initialize isValid flag

        sessionStorage.email = "";
        sessionStorage.name = "";
        sessionStorage.adult = "";
        sessionStorage.child = "";
        sessionStorage.roomtype = "";
        sessionStorage.checkin = "";
        sessionStorage.checkout = "";

        var email = $("#email").val();
        var name = $("#fullname").val();

        if (email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)) {
            isValid = false;
            $("#email").next().text("INVALID");
        }
        if (name === "" || !name.match(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/)) {
            isValid = false;
            $("#fullname").next().text("INVALID.");
        }

        if (isValid) {
            // code that saves profile info goes here


            // go to profile page
            location.href = "emailmessage.html";
        }

        $("#email").focus();
    });
*/

    /*$("#booknow").click(function () {
        // clear any previous error messages
        var isValid = true; // initialize isValid flag

        var email = $("#email").val();
        var name = $("#fullname").val();

        sessionStorage.email = email;
        sessionStorage.name = name;
        sessionStorage.adult = $("#adultBook option:selected").text();
        sessionStorage.child = $(".childBook option:selected").text();
        sessionStorage.roomtype = $("#roomtypeBook option:selected").text();
        sessionStorage.checkin = $("#datepicker1").val();
        sessionStorage.checkout = $("#datepicker2").val();

        if (email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)) {
            isValid = false;
            $("#email").next().text("INVALID");
        }
        if (name === "" || !name.match(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/)) {
            isValid = false;
            $("#fullname").next().text("INVALID.");
        }

        if (isValid) {
            // code that saves profile info goes here


            // go to profile page
            location.href = "emailmessage.html";
        }

        $("#email").focus();
    });*/



})
