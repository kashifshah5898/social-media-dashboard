const toggle = () => {
  let isChecked = document.getElementById("toggleCheckBox").checked;

  let colorWhite = document.getElementsByClassName("colorWhite");
  let totalFollowers = document.getElementsByClassName("totalFollowers");
  let userName = document.getElementsByClassName("userName");
  let rowCard = document.getElementsByClassName("rowCard");

  // 63687D
  if (isChecked) {
    document.getElementById("body").style.backgroundColor = "#FFFFFF";

    for (let index = 0; index < colorWhite.length; index++) {
      colorWhite[index].style.color = "#1D1F29";
    }

    for (let index = 0; index < totalFollowers.length; index++) {
      totalFollowers[index].style.color = "#63687D";
    }

    for (let index = 0; index < userName.length; index++) {
      userName[index].style.color = "#63687D";
    }

    for (let index = 0; index < rowCard.length; index++) {
      rowCard[index].style.setProperty("background-Color", "#F1F3FA", "important");
    }
    document.getElementById("overViewToday").style.color = "#63687D";
  } else {
    document.getElementById("body").style.backgroundColor = "#20222f";

    for (let index = 0; index < colorWhite.length; index++) {
      colorWhite[index].style.color = "#FFFFFF";
    }

    for (let index = 0; index < totalFollowers.length; index++) {
      totalFollowers[index].style.color = "#8c98c6";
    }

    for (let index = 0; index < userName.length; index++) {
      userName[index].style.color = "#8c98c6";
    }

    for (let index = 0; index < rowCard.length; index++) {
      rowCard[index].style.setProperty("background-Color", "#252b42", "important");
    }
    document.getElementById("overViewToday").style.color = "#FFFFFF";
  }
};

// onHover
// white screen #E1E4F0

// onHover
// black screen #333A55
