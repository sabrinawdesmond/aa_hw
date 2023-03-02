

Array.prototype.titleize = function(callback) {
  let titleized = []

  for (let i = 0; i < this.length; i++){
    let name = this[i]
    let capitalized = "Mx. " + (name[0].toUppercase() + name.slice(1, name.length)) + " Jingleheimer Schmidt"
    
    titleized.push(capitalized)
  }
  callback(titleized)
}
arr = ["Mary", "Brian", "Leo"]
titleize(arr, printCallback){
  arr.myEach()
  // console.log
}

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height
  this.tricks = tricks
}

Elephant.prototype.grow = function () {
  this.height = this.height + 12
}

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick)
}