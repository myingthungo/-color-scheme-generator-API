const color=document.getElementById('color')
const selectedScheme=document.getElementById('scheme')
const getSchemeBtn=document.getElementById('get-scheme-btn')

getSchemeBtn.addEventListener('click',getMatchedColor)

function getMatchedColor(){
       fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.substring(1)}&mode=${selectedScheme.value}`)
        .then(res => res.json())
        .then(data => {
            const html = data.colors.map(color => `
            <div class='matched-color'>
                <h2 style="background-color:${color.hex.value};"></h2>
                <p>${color.hex.value}</p>
             </div>   
            `).join('')
            document.getElementById('color-palette').innerHTML = html
        });
}
getMatchedColor()