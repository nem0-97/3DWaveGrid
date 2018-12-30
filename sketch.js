//TODO: Add functionality so viewer can zoom in/out, and rotate around

let theta=0;//could use frameCount, just say theta=Framcount*.01 in the daw loop
let s=.1;//speed to change theta
let n=11;//size of grid
let w=11;//width of boxes
let h=11;//max height of box

function setup() {
  createCanvas(innerWidth,innerHeight, WEBGL);
}

function draw() {
  ortho();
  /*if(frameCount%500<250){
    ambientMaterial(0,255,0);
  }else{*/
    normalMaterial();
  //}
  n=Number(document.getElementById('n').value);
  w=Number(document.getElementById('w').value);
  h=Number(document.getElementById('h').value);
  s=Number(document.getElementById('s').value);
  background(0);

  //trying to get good perspective
  translate(-n/2*w,0,-n/2*w);
  rotateX(-PI/8);
  rotateY(-PI/4);

  //draw boxes
  for(let j=0,x=0;j<n;j++,x+=w){
    for(let i=0,z=0;i<n;i++,z+=w){
      //Translate to location to draw box
      translate(x,0,z);
      //distance from center of cubes is offset for angle
      let t=map(dist(x,z,n/2*w,n/2*w),0,dist(0,0,n/2*w,n/2*w),0,PI);
      //draw box
      box(w,h*sin(theta-t),w);
      //Undo translation(could use push and pop)
      translate(-x,0,-z);
    }
  }
  theta+=s;
}
