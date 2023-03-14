//October
function myPrintOctober(){
    document.getElementById('tbody2').innerHTML="";
    stdNumber=0;
    firebase.database().ref('2aAllData').once('value',
    function(AllRecordsPrint){
      AllRecordsPrint.forEach(
        function(CurrentRecord){
          var name = CurrentRecord.val().name;
          var sex = CurrentRecord.val().sex;
          var speaking = CurrentRecord.val().speaking;
          var writing = CurrentRecord.val().writing;
          var listening = CurrentRecord.val().listening;
          var reading = CurrentRecord.val().reading;
          var average = CurrentRecord.val().average;
          var rank = CurrentRecord.val().rank;
  
          addItemsToOct(name,sex,speaking,writing,listening,
            reading,average,rank);
            addClassOct();
        }
      );
    });
  }
  
  var stdNumber;
  var stdListPrint = [];
  function addItemsToOct(name,sex,speaking,writing,listening,
    reading,average,rank){
    var tbody = document.getElementById('tbody2');
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
  
    stdListPrint.push([name,sex,speaking,writing,listening,
      reading,average,rank]);
    td0.innerHTML = ++stdNumber;
    td1.innerHTML = name;
    td2.innerHTML = sex;
    td3.innerHTML = speaking;
    td4.innerHTML = writing;
    td5.innerHTML = listening;
    td6.innerHTML = reading;
    td7.innerHTML = average;
    td8.innerHTML = rank;
  
  
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
      let totalList = $('.myScoreOct')
        .map(function() {return $(this).text()})
        .get()
        .sort(function(a,b){return a - b })
        .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])
      //Assign rank
      totalList.forEach((v, i) => {
        $('.myScoreOct').filter(function() {return $(this).text() == v;}).next().text(i + 1);
      })
    });
  }
  function myOct() {
    var newstr = document.getElementById("myOctoberPrint").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  function addClassOct(){
    var els = document.querySelectorAll("#myOctober td:nth-child(8)");
    var len = els.length;
    for(var i = 0, len = els.length; i < len ; i++){
        els[i].classList.add("myScoreOct"); //To add class on top of existing ones
    }
  }
  //Save to excel
function saveOct(type, fn, dl) {
  var elt = document.getElementById('myOctober');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
    XLSX.writeFile(wb, fn || ('Grade 5A October.' + (type || 'xlsx')));
}

  