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
    //October
    var address = getElementVal('myAddress');
    var phone1 = getElementVal('myPhone1');
    var phone2 = getElementVal('myPhone2');
    var facebook1 = getElementVal('myFacebook1');
    var facebook2 = getElementVal('myFacebook2');
    var email = getElementVal('myEmail');
    //November
    var comment = getElementVal('myComment');
    var linkUrl = getElementVal('picLink');
    var myKh = getElementVal('myKhname');

    window.location.reload();
    saveData(name,id,sex,grade,address,phone1,phone2,
      facebook1,facebook2,email,comment,linkUrl,myKh);

  }
const saveData = (name,id,sex,grade,
  address,phone1,phone2,
  facebook1,facebook2,email,
  comment,linkUrl,myKh) => {
    var newData = my5aAll.push();
    newData.set({
        name: name,
        id: id,
        sex: sex,
        grade: grade,
        address: address,
        phone1: phone1,
        phone2: phone2,
        facebook1: facebook1,
        facebook2: facebook2,
        email: email,
        comment: comment,
        linkUrl: linkUrl,
        myKh: myKh,
    });
};
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
function selectAllData(){
  document.getElementById('tbody5A').innerHTML="";
  studentN0=0;
  firebase.database().ref('5aAllData').once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(CurrentRecord){
        var name = CurrentRecord.val().name;
        var id = CurrentRecord.val().id;
        var sex = CurrentRecord.val().sex;
        var grade = CurrentRecord.val().grade;
        var address = CurrentRecord.val().address;
        var phone1 = CurrentRecord.val().phone1;
        var phone2 = CurrentRecord.val().phone2;
        var facebook1 = CurrentRecord.val().facebook1;
        var facebook2 = CurrentRecord.val().facebook2;
        var email = CurrentRecord.val().email;
      var comment = CurrentRecord.val().comment;
      var linkUrl = CurrentRecord.val().linkUrl;
      var myKh = CurrentRecord.val().myKh;

        addItemsToTable(name,id,sex,grade,
          address,phone1,phone2,
          facebook1,facebook2,email,
          comment,linkUrl,myKh);
      }
    );
  });
}
window.onload = selectAllData;
var studentN0;
var stdList = [];
function addItemsToTable(name,id,sex,grade,
  address,phone1,phone2,
  facebook1,facebook2,email,
  comment,linkUrl,myKh){
  var tbody = document.getElementById('tbody5A');
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
  var td10 = document.createElement('td');
  var td11 = document.createElement('td');
  var td12 = document.createElement('td');

  stdList.push([name,id,sex,grade,
    address,phone1,phone2,
    facebook1,facebook2,email,
    comment,linkUrl,myKh]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = name;
  td2.innerHTML = myKh;
  td3.innerHTML = id;
  td4.innerHTML = sex;
  td5.innerHTML = grade;
  td6.innerHTML = address;
  td7.innerHTML = phone1;
  td8.innerHTML = phone2;
  td9.innerHTML = facebook1;
  td10.innerHTML = facebook2;
  td11.innerHTML = email;
  td12.innerHTML = comment;




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
  trow.appendChild(td10);
  trow.appendChild(td11);
  trow.appendChild(td12);

  td1.innerHTML = `<button type="button" class="button-6" role="button" data-toggle="modal" data-target="#exampleModal" onclick="Fillbox(${studentN0})">${name}</button>`;
  td2.innerHTML = `<button type="button" class="button-6" role="button" data-toggle="modal" data-target="#exampleModal" onclick="Fillbox(${studentN0})">${myKh}</button>`;

  tbody.appendChild(trow);
}

var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var Mgrade = document.getElementById('myGrade');
var Maddress = document.getElementById('myAddress');
var Mphone1 = document.getElementById('myPhone1');
var Mphone2 = document.getElementById('myPhone2');
var Mfacebook1 = document.getElementById('myFacebook1');
var Mfacebook2 = document.getElementById('myFacebook2');
var Memail = document.getElementById('myEmail');
var Mcomment = document.getElementById('myComment');
var MlinkUrl = document.getElementById('picLink');
var MmyKh = document.getElementById('myKhname');

var BtnSubmit = document.getElementById('mySubmit');
var BtnUpdate = document.getElementById('myUpdate');
var BtnDele = document.getElementById('myDele');
var BtnClearBox = document.getElementById('myClearBox');
var BtnClearAll = document.getElementById('myClearAll');


function Fillbox(index){
  if(index==null){
    BtnSubmit.style.display='inline-block';
    BtnUpdate.style.display='none';
    BtnDele.style.display='none';
  }
  else{
    --index;
    Mname.value = stdList[index][0];
    Mid.value = stdList[index][1];
    Msex.value = stdList[index][2];
    Mgrade.value = stdList[index][3];
    Maddress.value = stdList[index][4];
    Mphone1.value = stdList[index][5];
    Mphone2.value = stdList[index][6];
    Mfacebook1.value = stdList[index][7];
    Mfacebook2.value = stdList[index][8];
    Memail.value = stdList[index][9];
    Mcomment.value = stdList[index][10];
    MlinkUrl.value = stdList[index][11];
    MmyKh.value = stdList[index][12];
    myPicAdd();
    BtnSubmit.style.display='none';
    BtnUpdate.style.display='inline-block';
    BtnDele.style.display='inline-block';


  }
}
function NewBox(){
    BtnSubmit.style.display='inline-block';
    BtnUpdate.style.display='none';
    BtnDele.style.display='none';
  var Mname = document.getElementById('myName');
  var Mid = document.getElementById('myID');
  var Msex = document.getElementById('mySex');
  var Mgrade = document.getElementById('myGrade');
  var Maddress = document.getElementById('myAddress');
  var Mphone1 = document.getElementById('myPhone1');
  var Mphone2 = document.getElementById('myPhone2');
  var Mfacebook1 = document.getElementById('myFacebook1');
  var Mfacebook2 = document.getElementById('myFacebook2');
  var Memail = document.getElementById('myEmail');
  var Mcomment = document.getElementById('myComment');
  var MlinkUrl = document.getElementById('picLink');
  var MmyKh = document.getElementById('myKhname');
     
  Mname.value = "";
  Mid.value =  "";
  Msex.value =  "";
  Mgrade.value =  "";
  Maddress.value =  "";
  Mphone1.value =  "";
  Mphone2.value =  "";
  Mfacebook1.value =  "";
  Mfacebook2.value =  "";
  Memail.value =  "";
  Mcomment.value =  "";
  MlinkUrl.value =  "";
  MmyKh.value =  "";
}

function AddStd(){
  firebase.database().ref("5aAllData/"+Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      grade: Mgrade.value,
      address: Maddress.value,
      phone1: Mphone1.value,
      phone2: Mphone2.value,
      facebook1: Mfacebook1.value,
      facebook2: Mfacebook2.value,
      email: Memail.value,
      comment: Mcomment.value,
      linkUrl: MlinkUrl.value,
      myKh: MmyKh.value,
    }, 
  )
  selectAllData();
  window.location.reload();

}
function UpStd(){
  firebase.database().ref("5aAllData/"+Mid.value).update(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      grade: Mgrade.value,
      address: Maddress.value,
      phone1: Mphone1.value,
      phone2: Mphone2.value,
      facebook1: Mfacebook1.value,
      facebook2: Mfacebook2.value,
      email: Memail.value,
      comment: Mcomment.value,
      linkUrl: MlinkUrl.value,
      myKh: MmyKh.value,

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
//Clear text in Box
function clearBox(){
  document.getElementById('myAddress').value = "";
  document.getElementById('myPhone1').value = "";
  document.getElementById('myPhone2').value = "";
  document.getElementById('myFacebook1').value = "";
  document.getElementById('myFacebook2').value = "";
  document.getElementById('myEmail').value = "";
  document.getElementById('myComment').value = "";
document.getElementById('picLink').value = "";


}
function clearAll(){
  document.getElementById('myName').value = "";
  document.getElementById('myID').value = "";
  document.getElementById('mySex').value = "";
  document.getElementById('myAddress').value = "";
  document.getElementById('myPhone1').value = "";
  document.getElementById('myPhone2').value = "";
  document.getElementById('myFacebook1').value = "";
  document.getElementById('myFacebook2').value = "";
  document.getElementById('myEmail').value = "";
  document.getElementById('myComment').value = "";
document.getElementById('picLink').value = "";
document.getElementById('myKhname').value = "";

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

function myPicAdd(){
  var img = document.getElementById("imgView");
  var inputLink = document.getElementById("picLink");
  var getLink = inputLink.value;
  if(getLink === undefined){
    img.src = "";
  }else{
    img.src = getLink;
  }
}

$("input[name='phone']").keyup(function() {
  $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d+)$/, "($1)$2-$3"));
});

$('#tbody5A').find('th, td').each(function(){
  if(!this.previousElementSibling){ //New Row?
      row = [];
      results.push(row);
  }
  if(!(this.textContent == '')){
      row.push(this.textContent || this.innerText);            
  }
}); 