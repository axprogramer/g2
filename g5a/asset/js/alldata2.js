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

  var my5aAll = firebase.database().ref('5aAllData');

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal('myName');
    var id = getElementVal('myID');
    var sex = getElementVal('mySex');
    var grade = getElementVal('myGrade');
    //December
    var speakingDec = getElementVal('mySdec');
    var writingDec = getElementVal('myWdec');
    var listeningDec = getElementVal('myLdec');
    var readingDec = getElementVal('myRdec');
    var averageDec = getElementVal('myAdec');
    var rankDec = getElementVal('myKdec');
    //January
    var speakingJan = getElementVal('mySjan');
    var writingJan = getElementVal('myWjan');
    var listeningJan = getElementVal('myLjan');
    var readingJan = getElementVal('myRjan');
    var averageJan = getElementVal('myAjan');
    var rankJan = getElementVal('myKjan');

    window.location.reload();

    saveData(name,id,sex,grade,speakingDec,writingDec,listeningDec,
      readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
      readingJan,averageJan,rankJan);

  }
const saveData = (name,id,sex,grade,speakingDec,writingDec,listeningDec,
  readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
  readingJan,averageJan,rankJan) => {
    var newData = my5aAll.push();
    newData.set({
        name: name,
        id: id,
        sex: sex,
        grade: grade,
        speakingDec: speakingDec,
        writingDec: writingDec,
        listeningDec: listeningDec,
        readingDec: readingDec,
        averageDec: averageDec,
        rankDec: rankDec,
        //January
        speakingJan: speakingJan,
        writingJan: writingJan,
        listeningJan: listeningJan,
        readingJan: readingJan,
        averageJan: averageJan,
        rankJan: rankJan,
    });
};
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
function selectAllData(){
  document.getElementById('tbody1').innerHTML="";
  studentN0=0;
  firebase.database().ref('5aAllData').once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(CurrentRecord){
        var name = CurrentRecord.val().name;
        var id = CurrentRecord.val().id;
        var sex = CurrentRecord.val().sex;
        var grade = CurrentRecord.val().grade;
        var speakingDec = CurrentRecord.val().speakingDec;
        var writingDec = CurrentRecord.val().writingDec;
        var listeningDec = CurrentRecord.val().listeningDec;
        var readingDec = CurrentRecord.val().readingDec;
        var averageDec = CurrentRecord.val().averageDec;
        var rankDec = CurrentRecord.val().rankDec;
      //January
      var speakingJan = CurrentRecord.val().speakingJan;
      var writingJan = CurrentRecord.val().writingJan;
      var listeningJan = CurrentRecord.val().listeningJan;
      var readingJan = CurrentRecord.val().readingJan;
      var averageJan = CurrentRecord.val().averageJan;
      var rankJan = CurrentRecord.val().rankJan;

        addItemsToTable(name,id,sex,grade,speakingDec,writingDec,listeningDec,
          readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
          readingJan,averageJan,rankJan);
      }
    );
  });
}
window.onload = selectAllData;
var studentN0;
var stdList = [];
function addItemsToTable(speakingDec,writingDec,listeningDec,
  readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
  readingJan,averageJan,rankJan){
  var tbody = document.getElementById('tbody1');
  var trow = document.createElement('tr');
  var td17 = document.createElement('td');
  var td18 = document.createElement('td');
  var td19 = document.createElement('td');
  var td20 = document.createElement('td');
  var td21 = document.createElement('td');
  var td22 = document.createElement('td');
  var td23 = document.createElement('td');
  var td24 = document.createElement('td');
  var td25 = document.createElement('td');
  var td26 = document.createElement('td');
  var td27 = document.createElement('td');
  var td28 = document.createElement('td');


  stdList.push([speakingDec,writingDec,listeningDec,
    readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
    readingJan,averageJan,rankJan]);
  td17.innerHTML = speakingDec;
  td18.innerHTML = writingDec;
  td19.innerHTML = listeningDec;
  td20.innerHTML = readingDec;
  td21.innerHTML = averageDec;
  td22.innerHTML = rankDec;
  td23.innerHTML = speakingJan;
  td24.innerHTML = writingJan;
  td25.innerHTML = listeningJan;
  td26.innerHTML = readingJan;
  td27.innerHTML = averageJan;
  td28.innerHTML = rankJan;



  trow.appendChild(td17);
  trow.appendChild(td18);
  trow.appendChild(td19);
  trow.appendChild(td20);
  trow.appendChild(td21);
  trow.appendChild(td22);
  trow.appendChild(td23);
  trow.appendChild(td24);
  trow.appendChild(td25);
  trow.appendChild(td26);
  trow.appendChild(td27);
  trow.appendChild(td28);

  tbody.appendChild(trow);
}

//Print Function
/*
function selectAllDataPrint(){
  document.getElementById('tbody2').innerHTML="";
  stdNumber=0;
  firebase.database().ref('5aAllData').once('value',
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
        var rank = CurrentRecord.val().rank;

        addItemsToPrint(name,sex,speaking,writing,listening,reading,average,rank);
      }
    );
  });
}

var stdNumber;
var stdListPrint = [];
function addItemsToPrint(name,sex,speaking,writing,listening,reading,average,rank){
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

  stdListPrint.push([name,sex,speaking,writing,listening,reading,average,rank]);
  td0.innerHTML = ++stdNumber;
  td1.innerHTML = name;
  td2.innerHTML = sex;
  td3.innerHTML = speaking;
  td4.innerHTML = writing;
  td5.innerHTML = listening;
  td6.innerHTML = reading;
  td7.innerHTML = average;
  td8.innerHTML = rank;


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
*/

