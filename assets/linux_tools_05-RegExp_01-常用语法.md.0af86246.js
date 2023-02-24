import{_}from"./chunks/ArticleMetadata.2facd5d6.js";import{_ as h,c as g,b as r,w as s,d as l,e as d,a as p,r as m,o as a,f as u,g as c}from"./app.2918728e.js";const D=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{"title":"正则表达式","author":"yinuuu","date":"2023/01/01","categories":["RegExp"],"tags":["RegExp"]},"headers":[],"relativePath":"linux/tools/05-RegExp/01-常用语法.md","lastUpdated":1677165673000}'),x={name:"linux/tools/05-RegExp/01-常用语法.md"},f=l("h1",{id:"regexp-类型",tabindex:"-1"},[d("RegExp 类型 "),l("a",{class:"header-anchor",href:"#regexp-类型","aria-hidden":"true"},"#")],-1),$=l("p",null,"主要是以下几个方面",-1),b=l("ul",null,[l("li",null,"创建"),l("li",null,"元字符"),l("li",null,"修饰符"),l("li",null,"属性"),l("li",null,"方法")],-1),A=l("h1",{id:"创建",tabindex:"-1"},[d("创建 "),l("a",{class:"header-anchor",href:"#创建","aria-hidden":"true"},"#")],-1),T=l("p",null,"有两种方法，字面量和构造函数模式",-1),I=l("ul",null,[l("li",null,[l("p",null,"字面量"),l("pre",null,[l("code",null,`  var reg=/\\d+/g;
  console.log(reg.test("789456"));//true
`)])]),l("li",null,[l("p",null,"构造函数"),l("pre",null,[l("code",null,`  var reg2=new RegExp("\\\\d+","g");
  console.log(reg2.test("1234444456"));//true
  console.log(reg2.test("asdsa"));//false
