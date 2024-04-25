document.querySelector("#submit-btn").addEventListener("click", function(){
    // console.log("clicked");

    const textAreaElement = document.getElementById("text-area");
    const areaValue = textAreaElement.value; 
    // console.log(textAreaElement.value);

    const p = document.createElement("p");
    p.innerText = areaValue;

    const container = document.querySelector("#review");
    container.appendChild(p);
    document.getElementById("text-area").value = "";
});