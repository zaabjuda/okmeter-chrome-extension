(function(){
    var myEl = document.getElementById('submit');
    var date_field = $('#datetimepicker')
    date_field.datetimepicker();
    d = $('.pagination ul');
    myEl.addEventListener('click', function() {
        date = new Date(date_field.val());
        ts = date.getTime()/1000;
        duration = $('.duration').val();
        reloadPage(ts, duration);
    }, false);
  
function reloadPage(ts, duration){
   chrome.tabs.getSelected(null, function (tab) {
       var link = document.createElement('a');
       link.href = tab.url;
  var tabUrl = encodeURIComponent(tab.url);
  var tabTitle = encodeURIComponent(tab.title);
  link.search = "duration="+duration+ "&at=" + ts.toString();
  chrome.tabs.update(tab.id, {url: link.href});
});
}

})();
