  //November
function myPrintDec(){
    document.getElementById('tbody4').innerHTML="";
  document.getElementById('tbody4Save').innerHTML = "";

    stdNumber=0;
    firebase.database().ref('5bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          // var name = CurrentRecord.val().name;
          // var sex = CurrentRecord.val().sex;
          // var speakingDec = CurrentRecord.val().speakingDec;
          // var writingDec = CurrentRecord.val().writingDec;
          // var listeningDec = CurrentRecord.val().listeningDec;
          // var readingDec = CurrentRecord.val().readingDec;
          // var averageDec = CurrentRecord.val().averageDec;
          // var rankDec = CurrentRecord.val().rankDec;
          
          // addItemsToDec(name,sex,speakingDec,writingDec,listeningDec,
          //   readingDec,averageDec,rankDec,);
            addClassDec();
        }
      );
      GetData3(AllRecordsPrint);
      GetData3Save(AllRecordsPrint);

    });
  }
  function GetData3(datas) {
    let tbody = document.getElementById("tbody4");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var speakingDec = data.val().speakingDec;
      var writingDec = data.val().writingDec;
      var listeningDec = data.val().listeningDec;
      var readingDec = data.val().readingDec;
      var averageDec = data.val().averageDec;
  
      students.push({
        name,
        sex,
        speakingDec,
        writingDec,
        listeningDec,
        readingDec,
        averageDec,
      });
    });
  
    students.sort((a, b) => b.averageDec - a.averageDec);
  
    for (let i = 0; i < students.length; i++) {
      let avg = students[i].averageDec;
      let studentsWithRank = students.filter(
        (student) => student.averageDec === avg
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
              <td>${student.speakingDec}</td>
              <td>${student.writingDec}</td>
              <td>${student.listeningDec}</td>
              <td>${student.readingDec}</td>
              <td>${student.averageDec}</td>
              <td>${student.Rank}</td>
      `;
      tbody.innerHTML += tr;
    });
  }
function GetData3Save(datas) {
  let tbody = document.getElementById("tbody4Save");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speakingDec = data.val().speakingDec;
    var writingDec = data.val().writingDec;
    var listeningDec = data.val().listeningDec;
    var readingDec = data.val().readingDec;
    var averageDec = data.val().averageDec;
    var myKh = data.val().myKh;

    students.push({
      name,
      sex,
      speakingDec,
      writingDec,
      listeningDec,
      readingDec,
      averageDec,
      myKh,
    });
  });

  // students.sort((a, b) => b.averageDec - a.averageDec);

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].averageDec;
    let studentsWithRank = students.filter(
      (student) => student.averageDec === avg
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
              <td>${student.speakingDec}</td>
              <td>${student.writingDec}</td>
              <td>${student.listeningDec}</td>
              <td>${student.readingDec}</td>
              <td>${student.averageDec}</td>
      `;
    tbody.innerHTML += tr;
  });
}

  // var stdNumber;
  // var stdListPrint = [];
  // function addItemsToDec(name,sex,speakingDec,writingDec,listeningDec,
  //   readingDec,averageDec,rankDec,){
  //   var tbody = document.getElementById('tbody4');
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
  
  //   stdListPrint.push([name,sex,speakingDec,writingDec,listeningDec,
  //     readingDec,averageDec,rankDec,]);
  //   td0.innerHTML = ++stdNumber;
  //   td1.innerHTML = name;
  //   td2.innerHTML = sex;
  //   td3.innerHTML = speakingDec;
  //   td4.innerHTML = writingDec;
  //   td5.innerHTML = listeningDec;
  //   td6.innerHTML = readingDec;
  //   td7.innerHTML = averageDec;
  //   td8.innerHTML = rankDec;
  
  
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
  //     let totalList = $('.myScoreDec')
  //       .map(function() {return $(this).text()})
  //       .get()
  //       .sort(function(a,b){return a - b })
  //       .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
  //     //Assign rank
  //     totalList.forEach((v, i) => {
  //       $('.myScoreDec').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  //     })
  //   });

  // }
  function myDec() {
    var newstr = document.getElementById("myDecPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassDec(){
    var els = document.querySelectorAll("#myDecemberT td:nth-child(8)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreDec"); //To add class on top of existing ones
    }
  }
  function saveDec(type, fn, dl) {
    var elt = document.getElementById('myDecemberTSave');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5B December.' + (type || 'xlsx')));
  }
