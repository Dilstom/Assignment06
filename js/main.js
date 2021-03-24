// HANDLE THE LOAD EVENT OF THE WINDOW
function init() {
    // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    let btnAddEmployee = document.getElementById('btnAddEmployee');
    // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    btnAddEmployee.addEventListener('click', () => {
        window.open('./add-employee.html', "addPopup", "width=400, height=600");
    })
}

window.addEventListener('load', init)