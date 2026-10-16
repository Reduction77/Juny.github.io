const stars=document.querySelector('#stars');
for(let i=0;i<32;i++){const s=document.createElement('span');s.className='star';s.textContent=i%5===0?'✧':'·';s.style.cssText=`left:${(i*37.3)%100}%;top:${(i*23.7)%100}%;font-size:${i%5===0?20:15}px;animation-delay:-${i%7}s`;stars.append(s)}
const motion=document.querySelector('#motion');
let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;
function setMotion(){document.body.classList.toggle('still',paused);motion.setAttribute('aria-label',paused?'播放背景动画':'暂停背景动画');motion.title=paused?'播放背景动画':'暂停背景动画';motion.setAttribute('aria-pressed',String(paused))}
motion.addEventListener('click',()=>{paused=!paused;setMotion()});setMotion();
const contact=document.querySelector('#contact');
function openContact(){document.querySelector('.copy-status').textContent='';contact.showModal()}
document.querySelector('#qq').addEventListener('click',openContact);
document.querySelector('#friend-contact').addEventListener('click',openContact);
document.querySelector('.close').addEventListener('click',()=>contact.close());
contact.addEventListener('click',e=>{if(e.target===contact){const r=contact.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)contact.close()}});
document.querySelector('#copy-qq').addEventListener('click',async()=>{const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText('2087698112');status.textContent='已复制，去 QQ 打个招呼吧 🍓'}catch{status.textContent='请长按或选中上方号码，手动复制。'}});
document.querySelector('#year').textContent=new Date().getFullYear();
