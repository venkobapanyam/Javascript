function f()
{
    let d=new Date();
    console.log(d.getHours()+":" +d.getMinutes()+":" +d.getUTCMilliseconds())
}
setInterval(f,1000);