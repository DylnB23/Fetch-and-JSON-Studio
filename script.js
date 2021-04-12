// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const container = document.getElementById("container")
            index = 6
            for (let i=0; i<index.length; i++){
            container.innerHTML = <h3>Name ${json[index].name}</h3>
            }
         });
    });
});