let displacement = 680;
const slider = document.getElementById('moving');
const container = document.getElementById('mov-con');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

  container.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
 
  const walk = (x - startX) //scroll-fast
  console.log(scrollLeft - walk)
  let ele = scrollLeft - walk;
  displacement =displacement -ele;
  if(displacement <=1000 && displacement >= 200){
    slider.style.left =`${displacement}px`
    let top = document.getElementById('phote');
    top.style.width=`${displacement}px`
  }
  

});
console.log(startX)