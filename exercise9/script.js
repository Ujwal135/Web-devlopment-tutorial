function createcard(title, channel, views, timeline) {
  let strviews;
  if (views > 1000000) {
    strviews = Math.floor(views / 1000000) + "M";}
  else if (views > 1000) {
    strviews = (views / 1000).toFixed(1) + "K";
  }
  else {
    strviews = views;
  }

  let html =    `<div class="container">
      <div class="image">
        <img src="hqdefault.avif" alt="" />
        <div class="capsule">23:42</div>
      </div>

      <div class="content">
        <h3 >${title}</h3>
        <div class="metadeta">
          <span class="channel1">${channel} </span>
          <span class="seprator">•</span>
          <span class="name1">${views}views .</span>
          <span class="seprator">•</span>
          <span class="timeline1">${timeline}year ago </span>
        </div>
      </div>
    </div>`

  document.querySelector("#boxcon").innerHTML = document.querySelector("#boxcon").innerHTML + html;
}

createcard(
  "JavaScript Exercise 14 - ujjwal & Ujjwal | Sigma Web Development Course - Tutorial #77",
  "CodeWithHarry",
  "1005454",
  "3"
);
