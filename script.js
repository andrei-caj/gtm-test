// objects

let casinos = [
  {
    "name":"Sports Interaction Casino Review",
    "logo":"img/21_dukes_moons-3.png",
    "topButton":"20 Free Spins",
    "bottomButton":"200% First deposit bonus + 250 FS",
    "badge":true
  },
  {
    "name":"21 Dukes Casino Review",
    "logo":"img/21_dukes_moons.png",
    "topButton":"20 Free Spins",
    "bottomButton":"200% First deposit bonus + 250 FS",
    "badge":false
  },
  {
    "name":"AC Casino Review",
    "logo":"img/21_dukes_moons-1.png",
    "topButton":"50 Free Spins",
    "bottomButton":"200% First deposit bonus",
    "badge":true
  },
  {
    "name":"All Irish Casino Review",
    "logo":"img/21_dukes_moons-2.png",
    "bottomButton":"100% First deposit bonus + 70 FS",
    "badge":false
  },
  {
    "name":"All Star Games Casino Review",
    "logo":"img/21_dukes_moons-3.png",
    "topButton":"25 Free Spins",
    "bottomButton":"200% First deposit bonus",
    "badge":false
  },  
  {
    "name":"All Star Slots Casino Review",
    "logo":"img/21_dukes_moons.png",
    "topButton":"20 Free Spins",
    "bottomButton":"300% First deposit bonus",
    "badge":false
  },  
  {
    "name":"Sports Interaction Casino Review",
    "logo":"img/21_dukes_moons-3.png",
    "topButton":"25$ No deposit bonus",
    "bottomButton":"200% First deposit bonus",
    "badge":false
  },
  {
    "name":"VIP Stakes Casino Review",
    "logo":"img/21_dukes_moons-2.png",
    "topButton":"20 Free Spins",
    "bottomButton":"200% First deposit bonus + 250 FS",
    "badge":false
  },
  {
    "name":"Jackpot Capital Casino Review",
    "logo":"img/21_dukes_moons-1.png",
    "topButton":"20 Free Spins",
    "bottomButton":"400% First deposit bonus",
    "badge":false
  }
];

// functions

function drawItems() {
  var str="";
  var limit=4;
  var popup=
  `<div class='popup' id='popup'>
    <img class='close-icon' src='img/close-icon.png'>
    <h3>20 Free Spins at 21 Dukes Casino</h3>
    <div class='promo-code'>
      <span id="confirmation-popup"><img src='img/check.png'>Code copied to clipboard.</span>
      <span id="promo-code-text">WELCOME</span>
    </div>
    <div class='popup-row'>
      <span class='popup-row__title'>Games allowed:</span>
      <span class='popup-row__content'>Slots, Keno, Scratch Cards, Bingo</span>
    </div>
    <div class='popup-row'>
      <span class='popup-row__title'>Max cash out:</span>
      <span class='popup-row__content'>$100</span>
    </div>
    <div class='popup-row'>
      <span class='popup-row__title'>Min. deposit:</span>
      <span class='popup-row__content green-text'>FREE</span>
    </div>
  </div>`

  for (var i in casinos){
  str+=
    `<div class="main-list__item ${(i<limit)?"show-item":"hide-item"}">
      <div class="main-list__item-logo">
        <img src="${casinos[i].logo}" class="card-img-top" alt="...">
      </div>
      <div class="main-list__item-details">
        <span class="badge ${(casinos[i].badge)?"show-item":"hide-item"}">NEW</span>
        <p class="casino-name">${casinos[i].name}</p>
        <div class="casino-star-rating">
          <img src="img/us-flag.svg" class="casino-star-rating__flag" alt="...">
          <span class="casino-star-rating__score">4.4</span>
          <img src="img/star_rounded.svg" class="casino-star-rating__star" alt="...">
          <img src="img/star_rounded.svg" class="casino-star-rating__star" alt="...">
          <img src="img/star_rounded.svg" class="casino-star-rating__star" alt="...">
          <img src="img/star_rounded.svg" class="casino-star-rating__star" alt="...">
          <img src="img/star_rounded-1.svg" class="casino-star-rating__star" alt="...">
        </div>
      </div>
      <div class="main-list__item-buttons">
        <div id="top-button-container-${i}" class="top-button-container">
          <button id="top-button-${i}" class="${(casinos[i].topButton)?"action-button":"hide-item"}">
            ${casinos[i].topButton}
          </button>
          ${(i<1)?popup:""}
        </div>
        <button id="bottom-button-${i}" class="action-button">${casinos[i].bottomButton}</button>
      </div>
      <div class="main-list__item-link">
        <a href="*">Visit</a>
      </div>
    </div>`;
  }

  $("#main-list").html(str);

}

function showMore() {
  $("#load-more").on("click", function() {
    $(this).hide();
    $(".main-list__item").removeClass('hide-item');
  })
}

function togglePopup() {
  $("#top-button-0").on("click", function() {
    $("#popup").toggleClass('show');
  });
  $(".close-icon").on("click", function() {
    $("#popup").removeClass('show');
  })
}

function clipboardPopup() {
  var codeContainer = $(".promo-code");
  var copyText = $("#promo-code-text").text();
  var confirmationPopup = $("#confirmation-popup");

  codeContainer.on('click', function() {
    navigator.clipboard.writeText(copyText);
    confirmationPopup.addClass('show');
  })

  $(".close-icon").on("click", function() {
    confirmationPopup.removeClass('show');
  })
}

function main() {
  drawItems();
  showMore();
  togglePopup();
  clipboardPopup();
}

$(main);