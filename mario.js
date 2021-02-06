let height = 5


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
}

var output = document.getElementById("pyramid");
output.innerHTML = "This is where the pyramid is supposed to be but I couldnt figue it out, so I did this. :)";
    // TODO #1
    // print that pyramid!


 
