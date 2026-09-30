let arr = ["Shruti", "Ria", "Aman", "Rohit", "Raj"];

let target = "Aman";
let found = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        found = 1;
        break;
    }
}

if (found == 1) {
    console.log("Present");
} else {
    console.log("Not Present");
}