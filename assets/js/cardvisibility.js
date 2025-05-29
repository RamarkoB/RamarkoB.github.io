const expandList = document.getElementsByClassName("btn-expand");
const collapseList = document.getElementsByClassName("btn-collapse");

Array.from(expandList).forEach((expandBtn) => {
  expandBtn.addEventListener("click", () => {
    expandBtn.classList.add("active");

    const collapsebtn = expandBtn.parentElement.getElementsByClassName("btn-collapse")[0];
    collapsebtn.classList.remove("active");

    const section = expandBtn.parentElement.parentElement.parentElement.parentElement;
    section.classList.add("active");
  });
});

Array.from(collapseList).forEach((collapseBtn) => {
  collapseBtn.addEventListener("click", () => {
    collapseBtn.classList.add("active");

    const expandbtn = collapseBtn.parentElement.getElementsByClassName("btn-expand")[0];
    expandbtn.classList.remove("active");

    const section = collapseBtn.parentElement.parentElement.parentElement.parentElement;
    section.classList.remove("active");
  });
});
