import data from "./data.js";

const doc = document;
function CardItem(data) {
    const { img, title, discription, link } = data
    return `<div class="card-item">
            <img class="image" src="${img}" alt="img" width="100%" />
            <article class="content">
                <span>${title}</span>
                <p>${discription}</p>
            </article>
            <div class="btn">
                <a href="${link}">Learn More <i class="fa fa-long-arrow-right"></i></a>
            </div>
        </div>`;
}

const cardList = doc.querySelector(".card-wrap");

cardList.innerHTML = data.map(CardItem).join(" ");
