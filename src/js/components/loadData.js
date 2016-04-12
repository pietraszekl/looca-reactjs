
let LoadData = {
  init: function() {
    let self = this;
    this.loadJSON('./data/looca.json', function(results) {
      window.localStorage.setItem("appData", JSON.stringify(results));
    });
  },
  loadJSON(path, success, error){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          if (success) {
            success(JSON.parse(xhr.responseText));
          }
        } else {
          if(error) {
            error(xhr);
          }
        }
      }
    };
    xhr.open("GET", path, true);
    xhr.send();
  }
}
LoadData.init();
module.exports = LoadData;
