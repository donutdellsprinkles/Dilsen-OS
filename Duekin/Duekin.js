const addBtn = document.getElementById("add");


document.getElementById("demo").innerHTML = localStorage.getItem("notes");






const save = document.getElementById('save');



addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML = `
    <div class="notes">
        <textarea class="text"></textarea>
        <button class="delete"><i class="fa-solid fa-delete-left"></i></button>
        <div class="main></div>
        </div>
    `;
    
    note.style.width = "400px";
    note.style.height = "400px";
    note.style.backgroundColor = "white";
    let text = note.querySelector(".text");
    text.style.width = "400px";
    text.style.height = "400px";
    


    const deleteBtn = note.querySelector(".delete");
    deleteBtn.style.width="70px";
    deleteBtn.style.height="30px";
    deleteBtn.style.cursor="pointer";
    deleteBtn.style.backgroundColor="cyan";

    deleteBtn.addEventListener("click", () => {
        note.remove();
       
    });

    save.addEventListener("click", () => {
        notevalue = text.value;
        updateLS()
    });

    function updateLS() {
        localStorage.setItem("notes", JSON.stringify(notevalue))
        }


    document.body.appendChild(note);
}

