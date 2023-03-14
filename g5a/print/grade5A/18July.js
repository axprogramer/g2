  //November
function myPrintjuly(){
    document.getElementById('tbody18').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2aAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var speakingjuly = CurrentRecord.val().speakingjuly;
          var writingjuly = CurrentRecord.val().writingjuly;
          var listeningjuly = CurrentRecord.val().listeningjuly;
          var readingjuly = CurrentRecord.val().readingjuly;
          var averagejuly = CurrentRecord.val().averagejuly;
          var rankjuly = CurrentRecord.val().rankjuly;
                                    
          addItemsTojuly(name,sex,speakingjuly,writingjuly,listeningjuly,
            readingjuly,averagejuly,rankjuly);
            addClassjuly();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsTojuly(name,sex,speakingjuly,writingjuly,listeningjuly,
    readingjuly,averagejuly,rankjuly){
    var tbody = document.getElementById('tbody18');
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
  
    stdListPrint.push([name,sex,speakingjuly,writingjuly,listeningjuly,
      readingjuly,averagejuly,rankjuly]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = speakingjuly;
    td4.innerHTML = writingjuly;
    td5.innerHTML = listeningjuly;
    td6.innerHTML = readingjuly;
    td7.innerHTML = averagejuly;
    td8.innerHTML = rankjuly;
  
  
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
      let totalList = $('.myScorejuly')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScorejuly').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });

  }
  function myjuly() {
    var newstr = document.getElementById("myJulyPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassjuly(){
    var els = document.querySelectorAll("#myJulyT td:nth-child(8)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScorejuly"); //To add class on top of existing ones
    }
  }
  function savejuly(type, fn, dl) {
    var elt = document.getElementById('myJulyT');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Grade 5A July.' + (type || 'xlsx')));
  }

  