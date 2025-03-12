function getCookieValue(cookieName) {
    const name = cookieName + "=";
    console.log("document.cookie "+document.cookie)
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

let checkSession = ()=>{
  let curr_user = getCookieValue("username");
  if (curr_user && curr_user !== "") {
    document.getElementById("loginlogout").innerHTML = 
    '<span class="homepage_links" style="margin-right:10px">' + curr_user +'</span>' +
    '<a class="homepage_links" href="/api/logout">Logout</a>'
  } else {
    document.getElementById("loginlogout").innerHTML = 
    '<a style="margin-left: 10px; font-size: larger; padding: 10px 20px; background-color: white; color: rgb(22, 64, 255); text-decoration: none; border: 1px; border-radius: 5px; cursor: pointer;" href="./register.html">Register</a>'+
  '<a style="margin-left: 10px; font-size: larger; padding: 10px 20px; background-color: white; color: rgb(22, 64, 255); text-decoration: none; border: 1px; border-radius: 5px; cursor: pointer;" href="./login.html">Login</a>';
  }
 }