"use strict";

function showOurTweets(showType){
 
  console.log('index:retreiveData() - start');

  fetch('/api/our-tweets')
  .then(response => {

    // Check the response
    if(!response.ok){
      throw new Error(response.status+": "+response.statusText);
    }
    return response.json();
  
  }).then(timeline => {

    console.log("-------------------------------------------------------------------");
    console.log("RAW Data:"+JSON.stringify(timeline.data));
    displayTweets(timeline.data);
  })
  .catch((error) => {
    console.log('Error:', error);
    renderNotFoundMessage(error.message);
  });

  console.log('index:retreiveData()- end');
}

function renderNotFoundMessage(){

  renderHtml(`<h3 class="font-bold">No Tweet Found !!!</h3>`);
}

function displayTweets(tweets){

  let outputHtml = "";
  tweets.forEach(function(tweet, index) {

    let title;
    let link;

    const i = tweet.text.indexOf("https");
    if(i != -1){
      // if tweet has a medis content
      title = tweet.text.substring(0, i);
      link = tweet.text.substring(i);

    }else{
      // if tweet has only status (text).
      title = tweet.text;
      link = `https://twitter.com/TheSun91512497/status/${tweet.id}`
    }

    const created_at = formatTime(tweet.created_at);

    console.log(`tweet ${index}: ${title} - ${link}`);

    outputHtml += ` <li class="py-1">
                    ${index+1}. <a href="${link}" target="_blank" class="text-blue-700 hover:text-red-700">${title}</a>
                      <div class="pl-6 text-gray-500 font-serif"><span>${created_at}</span></div>
                    </li>
                  `;

   });

   renderHtml(outputHtml);
}

function formatTime(str) {
      
  return (new Date(Date.parse(str))).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
}

// Show the output html in the page.
function renderHtml(outputHtml){
  
  const tweets = document.querySelector(".tweets");
  tweets.innerHTML = outputHtml;
}

showOurTweets();


