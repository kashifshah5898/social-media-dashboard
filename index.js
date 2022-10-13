const toggle = () => {
  let isChecked = document.getElementById("toggleCheckBox").checked;
  console.log(isChecked);
  if (isChecked) {
    document.getElementById("body").style.backgroundColor = "#FFFFFF";
  } else {
    document.getElementById("body").style.backgroundColor = "#20222f";
  }
};
