  //1st Semester Result
function myPrintSeOneR(){
    document.getElementById('tbody8').innerHTML="";
    document.getElementById('tbody8Save').innerHTML="";

    stdNumber=0;
    firebase.database().ref('5aAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          // var name = CurrentRecord.val().name;
          // var sex = CurrentRecord.val().sex;
          // var grade = CurrentRecord.val().grade;
          // var my1SeR = CurrentRecord.val().my1SeR;
          // var my1MonR = CurrentRecord.val().my1MonR;
          // var my1SaR = CurrentRecord.val().my1SaR;
          // var my1SeRa = CurrentRecord.val().my1SeRa;
          // var my1SeRme = CurrentRecord.val().my1SeRme;

          // var my1Sa = CurrentRecord.val().my1Sa;


          // var averagefeb = CurrentRecord.val().averagefeb;
          // var averageNov = CurrentRecord.val().averageNov;
          // var averageDec = CurrentRecord.val().averageDec;
          // var averageJan = CurrentRecord.val().averageJan;
    
          
          // addItemsToSeOneRT(name,sex,grade,my1SeR,my1MonR,my1SaR,
          //   my1SeRa,my1SeRme,averagefeb,averageNov,averageDec,averageJan,
          //   my1Sa);
            addClassOneR();
        }
      );
      GetData7(AllRecordsPrint);
      GetData7Save(AllRecordsPrint);

    });
  }
  function GetData7(datas) {
    let tbody = document.getElementById("tbody8");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var grade = data.val().grade;
      var my1Se = data.val().my1Se;
      var my1Sa = data.val().my1Sa;
      var my1SR = data.val().my1SR;
      var my1SM = data.val().my1SM;

          var averagefeb = data.val().averagefeb;
          var averageNov = data.val().averageNov;
          var averageDec = data.val().averageDec;
          var averageJan = data.val().averageJan;
          //4 months total
          var total4m = parseFloat(averagefeb)+parseFloat(averageNov)+parseFloat(averageDec)+parseFloat(averageJan);
          var allTotal = parseFloat(total4m)/4;
          var showTotal = parseFloat(allTotal).toFixed(2);
          // All total Score
          var total2m = parseFloat(showTotal)+parseFloat(my1Sa);
          var alltotal2m = parseFloat(total2m)/2;
          var last2m = parseFloat(alltotal2m).toFixed(2);
        // console.log(last2m);

      students.push({
        name,
        sex,
        grade,
        my1Se,
        my1Sa,
        my1SR,
        my1SM,
        averagefeb,
        averageNov,
        averageDec,
        averageJan,
        showTotal,
        last2m,
      });
    });
  
    students.sort((a, b) => b.last2m - a.last2m);
  
    for (let i = 0; i < students.length; i++) {
      let avg = students[i].last2m;
      let studentsWithRank = students.filter(
        (student) => student.last2m === avg
      );
      for (let student of studentsWithRank) {
        student.Rank = i + 1;
      }
      i += studentsWithRank.length - 1;
    }
  
    students.forEach((student) => {
      No++;
        // var get2 = parseFloat(student.averagefeb) + parseFloat(student.averageNov) + parseFloat(student.averageDec) + parseFloat(student.averageJan);
        // var get = parseFloat(get2)/4;
        // var total = parseFloat(get).toFixed(2);
        // var last = parseFloat(student.my1Sa) + parseFloat(total);
        // var finall = parseFloat(last) / 2;
        // var last2 = parseFloat(finall).toFixed(2);

        // console.log(total);

        var mention = "";
        var my = parseFloat(student.last2m);
        if(my <=5){
            mention = "Poor"
        }else if(my <=6.4){
            mention = "Faily Good";
        }else if(my <=7.9){
            mention = "Good";
        }else if(my <=9.4){
            mention = "Very Good";
        }else if(my <=10){
            mention = "Excellent";
        }
        // console.log(student.my1Sa);
      let tr = `
              <td>${No}</td>
              <td>${student.name}</td>
              <td>${student.sex}</td>
              <td>${student.grade}</td>
              <td>${student.my1Sa}</td>
              <td>${student.showTotal}</td>
              <td>${student.last2m}</td>
              <td>${student.Rank}</td>
              <td>${mention}</td>
      `;
      tbody.innerHTML += tr;
    });
  }
  function GetData7Save(datas) {
    let tbody = document.getElementById("tbody8Save");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var grade = data.val().grade;
      var my1Se = data.val().my1Se;
      var my1Sa = data.val().my1Sa;
      var my1SR = data.val().my1SR;
      var my1SM = data.val().my1SM;
      var myKh = data.val().myKh;


          var averagefeb = data.val().averagefeb;
          var averageNov = data.val().averageNov;
          var averageDec = data.val().averageDec;
          var averageJan = data.val().averageJan;
          //4 months total
          var total4m = parseFloat(averagefeb)+parseFloat(averageNov)+parseFloat(averageDec)+parseFloat(averageJan);
          var allTotal = parseFloat(total4m)/4;
          var showTotal = parseFloat(allTotal).toFixed(2);
          // All total Score
          var total2m = parseFloat(showTotal)+parseFloat(my1Sa);
          var alltotal2m = parseFloat(total2m)/2;
          var last2m = parseFloat(alltotal2m).toFixed(2);
        // console.log(last2m);

      students.push({
        name,
        sex,
        grade,
        my1Se,
        my1Sa,
        my1SR,
        my1SM,
        averagefeb,
        averageNov,
        averageDec,
        averageJan,
        showTotal,
        last2m,
        myKh,
      });
    });
  
    // students.sort((a, b) => b.last2m - a.last2m);
  
    for (let i = 0; i < students.length; i++) {
      let avg = students[i].last2m;
      let studentsWithRank = students.filter(
        (student) => student.last2m === avg
      );
      for (let student of studentsWithRank) {
        student.Rank = i + 1;
      }
      i += studentsWithRank.length - 1;
    }
  
    students.forEach((student) => {
      No++;
        // var get2 = parseFloat(student.averagefeb) + parseFloat(student.averageNov) + parseFloat(student.averageDec) + parseFloat(student.averageJan);
        // var get = parseFloat(get2)/4;
        // var total = parseFloat(get).toFixed(2);
        // var last = parseFloat(student.my1Sa) + parseFloat(total);
        // var finall = parseFloat(last) / 2;
        // var last2 = parseFloat(finall).toFixed(2);

        // console.log(total);

        var mention = "";
        var my = parseFloat(student.last2m);
        if(my <=5){
            mention = "Poor"
        }else if(my <=6.4){
            mention = "Faily Good";
        }else if(my <=7.9){
            mention = "Good";
        }else if(my <=9.4){
            mention = "Very Good";
        }else if(my <=10){
            mention = "Excellent";
        }
        // console.log(student.my1Sa);
      let tr = `
              <td>${No}</td>
              <td>${student.name}</td>
              <td>${student.sex}</td>
              <td>${student.grade}</td>
              <td>${student.my1Sa}</td>
              <td>${student.showTotal}</td>
              <td>${student.last2m}</td>
              <td>${student.Rank}</td>
              <td>${mention}</td>
      `;
      tbody.innerHTML += tr;
    });
  }
  // var stdNumber;
  // var stdListPrint = [];
  // function addItemsToSeOneRT(name,sex,grade,my1SeR,my1MonR,my1SaR,
  //   my1SeRa,my1SeRme,averagefeb,averageNov,averageDec,averageJan,
  //   my1Sa){
  //   var tbody = document.getElementById('tbody8');
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
  
  //   stdListPrint.push([name,sex,grade,my1SeR,my1MonR,my1SaR,
  //     my1SeRa,my1SeRme,averagefeb,averageNov,averageDec,averageJan,
  //     my1Sa]);
  //   var get = parseFloat(averagefeb) + parseFloat(averageNov) + parseFloat(averageDec) + parseFloat(averageJan);
  //   var total = parseFloat(get) / 4;
  //   var last = parseFloat(my1Sa) + parseFloat(total);
  //   var finall = parseFloat(last) / 2;
  //   var my = parseFloat(finall);
  //    if(my <=5){
  //       td8.innerHTML = "Poor"
  //   }else if(my <=6.4){
  //       td8.innerHTML = "Faily Good"
  //   }else if(my <=7.9){
  //       td8.innerHTML = "Good"
  //   }else if(my <=9.4){
  //       td8.innerHTML = "Very Good"
  //   }else if(my <=10){
  //       td8.innerHTML = "Excellent"
  //   }

  //   td0.innerHTML = ++stdNumber;
  //   td1.innerHTML = name;
  //   td2.innerHTML = sex;
  //   td3.innerHTML = grade;
  //   td4.innerHTML = my1Sa;
  //   td5.innerHTML = parseFloat(total).toFixed(2);
  //   td6.innerHTML = parseFloat(finall).toFixed(2);
  //   td7.innerHTML = my1SeRa;
  
  
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
  //     let totalList = $('.myScoreOneR')
  //       .map(function() {return $(this).text()})
  //       .get()
  //       .sort(function(a,b){return a - b })
  //       .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
  //     //Assign rank
  //     totalList.forEach((v, i) => {
  //       $('.myScoreOneR').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  //     })
  //   });

  // }
  function mySeOneR() {
    var newstr = document.getElementById("mySeOneRPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassOneR(){
    var els = document.querySelectorAll("#mySeOneRT td:nth-child(7)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreOneR"); //To add class on top of existing ones
    }
  }
  function saveOneR(type, fn, dl) {
    var elt = document.getElementById('mySeOneTSave');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A 1st Semester Result.' + (type || 'xlsx')));
  }
