const firebaseConfig = {
    apiKey: "AIzaSyAOX5I_BB9soXF4yHMp9NCPVk2Z-d3DEPE",
    authDomain: "teachingrecord-6b575.firebaseapp.com",
    databaseURL: "https://teachingrecord-6b575-default-rtdb.firebaseio.com",
    projectId: "teachingrecord-6b575",
    storageBucket: "teachingrecord-6b575.appspot.com",
    messagingSenderId: "1097574891233",
    appId: "1:1097574891233:web:d69ed85c4f4b83daad41a0"
  };
  
  firebase.initializeApp(firebaseConfig);

  var my5aAll = firebase.database().ref('2bAllData');

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal('myName');
    var id = getElementVal('myID');
    var sex = getElementVal('mySex');
    var grade = getElementVal('myGrade');
    //October
    var speaking = getElementVal('mySoct');
    var writing = getElementVal('myWoct');
    var listening = getElementVal('myLoct');
    var reading = getElementVal('myRoct');
    var average = getElementVal('myAoct');
    var rank = getElementVal('myKoct');
    //November
    var speakingNov = getElementVal('mySnov');
    var writingNov = getElementVal('myWnov');
    var listeningNov = getElementVal('myLnov');
    var readingNov = getElementVal('myRnov');
    var averageNov = getElementVal('myAnov');
    var rankNOv = getElementVal('myKnov');
    //December
    var speakingDec = getElementVal('mySdec');
    var writingDec = getElementVal('myWdec');
    var listeningDec = getElementVal('myLdec');
    var readingDec = getElementVal('myRdec');
    var averageDec = getElementVal('myAdec');
    var rankDec = getElementVal('myKdec');
    //January
    var speakingJan = getElementVal('mySjan');
    var writingJan = getElementVal('myWjan');
    var listeningJan = getElementVal('myLjan');
    var readingJan = getElementVal('myRjan');
    var averageJan = getElementVal('myAjan');
    var rankJan = getElementVal('myKjan');
    //Febuary
    var speakingfeb = getElementVal('mySfeb');
    var writingfeb = getElementVal('myWfeb');
    var listeningfeb = getElementVal('myLfeb');
    var readingfeb = getElementVal('myRfeb');
    var averagefeb = getElementVal('myAfeb');
    var rankfeb = getElementVal('myKfeb');
    //1st 4 months
    var myNov = getElementVal('myNov');
    var myDec = getElementVal('myDec');
    var myJan = getElementVal('myJan');
    var myFeb = getElementVal('myFeb');
    var my1Score4 = getElementVal('my1Score4');
    //1st Semester Exam
    var my1Se = getElementVal('my1Se');
    var my1Sa = getElementVal('my1Sa');
    var my1SR = getElementVal('my1SR');
    var my1SM = getElementVal('my1SM');
    //1st Semester Result
    var my1SeR = getElementVal('my1SeR');
    var my1MonR = getElementVal('my1MonR');
    var my1SaR = getElementVal('my1SaR');
    var my1SeRa = getElementVal('my1SeRa');
    var my1SeRme = getElementVal('my1SeRme');
    //March
    var speakingmar = getElementVal('mySmar');
    var writingmar = getElementVal('myWmar');
    var listeningmar = getElementVal('myLmar');
    var readingmar = getElementVal('myRmar');
    var averagemar = getElementVal('myAmar');
    var rankmar = getElementVal('myKmar');
    //April-May
    var speakingma = getElementVal('mySma');
    var writingma = getElementVal('myWma');
    var listeningma = getElementVal('myLma');
    var readingma = getElementVal('myRma');
    var averagema = getElementVal('myAma');
    var rankma = getElementVal('myKma');
    //June
    var speakingjun = getElementVal('mySjun');
    var writingjun = getElementVal('myWjun');
    var listeningjun = getElementVal('myLjun');
    var readingjun = getElementVal('myRjun');
    var averagejun = getElementVal('myAjun');
    var rankjun = getElementVal('myKjun');
     //July
     var speakingjuly = getElementVal('mySjuly');
     var writingjuly = getElementVal('myWjuly');
     var listeningjuly = getElementVal('myLjuly');
     var readingjuly = getElementVal('myRjuly');
     var averagejuly = getElementVal('myAjuly');
     var rankjuly = getElementVal('myKjuly');
    
    //2nd 4 months
    var myMar = getElementVal('myMar');
    var myMay = getElementVal('myMay');
    var myJune = getElementVal('myJune');
    var myJuly = getElementVal('myJuly');
    var my2Score4 = getElementVal('my2Score4');
    //2nd Semester Exam
    var my2Se = getElementVal('my2Se');
    var my2Sa = getElementVal('my2Sa');
    var my2SR = getElementVal('my2SR');
    var my2SM = getElementVal('my2SM');
    //2nd Semester Result
    var my2SeR = getElementVal('my2SeR');
    var my2MonR = getElementVal('my2MonR');
    var my2SaR = getElementVal('my2SaR');
    var my2SeRa = getElementVal('my2SeRa');
    var my2SeRme = getElementVal('my2SeRme');
    //Annual Year
    var my1SaY = getElementVal('my1SaY');
    var my2SaY = getElementVal('my2SaY');
    var myAaY = getElementVal('myAaY');
    var myKy = getElementVal('myKy');
    var myMy = getElementVal('myMy');
    var myOy = getElementVal('myOy');
    //Khmer Name
    var myKh = getElementVal('myKhname');
    // window.location.reload();
    saveData(name,id,sex,grade,speaking,writing,listening,
      reading,average,rank,speakingNov,writingNov,listeningNov,
      readingNov,averageNov,rankNOv,speakingDec,writingDec,listeningDec,
      readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
      readingJan,averageJan,rankJan,speakingfeb,writingfeb,
      listeningfeb,readingfeb,averagefeb,rankfeb,myNov,myDec,myJan,myFeb,
      my1Score4,my1Se,my1Sa,my1SR,my1SM,my1SeR,my1MonR,my1SaR,
      my1SeRa,my1SeRme,speakingmar,writingmar,listeningmar,
      readingmar,averagemar,rankmar,speakingma,writingma,listeningma,
      readingma,averagema,rankma,speakingjun,writingjun,listeningjun,
      readingjun,averagejun,rankjun,myMar,myMay,myJune,myJuly,my2Score4,
      my2Se,my2Sa,my2SR,my2SM,my2SeR,my2MonR,my2SaR,
      my2SeRa,my2SeRme,my1SaY,my2SaY,myAaY,myKy,myMy,myOy,myKh,
      speakingjuly,writingjuly,listeningjuly,
      readingjuly,averagejuly,rankjuly);

  }
