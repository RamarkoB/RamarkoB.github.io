function openModal(){
    document.getElementById("modal").classList.add("show");
    return true;
}

function setModal(card, num){
    const name = card.getElementsByTagName("h4")[0].innerHTML;
    const img = card.getElementsByTagName("img")[0];
    const src = img.getAttribute("src");
            
    document.getElementById("modal").dataset.num = num;
    document.getElementById("modal-title").innerHTML = name;
    document.getElementById("modal-img").setAttribute("src", src);
    return true;
}

function closeModal(){
    document.getElementById("modal").classList.remove("show");
    return true;
}

const designCards = document.getElementsByClassName("card-design");

function imgNext(){
    const num = parseInt(document.getElementById("modal").dataset.num) + 1;
    if (num == designCards.length){
        setModal(designCards[0], 0);
    } else {
        setModal(designCards[num], num);
    }
    return true;
}

function imgPrev(){
    const num = parseInt(document.getElementById("modal").dataset.num);
    if (num == 0){
        const lastNum = designCards.length - 1;
        setModal(designCards[lastNum], lastNum);
    } else {
        setModal(designCards[num - 1], num - 1);
    }
    return true;
}

for (let i = 0; i < designCards.length; i++){
    const card = designCards[i];
    card.addEventListener("click", function(){
        if (window.innerWidth > 768) {
            openModal();
            setModal(card, i);
        }
    });
}

document.getElementById("modal-background").addEventListener("click", closeModal);
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("img-prev").addEventListener("click", imgPrev);
document.getElementById('img-next').addEventListener("click", imgNext);