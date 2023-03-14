  //November
function myPrintKhmer1(){
    document.getElementById('tbody16').innerHTML = "";
    stdNumber=0;
    firebase.database().ref('2aAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var myKh = CurrentRecord.val().myKh;
          var sex = CurrentRecord.val().sex;
          var grade = CurrentRecord.val().grade;
          var my1Se = CurrentRecord.val().my1Se;
          var my1Sa = CurrentRecord.val().my1Sa;
          var my1SR = CurrentRecord.val().my1SR;
                            
          addItemsToKhmerOne(myKh,sex,grade,my1Se,my1Sa,my1SR);
          addClassKhOne();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToKhmerOne(myKh,sex,grade,my1Se,my1Sa,my1SR){
    var tbody = document.getElementById('tbody16');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
  
    stdListPrint.push([myKh,sex,grade,my1Se,my1Sa,my1SR]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = myKh;
    td2.innerHTML = sex;
    td3.innerHTML = grade;
    td4.innerHTML = my1Se;
    td5.innerHTML = my1Sa;
    td6.innerHTML = my1SR;
  
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
      let totalList = $('.myKhmerOneTable')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myKhmerOneTable').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

 
  }
  function myKhmerOneP() {
    var newstr = document.getElementById("myKhmerOnePrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassKhOne(){
    var els = document.querySelectorAll("#myKhmerOneT td:nth-child(6)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myKhmerOneTable"); //To add class on top of existing ones
    }
  }
  function saveKhmerOne(type, fn, dl) {
    var elt = document.getElementById('myKhmerOneT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A Khmer 1st Semester.' + (type || 'xlsx')));
  }
