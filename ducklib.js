/*判断当前协议是否为http或https*/
function isHttp() {
  protocol = document.location.protocol;
  if (protocol == "http:" || protocol == "https") {
    return true;
  } else {
    return false;
  }
}
/*判断是否为电子邮箱地址*/
function isEmail(addr) {
  var emailregular =
    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  if (emailregular.test(addr)) {
    return true;
  } else {
    return false;
  }
}
/*判断是否为URL*/
function isUrl(Url) {
  var urlregular =
    /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|top|xyz|wang|pub|xin|tech|ink|pro|museu|red|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.! #\/~%\$]*)?)$/i;
  if (urlregular.test(Url)) {
    return true;
  } else {
    return false;
  }
}
/*判断用户代理是否为移动端*/
function isMobile() {
  try {
    var urlhash = window.location.hash;
    if (!urlhash.match("fromapp")) {
      if (navigator.userAgent.match(/(iPhone|Android)/i)) {
        return true;
      } else {
        return false;
      }
    }
  } catch (err) { }
}
/*runJavaScript*/
function runjs(scriptText) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.onload = script.onreadystatechange = function () {
    if (
      !this.readyState ||
      this.readyState === "loaded" ||
      this.readyState === "complete"
    ) {
      script.onload = script.onreadystatechange = null;
    }
  };
  script.innerText = scriptText;
  head.appendChild(script);
}
runScript = runjs;
/*控制样式*/
function style(id) {
  return document.getElementById(id).style
}
/*距离目标时间还剩多久*/
function toDate(time, language) {
  if (time.indexOf(":") > -1) {
    var times = time;
  } else {
    var times = time + " 00:00:00";
  }
  let d1 = new Date(times);
  let d2 = new Date();
  let difference = Math.abs(d2.getTime() - d1.getTime());
  let days = parseInt(difference / (24 * 60 * 60 * 1000));
  let hours = parseInt(
    (difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  let mins = parseInt((difference % (60 * 60 * 1000)) / (60 * 1000));
  let second = Math.floor((difference / 1000) % 60);
  if (language == "zh") {
    if (days) {
      return `${days}天 ${hours}小时 ${mins}分钟 ${second}秒`;
    } else if (hours) {
      return `${hours}小时 ${mins}分种 ${second}秒`;
    } else {
      return `${mins}分钟 ${second}秒`;
    }
  } else if (language == "en") {
    if (days) {
      return `${days} days, ${hours} hours, ${mins} minutes and ${second} seconds`;
    } else if (hours) {
      return `${hours}hours, ${mins} minutes and ${second} seconds`;
    } else {
      return `${mins} minutes and ${second} seconds`;
    }
  } else {
    return `${difference}`;
  }
}

function convertTo(type,todate){
  if (type == "days"||type == "day"){
    let days = parseInt(todate / (24 * 60 * 60 * 1000));
    return days;
  }
  if (type == "hours"||type == "hour"||type == "h"){
    let hours = parseInt((todate  % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    return hours;
  }
  if (type == "minutes" || type == "minute" || type == "mins" || type == "min"){
    let minutes = parseInt((todate % (60 * 60 * 1000)) / (60 * 1000));
    return minutes;
  }
  if (type == "seconds"||type == "s"){
    let seconds = parseInt((todate / 1000) % 60);
    return seconds;
  }
}

