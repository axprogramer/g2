  //November
function myPrintMay(){
    document.getElementById('tbody10').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var speakingma = CurrentRecord.val().speakingma;
          var writingma = CurrentRecord.val().writingma;
          var listeningma = CurrentRecord.val().listeningma;
          var readingma = CurrentRecord.val().readingma;
          var averagema = CurrentRecord.val().averagema;
          var rankma = CurrentRecord.val().rankma;
                                
          addItemsToMay(name,sex,speakingma,writingma,listeningma,
            readingma,averagema,rankma);
            addClassMay();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToMay(name,sex,speakingma,writingma,listeningma,
    readingma,averagema,rankma){
    var tbody = document.getElementById('tbody10');
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
  
    stdListPrint.push([name,sex,speakingma,writingma,listeningma,
      readingma,averagema,rankma]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = speakingma;
    td4.innerHTML = writingma;
    td5.innerHTML = listeningma;
    td6.innerHTML = readingma;
    td7.innerHTML = averagema;
    td8.innerHTML = rankma;
  
  
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
      let totalList = $('.myScoreMay')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScoreMay').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

  }
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
    var elt = document.getElementById('myMayT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A May.' + (type || 'xlsx')));
  }
