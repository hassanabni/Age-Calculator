
const button = document.querySelector(".btn");
let paragraph = document.querySelector(".answer");
let userInput = document.querySelector(".date");

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    button.addEventListener("click",()=>{
        let birthDate = new Date(userInput.value)
        let currentDate = new Date();
        
        let d1 = birthDate.getDate();
        let m1 = birthDate.getMonth() + 1;
        let y1 = birthDate.getFullYear();

        let d2 = currentDate.getDate();
        let m2 = currentDate.getMonth() + 1;
        let y2 = currentDate.getFullYear();

        let d3,m3,y3;
        y3 = y2-y1 ; 

        if(m2 >= m1){
            m3 = m2 - m1;
        }else{
            y3--;
            m3 = 12 + m2 - m1;
        }
        if(d2 >= d1){
            d3 = d2 - d1;
        }else{
            m3--;
            d3 = getDaysInMonth((y1,m1) + d2 - d1)
        }
        if(m3 < 0){
            m3 = 11 ;
            y3-- ;
        }
        let para = document.createElement("p");
        let content =(`you are <span>${y3}</span> years <span>${m3}</span>, months and     <span>${d3}</span> days old `);
        para.innerHTML= (content)
        paragraph.appendChild(para);
    })
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}
calculateAge();