const saveData = (name,id,sex,grade,speaking,writing,listening,
  reading,average,rank,speakingNov,writingNov,listeningNov,
  readingNov,averageNov,rankNOv,speakingDec,writingDec,listeningDec,
  readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
  readingJan,averageJan,rankJan,speakingfeb,writingfeb,
  listeningfeb,readingfeb,averagefeb,rankfeb,myNov,myDec,myJan,myFeb,
  my1Score4,my1Se,my1Sa,my1SR,my1SM,my1SeR,my1MonR,my1SaR,
  my1SeRa,my1SeRme,speakingmar,writingmar,listeningmar,
  readingmar,averagemar,rankmar,speakingma,writingma,listeningma,
  readingma,averagema,rankma,speakingjun,writingjun,listeningjun,
  readingjun,averagejun,rankjun,myMar,myMay,myJune,myJuly,my2Score4,
  my2Se,my2Sa,my2SR,my2SM,my2SeR,my2MonR,my2SaR,
  my2SeRa,my2SeRme,my1SaY,my2SaY,myAaY,myKy,myMy,myOy,myKh,
  speakingjuly,writingjuly,listeningjuly,
  readingjuly,averagejuly,rankjuly) => {
    var newData = my5bAll.push();
    newData.set({
        name: name,
        id: id,
        sex: sex,
        grade: grade,
        speaking: speaking,
        writing: writing,
        listening: listening,
        reading: reading,
        average: average,
        rank: rank,
        //November
        speakingNov: speakingNov,
        writingNov: writingNov,
        listeningNov: listeningNov,
        readingNov: readingNov,
        averageNov: averageNov,
        rankNOv: rankNOv,
        //December
        speakingDec: speakingDec,
        writingDec: writingDec,
        listeningDec: listeningDec,
        readingDec: readingDec,
        averageDec: averageDec,
        rankDec: rankDec,
        //January
        speakingJan: speakingJan,
        writingJan: writingJan,
        listeningJan: listeningJan,
        readingJan: readingJan,
        averageJan: averageJan,
        rankJan: rankJan,
        //Febuary
        speakingfeb: speakingfeb,
        writingfeb: writingfeb,
        listeningfeb: listeningfeb,
        readingfeb: readingfeb,
        averagefeb: averagefeb,
        rankfeb: rankfeb,
        //1st 4 months
        myNov: myNov,
        myDec: myDec,
        myJan: myJan,
        myFeb: myFeb,
        my1Score4: my1Score4,
        //1st Semester Exam
        my1Se: my1Se,
        my1Sa: my1Sa,
        my1SR: my1SR,
        my1SM: my1SM,
        //1st Semester Result
        my1SeR: my1SeR,
        my1MonR: my1MonR,
        my1SaR: my1SaR,
        my1SeRa: my1SeRa,
        my1SeRme: my1SeRme,
        //March
        speakingmar: speakingmar,
        writingmar: writingmar,
        listeningmar: listeningmar,
        readingmar: readingmar,
        averagemar: averagemar,
        rankmar: rankmar,
        //April-May
        speakingma: speakingma,
        writingma: writingma,
        listeningma: listeningma,
        readingma: readingma,
        averagema: averagema,
        rankma: rankma,
        //June
        speakingjun: speakingjun,
        writingjun: writingjun,
        listeningjun: listeningjun,
        readingjun: readingjun,
        averagejun: averagejun,
        rankjun: rankjun,
        //July
        speakingjuly: speakingjuly,
        writingjuly: writingjuly,
        listeningjuly: listeningjuly,
        readingjuly: readingjuly,
        averagejuly: averagejuly,
        rankjuly: rankjuly,
        //2nd 4 months
        myMar: myMar,
        myMay: myMay,
        myJune: myJune,
        myJuly: myJuly,
        my2Score4: my2Score4,
        //2nd Semester Exam
        my2Se: my2Se,
        my2Sa: my2Sa,
        my2SR: my2SR,
        my2SM: my2SM,
        //2nd Semester Result
        my2SeR: my2SeR,
        my2MonR: my2MonR,
        my2SaR: my2SaR,
        my2SeRa: my2SeRa,
        my2SeRme: my2SeRme,
        //Annual Year
        my1SaY: my1SaY,
        my2SaY: my2SaY,
        myAaY: myAaY,
        myKy: myKy,
        myMy: myMy,
        myOy: myOy,
        //Khmer Name
        myKh: myKh,
        
    });
};
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
function selectAllData(){
  document.getElementById('tbody1').innerHTML="";
  studentN0=0;
  studentN0Pop = 0;

  firebase.database().ref('2bAllData').once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(CurrentRecord){
        var name = CurrentRecord.val().name;
        var id = CurrentRecord.val().id;
        var sex = CurrentRecord.val().sex;
        var grade = CurrentRecord.val().grade;
        var speaking = CurrentRecord.val().speaking;
        var writing = CurrentRecord.val().writing;
        var listening = CurrentRecord.val().listening;
        var reading = CurrentRecord.val().reading;
        var average = CurrentRecord.val().average;
        var rank = CurrentRecord.val().rank;
      //November
      var speakingNov = CurrentRecord.val().speakingNov;
      var writingNov = CurrentRecord.val().writingNov;
      var listeningNov = CurrentRecord.val().listeningNov;
      var readingNov = CurrentRecord.val().readingNov;
      var averageNov = CurrentRecord.val().averageNov;
      var rankNOv = CurrentRecord.val().rankNOv;
      //December
      var speakingDec = CurrentRecord.val().speakingDec;
      var writingDec = CurrentRecord.val().writingDec;
      var listeningDec = CurrentRecord.val().listeningDec;
      var readingDec = CurrentRecord.val().readingDec;
      var averageDec = CurrentRecord.val().averageDec;
      var rankDec = CurrentRecord.val().rankDec;
    //January
    var speakingJan = CurrentRecord.val().speakingJan;
    var writingJan = CurrentRecord.val().writingJan;
    var listeningJan = CurrentRecord.val().listeningJan;
    var readingJan = CurrentRecord.val().readingJan;
    var averageJan = CurrentRecord.val().averageJan;
    var rankJan = CurrentRecord.val().rankJan;
      //Februay
      var speakingfeb = CurrentRecord.val().speakingfeb;
      var writingfeb = CurrentRecord.val().writingfeb;
      var listeningfeb = CurrentRecord.val().listeningfeb;
      var readingfeb = CurrentRecord.val().readingfeb;
      var averagefeb = CurrentRecord.val().averagefeb;
      var rankfeb = CurrentRecord.val().rankfeb;
      //1st 4 months
      var myNov = CurrentRecord.val().myNov;
      var myDec = CurrentRecord.val().myDec;
      var myJan = CurrentRecord.val().myJan;
      var myFeb = CurrentRecord.val().myFeb;
      var my1Score4 = CurrentRecord.val().my1Score4;
      //1st Semester Exam
      var my1Se = CurrentRecord.val().my1Se;
      var my1Sa = CurrentRecord.val().my1Sa;
      var my1SR = CurrentRecord.val().my1SR;
      var my1SM = CurrentRecord.val().my1SM;
      //1st Semester Result
      var my1SeR = CurrentRecord.val().my1SeR;
      var my1MonR = CurrentRecord.val().my1MonR;
      var my1SaR = CurrentRecord.val().my1SaR;
      var my1SeRa = CurrentRecord.val().my1SeRa;
      var my1SeRme = CurrentRecord.val().my1SeRme;
      //March
      var speakingmar = CurrentRecord.val().speakingmar;
      var writingmar = CurrentRecord.val().writingmar;
      var listeningmar = CurrentRecord.val().listeningmar;
      var readingmar = CurrentRecord.val().readingmar;
      var averagemar = CurrentRecord.val().averagemar;
      var rankmar = CurrentRecord.val().rankmar;
      //April-May
      var speakingma = CurrentRecord.val().speakingma;
      var writingma = CurrentRecord.val().writingma;
      var listeningma = CurrentRecord.val().listeningma;
      var readingma = CurrentRecord.val().readingma;
      var averagema = CurrentRecord.val().averagema;
      var rankma = CurrentRecord.val().rankma;
      //June
      var speakingjun = CurrentRecord.val().speakingjun;
      var writingjun = CurrentRecord.val().writingjun;
      var listeningjun = CurrentRecord.val().listeningjun;
      var readingjun = CurrentRecord.val().readingjun;
      var averagejun = CurrentRecord.val().averagejun;
      var rankjun = CurrentRecord.val().rankjun;
      //July
      var speakingjuly = CurrentRecord.val().speakingjuly;
      var writingjuly = CurrentRecord.val().writingjuly;
      var listeningjuly = CurrentRecord.val().listeningjuly;
      var readingjuly = CurrentRecord.val().readingjuly;
      var averagejuly = CurrentRecord.val().averagejuly;
      var rankjuly = CurrentRecord.val().rankjuly;
      //2nd 4 months
      var myMar = CurrentRecord.val().myMar;
      var myMay = CurrentRecord.val().myMay;
      var myJune = CurrentRecord.val().myJune;
      var myJuly = CurrentRecord.val().myJuly;
      var my2Score4 = CurrentRecord.val().my2Score4;
      //2nd Semester Exam
      var my2Se = CurrentRecord.val().my2Se;
      var my2Sa = CurrentRecord.val().my2Sa;
      var my2SR = CurrentRecord.val().my2SR;
      var my2SM = CurrentRecord.val().my2SM;
      //2nd Semester Result
      var my2SeR = CurrentRecord.val().my2SeR;
      var my2MonR = CurrentRecord.val().my2MonR;
      var my2SaR = CurrentRecord.val().my2SaR;
      var my2SeRa = CurrentRecord.val().my2SeRa;
      var my2SeRme = CurrentRecord.val().my2SeRme;
      //Annul Year
      var my1SaY = CurrentRecord.val().my1SaY;
      var my2SaY = CurrentRecord.val().my2SaY;
      var myAaY = CurrentRecord.val().myAaY;
      var myKy = CurrentRecord.val().myKy;
      var myMy = CurrentRecord.val().myMy;
      var myOy = CurrentRecord.val().myOy;
      //Khmer Name
      var myKh = CurrentRecord.val().myKh;

        addItemsToTable(name,id,sex,grade,speaking,writing,listening,
          reading,average,rank,speakingNov,writingNov,listeningNov,
          readingNov,averageNov,rankNOv,speakingDec,writingDec,listeningDec,
          readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
          readingJan,averageJan,rankJan,speakingfeb,writingfeb,
          listeningfeb,readingfeb,averagefeb,rankfeb,myNov,myDec,myJan,myFeb,
          my1Score4,my1Se,my1Sa,my1SR,my1SM,my1SeR,my1MonR,my1SaR,
          my1SeRa,my1SeRme,speakingmar,writingmar,listeningmar,
          readingmar,averagemar,rankmar,speakingma,writingma,listeningma,
          readingma,averagema,rankma,speakingjun,writingjun,listeningjun,
          readingjun,averagejun,rankjun,myMar,myMay,myJune,myJuly,my2Score4,
          my2Se,my2Sa,my2SR,my2SM,my2SeR,my2MonR,my2SaR,
          my2SeRa,my2SeRme,my1SaY,my2SaY,myAaY,myKy,myMy,myOy,myKh,
          speakingjuly,writingjuly,listeningjuly,
          readingjuly,averagejuly,rankjuly);
        addItemsToTablePop(name,id,sex,grade,speaking,writing,listening,
          reading,average,rank,speakingNov,writingNov,listeningNov,
          readingNov,averageNov,rankNOv,speakingDec,writingDec,listeningDec,
          readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
          readingJan,averageJan,rankJan,speakingfeb,writingfeb,
          listeningfeb,readingfeb,averagefeb,rankfeb,myNov,myDec,myJan,myFeb,
          my1Score4,my1Se,my1Sa,my1SR,my1SM,my1SeR,my1MonR,my1SaR,
          my1SeRa,my1SeRme,speakingmar,writingmar,listeningmar,
          readingmar,averagemar,rankmar,speakingma,writingma,listeningma,
          readingma,averagema,rankma,speakingjun,writingjun,listeningjun,
          readingjun,averagejun,rankjun,myMar,myMay,myJune,myJuly,my2Score4,
          my2Se,my2Sa,my2SR,my2SM,my2SeR,my2MonR,my2SaR,
          my2SeRa,my2SeRme,my1SaY,my2SaY,myAaY,myKy,myMy,myOy,myKh,
          speakingjuly,writingjuly,listeningjuly,
          readingjuly,averagejuly,rankjuly);
      }
    );
  });
}
window.onload = selectAllData;
var studentN0;
var studentN0Pop;

