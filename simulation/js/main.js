var enableButton=document.getElementById("enable");
var purzeButton=document.getElementById("purze")
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg=document.getElementById("Layer_1");
var readingSelection = document.getElementById("readingSelect")
var count=0
window.appData = window.appData || {};
window.appData.powerFlag = false;

// get the id for the flow of water
var w1=document.getElementById("Water_1")
var w2=document.getElementById("Water_2_00000178177592295888132300000003812885317886448053_")
var w3=document.getElementById("Water_3")
var w4=document.getElementById("Water_4_00000018221326492914578470000014473808141724045220_")
var w5=document.getElementById("Water_5_00000121246892066337760400000013494994064657416380_")
var w6=document.getElementById("Water_6_00000168117311549382392820000000397660189640725679_")
var w7=document.getElementById("Water_7_00000154414897353839577140000002405472591546814366_")
var w8 = document.getElementById("Water_8_00000181053212070445114170000008715850457176008092_")
var w9 = document.getElementById("Water_7_00000116915602419580169140000007126847451848705453_")
var w10=document.getElementById("Water_7")
var w11=document.getElementById("Water_8")

var vr = document.getElementById("Verturimeter_Water_Right")
var mwl = document.getElementById("Verturimeter_Water_Left_00000035524620157501483550000011411495042354387355_")
var vl = document.getElementById("Water_4_00000046320982811315112380000003719977335309594753_")
var vt = document.getElementById("Verturimeter_Water_Left_00000178885341859872004860000018022799912391431084_")
var mwr = document.getElementById("Verturimeter_Water_Right_00000068643826572147975590000011604526973254985363_")
var sW2=document.getElementById("Main_Jet")
var turbine = document.getElementById("Kaplan_Turbine")
var turbineWater1 = document.getElementById("turbine_water1")
var turbineWater2 = document.getElementById("turbine_water2")
var rpmText = document.getElementById("rpm-text")
var h1Text = document.getElementById("h1-text")
var h2Text = document.getElementById("h2-text")
var vpgrText = document.getElementById("vacuum-pressure-guage-reading-text")
var pgrText = document.getElementById("pressure-guage-reading-text")
var voltmeterText = document.getElementById("voltmeter-text")
var ammeterText = document.getElementById("ammeter-text")

function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        document.getElementById("steps").innerHTML="Please wait until the water reaches the Flow Opening Valve."
        enableButton.textContent = "POWER OFF"
        count=1
        waterFlow1()
    }else{
        if(!window.appData.powerFlag){
            alert("Please complete the experiment to turn power off!");
            count=1
        }else{
            location.reload()
        }
    }
}

function waterFlow1(){
    w1.style.opacity="1"
    var currentwidth = parseFloat(w1.getAttribute("width"))
    if (currentwidth < 140.1) {
        currentwidth += 3;
        w1.setAttribute("width", currentwidth);
        setTimeout(waterFlow1, 20); 
    }
    waterFlow2()
}
function waterFlow2(){
    w2.setAttribute("opacity", "1")
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "22.6");
    animateElement.setAttribute("dur", "0.5s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");
    w2.appendChild(animateElement)
    animateElement.beginElement();
    setTimeout(function(){
        waterFlow3()
    },500);
}
function waterFlow3(){
    w3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "121.7");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w3.appendChild(animateElement)

    animateElement.beginElement(); 
    setTimeout(function(){
        purzeButton.disabled = false;
        document.getElementById("steps").innerHTML = "Click on Flow Valve On button."
    },3000);
}
function waterFlow4(){
    w4.setAttribute("opacity", "1")
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "298.8");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");
    w4.appendChild(animateElement)
    animateElement.beginElement();
    setTimeout(function(){
    waterFlow5()
    },2000);
}
function purzeAction(){
    waterFlow4()   
    purzeButton.disabled= true;
}
function waterFlow5(){
    w5.setAttribute("opacity", "1")
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "78.7");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("fill","freeze");
    w5.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "879.2");
    animateX.setAttribute("to", "800.5");
    animateX.setAttribute("dur", "1s");
    animateX.setAttribute("fill","freeze");

    w5.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlowmr()
        vr.setAttribute("opacity","1")
        vt.setAttribute("opacity","1")
        waterFlowml()
        vl.setAttribute("opacity","1")
        waterFlow6()    
    }, 1000);
   
}
function waterFlowmr(){
    var currentHeight = parseFloat(mwr.getAttribute("height"))
    if (currentHeight < 119.3) {
        currentHeight += 3;
        mwr.setAttribute("height", currentHeight);
            setTimeout(waterFlowmr, 10); 
        }
    }
