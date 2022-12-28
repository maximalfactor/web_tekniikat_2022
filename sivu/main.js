var textContent1 =`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel deserunt ad mollitia possimus veritatis nam. Mollitia eum, cum dolorem aperiam, fuga sit fugiat quia corporis consectetur similique provident id doloribus
Nesciunt quis obcaecati asperiores ratione nostrum earum mollitia recusandae, nam illo repellat molestiae sit numquam eius deserunt dolorum perspiciatis cum. Incidunt iure rerum voluptas, eaque reprehenderit in dolorum repellendus nobis.
Eos, quis. Placeat reiciendis natus sunt labore omnis, fuga at! Id ratione voluptate eum nesciunt sit a officia beatae eaque vitae temporibus ad, quibusdam distinctio nisi quisquam illum consequatur aliquid?
Quod sunt atque rem porro in, quibusdam neque, consequuntur modi tempora possimus harum at, debitis laudantium odio maxime eaque aspernatur molestias magnam quam consequatur eligendi unde nulla repellendus. Omnis, animi!
Magni accusamus cum optio, quae veniam ducimus, nobis atque nulla hic nam est? Quod officia sint vitae tenetur? Maxime inventore minima sapiente nesciunt quasi animi, laboriosam maiores voluptas numquam dolorem!`;

var textContent2 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel deserunt ad mollitia possimus veritatis nam. Mollitia eum, cum dolorem aperiam, fuga sit fugiat quia corporis consectetur similique provident id doloribus
Nesciunt quis obcaecati asperiosasdadsadast labore omnis, fuga at! Id ratione voluptate eum nesciunt sit a officia beatae eaque vitae temporibus ad, quibusdam distinctio nisi quisquam illum consequatur aliquid?
Quod sunt atque rem porro in, quibusdam neque, consequuntur modi tempora possimus harum at, debitis laudantium odio maxime eaque aspernatur molestias magnam quam consequatur eligendi unde nulla repellendus. Omnis, animi!
Magni accusamus cum optio, quae veniam ducimus, nobis atque nulla hic nam est? Quod officia sint vitae tenetur? Maxime inventore minima sapiente nesciunt quasi animi, laboriosam maiores voluptas numquam dolorem!`;

var textBody = document.querySelector("#text-container .card-body");
textBody.innerHTML = textContent1;
page1Button = document.querySelector("#text-container .nav-item:first-child>.nav-link");
page2Button = document.querySelector("#text-container .nav-item:not(*:first-child)>.nav-link");

page1Button.addEventListener("click", () => {
    page1Button.classList.toggle("active");
    if(page1Button.classList.contains("active")) {
        page2Button.classList.toggle("active");
        textBody.innerHTML = textContent1;
        return
    }
})
page2Button.addEventListener("click", () => {
    page2Button.classList.toggle("active");
    if(page2Button.classList.contains("active")) {
        page1Button.classList.toggle("active");
        textBody.innerHTML = textContent2;
        return
    }
})