var stdList = [];
var stdListPop = [];
function addItemsToTable(name,id,sex,grade,speaking,writing,listening,
  reading,average,rank,speakingNov,writingNov,listeningNov,
  readingNov,averageNov,rankNOv,speakingDec,writingDec,listeningDec,
  readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
  readingJan,averageJan,rankJan,speakingfeb,writingfeb,
  listeningfeb,readingfeb,averagefeb,rankfeb,myNov,myDec,myJan,myFeb,
  my1Score4,my1Se,my1Sa,my1SR,my1SM,my1SeR,my1MonR,my1SaR,
  my1SeRa,my1SeRme,speakingmar,writingmar,listeningmar,
  readingmar,averagemar,rankmar,speakingma,writingma,listeningma,
  readingma,averagema,rankma,speakingjun,writingjun,listeningjun,
  readingjun,averagejun,rankjun,myMar,myMay,myJune,myJuly,my2Score4,
  my2Se,my2Sa,my2SR,my2SM,my2SeR,my2MonR,my2SaR,
  my2SeRa,my2SeRme,my1SaY,my2SaY,myAaY,myKy,myMy,myOy,myKh,
  speakingjuly,writingjuly,listeningjuly,
  readingjuly,averagejuly,rankjuly){
  var tbody = document.getElementById('tbody21');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');

  stdList.push([name,id,sex,grade,speaking,writing,listening,
    reading,average,rank,speakingNov,writingNov,listeningNov,
    readingNov,averageNov,rankNOv,speakingDec,writingDec,listeningDec,
    readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
    readingJan,averageJan,rankJan,speakingfeb,writingfeb,
    listeningfeb,readingfeb,averagefeb,rankfeb,myNov,myDec,myJan,myFeb,
    my1Score4,my1Se,my1Sa,my1SR,my1SM,my1SeR,my1MonR,my1SaR,
    my1SeRa,my1SeRme,speakingmar,writingmar,listeningmar,
    readingmar,averagemar,rankmar,speakingma,writingma,listeningma,
    readingma,averagema,rankma,speakingjun,writingjun,listeningjun,
    readingjun,averagejun,rankjun,myMar,myMay,myJune,myJuly,my2Score4,
    my2Se,my2Sa,my2SR,my2SM,my2SeR,my2MonR,my2SaR,
    my2SeRa,my2SeRme,my1SaY,my2SaY,myAaY,myKy,myMy,myOy,myKh,
    speakingjuly,writingjuly,listeningjuly,
    readingjuly,averagejuly,rankjuly]);
    td0.innerHTML = ++studentN0;
    td1.innerHTML = name;
    td2.innerHTML = myKh;
    td3.innerHTML = id;
    td4.innerHTML = sex;
    td5.innerHTML = grade;
  
  
  
  
    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
  
  td1.innerHTML = `<button type="button" class="button-6" role="button" data-toggle="modal" data-target="#exampleModal" onclick="Fillbox(${studentN0})">${name}</button>`;
  td2.innerHTML = `<button type="button" class="button-6" role="button" data-toggle="modal" data-target="#exampleModal" onclick="Fillbox(${studentN0})">${myKh}</button>`;
  
  tbody.appendChild(trow);
}
function addItemsToTablePop(name,id,sex,grade,speaking,writing,listening,
  reading,average,rank,speakingNov,writingNov,listeningNov,
  readingNov,averageNov,rankNOv,speakingDec,writingDec,listeningDec,
  readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
  readingJan,averageJan,rankJan,speakingfeb,writingfeb,
  listeningfeb,readingfeb,averagefeb,rankfeb,myNov,myDec,myJan,myFeb,
  my1Score4,my1Se,my1Sa,my1SR,my1SM,my1SeR,my1MonR,my1SaR,
  my1SeRa,my1SeRme,speakingmar,writingmar,listeningmar,
  readingmar,averagemar,rankmar,speakingma,writingma,listeningma,
  readingma,averagema,rankma,speakingjun,writingjun,listeningjun,
  readingjun,averagejun,rankjun,myMar,myMay,myJune,myJuly,my2Score4,
  my2Se,my2Sa,my2SR,my2SM,my2SeR,my2MonR,my2SaR,
  my2SeRa,my2SeRme,my1SaY,my2SaY,myAaY,myKy,myMy,myOy,myKh,
  speakingjuly,writingjuly,listeningjuly,
  readingjuly,averagejuly,rankjuly){
  var tbody = document.getElementById('tbody1');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');

  stdListPop.push([name,id,sex,grade,speaking,writing,listening,
    reading,average,rank,speakingNov,writingNov,listeningNov,
    readingNov,averageNov,rankNOv,speakingDec,writingDec,listeningDec,
    readingDec,averageDec,rankDec,speakingJan,writingJan,listeningJan,
    readingJan,averageJan,rankJan,speakingfeb,writingfeb,
    listeningfeb,readingfeb,averagefeb,rankfeb,myNov,myDec,myJan,myFeb,
    my1Score4,my1Se,my1Sa,my1SR,my1SM,my1SeR,my1MonR,my1SaR,
    my1SeRa,my1SeRme,speakingmar,writingmar,listeningmar,
    readingmar,averagemar,rankmar,speakingma,writingma,listeningma,
    readingma,averagema,rankma,speakingjun,writingjun,listeningjun,
    readingjun,averagejun,rankjun,myMar,myMay,myJune,myJuly,my2Score4,
    my2Se,my2Sa,my2SR,my2SM,my2SeR,my2MonR,my2SaR,
    my2SeRa,my2SeRme,my1SaY,my2SaY,myAaY,myKy,myMy,myOy,myKh,
    speakingjuly,writingjuly,listeningjuly,
    readingjuly,averagejuly,rankjuly]);
    td0.innerHTML = ++studentN0Pop;
    td1.innerHTML = myKh;
  
  
    trow.appendChild(td0);
    trow.appendChild(td1);
  
  td1.innerHTML = `<button type="button" class="button-6" role="button" onclick="Fillbox(${studentN0Pop})">${myKh}</button>`;
  
  tbody.appendChild(trow);
}


