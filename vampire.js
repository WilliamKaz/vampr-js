class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;



  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfCreators = 0;
    let currentVampire = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfCreators++;
    }
    return numberOfCreators;
  }


  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if(this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal){
      return true;
    } else {
      return false;
    }
  }
  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if(!(this.creator === vampire.creator)){
      // return
    }else if(this.creator === vampire.creator){
      return this.creator;
    }
  }
}

const david = new Vampire('david',1867);
const alicia = new Vampire('alicia',1947);
const ricky = new Vampire('ricky',1936);
const sally = new Vampire('sally',1998);
const jarvis = new Vampire('jarvis',1988);



david.addOffspring(alicia);
david.addOffspring(ricky);
ricky.addOffspring(sally);
alicia.addOffspring(jarvis);

// console.log(david.offspring);
// console.log(alicia.creator);
// console.log(david.numberOfOffspring);
// console.log('Sally is ' +  sally.numberOfVampiresFromOriginal + ' vampires away from the progentor(root) ');
// console.log('David is ' +  david.numberOfVampiresFromOriginal + ' vampires away from the progentor(root) ');
console.log(ricky.closestCommonAncestor(jarvis));

module.exports = Vampire;

