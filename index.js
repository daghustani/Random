
var SERVER = [
  // *******  Selected ********
  // "الوليد الحربي",
  //  "عيسى الفهمي"
  
  // vacation 
   // "وليد مازن غزاوي",
]

var NETWORK = [
  //  *******  Selected ********
  //  "شاهنور عبدالحسين",
  //   "محمد إحسان الدين",

  "عبدالرحمن يحيى جباري",
  "حسام الزهراني",
  "تصور غلام سروار",
  "عاطف سعيد",
  "عاطف عياش",
  "منيب سندي",
  " احمد علي ",
  "فهيم رضا محمد عبدالرحيم",

  // vacation 
  // "ممتاز خيرالله",
]
  
  var IP = [
     // *******  Selected ********
    // "محمد عمران مالك",
    // "محمد جمال",

    "محمد  كركدان",
    "غرام معيض الربيعي",
    "ناهد محمد هوساوي",
    "شابير أحمد",
    "إيجاز أحمد ساجوالدين",
    "نايف علي الأسمري",
    "محسن ادريس",
    "عبدالله فيصل الجابري",
    "محمد عبدالاياز احمد",
  ]

  
  var CCTV = [
     // *******  Selected ********
    // "شفيق الرحمن رفيق الحسن",
    // "سروار إمام",

    " عبدالعزيز الغامدي",
    "فهد مبارك العصيمي",
    "محيي الدين بابول مياه",
    "فاراز إسماعيل",
    " هشام النقيب",
    "محمد وسيم عبدالحسين خان",
    "يحي القحطاني",  
    "أبرار نياز",
    "عبدالمنير كوبيكات",
    "عمران محمد يعقوب شودري",
    "سجاد حسين محمد رياز",
    "عادل سليمان كريري",
    
    // vacation 
    // "محمد رحيم وسيم خان"
  ]

  var WIFI = [
    // *******  Selected ********
    // "عبدالعزيز الدهاس",
    // "فرحان جعفر أحمد",

    "مهند الطيب",
    " روان العتيبي",
   
    // vacation 
    // "أديب صابر حسين"
  ]

    
  var PC= [
    // *******  Selected ********
    // "ناظري اراجاين",
    // "أحمد وديع خوندنه",

    "ضياء طارق كشميري",
    "محمد منظور احمد",
    " تنوير انصاري",
    "شهنواز سيد محبوب",
    "عدنان ظفر علام",
    "الوليد الغامدي",
    "أحمد نشأة",

    // vacation 
    // "محمد برويز خان",
    // "محمد جواد راجا محمد",
  ]




function generator() {
  document.getElementById("PC").innerHTML =
   PC[Math.floor(Math.random() * PC.length)];

  document.getElementById("CCTV").innerHTML =
  CCTV[Math.floor(Math.random() * CCTV.length)];

  document.getElementById("WIFI").innerHTML =
  WIFI[Math.floor(Math.random() * WIFI.length)];

  document.getElementById("IP").innerHTML =
  IP[Math.floor(Math.random() * IP.length)];

  document.getElementById("SERVER").innerHTML =
  SERVER[Math.floor(Math.random() * SERVER.length)];

  document.getElementById("NETWORK").innerHTML =
  NETWORK[Math.floor(Math.random() * NETWORK.length)];

}
