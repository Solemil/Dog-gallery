let dogData = [
  {
    image: "./images/dog-1.jpg",
    title: "Magyar vizsla",
    text: "A rövidszőrű magyar vizsla a vadászok titkos tippje. Mert hogy nemcsak könnyen nevelhető és okos, hanem emellett még sokoldalú és kitartó társ is a vadászatban és a kutyasportban.",
  },
  {
    image: "./images/dog-2.jpg",
    title: "Leonbergi",
    text: "Már Sissi királynő is odavolt ezekért az oroszlánszerű kutyákért. A leonbergi nem csak a mérete és harmonikus testfelépítése lenyűgöző, hanem a gyermekszeretete és magabiztos nyugalma miatt is..",
  },
  {
    image: "./images/dog-3.jpg",
    title: "Labrador",
    text: "A középméretű labrador retriever kutya elsősorban házi kedvenc, de ez az eredetileg munkakutyaként tartott fajta nagyon igényli mind a testi, mind a szellemi fejlesztést.",
  },
  {
    image: "./images/dog-4.jpg",
    title: "Francia bulldog",
    text: "A jókedvű, rajongói által gyakran csak Bully-nak becézett francia bulldog, sármjával és hízelgő természetével minden kutyabarátot gyorsan a mancsa köré csavar.",
  },
];

let currentPhoto = 0;

function loadPhoto(numberPhoto) {
  $("#dog-img").attr("src", dogData[numberPhoto].image);
  $("#dog-title").text(dogData[numberPhoto].title);
  $("#dog-text").text(dogData[numberPhoto].text);
  $(".thumb img").removeClass("thumb-active");
  $(".thumb img[data-index=" + numberPhoto + "]").addClass("thumb-active");
}

loadPhoto(currentPhoto);

$("#right-arrow").click(() => {
  if (currentPhoto < dogData.length - 1) {
    currentPhoto++;
  } else {
    currentPhoto = 0;
  }
  console.log(currentPhoto);
  loadPhoto(currentPhoto);
});

$("#left-arrow").click(() => {
  if (currentPhoto > 0) {
    currentPhoto--;
  } else {
    currentPhoto = dogData.length - 1;
  }
  loadPhoto(currentPhoto);
});

dogData.forEach((object, number) => {
  $("aside").append(
    `
    <div class="thumb">
      <div class="dog-name">
        ${object.title}
      </div>
    <img src=${object.image} data-index="${number}">
    </div>`
  );
});

$(".thumb").click((event) => {
  let indexClicked = $(event.target).attr("data-index");
  let numberIndex = parseInt(indexClicked);
  currentPhoto = indexClicked;
  loadPhoto(currentPhoto);
});
