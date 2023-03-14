function myPrintG5A() {
    var newstr = document.getElementById("myStinfo5a").innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
  }
  //Save to excel
function mySaveG5A(type, fn, dl) {
  var elt = document.getElementById('mySaveinfo5a');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
    XLSX.writeFile(wb, fn || ('Grade 5A Info.' + (type || 'xlsx')));
}

function myPrintG5B() {
  var newstr = document.getElementById("myStinfo5b").innerHTML;
  var oldstr = document.body.innerHTML;
  document.body.innerHTML = newstr;
  window.print();
  document.body.innerHTML = oldstr;
  return false;
}
//Save to excel
function mySaveG5B(type, fn, dl) {
var elt = document.getElementById('mySaveinfo5b');
var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
return dl ?
  XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
  XLSX.writeFile(wb, fn || ('Grade 5B Info.' + (type || 'xlsx')));
}
  