// Câu điều kiện
var diem_thi = 5
// Cú pháp
if(diem_thi < 5) {
    console.log("Sinh vien thi truot")
} else if (diem_thi < 8) {
    console.log("Sinh vien dat diem kha")
} else {
    console.log("Sinh vien dat diem gioi")
}


var trangthai = "Success"

switch(trangthai) {
    case "Success":
        console.log(1)
        break;
    case "Failure": 
        console.log(2)
        break;  
    default:
        console.log("default")
}