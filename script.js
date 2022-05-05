//12->360
//1hr->360/12=30degree
//pr h hour=30h+m/2
//60->30
// 1min->1/2degree
// m->m/2rotataion


// --------------------------------min hand
//60->360
// 1min->360/60=6
//m min->6m


// --------------------for sec hand
// 60s->360
// 1s->6degree
// s sec->6s
console.log("welcome");

setInterval(() => {
d=new Date();
htime=d.getHours();
mtime=d.getMinutes();
stime = d.getSeconds();
hrotation=30*htime+mtime/2;
mrotation=6*mtime;
srotation=6*stime;
hour.style.transform=`rotate(${hrotation}deg)`;
min.style.transform=`rotate(${mrotation}deg)`;
sec.style.transform=`rotate(${srotation}deg)`;
},1000);