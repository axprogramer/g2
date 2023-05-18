//October
function myPrintOctober() {
  document.getElementById('tbody2').innerHTML = "";
  document.getElementById('tbody2Save').innerHTML = "";

  stdNumber = 0;
  firebase.database().ref('5aAllData').once('value',
    function (AllRecordsPrint) {
      AllRecordsPrint.forEach(
        function (CurrentRecord) {
          // addClassOct();
        }
      );
      GetData1(AllRecordsPrint);
      GetData1Save(AllRecordsPrint);

    });
}
function GetData1(datas) {
  let tbody = document.getElementById("tbody2");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speaking = data.val().speaking;
    var writing = data.val().writing;
    var listening = data.val().listening;
    var reading = data.val().reading;
    var average = data.val().average;

    students.push({
      name,
      sex,
      speaking,
      writing,
      listening,
      reading,
      average,
    });
  });

  students.sort((a, b) => b.average - a.average);

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].average;
    let studentsWithRank = students.filter(
      (student) => student.average === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    let tr = `
              <td>${No}</td>
              <td>${student.name}</td>
              <td>${student.sex}</td>
              <td>${student.speaking}</td>
              <td>${student.writing}</td>
              <td>${student.listening}</td>
              <td>${student.reading}</td>
              <td>${student.average}</td>
              <td>${student.Rank}</td>
      `;
    tbody.innerHTML += tr;
  });
}
function GetData1Save(datas) {
  let tbody = document.getElementById("tbody2Save");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speaking = data.val().speaking;
    var writing = data.val().writing;
    var listening = data.val().listening;
    var reading = data.val().reading;
    var average = data.val().average;
    var myKh = data.val().myKh;


    students.push({
      name,
      sex,
      speaking,
      writing,
      listening,
      reading,
      average,
      myKh,
    });
  });

  students.sort((a, b) => b.average - a.average);

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].average;
    let studentsWithRank = students.filter(
      (student) => student.average === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    let tr = `
              <td>${No}</td>
              <td>${student.myKh}</td>
              <td>${student.sex}</td>
              <td>${student.speaking}</td>
              <td>${student.writing}</td>
              <td>${student.listening}</td>
              <td>${student.reading}</td>
              <td>${student.average}</td>
      `;
    tbody.innerHTML += tr;
  });
}

// var stdNumber;
// var stdListPrint = [];
// function addItemsToOct(name,sex,speaking,writing,listening,
//   reading,average,rank){
//   var tbody = document.getElementById('tbody2');
//   var trow = document.createElement('tr');
//   var td0 = document.createElement('td');
//   var td1 = document.createElement('td');
//   var td2 = document.createElement('td');
//   var td3 = document.createElement('td');
//   var td4 = document.createElement('td');
//   var td5 = document.createElement('td');
//   var td6 = document.createElement('td');
//   var td7 = document.createElement('td');
//   var td8 = document.createElement('td');

//   stdListPrint.push([name,sex,speaking,writing,listening,
//     reading,average,rank]);
//   td0.innerHTML = ++stdNumber;
//   td1.innerHTML = name;
//   td2.innerHTML = sex;
//   td3.innerHTML = speaking;
//   td4.innerHTML = writing;
//   td5.innerHTML = listening;
//   td6.innerHTML = reading;
//   td7.innerHTML = average;
//   td8.innerHTML = rank;


//   trow.appendChild(td0);
//   trow.appendChild(td1);
//   trow.appendChild(td2);
//   trow.appendChild(td3);
//   trow.appendChild(td4);
//   trow.appendChild(td5);
//   trow.appendChild(td6);
//   trow.appendChild(td7);
//   trow.appendChild(td8);
//   tbody.appendChild(trow);
//   $(function() {
//     //Get all total values, sort and remove duplicates
//     let totalList = $('.myScoreOct')
//       .map(function() {return $(this).text()})
//       .get()
//       .sort(function(a,b){return a - b })
//       .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
//     //Assign rank
//     totalList.forEach((v, i) => {
//       $('.myScoreOct').filter(function() {return $(this).text() == v;}).next().text(i + 1);
//     })
//   });
// }
function myOct() {
  var newstr = document.getElementById("myOctoberPrint").innerHTML;
  var oldstr = document.body.innerHTML;
  document.body.innerHTML = newstr;
  window.print();
  document.body.innerHTML = oldstr;
  return false;
}
// function addClassOct(){
//   var els = document.querySelectorAll("#myOctober td:nth-child(8)");
//   var len = els.length;
//   for(var i = 0, len = els.length; i < len ; i++){
//       els[i].classList.add("myScoreOct"); //To add class on top of existing ones
//   }
// }
//Save to excel
function saveOct(type, fn, dl) {
  var elt = document.getElementById('myOctoberSave');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
    XLSX.writeFile(wb, fn || ('Grade 5A October.' + (type || 'xlsx')));
}