var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var Mgrade = document.getElementById('myGrade');
var Mspeaking = document.getElementById('mySoct');
var Mwriting = document.getElementById('myWoct');
var Mlistening = document.getElementById('myLoct');
var Mreadiing = document.getElementById('myRoct');
var Maverage = document.getElementById('myAoct');
var Mrank = document.getElementById('myKoct');
//November
var MspeakingNov = document.getElementById('mySnov');
var MwritingNov = document.getElementById('myWnov');
var MlisteningNov = document.getElementById('myLnov');
var MreadiingNov = document.getElementById('myRnov');
var MaverageNov = document.getElementById('myAnov');
var MrankNov = document.getElementById('myKnov');
//December
var MspeakingDec = document.getElementById('mySdec');
var MwritingDec = document.getElementById('myWdec');
var MlisteningDec = document.getElementById('myLdec');
var MreadiingDec = document.getElementById('myRdec');
var MaverageDec = document.getElementById('myAdec');
var MrankDec = document.getElementById('myKdec');
//January
var MspeakingJan = document.getElementById('mySjan');
var MwritingJan = document.getElementById('myWjan');
var MlisteningJan = document.getElementById('myLjan');
var MreadiingJan = document.getElementById('myRjan');
var MaverageJan = document.getElementById('myAjan');
var MrankJan = document.getElementById('myKjan');
//February
var Mspeakingfeb = document.getElementById('mySfeb');
var Mwritingfeb = document.getElementById('myWfeb');
var Mlisteningfeb = document.getElementById('myLfeb');
var Mreadiingfeb = document.getElementById('myRfeb');
var Maveragefeb = document.getElementById('myAfeb');
var Mrankfeb = document.getElementById('myKfeb');
//1st 4 months
var MmyNov = document.getElementById('myNov');
var MmyDec = document.getElementById('myDec');
var MmyJan = document.getElementById('myJan');
var MmyFeb = document.getElementById('myFeb');
var Mmy1Score4 = document.getElementById('my1Score4');
//1st Semester Exam
var Mmy1Se = document.getElementById('my1Se');
var Mmy1Sa = document.getElementById('my1Sa');
var Mmy1SR = document.getElementById('my1SR');
var Mmy1SM = document.getElementById('my1SM');
//1st Semester Result
var Mmy1SeR = document.getElementById('my1SeR');
var Mmy1MonR = document.getElementById('my1MonR');
var Mmy1SaR = document.getElementById('my1SaR');
var Mmy1SeRa = document.getElementById('my1SeRa');
var Mmy1SeRme = document.getElementById('my1SeRme');
//March
var Mspeakingmar = document.getElementById('mySmar');
var Mwritingmar = document.getElementById('myWmar');
var Mlisteningmar = document.getElementById('myLmar');
var Mreadiingmar = document.getElementById('myRmar');
var Maveragemar = document.getElementById('myAmar');
var Mrankmar = document.getElementById('myKmar');
//April-May
var Mspeakingma = document.getElementById('mySma');
var Mwritingma = document.getElementById('myWma');
var Mlisteningma = document.getElementById('myLma');
var Mreadiingma = document.getElementById('myRma');
var Maveragema = document.getElementById('myAma');
var Mrankma = document.getElementById('myKma');
//June
var Mspeakingjun = document.getElementById('mySjun');
var Mwritingjun = document.getElementById('myWjun');
var Mlisteningjun = document.getElementById('myLjun');
var Mreadiingjun = document.getElementById('myRjun');
var Maveragejun = document.getElementById('myAjun');
var Mrankjun = document.getElementById('myKjun');
//2ns 4 months
var MmyMar = document.getElementById('myMar');
var MmyMay = document.getElementById('myMay');
var MmyJune = document.getElementById('myJune');
var MmyJuly = document.getElementById('myJuly');
var Mmy2Score4 = document.getElementById('my2Score4');
//2ns Semester Exam
var Mmy2Se = document.getElementById('my2Se');
var Mmy2Sa = document.getElementById('my2Sa');
var Mmy2SR = document.getElementById('my2SR');
var Mmy2SM = document.getElementById('my2SM');
//2ns Semester Result
var Mmy2SeR = document.getElementById('my2SeR');
var Mmy2MonR = document.getElementById('my2MonR');
var Mmy2SaR = document.getElementById('my2SaR');
var Mmy2SeRa = document.getElementById('my2SeRa');
var Mmy2SeRme = document.getElementById('my2SeRme');
//Annual Year
var MfirstY = document.getElementById('my1SaY');
var MsecondY = document.getElementById('my2SaY');
var MannualTotal = document.getElementById('myAaY');
var MrankY = document.getElementById('myKy');
var MmentionY = document.getElementById('myMy');
var MotherY = document.getElementById('myOy');
//Khmer Name
var MmyKh = document.getElementById('myKhname');
//July
var Mspeakingjuly = document.getElementById('mySjuly');
var Mwritingjuly = document.getElementById('myWjuly');
var Mlisteningjuly = document.getElementById('myLjuly');
var Mreadiingjuly = document.getElementById('myRjuly');
var Maveragejuly = document.getElementById('myAjuly');
var Mrankjuly = document.getElementById('myKjuly');


var BtnSubmit = document.getElementById('mySubmit');
var BtnUpdate = document.getElementById('myUpdate');
var BtnDele = document.getElementById('myDele');

