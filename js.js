const circle = document.querySelectorAll('.circle');
const inside = document.getElementById('inside');
const title = document.getElementById('title');
const button = document.getElementById('button');
const container = document.querySelector('.container');
let turn = "x";

const frezze = () => {
    title.style.color = "#02842b";
    title.style.fontSize = "50px";
    container.style.pointerEvents = "none";
    button.style.display = "block";
}

button.addEventListener('click', (el) => {
    window.location.reload();

})



// let counter = 5;
// const countdown = () => {
//     if (counter > 0) {
//         countdownElement.innerText = `Wait... ${counter}`;  // طباعة الرقم الحالي
//         setTimeout(() => {
//             countdownElement.innerText = "";  // مسح الرقم الحالي
//             setTimeout(() => {
//                 counter--;  // تقليل العدد
//                 countdown();  // استدعاء الدالة مرة أخرى بعد فترة
//             },);  // الانتظار 500 ملي ثانية قبل تقليل العداد
//         }, 1000);  // الانتظار 1 ثانية قبل مسح الرقم
//     }
// }



circle.forEach((el) => {

    el.addEventListener('click', () => {
        if (el.innerHTML == "") {
            el.innerHTML = turn;
            turn = turn === "x" ? "o" : "x";
            inside.innerHTML = turn;
        }

        if (el.innerHTML == "x") {
            el.style.backgroundColor = "gold";

        }
        else {
            el.style.backgroundColor = "black";
        }

        if (circle[0].innerHTML === circle[1].innerHTML && circle[1].innerHTML === circle[2].innerHTML && circle[0].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[2].innerHTML}`)
            circle[0].style.backgroundColor = "green";
            circle[1].style.backgroundColor = "green";
            circle[2].style.backgroundColor = "green";
            circle[0].style.transform = "rotate(3deg)";
            circle[1].style.transform = "rotate(3deg)";
            circle[2].style.transform = "rotate(3deg)";
            frezze();



        }


        else if (circle[3].innerHTML === circle[4].innerHTML && circle[4].innerHTML === circle[5].innerHTML && circle[3].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[3].innerHTML}`)
            circle[3].style.backgroundColor = "green";
            circle[4].style.backgroundColor = "green";
            circle[5].style.backgroundColor = "green";
            circle[3].style.transform = "rotate(3deg)";
            circle[4].style.transform = "rotate(3deg)";
            circle[5].style.transform = "rotate(3deg)";
            frezze();

        }

        else if (circle[6].innerHTML === circle[7].innerHTML && circle[7].innerHTML === circle[8].innerHTML && circle[6].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[6].innerHTML}`)
            circle[6].style.backgroundColor = "green";
            circle[7].style.backgroundColor = "green";
            circle[8].style.backgroundColor = "green";
            circle[6].style.transform = "rotate(3deg)";
            circle[7].style.transform = "rotate(3deg)";
            circle[8].style.transform = "rotate(3deg)";
            frezze();


        }
        else if (circle[0].innerHTML === circle[3].innerHTML && circle[3].innerHTML === circle[6].innerHTML && circle[0].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[0].innerHTML}`)
            circle[0].style.backgroundColor = "green";
            circle[3].style.backgroundColor = "green";
            circle[6].style.backgroundColor = "green";
            circle[0].style.transform = "rotate(3deg)";
            circle[3].style.transform = "rotate(3deg)";
            circle[6].style.transform = "rotate(3deg)";
            frezze();


        }

        else if (circle[1].innerHTML === circle[4].innerHTML && circle[4].innerHTML === circle[7].innerHTML && circle[1].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[1].innerHTML}`)
            circle[1].style.backgroundColor = "green";
            circle[4].style.backgroundColor = "green";
            circle[7].style.backgroundColor = "green";
            circle[1].style.transform = "rotate(3deg)";
            circle[4].style.transform = "rotate(3deg)";
            circle[7].style.transform = "rotate(3deg)";
            frezze();


        }

        else if (circle[2].innerHTML === circle[5].innerHTML && circle[5].innerHTML === circle[8].innerHTML && circle[2].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[2].innerHTML}`)
            circle[2].style.backgroundColor = "green";
            circle[5].style.backgroundColor = "green";
            circle[8].style.backgroundColor = "green";
            circle[2].style.transform = "rotate(3deg)";
            circle[5].style.transform = "rotate(3deg)";
            circle[8].style.transform = "rotate(3deg)";
            frezze();

        }
        else if (circle[0].innerHTML === circle[4].innerHTML && circle[4].innerHTML === circle[8].innerHTML && circle[0].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[0].innerHTML}`)
            circle[0].style.backgroundColor = "green";
            circle[4].style.backgroundColor = "green";
            circle[8].style.backgroundColor = "green";
            circle[0].style.transform = "rotate(3deg)";
            circle[4].style.transform = "rotate(3deg)";
            circle[8].style.transform = "rotate(3deg)";
            frezze();


        }
        else if (circle[2].innerHTML === circle[4].innerHTML && circle[4].innerHTML === circle[6].innerHTML && circle[2].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[2].innerHTML}`)
            circle[2].style.backgroundColor = "green";
            circle[4].style.backgroundColor = "green";
            circle[6].style.backgroundColor = "green";
            circle[2].style.transform = "rotate(3deg)";
            circle[4].style.transform = "rotate(3deg)";
            circle[6].style.transform = "rotate(3deg)";
            frezze();


        }





        // console.log(idx)
        // console.log(idx)

    })
})



