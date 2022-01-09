
var PC= [
  // "محمد برويز خان",
  "الوليد الغامدي",
  "عدنان ظفر علام",
  "شهنواز سيد محبوب",
  "ناظري اراجاين",
  "محمد منظور احمد",
  "أحمد نشأة",
  "أحمد وديع خوندنه",
  // "محمد جواد راجا محمد",
  "ضياء طارق كشميري"
]

var CCTV = [
  "أبرار نياز",
"سروار إمام",
"عادل سليمان كريري",
"محيي الدين بابول مياه",
"عمران محمد يعقوب شودري",
"محمد رحيم وسيم خان",
"شفيق الرحمن رفيق الحسن",
"فاراز إسماعيل",
"فهد مبارك العصيمي",
// "سجاد حسين محمد رياز",
"محمد وسيم عبدالحسين خان",
// "عبدالمنير كوبيكات"
]


var WIFI = [
  "محمد سيد علم",
"عبدالعزيز الدهاس",
"فرحان جعفر أحمد",
"مهند الطيب",
// "أديب صابر حسين"
]

var IP = [
  "عبدالله فيصل الجابري",
  "شابير أحمد",
  "محمد عمران مالك",
  "محمد عبدالاياز احمد",
  "إيجاز أحمد ساجوالدين",
  "نايف علي الأسمري",
  "محمد جمال",
  "محمد كركدان",
  "غرام معيض الربيعي",
  "ناهد محمد هوساوي"
]

var SERVER = [
  "محمد سالم زعيتر",
  "وليد مازن غزاوي",
  "الوليد الحربي",
  "عيسى الفهمي"
]

var NETWORK = [
"حسام الزهراني",
"أحمد علي بلالي",
"محمد إحسان الدين",
"تصور غلام سروار",
"فهيم رضا محمد عبدالرحيم",
// "ممتاز خيرالله",
"شاهنور عبدالحسين",
"عبدالرحمن يحيى جباري"
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
