  //November
  function myPrintYear(){
    document.getElementById('tbody15').innerHTML="";
    document.getElementById('tbody15Save').innerHTML="";
    stdNumber=0;
    firebase.database().ref('5aAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          // var name = CurrentRecord.val().name;
          // var sex = CurrentRecord.val().sex;
          // var my1SaY = CurrentRecord.val().my1SaY;
          // var my2SaY = CurrentRecord.val().my2SaY;
          // var myAaY = CurrentRecord.val().myAaY;
          // var myKy = CurrentRecord.val().myKy;
          // var myMy = CurrentRecord.val().myMy;
          // var myOy = CurrentRecord.val().myOy;
      
          // var my1Sa = CurrentRecord.val().my1Sa;
          // var my2Sa = CurrentRecord.val().my2Sa;
                            
          // addItemAnnaulYear(name,sex,my1SaY,my2SaY,
          //   myAaY,myKy,myMy,myOy,my1Sa,my2Sa);
            addClassYear();
        }
      );
      GetData15(AllRecordsPrint);
      GetData15Save(AllRecordsPrint);

    });
  }
  function GetData15(datas) {
    let tbody = document.getElementById("tbody15");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var grade = data.val().grade;
      var my1Sa = data.val().my1Sa;

          var my2Sa = data.val().my2Sa;
          console.log(my2Sa);
          //4 months total
          var total4m = parseFloat(my1Sa)+parseFloat(my2Sa);
          var allTotal = parseFloat(total4m)/2;
          var showTotal = parseFloat(allTotal).toFixed(2);
          // All total Score
          // var total2m = parseFloat(showTotal)+parseFloat(my1Sa);
          // var alltotal2m = parseFloat(total2m)/2;
          // var last2m = parseFloat(alltotal2m).toFixed(2);
        // console.log(last2m);

      students.push({
        name,
        sex,
        grade,
        my1Sa,
        showTotal,
        my2Sa,
      });
    });
  
    students.sort((a, b) => b.showTotal - a.showTotal);
  
    for (let i = 0; i < students.length; i++) {
      let avg = students[i].showTotal;
      let studentsWithRank = students.filter(
        (student) => student.showTotal === avg
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
        var my = parseFloat(student.showTotal);
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
              <td>${student.my1Sa}</td>
              <td>${student.my2Sa}</td>
              <td>${student.showTotal}</td>
              <td>${student.Rank}</td>
              <td>${mention}</td>
              <td></td>

      `;
      tbody.innerHTML += tr;
    });
  }
  function GetData15Save(datas) {
    let tbody = document.getElementById("tbody15Save");
    let No = 0;
    let students = [];
  
    datas.forEach((data) => {
      var name = data.val().name;
      var sex = data.val().sex;
      var grade = data.val().grade;
      var my1Sa = data.val().my1Sa;
      var myKh = data.val().myKh;
          var my2Sa = data.val().my2Sa;
          console.log(my2Sa);
          //4 months total
          var total4m = parseFloat(my1Sa)+parseFloat(my2Sa);
          var allTotal = parseFloat(total4m)/2;
          var showTotal = parseFloat(allTotal).toFixed(2);
          // All total Score
          // var total2m = parseFloat(showTotal)+parseFloat(my1Sa);
          // var alltotal2m = parseFloat(total2m)/2;
          // var last2m = parseFloat(alltotal2m).toFixed(2);
        // console.log(last2m);

      students.push({
        name,
        sex,
        grade,
        my1Sa,
        showTotal,
        my2Sa,
        myKh,
      });
    });
  
    // students.sort((a, b) => b.showTotal - a.showTotal);
  
    for (let i = 0; i < students.length; i++) {
      let avg = students[i].showTotal;
      let studentsWithRank = students.filter(
        (student) => student.showTotal === avg
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
        var my = parseFloat(student.showTotal);
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
              <td>${student.my1Sa}</td>
              <td>${student.my2Sa}</td>
              <td>${student.showTotal}</td>
              <td>${student.Rank}</td>
              <td>${mention}</td>
              <td></td>

      `;
      tbody.innerHTML += tr;
    });
  }

  // var stdNumber;
  // var stdListPrint = [];
  // function addItemAnnaulYear(name,sex,my1SaY,my2SaY,
  //   myAaY,myKy,myMy,myOy,my1Sa,my2Sa){
  //   var tbody = document.getElementById('tbody15');
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

  //   stdListPrint.push([name,sex,my1SaY,my2SaY,
  //     myAaY,myKy,myMy,myOy,my1Sa,my2Sa]);

  //     var last = parseFloat(my1Sa) + parseFloat(my2Sa);
  //     var finall = parseFloat(last) / 2;
  //     var my = parseFloat(finall);
  //     if(my <=5){
  //       td7.innerHTML = "Poor"
  //   }else if(my <=6.4){
  //       td7.innerHTML = "Faily Good"
  //   }else if(my <=7.9){
  //       td7.innerHTML = "Good"
  //   }else if(my <=9.4){
  //       td7.innerHTML = "Very Good"
  //   }else if(my <=10){
  //       td7.innerHTML = "Excellent"
  //   }

  //     td0.innerHTML = ++stdNumber;
  //     td1.innerHTML = name;
  //     td2.innerHTML = sex;
  //     td3.innerHTML = my1Sa;
  //     td4.innerHTML = my2Sa;
  //     td5.innerHTML = parseFloat(finall).toFixed(2);;
  //     td8.innerHTML = myOy;

  //     trow.appendChild(td0);
  //     trow.appendChild(td1);
  //     trow.appendChild(td2);
  //     trow.appendChild(td3);
  //     trow.appendChild(td4);
  //     trow.appendChild(td5);
  //     trow.appendChild(td6);
  //     trow.appendChild(td7);
  //     trow.appendChild(td8);

  //   tbody.appendChild(trow);
  //   $(function() {
  //     //Get all total values, sort and remove duplicates
  //     let totalList = $('.myScoreYear')
  //       .map(function() {return $(this).text()})
  //       .get()
  //       .sort(function(a,b){return a - b })
  //       .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
  //     //Assign rank
  //     totalList.forEach((v, i) => {
  //       $('.myScoreYear').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  //     })
  //   });
 
  // }
  function myYear() {
    var newstr = document.getElementById("myYearPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassYear(){
    var els = document.querySelectorAll("#myAnnualT td:nth-child(6)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreYear"); //To add class on top of existing ones
    }
  }
  function saveYear(type, fn, dl) {
    var elt = document.getElementById('myAnnualTSave');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A Annual Year.' + (type || 'xlsx')));
  }
