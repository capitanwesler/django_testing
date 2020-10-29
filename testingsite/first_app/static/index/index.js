// This is the main JavaScript file for the index template

//I'm going to save all the list in a localStorage, just for testing
let localStorage = window.localStorage; 

//Set a array into the localStorage for the notes
localStorage.setItem("notes", "[]");


//First i'm adding to the document a event listener for the DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Then after the DOM is loaded, i can grab the elements 
    //Now i'm going to grab the textarea of the document
    let divCreate = document.getElementById("create-note");

    //Now i'm grabbing the div to show the notes
    let divShow = document.getElementById("notes-container");

    //Now i'm grabbing the button to save the note
    let buttonSave = document.getElementById("save-note");

    //Now i'm grabbing the show notes button
    let buttonShow = document.getElementById("show-notes");

    //Now i'm grabbing the button to create a new note
    let buttonNew = document.getElementById("new-note");

    //I'm adding a listener for the save-note button
    buttonSave.addEventListener("click", saveNote);

    //Adding a listener to show the notes
    buttonShow.addEventListener("click", showNotes);

    //Adding a listener to create a new note
    buttonNew.addEventListener("click", newNote);

    //This is a handle for saving the notes into the localStorage
    function saveNote() {
        //Here we are grabbing the actual value of the textarea, and saving it
        let text = divCreate.querySelector("textarea").value; 


        if (text !== "") {
            //We get the notes array from the localStorage
            let notes = JSON.parse(localStorage.getItem("notes"));    

            console.log(notes);
            //console.log(typeof notes);

            //Then we append that "note" to the array
            notes.push(text);

            //We parse again into a string
            notes = JSON.stringify(notes);

            //We set again, the notes
            localStorage.setItem("notes", notes);

            //And we reset the textarea
            divCreate.querySelector("textarea").value = "";
        }else {
            alert("You can't save empty notes, try again !");
        }
    }

    //This is going to show all the notes, in the localStorage object
    function showNotes() {
        // Grabbing the notes from the localStorage
        let notes = JSON.parse(localStorage.getItem("notes"));

        // We hide the textarea, from the user, and then display the 
        // list of the notes, in a ul 
        divCreate.classList.remove("displayed");
        divCreate.classList.add("non-displayed");

        // We show the div
        divShow.classList.remove("non-displayed");
        divShow.classList.add("displayed");

        //Then we grab the ul, element
        let ulNotes = divShow.querySelector("ul");

        for (const note of notes) {
            let newLi = document.createElement("li");

            newLi.innerText = note;

            ulNotes.appendChild(newLi);
        }
    }

    //This is for creating a new note
    function newNote() {
        // We clear the ul
        divShow.querySelector("ul").innerHTML = "";

        // We hide the div
        divShow.classList.remove("displayed");
        divShow.classList.add("non-displayed");


        // We show the text area again, and we can create a new note 
        divCreate.classList.remove("non-displayed");
        divCreate.classList.add("displayed");
    }
});
