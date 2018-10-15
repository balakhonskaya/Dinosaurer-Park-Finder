//Dinosaur Park Finder
//classes: Park, Visitor, Comment

// This project is a dinosaur park finder
// For now, the following interactions exist:
// Dinosaur Park can be created
// Dinosaur Park can have comments
// Dinosaur Park have visitors
// Visitors can go to Dinosaur Park
// Visitors can comment on Dinosaur Park


// Create a Park class

var Park = class {
  constructor(parkName, parkAddress, parkHours){
    this.parkName = parkName
    //this.parkAddress = parkAddress
    //this.parkHours = parkHours
    this.comments = []
    this.visitors = []
    console.log("New Dinosaur Park created: " + parkName)
      //, '+ parkAddress + ', '+ parkHours)
  }
  show(comment){
    this.comments.push(comment)
    comment.givenBy.push(visitorName)
  }
  get(comment){
        this.comments.push(comment)
        comment.park.push(this.parkName)
    }
}

// Create some Parks
var nkunde = new Park('Museum für Naturkunde', 'Invalidenstraße 43, 10115 Berlin', 'daily 9.30 - 18.00, Saturday and Sunday 10.00 - 18.00')
var bautzen = new Park('Dinosaur Park Bautzen', 'Saurierpark 1, 02625 Bautzen', 'daily 9.00 - 18.00')
var dino = new Park('Park Dino Münchehagen', 'Alte Zollstraße 5, 31547 Rehburg-Loccum', 'daily 9.00 - 18.00')

// Create a Visitor class
var Visitor = class {
    constructor(visitorName){
        this.visitorName = visitorName
        this.parks = []
        this.comments = []
        console.log("New Visitor created:", visitorName)
    }
    // insert a function for visiting a park
    visit(park){
        this.parks.push(park)
        park.visitors.push(this)
    }
    // insert a function for commenting on a park
    give(comment){
        this.comments.push(comment)
        comment.commentedBy.push(this.visitorName)
    }
}

// Create some Visitors
var jenny = new Visitor('Jenny')
var beate = new Visitor('Beate')
var nora = new Visitor('Nora')
var sascha = new Visitor('Sascha')

var Comment = class{
    // construct the class
    constructor(commentName){
       this.commentName = commentName
       this.commentedBy = []
       this.park = []
       console.log("New Comment created:", commentName)
    }
}

// Create some Comments
var ok = new Comment('OK!')
var good = new Comment('Good park!')
var cool = new Comment('Cool park!')

// let's have some people visit some toilets and give comments
jenny.visit(nkunde)
jenny.give(ok)
beate.visit(bautzen)
beate.visit(dino)
beate.give(cool)
beate.give(ok)
nora.visit(dino)
nora.give(good)
sascha.visit(bautzen)
sascha.visit(nkunde)
sascha.give(cool)
sascha.give(ok)

nkunde.get(ok)

// check that everything got recorded correctly

// Comments
console.log(ok)
console.log(good)
console.log(cool)

// Parks
console.log(nkunde)
console.log(bautzen)
console.log(dino)

// Visitors
console.log(jenny)
console.log(beate)
console.log(nora)
console.log(sascha)