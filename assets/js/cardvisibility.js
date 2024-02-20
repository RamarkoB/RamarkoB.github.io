const expandList = document.getElementsByClassName("btn-expand");
for (let i = 0; i < expandList.length; i++) {
    const expandBtn = expandList[i];
    expandBtn.addEventListener("click", function() {
        expandBtn.classList.add("active");
        const collapsebtn = expandBtn.parentElement.getElementsByClassName("btn-collapse")[0];
        collapsebtn.classList.remove("active");
        const section = expandBtn.parentElement.parentElement.parentElement.parentElement;
        section.classList.add("active");
    })
}

const collapseList = document.getElementsByClassName("btn-collapse");
for (let i = 0; i < collapseList.length; i++) {
    const collapseBtn = collapseList[i];
    collapseBtn.addEventListener("click", function() {
        collapseBtn.classList.add("active");
        const expandbtn = collapseBtn.parentElement.getElementsByClassName("btn-expand")[0];
        expandbtn.classList.remove("active");
        const section = collapseBtn.parentElement.parentElement.parentElement.parentElement;
        section.classList.remove("active");
    })
}