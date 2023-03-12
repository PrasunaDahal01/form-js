function seterror(id, error) {
  //sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateform() {
  var returnval = true;
  //perform validation and if validation fails,set the value of returnvalue to false.
  var name = document.forms["myform"]["fname"].value;

  if (name.length < 5) {
    seterror("name", "*Length of name is too short.");
    returnval = false;
  }

  return returnval;
}
