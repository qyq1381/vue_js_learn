window.onload = function () {
    let zip = document.getElementById("zipcode");
    let year = document.getElementById("yearId");
    let make1 = document.getElementById("makeId1");
    let make2 = document.getElementById("makeId2");
    let make3 = document.getElementById("makeId3");
    let submitbutton = document.getElementById("submitbutton");

    let yearObj = {
        0: "Aston Martin",
        1: "Bentley"
    };

    let AstonObj = {
        0: "DB11 Convertible",
        1: "DB11 Coupe",
        2: "V12 Vantage Convertible",
        3: "V12 Vantage Coupe"
    };

    let BentleyObj = {
        0: "Bentayga",
        1: "Mulsanne"
    };

    let TrimObj = {
        0: "base",
        1: "Long Wheelbase",
        2: "Speed Long Wheelbase",
        3: "Speed"
    };

    
    create_year_options(year, 2020, 2018);
    //create_make_options(make1, yearObj);
    make1.disabled = true;
    make2.disabled = true;
    make3.disabled = true;

    submitbutton.onclick=function(){
        submitvalue(year.value,make1.value,make2.value,make3.value,zip.value);
        let section1_box = document.getElementById("sectionone_box");
        section1_box.style.setProperty("-webkit-transform","translateX(-50%)");  
        section1_box.style.setProperty("transform","translateX(-50%)");       
        section1_box.style.setProperty("-webkit-transition","1s all ease");      
        section1_box.style.setProperty("transition","1s all ease");
    }
    zip.oninput = function () {
        check("zipcode");
    }
    year.onchange = function () {

        make1.value="Make";
        make2.value="Model";
        make3.value="Trim";
        make1.disabled = false;
        make2.disabled = true;
        make3.disabled = true;


        make1.length = 1;
        make2.length = 1;
        make3.length = 1;
        make1.disabled = false;
        create_make_options(make1, yearObj);
    }
    make1.onchange = function(){
        if(make1.value === "Aston Martin"){
            make2.length = 1;
            make3.length = 1;
            make2.disabled = false;
            create_make_options(make2, AstonObj);
        }
        else if(make1.value=== "Bentley"){
            make2.length = 1;
            make3.length = 1;
            make2.disabled = false;
            create_make_options(make2, BentleyObj);
          }
};

make2.onchange = function () {
    make3.length = 1;
    make3.disabled = false;
    create_make_options(make3, TrimObj);
}

};

alert(make1.options[make1.selectedIndex].value);
function length(obj) {
    let count = 0;
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            count++;
        };
    };
    return count;
}

function check(x) {
    let zipstr = document.getElementById(x).value;
    let newstr = "";
    newstr = zipstr.replace(/[^0-9]/ig, "");
    document.getElementById(x).value = newstr;
};
function create_year_options(year, startyear, endyear) {
    if (!startyear || !endyear) {
        return true;
    }
    let step = (startyear > endyear) ? -1 : 1;
    for (let i = startyear; i !== endyear; i = i + step) {
        let option = new Option(i.toString(), i.toString(), false, false);
        year.appendChild(option);
    }
    let option = new Option(endyear.toString(), endyear.toString(), false, false);
    year.appendChild(option);
};
function create_make_options(make, makeObj) {

    for (let i = 0; i < length(makeObj); i++) {
        let option = new Option(makeObj[i], makeObj[i], false, false);
        make.appendChild(option);

    }

};

//submit part
function getXMLHttpRequest() {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    return xmlhttp;
}
function submitvalue(year_v,make1_v,make2_v,make3_v,zip_v) {
    var xmlhttp = getXMLHttpRequest();
    var data = {
        "year": year_v,
        "make1": make1_v,
        "make2": make2_v,
        "make3": make3_v,
        "zip": zip_v,
    }
    var stringData = JSON.stringify(data);
    xmlhttp.open("POST", "mongodb://localhost:27017/", true);
    xmlhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    alert(stringData);
    xmlhttp.send(stringData);
}
