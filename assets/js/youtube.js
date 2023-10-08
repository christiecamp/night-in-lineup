let key = "AIzaSyDID4ej9YC2P8vUwpG-7MomaiOwMzJq9jk"; //API KEY


var searchList = [];
$('#submit').on("click", function (event){
    event.preventDefault();
    youtube = $(this).parent('.btn').siblings('').val().trim();
    if (youtube === ""){
        return;
    };
    searchList.push(youtube);
    localStorage.setItem('youtube', JSON.stringify(searchList));
    pickTube ();

});

function pickTube () {
    var url =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q=YouTube+Data+API&type=video&key=" + key;
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    localStorage.setItem("youtube",JSON.stringify(data));
});
}
