var ppl = document.querySelector("#people");
var inp = document.querySelector("input");

var data = [
    {name: "yash", src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "vipul", src: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "anish", src: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "alston", src: "https://images.unsplash.com/photo-1520451644838-906a72aa7c86?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "aditya", src: "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]


var pers = "";
data.forEach(function(elem) {
    pers += `<div class="person">
        <div class="img">
            <img src="${elem.src}" alt="${elem.name}">
        </div>
        <h4>${elem.name}</h4>
    </div>`
});

ppl.innerHTML = pers;

inp.addEventListener("input", function() {
    var matching = data.filter(function(e) {
        return e.name.startsWith(inp.value);
    });
    var newUsers = "";
    matching.forEach(function(elem) {
        newUsers += `<div class="person">
            <div class="img">
                <img src="${elem.src}" alt="${elem.name}">
            </div>
            <h4>${elem.name}</h4>
        </div>`
    });
    
    document.querySelector("#people").innerHTML = newUsers;
});
