  //November
function myPrintMay(){
    document.getElementById('tbody10').innerHTML="";
    document.getElementById('tbody10Save').innerHTML="";
    stdNumber=0;
    firebase.database().ref('5bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          // var name = CurrentRecord.val().name;
          // var sex = CurrentRecord.val().sex;
          // var speakingma = CurrentRecord.val().speakingma;
          // var writingma = CurrentRecord.val().writingma;
          // var listeningma = CurrentRecord.val().listeningma;
          // var readingma = CurrentRecord.val().readingma;
          // var averagema = CurrentRecord.val().averagema;
          // var rankma = CurrentRecord.val().rankma;
                                
          // addItemsToMay(name,sex,speakingma,writingma,listeningma,
          //   readingma,averagema,rankma);
            addClassMay();
        }
      );
      GetData9(AllRecordsPrint);
      GetData9Save(AllRecordsPrint);

    });
  }
  function GetData9(datas) {
    let tbody = document.getElementById("tbody10");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var speakingma = data.val().speakingma;
      var writingma = data.val().writingma;
      var listeningma = data.val().listeningma;
      var readingma = data.val().readingma;
      var averagema = data.val().averagema;
  
      students.push({
        name,
        sex,
        speakingma,
        writingma,
        listeningma,
        readingma,
        averagema,
      });
    });
  
    students.sort((a, b) => b.averagema - a.averagema);
  
    for (let i = 0; i < students.length; i++) {
      let avg = students[i].averagema;
      let studentsWithRank = students.filter(
        (student) => student.averagema === avg
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
              <td>${student.speakingma}</td>
              <td>${student.writingma}</td>
              <td>${student.listeningma}</td>
              <td>${student.readingma}</td>
              <td>${student.averagema}</td>
              <td>${student.Rank}</td>
      `;
      tbody.innerHTML += tr;
    });
  }
  function GetData9Save(datas) {
    let tbody = document.getElementById("tbody10Save");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var speakingma = data.val().speakingma;
      var writingma = data.val().writingma;
      var listeningma = data.val().listeningma;
      var readingma = data.val().readingma;
      var averagema = data.val().averagema;
      var myKh = data.val().myKh;
      students.push({
        name,
        sex,
        speakingma,
        writingma,
        listeningma,
        readingma,
        averagema,
        myKh,
      });
    });
  
    // students.sort((a, b) => b.averagema - a.averagema);
  
    for (let i = 0; i < students.length; i++) {
      let avg = students[i].averagema;
      let studentsWithRank = students.filter(
        (student) => student.averagema === avg
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
              <td>${student.speakingma}</td>
              <td>${student.writingma}</td>
              <td>${student.listeningma}</td>
              <td>${student.readingma}</td>
              <td>${student.averagema}</td>
              <td>${student.Rank}</td>
      `;
      tbody.innerHTML += tr;
    });
  }

  // var stdNumber;
  // var stdListPrint = [];
  // function addItemsToMay(name,sex,speakingma,writingma,listeningma,
  //   readingma,averagema,rankma){
  //   var tbody = document.getElementById('tbody10');
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
  
  //   stdListPrint.push([name,sex,speakingma,writingma,listeningma,
  //     readingma,averagema,rankma]);
  //   td0.innerHTML = ++stdNumber;
  //   td1.innerHTML = name;
  //   td2.innerHTML = sex;
  //   td3.innerHTML = speakingma;
  //   td4.innerHTML = writingma;
  //   td5.innerHTML = listeningma;
  //   td6.innerHTML = readingma;
  //   td7.innerHTML = averagema;
  //   td8.innerHTML = rankma;
  
  
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
  //     let totalList = $('.myScoreMay')
  //       .map(function() {return $(this).text()})
  //       .get()
  //       .sort(function(a,b){return a - b })
  //       .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
  //     //Assign rank
  //     totalList.forEach((v, i) => {
  //       $('.myScoreMay').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  //     })
  //   });

  // }
  function myMay() {
    var newstr = document.getElementById("myMayPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassMay(){
    var els = document.querySelectorAll("#myMayT td:nth-child(8)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreMay"); //To add class on top of existing ones
    }
  }
  function saveMay(type, fn, dl) {
    var elt = document.getElementById('myMayTSave');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5B May.' + (type || 'xlsx')));
  }
