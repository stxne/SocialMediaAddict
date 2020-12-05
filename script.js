let resourceElement = document.getElementById('resources');



let jsonData = [
      {
        "title" : "Resources",
        "section" : "WHAT IS SOCIAL MEDIA ADDICTION?",
        "image" : "one.png",
        "caption" : "Learn how to identify problematic social media use and what you can do about it.",
        "link" : "https://www.healthline.com/health/social-media-addiction"
      },
      {
        "title" : "Resources",
        "section" : "SOCIAL MEDIA VS MENTAL HEALTH",
        "image" : "two.png",
        "caption" : "Psychologists estimate that as many as 5 to 10% of Americans meet the criteria for social media addiction today.",
        "link" : "https://www.addictioncenter.com/drugs/social-media-addiction/"
      },
      {
        "title" : "Resources",
        "section" : "How the Internet Failed and How to Recreate It",
        "image" : "three.png",
        "caption" : "Jaron Lanier visited UC Santa Cruz and explored how the internet as it exists today might destroy our world.",
        "link" : "https://youtu.be/KNOlqzMd2Zw"
      },
      {
        "title" : "Resources",
        "section" : "PATTERNS & TRENDS SHAPING SOCIAL MEDIA",
        "image" : "four.png",
        "caption" : "Explore the patterns and trends shaping the social media landscape over the past decade. ",
        "link" : "https://www.pewresearch.org/internet/fact-sheet/social-media/"
      },
      {
        "title" : "Resources",
        "section" : "THE RISE OF THE SOCIAL MEDIA INDUSTRY",
        "image" : "five.png",
        "caption" : "When did the rise of social media start and what are the largest sites today? ",
        "link" : "https://ourworldindata.org/rise-of-social-media"
      },
      {
        "title" : "Resources",
        "section" : "WHY SCREENS MAKE US LESS HAPPY",
        "image" : "nine.png",
        "caption" : "What are our screens and devices doing to us? Psychologist Adam Alter studies how much time screens steal from us and how they're getting away with it.",
        "link" : "https://www.ted.com/talks/adam_alter_why_our_screens_make_us_less_happy?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
      },
      {
        "title" : "Resources",
        "section" : "SOCIAL MEDIA & ADOLESCENTS' & YOUNG ADULTS'MENTAL HEALTH",
        "image" : "seven.png",
        "caption" : "Here’s what you need to know about social media use among teens and young adults.",
        "link" : "https://www.center4research.org/social-media-affects-mental-health/"
      },
      {
        "title" : "Resources",
        "section" : "THE IMPACT OF SOCIAL MEDIA ON OUR MENTAL HEALTH",
        "image" : "eight.png",
        "caption" : "Which social media trends are having a negative impact on our mental health? How can we have a healthier relationship with social media in our everyday lives?",
        "link" : "https://youtu.be/YxY4j3P76DQ"
      },
      {
        "title" : "Resources",
        "section" : "ONLINE SOCIAL NETWORKING & MENTAL HEALTH",
        "image" : "six.png",
        "caption" : "The recent findings regarding the suggested connection between SNS and mental health issues such as depressive symptoms, changes in self-esteem, and Internet addiction.",
        "link" : "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4183915/"
      }
  ]





function createElement(incomingJSON){
  for (let i = 0; i < incomingJSON.length; i++) {
    let newContentElement = document.createElement("DIV");
    newContentElement.classList.add('contentItem');

    let newContentName = document.createElement("H3");
    newContentName.classList.add('heading');
    newContentName.innerText = incomingJSON[i]['section'];
    newContentElement.appendChild(newContentName);

    let webLink = document.createElement("A");
    webLink.href = incomingJSON[i]['link'];
    let resourcesImage = document.createElement("IMG");
    resourcesImage.classList.add("img");
    resourcesImage.src = incomingJSON[i]['image'];
    webLink.appendChild(resourcesImage);
    newContentElement.appendChild(webLink);

    let newContentName2 = document.createElement("P");
    newContentName2.classList.add('imgDescription');
    newContentName2.innerText = incomingJSON[i]['caption'];
    newContentElement.appendChild(newContentName2);



    if (incomingJSON[i]['title'] == "Resources" && pageName == "resourcePage"){
      resourceElement.appendChild(newContentElement);
    }


  }


}
createElement(jsonData);
