  //November
function myPrintMar(){
    document.getElementById('tbody9').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var speakingmar = CurrentRecord.val().speakingmar;
          var writingmar = CurrentRecord.val().writingmar;
          var listeningmar = CurrentRecord.val().listeningmar;
          var readingmar = CurrentRecord.val().readingmar;
          var averagemar = CurrentRecord.val().averagemar;
          var rankmar = CurrentRecord.val().rankmar;
                            
          addItemsToMar(name,sex,speakingmar,writingmar,listeningmar,
            readingmar,averagemar,rankmar);
            addClassMar();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToMar(name,sex,speakingmar,writingmar,listeningmar,
    readingmar,averagemar,rankmar){
    var tbody = document.getElementById('tbody9');
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
  
    stdListPrint.push([name,sex,speakingmar,writingmar,listeningmar,
      readingmar,averagemar,rankmar]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = speakingmar;
    td4.innerHTML = writingmar;
    td5.innerHTML = listeningmar;
    td6.innerHTML = readingmar;
    td7.innerHTML = averagemar;
    td8.innerHTML = rankmar;
  
  
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
      let totalList = $('.myScoreMar')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScoreMar').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

  }
  function myMar() {
    var newstr = document.getElementById("myMarPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassMar(){
    var els = document.querySelectorAll("#myMarchT td:nth-child(8)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreMar"); //To add class on top of existing ones
    }
  }
  function saveMar(type, fn, dl) {
    var elt = document.getElementById('myMarchT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A March.' + (type || 'xlsx')));
  }
