// Loader Function
const loader = () => {
  const load = document.getElementById("loader");
  load.classList.add("hidden");
};
const removeLoader = () => {
  const load = document.getElementById("loader");
  load.classList.remove("hidden");
};

const clearDisplay = () => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const errorContainer = document.getElementById("error-container");
  errorContainer.innerHTML = "";
  const likeContainer = document.getElementById("like-container");
  likeContainer.innerHTML = "";
};
// All categories functions
const loadAllPetCategories = () => {
  clearDisplay();
  setTimeout(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => displayAllPetCategories(data.pets))
      .catch((error) => console.log(error));
    loader();
  }, 2000);
};
const displayAllPetCategories = (data) => {
  data.forEach((item) => {
    const cardContainer = document.getElementById("card-container");
    const card = document.createElement("div");
    card.classList = "card shadow-2xl gap-6";
    card.innerHTML = `
        <div class="m-3 p-5 card card-compact shadow-xl">
            <img src="${
              item.image == undefined || null ? "N/A" : item.image
            }" class="rounded-xl object-cover h-[350px]" alt="${
      item.category == undefined || null ? "N/A" : item.category
    }" />
            <h2 class="font-bold text-xl w-4/5">${
              item.pet_name == undefined || null ? "N/A" : item.pet_name
            }</h2>
            <p class="w-4/5"><i class="fa-solid fa-list mr-1"></i>Breed:${
              item.breed == undefined || null ? "N/A" : item.breed
            }</p>
            <p class="w-4/5"><i class="fa-regular fa-calendar-days mr-1"></i>Birth:${
              item.date_of_birth == undefined || null
                ? "N/A"
                : item.date_of_birth
            }</p>
            <p class="w-4/5"><i class="fa-solid fa-venus mr-1"></i>Gender:${
              item.gender == undefined || null ? "N/A" : item.gender
            }</p>
            <p class="w-4/5"><i class="fa-solid fa-bangladeshi-taka-sign mr-1"></i>${
              item.price == undefined || null ? "N/A" : item.price
            }</p>

        <div class="flex gap-2 mb-1 md:p-0 p-2">
            <button class="btn w-1/3 shadow-md" id="like-btn"  onclick="likePet(${
              item.petId
            })" ><i class="fa-regular fa-thumbs-up"></i></button>
            <button class="btn w-1/3 shadow-md" id="adopt-btn-${
              item.petId
            }" onclick="adoptPet(${item.petId})" >Adopt</button>
            <button class="btn w-1/3 shadow-md" id="details-btn" onclick="detailsPet(${
              item.petId
            })">Details</button>
            <div/>
        </div>
      `;
    cardContainer.append(card);
  });
};
//   show categorised pets function
const loadCategorisedData = (id) => {
  clearDisplay();
  removeLoader();
  setTimeout(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => showCategorisedData(data.pets, id))
      .catch((error) => console.log(error));
    loader();
  }, 2000);
};
const changeBtnColor = (id,id2,id3,id4) =>{
    const btnId1 = document.getElementById(id)
    const btnId2 = document.getElementById(id2)
    const btnId3 = document.getElementById(id3)
    const btnId4 = document.getElementById(id4)
    btnId1.classList.add("bg-[#0E7A81]","text-white")
    btnId2.classList.remove("bg-[#0E7A81]","text-white")
    btnId3.classList.remove("bg-[#0E7A81]","text-white")
    btnId4.classList.remove("bg-[#0E7A81]","text-white")
    // console.log(id + " button clicked")
}
const showCategorisedData = (data, id) => {
  if (id == "birds") {
    // console.log("Birds button clicked");
    const errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML = `
        <div id="error-container-2" class="flex flex-col justify-center w-1/2 mx-auto h-[400px]">
                <img src="images/error.webp" alt="error_message" class="h-[300px] object-fit w-2/2 mx-auto">
                <h2 class="text-2xl font-bold p-5 text-red-600 text-center">Opps! Sorry, we don't have the relevant data.</h2>
                <h2 class="text-xl p-5 text-center">Apologies, but it seems we don’t currently have the relevant information you’re looking for. Please check back later or explore other options!</h2>
        </div>
        `;
  } else {
    cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    data.forEach((item) => {
      if (id == item.category) {
        cardContainer = document.getElementById("card-container");
        const card = document.createElement("div");
        card.classList = "card shadow-2xl gap-6";
        card.innerHTML = `
                    <div class="m-3 p-5 card card-compact shadow-xl">
                        <img src="${
                          item.image == undefined || null ? "N/A" : item.image
                        }" class="rounded-xl object-cover h-[350px]" alt="${
          item.category == undefined || null ? "N/A" : item.category
        }" />
                        <h2 class="font-bold text-xl w-[80%]">${
                          item.pet_name == undefined || null
                            ? "N/A"
                            : item.pet_name
                        }</h2>
                        <p class="w-4/5"><i class="fa-solid fa-list mr-1"></i>Breed:${
                          item.breed == undefined || null ? "N/A" : item.breed
                        }</p>
                        <p class="w-4/5"><i class="fa-regular fa-calendar-days mr-1"></i>Birth:${
                          item.date_of_birth == undefined || null
                            ? "N/A"
                            : item.date_of_birth
                        }</p>
                        <p class="w-4/5"><i class="fa-solid fa-venus mr-1"></i>Gender:${
                          item.gender == undefined || null ? "N/A" : item.gender
                        }</p>
                        <p class="w-4/5"><i class="fa-solid fa-bangladeshi-taka-sign mr-1"></i>${
                          item.price == undefined || null ? "N/A" : item.price
                        }</p>

                    <div class="flex gap-2 mb-1 md:p-0 p-2">
                        <button class="btn w-1/3 shadow-md" id="like-btn"  onclick="likePet(${
                          item.petId
                        })"><i class="fa-regular fa-thumbs-up"></i></button>
                        <button class="btn w-1/3 shadow-md" id="adopt-btn-${
                          item.petId
                        }" onclick="adoptPet(${item.petId})">Adopt</button>
                        <button class="btn w-1/3 shadow-md" id="details-btn" onclick="detailsPet(${
                          item.petId
                        })">Details</button>
                        <div/>
                    </div>
                `;
        cardContainer.append(card);
      }
    });
  }
};
// const cardDemo ={
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
//  }

