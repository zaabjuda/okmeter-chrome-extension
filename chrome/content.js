chrome.tabs.getCurrent(function(tab){
        console.log(tab.url);
        console.log(getQueryVariable(tab.url));
    }
);
var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);