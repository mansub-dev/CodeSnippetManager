const newBtn = document.getElementById("btn-new");

const snippetsContainer = document.querySelector(".snippets");

newBtn.addEventListener("click", function () {
    window.location.href = "new_snippet.html";
});
let snippets = JSON.parse(localStorage.getItem("snippets") ?? "[]");

snippets.forEach((item, i) => {

    const snippetItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const titleDiv = document.createElement("div");

    titleDiv.setAttribute("class", "snippet-title");
    deleteBtn.setAttribute("class", "btn-del");
    snippetItem.setAttribute("class", "snippet-item");
    snippetItem.setAttribute("data-id", i);

    const dId = snippetItem.getAttribute("data-id");

    const updated = JSON.stringify(snippets);

    localStorage.setItem("snippets", updated);

    titleDiv.textContent = `${i + 1}. ${item.title}`;
    deleteBtn.textContent = "Delete";
    snippetItem.appendChild(titleDiv);
    snippetItem.appendChild(deleteBtn);
    snippetsContainer.appendChild(snippetItem);
    titleDiv.addEventListener("click", function () {
        localStorage.setItem("previewID", dId);
        window.location.href = "p_snippet.html";
    });


});
rerenderElement(snippets);
function rerenderElement(snippets) {
    snippetsContainer.innerHTML = "";
    snippets.forEach((item, i) => {

        const snippetItem = document.createElement("li");
        const deleteBtn = document.createElement("button");
        const titleDiv = document.createElement("div");

        titleDiv.setAttribute("class", "snippet-title");
        deleteBtn.setAttribute("class", "btn-del");
        snippetItem.setAttribute("class", "snippet-item");
        snippetItem.setAttribute("data-id", i);

        const dId = snippetItem.getAttribute("data-id");


        const updated = JSON.stringify(snippets);

        localStorage.setItem("snippets", updated);

        titleDiv.textContent = `${i + 1}. ${item.title}`;
        deleteBtn.textContent = "Delete";
        snippetItem.appendChild(titleDiv);
        snippetItem.appendChild(deleteBtn);
        snippetsContainer.appendChild(snippetItem);
        titleDiv.addEventListener("click", function () {
            localStorage.setItem("previewID", dId);
            window.location.href = "preview.html";
        });
        deleteBtn.addEventListener("click", function () {
            snippets = snippets.filter((_, index) => index !== Number(dId));
            rerenderElement(snippets);
            localStorage.setItem("snippets", JSON.stringify(snippets));

        });
    });
}

const getData = () => { };

getData();
