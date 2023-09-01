const form = document.getElementById('certificateForm');
const output = document.getElementById('certificateOutput');
const place = document.getElementById('place');

form.addEventListener('submit', function(event) {
     event.preventDefault()

    const name = document.getElementById('name').value;
    const acres = document.getElementById('acres').value;
    const landName = document.getElementById('landName').value;
    const location = document.getElementById('place').value;
    const rand = Math.floor(Math.random()*100000);
    const rand2 = Math.floor(Math.random()*100000);
    const rand3 = Math.floor(Math.random()*100);
    const rand4 = (Math.random()*100);
    const rand5 = (Math.random()*10);
    const rand6 = (Math.random()*10000);

    const certificateText = `
    <div id ="outer">
    <!-- <img id ="space_img"src ="./download1.png"> -->
    <div id="inner">
        <div id="nav"> 
            <div id="n1"><h4> VOLUME</h4> <p class="green_class">L1</p> </div>
            <div id="n2"><span class="green_class"> FILE NO :</span> <span class="green_class">${rand}NF</span> </div>
            <div id="n3"><h4 > RECORD</h4> <p class="green_class">${rand2}</p> </div>
        </div>
        <h2 id="heading"> LUNAR REAL ESTATE CERTIFICATE</h2>
        <h3> Be it known and proclaimed to all that </h3>
        <h1>${name} </h1>
        <h3>is recorded as the true and legal owner of <span id="sp1">${landName}</span> the properties located at <span id="sp1">${location}</span> ("Bay of Rainbows") ${rand3}° North Latitude, ${rand4}° West Longitude Tract ${rand5}-Parcels ${rand6} through ${rand5+rand6} ( <span id="sp1">${acres} acres</span>, inclusive ) as designated on Luna, Earth's Moon, and duly recorded by the International Lunar Lands Registry</h3>
        <div id="nav2"> 
            <div id="m1"><h4> Officially registered and recorded by The Lunar Registry at New York City and legally certified on 10 March 2022</h4>  </div>
            <div id="m2"><img id ="moon_logo"src ="./logo.png"></div>
            <div id="m3"><h4 id="mrinal"> MRINAL DEB ( 2K21/CO/292 ) </h4> <p class="end_class">Register on behalf of International Laser Lands Beglary</p> </div>
        </div>

    </div>
</div>   
    `;
    output.innerHTML = certificateText;
    form.classList.add("hidden");
    output.classList.remove('hidden');
    document.getElementById('printButton') .classList.remove('hidden');
    document.getElementById('div1') .classList.add('hidden');
});



function downloadPDF() {
    const pdf = new jsPDF();
    const element = output; // Replace with the ID of the element containing your content
    pdf.fromHTML(element, 15, 15);
    pdf.save('downloaded.pdf');
}



window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
function print(){
var elementHTML = document.querySelector("#pr");
docPDF.html(elementHTML, {
 callback: function(docPDF) {
  docPDF.save('HTML Linuxhint web page.pdf');
 },
 x: 15,
 y: 15,
 width: 170,
 windowWidth: 650
});
}