function Fillbox(index){
  if(index==null){
    BtnSubmit.style.display='inline-block';
    BtnUpdate.style.display='none';
    BtnDele.style.display='none';
  }
  else{
    --index;
    Mname.value = stdList[index][0];
    Mid.value = stdList[index][1];
    Msex.value = stdList[index][2];
    Mgrade.value = stdList[index][3];
    Mspeaking.value = stdList[index][4];
    Mwriting.value = stdList[index][5];
    Mlistening.value = stdList[index][6];
    Mreadiing.value = stdList[index][7];
    Maverage.value = stdList[index][8];
    Mrank.value = stdList[index][9];
    //November
    MspeakingNov.value = stdList[index][10];
    MwritingNov.value = stdList[index][11];
    MlisteningNov.value = stdList[index][12];
    MreadiingNov.value = stdList[index][13];
    MaverageNov.value = stdList[index][14];
    MrankNov.value = stdList[index][15];
    //December
    MspeakingDec.value = stdList[index][16];
    MwritingDec.value = stdList[index][17];
    MlisteningDec.value = stdList[index][18];
    MreadiingDec.value = stdList[index][19];
    MaverageDec.value = stdList[index][20];
    MrankDec.value = stdList[index][21];
    //January
    MspeakingJan.value = stdList[index][22];
    MwritingJan.value = stdList[index][23];
    MlisteningJan.value = stdList[index][24];
    MreadiingJan.value = stdList[index][25];
    MaverageJan.value = stdList[index][26];
    MrankJan.value = stdList[index][27];
    //February
    Mspeakingfeb.value = stdList[index][28];
    Mwritingfeb.value = stdList[index][29];
    Mlisteningfeb.value = stdList[index][30];
    Mreadiingfeb.value = stdList[index][31];
    Maveragefeb.value = stdList[index][32];
    Mrankfeb.value = stdList[index][33];
    //1st 4 months
    MmyNov.value = stdList[index][34];
    MmyDec.value = stdList[index][35];
    MmyJan.value = stdList[index][36];
    MmyFeb.value = stdList[index][37];
    Mmy1Score4.value = stdList[index][38];
    
    //1st Semester Exam
    Mmy1Se.value = stdList[index][39];
    Mmy1Sa.value = stdList[index][40];
    Mmy1SR.value = stdList[index][41];
    Mmy1SM.value = stdList[index][42];
    //1st Semester Result
    Mmy1SeR.value = stdList[index][43];
    Mmy1MonR.value = stdList[index][44];
    Mmy1SaR.value = stdList[index][45];
    Mmy1SeRa.value = stdList[index][46];
    Mmy1SeRme.value = stdList[index][47];
    //March
    Mspeakingmar.value = stdList[index][48];
    Mwritingmar.value = stdList[index][49];
    Mlisteningmar.value = stdList[index][50];
    Mreadiingmar.value = stdList[index][51];
    Maveragemar.value = stdList[index][52];
    Mrankmar.value = stdList[index][53];
    //April-May
    Mspeakingma.value = stdList[index][54];
    Mwritingma.value = stdList[index][55];
    Mlisteningma.value = stdList[index][56];
    Mreadiingma.value = stdList[index][57];
    Maveragema.value = stdList[index][58];
    Mrankma.value = stdList[index][59];
    //June
    Mspeakingjun.value = stdList[index][60];
    Mwritingjun.value = stdList[index][61];
    Mlisteningjun.value = stdList[index][62];
    Mreadiingjun.value = stdList[index][63];
    Maveragejun.value = stdList[index][64];
    Mrankjun.value = stdList[index][65];
    //2nd 4 months
    MmyMar.value = stdList[index][66];
    MmyMay.value = stdList[index][67];
    MmyJune.value = stdList[index][68];
    MmyJuly.value = stdList[index][69];
    Mmy2Score4.value = stdList[index][70];
    
    //2nd Semester Exam
    Mmy2Se.value = stdList[index][71];
    Mmy2Sa.value = stdList[index][72];
    Mmy2SR.value = stdList[index][73];
    Mmy2SM.value = stdList[index][74];
    //2nd Semester Result
    Mmy2SeR.value = stdList[index][75];
    Mmy2MonR.value = stdList[index][76];
    Mmy2SaR.value = stdList[index][77];
    Mmy2SeRa.value = stdList[index][78];
    Mmy2SeRme.value = stdList[index][79];
    //Annual Year
    MfirstY.value = stdList[index][80];
    MsecondY.value = stdList[index][81];
    MannualTotal.value = stdList[index][82];
    MrankY.value = stdList[index][83];
    MmentionY.value = stdList[index][84];
    MotherY.value = stdList[index][85];
    //Khmer Name
    MmyKh.value = stdList[index][86];
    //July
    Mspeakingjuly.value = stdList[index][87];
    Mwritingjuly.value = stdList[index][88];
    Mlisteningjuly.value = stdList[index][89];
    Mreadiingjuly.value = stdList[index][90];
    Maveragejuly.value = stdList[index][91];
    Mrankjuly.value = stdList[index][92];



    BtnSubmit.style.display='none';
    BtnUpdate.style.display='inline-block';
    BtnDele.style.display='inline-block';


  }
}

