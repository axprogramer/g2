  //November
function myPrintJan(){
    document.getElementById('tbody5').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2aAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var speakingJan = CurrentRecord.val().speakingJan;
          var writingJan = CurrentRecord.val().writingJan;
          var listeningJan = CurrentRecord.val().listeningJan;
          var readingJan = CurrentRecord.val().readingJan;
          var averageJan = CurrentRecord.val().averageJan;
          var rankJan = CurrentRecord.val().rankJan;
                    
          addItemsToJan(name,sex,speakingJan,writingJan,listeningJan,
            readingJan,averageJan,rankJan);
            addClassJan();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToJan(name,sex,speakingJan,writingJan,listeningJan,
    readingJan,averageJan,rankJan){
    var tbody = document.getElementById('tbody5');
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
  
    stdListPrint.push([name,sex,speakingJan,writingJan,listeningJan,
      readingJan,averageJan,rankJan]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = speakingJan;
    td4.innerHTML = writingJan;
    td5.innerHTML = listeningJan;
    td6.innerHTML = readingJan;
    td7.innerHTML = averageJan;
    td8.innerHTML = rankJan;
  
  
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
      let totalList = $('.myScoreJan')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScoreJan').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

  }
  function myJan() {
    var newstr = document.getElementById("myJanPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassJan(){
    var els = document.querySelectorAll("#myJanuaryT td:nth-child(8)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreJan"); //To add class on top of existing ones
    }
  }
  function saveJan(type, fn, dl) {
    var elt = document.getElementById('myJanuaryT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A January.' + (type || 'xlsx')));
  }
