  //November
function myPrintSeTwo(){
    document.getElementById('tbody12').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var grade = CurrentRecord.val().grade;
          var my2Se = CurrentRecord.val().my2Se;
          var my2Sa = CurrentRecord.val().my2Sa;
          var my2SR = CurrentRecord.val().my2SR;
          var my2SM = CurrentRecord.val().my2SM;
                                
          addItemsToSeTwo(name,sex,grade,my2Se,my2Sa,my2SR,my2SM);
          addClassTwo();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToSeTwo(name,sex,grade,my2Se,my2Sa,my2SR,my2SM){
    var tbody = document.getElementById('tbody12');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
  
    stdListPrint.push([name,sex,grade,my2Se,my2Sa,my2SR,my2SM]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = grade;
    td4.innerHTML = my2Se;
    td5.innerHTML = my2Sa;
    td6.innerHTML = my2SR;
    var my = parseFloat(my2Sa);
    if(my <=5){
      td7.innerHTML = "Poor"
  }else if(my <=6.4){
      td7.innerHTML = "Faily Good"
  }else if(my <=7.9){
      td7.innerHTML = "Good"
  }else if(my <=9.4){
      td7.innerHTML = "Very Good"
  }else if(my <=10){
      td7.innerHTML = "Excellent"
  }
  
    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);

    tbody.appendChild(trow);
    $(function() {
      //Get all total values, sort and remove duplicates
      let totalList = $('.myScoreTwo')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScoreTwo').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

  }
  function mySeTwo() {
    var newstr = document.getElementById("mySeTwoPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassTwo(){
    var els = document.querySelectorAll("#mySeTwoT td:nth-child(6)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreTwo"); //To add class on top of existing ones
    }
  }
  function saveTwo(type, fn, dl) {
    var elt = document.getElementById('mySeTwoT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A 2nd Semester.' + (type || 'xlsx')));
  }
