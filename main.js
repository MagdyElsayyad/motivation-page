const elemnt = document.getElementById('4');

fetch("https://type.fit/api/quotes")
  .then(function(response) {
      response.json().then((res) => {
        setQuote(res) ;
    })
  })
  .then(function(data) {
    console.log(data);
  });


  let setQuote = (quotes) => {
      elemnt.innerText = '،، ' + quotes[Math.floor(Math.random() * 1640) + 1].text + ' ،،'
  }