var value;

function admSelectCheck2(nameSelect)
{
    console.log(nameSelect);
    if(nameSelect){
        admOptionValue = document.getElementById("Programmer").value;
        if(admOptionValue == nameSelect.value){
            document.getElementById("Programming").style.display = "block";
        }
        else{
            document.getElementById("Programming").style.display = "none";
        }
    }
    else{
        document.getElementById("Programming").style.display = "none";
    };
}

function admSelectCheck(nameSelect)
{
    console.log(nameSelect);
    if(nameSelect){
        admOptionValue = document.getElementById("web2").value;
        if(admOptionValue == nameSelect.value){
            document.getElementById("web3").style.display = "block";
        }
        else{
            document.getElementById("web3").style.display = "none";
        }
    }
    else{
        document.getElementById("web3").style.display = "none";
    };
    if(nameSelect){
        admOptionValue = document.getElementById("software2").value;
        if(admOptionValue == nameSelect.value){
            document.getElementById("software3").style.display = "block";
        }
        else{
            document.getElementById("software3").style.display = "none";
        }
    }
    else{
        document.getElementById("software").style.display = "none";
    };
    if(nameSelect){
        admOptionValue = document.getElementById("games2").value;
        if(admOptionValue == nameSelect.value){
            document.getElementById("games3").style.display = "block";
        }
        else{
            document.getElementById("games3").style.display = "none";
        }
    }
    else{
        document.getElementById("games3").style.display = "none";
    }
};


function Update1(){
    var Web = document.getElementById('Profession');
    var index = Web.options[Web.selectedIndex].value;

    if (index == 1){
        value = 5;
    }
    else{
        value = 0;
    };

    var Age = document.getElementById('Age');
    var index2 = Age.options[Age.selectedIndex].value;

    if (index2 == 9){
        value = 10;
    }
    else{
        value = 0;
    };


    var Direction = document.getElementById('direction');
    var index3 = Direction.options[Direction.selectedIndex].value;

    if (index3 == 13){
        value = 15;
    }
    else{
        value = 0;
    };


    var Web2 = document.getElementById('Web');
    var index4 = Web2.options[Web2.selectedIndex].value;

    if (index4 == 14){
        value = 20;
    }
    else{
        value = 0;
    };


    var Knowledge = document.getElementById('Knowledge');
    var index5 = Knowledge.options[Knowledge.selectedIndex].value;

    if (index5 == 15){
        value = 25;
    }
    else{
        value = 0;
    };


    var City = document.getElementById('City');
    var index6 = City.options[City.selectedIndex].value;

    if (index6 == 16){
        value = 30;
    }
    else{
        value = 0;
    };

    var Money = document.getElementById('Money');
    var index7 = Money.options[Money.selectedIndex].value;

    if (index7 == 27){
        value = 35;
    }
    else{
        value = 0;
    };

    if(value == 35){
            document.getElementById("Front-End-Medium").style.display = "block";
        }
        else{
            document.getElementById("Front-End-Medium").style.display = "none";
        }

    console.log(value)
    return value
};

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

