var a1 = Math.floor( Math.random() * 10 );
var a3 = Math.floor( Math.random() * 10 );
var a5 = Math.floor( Math.random() * 10 );
var b1 = Math.floor( Math.random() * 10 );
var b3 = Math.floor( Math.random() * 10 );
var b5 = Math.floor( Math.random() * 10 );
var c1 = Math.floor( Math.random() * 10 );
var c3 = Math.floor( Math.random() * 10 );
var c5 = Math.floor( Math.random() * 10 );
var d1 = Math.floor( Math.random() * 10 );
var d3 = Math.floor( Math.random() * 10 );
var d5 = Math.floor( Math.random() * 10 );
var e1 = Math.floor( Math.random() * 10 );
var e3 = Math.floor( Math.random() * 10 );
var e5 = Math.floor( Math.random() * 10 );
var f1 = Math.floor( Math.random() * 10 );
var f3 = Math.floor( Math.random() * 10 );
var f5 = Math.floor( Math.random() * 10 );
var g1 = Math.floor( Math.random() * 10 );
var g3 = Math.floor( Math.random() * 10 );
var g5 = Math.floor( Math.random() * 10 );
var h1 = Math.floor( Math.random() * 10 );
var h3 = Math.floor( Math.random() * 10 );
var h5 = Math.floor( Math.random() * 10 );
var i1 = Math.floor( Math.random() * 10 );
var i3 = Math.floor( Math.random() * 10 );
var i5 = Math.floor( Math.random() * 10 );
var j1 = Math.floor( Math.random() * 10 );
var j3 = Math.floor( Math.random() * 10 );
var j5 = Math.floor( Math.random() * 10 );




var ary = ["+","-","×"];
var a2 = ary[Math.floor(Math.random() * ary.length)];
var a4 = ary[Math.floor(Math.random() * ary.length)];
var b2 = ary[Math.floor(Math.random() * ary.length)];
var b4 = ary[Math.floor(Math.random() * ary.length)];
var c2 = ary[Math.floor(Math.random() * ary.length)];
var c4 = ary[Math.floor(Math.random() * ary.length)];
var d2 = ary[Math.floor(Math.random() * ary.length)];
var d4 = ary[Math.floor(Math.random() * ary.length)];
var e2 = ary[Math.floor(Math.random() * ary.length)];
var e4 = ary[Math.floor(Math.random() * ary.length)];
var f2 = ary[Math.floor(Math.random() * ary.length)];
var f4 = ary[Math.floor(Math.random() * ary.length)];
var g2 = ary[Math.floor(Math.random() * ary.length)];
var g4 = ary[Math.floor(Math.random() * ary.length)];
var h2 = ary[Math.floor(Math.random() * ary.length)];
var h4 = ary[Math.floor(Math.random() * ary.length)];
var i2 = ary[Math.floor(Math.random() * ary.length)];
var i4 = ary[Math.floor(Math.random() * ary.length)];
var j2 = ary[Math.floor(Math.random() * ary.length)];
var j4 = ary[Math.floor(Math.random() * ary.length)];


var a6;
switch(a2)
{
case "+":
	switch(a4){
	case "+":
		a6 = a1+a3+a5;
		break;

	case "-":
		a6 = a1+a3-a5;
		break;

	case "×":
		a6 = a1+a3*a5;
		break;
	}
break;

case "-":
	switch(a4){
	case "+":
		a6 = a1-a3+a5;
		break;

	case "-":
		a6 = a1-a3-a5;
		break;

	case "×":
		a6 = a1-a3*a5;
		break;
	}
break;

case "×":
	switch(a4){
	case "+":
		a6 = a1*a3+a5;
		break;

	case "-":
		a6 = a1*a3-a5;
		break;

	case "×":
		a6 = a1*a3*a5;
		break;
	}
break;

}

