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

  var my5aoct = firebase.database().ref('2ndSemester5A');

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
  firebase.database().ref('2ndSemester5A').once('value',
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
  td1.innerHTML = `<button type="button" class="button-6" role="button" data-toggle="modal" data-target="#exampleModal" onclick="Fillbox(${studentN0})">${name}</button>`;

  tbody.appendChild(trow);
}

var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var Mspeaking = document.getElementById('mySpeaking');
var Mwriting = document.getElementById('myWriting');


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

    BtnClearAll.style.display='none';
    BtnSubmit.style.display='none';
    BtnUpdate.style.display='inline-block';
    BtnDele.style.display='inline-block';
    BtnClearBox.style.display='inline-block';
  }
}

function AddStd(){
  firebase.database().ref("2ndSemester5A/"+Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
  }, 
  )
  selectAllData();
  window.location.reload();

}
function UpStd(){
  firebase.database().ref("2ndSemester5A/"+Mid.value).update(
    {
      name: Mname.value,
      sex: Msex.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
    }, 
  )
  selectAllData();
  window.location.reload();

}
function DelStd(){
  firebase.database().ref("2ndSemester5A/"+Mid.value).remove().then(
    function(){
      selectAllData();
      window.location.reload();
   
    }
  )


}
function DelStdAll(){
  firebase.database().ref("2ndSemester5A").remove();

      window.location.reload();
}

function adder() {
  var num1 = parseInt(document.getElementById("contactForm").elements["num1"].value);
  var total = num1 / 4;
  document.getElementById("myWriting").value = total;

}

function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById('input5aOct');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
    XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}
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
  