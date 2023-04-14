let btns = document.querySelectorAll(".btns li");
let title = document.querySelector("h1");
let img = document.querySelector(".showBox img");
let str = document.querySelector("strong");
let sp = document.querySelector("span");

let total = btns.length;
sp.innerText = total;

for (let i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        e.preventDefault(); // a 태그의 링크 기능 무시
        // strong 태그에 클릭한 index + 1에 해당하는
        // 숫자를 써준다
        str.innerText = i + 1;

        // 클릭한 li 안의 a 태그에 있는 href 속성 값을
        // 변수에 담는다
        let imgSrc = btns[i].querySelector("a").getAttribute("href");
        
        // 클릭한 li 안의 a 태그 안에 있는 text를
        // 변수에 담는다
        let txt = btns[i].querySelector("a").innerText;
        
        // h1 안에 있는 text를 txt 변수 값으로 대체한다
        title.innerText = txt;

        // imgSrc 변수에 담은 이미지 주소를
        // img의 src에 대체한다
        img.setAttribute("src", imgSrc);

        // 활성화 class인 on을 이용해서 클릭한 버튼에
        // on을 붙여서 CSS를 변경해준다
        activation(btns, i);
    });
}

function activation(list, index) {
    for (let el of list) {
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}