function NewBox(){
  BtnSubmit.style.display='inline-block';
  BtnUpdate.style.display='none';
  BtnDele.style.display='none';
var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var Mgrade = document.getElementById('myGrade');
var Mspeaking = document.getElementById('mySoct');
var Mwriting = document.getElementById('myWoct');
var Mlistening = document.getElementById('myLoct');
var Mreadiing = document.getElementById('myRoct');
var Maverage = document.getElementById('myAoct');
var Mrank = document.getElementById('myKoct');
//November
var MspeakingNov = document.getElementById('mySnov');
var MwritingNov = document.getElementById('myWnov');
var MlisteningNov = document.getElementById('myLnov');
var MreadiingNov = document.getElementById('myRnov');
var MaverageNov = document.getElementById('myAnov');
var MrankNov = document.getElementById('myKnov');
//December
var MspeakingDec = document.getElementById('mySdec');
var MwritingDec = document.getElementById('myWdec');
var MlisteningDec = document.getElementById('myLdec');
var MreadiingDec = document.getElementById('myRdec');
var MaverageDec = document.getElementById('myAdec');
var MrankDec = document.getElementById('myKdec');
//January
var MspeakingJan = document.getElementById('mySjan');
var MwritingJan = document.getElementById('myWjan');
var MlisteningJan = document.getElementById('myLjan');
var MreadiingJan = document.getElementById('myRjan');
var MaverageJan = document.getElementById('myAjan');
var MrankJan = document.getElementById('myKjan');
//February
var Mspeakingfeb = document.getElementById('mySfeb');
var Mwritingfeb = document.getElementById('myWfeb');
var Mlisteningfeb = document.getElementById('myLfeb');
var Mreadiingfeb = document.getElementById('myRfeb');
var Maveragefeb = document.getElementById('myAfeb');
var Mrankfeb = document.getElementById('myKfeb');
//1st 4 months
var MmyNov = document.getElementById('myNov');
var MmyDec = document.getElementById('myDec');
var MmyJan = document.getElementById('myJan');
var MmyFeb = document.getElementById('myFeb');
var Mmy1Score4 = document.getElementById('my1Score4');
//1st Semester Exam
var Mmy1Se = document.getElementById('my1Se');
var Mmy1Sa = document.getElementById('my1Sa');
var Mmy1SR = document.getElementById('my1SR');
var Mmy1SM = document.getElementById('my1SM');
//1st Semester Result
var Mmy1SeR = document.getElementById('my1SeR');
var Mmy1MonR = document.getElementById('my1MonR');
var Mmy1SaR = document.getElementById('my1SaR');
var Mmy1SeRa = document.getElementById('my1SeRa');
var Mmy1SeRme = document.getElementById('my1SeRme');
//March
var Mspeakingmar = document.getElementById('mySmar');
var Mwritingmar = document.getElementById('myWmar');
var Mlisteningmar = document.getElementById('myLmar');
var Mreadiingmar = document.getElementById('myRmar');
var Maveragemar = document.getElementById('myAmar');
var Mrankmar = document.getElementById('myKmar');
//April-May
var Mspeakingma = document.getElementById('mySma');
var Mwritingma = document.getElementById('myWma');
var Mlisteningma = document.getElementById('myLma');
var Mreadiingma = document.getElementById('myRma');
var Maveragema = document.getElementById('myAma');
var Mrankma = document.getElementById('myKma');
//June
var Mspeakingjun = document.getElementById('mySjun');
var Mwritingjun = document.getElementById('myWjun');
var Mlisteningjun = document.getElementById('myLjun');
var Mreadiingjun = document.getElementById('myRjun');
var Maveragejun = document.getElementById('myAjun');
var Mrankjun = document.getElementById('myKjun');
//2ns 4 months
var MmyMar = document.getElementById('myMar');
var MmyMay = document.getElementById('myMay');
var MmyJune = document.getElementById('myJune');
var MmyJuly = document.getElementById('myJuly');
var Mmy2Score4 = document.getElementById('my2Score4');
//2ns Semester Exam
var Mmy2Se = document.getElementById('my2Se');
var Mmy2Sa = document.getElementById('my2Sa');
var Mmy2SR = document.getElementById('my2SR');
var Mmy2SM = document.getElementById('my2SM');
//2ns Semester Result
var Mmy2SeR = document.getElementById('my2SeR');
var Mmy2MonR = document.getElementById('my2MonR');
var Mmy2SaR = document.getElementById('my2SaR');
var Mmy2SeRa = document.getElementById('my2SeRa');
var Mmy2SeRme = document.getElementById('my2SeRme');
//Annual Year
var MfirstY = document.getElementById('my1SaY');
var MsecondY = document.getElementById('my2SaY');
var MannualTotal = document.getElementById('myAaY');
var MrankY = document.getElementById('myKy');
var MmentionY = document.getElementById('myMy');
var MotherY = document.getElementById('myOy');
//Khmer Name
var MmyKh = document.getElementById('myKhname');
//July
var Mspeakingjuly = document.getElementById('mySjuly');
var Mwritingjuly = document.getElementById('myWjuly');
var Mlisteningjuly = document.getElementById('myLjuly');
var Mreadiingjuly = document.getElementById('myRjuly');
var Maveragejuly = document.getElementById('myAjuly');
var Mrankjuly = document.getElementById('myKjuly');

Mname.value = "";
Mid.value =  "";
Msex.value =  "";
Mgrade.value =  "";
Mspeaking.value =  "";
Mwriting.value =  "";
Mlistening.value =  "";
Mreadiing.value =  "";
Maverage.value =  "";
Mrank.value =  "";
//November
MspeakingNov.value =  "";
MwritingNov.value =  "";
MlisteningNov.value =  "";
MreadiingNov.value =  "";
MaverageNov.value =  "";
MrankNov.value =  "";
//December
MspeakingDec.value =  "";
MwritingDec.value =  "";
MlisteningDec.value =  "";
MreadiingDec.value =  "";
MaverageDec.value =  "";
MrankDec.value =  "";
//January
MspeakingJan.value =  "";
MwritingJan.value =  "";
MlisteningJan.value =  "";
MreadiingJan.value =  "";
MaverageJan.value =  "";
MrankJan.value =  "";
//February
Mspeakingfeb.value =  "";
Mwritingfeb.value =  "";
Mlisteningfeb.value =  "";
Mreadiingfeb.value =  "";
Maveragefeb.value =  "";
Mrankfeb.value =  "";
//1st 4 months
MmyNov.value =  "";
MmyDec.value =  "";
MmyJan.value =  "";
MmyFeb.value =  "";
Mmy1Score4.value =  "";

//1st Semester Exam
Mmy1Se.value =  "";
Mmy1Sa.value =  "";
Mmy1SR.value =  "";
Mmy1SM.value =  "";
//1st Semester Result
Mmy1SeR.value =  "";
Mmy1MonR.value =  "";
Mmy1SaR.value =  "";
Mmy1SeRa.value =  "";
Mmy1SeRme.value =  "";
//March
Mspeakingmar.value =  "";
Mwritingmar.value =  "";
Mlisteningmar.value =  "";
Mreadiingmar.value =  "";
Maveragemar.value =  "";
Mrankmar.value =  "";
//April-May
Mspeakingma.value =  "";
Mwritingma.value =  "";
Mlisteningma.value =  "";
Mreadiingma.value =  "";
Maveragema.value =  "";
Mrankma.value =  "";
//June
Mspeakingjun.value =  "";
Mwritingjun.value =  "";
Mlisteningjun.value =  "";
Mreadiingjun.value =  "";
Maveragejun.value =  "";
Mrankjun.value =  "";
//2nd 4 months
MmyMar.value =  "";
MmyMay.value =  "";
MmyJune.value =  "";
MmyJuly.value =  "";
Mmy2Score4.value =  "";

//2nd Semester Exam
Mmy2Se.value =  "";
Mmy2Sa.value =  "";
Mmy2SR.value =  "";
Mmy2SM.value =  "";
//2nd Semester Result
Mmy2SeR.value =  "";
Mmy2MonR.value =  "";
Mmy2SaR.value =  "";
Mmy2SeRa.value =  "";
Mmy2SeRme.value =  "";
//Annual Year
MfirstY.value =  "";
MsecondY.value =  "";
MannualTotal.value =  "";
MrankY.value =  "";
MmentionY.value =  "";
MotherY.value =  "";
//Khmer Name
MmyKh.value =  "";
//July
Mspeakingjuly.value =  "";
Mwritingjuly.value =  "";
Mlisteningjuly.value =  "";
Mreadiingjuly.value =  "";
Maveragejuly.value =  "";
Mrankjuly.value =  "";
}


