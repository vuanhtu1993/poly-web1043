// alert("Form")
var name = document.querySelector("#name")
var email = document.querySelector("#email")
var js = document.querySelector("#js")
var csdl = document.querySelector("#csdl")
var vovinam = document.querySelector("#vovinam")
var form = document.querySelector("#form")
var table = document.querySelector("#table")

// Event mặc định của HTML cứ submit form thì reload lại trang
// => Tránh reload lại trang

// Định nghĩa các trường dữ liệu trong form
var fields = ["email", "name", "js", "csdl", "vovinam"]

var formData = []

function clearError(arr) {
    for(var i = 0; i < arr.length; i++) {
        var error_field = document.querySelector(".error-" + arr[i])
        error_field.innerHTML = ""
    }
}

// Bắt lấy sự kiện submit form
form.onsubmit = function (event) {
    // Chống reload lại trang
    event.preventDefault()
    // Clear errors
    clearError(fields)

    var error = false
    var data = {}

    // Validate
    for(var i = 0; i < fields.length; i++) {
        var field = document.querySelector("#" + fields[i])
        var error_field = document.querySelector(".error-" + fields[i])
        if (fields[i] == "js" || fields[i] == "csdl" || fields[i] == "vovinam") {
            if (Number(field.value) < 0 || Number(field.value) > 10) {
                error_field.innerHTML = "Trường dữ liệu không hợp lệ"
                error = true
            }
        }
        if (field.value === "") {
            error_field.innerHTML = "Trường dữ liệu bắt buộc"
            error = true
        }
        data[fields[i]] = field.value
    }
    if (!error) {
        formData.push(data)
        render(formData)
    }
    // formData.push(data)
    //     render(formData)
}



function render(data) {
    var content = ""
    for(var i = 0; i < data.length; i++) {
        content += `
            <tr>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>${data[i].js}</td>
                <td>${data[i].csdl}</td>
                <td>${data[i].vovinam}</td>
            </tr>
        `
    }
    table.innerHTML = content
}
