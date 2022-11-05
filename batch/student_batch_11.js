/*
update, create or delete from here
you can also export all data directly from google sheet,
all you have to do is:
   1. export as csv from google sheet
      (make sure all the sheet collumn name is exactly like json keys below)
   2. covert csv to json using any online converter
   3. paste the json

Also, if you dont want to copy and paste entries again and again or automate with 
Google sheet, do these steps:
   1. Create a Appscript project from Google Sheet
   2. Manke a rest api to retrive this json by creating dataSender.gs'
   3. Call the api from script
(If I get time and access to the Sheet, I will try that)
*/

var data = `[
  {
    "id": "B190305007",
    "img": "https://i.ibb.co/8K7hc9W/uc-id-1p-Jj-Vm6bw-Cs-LNF7f-L5-Xg-J4tn033-Qgp-YD.jpg",
    "name": "Sajib Hasan",
    "school": "Gobindahuda High School,Chuadanga.",
    "college": "Chuadanga Government College.",
    "address": "Chuadanga ",
    "blood": "",
    "dob": "26 Oct ",
    "link": "https://www.facebook.com/mirror36"
  },
  {
    "id": "B180305013",
    "img": "https://i.ibb.co/682z3Jy/uc-id-1yo4-Bpic-GAOrq-LVap-EOva-Mx-G0951-T0-OD.jpg",
    "name": "Niloy Datta",
    "school": "Fatulla Pilot High School",
    "college": "BIRSHRESHTHA NOOR MOHAMMAD PUBLIC COLLEGE",
    "address": "Narayanganj",
    "blood": "18 Nov",
    "dob": "https://www.facebook.com/niloy.datta.5623",
    "link": ""
  },
  {
    "id": "B190305004",
    "img": "https://i.ibb.co/PzGVxvx/IMG-20220502-165258.jpg",
    "name": "Rifah Sajida Deya",
    "school": "Sheikhdi Abdullah Molla High School ",
    "college": "Begum Badrunnessa Govt. Girls College",
    "address": "Dhaka",
    "blood": "A+",
    "dob": "11 Oct",
    "link": ""
  },
  {
    "id": "B190305031",
    "img": "https://i.ibb.co/PzGVxvx/IMG-20220502-165258.jpg",
    "name": "Najnin Sultana Shirin",
    "school": "Unknown",
    "college": "Dhaka City College",
    "address": "Comilla ",
    "blood": "O+",
    "dob": "Unknown",
    "link": "https://www.facebook.com/najninshirin"
  },
  {
    "id": "B190305025",
    "img": "https://i.ibb.co/xXpDMs5/uc-id-1ochf-R7m-Tcy9rce-GJV91-Mq-Zby-RLZUki-Ye.jpg",
    "name": "Md Swadhin Mia ",
    "school": "Dewaner Char High School",
    "college": "Hazi Abed Ali College",
    "address": "Narsingdi",
    "blood": "18 Dec",
    "dob": "https://www.facebook.com/mdswadhin.ahmed.3",
    "link": ""
  },
  {
    "id": "B180305010",
    "img": "https://i.ibb.co/LkSCLqm/uc-id-1-KMde-M9j-XU40-a5-L8p2z-Kzw-Wa-Vd-FWU8-AL.jpg",
    "name": "Md Arafat Ali ",
    "school": "Shishukoli Model High School",
    "college": "Govt. K.C. College Jhenaidah.  ",
    "address": "Jhenaidah ",
    "blood": "09 Dec",
    "dob": "",
    "link": ""
  },
  {
    "id": "B190305015",
    "img": "https://i.ibb.co/6F0HzRD/uc-id-1-j6-Bl2-Cape-Jr0-YJYpv-Bv9a-TOTg-LQd-Ue.jpg",
    "name": "Umme Mehnaz Labiba",
    "school": "Bir Shreshtha Noor Mohammad Public College",
    "college": "Bir Shreshtha Noor Mohammad Public College",
    "address": "Dhaka ",
    "blood": "",
    "dob": "25 Jul ",
    "link": "https://www.facebook.com/mehnaz.labi"
  },
  {
    "id": "B190305012",
    "img": "https://i.ibb.co/wCVrn7d/uc-id-1-YPd-pelu-Mpg2-EV-Ok-H7-Uw-IX5s-Ieq-Ph-F.jpg",
    "name": "Md.Sharafatullah",
    "school": "Aurabunia Model High School",
    "college": "Govt. Tofajjol Hossain Manik Mia",
    "address": "Jhalakathi ",
    "blood": "A+",
    "dob": "02 Jan",
    "link": "https://www.facebook.com/md.sharafat.ullah.37/"
  },
  {
    "id": "B190305046",
    "img": "https://i.ibb.co/PYtSvwY/uc-id-1a5-Kgg4h0-YWXr-MVq-Gjh-GIC55jb-LPbb.jpg",
    "name": "Mashiat Tabassum Khan",
    "school": "BirShreshtha Noor Mohammad Public College ",
    "college": "BirShreshtha Noor Mohammad Public College ",
    "address": "Dhaka",
    "blood": "02 Dec",
    "dob": "",
    "link": ""
  },
  {
    "id": "B190305043",
    "img": "https://i.ibb.co/dpvr60r/uc-id-15v-n-Hm-OYke-KMjn-Ivy-Qb7m-NQ9-Tv-Zi-Ly-TH.jpg",
    "name": "Md. Farhan Masud Shohag",
    "school": "Unknown",
    "college": "Unknown",
    "address": "Panchagarh",
    "blood": "Unknown",
    "dob": "",
    "link": "https://www.facebook.com/farhan.shohag0"
  },
  {
    "id": "B190305019",
    "img": "https://i.ibb.co/PzGVxvx/IMG-20220502-165258.jpg",
    "name": "Md. Tanbirul Islam",
    "school": "MUBC ",
    "college": "BCIC College, Mirpur, Dhaka ",
    "address": "Patuakhali ",
    "blood": "A+",
    "dob": "15 May",
    "link": "https://www.facebook.com/tanbir.tanbirulislam.3"
  },
  {
    "id": "B190305021",
    "img": "https://i.ibb.co/fCNZGLf/uc-id-1k-Jl7-Bb0j-BIJOd-Of-LAk-RN-4lma44-zfou.jpg",
    "name": "Asir Shahriar Roudra",
    "school": "Aftab Uddin School & College",
    "college": "Aftab Uddin School & College",
    "address": "Bajitpur, Kishoreganj ",
    "blood": "O+",
    "dob": "Unknown",
    "link": "https://www.facebook.com/roudra323"
  },
  {
    "id": "B160305039",
    "img": "https://i.ibb.co/NrYPjQ7/uc-id-16w7x-Omw-C2qckynoy40j-Xmgvs-Jn2-Ow-Ush.jpg",
    "name": "MD Rasadul Islam ",
    "school": "Motijheel Model High School And College",
    "college": "Dhaka City College ",
    "address": "Barisal ",
    "blood": "17 Mar",
    "dob": "",
    "link": "https://www.facebook.com/mdrasadul.rana"
  },
  {
    "id": "B190305024",
    "img": "https://i.ibb.co/f1vRcgC/uc-id-10-WIJQg-ELa-FDw8-Bor8rkny-cu-Lavt4k-Um.jpg",
    "name": "Mosammat Shima Aktar",
    "school": "Banani Bidyaniketan school and college",
    "college": "Shaheed Bir Uttam Lt. Anwar Girls' College ",
    "address": "Mymensingh ",
    "blood": "A+",
    "dob": "20 Dec",
    "link": ""
  },
  {
    "id": "B190305017",
    "img": "https://i.ibb.co/Q9DXjf5/uc-id-1-Dh-KU-IQ2db-Rm9-Pq15-DI6-Ic-Ui-Qz-Sd7-B4z.jpg",
    "name": "MD.ABUL BASHER SHUVO",
    "school": "B P A T C SCHOOL AND COLLEGE",
    "college": "B P A T C SCHOOL AND COLLEGE",
    "address": "Noakhali",
    "blood": "A+",
    "dob": "13 Dec",
    "link": ""
  },
  {
    "id": "B190305055",
    "img": "https://i.ibb.co/R6mdpSJ/uc-id-1-YYM3xu-A0-DZV4z-So-Au-My-RY7t-F9w4-N-b-D.jpg",
    "name": "Mahir Siam",
    "school": "BIAM",
    "college": "Adamjee Cantonment college",
    "address": "Mymensingh",
    "blood": "01 Jan",
    "dob": "",
    "link": ""
  },
  {
    "id": "B180305042",
    "img": "https://i.ibb.co/QKcwf2F/uc-id-1-H6-JV6-F1-X1j-J-3-Pa1-A-3-N703-Uz-XBRGMZn.png",
    "name": "Sayeed Md. Al-amin",
    "school": "Unknown",
    "college": "Unknown",
    "address": "Panchagarh",
    "blood": "05 Nov",
    "dob": "",
    "link": "https://www.facebook.com/profile.php?id=100011745965516"
  },
  {
    "id": "B190305028",
    "img": "https://i.ibb.co/3kpnNVP/uc-id-1wd-Fn-E5-Ba8-Dxpii92eby-K2-Cj-ED066-SX-7.jpg",
    "name": "Hemel Ahmed",
    "school": "Govt. Saber Mia Jasshim Uddin(S.J) Model High School",
    "college": "Birshrestha Munshi Abdur Rouf Public College,Peelkhana,Dhaka",
    "address": "Gopalgonj ",
    "blood": "O+",
    "dob": "24 Jun",
    "link": "https://www.facebook.com/kayom.kamruzzaman"
  },
  {
    "id": "B190305013",
    "img": "https://i.ibb.co/PzGVxvx/IMG-20220502-165258.jpg",
    "name": "Shabikun Nahar",
    "school": "Ataturk Model High School",
    "college": "Dr.Mahbubur Rahman Mollah College ",
    "address": "Feni",
    "blood": "Unknown",
    "dob": "",
    "link": ""
  },
  {
    "id": "B190305042",
    "img": "https://i.ibb.co/QcvPhMD/uc-id-1-Iyb-FJhxk4-P74-HWCMZp-Km7o-RGLh-EUWate.jpg",
    "name": "Md.Shohrab hossen ",
    "school": "Noonkhawa high School",
    "college": "Cantonment public school and college saidpur",
    "address": "Kurigram",
    "blood": "A+",
    "dob": "11 Oct",
    "link": "https://www.facebook.com/profile.php?id=100082894325500"
  },
  {
    "id": "B190305010",
    "img": "https://i.ibb.co/nz1NqLN/uc-id-1jh05-Y8-Vfw55xr-K9z2-IZe-W75-I0-wy-GUn.jpg",
    "name": "Shehad Uj Jahan ",
    "school": "Deuty High School and College ",
    "college": "Carmichael College Rangpur",
    "address": "Rangpur",
    "blood": "A+",
    "dob": "18 Aug",
    "link": "https://www.facebook.com/shehad.404"
  },
  {
    "id": "B190305029",
    "img": "https://i.ibb.co/4fNFdzt/uc-id-1hr2-Dwv-O2-E3ilik1du17-CRCr-GSehnp9-TR.jpg",
    "name": "Fahim Hasan ",
    "school": "Singary Model High School",
    "college": "Noapara Government College",
    "address": "Jessore",
    "blood": "05 Nov",
    "dob": "",
    "link": ""
  },
  {
    "id": "B190305022",
    "img": "https://i.ibb.co/KwvQR7d/uc-id-1f-SFgl-FWn-N-YZ-2s-Qs-YI7-P6-DWLU0-Luku-L.jpg",
    "name": "Rashedunnabi Rashed",
    "school": "Kadirabad High School",
    "college": "Rangpur Govt. City College",
    "address": "Rangpur ",
    "blood": "O+",
    "dob": "14 Jan",
    "link": "https://www.facebook.com/MuhammadRashedunnabiRashed"
  },
  {
    "id": "B190305038",
    "img": "https://i.ibb.co/zHTWcKY/uc-id-1-Kw-OMhfhopwyjt-VN9dye6-R8ga1sx-ET-eb.jpg",
    "name": "Md. Kamran Sharafi",
    "school": "Enayetpur Islamia High School",
    "college": "Govt. Science college Enayetpur,",
    "address": "Sirajgonj ",
    "blood": "A+",
    "dob": "29 Aug",
    "link": "https://www.facebook.com/kamransharafi420/"
  },
  {
    "id": "B190305014",
    "img": "https://i.ibb.co/6tGzWnL/uc-id-1cn5043d-YEu-Fp-F2-Rcw-Cg-Eh-QZa-Kt-Bllsxn.jpg",
    "name": "Anup Howlader",
    "school": "Bhandaria Bihari Pilot High School",
    "college": "Amanullah Degree College, Pirojpur",
    "address": "Bhandaria ",
    "blood": "11 Nov",
    "dob": "https://www.facebook.com/anup.howlader.188",
    "link": ""
  },
  {
    "id": "b190305035",
    "img": "https://i.ibb.co/0KPncLj/uc-id-11-REbrv-WS-Llf6-Xc-ZWckutxwr8-Fn-Cm-C0s.jpg",
    "name": "Md. Sakibul Islam",
    "school": "B.G.D ML High School ",
    "college": "Natunhat Public College",
    "address": "Jashore,Bangladesh",
    "blood": "A+",
    "dob": "11 Jun",
    "link": "https://www.facebook.com/mdsakibul.islam.562/"
  },
  {
    "id": "B190305041",
    "img": "https://i.ibb.co/1fBg93c/uc-id-1grm-No2-G8g-Hn-Ov-ED1-T5-e-Torc-Scgjp-GZd.jpg",
    "name": "Tawhid Mirza Mahib",
    "school": "Armanitola Govt. High School",
    "college": "Engineering University School & College ",
    "address": "Dhaka ",
    "blood": "A",
    "dob": "19 Sep",
    "link": "https://www.facebook.com/mahib.tawhid"
  },
  {
    "id": "B190305009",
    "img": "https://i.ibb.co/VDQL1LN/uc-id-1-GG-Ug-OHetm-Kq-Xz9po0-ZGas-Fq72-Yz-KIc.jpg",
    "name": "Jahangir Hossain",
    "school": "Tulatoly High School",
    "college": "Alhaj Noor Mia College, Chauddagram",
    "address": "Cumilla ",
    "blood": "O+",
    "dob": "21 Nov",
    "link": "facebook.com/jhm69"
  },
  {
    "id": "B190305011",
    "img": "https://i.ibb.co/pbrzRcq/uc-id-1api-ETplk-DT2-Lio-SAJPzt-N58-G0-Zgytq-Q.jpg",
    "name": "MD. Farhan Ishtiyak Sezar",
    "school": "Gaibandha Sadar Upazilla Model School & College",
    "college": "Gaibandha Govt. College",
    "address": "Gaibandha",
    "blood": "A",
    "dob": "01 Jan",
    "link": "https://www.facebook.com/farhan.ishtiyak.92"
  },
  {
    "id": "B190305051",
    "img": "https://i.ibb.co/FDX5j40/uc-id-1-UXA-x-Wa-B3-MZb-FOGBTrhk-LRHDBq-WUu-H.jpg",
    "name": "Tanmay Maitra Tanu",
    "school": "Narail Government High School",
    "college": "Rajuk Uttara Model College",
    "address": "Narail",
    "blood": "11 Apr",
    "dob": "https://www.facebook.com/tonmoymartia.tanu",
    "link": ""
  }
]`;
