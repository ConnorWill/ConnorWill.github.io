


// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
document.getElementById("button").addEventListener("click", masterTotal);
function masterTotal(){
var height = document.getElementById("height").value;
function printPyramid( brick, height ) {
  let layer = ""
  for (let spaces = height - brick; spaces >= 0; spaces--) {
    layer += "."
  }
  for (let num = brick; num >= 0; num--) {
    layer += "#"
  }
   return layer
 
}
  
  for (let i = 1; i <= height; i++) {
    console.log(printPyramid(i, height))
      rowStr = printPyramid(i, height)
      var para = document.createElement("p");
      let node = document.createTextNode(rowStr);
      para.appendChild(node);
      let element = document.getElementById("pyramid");
      element.appendChild(para);
  }
}

    // TODO #1
    // print that pyramid!


 
