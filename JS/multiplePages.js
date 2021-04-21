function multiplePages(page, buttonActive){
    let tab = document.getElementsByClassName("tab-page");

    // A for loop to hide the pages
    for(let i = 0; i < tab.length; i++)
    {
        tab[i].style.display = "none";
    }

    let pageButtons = document.getElementsByClassName("pageButton");

    // A for loop to remove the 'active' class from the buttons
    for (let i = 0; i < pageButtons.length; i++) {
        pageButtons[i].classList.remove("active")
    }

    // To display the selected page
    document.getElementById(page).style.display = "block";
    buttonActive.classList.add("active");
}

// To open a page on default
document.getElementById("defaultOpen").click();