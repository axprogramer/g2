  //November
function myPrintNov(){
    document.getElementById('tbody3').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var speakingNov = CurrentRecord.val().speakingNov;
          var writingNov = CurrentRecord.val().writingNov;
          var listeningNov = CurrentRecord.val().listeningNov;
          var readingNov = CurrentRecord.val().readingNov;
          var averageNov = CurrentRecord.val().averageNov;
          var rankNOv = CurrentRecord.val().rankNOv;
      
          addItemsToNov(name,sex,speakingNov,writingNov,listeningNov,
            readingNov,averageNov,rankNOv);
            addClassNov();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToNov(name,sex,speakingNov,writingNov,listeningNov,
    readingNov,averageNov,rankNOv){
    var tbody = document.getElementById('tbody3');
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
  
    stdListPrint.push([name,sex,speakingNov,writingNov,listeningNov,
        readingNov,averageNov,rankNOv]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = speakingNov;
    td4.innerHTML = writingNov;
    td5.innerHTML = listeningNov;
    td6.innerHTML = readingNov;
    td7.innerHTML = averageNov;
    td8.innerHTML = rankNOv;
  
  
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
      let totalList = $('.myScoreNov')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScoreNov').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

  }
  function myNov() {
    var newstr = document.getElementById("myNovPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassNov(){
    var els = document.querySelectorAll("#myNovemberT td:nth-child(8)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreNov"); //To add class on top of existing ones
    }
  }
  function saveNov(type, fn, dl) {
    var elt = document.getElementById('myNovemberT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A November.' + (type || 'xlsx')));
  }
  