function AddStd(e){
  firebase.database().ref("2bAllData/"+Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      grade: Mgrade.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
      listening: Mlistening.value,
      reading: Mreadiing.value,
      average: Maverage.value,
      rank: Mrank.value,
      //November
      speakingNov: MspeakingNov.value,
      writingNov: MwritingNov.value,
      listeningNov: MlisteningNov.value,
      readingNov: MreadiingNov.value,
      averageNov: MaverageNov.value,
      rankNOv: MrankNov.value,
      //December
      speakingDec: MspeakingDec.value,
      writingDec: MwritingDec.value,
      listeningDec: MlisteningDec.value,
      readingDec: MreadiingDec.value,
      averageDec: MaverageDec.value,
      rankDec: MrankDec.value,
      //January
      speakingJan: MspeakingJan.value,
      writingJan: MwritingJan.value,
      listeningJan: MlisteningJan.value,
      readingJan: MreadiingJan.value,
      averageJan: MaverageJan.value,
      rankJan: MrankJan.value,
      //February
      speakingfeb: Mspeakingfeb.value,
      writingfeb: Mwritingfeb.value,
      listeningfeb: Mlisteningfeb.value,
      readingfeb: Mreadiingfeb.value,
      averagefeb: Maveragefeb.value,
      rankfeb: Mrankfeb.value,
      //1st 4 months
      myNov: MmyNov.value,
      myDec: MmyDec.value,
      myJan: MmyJan.value,
      myFeb: MmyFeb.value,
      my1Score4: Mmy1Score4.value,
      //1st Semester Exam
      my1Se: Mmy1Se.value,
      my1Sa: Mmy1Sa.value,
      my1SR: Mmy1SR.value,
      my1SM: Mmy1SM.value,
      //1st Semester Result
      my1SeR: Mmy1SeR.value,
      my1MonR: Mmy1MonR.value,
      my1SaR: Mmy1SaR.value,
      my1SeRa: Mmy1SeRa.value,
      my1SeRme: Mmy1SeRme.value,
      //March
      speakingmar: Mspeakingmar.value,
      writingmar: Mwritingmar.value,
      listeningmar: Mlisteningmar.value,
      readingmar: Mreadiingmar.value,
      averagemar: Maveragemar.value,
      rankmar: Mrankmar.value,
      //April-May
      speakingma: Mspeakingma.value,
      writingma: Mwritingma.value,
      listeningma: Mlisteningma.value,
      readingma: Mreadiingma.value,
      averagema: Maveragema.value,
      rankma: Mrankma.value,
      //June
      speakingjun: Mspeakingjun.value,
      writingjun: Mwritingjun.value,
      listeningjun: Mlisteningjun.value,
      readingjun: Mreadiingjun.value,
      averagejun: Maveragejun.value,
      rankjun: Mrankjun.value,
      //2nd 4 months
      myMar: MmyMar.value,
      myMay: MmyMay.value,
      myJune: MmyJune.value,
      myJuly: MmyJuly.value,
      my2Score4: Mmy2Score4.value,
      //2nd Semester Exam
      my2Se: Mmy2Se.value,
      my2Sa: Mmy2Sa.value,
      my2SR: Mmy2SR.value,
      my2SM: Mmy2SM.value,
      //2nd Semester Result
      my2SeR: Mmy2SeR.value,
      my2MonR: Mmy2MonR.value,
      my2SaR: Mmy2SaR.value,
      my2SeRa: Mmy2SeRa.value,
      my2SeRme: Mmy2SeRme.value,
      //Annual Year
      my1SaY: MfirstY.value,
      my2SaY: MsecondY.value,
      myAaY: MannualTotal.value,
      myKy: MrankY.value,
      myMy: MmentionY.value,
      myOy: MotherY.value,
      //Khmer Name
      myKh: MmyKh.value,
      //July
      speakingjuly: Mspeakingjuly.value,
      writingjuly: Mwritingjuly.value,
      listeningjuly: Mlisteningjuly.value,
      readingjuly: Mreadiingjuly.value,
      averagejuly: Maveragejuly.value,
      rankjuly: Mrankjuly.value,
     

  }, 
  )
  selectAllData();
  // window.location.reload();
  e.preventDefault();

}
function UpStd(e){
  firebase.database().ref("2bAllData/"+Mid.value).update(
    {
      name: Mname.value,
      sex: Msex.value,
      grade: Mgrade.value,
      speaking: Mspeaking.value,
      writing: Mwriting.value,
      listening: Mlistening.value,
      reading: Mreadiing.value,
      average: Maverage.value,
      rank: Mrank.value,
            //November
            speakingNov: MspeakingNov.value,
            writingNov: MwritingNov.value,
            listeningNov: MlisteningNov.value,
            readingNov: MreadiingNov.value,
            averageNov: MaverageNov.value,
            rankNOv: MrankNov.value,
       //December
       speakingDec: MspeakingDec.value,
       writingDec: MwritingDec.value,
       listeningDec: MlisteningDec.value,
       readingDec: MreadiingDec.value,
       averageDec: MaverageDec.value,
       rankDec: MrankDec.value,
       //January
       speakingJan: MspeakingJan.value,
       writingJan: MwritingJan.value,
       listeningJan: MlisteningJan.value,
       readingJan: MreadiingJan.value,
       averageJan: MaverageJan.value,
       rankJan: MrankJan.value,
      //February
      speakingfeb: Mspeakingfeb.value,
      writingfeb: Mwritingfeb.value,
      listeningfeb: Mlisteningfeb.value,
      readingfeb: Mreadiingfeb.value,
      averagefeb: Maveragefeb.value,
      rankfeb: Mrankfeb.value,
      //1st 4 months
      myNov: MmyNov.value,
      myDec: MmyDec.value,
      myJan: MmyJan.value,
      myFeb: MmyFeb.value,
      my1Score4: Mmy1Score4.value,
      //1st Semester Exam
      my1Se: Mmy1Se.value,
      my1Sa: Mmy1Sa.value,
      my1SR: Mmy1SR.value,
      my1SM: Mmy1SM.value,
      //1st Semester Result
      my1SeR: Mmy1SeR.value,
      my1MonR: Mmy1MonR.value,
      my1SaR: Mmy1SaR.value,
      my1SeRa: Mmy1SeRa.value,
      my1SeRme: Mmy1SeRme.value,
      //March
      speakingmar: Mspeakingmar.value,
      writingmar: Mwritingmar.value,
      listeningmar: Mlisteningmar.value,
      readingmar: Mreadiingmar.value,
      averagemar: Maveragemar.value,
      rankmar: Mrankmar.value,
      //April-May
      speakingma: Mspeakingma.value,
      writingma: Mwritingma.value,
      listeningma: Mlisteningma.value,
      readingma: Mreadiingma.value,
      averagema: Maveragema.value,
      rankma: Mrankma.value,
      //June
      speakingjun: Mspeakingjun.value,
      writingjun: Mwritingjun.value,
      listeningjun: Mlisteningjun.value,
      readingjun: Mreadiingjun.value,
      averagejun: Maveragejun.value,
      rankjun: Mrankjun.value,
      //2nd 4 months
      myMar: MmyMar.value,
      myMay: MmyMay.value,
      myJune: MmyJune.value,
      myJuly: MmyJuly.value,
      my2Score4: Mmy2Score4.value,
      //2nd Semester Exam
      my2Se: Mmy2Se.value,
      my2Sa: Mmy2Sa.value,
      my2SR: Mmy2SR.value,
      my2SM: Mmy2SM.value,
      //2nd Semester Result
      my2SeR: Mmy2SeR.value,
      my2MonR: Mmy2MonR.value,
      my2SaR: Mmy2SaR.value,
      my2SeRa: Mmy2SeRa.value,
      my2SeRme: Mmy2SeRme.value,
      //Annual Year
      my1SaY: MfirstY.value,
      my2SaY: MsecondY.value,
      myAaY: MannualTotal.value,
      myKy: MrankY.value,
      myMy: MmentionY.value,
      myOy: MotherY.value,
      //Khmer Name
      myKh: MmyKh.value,
      //July
      speakingjuly: Mspeakingjuly.value,
      writingjuly: Mwritingjuly.value,
      listeningjuly: Mlisteningjuly.value,
      readingjuly: Mreadiingjuly.value,
      averagejuly: Maveragejuly.value,
      rankjuly: Mrankjuly.value,

    }, 
  )
  selectAllData();
  // window.location.reload();
  e.preventDefault();

}
function DelStd(e){
  firebase.database().ref("2bAllData/"+Mid.value).remove().then(
    function(){
      selectAllData();
      // window.location.reload();
      e.preventDefault();

    }
  )


}
function DelStdAll(){
  firebase.database().ref("2bAllData").remove();

      // window.location.reload();
}

//Divid score tables
//October
function adder() {
  var num1 = parseFloat(document.getElementById('mySoct').value);
  var num2 = parseFloat(document.getElementById('myWoct').value);
  var num3 = parseFloat(document.getElementById('myLoct').value);
  var num4 = parseFloat(document.getElementById('myRoct').value);

  var get = num1 + num2 + num3 + num4;
  var total = get / 4;
  total = parseFloat(total).toFixed(2);
  document.getElementById("myAoct").value = total;
}
function divid(){
  var num5 = parseFloat(document.getElementById('myScoreoct').value);
  var score = num5;
  var get = score / 4;
  get = parseFloat(get).toFixed(2);
  document.getElementById("myWoct").value = get;
  document.getElementById("myLoct").value = get;
  document.getElementById("myRoct").value = get;
  document.getElementById("mySoct").value = get;
}

