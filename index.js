
var SERVER = [
  "وليد مازن غزاوي",
  // *******  Selected ********
  // "الوليد الحربي",
  "عيسى الفهمي"
]

var NETWORK = [
  "محمد إحسان الدين",
  "عبدالرحمن يحيى جباري"
  "حسام الزهراني",
  "تصور غلام سروار",
  "عاطف سعيد",
  "عاطف عياش",
  "منيب سندي",

  // *******  Selected ********
  // "شاهنور عبدالحسين",

  " احمد علي ",
  "فهيم رضا محمد عبدالرحيم",

  // vacation 
  // "ممتاز خيرالله",
  ]
  
  var IP = [
    "محمد  كركدان",

    // *******  Selected ********
    // "محمد عمران مالك",

    "غرام معيض الربيعي",
    "ناهد محمد هوساوي"
    "شابير أحمد",
    "إيجاز أحمد ساجوالدين",
    "نايف علي الأسمري",
    "محسن ادريس",
    "عبدالله فيصل الجابري",
    "محمد جمال",
    "محمد عبدالاياز احمد",
  ]

  
  var CCTV = [
    " عبدالعزيز الغامدي",
    "فهد مبارك العصيمي",
    "محيي الدين بابول مياه",
    "فاراز إسماعيل",
    " هشام النقيب",
    "محمد وسيم عبدالحسين خان",
    "يحي القحطاني",

  // *******  Selected ********
    // "شفيق الرحمن رفيق الحسن",

    "أبرار نياز",
    "عبدالمنير كوبيكات",
    "عمران محمد يعقوب شودري",
    "سجاد حسين محمد رياز",

    // vacation 
    // "محمد رحيم وسيم خان"

    "عادل سليمان كريري",
    "سروار إمام",
  

 
  ]
  var WIFI = [

    // *******  Selected ********
    // "عبدالعزيز الدهاس",

    "مهند الطيب",
    " روان العتيبي",
    "فرحان جعفر أحمد",

    // vacation 
    // "أديب صابر حسين"
    
    ]

    
var PC= [
  "ضياء طارق كشميري",
  "أحمد وديع خوندنه",
  "محمد منظور احمد",
  
  // *******  Selected ********
  // "ناظري اراجاين",

  " تنوير انصاري",

  // vacation 
  // "محمد برويز خان",
  // "محمد جواد راجا محمد",
  
  "شهنواز سيد محبوب",
  "عدنان ظفر علام",
  "الوليد الغامدي",
  "أحمد نشأة",


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