// Like button functions
const likePet = (id) => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((response) => response.json())
    // .then((data) =>console.log(id))
    .then((data) => addLikedPet(data.pets, id))
    .catch((error) => console.log(error));
};

const addLikedPet = (data, id) => {
  data.forEach((item) => {
    if (id == item.petId) {
      // console.log(item.petId)
      const likeContainer = document.getElementById("like-container");
      const card = document.createElement("div");
      card.classList = "card p-2";
      card.innerHTML = `
            <img src="${item.image}" class="rounded-lg object-cover"/>
            `;
      likeContainer.append(card);
    }
  });
};
// adopt button functions
const detailsPet = (id) => {
  clearModal1();
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => showdetailsPet(data.pets, id))
    .catch((error) => console.log(error));
};
const showdetailsPet = (data, id) => {
  data.forEach((item) => {
    if (id == item.petId) {
      const modalContainer = document.getElementById("modal-container");
      const card = document.createElement("div");
      card.classList = "card p-3 overflow-hidden";

      card.innerHTML = `
            <div class="">
             <img src="${item.image == undefined || null ? "N/A" : item.image}" class="rounded-md object-cover w-full"/>
             <h2 class="font-bold text-xl">${item.pet_name == undefined || null ? "N/A" : item.pet_name}</h2>
             <p><i class="fa-solid fa-list mr-1"></i>Breed:${item.breed == undefined || null ? "N/A" : item.breed}</p>
            <p><i class="fa-regular fa-calendar-days mr-1"></i>Birth:${item.date_of_birth == undefined || null ? "N/A" : item.date_of_birth}</p>
            <p><i class="fa-solid fa-venus mr-1"></i>${item.gender == undefined || null ? "N/A" : item.gender}</p>
            <p><i class="fa-solid fa-bangladeshi-taka-sign mr-1"></i>${item.price == undefined || null ? "N/A" : item.price}</p>
            </div>
            <div>
            <h2 class="font-bold">Details Information</h2>
            <p>${item.pet_details}</p>
            </div>
         `;
      modalContainer.append(card);
      document.getElementById("my_modal_1").showModal();
    }
  });
};
function clearModal1() {
  document.getElementById("modal-container").innerHTML = "";
}
// Adopt button functions
const adoptPet = (id) => {
    console.log(id);
    document.getElementById(`adopt-btn-${id}`).innerText = "Adopted";
    document.getElementById(`adopt-btn-${id}`).disabled = true;
    showCountDown(id);
};

