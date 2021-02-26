let duetString, duetDisplay, duetModal, duetArray, duetCount;

duetString = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

document.getElementById("duetButton").addEventListener("click", function() {
    duetModal = document.getElementById("duetModal");
    duetString = document.getElementById("duetEntry").value;
    if(duetString.trim().length !=0){
        duetModal.classList.add("duetHidden");
        start();
    }
});

function start(){
    duetDisplay = document.getElementById("duetDisplay");
    duetDisplay.classList.remove("duetHidden");

    duetString = duetString.replace(/\s\s+/g, ' ');
    duetArray = duetString.trim().split(" ");
    for(var i in duetArray){
        let duetWord = duetArray[i];
        duetWord = '<span id="duetWord' + i + '">' + duetWord + '</span>';
        duetArray[i] = duetWord;
    }

    duetDisplay.innerHTML = duetArray.join(" ");

    duetCount = 0;
    document.getElementById("duetWord" + duetCount).classList.add("duetHilite");

    function clearHilites(){
        for(var i in duetArray){
            document.getElementById("duetWord" + i).classList.remove("duetHilite");
        }
    }

    document.addEventListener('keydown', (event) => {
        if(event.key == "ArrowRight"){
            duetCount++;
            if(duetCount >= duetArray.length){
                duetCount = 0;
            }
            clearHilites();
            document.getElementById("duetWord" + duetCount).classList.add("duetHilite");
        }
        if(event.key == "ArrowLeft"){
            duetCount--;
            if(duetCount < 0){
                duetCount = duetArray.length - 1;
            }
            clearHilites();
            document.getElementById("duetWord" + duetCount).classList.add("duetHilite");
        }
    });
}