var b6;
switch(b2)
{
case "+":
	switch(b4){
	case "+":
		b6 = b1+b3+b5;
		break;

	case "-":
		b6 = b1+b3-b5;
		break;

	case "×":
		b6 = b1+b3*b5;
		break;
	}
break;

case "-":
	switch(b4){
	case "+":
		b6 = b1-b3+b5;
		break;

	case "-":
		b6 = b1-b3-b5;
		break;

	case "×":
		b6 = b1-b3*b5;
		break;
	}
break;

case "×":
	switch(b4){
	case "+":
		b6 = b1*b3+b5;
		break;

	case "-":
		b6 = b1*b3-b5;
		break;

	case "×":
		b6 = b1*b3*b5;
		break;
	}
break;

}var c6;
switch(c2)
{
case "+":
	switch(c4){
	case "+":
		c6 = c1+c3+c5;
		break;

	case "-":
		c6 = c1+c3-c5;
		break;

	case "×":
		c6 = c1+c3*c5;
		break;
	}
break;

case "-":
	switch(c4){
	case "+":
		c6 = c1-c3+c5;
		break;

	case "-":
		c6 = c1-c3-c5;
		break;

	case "×":
		c6 = c1-c3*c5;
		break;
	}
break;

case "×":
	switch(c4){
	case "+":
		c6 = c1*c3+c5;
		break;

	case "-":
		c6 = c1*c3-c5;
		break;

	case "×":
		c6 = c1*c3*c5;
		break;
	}
break;

}var d6;
switch(d2)
{
case "+":
	switch(d4){
	case "+":
		d6 = d1+d3+d5;
		break;

	case "-":
		d6 = d1+d3-d5;
		break;

	case "×":
		d6 = d1+d3*d5;
		break;
	}
break;

case "-":
	switch(d4){
	case "+":
		d6 = d1-d3+d5;
		break;

	case "-":
		d6 = d1-d3-d5;
		break;

	case "×":
		d6 = d1-d3*d5;
		break;
	}
break;

case "×":
	switch(d4){
	case "+":
		d6 = d1*d3+d5;
		break;

	case "-":
		d6 = d1*d3-d5;
		break;

	case "×":
		d6 = d1*d3*d5;
		break;
	}
break;

}

var e6;
switch(e2)
{
case "+":
	switch(e4){
	case "+":
		e6 = e1+e3+e5;
		break;

	case "-":
		e6 = e1+e3-e5;
		break;

	case "×":
		e6 = e1+e3*e5;
		break;
	}
break;

case "-":
	switch(e4){
	case "+":
		e6 = e1-e3+e5;
		break;

	case "-":
		e6 = e1-e3-e5;
		break;

	case "×":
		e6 = e1-e3*e5;
		break;
	}
break;

case "×":
	switch(e4){
	case "+":
		e6 = e1*e3+e5;
		break;

	case "-":
		e6 = e1*e3-e5;
		break;

	case "×":
		e6 = e1*e3*e5;
		break;
	}
break;

}
var f6;
switch(f2)
{
case "+":
	switch(f4){
	case "+":
		f6 = f1+f3+f5;
		break;

	case "-":
		f6 = f1+f3-f5;
		break;

	case "×":
		f6 = f1+f3*f5;
		break;
	}
break;

case "-":
	switch(f4){
	case "+":
		f6 = f1-f3+f5;
		break;

	case "-":
		f6 = f1-f3-f5;
		break;

	case "×":
		f6 = f1-f3*f5;
		break;
	}
break;

case "×":
	switch(f4){
	case "+":
		f6 = f1*f3+f5;
		break;

	case "-":
		f6 = f1*f3-f5;
		break;

	case "×":
		f6 = f1*f3*f5;
		break;
	}
break;

}
var g6;
switch(g2)
{
case "+":
	switch(g4){
	case "+":
		g6 = g1+g3+g5;
		break;

	case "-":
		g6 = g1+g3-g5;
		break;

	case "×":
		g6 = g1+g3*g5;
		break;
	}
break;

case "-":
	switch(g4){
	case "+":
		g6 = g1-g3+g5;
		break;

	case "-":
		g6 = g1-g3-g5;
		break;

	case "×":
		g6 = g1-g3*g5;
		break;
	}
break;

case "×":
	switch(g4){
	case "+":
		g6 = g1*g3+g5;
		break;

	case "-":
		g6 = g1*g3-g5;
		break;

	case "×":
		g6 = g1*g3*g5;
		break;
	}
break;

}
var h6;
switch(h2)
{
case "+":
	switch(h4){
	case "+":
		h6 = h1+h3+h5;
		break;

	case "-":
		h6 = h1+h3-h5;
		break;

	case "×":
		h6 = h1+h3*h5;
		break;
	}
break;

case "-":
	switch(h4){
	case "+":
		h6 = h1-h3+h5;
		break;

	case "-":
		h6 = h1-h3-h5;
		break;

	case "×":
		h6 = h1-h3*h5;
		break;
	}
break;

case "×":
	switch(h4){
	case "+":
		h6 = h1*h3+h5;
		break;

	case "-":
		h6 = h1*h3-h5;
		break;

	case "×":
		h6 = h1*h3*h5;
		break;
	}
break;

}
var i6;
switch(i2)
{
case "+":
	switch(i4){
	case "+":
		i6 = i1+i3+i5;
		break;

	case "-":
		i6 = i1+i3-i5;
		break;

	case "×":
		i6 = i1+i3*i5;
		break;
	}
break;

case "-":
	switch(i4){
	case "+":
		i6 = i1-i3+i5;
		break;

	case "-":
		i6 = i1-i3-i5;
		break;

	case "×":
		i6 = i1-i3*i5;
		break;
	}
break;

case "×":
	switch(i4){
	case "+":
		i6 = i1*i3+i5;
		break;

	case "-":
		i6 = i1*i3-i5;
		break;

	case "×":
		i6 = i1*i3*i5;
		break;
	}
break;

}
var j6;
switch(j2)
{
case "+":
	switch(j4){
	case "+":
		j6 = j1+j3+j5;
		break;

	case "-":
		j6 = j1+j3-j5;
		break;

	case "×":
		j6 = j1+j3*j5;
		break;
	}
break;

case "-":
	switch(j4){
	case "+":
		j6 = j1-j3+j5;
		break;

	case "-":
		j6 = j1-j3-j5;
		break;

	case "×":
		j6 = j1-j3*j5;
		break;
	}
break;

case "×":
	switch(j4){
	case "+":
		j6 = j1*j3+j5;
		break;

	case "-":
		j6 = j1*j3-j5;
		break;

	case "×":
		j6 = j1*j3*j5;
		break;
	}
break;

}

