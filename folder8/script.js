const data = [
  {
    name: "Naruto Uzumaki",
    src: "https://lh4.googleusercontent.com/proxy/nqqP48UePgO-yStZfk06KxGspB-6l-Y3RWwYkEFBj_fZ59d_2LiiBE8Jxw4XlRiHcHZsjqFinM7v7vw4gt4YuMmbVrtJXol1wJbQ7EmXUL1yQQJJ3dOm2f6Y8g8",
  },
  {
    name: "Goku",
    src: "https://i.pinimg.com/736x/4c/ca/ba/4ccaba32ef192e18b008e15e975d1463.jpg",
  },
  {
    name: "Light Yagami",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop7ZwnnoEKFW4xdrNJ1xLlUsJki-9b2nC5Q&s",
  },
  {
    name: "Edward Elric",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IeJE5uVvebYJwOxBY2xIG1J3y62GngO8TA&s",
  },
  {
    name: "Asta Staria",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08_NxhtvGbEVnkXsi3KjJwGi78JmxI4qFww&s",
  },
  {
    name: "Ichigo Kurosaki",
    src: "https://wallpapers-clan.com/wp-content/uploads/2022/09/bleach-ichigo-pfp-13.jpg",
  },
  {
    name: "Mash Burnedead",
    src: "https://c4.wallpaperflare.com/wallpaper/337/538/565/mashle-magic-and-muscles-mash-burnedead-hd-wallpaper-preview.jpg",
  },
  {
    name: "Monkey D. Luffy",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGzp8cDiO-JzfbOvHtmCnqCCg5B0c2ybyNA&s",
  },
];

const input = document.querySelector("input");
const people = document.querySelector(".people");

let person = "";

data.forEach((index) => {
    person += `<div class="person">
            <div class="img">
              <img src=${index.src} alt="">
            </div>
            <h4>${index.name}</h4>
          </div>`;
});

document.querySelector(".people").innerHTML = person;

input.addEventListener("input", () => {
  let matching = data.filter((e) => {
    return e.name.toLowerCase().includes(input.value.toLowerCase());
  });

  let newUsers = "";
  matching.forEach((index) => {
    newUsers += `<div class="person">
            <div class="img">
              <img src=${index.src} alt="">
            </div>
            <h4>${index.name}</h4>
          </div>`;
  });
  people.innerHTML = newUsers;
});
