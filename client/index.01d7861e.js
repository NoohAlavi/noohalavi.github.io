import{S as t,i as s,s as e,e as l,t as o,b as a,f as n,g as r,d as h,h as c,j as i,k as f,l as u,a as g,q as p,c as v,n as d,m}from"./client.bd9d055b.js";function b(t,s,e){const l=t.slice();return l[1]=s[e],l}function q(t){let s,e,g,p,v=t[1].title+"";return{c(){s=l("li"),e=l("a"),g=o(v),this.h()},l(t){s=a(t,"LI",{class:!0});var l=n(s);e=a(l,"A",{rel:!0,href:!0,class:!0});var o=n(e);g=r(o,v),o.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",p="blog/"+t[1].slug),c(e,"class","svelte-1gvqfc5"),c(s,"class","svelte-1gvqfc5")},m(t,l){i(t,s,l),f(s,e),f(e,g)},p(t,s){1&s&&v!==(v=t[1].title+"")&&u(g,v),1&s&&p!==(p="blog/"+t[1].slug)&&c(e,"href",p)},d(t){t&&h(s)}}}function E(t){let s,e,u,E,j,x=t[0],w=[];for(let s=0;s<x.length;s+=1)w[s]=q(b(t,x,s));return{c(){s=g(),e=l("h1"),u=o("Recent Posts"),E=g(),j=l("ul");for(let t=0;t<w.length;t+=1)w[t].c();this.h()},l(t){p('[data-svelte="svelte-gqn956"]',document.head).forEach(h),s=v(t),e=a(t,"H1",{});var l=n(e);u=r(l,"Recent Posts"),l.forEach(h),E=v(t),j=a(t,"UL",{class:!0});var o=n(j);for(let t=0;t<w.length;t+=1)w[t].l(o);o.forEach(h),this.h()},h(){document.title="Nooh Alavi - Blog",c(j,"class","svelte-1gvqfc5")},m(t,l){i(t,s,l),i(t,e,l),f(e,u),i(t,E,l),i(t,j,l);for(let t=0;t<w.length;t+=1)w[t].m(j,null)},p(t,[s]){if(1&s){let e;for(x=t[0],e=0;e<x.length;e+=1){const l=b(t,x,e);w[e]?w[e].p(l,s):(w[e]=q(l),w[e].c(),w[e].m(j,null))}for(;e<w.length;e+=1)w[e].d(1);w.length=x.length}},i:d,o:d,d(t){t&&h(s),t&&h(e),t&&h(E),t&&h(j),m(w,t)}}}function j(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function x(t,s,e){console.log("I see that you're a dev! Don't worry - this website is open source at https://noohalavi.github.io/source");let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,x,E,e,{posts:0})}}export{j as preload};
