import{S as t,i as s,s as e,e as l,t as o,a,b as n,f as r,g as c,c as h,d as f,h as i,j as u,k as g,l as v,q as p,n as d,m}from"./client.79fdf9bb.js";function b(t,s,e){const l=t.slice();return l[1]=s[e],l}function E(t){let s,e,p,d,m,b,E,q=t[1].title+"",j=t[1].date+"";return{c(){s=l("li"),e=l("a"),p=o(q),d=a(),m=l("i"),b=o(j),this.h()},l(t){s=n(t,"LI",{class:!0});var l=r(s);e=n(l,"A",{rel:!0,href:!0,class:!0});var o=r(e);p=c(o,q),d=h(o),m=n(o,"I",{});var a=r(m);b=c(a,j),a.forEach(f),o.forEach(f),l.forEach(f),this.h()},h(){i(e,"rel","prefetch"),i(e,"href",E="blog/"+t[1].slug),i(e,"class","svelte-1gvqfc5"),i(s,"class","svelte-1gvqfc5")},m(t,l){u(t,s,l),g(s,e),g(e,p),g(e,d),g(e,m),g(m,b)},p(t,s){1&s&&q!==(q=t[1].title+"")&&v(p,q),1&s&&j!==(j=t[1].date+"")&&v(b,j),1&s&&E!==(E="blog/"+t[1].slug)&&i(e,"href",E)},d(t){t&&f(s)}}}function q(t){let s,e,v,q,j,x=t[0],I=[];for(let s=0;s<x.length;s+=1)I[s]=E(b(t,x,s));return{c(){s=a(),e=l("h1"),v=o("Recent Posts"),q=a(),j=l("ul");for(let t=0;t<I.length;t+=1)I[t].c();this.h()},l(t){p('[data-svelte="svelte-gqn956"]',document.head).forEach(f),s=h(t),e=n(t,"H1",{});var l=r(e);v=c(l,"Recent Posts"),l.forEach(f),q=h(t),j=n(t,"UL",{class:!0});var o=r(j);for(let t=0;t<I.length;t+=1)I[t].l(o);o.forEach(f),this.h()},h(){document.title="Nooh Alavi - Blog",i(j,"class","svelte-1gvqfc5")},m(t,l){u(t,s,l),u(t,e,l),g(e,v),u(t,q,l),u(t,j,l);for(let t=0;t<I.length;t+=1)I[t].m(j,null)},p(t,[s]){if(1&s){let e;for(x=t[0],e=0;e<x.length;e+=1){const l=b(t,x,e);I[e]?I[e].p(l,s):(I[e]=E(l),I[e].c(),I[e].m(j,null))}for(;e<I.length;e+=1)I[e].d(1);I.length=x.length}},i:d,o:d,d(t){t&&f(s),t&&f(e),t&&f(q),t&&f(j),m(I,t)}}}function j(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function x(t,s,e){console.clear(),console.log("I see that you're a dev! Don't worry - this website is open source at https://noohalavi.github.io/source");let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,x,q,e,{posts:0})}}export{j as preload};
