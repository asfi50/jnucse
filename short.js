var short;
console.log(short);
function makelink(){
    var longurl = document.getElementById("url").value;

    if (!longurl.startsWith("https://")) {
        longurl = "https://" + longurl;}

    const newUrlDiv = document.getElementById('new-url');
fetch('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyBM9KK8llFpxmBEjnFhO35OjYzOuMQpqc8', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
     "longDynamicLink": "https://jnu.page.link/?link="+longurl,
   "suffix": {
     "option": "SHORT"
   }
  })
})
.then(response => response.json())
.then(data => {
    newUrlDiv.innerHTML = `<p>${data.shortLink}</p>`;
    short=data.shortLink;
    console.log(data.shortLink);
})
.catch((error) => {
  console.error('Error:', error);
});
}

async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
      alert("Copied To Clipboard!");
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert("Error!");
    }
  }

  function copyStart(){
    copyToClipboard(short);
    
  }

  function clearUrl(){
     document.getElementById('url').value="";
    console.log("cleared");
  }