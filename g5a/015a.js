const firebaseConfig = {
    apiKey: "AIzaSyAOX5I_BB9soXF4yHMp9NCPVk2Z-d3DEPE",
    authDomain: "teachingrecord-6b575.firebaseapp.com",
    databaseURL: "https://teachingrecord-6b575-default-rtdb.firebaseio.com",
    projectId: "teachingrecord-6b575",
    storageBucket: "teachingrecord-6b575.appspot.com",
    messagingSenderId: "1097574891233",
    appId: "1:1097574891233:web:d69ed85c4f4b83daad41a0"
  };
  
  firebase.initializeApp(firebaseConfig);

  var my5aoct = firebase.database().ref('15aOct');

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal('myName');
    var id = getElementVal('myID');
    var sex = getElementVal('mySex');
    var speaking = getElementVal('mySpeaking');
    var writing = getElementVal('myWriting');
    var listening = getElementVal('myListening');
    var reading = getElementVal('myReading');
    var average = getElementVal('myAverage');
    var other = getElementVal('myOther');
    window.location.reload();

    saveData(name,id,sex,speaking,writing,listening,reading,average,other);

  }
const saveData = (name,id,sex,speaking,writing,listening,reading,average,other) => {
    var newData = my5aoct.push();
    newData.set({
        name: name,
        id: id,
        sex: sex,
        speaking: speaking,
        writing: writing,
        listening: listening,
        reading: reading,
        average: average,
        other: other,
    });
};
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
function selectAllData(){
  document.getElementById('tbody1').innerHTML="";
  studentN0=0;
  firebase.database().ref('15aOct').once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(CurrentRecord){
        var name = CurrentRecord.val().name;
        var id = CurrentRecord.val().id;
        var sex = CurrentRecord.val().sex;
        var speaking = CurrentRecord.val().speaking;
        var writing = CurrentRecord.val().writing;
        var listening = CurrentRecord.val().listening;
        var reading = CurrentRecord.val().reading;
        var average = CurrentRecord.val().average;
        var other = CurrentRecord.val().other;
        addItemsToTable(name,id,sex,speaking,writing,listening,reading,average,other);
        addClassAndId();
      }
    );
  });
}
window.onload = selectAllData;
var studentN0;
var stdList = [];
function addItemsToTable(name,id,sex,speaking,writing,listening,reading,average,other){
  var tbody = document.getElementById('tbody1');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');
  var td9 = document.createElement('td');

  stdList.push([name,id,sex,speaking,writing,listening,reading,average,other]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = name;
  td2.innerHTML = id;
  td3.innerHTML = sex;
  td4.innerHTML = speaking;
  td5.innerHTML = writing;
  td6.innerHTML = listening;
  td7.innerHTML = reading;
  td8.innerHTML = average;
  td9.innerHTML = other;


  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(td9);
  td1.innerHTML = `<button type="button" class="button-6" role="button" data-toggle="modal" data-target="#exampleModal" onclick="Fillbox(${studentN0})">${name}</button>`;
 var total =  parseInt(speaking) + parseInt(writing) + parseInt(listening) + parseInt(reading);
  td8.innerHTML = total / 4;
  document.getElementById("myAverage").value = td8;
  $(function() {
    //Get all total values, sort and remove duplicates
    let totalList = $('.myScore')
      .map(function() {return $(this).text()})
      .get()
      .sort(function(a,b){return a - b })
      .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
    //Assign rank
    totalList.forEach((v, i) => {
      $('.myScore').filter(function() {return $(this).text() == v;}).next().text(i + 1);
    })
  });
  

  tbody.appendChild(trow);
}
function addClassAndId(){
  var els = document.querySelectorAll("#input5aOct td:nth-child(9)");
  var len = els.length;
  for(var i = 0, len = els.length; i < len ; i++){
      els[i].classList.add("myScore"); //To add class on top of existing ones
  }
}

function selectAllDataPrint(){
  document.getElementById('tbody2').innerHTML="";
  stdNumber=0;
  firebase.database().ref('15aOct').once('value',
  function(AllRecordsPrint){
    AllRecordsPrint.forEach(
      function(CurrentRecord){
        var name = CurrentRecord.val().name;
        var sex = CurrentRecord.val().sex;
        var speaking = CurrentRecord.val().speaking;
        var writing = CurrentRecord.val().writing;
        var listening = CurrentRecord.val().listening;
        var reading = CurrentRecord.val().reading;
        var average = CurrentRecord.val().average;
        var other = CurrentRecord.val().other;

        addItemsToPrint(name,sex,speaking,writing,listening,reading,average,other);
      }
    );
  });
}

var stdNumber;
var stdListPrint = [];
function addItemsToPrint(name,sex,speaking,writing,listening,reading,average,other){
  var tbody = document.getElementById('tbody2');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');

  stdListPrint.push([name,sex,speaking,writing,listening,reading,average,other]);
  td0.innerHTML = ++stdNumber;
  td1.innerHTML = name;
  td2.innerHTML = sex;
  td3.innerHTML = speaking;
  td4.innerHTML = writing;
  td5.innerHTML = listening;
  td6.innerHTML = reading;
  td7.innerHTML = average;
  td8.innerHTML = other;


  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);
  td1.innerHTML = `<button type="button" class="button-6" role="button" data-toggle="modal" data-target="#exampleModal" onclick="Fillbox(${studentN0})">${name}</button>`;
  

  tbody.appendChild(trow);
}




