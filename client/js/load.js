//On loading the window after all scripts have occured
//We will check if the user has notifications enabled
//With this method call we can ask the user for permission
window.addEventListener("load", function(event){
    Notification.requestPermission().then(function(result){
      body = "hey this is a doggo";
      icon = window.location.origin + '/foodlab/www/img/logo.png';
      title = "woof";
      spawnNotification(body, icon, title);
    });
});

function spawnNotification(theBody, theIcon, theTitle){
  var options = {
    body: theBody,
    icon: theIcon
  }

  var nots = new Notification(theTitle, options);
  setTimeout(nots.close.bind(nots), 5000);
}
