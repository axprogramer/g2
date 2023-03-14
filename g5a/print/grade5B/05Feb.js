  //November
function myPrintFeb(){
    document.getElementById('tbody6').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2bAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var speakingfeb = CurrentRecord.val().speakingfeb;
          var writingfeb = CurrentRecord.val().writingfeb;
          var listeningfeb = CurrentRecord.val().listeningfeb;
          var readingfeb = CurrentRecord.val().readingfeb;
          var averagefeb = CurrentRecord.val().averagefeb;
          var rankfeb = CurrentRecord.val().rankfeb;
                        
          addItemsToFeb(name,sex,speakingfeb,writingfeb,
            listeningfeb,readingfeb,averagefeb,rankfeb);
            addClassFeb();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToFeb(name,sex,speakingfeb,writingfeb,
    listeningfeb,readingfeb,averagefeb,rankfeb){
    var tbody = document.getElementById('tbody6');
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
  
    stdListPrint.push([name,sex,speakingfeb,writingfeb,
      listeningfeb,readingfeb,averagefeb,rankfeb]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = speakingfeb;
    td4.innerHTML = writingfeb;
    td5.innerHTML = listeningfeb;
    td6.innerHTML = readingfeb;
    td7.innerHTML = averagefeb;
    td8.innerHTML = rankfeb;
  
  
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
      let totalList = $('.myScoreFeb')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScoreFeb').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

  }
  function myFeb() {
    var newstr = document.getElementById("myFebPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassFeb(){
    var els = document.querySelectorAll("#myFebruaryT td:nth-child(8)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreFeb"); //To add class on top of existing ones
    }
  }
  function saveFeb(type, fn, dl) {
    var elt = document.getElementById('myFebruaryT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A February.' + (type || 'xlsx')));
  }
