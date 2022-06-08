/** BÀI 1:
    let str = "ahihihihi";
    let a = [];
    for (let i = str.length - 1; i >= 0; i--) {
    a.push(str[i]);
    }
    console.log(...a);
 */

   // Bai 2.
    // let str = "data";
    // function count(str){
    //     let resul = {};
    //     for(let i = 0; i < str.length -1 ; i++){
    //         let dem = 0;
    //         for(let j = i; j < str.length; j++){
    //             if(str[i] == str[j]){
    //                 dem ++;
    //                 let str2 = str.slice(j, j+1);
    //                 str.replace(str2,"");
    //             }
    //         }
    //         resul[str[i]] = dem;
    //     }
    //     return resul;
    // }
    // console.log(count(str));
/**
    BÀI 3
   let main_str = "ahihi ahuhu ahehe";
// let  str1 = hello.split(" ");
// console.log(str1);
// function inHoa (str){
//     let newStr = str.split(" ");
//     for(let i = 0; i < newStr.length; i++){
//         let charStr = newStr[i].split("");
//         charStr[0] = charStr[0].toUpperCase();
//         newStr[i] = charStr.join("");
//     }
//    return newStr.join(" ");
// }
// console.log(inHoa(main_str));
*/

/**
Bài 4
// function Set(str){
//     let newArr = [];
//     for(let i = 0; i < str.length; i++){
//         if(newArr.indexOf(str[i]) == -1){
//             newArr.push(str[i]);
//         }
//     }
//     return newArr;
// }
// let str = ["one","two","three","one","one","four","five","four","five","five"];
// console.log(Set(str));

/**
 Bài 5
let Arr = [5, 2, 3, 4, 1];
for (let i = 0; i < Arr.length; i++) {
  for (let j = i + 1; j < Arr.length; j++) {
    if (Arr[i] > Arr[j]) {
      let t = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = t;
    }
  }
}
console.log(Arr);
 */
// Bai 6
// let Old_List =[
//         {
//             name: "Cien",
//             age: 20,
//             salary: "3000$",
//             position: "director"
//         },
//         {
//             name: "Hien",
//             age: 20,
//             salary: "2000$",
//             position: "manager"
//         },
//         {
//             name: "Phong",
//             age: 20,
//             salary: "1000$",
//             position: "mentor"
//         },
//     ]
    
//     let check = true;
//     function read(){
//         let str = "";
//         Old_List.forEach(function(a,index){
//             str += `${index + 1}. ${a.name} - ${a.age} - ${a.salary} - ${a.position} \n`
//         })
//         return str;
//     }
    
//     function findIndex(name){
//         let index = Old_List.findIndex(function(a){
//             return a.name === name;
//         })
//         return index;
//     }
//     while(check){
//         let Input = prompt("What do you want to do? (C/R/U/D)");
//         if(Input == "C"){
//             let name = prompt("Enter name:");
//             let age = prompt("Enter age:");
//             let salary = prompt("Enter salary:");
//             let position = prompt("Enter position:");
//             let New_List = {
//                 name,
//                 age,
//                 salary,
//                 position
//             }
//             Old_List.push(New_List);
//             alert(read());
//         }
//         else if(Input == "R"){
//             alert(read());
//         }
//         else if(Input == "U"){
//             let name = prompt("Enter name you want to update:");
//             let index = findIndex(name);
//             if(index > -1){
//                 let age = prompt(" age you want to update:");
//                 let salary = prompt(" salary you want to update:")
//                 let position = prompt(" position you want to update:");
//                 Old_List[index].name = name;
//                 Old_List[index].age = age;
//                 Old_List[index].salary = salary;
//                 Old_List[index].position = position;
//                 alert(read());
//             }
//             else{
//                 alert("not exist");
//             }
//         }
//         else if(Input == "D"){
//             let name = prompt(" name you want to delete:");
//             let index = findIndex(name);
//             if(index > -1){
//                 Old_List.splice(index, 1);
//                 alert(read());
//             }
//             else{
//                 alert(" not exist");
//             }
//         }
//         else if(Input == "E"){
//             loop = false;
//         }
//     }

//Bài 7
// let Input = prompt("Enter day/month/year:");
// let arr = Input.split("/");
// let newArr = arr.map(function(a){
//     return Number(a);
// })
// alert(newArr);

// if(newArr[2] % 4 == 0){
//     if(newArr[1] >= 1 & newArr[1] <= 12){
//         if(newArr[1] == 4 || newArr[1] == 6 ||newArr[1] == 9 ||newArr[1] == 11){
//             if(newArr[0] >0 && newArr[0] <= 30){
//                 alert("Hop le");
//             }
//             else{
//                 alert("Khong hop le");
//             }
//         }
//         else{
//             if(newArr[1] == 2){
//                 if(newArr[0] > 0 && newArr[0] <= 29){
//                     alert("Hop le");
//                 } 
//                 else alert("Khong hop le");
//             }
//             else{
//                 if(newArr[0] > 0 && newArr[0] <= 31){
//                     alert("Hop le");
//                 } 
//                 else alert("Khong hop le");
//            }
//         }
//     }
//     else{
//         alert("Khong hop le");
//     }
// }
// else{
//     if(newArr[1] >= 1 & newArr[1] <= 12){
//         if(newArr[1] == 4 || newArr[1] == 6 ||newArr[1] == 9 ||newArr[1] == 11){
//             if(newArr[0] >0 && newArr[0] <= 30){
//                 alert("Hop le");
//             }
//             else{
//                 alert("Khong hop le");
//             }
//         }
//         else{
//             if(newArr[1] == 2){
//                 if(newArr[0] > 0 && newArr[0] <= 28){
//                     alert("Hop le");
//                 } 
//                 else alert("Khong hop le");
//             }
//             else{
//                 if(newArr[0] > 0 && newArr[0] <= 31){
//                     alert("Hop le");
//                 } 
//                 else alert("Khong hop le");
//            }
//         }
//     }
//     else{
//         alert("Khong hop le");
//     }
// }