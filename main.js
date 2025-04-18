console.log("hello")
let record = localStorage.getItem("data")? JSON.parse(localStorage.getItem("data")):[]


function saveInput (){
    let data = document.getElementById("task")
    record.push(data.value)
    localStorage.setItem("data", JSON.stringify(record))
    location.reload()
}
window.onload = function (){
    displayTask()
    
}

document.querySelector(".enterbtn").addEventListener("click",()=>{
saveInput()
})

function displayTask(){
    let items =""
    let crew = document.querySelector(".todo_list")
    crew.innerHTML = ""
    
    // record= record.reverse()
    record.forEach((element,i) => {
        // console.log(element)
         items+= `<div class="input_controller">
            <textarea id="" disabled>${element}</textarea>
            <div class="edit_controller">
                <button class="editbtn">Edit</button>
                <button class="deletebtn">Delete</button>
            </div>
            <div class="update_controller" display= "none" >
                <button class="savebtn">Save</button>
                <button class="cancelbtn">Cancel</button>
                
            </div>
        </div>`
    });
    crew.innerHTML = record.length ? items: `<p>no item </p>`
    activateDeleteListeners()
    activateEditListeners()
    activateSaveListeners()
    activateCancelListeners()

}
function deleteItem(i){
    record.splice(i,1)
    localStorage.setItem("data", JSON.stringify(record))
    location.reload()
}
function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll(".cancelbtn")
    const hideUpdate = document.querySelectorAll(".update_controller")
    const editcontroller = document.querySelectorAll(".edit_controller")
    cancelBtn.forEach((cb, i ) =>{
        cb.addEventListener("click", ()=>{
            hideUpdate[i].style.display = "none"
            editcontroller[i].style.display="block"
            // location.reload()
        })
    })
}

function activateSaveListeners() {
    const savebtn = document.querySelectorAll(".savebtn")
    const inputs = document.querySelectorAll(".input_controller textarea")
    savebtn.forEach((db, j)=>{
        db.addEventListener("click", ()=>{
            console.log(j)
            updateItem(inputs[j].value, j)
        })
    })

function updateItem (text, i){
    record[i] =text
    localStorage.setItem("data",JSON.stringify(record))
    location.reload()
}

}
function activateEditListeners() {
    let editbtn = document.querySelectorAll(".editbtn")
    const updateController = document.querySelectorAll(".update_controller")
    const input = document.querySelectorAll(".input_controller textarea")
    const hideEdit = document.querySelectorAll(".edit_controller")

    editbtn.forEach((element, i)=>{
        element.addEventListener("click", ()=>{
            updateController[i].style.display ="block"
            input[i].disabled = false;
            hideEdit[i].style.display = "none"

        })
    })
}

function activateDeleteListeners (){
    let deletBtn = document.querySelectorAll(".deletebtn")
    deletBtn.forEach((db,i)=>{
        db.addEventListener("click", ()=>{
            deleteItem(i)
        })
    })
}



