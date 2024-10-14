const movingBtn = document.getElementById('MovingBtn') 
const YesBtn = document.getElementById('YesBtn') 
const firstScene = document.getElementById('firstScene')

movingBtn.addEventListener('mouseover', () => { 
                           const randomX = Math.floor(Math.random() * (window.innerWidth - movingBtn.offsetWidth));
                           const randomY = Math.floor(Math.random() * (window.innerHeight - movingBtn.offsetHeight));

                           movingBtn.style.left = ´${randomX}px´;
                           movingBtn.style.top = ´${randomY}px´;
}); 

YesBtn.addEventListener('click', () => { 
                        firstScene.innerHTML = ´ 
                        <h1>Do you want to go out on a date?</h1> 
                        <button id="YesBtn">Yes</button> 
                        <button id="NoBtn">No</button> 
  ´; 
}); 