function waterFlowml(){
    var currentHeight = parseFloat(mwl.getAttribute("height"))
    if (currentHeight < 99.1) {
        currentHeight += 3;
        mwl.setAttribute("height", currentHeight);
            setTimeout(waterFlowml, 10); 
        }
    }
function waterFlow6(){
    w6.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "547.6");
    animateElement.setAttribute("dur", "3s");
    animateElement.setAttribute("fill","freeze");

    w6.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "698.9");
    animateX.setAttribute("to", "151.3");
    animateX.setAttribute("dur", "3s");
    animateX.setAttribute("fill","freeze");

    w6.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
    waterFlow7()
    }, 3000);
    
}
function waterFlow7(){
    var currentHeight = parseFloat(w7.getAttribute("height"))
        if (currentHeight < 76.8) {
            currentHeight += 3;
            w7.setAttribute("height", currentHeight);
            setTimeout(waterFlow7, 10); 
        }
        setTimeout(function() {
            // waterFlow8()
            readingSelection.disabled= false
            document.getElementById("steps").innerHTML = "To find readings at constant head, select the constant head from the 'reading on' dropdown menu"
        }, 1000);
}
var weightflag = 0
function updatereading(){
    var selectedConstant = readingSelection.value;
    if(selectedConstant == 0){
        document.getElementById("steps").innerHTML = "Please select the value of constant quantity"
        valvePositioning.disabled= true;
    }
    else{
        document.getElementById("steps").innerHTML = "Select the value of valve positioning."
        valvePositioning.value = "0"
        valvePositioning.disabled= false;
        readingSelection.disabled = true;
    }
    reset()
}
const selectedValues = new Set();
var insFlag = false
valvePositioning.addEventListener('input', () => {
    
    const value = parseInt(valvePositioning.value);
    if(value > 0){
        selectedValues.add(value);
        if (selectedValues.size == 5) {
            insFlag = true
            selectedValues.clear();
            if(readingSelection.value == 1){
                document.getElementById("steps").innerHTML = "Now, perform the experiment for constant rpm."
            }if(readingSelection.value == 2){
                document.getElementById("steps").innerHTML = "Now, perform the experiment for constant head."
            }
        }
        valvePositioning.disabled = true
        waterFlow8()
    }else{
        insFlag = false
    }
});
function waterFlow8(){
    w8.setAttribute("opacity","1")
    var currentHeight = parseFloat(w8.getAttribute("height"))
        if (currentHeight < 378.8) {
            currentHeight += 5;
            w8.setAttribute("height", currentHeight);
            setTimeout(waterFlow8, 20); 
        }
    setTimeout(function() {
            waterFlow9()
          }, 1500)
}
function waterFlow9(){
    w9.setAttribute("opacity","1")
    var currentwidth = parseFloat(w9.getAttribute("width"))
        if (currentwidth < 39.6) {
            currentwidth += 5;
            w9.setAttribute("width", currentwidth);
            setTimeout(waterFlow9, 10); 
        }
    setTimeout(function() {
            waterFlow10()
          }, 500)
}
function waterFlow10(){
    sW2.setAttribute("opacity","1")
    var currentwidth = parseFloat(sW2.getAttribute("width"))
        if (currentwidth < 114.4) {
            currentwidth += 5;
            sW2.setAttribute("width", currentwidth);
            setTimeout(waterFlow10, 30); 
        }
    setTimeout(function() {
            rotateImage()
            turbineWater1.setAttribute("opacity","1")
            turbineWater2.setAttribute("opacity","1")
            waterFlow11()
          }, 500)
}
function waterFlow11(){
    w10.setAttribute("opacity","1")
    var currentwidth = parseFloat(w10.getAttribute("width"))
        if (currentwidth < 88) {
            currentwidth += 5;
            w10.setAttribute("width", currentwidth);
            setTimeout(waterFlow11, 10); 
        }
    setTimeout(function() {
        w11.setAttribute("opacity","1")
        }, 1000)
    setTimeout(function() {
        if(readingSelection.value == "1"){
            if(valvePositioning.value == 1){
                rpmText.textContent = "1700"
                h1Text.textContent = "450"
                h2Text.textContent = "595"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.5 kg/cm^2"
                voltmeterText.textContent = "170.00 V"
                ammeterText.textContent = "0.03 A"
            }if(valvePositioning.value == 2){
                rpmText.textContent = "1570"
                h1Text.textContent = "450"
                h2Text.textContent = "595"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.5 kg/cm^2"
                voltmeterText.textContent = "175.00 V"
                ammeterText.textContent = "1.35 A"
            }if(valvePositioning.value == 3){
                rpmText.textContent = "1445"
                h1Text.textContent = "450"
                h2Text.textContent = "595"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.5 kg/cm^2"
                voltmeterText.textContent = "162.00 V"
                ammeterText.textContent = "2.56 A"
            }if(valvePositioning.value == 4){
                rpmText.textContent = "1365"
                h1Text.textContent = "450"
                h2Text.textContent = "595"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.5 kg/cm^2"
                voltmeterText.textContent = "150.00 V"
                ammeterText.textContent = "3.62 A"
            }if(valvePositioning.value == 5){
                rpmText.textContent = "1295"
                h1Text.textContent = "450"
                h2Text.textContent = "595"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.5 kg/cm^2"
                voltmeterText.textContent = "138.00 V"
                ammeterText.textContent = "4.92 A"
            }
        }
        if(readingSelection.value == "2"){
            if(valvePositioning.value == 1){
                rpmText.textContent = "1700"
                h1Text.textContent = "460"
                h2Text.textContent = "595"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.5 kg/cm^2"
                voltmeterText.textContent = "170.00 V"
                ammeterText.textContent = "0.03 A"
            }if(valvePositioning.value == 2){
                rpmText.textContent = "1700"
                h1Text.textContent = "435"
                h2Text.textContent = "600"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.55 kg/cm^2"
                voltmeterText.textContent = "205.00 V"
                ammeterText.textContent = "1.56 A"
            }if(valvePositioning.value == 3){
                rpmText.textContent = "1700"
                h1Text.textContent = "430"
                h2Text.textContent = "610"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.65 kg/cm^2"
                voltmeterText.textContent = "210.00 V"
                ammeterText.textContent = "3.3 A"
            }if(valvePositioning.value == 4){
                rpmText.textContent = "1700"
                h1Text.textContent = "420"
                h2Text.textContent = "625"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.75 kg/cm^2"
                voltmeterText.textContent = "215.00 V"
                ammeterText.textContent = "5.10 A"
            }if(valvePositioning.value == 5){
                rpmText.textContent = "1700"
                h1Text.textContent = "410"
                h2Text.textContent = "630"
                vpgrText.textContent = "00 mm of Hg"
                pgrText.textContent = "0.85 kg/cm^2"
                voltmeterText.textContent = "210.00 V"
                ammeterText.textContent = "6.70 A"
            }
        }
        if(insFlag == true){
            document.getElementById("steps").innerHTML = "Now change the constant parameter."
            readingSelection.disabled = false
            insFlag = false
        }else{
            document.getElementById("steps").innerHTML = "Now, Use further readings to calculate efficiency and select another value of valve positioning."
            valvePositioning.disabled = false
        }
        
    }, 1500)
}
function rotateImage() {
    turbine.style.transformOrigin = `330.5px 460.5px`; 
    turbine.style.animation = "rotate 3s linear infinite";

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
    @keyframes rotate {
        from {
        transform: rotate(360deg);
        }
        to {
        transform: rotate(0deg);
        }
    }
    `, styleSheet.cssRules.length);
}
function updateValvePositioning(){
    reset()
    waterFlow8()
    valvePositioning.disabled = true;
    document.getElementById("steps").innerHTML = "Wait for the readings."
}

function reset(){
    w8.setAttribute("height","0")
    w9.setAttribute("opacity","0")
    w9.setAttribute("width","0")
    sW2.setAttribute("opacity","0")
    sW2.setAttribute("width","0")
    w10.setAttribute("width","0")
    w11.setAttribute("opacity","0")
    w11.setAttribute("height","0")
    turbineWater1.setAttribute("opacity","0")
    turbineWater2.setAttribute("opacity","0")
    turbine.style.animation = "none";
    rpmText.textContent = "00"
    h1Text.textContent = "00"
    h2Text.textContent = "00"
    vpgrText.textContent = "00 mm of Hg"
    pgrText.textContent = "0.0 kg/cm^2"
    voltmeterText.textContent = "00.00 V"
    ammeterText.textContent = "00.00 A"

}