const showCountDown = (id) => {
  let sec = 4;
  const interval = setInterval(function () {
    sec--;
    if (sec == 0) {
      document.getElementById("my_modal_5").close();
      clearInterval(interval);
    } else {
      const modalContainer5 = document.getElementById("modal-2");
      modalContainer5.innerHTML = `
                <div class="flex flex-col justify-center items-center">
                <img src="./images/handshake-48.png" class="w-20 h-20">
                    <p class="mb-3 mt-3">Congratulations! You are doing a great work.Keep going.</p>
                    <h2 class="font-bold text-4xl">${sec}</h2>
                </div>
                `;
      document.getElementById("my_modal_5").showModal();
    }
  }, 1000);
};

const showSortedPetData = (data) => {
  const cardContainer = document.getElementById("card-container");
  data.forEach((item) => {
    const card = document.createElement("div");

    card.innerHTML = `
            <div class="m-3 p-5 card card-compact shadow-xl">
            <img src="${
              item.image == undefined || null ? "N/A" : item.image
            }" class="rounded-xl object-cover h-[350px]" alt="${
      item.category == undefined || null ? "N/A" : item.category
    }" />
            <h2 class="font-bold text-xl w-4/5">${
              item.pet_name == undefined || null ? "N/A" : item.pet_name
            }</h2>
            <p class="w-4/5"><i class="fa-solid fa-list mr-1"></i>Breed:${
              item.breed == undefined || null ? "N/A" : item.breed
            }</p>
            <p class="w-4/5"><i class="fa-regular fa-calendar-days mr-1"></i>Birth:${
              item.date_of_birth == undefined || null
                ? "N/A"
                : item.date_of_birth
            }</p>
            <p class="w-4/5"><i class="fa-solid fa-venus mr-1"></i>Gender:${
              item.gender == undefined || null ? "N/A" : item.gender
            }</p>
            <p class="w-4/5"><i class="fa-solid fa-bangladeshi-taka-sign mr-1"></i>${
              item.price == undefined || null ? "N/A" : item.price
            }</p>

        <div class="flex gap-2 mb-1 md:p-0 p-2">
            <button class="btn w-1/3 shadow-md" id="like-btn"  onclick="likePet(${
              item.petId
            })" ><i class="fa-regular fa-thumbs-up"></i></button>
            <button class="btn w-1/3 shadow-md" id="adopt-btn-${
              item.petId
            }" onclick="adoptPet(${item.petId})" >Adopt</button>
            <button class="btn w-1/3 shadow-md" id="details-btn" onclick="detailsPet(${
              item.petId
            })">Details</button>
            <div/>
        </div>
            `;
        cardContainer.append(card);
  });
};

async function sort() {
  clearDisplay();
  removeLoader();
  setTimeout(async () => {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets"
    );
    const result = await response.json();
    const sortedData = result.pets.sort((a, b) => b.price - a.price);
    showSortedPetData(sortedData);

    loader();
  }, 2000);
}
loadAllPetCategories();