var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var Mgrade = document.getElementById('myGrade');
var Mspeaking = document.getElementById('mySoct');
var Mwriting = document.getElementById('myWoct');
var Mlistening = document.getElementById('myLoct');
var Mreadiing = document.getElementById('myRoct');
var Maverage = document.getElementById('myAoct');
var Mrank = document.getElementById('myKoct');
//November
var MspeakingNov = document.getElementById('mySnov');
var MwritingNov = document.getElementById('myWnov');
var MlisteningNov = document.getElementById('myLnov');
var MreadiingNov = document.getElementById('myRnov');
var MaverageNov = document.getElementById('myAnov');
var MrankNov = document.getElementById('myKoct');


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
    Mgrade.value = stdList[index][3];
    Mspeaking.value = stdList[index][4];
    Mwriting.value = stdList[index][5];
    Mlistening.value = stdList[index][6];
    Mreadiing.value = stdList[index][7];
    Maverage.value = stdList[index][8];
    Mrank.value = stdList[index][9];
    //November
    MspeakingNov.value = stdList[index][10];
    MwritingNov.value = stdList[index][11];
    MlisteningNov.value = stdList[index][12];
    MreadiingNov.value = stdList[index][13];
    MaverageNov.value = stdList[index][14];
    MrankNov.value = stdList[index][15];


    BtnClearAll.style.display='none';
    BtnSubmit.style.display='none';
    BtnUpdate.style.display='inline-block';
    BtnDele.style.display='inline-block';
    BtnClearBox.style.display='inline-block';


  }
}

function AddStd(){
  firebase.database().ref("5aAllData/"+Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      grade: Mgrade.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
      listening: Mlistening.value,
      reading: Mreadiing.value,
      average: Maverage.value,
      rank: Mrank.value,
      //November
      speakingNov: MspeakingNov.value,
      writingNov: MwritingNov.value,
      listeningNov: MlisteningNov.value,
      readingNov: MreadiingNov.value,
      averageNov: MaverageNov.value,
      rankNOv: MrankNov.value,

  }, 
  )
  selectAllData();
  window.location.reload();

}
function UpStd(){
  firebase.database().ref("5aAllData/"+Mid.value).update(
    {
      name: Mname.value,
      sex: Msex.value,
      grade: Mgrade.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
      listening: Mlistening.value,
      reading: Mreadiing.value,
      average: Maverage.value,
      rank: Mrank.value,
            //November
            speakingNov: MspeakingNov.value,
            writingNov: MwritingNov.value,
            listeningNov: MlisteningNov.value,
            readingNov: MreadiingNov.value,
            averageNov: MaverageNov.value,
            rankNOv: MrankNov.value,
      
    }, 
  )
  selectAllData();
  window.location.reload();

}
function DelStd(){
  firebase.database().ref("5aAllData/"+Mid.value).remove().then(
    function(){
      selectAllData();
      window.location.reload();
   
    }
  )


}
function DelStdAll(){
  firebase.database().ref("5aAllData").remove();

      window.location.reload();
}

//Divid score tables
//October
function adder() {
  var num1 = parseInt(document.getElementById('mySoct').value);
  var num2 = parseInt(document.getElementById('myWoct').value);
  var num3 = parseInt(document.getElementById('myLoct').value);
  var num4 = parseInt(document.getElementById('myRoct').value);

  var get = num1 + num2 + num3 + num4;
  var total = get / 4;
  document.getElementById("myAoct").value = total;
}
function divid(){
  var num5 = parseInt(document.getElementById('myScoreoct').value);
  var score = num5;
  var get = score / 3;
  document.getElementById("myWoct").value = get;
  document.getElementById("myLoct").value = get;
  document.getElementById("myRoct").value = get;
}

//Novmber
function adder1() {
  var num5 = parseInt(document.getElementById('mySnov').value);
  var num6 = parseInt(document.getElementById('myWnov').value);
  var num7 = parseInt(document.getElementById('myLnov').value);
  var num8 = parseInt(document.getElementById('myRnov').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  document.getElementById("myAnov").value = total1;

}
function divid1(){
  var num6 = parseInt(document.getElementById('myScorenov').value);
  var score1 = num6;
  var get2 = score1 / 3;
  document.getElementById("myWnov").value = get2;
  document.getElementById("myLnov").value = get2;
  document.getElementById("myRnov").value = get2;

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
document.getElementById('mySoct').value = "";
document.getElementById('myWoct').value = "";
document.getElementById('myLoct').value = "";
document.getElementById('myRoct').value = "";
document.getElementById('myAoct').value = "";
document.getElementById('myKoct').value = "";
document.getElementById('myScoreoct').value = "";
//November
document.getElementById('mySnov').value = "";
document.getElementById('myWnov').value = "";
document.getElementById('myLnov').value = "";
document.getElementById('myRnov').value = "";
document.getElementById('myAnov').value = "";
document.getElementById('myKnov').value = "";
document.getElementById('myScorenov').value = "";


}
function clearAll(){
  document.getElementById('myName').value = "";
  document.getElementById('myID').value = "";
  document.getElementById('mySex').value = "";
  document.getElementById('mySoct').value = "";
  document.getElementById('myWoct').value = "";
  document.getElementById('myLoct').value = "";
  document.getElementById('myRoct').value = "";
  document.getElementById('myAoct').value = "";
  document.getElementById('myKoct').value = "";
  document.getElementById('myScoreoct').value = "";
  //November
document.getElementById('mySnov').value = "";
document.getElementById('myWnov').value = "";
document.getElementById('myLnov').value = "";
document.getElementById('myRnov').value = "";
document.getElementById('myAnov').value = "";
document.getElementById('myKnov').value = "";
document.getElementById('myScorenov').value = "";


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

//Hiden Calliborate
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
