import{S as ge,i as pe,s as fe,J as G,K as J,L as F,m as E,h as m,p as h,M as ie,b as x,H as p,N as Te,n as K,O as ce,k as T,r as ee,a as $,z as ne,l as I,u as te,c as R,A as se,P as we,B as oe,Q as ae,g as Q,d as X,C as le,R as yt,D as Ct,E as Mt,F as St,G as Tt,T as It,o as Lt,U as Et,x as Oe,v as Bt,V as $e,W as Re}from"../chunks/index.7107990d.mjs";import{b as Nt}from"../chunks/paths.54cfbf45.mjs";var kt=function(){function t(l,s){if(!o[l]){o[l]={};for(var a=0;a<l.length;a++)o[l][l.charAt(a)]=a}return o[l][s]}var e=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={},c={compressToEncodedURIComponent:function(l){return l==null?"":c._compress(l,6,function(s){return n.charAt(s)})},decompressFromEncodedURIComponent:function(l){return l==null?"":l==""?null:(l=l.replace(/ /g,"+"),c._decompress(l.length,32,function(s){return t(n,l.charAt(s))}))},_compress:function(l,s,a){if(l==null)return"";var r,u,v,k={},B={},b="",L="",z="",w=2,_=3,d=2,A=[],f=0,i=0;for(v=0;v<l.length;v+=1)if(b=l.charAt(v),Object.prototype.hasOwnProperty.call(k,b)||(k[b]=_++,B[b]=!0),L=z+b,Object.prototype.hasOwnProperty.call(k,L))z=L;else{if(Object.prototype.hasOwnProperty.call(B,z)){if(z.charCodeAt(0)<256){for(r=0;d>r;r++)f<<=1,i==s-1?(i=0,A.push(a(f)),f=0):i++;for(u=z.charCodeAt(0),r=0;8>r;r++)f=f<<1|1&u,i==s-1?(i=0,A.push(a(f)),f=0):i++,u>>=1}else{for(u=1,r=0;d>r;r++)f=f<<1|u,i==s-1?(i=0,A.push(a(f)),f=0):i++,u=0;for(u=z.charCodeAt(0),r=0;16>r;r++)f=f<<1|1&u,i==s-1?(i=0,A.push(a(f)),f=0):i++,u>>=1}w--,w==0&&(w=Math.pow(2,d),d++),delete B[z]}else for(u=k[z],r=0;d>r;r++)f=f<<1|1&u,i==s-1?(i=0,A.push(a(f)),f=0):i++,u>>=1;w--,w==0&&(w=Math.pow(2,d),d++),k[L]=_++,z=String(b)}if(z!==""){if(Object.prototype.hasOwnProperty.call(B,z)){if(z.charCodeAt(0)<256){for(r=0;d>r;r++)f<<=1,i==s-1?(i=0,A.push(a(f)),f=0):i++;for(u=z.charCodeAt(0),r=0;8>r;r++)f=f<<1|1&u,i==s-1?(i=0,A.push(a(f)),f=0):i++,u>>=1}else{for(u=1,r=0;d>r;r++)f=f<<1|u,i==s-1?(i=0,A.push(a(f)),f=0):i++,u=0;for(u=z.charCodeAt(0),r=0;16>r;r++)f=f<<1|1&u,i==s-1?(i=0,A.push(a(f)),f=0):i++,u>>=1}w--,w==0&&(w=Math.pow(2,d),d++),delete B[z]}else for(u=k[z],r=0;d>r;r++)f=f<<1|1&u,i==s-1?(i=0,A.push(a(f)),f=0):i++,u>>=1;w--,w==0&&(w=Math.pow(2,d),d++)}for(u=2,r=0;d>r;r++)f=f<<1|1&u,i==s-1?(i=0,A.push(a(f)),f=0):i++,u>>=1;for(;;){if(f<<=1,i==s-1){A.push(a(f));break}i++}return A.join("")},_decompress:function(l,s,a){var r,u,v,k,B,b,L,z=[],w=4,_=4,d=3,A="",f=[],i={val:a(0),position:s,index:1};for(r=0;3>r;r+=1)z[r]=r;for(v=0,B=Math.pow(2,2),b=1;b!=B;)k=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=a(i.index++)),v|=(k>0?1:0)*b,b<<=1;switch(v){case 0:for(v=0,B=Math.pow(2,8),b=1;b!=B;)k=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=a(i.index++)),v|=(k>0?1:0)*b,b<<=1;L=e(v);break;case 1:for(v=0,B=Math.pow(2,16),b=1;b!=B;)k=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=a(i.index++)),v|=(k>0?1:0)*b,b<<=1;L=e(v);break;case 2:return""}for(z[3]=L,u=L,f.push(L);;){if(i.index>l)return"";for(v=0,B=Math.pow(2,d),b=1;b!=B;)k=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=a(i.index++)),v|=(k>0?1:0)*b,b<<=1;switch(L=v){case 0:for(v=0,B=Math.pow(2,8),b=1;b!=B;)k=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=a(i.index++)),v|=(k>0?1:0)*b,b<<=1;z[_++]=e(v),L=_-1,w--;break;case 1:for(v=0,B=Math.pow(2,16),b=1;b!=B;)k=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=a(i.index++)),v|=(k>0?1:0)*b,b<<=1;z[_++]=e(v),L=_-1,w--;break;case 2:return f.join("")}if(w==0&&(w=Math.pow(2,d),d++),z[L])A=z[L];else{if(L!==_)return null;A=u+u.charAt(0)}f.push(A),z[_++]=u+A.charAt(0),w--,u=A,w==0&&(w=Math.pow(2,d),d++)}}};return c}();const Ot=kt.decompressFromEncodedURIComponent,Dt=kt.compressToEncodedURIComponent,zt="s";function Pt(){const t={map:{mappings:"",names:[],sources:[],sourcesContent:[],version:3},generated:"<Paste your generated code here>"},e=new URLSearchParams(document.location.search).get(zt);if(!e)return t;let n;try{const o=Ot(e);n=JSON.parse(o)}catch(o){console.error("Unable to parse url search parameters",o)}return Ue(n,"generated")&&typeof n.generated=="string"&&Ue(n,"map")&&Rt(n.map)?{map:n.map,generated:n.generated}:t}function $t(t){const e=Dt(JSON.stringify(t)),n=new URL(Nt,window.location.origin);return n.searchParams.set(zt,e),n}function Rt(t){return Ue(t,"mappings")&&typeof t.mappings=="string"&&Ue(t,"sourcesContent")&&Array.isArray(t.sourcesContent)}function Ue(t,e){return t?e in t:!1}function Vt(t){const e=[];for(const[n,o]of t.entries()){const c=o.reduce((l,s,a)=>{const r=Math.floor(a/2),u=l[r]||[];return u.push(s),l[r]=u,l},[]);for(const[l,s]of c)e.push({generated:{start:{line:1+n,column:l[0]},end:s?{line:1+n,column:s[0]}:void 0},source:{start:{line:1+(l[2]||0),column:l[3]||0},end:s?{line:s[2]?s[2]+1:void 0,column:s[3]}:void 0}})}return e}const Ut={get:()=>!0,set:()=>{}};function lt(t){const e=new Map;for(const{start:n,end:o}of t){const c=1+Math.abs(n.line-((o==null?void 0:o.line)||n.line));for(const[l]of Array(c).fill(null).entries()){const s=n.line+l,a=e.get(s)||new Map;if((o==null?void 0:o.line)!==n.line){e.set(s,Ut);continue}const r=Math.abs(n.column-(o.column||0));for(const[u]of Array(r).fill(null).entries()){const v=n.column+u;a.set(v,!0)}e.set(s,a)}}return e}function Gt(t,e){if(!t)return[];const n=e.filter(o=>Wt(o[t.type],t));return xt(n,t)}function Wt({start:t,end:e},n){const o=t.line<=n.line&&(!(e!=null&&e.line)||n.line<=e.line);if(e!=null&&e.line&&t.line!==e.line)return o;const c=t.column<=n.column&&(!(e!=null&&e.column)||n.column<=e.column);return o&&c}function xt(t,e){var c;const n=t.concat();n.sort((l,s)=>{const a=Math.abs(e.line-rt(l[e.type])),r=Math.abs(e.line-rt(s[e.type]));if(a===r){const u=Math.abs(e.column-at(l[e.type])),v=Math.abs(e.column-at(s[e.type]));return u-v}return a-r});const o=(c=n[0])==null?void 0:c[e.type];return n.filter(l=>Kt(o,l[e.type]))}function rt({start:t,end:e}){return(t.line+((e==null?void 0:e.line)||t.line))/2}function at({start:t,end:e}){return(t.column+((e==null?void 0:e.column)||t.column))/2}function Kt(t,e){const n=t.start.line<=e.start.line&&t.start.column<=e.start.column;if(!t.end||!e.end)return n;const o=t.end.line>=e.end.line&&t.end.column>=e.end.column;return n&&o}const Ht={version:3,names:[],sources:["repro.svelte"],sourcesContent:[`<script>
  export let users;

  if (users.length > 0) {
    console.log("repro.svelte::users more than 0!");
  } else {
    console.log("repro.svelte::users less than 0!");
  }
<\/script>

<ul>
  {#each users as user}
    <li>{user}</li>
  {/each}

  {#if users.length === 0}
    <p>No users available</p>
  {/if}
</ul>
`],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;wBAYS,GAAI;;;;;;;;;GAAT,MAAe;;;;;wCAAV,GAAI;;;;;;;;;;;;;;;;;;;;;GAIT,MAAyB;;;;;;;;;;;4BALpB,GAAK;;;gCAAV,MAAI;;;;0BAID,GAAK,IAAC,MAAM,KAAK,CAAC;;;;;;;;;;;;;;GALzB,MAQK;;;;;;;;;;;2BAPI,GAAK;;;+BAAV,MAAI;;;;;;;;;;;;;;;;oCAAJ,MAAI;;;iBAID,GAAK,IAAC,MAAM,KAAK,CAAC;;;;;;;;;;;;;;;;;;;;;;;;OAdZ,KAAK;;KAEZ,KAAK,CAAC,MAAM,GAAG,CAAC;EAClB,OAAO,CAAC,GAAG,CAAC,kCAAkC;;EAE9C,OAAO,CAAC,GAAG,CAAC,kCAAkC;;;;;;;;;;;;;;;;;"},jt=`/* repro.svelte generated by Svelte v3.55.1 */
import {
 SvelteComponent,
 append,
 destroy_each,
 detach,
 element,
 init,
 insert,
 noop,
 safe_not_equal,
 set_data,
 space,
 text
} from "svelte/internal";

function get_each_context(ctx, list, i) {
 const child_ctx = ctx.slice();
 child_ctx[1] = list[i];
 return child_ctx;
}

// (12:2) {#each users as user}
function create_each_block(ctx) {
 let li;
 let t_value = /*user*/ ctx[1] + "";
 let t;

 return {
  c() {
   li = element("li");
   t = text(t_value);
  },
  m(target, anchor) {
   insert(target, li, anchor);
   append(li, t);
  },
  p(ctx, dirty) {
   if (dirty & /*users*/ 1) {
    if (t_value !== (t_value = /*user*/ ctx[1] + "")) {
     set_data(t, t_value);
    }
   }
  },
  d(detaching) {
   if (detaching) detach(li);
  }
 };
}

// (16:2) {#if users.length === 0}
function create_if_block(ctx) {
 let p;

 return {
  c() {
   p = element("p");
   p.textContent = "No users available";
  },
  m(target, anchor) {
   insert(target, p, anchor);
  },
  d(detaching) {
   if (detaching) detach(p);
  }
 };
}

function create_fragment(ctx) {
 let ul;
 let t;
 let each_value = /*users*/ ctx[0];
 let each_blocks = [];

 for (let i = 0; i < each_value.length; i += 1) {
  each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
 }

 let if_block = /*users*/ ctx[0].length === 0 && create_if_block(ctx);

 return {
  c() {
   ul = element("ul");

   for (let i = 0; i < each_blocks.length; i += 1) {
    each_blocks[i].c();
   }

   t = space();
   if (if_block) if_block.c();
  },
  m(target, anchor) {
   insert(target, ul, anchor);

   for (let i = 0; i < each_blocks.length; i += 1) {
    each_blocks[i].m(ul, null);
   }

   append(ul, t);
   if (if_block) if_block.m(ul, null);
  },
  p(ctx, [dirty]) {
   if (dirty & /*users*/ 1) {
    each_value = /*users*/ ctx[0];
    let i;

    for (i = 0; i < each_value.length; i += 1) {
     const child_ctx = get_each_context(ctx, each_value, i);

     if (each_blocks[i]) {
      each_blocks[i].p(child_ctx, dirty);
     } else {
      each_blocks[i] = create_each_block(child_ctx);
      each_blocks[i].c();
      each_blocks[i].m(ul, t);
     }
    }

    for (; i < each_blocks.length; i += 1) {
     each_blocks[i].d(1);
    }

    each_blocks.length = each_value.length;
   }

   if (/*users*/ ctx[0].length === 0) {
    if (if_block) {

    } else {
     if_block = create_if_block(ctx);
     if_block.c();
     if_block.m(ul, null);
    }
   } else if (if_block) {
    if_block.d(1);
    if_block = null;
   }
  },
  i: noop,
  o: noop,
  d(detaching) {
   if (detaching) detach(ul);
   destroy_each(each_blocks, detaching);
   if (if_block) if_block.d();
  }
 };
}

function instance($$self, $$props, $$invalidate) {
 let { users } = $$props;

 if (users.length > 0) {
  console.log("repro.svelte::users more than 0!");
 } else {
  console.log("repro.svelte::users less than 0!");
 }

 $$self.$$set = $$props => {
  if ('users' in $$props) $$invalidate(0, users = $$props.users);
 };

 return [users];
}

class Repro extends SvelteComponent {
 constructor(options) {
  super();
  init(this, options, instance, create_fragment, safe_not_equal, { users: 0 });
 }
}

export default Repro;`;function qt(t){let e,n,o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},t[0]],c={};for(let l=0;l<o.length;l+=1)c=G(c,o[l]);return{c(){e=J("svg"),n=J("path"),this.h()},l(l){e=F(l,"svg",{xmlns:!0,viewBox:!0});var s=E(e);n=F(s,"path",{d:!0}),E(n).forEach(m),s.forEach(m),this.h()},h(){h(n,"d","M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"),ie(e,c)},m(l,s){x(l,e,s),p(e,n)},p(l,[s]){ie(e,c=Te(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},s&1&&l[0]]))},i:K,o:K,d(l){l&&m(e)}}}function Jt(t,e,n){return t.$$set=o=>{n(0,e=G(G({},e),ce(o)))},e=ce(e),[e]}class Ft extends ge{constructor(e){super(),pe(this,e,Jt,qt,fe,{})}}function Yt(t){let e,n,o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},t[0]],c={};for(let l=0;l<o.length;l+=1)c=G(c,o[l]);return{c(){e=J("svg"),n=J("path"),this.h()},l(l){e=F(l,"svg",{xmlns:!0,viewBox:!0});var s=E(e);n=F(s,"path",{d:!0}),E(n).forEach(m),s.forEach(m),this.h()},h(){h(n,"d","M18 15a3 3 0 0 0-2.1.86L8 12.34v-.67l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3zm0-10a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM5 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm13 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"),ie(e,c)},m(l,s){x(l,e,s),p(e,n)},p(l,[s]){ie(e,c=Te(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},s&1&&l[0]]))},i:K,o:K,d(l){l&&m(e)}}}function Zt(t,e,n){return t.$$set=o=>{n(0,e=G(G({},e),ce(o)))},e=ce(e),[e]}class Qt extends ge{constructor(e){super(),pe(this,e,Zt,Yt,fe,{})}}function Xt(t){let e,n,o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},t[0]],c={};for(let l=0;l<o.length;l+=1)c=G(c,o[l]);return{c(){e=J("svg"),n=J("path"),this.h()},l(l){e=F(l,"svg",{xmlns:!0,viewBox:!0});var s=E(e);n=F(s,"path",{d:!0}),E(n).forEach(m),s.forEach(m),this.h()},h(){h(n,"d","M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16zM19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z"),ie(e,c)},m(l,s){x(l,e,s),p(e,n)},p(l,[s]){ie(e,c=Te(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},s&1&&l[0]]))},i:K,o:K,d(l){l&&m(e)}}}function en(t,e,n){return t.$$set=o=>{n(0,e=G(G({},e),ce(o)))},e=ce(e),[e]}class tn extends ge{constructor(e){super(),pe(this,e,en,Xt,fe,{})}}function nn(t){let e,n,o,c=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},t[0]],l={};for(let s=0;s<c.length;s+=1)l=G(l,c[s]);return{c(){e=J("svg"),n=J("path"),o=J("path"),this.h()},l(s){e=F(s,"svg",{xmlns:!0,viewBox:!0});var a=E(e);n=F(a,"path",{d:!0}),E(n).forEach(m),o=F(a,"path",{class:!0,d:!0}),E(o).forEach(m),a.forEach(m),this.h()},h(){h(n,"d","M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"),h(o,"class","check-mark"),h(o,"d","m14.7 8.39-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z"),ie(e,l)},m(s,a){x(s,e,a),p(e,n),p(e,o)},p(s,[a]){ie(e,l=Te(c,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},a&1&&s[0]]))},i:K,o:K,d(s){s&&m(e)}}}function sn(t,e,n){return t.$$set=o=>{n(0,e=G(G({},e),ce(o)))},e=ce(e),[e]}class on extends ge{constructor(e){super(),pe(this,e,sn,nn,fe,{})}}function ln(t){let e,n,o,c=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},t[0]],l={};for(let s=0;s<c.length;s+=1)l=G(l,c[s]);return{c(){e=J("svg"),n=J("path"),o=J("path"),this.h()},l(s){e=F(s,"svg",{xmlns:!0,viewBox:!0});var a=E(e);n=F(a,"path",{d:!0}),E(n).forEach(m),o=F(a,"path",{d:!0}),E(o).forEach(m),a.forEach(m),this.h()},h(){h(n,"d","M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"),h(o,"d","M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"),ie(e,l)},m(s,a){x(s,e,a),p(e,n),p(e,o)},p(s,[a]){ie(e,l=Te(c,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},a&1&&s[0]]))},i:K,o:K,d(s){s&&m(e)}}}function rn(t,e,n){return t.$$set=o=>{n(0,e=G(G({},e),ce(o)))},e=ce(e),[e]}class it extends ge{constructor(e){super(),pe(this,e,rn,ln,fe,{})}}function an(t){let e,n,o,c=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},t[0]],l={};for(let s=0;s<c.length;s+=1)l=G(l,c[s]);return{c(){e=J("svg"),n=J("path"),o=J("path"),this.h()},l(s){e=F(s,"svg",{xmlns:!0,viewBox:!0});var a=E(e);n=F(a,"path",{d:!0}),E(n).forEach(m),o=F(a,"path",{d:!0}),E(o).forEach(m),a.forEach(m),this.h()},h(){h(n,"d","M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"),h(o,"d","M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"),ie(e,l)},m(s,a){x(s,e,a),p(e,n),p(e,o)},p(s,[a]){ie(e,l=Te(c,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"2 2 20 20"},a&1&&s[0]]))},i:K,o:K,d(s){s&&m(e)}}}function cn(t,e,n){return t.$$set=o=>{n(0,e=G(G({},e),ce(o)))},e=ce(e),[e]}class ct extends ge{constructor(e){super(),pe(this,e,cn,an,fe,{})}}var un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ee={},fn={get exports(){return Ee},set exports(t){Ee=t}};(function(t,e){(function(n,o){o(e)})(un,function(n){const o=",".charCodeAt(0),c=";".charCodeAt(0),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=new Uint8Array(64),a=new Uint8Array(128);for(let _=0;_<l.length;_++){const d=l.charCodeAt(_);s[_]=d,a[d]=_}const r=typeof TextDecoder<"u"?new TextDecoder:typeof Buffer<"u"?{decode(_){return Buffer.from(_.buffer,_.byteOffset,_.byteLength).toString()}}:{decode(_){let d="";for(let A=0;A<_.length;A++)d+=String.fromCharCode(_[A]);return d}};function u(_){const d=new Int32Array(5),A=[];let f=0;do{const i=v(_,f),M=[];let g=!0,O=0;d[0]=0;for(let S=f;S<i;S++){let N;S=k(_,S,d,0);const U=d[0];U<O&&(g=!1),O=U,B(_,S,i)?(S=k(_,S,d,1),S=k(_,S,d,2),S=k(_,S,d,3),B(_,S,i)?(S=k(_,S,d,4),N=[U,d[1],d[2],d[3],d[4]]):N=[U,d[1],d[2],d[3]]):N=[U],M.push(N)}g||b(M),A.push(M),f=i+1}while(f<=_.length);return A}function v(_,d){const A=_.indexOf(";",d);return A===-1?_.length:A}function k(_,d,A,f){let i=0,M=0,g=0;do{const S=_.charCodeAt(d++);g=a[S],i|=(g&31)<<M,M+=5}while(g&32);const O=i&1;return i>>>=1,O&&(i=-2147483648|-i),A[f]+=i,d}function B(_,d,A){return d>=A?!1:_.charCodeAt(d)!==o}function b(_){_.sort(L)}function L(_,d){return _[0]-d[0]}function z(_){const d=new Int32Array(5),A=1024*16,f=A-36,i=new Uint8Array(A),M=i.subarray(0,f);let g=0,O="";for(let S=0;S<_.length;S++){const N=_[S];if(S>0&&(g===A&&(O+=r.decode(i),g=0),i[g++]=c),N.length!==0){d[0]=0;for(let U=0;U<N.length;U++){const P=N[U];g>f&&(O+=r.decode(M),i.copyWithin(0,f,g),g-=f),U>0&&(i[g++]=o),g=w(i,g,d,P,0),P.length!==1&&(g=w(i,g,d,P,1),g=w(i,g,d,P,2),g=w(i,g,d,P,3),P.length!==4&&(g=w(i,g,d,P,4)))}}}return O+r.decode(i.subarray(0,g))}function w(_,d,A,f,i){const M=f[i];let g=M-A[i];A[i]=M,g=g<0?-g<<1|1:g<<1;do{let O=g&31;g>>>=5,g>0&&(O|=32),_[d++]=s[O]}while(g>0);return d}n.decode=u,n.encode=z,Object.defineProperty(n,"__esModule",{value:!0})})})(fn,Ee);function ut(t){let e,n;return{c(){e=T("div"),n=ee("URL copied to clipboard!"),this.h()},l(o){e=I(o,"DIV",{class:!0});var c=E(e);n=te(c,"URL copied to clipboard!"),c.forEach(m),this.h()},h(){h(e,"class","url-share-popup svelte-ypzwgg")},m(o,c){x(o,e,c),p(e,n)},d(o){o&&m(e)}}}function hn(t){let e,n,o,c,l,s,a,r,u,v,k,B,b,L,z,w,_,d,A,f,i,M,g,O,S,N,U,P,Ae,ue,Ie,Y,_e,Le,he,y,C,Z,H,j,re,V,de,ke,ze,me,be,Ge,ve,ye,Be,We,Ke;a=new Ft({props:{"aria-hidden":"true"}}),L=new tn({props:{"aria-hidden":"true"}}),i=new Qt({props:{"aria-hidden":"true"}});let q=t[4]&&ut();return ue=new on({props:{"aria-hidden":"true"}}),C=new ct({props:{"aria-hidden":"true"}}),j=new it({props:{"aria-hidden":"true"}}),be=new ct({props:{"aria-hidden":"true"}}),ye=new it({props:{"aria-hidden":"true"}}),{c(){e=T("div"),n=T("div"),o=T("span"),c=ee("Github:"),l=$(),s=T("a"),ne(a.$$.fragment),r=$(),u=T("div"),v=T("span"),k=ee("Try example:"),B=$(),b=T("button"),ne(L.$$.fragment),z=$(),w=T("div"),_=T("span"),d=ee("Share URL:"),A=$(),f=T("button"),ne(i.$$.fragment),M=$(),g=T("div"),q&&q.c(),O=$(),S=T("div"),N=T("label"),U=ee(`Word Wrap:
			`),P=T("input"),Ae=$(),ne(ue.$$.fragment),Ie=$(),Y=T("div"),_e=T("span"),Le=ee("Grid size:"),he=$(),y=T("button"),ne(C.$$.fragment),Z=$(),H=T("button"),ne(j.$$.fragment),re=$(),V=T("div"),de=T("span"),ke=ee("Line Offset:"),ze=$(),me=T("button"),ne(be.$$.fragment),Ge=$(),ve=T("button"),ne(ye.$$.fragment),this.h()},l(D){e=I(D,"DIV",{role:!0,"aria-label":!0,class:!0});var W=E(e);n=I(W,"DIV",{class:!0});var De=E(n);o=I(De,"SPAN",{});var He=E(o);c=te(He,"Github:"),He.forEach(m),l=R(De),s=I(De,"A",{href:!0,class:!0});var je=E(s);se(a.$$.fragment,je),je.forEach(m),De.forEach(m),r=R(W),u=I(W,"DIV",{class:!0});var Pe=E(u);v=I(Pe,"SPAN",{});var qe=E(v);k=te(qe,"Try example:"),qe.forEach(m),B=R(Pe),b=I(Pe,"BUTTON",{title:!0,class:!0});var Je=E(b);se(L.$$.fragment,Je),Je.forEach(m),Pe.forEach(m),z=R(W),w=I(W,"DIV",{class:!0});var Ce=E(w);_=I(Ce,"SPAN",{});var Fe=E(_);d=te(Fe,"Share URL:"),Fe.forEach(m),A=R(Ce),f=I(Ce,"BUTTON",{title:!0,class:!0});var Ye=E(f);se(i.$$.fragment,Ye),Ye.forEach(m),M=R(Ce),g=I(Ce,"DIV",{"aria-live":!0});var Ze=E(g);q&&q.l(Ze),Ze.forEach(m),Ce.forEach(m),O=R(W),S=I(W,"DIV",{class:!0});var Qe=E(S);N=I(Qe,"LABEL",{for:!0,class:!0});var Ne=E(N);U=te(Ne,`Word Wrap:
			`),P=I(Ne,"INPUT",{id:!0,type:!0,class:!0}),Ae=R(Ne),se(ue.$$.fragment,Ne),Ne.forEach(m),Qe.forEach(m),Ie=R(W),Y=I(W,"DIV",{class:!0,role:!0,"aria-labelledby":!0});var Me=E(Y);_e=I(Me,"SPAN",{id:!0});var Xe=E(_e);Le=te(Xe,"Grid size:"),Xe.forEach(m),he=R(Me),y=I(Me,"BUTTON",{title:!0,class:!0});var et=E(y);se(C.$$.fragment,et),et.forEach(m),Z=R(Me),H=I(Me,"BUTTON",{title:!0,class:!0});var tt=E(H);se(j.$$.fragment,tt),tt.forEach(m),Me.forEach(m),re=R(W),V=I(W,"DIV",{class:!0,role:!0,"aria-labelledby":!0});var Se=E(V);de=I(Se,"SPAN",{id:!0});var nt=E(de);ke=te(nt,"Line Offset:"),nt.forEach(m),ze=R(Se),me=I(Se,"BUTTON",{title:!0,class:!0});var st=E(me);se(be.$$.fragment,st),st.forEach(m),Ge=R(Se),ve=I(Se,"BUTTON",{title:!0,class:!0});var ot=E(ve);se(ye.$$.fragment,ot),ot.forEach(m),Se.forEach(m),W.forEach(m),this.h()},h(){h(s,"href","https://github.com/ariperkkio/source-map-debugger/"),h(s,"class","svelte-ypzwgg"),h(n,"class","flex-center svelte-ypzwgg"),h(b,"title","Load example"),h(b,"class","svelte-ypzwgg"),h(u,"class","flex-center svelte-ypzwgg"),h(f,"title","Generate URL of current state"),h(f,"class","svelte-ypzwgg"),h(g,"aria-live","polite"),h(w,"class","flex-center url-share svelte-ypzwgg"),h(P,"id","word-wrap"),h(P,"type","checkbox"),h(P,"class","svelte-ypzwgg"),h(N,"for","word-wrap"),h(N,"class","svelte-ypzwgg"),h(S,"class","svelte-ypzwgg"),h(_e,"id","grid-size-title"),h(y,"title","Increase first row size"),h(y,"class","svelte-ypzwgg"),h(H,"title","Decrease first row size"),h(H,"class","svelte-ypzwgg"),h(Y,"class","flex-center grid-size svelte-ypzwgg"),h(Y,"role","group"),h(Y,"aria-labelledby","grid-size-title"),h(de,"id","line-offset-title"),h(me,"title","Increase line offset"),h(me,"class","svelte-ypzwgg"),h(ve,"title","Decrease line offset"),h(ve,"class","svelte-ypzwgg"),h(V,"class","flex-center svelte-ypzwgg"),h(V,"role","group"),h(V,"aria-labelledby","line-offset-title"),h(e,"role","region"),h(e,"aria-label","Tools"),h(e,"class","tools svelte-ypzwgg"),we(e,"dim",t[4])},m(D,W){x(D,e,W),p(e,n),p(n,o),p(o,c),p(n,l),p(n,s),oe(a,s,null),p(e,r),p(e,u),p(u,v),p(v,k),p(u,B),p(u,b),oe(L,b,null),p(e,z),p(e,w),p(w,_),p(_,d),p(w,A),p(w,f),oe(i,f,null),p(w,M),p(w,g),q&&q.m(g,null),p(e,O),p(e,S),p(S,N),p(N,U),p(N,P),P.checked=t[2],p(N,Ae),oe(ue,N,null),p(e,Ie),p(e,Y),p(Y,_e),p(_e,Le),p(Y,he),p(Y,y),oe(C,y,null),p(Y,Z),p(Y,H),oe(j,H,null),p(e,re),p(e,V),p(V,de),p(de,ke),p(V,ze),p(V,me),oe(be,me,null),p(V,Ge),p(V,ve),oe(ye,ve,null),Be=!0,We||(Ke=[ae(b,"click",t[7]),ae(f,"click",t[6]),ae(P,"change",t[8]),ae(y,"click",t[9]),ae(H,"click",t[10]),ae(me,"click",t[11]),ae(ve,"click",t[12])],We=!0)},p(D,[W]){D[4]?q||(q=ut(),q.c(),q.m(g,null)):q&&(q.d(1),q=null),W&4&&(P.checked=D[2]),(!Be||W&16)&&we(e,"dim",D[4])},i(D){Be||(Q(a.$$.fragment,D),Q(L.$$.fragment,D),Q(i.$$.fragment,D),Q(ue.$$.fragment,D),Q(C.$$.fragment,D),Q(j.$$.fragment,D),Q(be.$$.fragment,D),Q(ye.$$.fragment,D),Be=!0)},o(D){X(a.$$.fragment,D),X(L.$$.fragment,D),X(i.$$.fragment,D),X(ue.$$.fragment,D),X(C.$$.fragment,D),X(j.$$.fragment,D),X(be.$$.fragment,D),X(ye.$$.fragment,D),Be=!1},d(D){D&&m(e),le(a),le(L),le(i),q&&q.d(),le(ue),le(C),le(j),le(be),le(ye),We=!1,yt(Ke)}}}function dn(t){return e=>{if(e.length<4)return e;const n=e.length-2,o=[...e];return o.splice(n,1,o[n]+t),o}}function gn(t,e,n){let{map:o}=e,{generated:c}=e,{wordWrap:l}=e,{gridSize:s}=e,a="";function r(w){const _=Ee.decode(o.mappings).map(d=>d.map(dn(w)));w===1?_.unshift([]):_.shift(),n(0,o.mappings=Ee.encode(_),o)}function u(){const w=$t({generated:c,map:o});window.history.pushState({},"",w),n(4,a=w.toString()),navigator.clipboard.writeText(a).then(()=>{setTimeout(()=>{n(4,a="")},3e3)})}const v=()=>(n(0,o=Ht),n(1,c=jt));function k(){l=this.checked,n(2,l)}const B=()=>n(3,s=s+5),b=()=>n(3,s=Math.max(10,s-5)),L=()=>r(1),z=()=>r(-1);return t.$$set=w=>{"map"in w&&n(0,o=w.map),"generated"in w&&n(1,c=w.generated),"wordWrap"in w&&n(2,l=w.wordWrap),"gridSize"in w&&n(3,s=w.gridSize)},[o,c,l,s,a,r,u,v,k,B,b,L,z]}class pn extends ge{constructor(e){super(),pe(this,e,gn,hn,fe,{map:0,generated:1,wordWrap:2,gridSize:3})}}function ft(t,e,n){const o=t.slice();return o[20]=e[n],o[22]=n,o}function ht(t,e,n){const o=t.slice();return o[23]=e[n],o[25]=n,o}function dt(t){let e,n=t[23]+"",o,c,l;function s(...a){return t[15](t[22],t[25],...a)}return{c(){e=T("span"),o=ee(n),this.h()},l(a){e=I(a,"SPAN",{"data-line":!0,"data-column":!0,title:!0,class:!0});var r=E(e);o=te(r,n),r.forEach(m),this.h()},h(){var a,r;h(e,"data-line",1+t[22]),h(e,"data-column",t[25]),h(e,"title",`${1+t[22]}:${t[25]}`),h(e,"class","column svelte-9tv8ao"),we(e,"highlight",(a=t[5].get(1+t[22]))==null?void 0:a.get(t[25])),we(e,"selected",(r=t[2].get(1+t[22]))==null?void 0:r.get(t[25]))},m(a,r){x(a,e,r),p(e,o),c||(l=ae(e,"click",s),c=!0)},p(a,r){var u,v;t=a,r&64&&n!==(n=t[23]+"")&&Bt(o,n),r&32&&we(e,"highlight",(u=t[5].get(1+t[22]))==null?void 0:u.get(t[25])),r&4&&we(e,"selected",(v=t[2].get(1+t[22]))==null?void 0:v.get(t[25]))},d(a){a&&m(e),c=!1,l()}}}function gt(t){let e,n,o,c=t[20].split(""),l=[];for(let s=0;s<c.length;s+=1)l[s]=dt(ht(t,c,s));return{c(){e=T("div");for(let s=0;s<l.length;s+=1)l[s].c();n=$(),this.h()},l(s){e=I(s,"DIV",{class:!0,"data-line":!0,style:!0});var a=E(e);for(let r=0;r<l.length;r+=1)l[r].l(a);n=R(a),a.forEach(m),this.h()},h(){h(e,"class","row svelte-9tv8ao"),h(e,"data-line",1+t[22]),h(e,"style",o=xe`${t[6]}`),we(e,"selected",t[2].get(1+t[22]))},m(s,a){x(s,e,a);for(let r=0;r<l.length;r+=1)l[r].m(e,null);p(e,n)},p(s,a){if(a&356){c=s[20].split("");let r;for(r=0;r<c.length;r+=1){const u=ht(s,c,r);l[r]?l[r].p(u,a):(l[r]=dt(u),l[r].c(),l[r].m(e,n))}for(;r<l.length;r+=1)l[r].d(1);l.length=c.length}a&64&&o!==(o=xe`${s[6]}`)&&h(e,"style",o),a&4&&we(e,"selected",s[2].get(1+s[22]))},d(s){s&&m(e),Et(l,s)}}}function pt(t){let e,n,o,c=t[6],l=[];for(let s=0;s<c.length;s+=1)l[s]=gt(ft(t,c,s));return{c(){e=T("code");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=I(s,"CODE",{contenteditable:!0,spellcheck:!0,autocorrect:!0,autocapitalize:!0,translate:!0,role:!0,"aria-multiline":!0,"aria-autocomplete":!0,class:!0});var a=E(e);for(let r=0;r<l.length;r+=1)l[r].l(a);a.forEach(m),this.h()},h(){h(e,"contenteditable",t[0]),h(e,"spellcheck","false"),h(e,"autocorrect","off"),h(e,"autocapitalize","off"),h(e,"translate","no"),h(e,"role","textbox"),h(e,"aria-multiline","true"),h(e,"aria-autocomplete","list"),h(e,"class","svelte-9tv8ao")},m(s,a){x(s,e,a);for(let r=0;r<l.length;r+=1)l[r].m(e,null);t[16](e),n||(o=[ae(e,"input",t[7]),ae(e,"focus",t[17]),ae(e,"blur",t[18])],n=!0)},p(s,a){if(a&356){c=s[6];let r;for(r=0;r<c.length;r+=1){const u=ft(s,c,r);l[r]?l[r].p(u,a):(l[r]=gt(u),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=c.length}a&1&&h(e,"contenteditable",s[0])},d(s){s&&m(e),Et(l,s),t[16](null),n=!1,yt(o)}}}function _n(t){let e,n,o=t[4],c;const l=t[14].default,s=Ct(l,t,t[13],null);let a=pt(t);return{c(){e=T("div"),s&&s.c(),n=$(),a.c(),this.h()},l(r){e=I(r,"DIV",{class:!0});var u=E(e);s&&s.l(u),n=R(u),a.l(u),u.forEach(m),this.h()},h(){h(e,"class","code-area svelte-9tv8ao")},m(r,u){x(r,e,u),s&&s.m(e,null),p(e,n),a.m(e,null),c=!0},p(r,[u]){s&&s.p&&(!c||u&8192)&&Mt(s,l,r,r[13],c?Tt(l,r[13],u,null):St(r[13]),null),u&16&&fe(o,o=r[4])?(a.d(1),a=pt(r),a.c(),a.m(e,null)):a.p(r,u)},i(r){c||(Q(s,r),c=!0)},o(r){X(s,r),c=!1},d(r){r&&m(e),s&&s.d(r),a.d(r)}}}const mn=/\s*(\d+)\s*/g,_t=/(?:\r?\n)|\r/g,vn=/^\s+/gm,wn=/(\[)\s*(\[)/g,An=/(\],)\s*(\[\d)/g,bn=/(\])\s*(\])/g,xe=(t,e)=>`--line-count: ${e.length.toString().length}ch`;function yn(t){const e=typeof t=="object"?JSON.stringify(t,null,2):t;return Array.isArray(t)?e.replace(mn,"$1").replace(vn,"  ").replace(wn,"$1 $2").replace(An,"$1 $2").replace(bn,"$1 $2"):e||""}function En(t){const e=t.querySelectorAll("div[data-line]"),n=xe`${e}`;for(const[o,c]of Array.from(e).entries())c.setAttribute("data-line",(1+o).toString()),c.setAttribute("style",n)}function kn(t,e,n){let o,c,l,s,a,r,{$$slots:u={},$$scope:v}=e,{value:k=`
 `.repeat(10)}=e,{contenteditable:B=!1}=e,{highlightLocations:b=[]}=e,{selectedLocations:L=[]}=e,z;const w=It();Lt(()=>{n(12,o=k)});function _(){const g=z.querySelectorAll("div[data-line]"),O=Array.from(g).map(S=>{var N;return(N=S.textContent)==null?void 0:N.split(_t)}).flat().join(`
`);n(9,k=typeof k=="object"?JSON.parse(O):O),w("change",k),En(z)}function d(g,O){var N;((N=l.get(O.line))==null?void 0:N.get(O.column))&&(g.stopPropagation(),w("position-select",O))}const A=(g,O,S)=>d(S,{line:1+g,column:O});function f(g){Oe[g?"unshift":"push"](()=>{z=g,n(1,z)})}const i=()=>n(3,a=!0),M=()=>n(3,a=!1);return t.$$set=g=>{"value"in g&&n(9,k=g.value),"contenteditable"in g&&n(0,B=g.contenteditable),"highlightLocations"in g&&n(10,b=g.highlightLocations),"selectedLocations"in g&&n(11,L=g.selectedLocations),"$$scope"in g&&n(13,v=g.$$scope)},t.$$.update=()=>{t.$$.dirty&4632&&!a&&o!==k&&(n(4,r=!r),n(12,o=k)),t.$$.dirty&4609&&n(6,c=yn(B?o:k).split(_t)),t.$$.dirty&1024&&n(5,l=lt(b)),t.$$.dirty&2048&&n(2,s=lt(L)),t.$$.dirty&14&&!a&&s.size>0&&setTimeout(()=>{const g=z==null?void 0:z.querySelector("span.selected");g&&z.scrollTo({top:g.offsetTop-30,behavior:"smooth"})},250)},n(12,o=""),n(3,a=!1),n(4,r=!1),[B,z,s,a,r,l,c,_,d,k,b,L,o,v,u,A,f,i,M]}class Ve extends ge{constructor(e){super(),pe(this,e,kn,_n,fe,{value:9,contenteditable:0,highlightLocations:10,selectedLocations:11})}}function zn(t){let e,n;return{c(){e=T("h2"),n=ee("Source Map"),this.h()},l(o){e=I(o,"H2",{class:!0});var c=E(e);n=te(c,"Source Map"),c.forEach(m),this.h()},h(){h(e,"class","svelte-duhlzm")},m(o,c){x(o,e,c),p(e,n)},p:K,d(o){o&&m(e)}}}function Cn(t){let e,n;return{c(){e=T("h2"),n=ee("Mappings"),this.h()},l(o){e=I(o,"H2",{class:!0});var c=E(e);n=te(c,"Mappings"),c.forEach(m),this.h()},h(){h(e,"class","svelte-duhlzm")},m(o,c){x(o,e,c),p(e,n)},p:K,d(o){o&&m(e)}}}function Mn(t){let e,n;return{c(){e=T("h2"),n=ee("Sources"),this.h()},l(o){e=I(o,"H2",{class:!0});var c=E(e);n=te(c,"Sources"),c.forEach(m),this.h()},h(){h(e,"class","svelte-duhlzm")},m(o,c){x(o,e,c),p(e,n)},p:K,d(o){o&&m(e)}}}function Sn(t){let e,n;return{c(){e=T("h2"),n=ee("Generated"),this.h()},l(o){e=I(o,"H2",{class:!0});var c=E(e);n=te(c,"Generated"),c.forEach(m),this.h()},h(){h(e,"class","svelte-duhlzm")},m(o,c){x(o,e,c),p(e,n)},p:K,d(o){o&&m(e)}}}function Tn(t){let e,n,o,c,l,s,a,r,u,v,k,B,b,L,z,w,_,d,A,f,i,M,g,O,S,N,U,P,Ae,ue;function Ie(y){t[10](y)}function Y(y){t[11](y)}function _e(y){t[12](y)}function Le(y){t[13](y)}let he={};return t[0]!==void 0&&(he.map=t[0]),t[7]!==void 0&&(he.wordWrap=t[7]),t[4]!==void 0&&(he.generated=t[4]),t[5]!==void 0&&(he.gridSize=t[5]),v=new pn({props:he}),Oe.push(()=>$e(v,"map",Ie)),Oe.push(()=>$e(v,"wordWrap",Y)),Oe.push(()=>$e(v,"generated",_e)),Oe.push(()=>$e(v,"gridSize",Le)),_=new Ve({props:{contenteditable:!0,value:t[0],$$slots:{default:[zn]},$$scope:{ctx:t}}}),_.$on("change",t[14]),f=new Ve({props:{contenteditable:!0,value:t[3],selectedLocations:t[6].map(mt),$$slots:{default:[Cn]},$$scope:{ctx:t}}}),f.$on("change",t[15]),g=new Ve({props:{value:t[8],highlightLocations:t[1].map(vt),selectedLocations:t[6].map(wt),$$slots:{default:[Mn]},$$scope:{ctx:t}}}),g.$on("position-select",t[16]),N=new Ve({props:{contenteditable:!0,value:t[4],highlightLocations:t[1].map(At),selectedLocations:t[6].map(bt),$$slots:{default:[Sn]},$$scope:{ctx:t}}}),N.$on("change",t[17]),N.$on("position-select",t[18]),{c(){e=T("div"),n=T("header"),o=T("h1"),c=ee("Source Map Debugger"),l=$(),s=T("p"),a=ee(`Debug and modify source maps. Load the example from the top right tools or paste your own
			source map and generated code into editors.`),r=$(),u=T("div"),ne(v.$$.fragment),z=$(),w=T("div"),ne(_.$$.fragment),d=$(),A=T("div"),ne(f.$$.fragment),i=$(),M=T("div"),ne(g.$$.fragment),O=$(),S=T("div"),ne(N.$$.fragment),this.h()},l(y){e=I(y,"DIV",{class:!0,style:!0});var C=E(e);n=I(C,"HEADER",{class:!0});var Z=E(n);o=I(Z,"H1",{class:!0});var H=E(o);c=te(H,"Source Map Debugger"),H.forEach(m),l=R(Z),s=I(Z,"P",{class:!0});var j=E(s);a=te(j,`Debug and modify source maps. Load the example from the top right tools or paste your own
			source map and generated code into editors.`),j.forEach(m),Z.forEach(m),r=R(C),u=I(C,"DIV",{class:!0});var re=E(u);se(v.$$.fragment,re),re.forEach(m),z=R(C),w=I(C,"DIV",{class:!0});var V=E(w);se(_.$$.fragment,V),V.forEach(m),d=R(C),A=I(C,"DIV",{class:!0});var de=E(A);se(f.$$.fragment,de),de.forEach(m),i=R(C),M=I(C,"DIV",{class:!0});var ke=E(M);se(g.$$.fragment,ke),ke.forEach(m),O=R(C),S=I(C,"DIV",{class:!0});var ze=E(S);se(N.$$.fragment,ze),ze.forEach(m),C.forEach(m),this.h()},h(){h(o,"class","svelte-duhlzm"),h(s,"class","svelte-duhlzm"),h(n,"class","svelte-duhlzm"),h(u,"class","tools svelte-duhlzm"),h(w,"class","map svelte-duhlzm"),h(A,"class","mappings svelte-duhlzm"),h(M,"class","sources svelte-duhlzm"),h(S,"class","generated svelte-duhlzm"),h(e,"class","grid svelte-duhlzm"),h(e,"style",U=`--gridSize: ${t[5]}rem; white-space: pre${t[7]?"-wrap":""};`)},m(y,C){x(y,e,C),p(e,n),p(n,o),p(o,c),p(n,l),p(n,s),p(s,a),p(e,r),p(e,u),oe(v,u,null),p(e,z),p(e,w),oe(_,w,null),p(e,d),p(e,A),oe(f,A,null),p(e,i),p(e,M),oe(g,M,null),p(e,O),p(e,S),oe(N,S,null),P=!0,Ae||(ue=ae(window,"click",t[9]),Ae=!0)},p(y,[C]){const Z={};!k&&C&1&&(k=!0,Z.map=y[0],Re(()=>k=!1)),!B&&C&128&&(B=!0,Z.wordWrap=y[7],Re(()=>B=!1)),!b&&C&16&&(b=!0,Z.generated=y[4],Re(()=>b=!1)),!L&&C&32&&(L=!0,Z.gridSize=y[5],Re(()=>L=!1)),v.$set(Z);const H={};C&1&&(H.value=y[0]),C&524288&&(H.$$scope={dirty:C,ctx:y}),_.$set(H);const j={};C&8&&(j.value=y[3]),C&64&&(j.selectedLocations=y[6].map(mt)),C&524288&&(j.$$scope={dirty:C,ctx:y}),f.$set(j);const re={};C&256&&(re.value=y[8]),C&2&&(re.highlightLocations=y[1].map(vt)),C&64&&(re.selectedLocations=y[6].map(wt)),C&524288&&(re.$$scope={dirty:C,ctx:y}),g.$set(re);const V={};C&16&&(V.value=y[4]),C&2&&(V.highlightLocations=y[1].map(At)),C&64&&(V.selectedLocations=y[6].map(bt)),C&524288&&(V.$$scope={dirty:C,ctx:y}),N.$set(V),(!P||C&160&&U!==(U=`--gridSize: ${y[5]}rem; white-space: pre${y[7]?"-wrap":""};`))&&h(e,"style",U)},i(y){P||(Q(v.$$.fragment,y),Q(_.$$.fragment,y),Q(f.$$.fragment,y),Q(g.$$.fragment,y),Q(N.$$.fragment,y),P=!0)},o(y){X(v.$$.fragment,y),X(_.$$.fragment,y),X(f.$$.fragment,y),X(g.$$.fragment,y),X(N.$$.fragment,y),P=!1},d(y){y&&m(e),le(v),le(_),le(f),le(g),le(N),Ae=!1,ue()}}}const mt=t=>({start:{line:t.generated.start.line,column:1},end:{line:t.generated.start.line,column:99}}),vt=t=>t.source,wt=t=>t.source,At=t=>t.generated,bt=t=>t.generated;function In(t,e,n){let o,c,l,s,a,r,u,{map:v,generated:k}=Pt();const B=()=>n(2,a=void 0);function b(M){v=M,n(0,v)}function L(M){s=M,n(7,s)}function z(M){k=M,n(4,k)}function w(M){u=M,n(5,u)}const _=M=>n(0,v=M.detail),d=M=>n(0,v.mappings=Ee.encode(M.detail),v),A=M=>n(2,a={type:"source",...M.detail}),f=M=>n(4,k=M.detail),i=M=>n(2,a={type:"generated",...M.detail});return t.$$.update=()=>{t.$$.dirty&1&&n(3,o=Ee.decode(v.mappings)),t.$$.dirty&8&&n(1,c=Vt(o)),t.$$.dirty&1&&n(8,l=v.sourcesContent[0]||"No sources"),t.$$.dirty&6&&n(6,r=Gt(a,c))},n(7,s=!1),n(2,a=void 0),n(5,u=25),[v,c,a,o,k,u,r,s,l,B,b,L,z,w,_,d,A,f,i]}class Nn extends ge{constructor(e){super(),pe(this,e,In,Tn,fe,{})}}export{Nn as default};