//Novmber
function adder1() {
  var num5 = parseFloat(document.getElementById('mySnov').value);
  var num6 = parseFloat(document.getElementById('myWnov').value);
  var num7 = parseFloat(document.getElementById('myLnov').value);
  var num8 = parseFloat(document.getElementById('myRnov').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAnov").value = total1;

}
function divid1(){
  var num6 = parseFloat(document.getElementById('myScorenov').value);
  var score1 = num6;
  var get2 = score1 / 4;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWnov").value = get2;
  document.getElementById("myLnov").value = get2;
  document.getElementById("myRnov").value = get2;
  document.getElementById("mySnov").value = get2;

}
//December
function adder2() {
  var num5 = parseFloat(document.getElementById('mySdec').value);
  var num6 = parseFloat(document.getElementById('myWdec').value);
  var num7 = parseFloat(document.getElementById('myLdec').value);
  var num8 = parseFloat(document.getElementById('myRdec').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAdec").value = total1;

}
function divid2(){
  var num6 = parseFloat(document.getElementById('myScoredec').value);
  var score1 = num6;
  var get2 = score1 / 4;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWdec").value = get2;
  document.getElementById("myLdec").value = get2;
  document.getElementById("myRdec").value = get2;
  document.getElementById("mySdec").value = get2;

}
//January
function adder3() {
  var num5 = parseFloat(document.getElementById('mySjan').value);
  var num6 = parseFloat(document.getElementById('myWjan').value);
  var num7 = parseFloat(document.getElementById('myLjan').value);
  var num8 = parseFloat(document.getElementById('myRjan').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAjan").value = total1;

}
function divid3(){
  var num6 = parseFloat(document.getElementById('myScorejan').value);
  var score1 = num6;
  var get2 = score1 / 4;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWjan").value = get2;
  document.getElementById("myLjan").value = get2;
  document.getElementById("myRjan").value = get2;
  document.getElementById("mySjan").value = get2;

}
//February
function adder4() {
  var num5 = parseFloat(document.getElementById('mySfeb').value);
  var num6 = parseFloat(document.getElementById('myWfeb').value);
  var num7 = parseFloat(document.getElementById('myLfeb').value);
  var num8 = parseFloat(document.getElementById('myRfeb').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAfeb").value = total1;

}
function divid4(){
  var num6 = parseFloat(document.getElementById('myScorefeb').value);
  var score1 = num6;
  var get2 = score1 / 4;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWfeb").value = get2;
  document.getElementById("myLfeb").value = get2;
  document.getElementById("myRfeb").value = get2;
  document.getElementById("mySfeb").value = get2;

}
//1st 4 months
function adder5() {
  var num5 = parseFloat(document.getElementById('myNov').value);
  var num6 = parseFloat(document.getElementById('myDec').value);
  var num7 = parseFloat(document.getElementById('myJan').value);
  var num8 = parseFloat(document.getElementById('myFeb').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  document.getElementById("my1Score4").value = total1;

}
//1st Semester Exam
function adder6() {
  var num5 = parseFloat(document.getElementById('my1Se').value);
  var total1 = num5 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("my1Sa").value = total1;

}
//1st Semester Result
function adder7() {
  var num5 = parseFloat(document.getElementById('my1SeR').value);
  var num6 = parseFloat(document.getElementById('my1MonR').value);

  var get2 = num5 + num6;
  var total1 = get2 / 2;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("my1SaR").value = total1;

}

//February
function adder8() {
  var num5 = parseFloat(document.getElementById('mySmar').value);
  var num6 = parseFloat(document.getElementById('myWmar').value);
  var num7 = parseFloat(document.getElementById('myLmar').value);
  var num8 = parseFloat(document.getElementById('myRmar').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAmar").value = total1;

}
function divid8(){
  var num6 = parseFloat(document.getElementById('myScoremar').value);
  var score1 = num6;
  var get2 = score1 / 4;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWmar").value = get2;
  document.getElementById("myLmar").value = get2;
  document.getElementById("myRmar").value = get2;
  document.getElementById("mySmar").value = get2;

}
//April-May
function adder9() {
  var num5 = parseFloat(document.getElementById('mySma').value);
  var num6 = parseFloat(document.getElementById('myWma').value);
  var num7 = parseFloat(document.getElementById('myLma').value);
  var num8 = parseFloat(document.getElementById('myRma').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAma").value = total1;

}
function divid9(){
  var num6 = parseFloat(document.getElementById('myScorema').value);
  var score1 = num6;
  var get2 = score1 / 4;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWma").value = get2;
  document.getElementById("myLma").value = get2;
  document.getElementById("myRma").value = get2;
  document.getElementById("mySma").value = get2;

}
//June
function adder10() {
  var num5 = parseFloat(document.getElementById('mySjun').value);
  var num6 = parseFloat(document.getElementById('myWjun').value);
  var num7 = parseFloat(document.getElementById('myLjun').value);
  var num8 = parseFloat(document.getElementById('myRjun').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAjun").value = total1;

}
function divid10(){
  var num6 = parseFloat(document.getElementById('myScorejun').value);
  var score1 = num6;
  var get2 = score1 / 4;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWjun").value = get2;
  document.getElementById("myLjun").value = get2;
  document.getElementById("myRjun").value = get2;
  document.getElementById("mySjun").value = get2;

}
//July
function adder16() {
  var num5 = parseFloat(document.getElementById('mySjuly').value);
  var num6 = parseFloat(document.getElementById('myWjuly').value);
  var num7 = parseFloat(document.getElementById('myLjuly').value);
  var num8 = parseFloat(document.getElementById('myRjuly').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAjuly").value = total1;

}
function divid16(){
  var num6 = parseFloat(document.getElementById('myScorejuly').value);
  var score1 = num6;
  var get2 = score1 / 4;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWjuly").value = get2;
  document.getElementById("myLjuly").value = get2;
  document.getElementById("myRjuly").value = get2;
  document.getElementById("mySjuly").value = get2;

}

//2nd 4 months
function adder11() {
  var num5 = parseFloat(document.getElementById('myMar').value);
  var num6 = parseFloat(document.getElementById('myMay').value);
  var num7 = parseFloat(document.getElementById('myJune').value);
  var num8 = parseFloat(document.getElementById('myJuly').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  document.getElementById("my2Score4").value = total1;

}
//2nd Semester Exam
function adder12() {
  var num5 = parseFloat(document.getElementById('my2Se').value);
  var total1 = num5 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("my2Sa").value = total1;

}
//2nd Semester Result
function adder13() {
  var num5 = parseFloat(document.getElementById('my2SeR').value);
  var num6 = parseFloat(document.getElementById('my2MonR').value);

  var get2 = num5 + num6;
  var total1 = get2 / 2;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("my2SaR").value = total1;

}

//June
function adder14() {
  var num5 = parseFloat(document.getElementById('my1SaY').value);
  var num6 = parseFloat(document.getElementById('my2SaY').value);

  var get2 = num5 + num6;
  var total1 = get2 / 2;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAaY").value = total1;

}


//Save to excel
function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById('input5BOct');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
    XLSX.writeFile(wb, fn || ('Student Report Grade 5B.' + (type || 'xlsx')));
}
//Clear text in Box
function clearBox(){
document.getElementById('mySoct').value = "";
document.getElementById('myWoct').value = "";
document.getElementById('myLoct').value = "";
document.getElementById('myRoct').value = "";
document.getElementById('myAoct').value = "";
document.getElementById('myKoct').value = "";
document.getElementById('myScoreoct').value = "";
//November
document.getElementById('mySnov').value = "";
document.getElementById('myWnov').value = "";
document.getElementById('myLnov').value = "";
document.getElementById('myRnov').value = "";
document.getElementById('myAnov').value = "";
document.getElementById('myKnov').value = "";
document.getElementById('myScorenov').value = "";


}
function clearAll(){
  document.getElementById('myName').value = "";
  document.getElementById('myID').value = "";
  document.getElementById('mySex').value = "";
  document.getElementById('mySoct').value = "";
  document.getElementById('myWoct').value = "";
  document.getElementById('myLoct').value = "";
  document.getElementById('myRoct').value = "";
  document.getElementById('myAoct').value = "";
  document.getElementById('myKoct').value = "";
  document.getElementById('myScoreoct').value = "";
  //November
document.getElementById('mySnov').value = "";
document.getElementById('myWnov').value = "";
document.getElementById('myLnov').value = "";
document.getElementById('myRnov').value = "";
document.getElementById('myAnov').value = "";
document.getElementById('myKnov').value = "";
document.getElementById('myScorenov').value = "";


}

//Sorting without change N0
$('th:not(:first-child)').click(function(){
  var table = $(this).parents('table').eq(0)
  var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
  this.asc = !this.asc
  if (!this.asc){rows = rows.reverse()}
  for (var i = 0; i < rows.length; i++){
      $(rows[i]).find('td:first').text(i + 1);
      table.append(rows[i]);
  }
})
function comparer(index) {
  return function(a, b) {
      var valA = getCellValue(a, index), valB = getCellValue(b, index)
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
  }
}
function getCellValue(row, index){ return $(row).children('td').eq(index).text() }

//Input Text
function myInputText(){
  var inputMonth =   document.getElementById('myMonth').value;
  var inputDate =   document.getElementById('myDate').value;
  document.getElementById('textMonth').innerHTML = inputMonth;
}

//Hiden Calliborate
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// On Enter keypress
$('input').keydown(function (event) {
  if (event.which === 13) {
    UpStd();
    event.preventDefault();
    return false;
  }
});