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
      // url = "Hindi.json"
      data = {
        title:"द वन में आपका स्वागत है",
        subTitle:"मुंबई शहर से आपका कनेक्शन",
        eveTeasingSos:"Eve Teasing SOS",
        feelSafeAnytime:"किसी भी समय सुरक्षित महसूस करें",
        learnMore:"और अधिक जानें",
        selectPreferredConvenience:"पसंदीदा सुविधा का चयन करें",
        BEST:"बेस्ट प्रवास",
        prawas:"prawas",
        eveteasingSOS:"EveTeasing SOS",
        eveteasingSOStext:"ईव टीजिंग का अनुभव कर रहे हैं? एसओएस सहायता के लिए यहां दबाएं!",
        nearbyMe:"मेरे पास",
        nearbyMeText:"5 किलोमीटर के भीतर उपलब्ध क्षेत्र",
        publicToiletsTitle:"सार्वजनिक शौचालय",
        publicToiletsSubtext:"महिलाओं और पुरुषों के लिए पास के सार्वजनिक शौचालयों का पता लगाएं",
        toiletsAvailableText:"पास में शौचालय उपलब्ध है",
        jobPosts:"नौकरी पोस्ट",
        applyJob:"यहां नौकरी के लिए आवेदन करें!",
        jobsPostAvailableText:"जॉब पोस्ट पास में उपलब्ध है",
        surveyPolls:"सर्वेक्षण और मतदान",
        surveyPointsText:"हर समय सर्वेक्षण बिंदु",
        surveyFooterText:"सर्वेक्षण करें और गारंटीड कैश बैक अर्जित करें",
        gameCardText:"ऑनलाइन गेम्स खेलें",
        mumbaiCardText:"मुंबई का अन्वेषण करें",
        sosPopupTitle:"EveTeasing SOS !",
        sosPopupDesc:"सीसीटीवी से आप पर नजर रखी जा रही है, कृपया जब तक आप सुरक्षित महसूस न करें तब तक बस शेल्टर के भीतर ही रहें"
      }
      renderView(data);
    }
    else if(language == 'english'){
      // url = "English.json"
      data={
        title:"Welcome to The One",
        subTitle:"Your connection to Mumbai City",
        eveTeasingSos:"Eve Teasing SOS",
        feelSafeAnytime:"Feel safe anytime",
        learnMore:"Learn More",
        selectPreferredConvenience:"Select preferred convenience",
        BEST:"BEST travel",
        prawas:"prawas",
        eveteasingSOS:"EveTeasing SOS",
        eveteasingSOStext:"Experiencing eve teasing? Press here for SOS assistance!",
        nearbyMe:"Nearby Me",
        nearbyMeText:"Available Areas within 5Km",
        publicToiletsTitle:"Public Toilets",
        publicToiletsSubtext:"Find nearby public toilets for women and men",
        toiletsAvailableText:"Nearby toilets available",
        jobPosts:"Job Posts",
        applyJob:"Apply for jobs here!",
        jobsPostAvailableText:"Job post available nearby",
        surveyPolls:"Survey & Polls",
        surveyPointsText:"All time survey points",
        surveyFooterText:"Take surveys and earn guaranteed cash backs on",
        gameCardText:"Play Online Games",
        mumbaiCardText:" Explore Mumbai",
        sosPopupTitle:"EveTeasing SOS !",
        sosPopupDesc:"You are being monitored from the CCTV, please stay within the Bus Shelter until you feel safe"
      }  
      renderView(data);
    }
    else{
      // url = "Marathi.json"
      data= {
        title:"द वन मध्ये आपले स्वागत आहे",
        subTitle:"तुमचे मुंबई शहराशी कनेक्शन",
        eveTeasingSos:"Eve Teasing SOS",
        feelSafeAnytime:"कधीही सुरक्षित वाटते",
        learnMore:"अधिक जाणून घ्या",
        selectPreferredConvenience:"पसंतीची सोय निवडा",
        BEST:"बेस्ट प्रवास",
        prawas:"prawas",
        eveteasingSOS:"EveTeasing SOS",
        eveteasingSOStext:"इव्ह टीझिंगचा अनुभव घेत आहात? SOS सहाय्यासाठी येथे दाबा!",
        nearbyMe:"माझ्या जवळ",
        nearbyMeText:"5 किलोमीटरच्या आत उपलब्ध क्षेत्रे",
        publicToiletsTitle:"सार्वजनिक शौचालये",
        publicToiletsSubtext:"महिला आणि पुरुषांसाठी जवळील सार्वजनिक शौचालये शोधा",
        toiletsAvailableText:"जवळपास शौचालये उपलब्ध आहेत",
        jobPosts:"जॉब पोस्ट्स",
        applyJob:"येथे नोकरीसाठी अर्ज करा!",
        jobsPostAvailableText:"जवळपास नोकरीची पोस्ट उपलब्ध आहे",
        surveyPolls:"सर्वेक्षण आणि मतदान",
        surveyPointsText:"सर्व वेळ सर्वेक्षण गुण",
        surveyFooterText:"सर्वेक्षण करा आणि गॅरंटीड कॅश बॅक मिळवा",
        gameCardText:"ऑनलाइन गेम्स खेळा",
        mumbaiCardText:"मुंबई एक्सप्लोर करा",
        sosPopupTitle:"EveTeasing SOS !",
        sosPopupDesc:"तुमच्यावर CCTV द्वारे नजर ठेवली जात आहे, कृपया तुम्हाला सुरक्षित वाटत नाही तोपर्यंत बस शेल्टरमध्ये रहा"
      }
      renderView(data);
    }
    // console.log(url);
    // getUser(url);
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
    // var selectPreferredConvenience = document.getElementById("select-preferred-convenience");
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
    subTitle.innerText = data.subTitle;
    eveTeasingSos.innerText = data.eveTeasingSos;
    feelSafeAnytime.innerText = data.feelSafeAnytime;
    learnMore.innerText = data.learnMore;
    // selectPreferredConvenience.innerText = data.selectPreferredConvenience;
    BEST.innerText = data.BEST;
    prawas.innerText = data.prawas;
    eveteasingSOS.innerText = data.eveteasingSOS;
    eveteasingSOSText.innerText = data.eveteasingSOStext;
    nearbyMe.innerText = data.nearbyMe;
    nearbyMeText.innerText = data.nearbyMeText;
    publicToiletsTitle.innerText = data.publicToiletsTitle;
    publicToiletsSubtext.innerText = data.publicToiletsSubtext;
    toiletsAvailableText.innerText = data.toiletsAvailableText;
    jobPosts.innerText = data.jobPosts;
    applyJob.innerText = data.applyJob;
    jobsPostAvailableText.innerText = data.jobsPostAvailableText;
    surveyPolls.innerText = data.surveyPolls;
    surveyPointsText.innerText = data.surveyPointsText;
    surveyFooterText.innerText = data.surveyFooterText;
    gameCardText.innerText = data.gameCardText;
    mumbaiCardText.innerText = data.mumbaiCardText;
    sosPopupTitle.innerText = data.sosPopupTitle;
    sosPopupDesc.innerText = data.sosPopupDesc;
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