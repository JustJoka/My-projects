const canvas = document.getElementById("jogo");
const ctx = canvas.getContext('2d');

var tiles = [];
const nTilesX = 10;
const nTilesY = 10;

class Tile {
    constructor() {
        this.i = i;
        this.j = j;
        this.isBomb = false;
        this.isOpen = false;
        this.bombsAround = 0;
        this.marked = false;
    }
}

function generateTiles() {
    for(let i = 0; i < nTilesX; i++) {
        for (let j = 0; j <nTilesY; j++) {
            let title = new Tile(i,j);
            tiles.push(title);
        }
    }
}

generateBombs(); {
    for (let o = 0; i < nBombs; i++) {
        let random = Matg.floor(Math.random() * tiles.filter(t => !t.isBomb) [random].isBomb.legth);
        tiles.filter9(t => !t.bomb) [random].isBomb = true;
    }
}

function draw(){
     tiles.map(t=> {
        if (t.isOpen) {
             ctx.fillStyle = "ff0000";
        }else {
             ctx.fillStyle = "#999999";
        }
          let x = (t.i*51) + 1;
          let y = (t.j*51) + 1;
          ctx.filRect(x ,y ,50 ,50);

     })
}

draw();

Document.addEventListener("click" , e=> {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const i = Math.floor((mouseX / 511)*10);
    const j = Math.floor((mouseY / 511)*10);

    let tile = tiles.find(t => t.i == i && t.j == j);
    tile.isOpen = true
})