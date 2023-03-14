  //November
function myPrintSeOne(){
    document.getElementById('tbody7').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2aAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var grade = CurrentRecord.val().grade;
          var my1Se = CurrentRecord.val().my1Se;
          var my1Sa = CurrentRecord.val().my1Sa;
          var my1SR = CurrentRecord.val().my1SR;
          var my1SM = CurrentRecord.val().my1SM;
                            
          addItemsToSeOne(name,sex,grade,my1Se,my1Sa,my1SR,my1SM);
          addClassSone();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToSeOne(name,sex,grade,my1Se,my1Sa,my1SR,my1SM){
    var tbody = document.getElementById('tbody7');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
  
    stdListPrint.push([name,sex,grade,my1Se,my1Sa,my1SR,my1SM]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = grade;
    td4.innerHTML = my1Se;
    td5.innerHTML = my1Sa;
    td6.innerHTML = my1SR;
    td7.innerHTML = my1SM;
    var my = parseFloat(my1Sa);
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
      let totalList = $('.myScoreOne')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScoreOne').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

 
  }
  function mySeOne() {
    var newstr = document.getElementById("mySeOnePrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassSone(){
    var els = document.querySelectorAll("#mySeOneT td:nth-child(6)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreOne"); //To add class on top of existing ones
    }
  }
  function saveOne(type, fn, dl) {
    var elt = document.getElementById('mySeOneT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A 1st Semester.' + (type || 'xlsx')));
  }
  