var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var Mspeaking = document.getElementById('mySpeaking');
var Mwriting = document.getElementById('myWriting');
var Mlistening = document.getElementById('myListening');
var Mreadiing = document.getElementById('myReading');
var Maverage = document.getElementById('myAverage');
var Mother = document.getElementById('myOther');


var BtnSubmit = document.getElementById('mySubmit');
var BtnUpdate = document.getElementById('myUpdate');
var BtnDele = document.getElementById('myDele');
var BtnClearBox = document.getElementById('myClearBox');
var BtnClearAll = document.getElementById('myClearAll');



function Fillbox(index){
  if(index==null){
    BtnSubmit.style.display='inline-block';
    BtnClearAll.style.display='inline-block';
    BtnUpdate.style.display='none';
    BtnDele.style.display='none';
    BtnClearBox.style.display='none';
  }
  else{
    --index;
    Mname.value = stdList[index][0];
    Mid.value = stdList[index][1];
    Msex.value = stdList[index][2];
    Mspeaking.value = stdList[index][3];
    Mwriting.value = stdList[index][4];
    Mlistening.value = stdList[index][5];
    Mreadiing.value = stdList[index][6];
    Maverage.value = stdList[index][7];
    Mother.value = stdList[index][8];

    BtnClearAll.style.display='none';
    BtnSubmit.style.display='none';
    BtnUpdate.style.display='inline-block';
    BtnDele.style.display='inline-block';
    BtnClearBox.style.display='inline-block';


  }
}

function AddStd(){
  firebase.database().ref("15aOct/"+Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
      listening: Mlistening.value,
      reading: Mreadiing.value,
      average: Maverage.value,
      other: Mother.value,
  }, 
  )
  selectAllData();
  window.location.reload();

}
function UpStd(){
  firebase.database().ref("15aOct/"+Mid.value).update(
    {
      name: Mname.value,
      sex: Msex.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
      listening: Mlistening.value,
      reading: Mreadiing.value,
      average: Maverage.value,
      other: Mother.value,
    }, 
  )
  selectAllData();
  window.location.reload();

}
function DelStd(){
  firebase.database().ref("15aOct/"+Mid.value).remove().then(
    function(){
      selectAllData();
      window.location.reload();
   
    }
  )


}
function DelStdAll(){
  firebase.database().ref("15aOct").remove();

      window.location.reload();
}

function adder() {
 var num1 = parseInt(document.getElementById("contactForm").elements["num1"].value);
  var num2 = parseInt(document.getElementById("contactForm").elements["num2"].value);
  var num3 = parseInt(document.getElementById("contactForm").elements["num3"].value);
  var num4 = parseInt(document.getElementById("contactForm").elements["num4"].value);
  var total = num1 + num2 +num3 + num4 /4;
  document.getElementById("myAverage").value = total;
}
function divid(){
  var num5 = parseInt(document.getElementById("contactForm").elements["num5"].value);
  var score = num5;
  var get = score / 3;
  document.getElementById("myWriting").value = get;
  document.getElementById("myListening").value = get;
  document.getElementById("myReading").value = get;
}
//Save to excel
function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById('input5aOct');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
    XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}
//Clear text in Box
function clearBox(){
document.getElementById('mySpeaking').value = "";
document.getElementById('myWriting').value = "";
document.getElementById('myListening').value = "";
document.getElementById('myReading').value = "";
document.getElementById('myAverage').value = "";
document.getElementById('myOther').value = "";
document.getElementById('myScore').value = "";

}
function clearAll(){
  document.getElementById('myName').value = "";
  document.getElementById('myID').value = "";
  document.getElementById('mySex').value = "";
  document.getElementById('mySpeaking').value = "";
  document.getElementById('myWriting').value = "";
  document.getElementById('myListening').value = "";
  document.getElementById('myReading').value = "";
  document.getElementById('myAverage').value = "";
  document.getElementById('myOther').value = "";
  document.getElementById('myScore').value = "";

}
//Printing Document
function myPrint() {
  var newstr = document.getElementById("myPrintOut").innerHTML;
  var oldstr = document.body.innerHTML;
  document.body.innerHTML = newstr;
  window.print();
  document.body.innerHTML = oldstr;
  return false;
}
//Sorting without change N0
$('th:not(:first-child)').click(function(){
  var table = $(this).parents('table').eq(0)
  var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
  this.asc = !this.asc
  if (!this.asc){rows = rows.reverse()}
  for (var i = 0; i < rows.length; i++){
      $(rows[i]).find('td:first').text(i + 1);
      table.append(rows[i]);
  }
})
function comparer(index) {
  return function(a, b) {
      var valA = getCellValue(a, index), valB = getCellValue(b, index)
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
  }
}
function getCellValue(row, index){ return $(row).children('td').eq(index).text() }
//Input Text
function myInputText(){
  var inputMonth =   document.getElementById('myMonth').value;
  var inputDate =   document.getElementById('myDate').value;
  document.getElementById('textMonth').innerHTML = inputMonth;
}
