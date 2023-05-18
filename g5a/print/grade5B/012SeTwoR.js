  //November
function myPrintSeTwoR(){
    document.getElementById('tbody13').innerHTML="";
    document.getElementById('tbody13Save').innerHTML="";
    stdNumber=0;
    firebase.database().ref('5bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          // var name = CurrentRecord.val().name;
          // var sex = CurrentRecord.val().sex;
          // var grade = CurrentRecord.val().grade;
          // var my2SeR = CurrentRecord.val().my2SeR;
          // var my2MonR = CurrentRecord.val().my2MonR;
          // var my2SaR = CurrentRecord.val().my2SaR;
          // var my2SeRa = CurrentRecord.val().my2SeRa;
          // var my2SeRme = CurrentRecord.val().my2SeRme;
          
          // var my2Sa = CurrentRecord.val().my2Sa;

          // var averagejuly = CurrentRecord.val().averagejuly;
          // var averagemar = CurrentRecord.val().averagemar;
          // var averagema = CurrentRecord.val().averagema;
          // var averagejun = CurrentRecord.val().averagejun;
       




          // addItemsToSeTwoRT(name,sex,grade,my2SeR,my2MonR,my2SaR,
          //   my2SeRa,my2SeRme,my2Sa,averagejuly,averagemar,averagema,
          //   averagejun);
            addClassTwoR();
        }
      );
      GetData12(AllRecordsPrint);
      GetData12Save(AllRecordsPrint);

    });
  }
  function GetData12(datas) {
    let tbody = document.getElementById("tbody13");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var grade = data.val().grade;
      var my2Se = data.val().my2Se;
      var my2Sa = data.val().my2Sa;
      var my2SR = data.val().my2SR;
      var my2SM = data.val().my2SM;

          var averagejuly = data.val().averagejuly;
          var averagemar = data.val().averagemar;
          var averagema = data.val().averagema;
          var averagejun = data.val().averagejun;
          //4 months total
          var total4m = parseFloat(averagejuly)+parseFloat(averagemar)+parseFloat(averagema)+parseFloat(averagejun);
          var allTotal = parseFloat(total4m)/4;
          var showTotal = parseFloat(allTotal).toFixed(2);
          // All total Score
          var total2m = parseFloat(showTotal)+parseFloat(my2Sa);
          var alltotal2m = parseFloat(total2m)/2;
          var last2m = parseFloat(alltotal2m).toFixed(2);
        // console.log(last2m);

      students.push({
        name,
        sex,
        grade,
        my2Se,
        my2Sa,
        my2SR,
        my2SM,
        averagejuly,
        averagemar,
        averagema,
        averagejun,
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
              <td>${student.my2Sa}</td>
              <td>${student.showTotal}</td>
              <td>${student.last2m}</td>
              <td>${student.Rank}</td>
              <td>${mention}</td>
      `;
      tbody.innerHTML += tr;
    });
  }
  function GetData12Save(datas) {
    let tbody = document.getElementById("tbody13Save");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var grade = data.val().grade;
      var my2Se = data.val().my2Se;
      var my2Sa = data.val().my2Sa;
      var my2SR = data.val().my2SR;
      var my2SM = data.val().my2SM;
      var myKh = data.val().myKh;
          var averagejuly = data.val().averagejuly;
          var averagemar = data.val().averagemar;
          var averagema = data.val().averagema;
          var averagejun = data.val().averagejun;
          //4 months total
          var total4m = parseFloat(averagejuly)+parseFloat(averagemar)+parseFloat(averagema)+parseFloat(averagejun);
          var allTotal = parseFloat(total4m)/4;
          var showTotal = parseFloat(allTotal).toFixed(2);
          // All total Score
          var total2m = parseFloat(showTotal)+parseFloat(my2Sa);
          var alltotal2m = parseFloat(total2m)/2;
          var last2m = parseFloat(alltotal2m).toFixed(2);
        // console.log(last2m);

      students.push({
        name,
        sex,
        grade,
        my2Se,
        my2Sa,
        my2SR,
        my2SM,
        averagejuly,
        averagemar,
        averagema,
        averagejun,
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
              <td>${student.myKh}</td>
              <td>${student.sex}</td>
              <td>${student.grade}</td>
              <td>${student.my2Sa}</td>
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
  // function addItemsToSeTwoRT(name,sex,grade,my2SeR,my2MonR,my2SaR,
  //   my2SeRa,my2SeRme,my2Sa,averagejuly,averagemar,averagema,
  //   averagejun){
  //   var tbody = document.getElementById('tbody13');
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
  
  //   stdListPrint.push([name,sex,grade,my2SeR,my2MonR,my2SaR,
  //     my2SeRa,my2SeRme,my2Sa,averagejuly,averagemar,averagema,
  //     averagejun]);

  //     var get = parseFloat(averagejuly) + parseFloat(averagemar) + parseFloat(averagema) + parseFloat(averagejun);
  //     var total = parseFloat(get) / 4;
  //     var last = parseFloat(my2Sa) + parseFloat(total);
  //     var finall = parseFloat(last) / 2;
  //     var my = parseFloat(finall);
  //     if(my <=5){
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
  //   td4.innerHTML = my2Sa;
  //   td5.innerHTML = parseFloat(total).toFixed(2);
  //   td6.innerHTML = parseFloat(finall).toFixed(2);
  //   td7.innerHTML = my2SeRa;
  
  
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
  //     let totalList = $('.myScoreTwoR')
  //       .map(function() {return $(this).text()})
  //       .get()
  //       .sort(function(a,b){return a - b })
  //       .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
  //     //Assign rank
  //     totalList.forEach((v, i) => {
  //       $('.myScoreTwoR').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  //     })
  //   });

  // }
  function mySeTwoR() {
    var newstr = document.getElementById("mySeTwoRPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassTwoR(){
    var els = document.querySelectorAll("#mySeTwoRT td:nth-child(7)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreTwoR"); //To add class on top of existing ones
    }
  }
  function saveTwoR(type, fn, dl) {
    var elt = document.getElementById('mySeTwoRTSave');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5B 2nd Semester Result.' + (type || 'xlsx')));
  }
