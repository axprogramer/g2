  //November
function myPrintKhmer2(){
    document.getElementById('tbody17').innerHTML = "";
    stdNumber=0;
    firebase.database().ref('5bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var myKh = CurrentRecord.val().myKh;
          var sex = CurrentRecord.val().sex;
          var grade = CurrentRecord.val().grade;
          var my2Se = CurrentRecord.val().my2Se;
          var my2Sa = CurrentRecord.val().my2Sa;
          var my2SR = CurrentRecord.val().my2SR;
                            
          addItemsToKhmerTwo(myKh,sex,grade,my2Se,my2Sa,my2SR);
          addClassKhTwo();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToKhmerTwo(myKh,sex,grade,my2Se,my2Sa,my2SR){
    var tbody = document.getElementById('tbody17');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
  
    stdListPrint.push([myKh,sex,grade,my2Se,my2Sa,my2SR]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = myKh;
    td2.innerHTML = sex;
    td3.innerHTML = grade;
    td4.innerHTML = my2Se;
    td5.innerHTML = my2Sa;
    td6.innerHTML = my2SR;
  
    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);

    tbody.appendChild(trow);
    $(function() {
      //Get all total values, sort and remove duplicates
      let totalList = $('.myKhmerTwoTable')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myKhmerTwoTable').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

 
  }
  function myKhmerTwoP() {
    var newstr = document.getElementById("myKhmerTwoPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassKhTwo(){
    var els = document.querySelectorAll("#myKhmerTwoT td:nth-child(6)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myKhmerTwoTable"); //To add class on top of existing Twos
    }
  }
  function saveKhmerTwo(type, fn, dl) {
    var elt = document.getElementById('myKhmerTwoT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A Khmer 2nd Semester.' + (type || 'xlsx')));
  }
