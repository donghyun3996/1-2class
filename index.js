const img = new Image();
const date = new Date();
const news_all = document.querySelectorAll(".news_topic");
const news_btn = document.querySelector(".add_news");
const news_form = document.querySelector(".news_form");
const input_news = news_form.querySelector("#add_news_input");
const showing = "showing";
//함수 이름.classlist.remove(showing);
//함수 이름.classlist.add(showing);
//함수 이름.innerText = `${text}`;
function show_image(name, number){
    img.src = `./images/${number}.png`
    let win = window.open("", `${name}`, "width=500,height=600");
    win.document.writeln(`<h3 align="left">${name}</h3>`);
    win.document.write(`<img src="${img.src}">`);

}

function show_input(){
    news_form.classList.add(showing);
}

function init(){
    news_btn.addEventListener("click", show_input);
    //news_form.addEventListener("admin", add)
}