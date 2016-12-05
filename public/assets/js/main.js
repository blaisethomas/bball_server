$.get("https://trainrobber-ztebasketball.herokuapp.com/players/topten", function(data, status){
        console.log(data);
        var table = $('#table');
        for (d in data){
            console.log(data[d].email);
            
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var name = data[d].name;
            td1.innerHTML = name;
            tr.append(td1);
            var td2 = document.createElement("td");
            var score = data[d].score;
            td2.innerHTML = score;
            tr.append(td2);
            var td3 = document.createElement("td");
            var totalShots = data[d].totalShots;
            var accuracy = score / totalShots * 100;
            td3.innerHTML = accuracy + "%";
            tr.append(td3);
            var td4 = document.createElement("td");
            td4.innerHTML = data[d].time;
            tr.append(td4);




            table.append(tr);

        }
});
$("#submit").on('click', function() {
    var name = $("#name").val();
    var email = $("#email").val();
   console.log(name);
   console.log(email);

    $.post("https://trainrobber-ztebasketball.herokuapp.com/players/createplayer",
    {
        name: name,
        email: email
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
})