var settimeH, settimeM;
var now = new Date();
var H = now.getHours();
var M = now.getMinutes();
var myaudio = new Audio("alarm.mp3");

function alarm()
{
	if(settimeH = H && settimeM ==M){
	document.write("①",a1,a2,a3,a4,a5);
	document.write("<br>","①",b1,b2,b3,b4,b5);
	document.write("<br>","②",c1,c2,c3,c4,c5);
	document.write("<br>","③",d1,d2,d3,d4,d5);
	}
	else{
	document.write("設定時刻は",settimeH,":",settimeM,"です！")
	}
}


function ring()
{
	if(settimeH = H && settimeM ==M)
	Sound.play();
}

function stop()
{
	if(a6 == aa && b6 == bb && c6 == cc && d6 ==dd)
	audio.pause();
}


function trymusic(){

}

function audio_play() {
   audio.play();
}

function audio_pause() {
   audio.pause();
}

function okita(){
var ay=document.js.aa.value;
var by=document.js.bb.value;
var cy=document.js.cc.value;
var dy=document.js.dd.value;
var ey=document.js.ee.value;
var fy=document.js.ff.value;
var gy=document.js.gg.value;
var hy=document.js.hh.value;
var iy=document.js.ii.value;
var jy=document.js.jj.value;


	var tz = 0;
	if(a6==ay){
		az = ++tz;
	}
	else{
		az = tz;
	}

	if(b6==by){
		bz = ++az;
	}
	else{
		bz = az;
	}

	if(c6==cy){
		cz = ++bz;
	}
	else{
		cz = bz;
	}

	if(d6==dy){
		dz = ++cz;
	}
	else{
		dz = cz;
	}

	if(e6==ey){
		ez = ++dz;
	}
	else{
		ez = dz;
	}

	if(f6==fy){
		fz = ++ez;
	}
	else{
		fz = ez;
	}

	if(g6==gy){
		gz = ++fz;
	}
	else{
		gz = fz;
	}

	if(h6==hy){
		hz = ++gz;
	}
	else{
		hz = gz;
	}

	if(i6==iy){
		iz = ++hz;
	}
	else{
		iz = hz;
	}

	if(j6==jy){
		jz = ++iz;
	}
	else{
		jz = iz;
	}

	if (jz == 10){
	alert("おはようございます！");
	audio.pause();
	}

	else{
		alert("残念！やりなおし！");
		location.reload();
		audio.play();
	}

}

function Rld(){
location.reload();
setTimeout("Rld()",20);
}


// -->
function alarmset(){
	var settimeH=document.nals_set.sh.value;
	var settimeM=document.nals_set.sm.value;
	if (settimeH !== H || settimeM !== M){
		location.reload();
		setTimeout("Rld()",20);
	}setTimeout("Rld()",20);

	if (settimeH == H && settimeM == M) {
		document.location = "nals.html";
	}


}
