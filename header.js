document.addEventListener('scroll', () => {
	const header = document.querySelector('header');

	if(window.scrollY > 0)
	{
		header.classList.add('scrolled');
	}
	else
	{
		header.classList.remove('scrolled');
	}
})

function fb(){
	window.open('https://www.facebook.com/ramkirestauracja', '_blank');
}

function ig(){
	window.open('https://www.instagram.com/ramkirestauracja/', '_blank');
}

function fullekran(obrlink)
{
	document.querySelector("header").style.animation="fehu 0.3s";
	document.querySelector("header").style.animationFillMode = "forwards";
	document.getElementById("feo").src = obrlink;
	document.getElementById("fullekran").style.display = "flex";
	var x=window.scrollX;
	var y=window.scrollY;
	window.onscroll=function(){window.scrollTo(x, y);};
}

function fullclose()
{
	document.querySelector("header").style.animation="fehur 0.3s";
	document.querySelector("header").style.animationFillMode = "forwards";
	document.getElementById("fullekran").style.display = "none";
	window.onscroll = () => window.scroll();
}

function nextimg()
{
	obr = document.getElementById("feo").src;
	let fn = obr.replace(/.*\//, '');
	let fp = obr.replace(fn, '');
	console.log(fp);
	const elements = document.querySelectorAll(".column #photo");
	const photossrc = [];
	for(var i = 0; i < elements.length; i++)
	{
	    const src = elements[i].src;
	    const filename = src.replace(/.*\//, ''); // remove file path
	    photossrc.push(filename);
	}
	photossrc.sort((a, b) => {
	    const numberA = parseInt(a.match(/\d+/)[0]);
	    const numberB = parseInt(b.match(/\d+/)[0]);
	    return numberA - numberB;
	});
	console.log(photossrc);
	for(let i = 0; i < photossrc.length; i++)
	{
	    photossrc[i] = fp + photossrc[i];
	}
	console.log(photossrc);

	let ai = photossrc.indexOf(obr);
	console.log(ai);
	let ni = ai + 1;
	console.log(ni);
	ni = (ni >= photossrc.length) ? 0 : ni;
	let no = photossrc[ni];
	console.log(no);
	document.getElementById("feo").src = no;
}

function previmg()
{
	obr = document.getElementById("feo").src;
	let fn = obr.replace(/.*\//, '');
	let fp = obr.replace(fn, '');
	console.log(fp);
	const elements = document.querySelectorAll(".column #photo");
	const photossrc = [];
	for(var i = 0; i < elements.length; i++)
	{
	    const src = elements[i].src;
	    const filename = src.replace(/.*\//, ''); // remove file path
	    photossrc.push(filename);
	}
	photossrc.sort((a, b) => {
	    const numberA = parseInt(a.match(/\d+/)[0]);
	    const numberB = parseInt(b.match(/\d+/)[0]);
	    return numberA - numberB;
	});
	console.log(photossrc);
	for(let i = 0; i < photossrc.length; i++)
	{
	    photossrc[i] = fp + photossrc[i];
	}
	console.log(photossrc);

	let ai = photossrc.indexOf(obr);
	console.log(ai);
	let ni = ai - 1;
	console.log(ni);
	let no = photossrc.at(ni);
	console.log(no);
	document.getElementById("feo").src = no;
}