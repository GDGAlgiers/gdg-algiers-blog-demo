import{S as N,i as $,s as F,a as y,k as m,I as H,h as d,c as E,l as _,m as p,n,b as G,C as c,B as S,J as L,q as V,r as q,K as O}from"../../chunks/index-4c4c63a2.js";function K(o,a,s){const r=o.slice();return r[2]=a[s],r}function M(o){let a,s,r,i,e,t,u=o[2].title+"",l,f,h,g,A=o[2].author+"",k,I,x,B=o[2].excerpt+"",D,P;return{c(){a=m("a"),s=m("img"),i=y(),e=m("div"),t=m("div"),l=V(u),f=y(),h=m("p"),g=m("span"),k=V(A),I=y(),x=m("p"),D=V(B),P=y(),this.h()},l(w){a=_(w,"A",{href:!0,key:!0,class:!0});var v=p(a);s=_(v,"IMG",{src:!0,class:!0,alt:!0}),i=E(v),e=_(v,"DIV",{class:!0});var b=p(e);t=_(b,"DIV",{class:!0});var C=p(t);l=q(C,u),C.forEach(d),f=E(b),h=_(b,"P",{class:!0});var j=p(h);g=_(j,"SPAN",{class:!0});var z=p(g);k=q(z,A),z.forEach(d),j.forEach(d),I=E(b),x=_(b,"P",{class:!0});var J=p(x);D=q(J,B),J.forEach(d),b.forEach(d),P=E(v),v.forEach(d),this.h()},h(){O(s.src,r=o[2].image)||n(s,"src",r),n(s,"class","object-cover w-full h-64"),n(s,"alt",o[2].title),n(t,"class","inline-block mb-3 text-2xl font-bold leading-8"),n(g,"class","text-blue-gray-900"),n(h,"class","mb-3 text-xs font-semibold tracking-wide uppercase"),n(x,"class","mb-2 text-gray-700"),n(e,"class","p-5"),n(a,"href",`/${o[2]._id}`),n(a,"key",o[2]._id),n(a,"class","overflow-hidden transition-shadow duration-300 bg-gray-200 rounded border hover:text-blue-700 cursor-pointer")},m(w,v){G(w,a,v),c(a,s),c(a,i),c(a,e),c(e,t),c(t,l),c(e,f),c(e,h),c(h,g),c(g,k),c(e,I),c(e,x),c(x,D),c(a,P)},p:S,d(w){w&&d(a)}}}function Q(o){let a,s,r,i=o[0],e=[];for(let t=0;t<i.length;t+=1)e[t]=M(K(o,i,t));return{c(){a=y(),s=m("div"),r=m("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){H("svelte-1olv9z4",document.head).forEach(d),a=E(t),s=_(t,"DIV",{class:!0});var l=p(s);r=_(l,"DIV",{class:!0});var f=p(r);for(let h=0;h<e.length;h+=1)e[h].l(f);f.forEach(d),l.forEach(d),this.h()},h(){document.title="GDG Blog",n(r,"class","grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"),n(s,"class","px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20")},m(t,u){G(t,a,u),G(t,s,u),c(s,r);for(let l=0;l<e.length;l+=1)e[l].m(r,null)},p(t,[u]){if(u&1){i=t[0];let l;for(l=0;l<i.length;l+=1){const f=K(t,i,l);e[l]?e[l].p(f,u):(e[l]=M(f),e[l].c(),e[l].m(r,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=i.length}},i:S,o:S,d(t){t&&d(a),t&&d(s),L(e,t)}}}function R(o,a,s){let{data:r}=a;const i=r.data;return o.$$set=e=>{"data"in e&&s(1,r=e.data)},[i,r]}class U extends N{constructor(a){super(),$(this,a,R,Q,F,{data:1})}}export{U as default};