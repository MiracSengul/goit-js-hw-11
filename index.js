import{S as g,a as m,i as a}from"./assets/vendor-CBpJbhZI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let d=new g(".gallery a",{captionsData:"alt",captionDelay:250});const f=s=>{const o=s.map(e=>`<li class="gallery-item">
                <a href="${e.largeImageURL}">
                  <img src="${e.webformatURL}" width='360' height='200' alt="${e.tags}">
                </a>
                
                <ul>
                    <li><b>Likes</b> ${e.likes}</li>
                    <li><b>Views</b> ${e.views}</li>
                    <li><b>Comments</b> ${e.comments}</li>
                    <li><b>Downloads</b> ${e.downloads}</li>
                </ul>
            </li>`).join("");c.insertAdjacentHTML("beforeend",o),d.refresh()},p=()=>{u.style.display="block"},y=()=>{u.style.display="none"},h=()=>{c.innerHTML=""},b="51088577-7b521529318281431558696f8",L=s=>{const o=`https://pixabay.com/api/?key=${b}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return m.get(o).then(e=>e.data.hits).catch(e=>{throw console.error("Error fetching images:",e),e})},l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault(),h();const o=s.target.elements.search.value;if(o===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}p(),L(o).then(e=>{if(e.length===0){a.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(e)}).catch(e=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error("Error fetching images:",e)}).finally(()=>{y()}),l.reset()});
//# sourceMappingURL=index.js.map
