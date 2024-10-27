// CRUD - Create - Read - Update - Delete

//16. global variables 
let dataCellValue = null

function Submit(){
    // 1. check if the submit button is working
    // alert("this is submit function");

    let dataEnteredIntoInputType = retrieveData();

    //5. check if the data retrieve / check developer tools console
    // console.log(dataEnteredIntoInputType);

    //6. read data from local storage / pass the retrieveData variable
    let readData = readingDataFromLocalStorage(dataEnteredIntoInputType);

    //11. check if the data retrieve / check developer tools (console)
    // console.log(readData);

    //17. select the table element from index.html with class="msg"
    let msg = document.querySelector(".msg");


    // 23 check if input are blank and show message.
    if(dataEnteredIntoInputType === false) {

        msg.innerHTML = "Please Enter Data";

    } else {
        // 18. check if data is inserted or updated / put insert and update function inside if statement and check the condition of dataCellValue === null (from edit function).
        if(dataCellValue === null) {
            //12. insert data into the table / pass the retrieve data from local storage
            insert(readData); 
    
            //19. show message
            msg.innerHTML = "Data Inserted";
        } else {
                update()
            
    
               //20. show message
            msg.innerHTML = "Data Updated";
        } 
    } 
    
    //24. form will be cleared after submitting the data.
    document.getElementById("form").reset();
}



// ********************* CREATE ************************

// retrieving data from FORM
// 2. define retrieveData function

function retrieveData() {

    // 3. fetch the value from input
    let fname = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let exp = document.getElementById("exp").value;

    // //4. return the data to submit function / put the data into array
    let arrayRetrieveData = [fname, job, exp];
    // return arrayRetrieveData ;  

    // 22. form validation check if inputs are blank
    if(arrayRetrieveData.includes("")){
        return false;
    } else {
        return arrayRetrieveData;
    }
}
// ********************** END CREATE ******************************


// ************************ DATA IN LOCAL STORAGE *************************

// *************************  R E A D  **********************************

// 7. define readingDataFromLocalStorage / pass the retrieveData variable
function readingDataFromLocalStorage(dataEnteredIntoInputType) {

    // storing data into Local Storage / used setItem
    let localName = localStorage.setItem("Name",dataEnteredIntoInputType[0]);
    let localJob = localStorage.setItem("Job", dataEnteredIntoInputType[1]);
    let localExp = localStorage.setItem("Experience", dataEnteredIntoInputType[2]);

    //8. put a data into the FORM and check on web developer tools on your browser (application) if data has been stored.

    // 9. Getting values from Local Storage / used getItem
    let getValuesName = localStorage.getItem("Name", localName);
    let getValuesJob = localStorage.getItem("Job", localJob);
    let getValuesExp = localStorage.getItem("Experience", localExp);

    // 10. return the data to submit function / put the data into array
    let arrayFromLocalStorage = [getValuesName, getValuesJob, getValuesExp];
    return arrayFromLocalStorage;
}
// ************************* END  R E A D  **********************************

// ************************* END DATA IN LOCAL STORAGE *************************




// ****************************** I N S E R T *****************************

//13. define insert function to insert data into the table / pass the retrieve data from local storage
function insert(readData) {

    // select the table element from index.html with id="myTable"
    let table = document.getElementById("myTable");

    // check if the table exist
    if(table){
    //  default function to insert data into the table.
    let row = table.insertRow();

    // default function to insert data into cell 
    // insert data into .innerHTML
      row.insertCell(0).innerHTML = readData[0];
      row.insertCell(1).innerHTML = readData[1];
      row.insertCell(2).innerHTML = readData[2];

    //   add a row to the buttons / and put a onclick for edit and delete function
      row.insertCell(3).innerHTML = `
      <td>
      <button onclick=edit(this)>Edit</button>
      </td>
      <td>
      <button onclick=remove(this)>Delete</button>
      </td>  
      `;
    } else {
        console.error("Table not found");
    }
 }


//  ************************* EDIT ********************

//14. define edit function
function edit(valueInsideTheCell) {
    // fetch the data inside the cell
     dataCellValue = valueInsideTheCell.parentElement.parentElement;

    // to edit the values inside the cell get their id
    document.getElementById("name").value = dataCellValue.cells[0].innerHTML;
    document.getElementById("job").value = dataCellValue.cells[1].innerHTML;
    document.getElementById("exp").value = dataCellValue.cells[2].innerHTML;

}

//***************************** UPDATE *******************/

// 15. define update function
function update() {
    dataCellValue.cells[0].innerHTML = document.getElementById("name").value;
    dataCellValue.cells[1].innerHTML = document.getElementById("job").value;
    dataCellValue.cells[2].innerHTML = document.getElementById("exp").value;

    dataCellValue = null;


}

// ********************** DELETE **********************

//21. define delete function
function remove(valueInsideTheCell) {

    // fetch the data inside the cell
    dataCellValue = valueInsideTheCell.parentElement.parentElement;

    // get the name of the item
    let itemName = dataCellValue.cells[0].innerHTML;

    // used default confirm function show a popup message before deleting a row
     let confirmDelete = confirm(`Are you sure you want to delete the record for ${itemName}`);

    // condition before deleting a datacell value (row value).
    if(confirmDelete === true){

    // used default function deleteRow() to delete dataCellValue in particular indexes
    document.getElementById("myTable").deleteRow(dataCellValue.rowIndex);

    // display a message after deletion
    let msg = document.querySelector(".msg");
    msg.innerHTML = `Record for ${itemName} has been deleted.`;

    } 
}

//******* */  Validate the input fields to avoid submitting blank values ********

// inside retrieveData Function used .includes function on arrayRetrieveData and pass an empty string and put in if else condition: here is the code

/* 

if(arrayRetrieveData.includes("")){
    return false;
} else {
    return arrayRetrieveData;
}

*/ 

// inside submit function put if condition on dataEnteredIntoInputType === false
//  and show message if input is blank
// else 
// put this code inside else
/*

if(dataCellValue === null) {
        //12. insert data into the table / pass the retrieve data from local storage
        insert(readData); 

        //19. show message
        msg.innerHTML = "Data Inserted";
    } else {
        update();

           //20. show message
        msg.innerHTML = "Data Updated";
    }  

 */
