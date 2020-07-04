class Token {
  color;
  tilenum;
  queen = false;
  element;
  constructor(tilenum, color = 'red') {
    color && (this.color = color);
    tilenum && (this.tilenum = tilenum);
    var token = document.createElement("div");
    token.className = "token";
    token.style.backgroundColor = this.color;
    this.element = token;
  }
  move(path) {
    // validate tilenum (make sure we can move to the tile that corresponds to tilenum)
    // well really we should not allow moving to tiles if they are too far away or occupied
    // remove token from it's current tile and put it in the selected tilenum
    // make this token a queen if it has reached the other side of the checkboard
    // remove opponent's tokens that have been jumped over
  }
  place(tile) {
    tile.appendChild(token);
  }
}

var size = 890;

var checkboard = document.getElementById("checkerboard");
checkerboard.style.height = size + 'px';
checkerboard.style.width = size + 'px';
var tokens = [];

function AddTile(num) {
  var tile  = document.createElement("div");
  tile.className = "tile";

  var row = Math.floor(num/8);
  var column = num % 8;

  if (row%2 == 0) {
    if (column%2==0) {
  	 tile.style.backgroundColor = "red";
   }
   else {
   	 tile.style.backgroundColor = "black";
   }
  }
  else {
    if (column%2==0) {
      tile.style.backgroundColor = "black";
    } else {
      tile.style.backgroundColor = "red";
    }

  }


  tile.style.top = row*size/8 + 'px';
  tile.style.left = column*size/8 + 'px';

  checkboard.appendChild(tile);
  return tile;
}

for ( var i = 0; i < 64; i++ ) {
  var tile = AddTile(i);
  var row = Math.floor(i/8);
  var column = i % 8;
  if (row<3) {
    if ((column + row)%2==1) {
      var tk = new Token(i, "rgb(30,30,30)");
      tokens.push(tk);
      tile.appendChild(tk.element);
    }
  }
  if (row>4) {
    if ((column + row)%2==1) {
      var tk = new Token(i);
      tokens.push(tk);
      tile.appendChild(tk.element);
    }
  }
}
