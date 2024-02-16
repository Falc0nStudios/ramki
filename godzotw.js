const dtyg = ["Nd","Pn","Wt","Sr","Czw","Pt","Sb"];

const d = new Date();
d.getUTCDate();
let day = dtyg[d.getDay()];

let hour_o = new Date();
hour_o.setHours(9, 0, 0);
console.log(hour_o);
let hour_zzt = new Date();
hour_zzt.setHours(21, 0, 0);
let hour_zzw = new Date();
hour_zzw.setHours(22, 0, 0);
let hour_zzn = new Date();
hour_zzn.setHours(21, 0, 0);
let hour_zkt = new Date();
hour_zkt.setHours(22, 0, 0);
let hour_zkw = new Date();
hour_zkw.setHours(23, 0, 0);
let hour_zkn = new Date();
hour_zkn.setHours(22, 0, 0);
let ah = new Date();
ah.getHours();

if (day == "Nd")
{
  var ndr = document.querySelector('#ndr');
  ndr.style.color = '#ECC00B';
  var nds = document.querySelector('#nds');
  nds.style.color = '#ECC00B';

  if(ah < hour_o || ah > hour_zkn)
  {
    var ndh = document.querySelector('#ndhours');
    ndh.style.color = 'red';
  }
  else if(ah >= hour_zzn && ah < hour_zkn)
  {
    var ndh = document.querySelector('#ndhours');
    ndh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzn)
  {
    var ndh = document.querySelector('#ndhours');
    ndh.style.color = '#0bec87';
  }

  if(ah < hour_o || ah > hour_zkn)
  {
    var ndh = document.querySelector('#ndhourss');
    ndh.style.color = 'red';
  }
  else if(ah >= hour_zzn && ah < hour_zkn)
  {
    var ndh = document.querySelector('#ndhourss');
    ndh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzn)
  {
    var ndh = document.querySelector('#ndhourss');
    ndh.style.color = '#0bec87';
  }

}
else if (day == "Pn")
{
  var pnr = document.querySelector('#pnr');
  pnr.style.color = '#ECC00B';
  var pns = document.querySelector('#pns');
  pns.style.color = '#ECC00B';

  if(ah < hour_o || ah > hour_zkt)
  {
    var pnh = document.querySelector('#pnhours');
    pnh.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkt)
  {
    var pnh = document.querySelector('#pnhours');
    pnh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzt)
  {
    var pnh = document.querySelector('#pnhours');
    pnh.style.color = '#0bec87';
  }

  if(ah < hour_o || ah > hour_zkt)
  {
    var pnh = document.querySelector('#pnhourss');
    pnh.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkt)
  {
    var pnh = document.querySelector('#pnhourss');
    pnh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzt)
  {
    var pnh = document.querySelector('#pnhourss');
    pnh.style.color = '#0bec87';
  }


}
else if (day == "Wt")
{
  var wtr = document.querySelector('#wtr');
  wtr.style.color = '#ECC00B';
  var wts = document.querySelector('#wts');
  wts.style.color = '#ECC00B';

  if(ah < hour_o || ah > hour_zkt)
  {
    var wth = document.querySelector('#wthours');
    wth.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkt)
  {
    var wth = document.querySelector('#wthours');
    wth.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzt)
  {
    var wth = document.querySelector('#wthours');
    wth.style.color = '#0bec87';
  }

  if(ah < hour_o || ah > hour_zkt)
  {
    var wth = document.querySelector('#wthourss');
    wth.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkt)
  {
    var wth = document.querySelector('#wthourss');
    wth.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzt)
  {
    var wth = document.querySelector('#wthourss');
    wth.style.color = '#0bec87';
  }

}
else if (day == "Sr")
{
  var srr = document.querySelector('#srr');
  srr.style.color = '#ECC00B';
  var srs = document.querySelector('#srs');
  srs.style.color = '#ECC00B';
  
  if(ah < hour_o || ah > hour_zkt)
  {
    var srh = document.querySelector('#srhours');
    srh.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkt)
  {
    var srh = document.querySelector('#srhours');
    srh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzt)
  {
    var srh = document.querySelector('#srhours');
    srh.style.color = '#0bec87';
  }

  if(ah < hour_o || ah > hour_zkt)
  {
    var srh = document.querySelector('#srhourss');
    srh.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkt)
  {
    var srh = document.querySelector('#srhourss');
    srh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzt)
  {
    var srh = document.querySelector('#srhourss');
    srh.style.color = '#0bec87';
  }

}
else if (day == "Czw")
{
  var czwr = document.querySelector('#czwr');
  czwr.style.color = '#ECC00B';
  var czws = document.querySelector('#czws');
  czws.style.color = '#ECC00B';

  if(ah < hour_o || ah > hour_zkt)
  {
    var czwh = document.querySelector('#czwhours');
    czwh.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkt)
  {
    var czwh = document.querySelector('#czwhours');
    czwh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzt)
  {
    var czwh = document.querySelector('#czwhours');
    czwh.style.color = '#0bec87';
  }

  if(ah < hour_o || ah > hour_zkt)
  {
    var czwh = document.querySelector('#czwhourss');
    czwh.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkt)
  {
    var czwh = document.querySelector('#czwhourss');
    czwh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzt)
  {
    var czwh = document.querySelector('#czwhourss');
    czwh.style.color = '#0bec87';
  }

}
else if (day == "Pt")
{
  var ptr = document.querySelector('#ptr');
  ptr.style.color = '#ECC00B';
  var pts = document.querySelector('#pts');
  pts.style.color = '#ECC00B';

  if(ah < hour_o || ah > hour_zkw)
  {
    var pth = document.querySelector('#pthours');
    pth.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkw)
  {
    var pth = document.querySelector('#pthours');
    pth.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzw)
  {
    var pth = document.querySelector('#pthours');
    pth.style.color = '#0bec87';
  }

  if(ah < hour_o || ah > hour_zkw)
  {
    var pth = document.querySelector('#pthourss');
    pth.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkw)
  {
    var pth = document.querySelector('#pthourss');
    pth.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzw)
  {
    var pth = document.querySelector('#pthourss');
    pth.style.color = '#0bec87';
  }

}
else if (day == "Sb")
{
  var sbr = document.querySelector('#sbr');
  sbr.style.color = '#ECC00B';
  var sbs = document.querySelector('#sbs');
  sbs.style.color = '#ECC00B';

  if(ah < hour_o || ah > hour_zkw)
  {
    var sbh = document.querySelector('#sbhours');
    sbh.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkw)
  {
    var sbh = document.querySelector('#sbhours');
    sbh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzw)
  {
    var sbh = document.querySelector('#sbhours');
    sbh.style.color = '#0bec87';
  }

  if(ah < hour_o || ah > hour_zkw)
  {
    var sbh = document.querySelector('#sbhourss');
    sbh.style.color = 'red';
  }
  else if(ah >= hour_zzt && ah < hour_zkw)
  {
    var sbh = document.querySelector('#sbhourss');
    sbh.style.color = '#ec7f0b';
  }
  else if(ah >= hour_o && ah < hour_zzw)
  {
    var sbh = document.querySelector('#sbhourss');
    sbh.style.color = '#0bec87';
  }

}