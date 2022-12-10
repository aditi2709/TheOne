window.onload = function(){
  // var defaultLanguage = "english";
  // var jsonUrl = "language.json";
  // const barEl = document.getElementById("lang-option");
  // console.log(barEl);

  getData(localStorage.getItem("lang"));
  // barEl.addEventListener("click", handleLanguage);

  //read json file
  async function getUser(url) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  //=== function get json file ===
  function getData(language) {
    console.log(language);
    var url
    if (language == 'hindi'){
      url = "Hindi.json"
    }
    else if(language == 'english'){
      url = "English.json"
    }
    else{
      url = "Marathi.json"
    }
    console.log(url);
    getUser(url);
    // const data = new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "GET",
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Content-Type": "text/plain"
    //     },//"mode" : "no-cors",
    //     //body: {"id" : document.getElementById('saada').value}
    //     }).then(respond => {
    //         resolve(respond.json())
    //       }).catch(err => {
    //         reject(err)
    //       })
    //   })
      
    //   console.log(data)
    // fetch(url).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));
    // $.getJSON( url, function(data) {
    //   console.log(data);
    //   // renderView(data);
    // });
  }
  
  //render view with json element
  function renderView(data) {
    var title = document.getElementById("title");
    var subTitle = document.getElementById("sub-title");
    var eveTeasingSos = document.getElementById("eve-teasing-sos");
    var feelSafeAnytime = document.getElementById("feel-safe-anytime");
    var learnMore = document.getElementById("learn-more");
    var selectPreferredConvenience = document.getElementById("select-preferred-convenience");
    var BEST = document.getElementById("BEST-प्रवास");
    var prawas = document.getElementById("prawas");
    var eveteasingSOS = document.getElementById("eveteasing-SOS");
    var eveteasingSOSText = document.getElementById("eveteasing-SOS-text");
    var nearbyMe = document.getElementById("nearby-me");
    var nearbyMeText = document.getElementById("nearby-me-text");
    var publicToiletsTitle = document.getElementById("public-toilets-title");
    var publicToiletsSubtext = document.getElementById("public-toilets-subtext");
    var toiletsAvailableText = document.getElementById("toilets-available-text");
    var jobPosts = document.getElementById("job-posts");
    var applyJob = document.getElementById("apply-job");
    var jobsPostAvailableText = document.getElementById("jobs-post-available-text");
    var surveyPolls = document.getElementById("survey-polls");
    var surveyPointsText = document.getElementById("survey-points-text");
    var surveyFooterText = document.getElementById("survey-footer-text");
    var gameCardText = document.getElementById("game-card-text");
    var mumbaiCardText = document.getElementById("mumbai-card-text");
    var sosPopupTitle = document.getElementById("sos-popup-title");
    var sosPopupDesc = document.getElementById("sos-popup-desc");
    title.innerText = data.title;
    subTitle.innerText = data.sub-title;
    eveTeasingSos.innerText = data.eve-teasing-sos;
    feelSafeAnytime.innerText = data.feel-safe-anytime;
    learnMore.innerText = data.learn-more;
    selectPreferredConvenience.innerText = data.select-preferred-convenience;
    BEST.innerText = data.BEST-प्रवास;
    prawas.innerText = data.prawas;
    eveteasingSOS.innerText = data.eveteasing-SOS;
    eveteasingSOSText.innerText = data.eveteasing-SOS-text;
    nearbyMe.innerText = data.nearby-me;
    nearbyMeText.innerText = data.nearby-me-text;
    publicToiletsTitle.innerText = data.public-toilets-title;
    publicToiletsSubtext.innerText = data.public-toilets-subtext;
    toiletsAvailableText.innerText = data.toilets-available-text;
    jobPosts.innerText = data.job-posts;
    applyJob.innerText = data.apply-job;
    jobsPostAvailableText.innerText = data.jobs-post-available-text;
    surveyPolls.innerText = data.survey-polls;
    surveyPointsText.innerText = data.survey-points-text;
    surveyFooterText.innerText = data.survey-footer-text;
    gameCardText.innerText = data.game-card-text;
    mumbaiCardText.innerText = data.mumbai-card-text;
    sosPopupTitle.innerText = data.sos-popup-title;
    sosPopupDesc.innerText = data.sos-popup-desc;
    // localStorage.clear();
    // $('.content p').fadeIn();
  }

  // function handleLanguage(event) {
  //   console.log('hi');
  //   var value = event.target
  //   var attr = event.target.getAttribute("language");
  //   console.log(attr);
  //   if (attr) {
  //     localStorage.setItem("lang", attr);
  //     // getData(attr)
  //   }
  // }
}; 