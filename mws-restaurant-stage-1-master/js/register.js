//serviceWorker script to cache request
/*if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js', {scope: "/"})
    .then(reg => {
        console.log('ServiceWorker Registration');
    })
    .catch(error => {
      console.log('ServiceWorker Failed ' + error);
    });
  }*/

  if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js')
    .catch(function(err) {
      console.error(err);
    });
  }

 