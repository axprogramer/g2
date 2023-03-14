  //November
function myPrintJun(){
    document.getElementById('tbody11').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2aAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var speakingjun = CurrentRecord.val().speakingjun;
          var writingjun = CurrentRecord.val().writingjun;
          var listeningjun = CurrentRecord.val().listeningjun;
          var readingjun = CurrentRecord.val().readingjun;
          var averagejun = CurrentRecord.val().averagejun;
          var rankjun = CurrentRecord.val().rankjun;
                                    
          addItemsToJun(name,sex,speakingjun,writingjun,listeningjun,
            readingjun,averagejun,rankjun);
            addClassJun();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToJun(name,sex,speakingjun,writingjun,listeningjun,
    readingjun,averagejun,rankjun){
    var tbody = document.getElementById('tbody11');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
  
    stdListPrint.push([name,sex,speakingjun,writingjun,listeningjun,
      readingjun,averagejun,rankjun]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = speakingjun;
    td4.innerHTML = writingjun;
    td5.innerHTML = listeningjun;
    td6.innerHTML = readingjun;
    td7.innerHTML = averagejun;
    td8.innerHTML = rankjun;
  
  
    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    tbody.appendChild(trow);
    $(function() {
      //Get all total values, sort and remove duplicates
      let totalList = $('.myScoreJun')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScoreJun').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

  }
  function myJun() {
    var newstr = document.getElementById("myJunPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassJun(){
    var els = document.querySelectorAll("#myJunT td:nth-child(8)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreJun"); //To add class on top of existing ones
    }
  }
  function saveJun(type, fn, dl) {
    var elt = document.getElementById('myJunT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A June.' + (type || 'xlsx')));
  }

  