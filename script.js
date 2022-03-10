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
  var limit=4;
  var popup=$('#popup');

  $.each(casinos, function (i) {

    var mainListItem = $("body").find("#list-item-template > .main-list__item").clone();

    if (i >= limit) {
      mainListItem.addClass('hide-item');
    }

    if (!this.badge) {
      mainListItem.find(".badge").addClass('hide-item');
    }

    mainListItem.find(".casino-name").append(this.name);
    mainListItem.find(".main-list__item-logo > img").attr("src", this.logo);

    if (this.topButton) {
      mainListItem.find(".top-button-container").attr('id','top-button-container-' + i);
      mainListItem.find(".top-button").append(this.topButton).attr('id','top-button-' + i);
    }
    else {
      mainListItem.find(".top-button").addClass('hide-item');
    }

    mainListItem.find(".bottom-button").append(this.bottomButton);

    $(mainListItem).appendTo("#main-list");
  });

  popup.appendTo($('#top-button-container-0'));
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