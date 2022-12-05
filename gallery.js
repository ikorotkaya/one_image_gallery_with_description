const initGallery = ({ container, images }) => {
  const $container = document.querySelector(container);

  // const $img = document.createElement("img");
  // $img.src = images[0].url;
  // $img.classList = "picture";

  // $container.appendChild($img);

  // const $h5 = document.createElement("h5");
  // $h5.innerText = images[0].description;
  
  // $container.appendChild($h5);

  $container.innerHTML = `
    <img src=${images[0].url} class="picture"/>
    <h5 class="description">${images[0].description}</h5>
  `;

  let currentImageIndex = 1;

  const $img = $container.querySelector(".picture");
  const $h5 = $container.querySelector(".description");

  $img.addEventListener("click", () => {
    $img.src = images[currentImageIndex].url;
    $h5.innerText = images[currentImageIndex].description;
    
    currentImageIndex += 1;

    if (currentImageIndex === images.length) {
      currentImageIndex = 0;
    }    

  })
}