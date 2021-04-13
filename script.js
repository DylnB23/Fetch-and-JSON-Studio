// TODO: add code here
window.addEventListener("load", function(){
    let json= []
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response){
        response.json().then( function(json) {
            const div = document.getElementById("container");
            let index = 7;
            for (let i=0; i<index; i++){
                div.innerHTML= `
                        <h3> ${json[index].firstName} ${json[index].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[index].hoursInSpace}</li>
                                <li>Active: ${json[index].active} </li>
                                <li>Skills: ${json[index].skills} </li>
                            </ul>
                        <img class="avatar" src="${json[index].picture}">
                
                    `;
                };
            });
        });
    });