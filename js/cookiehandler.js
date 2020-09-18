const CookieContainer = document.querySelector(".cookie-law-info-bar");
var CookieButton = document.querySelector('.cookie-button');

var MyCookies = Cookies.get("viewed_cookie_policy");

if(MyCookies)
{
    CookieContainer.classList.remove("active");
}
else
{
    setTimeout(() => {
        CookieContainer.classList.add("active");
    }, 2000);
}

    CookieButton.addEventListener("click", () => {
        CookieContainer.classList.remove("active");

        var ADay = 1.0;
        Cookies.set("viewed_cookie_policy", "true", {
        expires: ADay
        });

    });

    
