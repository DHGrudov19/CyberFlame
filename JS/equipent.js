// A function to color text depending on if an item is available or not
function available() {
    let text = document.querySelectorAll(".availability");

    for (let elem of text)
    {
        let contentOfText = elem.innerHTML;

        if(contentOfText == "В служба")
        {
            elem.style.color = "green";
        }
        else if (contentOfText == "Извън служба")
        {
            elem.style.color = "red";
        }
        else if (contentOfText == "В ремонт")
        {
            elem.style.color = "#D86F00";
        }
    }
}

// Calling the function for text coloring
available();