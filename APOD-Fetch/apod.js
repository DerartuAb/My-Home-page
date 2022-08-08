$(document).ready(function () {
        $("#view_button").click(apodFunc);
    });

function apodFunc() {
    const url = 'https://api.nasa.gov/planetary/apod';
    const api_key = 'DEMO_KEY';
    const date = $("#date").val();

    const apod = async () => {
        try{
            const response = await fetch(`${url}?api_key=${api_key}&date=${date}`);
            const data = await response.json();
            displayData(data);
        }
        catch(error){
            console.log(error)
        }
    };

    const displayData = function(data) {
          document.getElementById('title').innerHTML = data.title;
          document.getElementById('pic').src = data.url;
    };
    apod();
};


