const circle = Array.from(document.getElementsByClassName('circle'));
const inside = document.getElementById('inside');
const title = document.getElementById('title');
const button = document.getElementById('button');
const container = document.querySelector('.container');
let turn = "x";

const winner = (num1, num2, num3) => {
    title.style.color = "#02842b";
    title.style.fontSize = "50px";
    container.style.pointerEvents = "none";
    button.style.display = "block";
    circle[num1].style.backgroundColor = "green";
    circle[num2].style.backgroundColor = "green";
    circle[num3].style.backgroundColor = "green";
    circle[num1].style.transform = "rotate(3deg)";
    circle[num2].style.transform = "rotate(3deg)";
    circle[num3].style.transform = "rotate(3deg)";
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
            winner(0, 1, 2);

        }

        else if (circle[3].innerHTML === circle[4].innerHTML && circle[4].innerHTML === circle[5].innerHTML && circle[3].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[3].innerHTML}`)
            winner(3, 4, 5);
        }

        else if (circle[6].innerHTML === circle[7].innerHTML && circle[7].innerHTML === circle[8].innerHTML && circle[6].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[6].innerHTML}`)
            winner(6, 7, 8);
        }
        else if (circle[0].innerHTML === circle[3].innerHTML && circle[3].innerHTML === circle[6].innerHTML && circle[0].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[0].innerHTML}`)
            winner(0, 3, 6);
        }

        else if (circle[1].innerHTML === circle[4].innerHTML && circle[4].innerHTML === circle[7].innerHTML && circle[1].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[1].innerHTML}`)
            winner(1, 4, 7);
        }

        else if (circle[2].innerHTML === circle[5].innerHTML && circle[5].innerHTML === circle[8].innerHTML && circle[2].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[2].innerHTML}`)
            winner(2, 5, 8);
        }
        else if (circle[0].innerHTML === circle[4].innerHTML && circle[4].innerHTML === circle[8].innerHTML && circle[0].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[0].innerHTML}`)
            winner(0, 4, 8);


        }
        else if (circle[2].innerHTML === circle[4].innerHTML && circle[4].innerHTML === circle[6].innerHTML && circle[2].innerHTML !== "") {
            title.innerHTML = (`the winner is ${circle[2].innerHTML}`)

            winner(2, 4, 6);

            // circle[2].style.backgroundColor = "green";
            // circle[4].style.backgroundColor = "green";
            // circle[6].style.backgroundColor = "green";
            // circle[2].style.transform = "rotate(3deg)";
            // circle[4].style.transform = "rotate(3deg)";
            // circle[6].style.transform = "rotate(3deg)";

        }

        else if (!circle.some(el => el.innerHTML === '')) {

            console.log("no winner")
            title.innerHTML = (`the game is draw`)
            container.style.pointerEvents = "none";
            button.style.display = "block";
            title.style.color = "blue";
            title.style.fontSize = "50px";

        }




        // console.log(idx)
        // console.log(circle.includes(''))

    })


})