`)])])],-1),C=l("h1",{id:"元字符",tabindex:"-1"},[d("元字符 "),l("a",{class:"header-anchor",href:"#元字符","aria-hidden":"true"},"#")],-1),y=p('<ul><li>单个字符数字 <ul><li>. 匹配除换行符以外的任意字符</li><li>[a-zA-Z0-p] 与 [^a-zA-Z0-p] 匹配方括号中的任意字符，前面代^是匹配不在方括号中的任意字符；</li><li>\\d 与 \\D 匹配数字和匹配非数字；</li><li>\\w 与 \\W 匹配字符和匹配非字母</li></ul></li><li>空白字符 <ul><li>\\O 匹配null字符</li><li>\\b 匹配空格字符</li><li>\\f 匹配换页符</li><li>\\n 匹配换行符</li><li>\\r 匹配回车符</li><li>\\s 和 \\S 匹配空白字符，空格、制表符或换行符。大写的S是匹配非空字符</li><li>\\t 匹配制表符</li></ul></li><li>定位符 <ul><li>^ 行首匹配</li><li>$ 行尾匹配</li><li>\\A 只匹配字符串的开始处</li><li>\\b \\B 匹配单词便捷，词在[]内无效，匹配非单词边界</li><li>G 匹配当前搜索的开始位置</li><li>\\Z \\z 匹配字符串结束处或行尾，只匹配字符串结束处</li></ul></li><li>限定符 <ul><li>x? 匹配0个或一个x</li><li>x* 匹配0个或者任意多个x</li><li>x+ 匹配一个或者多个</li><li>x{m,n} 匹配m-n个x；</li></ul></li><li>分组 <ul><li>(?:x) 匹配x但不记录匹配结果（匹配不捕获）</li><li>x(?=y) 当x后面接y时匹配x</li><li>x(?!y) 当x后不是y时匹配x</li></ul></li><li>引用 <ul><li>\\1...\\9 $1...$9 返回就割在模式匹配期间找到的，最近保存的部分</li></ul></li><li>或模式 <ul><li>x|y|z 匹配x或者y或者z</li></ul></li></ul><h1 id="修饰符" tabindex="-1">修饰符 <a class="header-anchor" href="#修饰符" aria-hidden="true">#</a></h1>',2),q=l("p",null,"可以记img，这样方便记住；",-1),S=l("ul",null,[l("li",null,"i 忽略大小写模式"),l("li",null,"m 多行匹配"),l("li",null,"g 全局模式")],-1),v=l("h1",{id:"属性",tabindex:"-1"},[d("属性 "),l("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#")],-1),E=p(`<ul><li>实例属性 <ul><li>global 布尔值，检测是走设置g标记</li><li>ignoreCase 布尔值，检测是否设置i标记</li><li>nultiline 布尔值，检测是否设置了m标记</li><li>lastIndex 整数，表示开始搜索下一个匹配项的字符位置，从 0 算起。</li><li>source 返回正则表达式的字符串表示,按照字面量形式而非传入构造函数中的字符串模式返回。</li></ul></li></ul><p>通过这些属性可以获知一个正则表达式的各方面信息，但却没有多大用处，因为这些信息全都包含在模式声明中</p><pre><code>var pattern1 = /\\[bc\\]at/i;
console.log(pattern1.global); //false
console.log(pattern1.ignoreCase); //true
console.log(pattern1.multiline); //false
console.log(pattern1.lastIndex); //0
console.log(pattern1.source); //&quot;\\[bc\\]at&quot;
var pattern2 = new RegExp(&quot;\\\\[bc\\\\]at&quot;, &quot;i&quot;);
console.log(pattern2.global); //false
console.log(pattern2.ignoreCase); //true
console.log(pattern2.multiline); //false
console.log(pattern2.lastIndex); //0
console.log(pattern2.source); //&quot;\\[bc\\]at&quot;
</code></pre><p>尽管第一个模式使用的是字面量，第二个模式使用了 RegExp 构造函数，但它们的source 属性是相同的。可见， source 属性保存的是规范形式的字符串，即字面量形式所用的字符串。</p><ul><li>构造函数属性 <ul><li>$_ input 返回最近一次匹配的字符串</li><li>$&amp; lastMatch 返回最近一次的匹配项</li><li>$+ lastParen 返回最近一次匹配的捕获组</li><li>$\` leftContext 返回被查找的字符串中从字符串开始位置到最后匹配之前的位置之间的字符</li><li>$&#39; rightContext 返回被搜索的字符串中从最后一个匹配位置开始到字符串结尾之间的字符</li><li>$* multiline 检测表达式是否采用多行匹配m</li></ul></li></ul><h1 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-hidden="true">#</a></h1>`,6),k=p("<ul><li><p>实例方法</p><ul><li>test 在字符串中检测模式匹配，返回true或false</li><li>exec 该方法是专门为捕获组而设计的 <ul><li>功能：正则捕获的数据，一个数组；</li><li>参数：要应用模式匹配的字符串</li><li>特性： <ul><li>使用全局标记g；持续查找所有匹配项并返回</li><li>不使用全局标记g；始终返回第一个匹配项信息</li></ul></li><li>执行的过程 <ul><li>检测字符串参数，获取正则表达式匹配文本</li><li>找到匹配文本则返回一个数组 <ul><li>第0个元素：与整个模式匹配的字符串</li><li>其他元素：与捕获组匹配的字符串</li></ul></li><li>否则返回null</li></ul></li><li>派生属性 <ul><li>index 匹配项在字符串中的位置</li><li>input 应用正则表达式的字符串</li><li>length 返回数组元素的个数</li></ul></li></ul></li></ul><p>var text = &quot;cat, bat, sat, fat&quot;; var pattern1 = /.at/; var matches = pattern1.exec(text); console.log(matches.index); //0 console.log(matches[0]); //cat console.log(pattern1.lastIndex); //0 matches = pattern1.exec(text); console.log(matches.index); //0 console.log(matches[0]); //cat console.log(pattern1.lastIndex); //0</p><p>var pattern2 = /.at/g; var matches = pattern2.exec(text); console.log(matches.index); //0 console.log(matches[0]); //cat console.log(pattern2.lastIndex); //3</p><p>matches = pattern2.exec(text); console.log(matches.index); //5 console.log(matches[0]); //bat console.log(pattern2.lastIndex); //8</p></li></ul><p>第一个模式 pattern1 不是全局模式，因此每次调用 exec() 返回的都是第一个匹配项（ &quot;cat&quot; ）。而第二个模式 pattern2 是全局模式，因此每次调用 exec() 都会返回字符串中的下一个匹配项，直至搜索到字符串末尾为止。此外，还应该注意模式的 lastIndex 属性的变化情况。在全局匹配模式下， lastIndex 的值在每次调用 exec() 后都会增加，而在非全局模式下则始终保持不变。\\</p><blockquote><p>IE 的 JavaScript 实现在 lastIndex 属性上存在偏差，即使在非全局模式下，lastIndex 属性每次也会变化。</p></blockquote><ul><li>字符串方法 <ul><li>match 找到一个或者多个正则表达式的匹配</li><li>replace 替换与正则表达式匹配的子串</li><li>search 检索与正则表达式匹配的值</li><li>split 把字符串分割为字符串数组</li></ul></li></ul>",4);function w(e,R,V,N,M,P){const n=_,o=m("ClientOnly");return a(),g("div",null,[f,r(o,null,{default:s(()=>{var t,i;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((i=e.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(a(),u(n,{key:0,article:e.$frontmatter},null,8,["article"])):c("",!0)]}),_:1}),$,b,A,r(o,null,{default:s(()=>{var t,i;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((i=e.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(a(),u(n,{key:0,article:e.$frontmatter},null,8,["article"])):c("",!0)]}),_:1}),T,I,C,r(o,null,{default:s(()=>{var t,i;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((i=e.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(a(),u(n,{key:0,article:e.$frontmatter},null,8,["article"])):c("",!0)]}),_:1}),y,r(o,null,{default:s(()=>{var t,i;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((i=e.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(a(),u(n,{key:0,article:e.$frontmatter},null,8,["article"])):c("",!0)]}),_:1}),q,S,v,r(o,null,{default:s(()=>{var t,i;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((i=e.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(a(),u(n,{key:0,article:e.$frontmatter},null,8,["article"])):c("",!0)]}),_:1}),E,r(o,null,{default:s(()=>{var t,i;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((i=e.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(a(),u(n,{key:0,article:e.$frontmatter},null,8,["article"])):c("",!0)]}),_:1}),k])}const O=h(x,[["render",w]]);export{D as __pageData,O as default};
