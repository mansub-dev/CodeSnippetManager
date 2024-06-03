const backBtn = document.getElementById("btn-back");
const fName = document.querySelector(".f-name");
const codetxt = document.querySelector(".o-field-txt");

const snippets = JSON.parse(localStorage.getItem("snippets") ?? "[]");
const id = JSON.parse(localStorage.getItem("previewID"));

snippets.forEach((item) => {
    displaySnippetDetails(id);
});

function displaySnippetDetails(id) {
    const item = snippets.at(id);
    const fName = document.querySelector(".f-name");
    const codetxt = document.querySelector(".o-field-txt");
    fName.textContent = item.title;
    codetxt.textContent = item.code;
}

backBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});
