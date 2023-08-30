const flatTable=document.getElementById("flat-table");
const javaTable=document.getElementById("java-table");
const osTable=document.getElementById("os-table");
const dbmsTable=document.getElementById("dbms-table");
const seTable=document.getElementById("se-table");
const dbmsLabTable=document.getElementById("DBMS-Lab-table");
const osLabTable=document.getElementById("OS-Lab-table");
const JavaLabTable=document.getElementById("Java-lab-table");

// const flatBtn=document.getElementById("flat-btn");
// const javaBtn=document.getElementById("java-btn");
// const osBtn=document.getElementById("os-btn");
// const dbmsBtn=document.getElementById("dbms-btn");
// const seBtn=document.getElementById("se-btn");

function showFlat(){
    flatTable.style.display="block";
    javaTable.style.display="none";
    osTable.style.display="none";
    dbmsTable.style.display="none";
    seTable.style.display="none";
    dbmsLabTable.style.display="none";
    osLabTable.style.display="none";
    JavaLabTable.style.display="none";
}
function showJava(){
    flatTable.style.display="none";
    javaTable.style.display="block";
    osTable.style.display="none";
    dbmsTable.style.display="none";
    seTable.style.display="none";
    dbmsLabTable.style.display="none";
    osLabTable.style.display="none";
    JavaLabTable.style.display="none";
}
function showOs(){
    flatTable.style.display="none";
    javaTable.style.display="none";
    osTable.style.display="block";
    dbmsTable.style.display="none";
    seTable.style.display="none";
    dbmsLabTable.style.display="none";
    osLabTable.style.display="none";
    JavaLabTable.style.display="none";
}
function showDbms(){
    flatTable.style.display="none";
    javaTable.style.display="none";
    osTable.style.display="none";
    dbmsTable.style.display="block";
    seTable.style.display="none";
    dbmsLabTable.style.display="none";
    osLabTable.style.display="none";
    JavaLabTable.style.display="none";
}
function showSe(){
    flatTable.style.display="none";
    javaTable.style.display="none";
    osTable.style.display="none";
    dbmsTable.style.display="none";
    seTable.style.display="block";
    dbmsLabTable.style.display="none";
    osLabTable.style.display="none";
    JavaLabTable.style.display="none";
}
function showDbManual(){
    flatTable.style.display="none";
    javaTable.style.display="none";
    osTable.style.display="none";
    dbmsTable.style.display="none";
    seTable.style.display="none";
    dbmsLabTable.style.display="block";
    osLabTable.style.display="none";
    JavaLabTable.style.display="none";
}
function showOsManual(){
    flatTable.style.display="none";
    javaTable.style.display="none";
    osTable.style.display="none";
    dbmsTable.style.display="none";
    seTable.style.display="none";
    dbmsLabTable.style.display="none";
    osLabTable.style.display="block";
    JavaLabTable.style.display="none";
}
function showJavaManual(){
    flatTable.style.display="none";
    javaTable.style.display="none";
    osTable.style.display="none";
    dbmsTable.style.display="none";
    seTable.style.display="none";
    dbmsLabTable.style.display="none";
    osLabTable.style.display="none";
    JavaLabTable.style.display="block";
}
////////////////////////////////////Popup alert in page open/////////////////////////
function closePopup(n){
    document.getElementById(`popup${n}`).style.display = "none" ;  //makes the popup invisible when clicked outside of it
}

const popAlert1 = document.querySelector(".popAlert1");
popAlert1.style.display="none";
const popAlert2 = document.querySelector(".popAlert2");
popAlert2.style.display="none";
const popAlert3 = document.querySelector(".popAlert3");
popAlert3.style.display="none";

// popmsg storing with cookies
const popMsgs=["PopMsgAlert1","PopMsgAlert2", "PopMsgAlert3"];


//Running foreach loop for each msg stored or not
popMsgs.forEach((msg,index)=>{
    this.msg=msg;
    //Function for has seen popbox or not
    function hasSeenAlert(msg) {
            return localStorage.getItem(msg) === "true";
    }
    if(!hasSeenAlert(msg)){
    const popAlert = document.querySelector(`.popAlert${index + 1}`);
    popAlert.style.display="flex";
    localStorage.setItem(msg, "true");
    document.cookie = `${msg}=true; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}
});
const allCookies = document.cookie;
console.log(allCookies);

