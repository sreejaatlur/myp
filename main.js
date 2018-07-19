// function getfile(file,callback){
//   var xhr= new  XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState===4 && xhr.status=="200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
// getfile("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   career(data.objec);
//   infor(data.educ);
//   infor1(data.skills);
// })
function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
      })
  })
  }
var newfile=loadjson("data.json");
newfile.then(data=>{
  details(data.basics);
  career(data.objec);
  infor(data.educ);
  infor1(data.skills);
  ach(data.ar);
})



var child=document.querySelector(".child1");
function details(det) {
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);
  var name= document.createElement("h3");
  name.textContent=det.name;
  child.appendChild(name);
  var number= document.createElement("h2");
  number.textContent=det.phonenumber;
  child.appendChild(number);
  var mail=document.createElement("a")
  mail.href= "mail to :atlurisreeja@gmail.com";
  mail.textContent=det.email;
  child.appendChild(mail);
  var ade= document.createElement("h3");
  ade.textContent=det.adr;
child.appendChild(ade);
  var print= document.createElement("hr");
  child.appendChild(print);
  var add=document.createElement("h4");
  add.textContent=det.address;
  child.appendChild(add);
}
var child2=document.querySelector(".child2");
function career(car) {
    var head=document.createElement("h1");
  head.textContent="CAREER OBJECTIVE";
  child2.appendChild(head);
    var line= document.createElement("hr");
  child2.appendChild(line);
  var care=document.createElement("h4");
  care.textContent=car.info;
  child2.appendChild(care);

}
var edu=document.querySelector(".child2");
function infor(ed){
  var head1=document.createElement("h1");
head1.textContent="EDUCATIOM QUALIFICATION";
edu.appendChild(head1);
  var line= document.createElement("hr");
edu.appendChild(line);
for(i=0;i<ed.length;i++){
var deg=document.createElement("h4");
deg.textContent=ed[i].degree;
edu.appendChild(deg);
var eduul=document.createElement("ul");
var eduli=document.createElement("li");
eduli.textContent=ed[i].institute;

edu.appendChild(eduli);

var eduul=document.createElement("ul");
var eduli=document.createElement("li");

eduul.textContent=ed[i].duration;


edu.appendChild(eduul);
}
}
var skill=document.querySelector(".child2");
function infor1(ed1){
  var head2=document.createElement("h1");
head2.textContent="TECHNICAL SKILLS";
skill.appendChild(head2);
  var line= document.createElement("hr");
skill.appendChild(line);
var skilldata=document.createElement("table");
skilldata.border="1";
skilldata.width="100%";

child2.appendChild(skilldata);
tabledata="";
for(i=0;i<ed1.length;i++){
  tabledata+="<tr><td>"+ed1[i].title+"<tr><td>"+ed1[i].data;
}
skilldata.innerHTML=tabledata;

}

var ch=document.querySelector(".child2");
function ach(ar) {
  var achi =document.createElement("h1");
  achi.textContent="ACHIVEMENTS";
  ch.appendChild(achi);
  var achii =document.createElement("h3");
  achii.textContent=ar.a;
  ch.appendChild(achii);
  var achio =document.createElement("h3");
  achio.textContent=ar.b;
  ch.appendChild(achio);
  var achip =document.createElement("h3");
  achip.textContent=ar.c;
  ch.appendChild(achip);
}
