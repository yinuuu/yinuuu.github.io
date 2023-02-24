import{_ as c}from"./chunks/ArticleMetadata.2facd5d6.js";import{_ as t,c as r,b as i,w as y,d as l,e as b,a as C,r as A,o as p,f as D,g as d}from"./app.2918728e.js";const w=JSON.parse('{"title":"CSS 知识点总结","description":"","frontmatter":{"title":"CSS 知识点总结","author":"yinuuu","date":"2023/02/24  09:24","categories":["web"],"tags":["CSS","web"]},"headers":[{"level":3,"title":"目录","slug":"目录","link":"#目录","children":[]}],"relativePath":"web/interview/01-interview/03-CSS.md","lastUpdated":1677203087000}'),B={name:"web/interview/01-interview/03-CSS.md"},h=l("h1",{id:"css-知识点总结",tabindex:"-1"},[b("CSS 知识点总结 "),l("a",{class:"header-anchor",href:"#css-知识点总结","aria-hidden":"true"},"#")],-1),F=C(`<h3 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h3><ul><li><a href="#1%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B%E6%A0%87%E5%87%86%E7%9A%84-css-%E7%9A%84%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E4%BD%8E%E7%89%88%E6%9C%AC-ie-%E7%9A%84%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C%E7%9A%84">1.介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？</a></li><li><a href="#2css-%E9%80%89%E6%8B%A9%E7%AC%A6%E6%9C%89%E5%93%AA%E4%BA%9B">2.CSS 选择符有哪些？</a></li><li><a href="#3before-%E5%92%8Cafter-%E4%B8%AD%E5%8F%8C%E5%86%92%E5%8F%B7%E5%92%8C%E5%8D%95%E5%86%92%E5%8F%B7%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B%E8%BF%99-2-%E4%B8%AA%E4%BC%AA%E5%85%83%E7%B4%A0%E7%9A%84%E4%BD%9C%E7%94%A8">3.::before 和:after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用。</a></li><li><a href="#4%E4%BC%AA%E7%B1%BB%E4%B8%8E%E4%BC%AA%E5%85%83%E7%B4%A0%E7%9A%84%E5%8C%BA%E5%88%AB">4.伪类与伪元素的区别</a></li><li><a href="#5css-%E4%B8%AD%E5%93%AA%E4%BA%9B%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E7%BB%A7%E6%89%BF">5.CSS 中哪些属性可以继承？</a></li><li><a href="#6css-%E4%BC%98%E5%85%88%E7%BA%A7%E7%AE%97%E6%B3%95%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97">6.CSS 优先级算法如何计算？</a></li><li><a href="#7%E5%85%B3%E4%BA%8E%E4%BC%AA%E7%B1%BB-lvha-%E7%9A%84%E8%A7%A3%E9%87%8A">7.关于伪类 LVHA 的解释?</a></li><li><a href="#8css3-%E6%96%B0%E5%A2%9E%E4%BC%AA%E7%B1%BB%E6%9C%89%E9%82%A3%E4%BA%9B">8.CSS3 新增伪类有那些？</a></li><li><a href="#9%E5%A6%82%E4%BD%95%E5%B1%85%E4%B8%AD-div">9.如何居中 div？</a></li><li><a href="#10display-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%80%BC%E8%AF%B4%E6%98%8E%E4%BB%96%E4%BB%AC%E7%9A%84%E4%BD%9C%E7%94%A8">10.display 有哪些值？说明他们的作用。</a></li><li><a href="#11position-%E7%9A%84%E5%80%BC-relative-%E5%92%8C-absolute-%E5%AE%9A%E4%BD%8D%E5%8E%9F%E7%82%B9%E6%98%AF">11.position 的值 relative 和 absolute 定位原点是？</a></li><li><a href="#12css3-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7%E6%A0%B9%E6%8D%AE%E9%A1%B9%E7%9B%AE%E5%9B%9E%E7%AD%94">12.CSS3 有哪些新特性？（根据项目回答）</a></li><li><a href="#13%E8%AF%B7%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B-css3-%E7%9A%84-flex-box%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80%E6%A8%A1%E5%9E%8B%E4%BB%A5%E5%8F%8A%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF">13.请解释一下 CSS3 的 Flex box（弹性盒布局模型），以及适用场景？</a></li><li><a href="#14%E7%94%A8%E7%BA%AF-css-%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E4%B8%89%E8%A7%92%E5%BD%A2%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88">14.用纯 CSS 创建一个三角形的原理是什么？</a></li><li><a href="#15%E4%B8%80%E4%B8%AA%E6%BB%A1%E5%B1%8F%E5%93%81%E5%AD%97%E5%B8%83%E5%B1%80%E5%A6%82%E4%BD%95%E8%AE%BE%E8%AE%A1">15.一个满屏品字布局如何设计?</a></li><li><a href="#16css-%E5%A4%9A%E5%88%97%E7%AD%89%E9%AB%98%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0">16.CSS 多列等高如何实现？</a></li><li><a href="#17%E7%BB%8F%E5%B8%B8%E9%81%87%E5%88%B0%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%85%BC%E5%AE%B9%E6%80%A7%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8E%9F%E5%9B%A0%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95%E6%98%AF%E4%BB%80%E4%B9%88%E5%B8%B8%E7%94%A8-hack-%E7%9A%84%E6%8A%80%E5%B7%A7">17.经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧？</a></li><li><a href="#18li-%E4%B8%8E-li-%E4%B9%8B%E9%97%B4%E6%9C%89%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E7%A9%BA%E7%99%BD%E9%97%B4%E9%9A%94%E6%98%AF%E4%BB%80%E4%B9%88%E5%8E%9F%E5%9B%A0%E5%BC%95%E8%B5%B7%E7%9A%84%E6%9C%89%E4%BB%80%E4%B9%88%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95">18.li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？</a></li><li><a href="#19%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%88%9D%E5%A7%8B%E5%8C%96-css-%E6%A0%B7%E5%BC%8F">19.为什么要初始化 CSS 样式？</a></li><li><a href="#20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8C%85%E5%90%AB%E5%9D%97%E5%AF%B9%E4%BA%8E%E5%8C%85%E5%90%AB%E5%9D%97%E7%9A%84%E7%90%86%E8%A7%A3">20.什么是包含块，对于包含块的理解?</a></li><li><a href="#21css-%E9%87%8C%E7%9A%84-visibility-%E5%B1%9E%E6%80%A7%E6%9C%89%E4%B8%AA-collapse-%E5%B1%9E%E6%80%A7%E5%80%BC%E6%98%AF%E5%B9%B2%E5%98%9B%E7%94%A8%E7%9A%84%E5%9C%A8%E4%B8%8D%E5%90%8C%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8B%E4%BB%A5%E5%90%8E%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">21.CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？</a></li><li><a href="#22widthauto-%E5%92%8C-width100%E7%9A%84%E5%8C%BA%E5%88%AB">22.width:auto 和 width:100\\x 的区别</a></li><li><a href="#23%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E5%85%83%E7%B4%A0%E4%B8%8E%E9%9D%9E%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E5%85%83%E7%B4%A0%E7%9A%84%E7%99%BE%E5%88%86%E6%AF%94%E8%AE%A1%E7%AE%97%E7%9A%84%E5%8C%BA%E5%88%AB">23.绝对定位元素与非绝对定位元素的百分比计算的区别</a></li><li><a href="#24%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D%E4%BD%BF%E7%94%A8%E5%9B%BE%E7%89%87-base64-%E7%BC%96%E7%A0%81%E7%9A%84%E4%BC%98%E7%82%B9%E5%92%8C%E7%BC%BA%E7%82%B9">24.简单介绍使用图片 base64 编码的优点和缺点。</a></li><li><a href="#25displayposition%E5%92%8Cfloat%E7%9A%84%E7%9B%B8%E4%BA%92%E5%85%B3%E7%B3%BB">25.&#39;display&#39;、&#39;position&#39;和&#39;float&#39;的相互关系？</a></li><li><a href="#26margin-%E9%87%8D%E5%8F%A0%E9%97%AE%E9%A2%98%E7%9A%84%E7%90%86%E8%A7%A3">26.margin 重叠问题的理解。</a></li><li><a href="#27%E5%AF%B9-bfc-%E8%A7%84%E8%8C%83%E5%9D%97%E7%BA%A7%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%B8%8A%E4%B8%8B%E6%96%87block-formatting-context%E7%9A%84%E7%90%86%E8%A7%A3">27.对 BFC 规范（块级格式化上下文：block formatting context）的理解？</a></li><li><a href="#28ifc-%E6%98%AF%E4%BB%80%E4%B9%88">28.IFC 是什么？</a></li><li><a href="#29%E8%AF%B7%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%96%B9%E5%BC%8F">29.请解释一下为什么需要清除浮动？清除浮动的方式</a></li><li><a href="#30%E4%BD%BF%E7%94%A8-clear-%E5%B1%9E%E6%80%A7%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8%E7%9A%84%E5%8E%9F%E7%90%86">30.使用 clear 属性清除浮动的原理？</a></li><li><a href="#31zoom1-%E7%9A%84%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8%E5%8E%9F%E7%90%86">31.zoom:1 的清除浮动原理?</a></li><li><a href="#32%E7%A7%BB%E5%8A%A8%E7%AB%AF%E7%9A%84%E5%B8%83%E5%B1%80%E7%94%A8%E8%BF%87%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2%E5%90%97">32.移动端的布局用过媒体查询吗？</a></li><li><a href="#33%E4%BD%BF%E7%94%A8-css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%E5%90%97%E5%96%9C%E6%AC%A2%E5%93%AA%E4%B8%AA">33.使用 CSS 预处理器吗？喜欢哪个？</a></li><li><a href="#34css-%E4%BC%98%E5%8C%96%E6%8F%90%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84%E6%96%B9%E6%B3%95%E6%9C%89%E5%93%AA%E4%BA%9B">34.CSS 优化、提高性能的方法有哪些？</a></li><li><a href="#35%E6%B5%8F%E8%A7%88%E5%99%A8%E6%98%AF%E6%80%8E%E6%A0%B7%E8%A7%A3%E6%9E%90-css-%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84">35.浏览器是怎样解析 CSS 选择器的？</a></li><li><a href="#36%E5%9C%A8%E7%BD%91%E9%A1%B5%E4%B8%AD%E5%BA%94%E8%AF%A5%E4%BD%BF%E7%94%A8%E5%A5%87%E6%95%B0%E8%BF%98%E6%98%AF%E5%81%B6%E6%95%B0%E7%9A%84%E5%AD%97%E4%BD%93%E4%B8%BA%E4%BB%80%E4%B9%88%E5%91%A2">36.在网页中应该使用奇数还是偶数的字体？为什么呢？</a></li><li><a href="#37margin-%E5%92%8C-padding-%E5%88%86%E5%88%AB%E9%80%82%E5%90%88%E4%BB%80%E4%B9%88%E5%9C%BA%E6%99%AF%E4%BD%BF%E7%94%A8">37.margin 和 padding 分别适合什么场景使用？</a></li><li><a href="#38%E6%8A%BD%E7%A6%BB%E6%A0%B7%E5%BC%8F%E6%A8%A1%E5%9D%97%E6%80%8E%E4%B9%88%E5%86%99%E8%AF%B4%E5%87%BA%E6%80%9D%E8%B7%AF%E6%9C%89%E6%97%A0%E5%AE%9E%E8%B7%B5%E7%BB%8F%E9%AA%8C%E9%98%BF%E9%87%8C%E8%88%AA%E6%97%85%E7%9A%84%E9%9D%A2%E8%AF%95%E9%A2%98">38.抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]</a></li><li><a href="#39%E7%AE%80%E5%8D%95%E8%AF%B4%E4%B8%80%E4%B8%8B-css3-%E7%9A%84-all-%E5%B1%9E%E6%80%A7">39.简单说一下 css3 的 all 属性。</a></li><li><a href="#40%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%BB%BA%E8%AE%AE%E4%BD%BF%E7%94%A8%E7%BB%9F%E9%85%8D%E7%AC%A6%E5%88%9D%E5%A7%8B%E5%8C%96-css-%E6%A0%B7%E5%BC%8F">40.为什么不建议使用统配符初始化 css 样式。</a></li><li><a href="#41absolute-%E7%9A%84-containingblock%E5%8C%85%E5%90%AB%E5%9D%97%E8%AE%A1%E7%AE%97%E6%96%B9%E5%BC%8F%E8%B7%9F%E6%AD%A3%E5%B8%B8%E6%B5%81%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C">41.absolute 的 containingblock（包含块）计算方式跟正常流有什么不同？</a></li><li><a href="#42%E5%AF%B9%E4%BA%8E-haslayout-%E7%9A%84%E7%90%86%E8%A7%A3">42.对于 hasLayout 的理解？</a></li><li><a href="#43%E5%85%83%E7%B4%A0%E7%AB%96%E5%90%91%E7%9A%84%E7%99%BE%E5%88%86%E6%AF%94%E8%AE%BE%E5%AE%9A%E6%98%AF%E7%9B%B8%E5%AF%B9%E4%BA%8E%E5%AE%B9%E5%99%A8%E7%9A%84%E9%AB%98%E5%BA%A6%E5%90%97">43.元素竖向的百分比设定是相对于容器的高度吗？</a></li><li><a href="#44%E5%85%A8%E5%B1%8F%E6%BB%9A%E5%8A%A8%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%E7%94%A8%E5%88%B0%E4%BA%86-css-%E7%9A%84%E5%93%AA%E4%BA%9B%E5%B1%9E%E6%80%A7%E5%BE%85%E6%B7%B1%E5%85%A5%E5%AE%9E%E8%B7%B5">44.全屏滚动的原理是什么？用到了 CSS 的哪些属性？（待深入实践）</a></li><li><a href="#45%E4%BB%80%E4%B9%88%E6%98%AF%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%E5%A6%82%E4%BD%95%E5%85%BC%E5%AE%B9%E4%BD%8E%E7%89%88%E6%9C%AC%E7%9A%84-ie%E5%BE%85%E6%B7%B1%E5%85%A5%E4%BA%86%E8%A7%A3">45.什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？（待深入了解）</a></li><li><a href="#46%E8%A7%86%E5%B7%AE%E6%BB%9A%E5%8A%A8%E6%95%88%E6%9E%9C%E5%A6%82%E4%BD%95%E7%BB%99%E6%AF%8F%E9%A1%B5%E5%81%9A%E4%B8%8D%E5%90%8C%E7%9A%84%E5%8A%A8%E7%94%BB%E5%9B%9E%E5%88%B0%E9%A1%B6%E9%83%A8%E5%90%91%E4%B8%8B%E6%BB%91%E5%8A%A8%E8%A6%81%E5%86%8D%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%92%8C%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E5%88%86%E5%88%AB%E6%80%8E%E4%B9%88%E5%81%9A">46.视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）</a></li><li><a href="#47%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9-chrome-%E8%AE%B0%E4%BD%8F%E5%AF%86%E7%A0%81%E5%90%8E%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85%E8%A1%A8%E5%8D%95%E7%9A%84%E9%BB%84%E8%89%B2%E8%83%8C%E6%99%AF">47.如何修改 chrome 记住密码后自动填充表单的黄色背景？</a></li><li><a href="#48%E6%80%8E%E4%B9%88%E8%AE%A9-chrome-%E6%94%AF%E6%8C%81%E5%B0%8F%E4%BA%8E-12px-%E7%9A%84%E6%96%87%E5%AD%97">48.怎么让 Chrome 支持小于 12px 的文字？</a></li><li><a href="#49%E8%AE%A9%E9%A1%B5%E9%9D%A2%E9%87%8C%E7%9A%84%E5%AD%97%E4%BD%93%E5%8F%98%E6%B8%85%E6%99%B0%E5%8F%98%E7%BB%86%E7%94%A8-css-%E6%80%8E%E4%B9%88%E5%81%9A">49.让页面里的字体变清晰，变细用 CSS 怎么做？</a></li><li><a href="#50font-style-%E5%B1%9E%E6%80%A7%E4%B8%AD-italic-%E5%92%8C-oblique-%E7%9A%84%E5%8C%BA%E5%88%AB">50.font-style 属性中 italic 和 oblique 的区别？</a></li><li><a href="#51%E8%AE%BE%E5%A4%87%E5%83%8F%E7%B4%A0css-%E5%83%8F%E7%B4%A0%E8%AE%BE%E5%A4%87%E7%8B%AC%E7%AB%8B%E5%83%8F%E7%B4%A0dprppi-%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB">51.设备像素、css 像素、设备独立像素、dpr、ppi 之间的区别？</a></li><li><a href="#52layout-viewportvisual-viewport-%E5%92%8C-ideal-viewport-%E7%9A%84%E5%8C%BA%E5%88%AB">52.layout viewport、visual viewport 和 ideal viewport 的区别？</a></li><li><a href="#53positionfixed%E5%9C%A8-android-%E4%B8%8B%E6%97%A0%E6%95%88%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86">53.position:fixed;在 android 下无效怎么处理？</a></li><li><a href="#54%E5%A6%82%E6%9E%9C%E9%9C%80%E8%A6%81%E6%89%8B%E5%8A%A8%E5%86%99%E5%8A%A8%E7%94%BB%E4%BD%A0%E8%AE%A4%E4%B8%BA%E6%9C%80%E5%B0%8F%E6%97%B6%E9%97%B4%E9%97%B4%E9%9A%94%E6%98%AF%E5%A4%9A%E4%B9%85%E4%B8%BA%E4%BB%80%E4%B9%88%E9%98%BF%E9%87%8C">54.如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）</a></li><li><a href="#55%E5%A6%82%E4%BD%95%E8%AE%A9%E5%8E%BB%E9%99%A4-inline-block-%E5%85%83%E7%B4%A0%E9%97%B4%E9%97%B4%E8%B7%9D">55.如何让去除 inline-block 元素间间距？</a></li><li><a href="#56overflowscroll-%E6%97%B6%E4%B8%8D%E8%83%BD%E5%B9%B3%E6%BB%91%E6%BB%9A%E5%8A%A8%E7%9A%84%E9%97%AE%E9%A2%98%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86">56.overflow:scroll 时不能平滑滚动的问题怎么处理？</a></li><li><a href="#57%E6%9C%89%E4%B8%80%E4%B8%AA%E9%AB%98%E5%BA%A6%E8%87%AA%E9%80%82%E5%BA%94%E7%9A%84-div%E9%87%8C%E9%9D%A2%E6%9C%89%E4%B8%A4%E4%B8%AA-div%E4%B8%80%E4%B8%AA%E9%AB%98%E5%BA%A6-100px%E5%B8%8C%E6%9C%9B%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%A1%AB%E6%BB%A1%E5%89%A9%E4%B8%8B%E7%9A%84%E9%AB%98%E5%BA%A6">57.有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。</a></li><li><a href="#58pngjpggif-%E8%BF%99%E4%BA%9B%E5%9B%BE%E7%89%87%E6%A0%BC%E5%BC%8F%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B%E5%88%86%E5%88%AB%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E7%94%A8%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BA%86%E8%A7%A3%E8%BF%87-webp">58.png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？</a></li><li><a href="#59%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81-webp-%E6%A0%BC%E5%BC%8F%E5%9B%BE%E7%89%87">59.浏览器如何判断是否支持 webp 格式图片</a></li><li><a href="#60%E4%BB%80%E4%B9%88%E6%98%AF-cookie-%E9%9A%94%E7%A6%BB%E6%88%96%E8%80%85%E8%AF%B4%E8%AF%B7%E6%B1%82%E8%B5%84%E6%BA%90%E7%9A%84%E6%97%B6%E5%80%99%E4%B8%8D%E8%A6%81%E8%AE%A9%E5%AE%83%E5%B8%A6-cookie-%E6%80%8E%E4%B9%88%E5%81%9A">60.什么是 Cookie 隔离？（或者说：请求资源的时候不要让它带 cookie 怎么做）</a></li><li><a href="#61style-%E6%A0%87%E7%AD%BE%E5%86%99%E5%9C%A8-body-%E5%90%8E%E4%B8%8E-body-%E5%89%8D%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB">61.style 标签写在 body 后与 body 前有什么区别？</a></li><li><a href="#62%E4%BB%80%E4%B9%88%E6%98%AF-css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%E5%90%8E%E5%A4%84%E7%90%86%E5%99%A8">62.什么是 CSS 预处理器/后处理器？</a></li><li><a href="#63%E9%98%90%E8%BF%B0%E4%B8%80%E4%B8%8B-csssprites">63.阐述一下 CSSSprites</a></li><li><a href="#64%E4%BD%BF%E7%94%A8-rem-%E5%B8%83%E5%B1%80%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9">64.使用 rem 布局的优缺点？</a></li><li><a href="#65%E5%87%A0%E7%A7%8D%E5%B8%B8%E8%A7%81%E7%9A%84-css-%E5%B8%83%E5%B1%80">65.几种常见的 CSS 布局</a></li><li><a href="#66%E7%94%BB%E4%B8%80%E6%9D%A1-05px-%E7%9A%84%E7%BA%BF">66.画一条 0.5px 的线</a></li><li><a href="#67transition-%E5%92%8C-animation-%E7%9A%84%E5%8C%BA%E5%88%AB">67.transition 和 animation 的区别</a></li><li><a href="#68%E4%BB%80%E4%B9%88%E6%98%AF%E9%A6%96%E9%80%89%E6%9C%80%E5%B0%8F%E5%AE%BD%E5%BA%A6">68.什么是首选最小宽度？</a></li><li><a href="#69%E4%B8%BA%E4%BB%80%E4%B9%88-height100%E4%BC%9A%E6%97%A0%E6%95%88">69.为什么 height:100\\x 会无效？</a></li><li><a href="#70min-widthmax-width-%E5%92%8C-min-heightmax-height-%E5%B1%9E%E6%80%A7%E9%97%B4%E7%9A%84%E8%A6%86%E7%9B%96%E8%A7%84%E5%88%99">70.min-width/max-width 和 min-height/max-height 属性间的覆盖规则？</a></li><li><a href="#71%E5%86%85%E8%81%94%E7%9B%92%E6%A8%A1%E5%9E%8B%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5">71.内联盒模型基本概念</a></li><li><a href="#72%E4%BB%80%E4%B9%88%E6%98%AF%E5%B9%BD%E7%81%B5%E7%A9%BA%E7%99%BD%E8%8A%82%E7%82%B9">72.什么是幽灵空白节点？</a></li><li><a href="#73%E4%BB%80%E4%B9%88%E6%98%AF%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0">73.什么是替换元素？</a></li><li><a href="#74%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E8%AE%A1%E7%AE%97%E8%A7%84%E5%88%99">74.替换元素的计算规则？</a></li><li><a href="#75content-%E4%B8%8E%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0%E7%9A%84%E5%85%B3%E7%B3%BB">75.content 与替换元素的关系？</a></li><li><a href="#76marginauto-%E7%9A%84%E5%A1%AB%E5%85%85%E8%A7%84%E5%88%99">76.margin:auto 的填充规则？</a></li><li><a href="#77margin-%E6%97%A0%E6%95%88%E7%9A%84%E6%83%85%E5%BD%A2">77.margin 无效的情形</a></li><li><a href="#78border-%E7%9A%84%E7%89%B9%E6%AE%8A%E6%80%A7">78.border 的特殊性？</a></li><li><a href="#79%E4%BB%80%E4%B9%88%E6%98%AF%E5%9F%BA%E7%BA%BF%E5%92%8C-x-height">79.什么是基线和 x-height？</a></li><li><a href="#80line-height-%E7%9A%84%E7%89%B9%E6%AE%8A%E6%80%A7">80.line-height 的特殊性？</a></li><li><a href="#81vertical-align-%E7%9A%84%E7%89%B9%E6%AE%8A%E6%80%A7">81.vertical-align 的特殊性？</a></li><li><a href="#82overflow-%E7%9A%84%E7%89%B9%E6%AE%8A%E6%80%A7">82.overflow 的特殊性？</a></li><li><a href="#83%E6%97%A0%E4%BE%9D%E8%B5%96%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E6%98%AF%E4%BB%80%E4%B9%88">83.无依赖绝对定位是什么？</a></li><li><a href="#84absolute-%E4%B8%8E-overflow-%E7%9A%84%E5%85%B3%E7%B3%BB">84.absolute 与 overflow 的关系？</a></li><li><a href="#85clip-%E8%A3%81%E5%89%AA%E6%98%AF%E4%BB%80%E4%B9%88">85.clip 裁剪是什么？</a></li><li><a href="#86relative-%E7%9A%84%E7%89%B9%E6%AE%8A%E6%80%A7">86.relative 的特殊性？</a></li><li><a href="#87%E4%BB%80%E4%B9%88%E6%98%AF%E5%B1%82%E5%8F%A0%E4%B8%8A%E4%B8%8B%E6%96%87">87.什么是层叠上下文？</a></li><li><a href="#88%E4%BB%80%E4%B9%88%E6%98%AF%E5%B1%82%E5%8F%A0%E6%B0%B4%E5%B9%B3">88.什么是层叠水平？</a></li><li><a href="#89%E5%85%83%E7%B4%A0%E7%9A%84%E5%B1%82%E5%8F%A0%E9%A1%BA%E5%BA%8F">89.元素的层叠顺序？</a></li><li><a href="#90%E5%B1%82%E5%8F%A0%E5%87%86%E5%88%99">90.层叠准则？</a></li><li><a href="#91font-weight-%E7%9A%84%E7%89%B9%E6%AE%8A%E6%80%A7">91.font-weight 的特殊性？</a></li><li><a href="#92text-indent-%E7%9A%84%E7%89%B9%E6%AE%8A%E6%80%A7">92.text-indent 的特殊性？</a></li><li><a href="#93letter-spacing-%E4%B8%8E%E5%AD%97%E7%AC%A6%E9%97%B4%E8%B7%9D">93.letter-spacing 与字符间距？</a></li><li><a href="#94word-spacing-%E4%B8%8E%E5%8D%95%E8%AF%8D%E9%97%B4%E8%B7%9D">94.word-spacing 与单词间距？</a></li><li><a href="#95white-space-%E4%B8%8E%E6%8D%A2%E8%A1%8C%E5%92%8C%E7%A9%BA%E6%A0%BC%E7%9A%84%E6%8E%A7%E5%88%B6">95.white-space 与换行和空格的控制？</a></li><li><a href="#96%E9%9A%90%E8%97%8F%E5%85%83%E7%B4%A0%E7%9A%84-background-image-%E5%88%B0%E5%BA%95%E5%8A%A0%E4%B8%8D%E5%8A%A0%E8%BD%BD">96.隐藏元素的 background-image 到底加不加载？</a></li><li><a href="#97%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8D%95%E8%A1%8C%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E7%9A%84%E7%9C%81%E7%95%A5">97.如何实现单行／多行文本溢出的省略（...）？</a></li><li><a href="#98%E5%B8%B8%E8%A7%81%E7%9A%84%E5%85%83%E7%B4%A0%E9%9A%90%E8%97%8F%E6%96%B9%E5%BC%8F">98.常见的元素隐藏方式？</a></li><li><a href="#99css-%E5%AE%9E%E7%8E%B0%E4%B8%8A%E4%B8%8B%E5%9B%BA%E5%AE%9A%E4%B8%AD%E9%97%B4%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80">99.css 实现上下固定中间自适应布局？</a></li><li><a href="#100css-%E4%B8%A4%E6%A0%8F%E5%B8%83%E5%B1%80%E7%9A%84%E5%AE%9E%E7%8E%B0">100.css 两栏布局的实现？</a></li><li><a href="#101css-%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80%E7%9A%84%E5%AE%9E%E7%8E%B0">101.css 三栏布局的实现？</a></li><li><a href="#102%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%AE%BD%E9%AB%98%E8%87%AA%E9%80%82%E5%BA%94%E7%9A%84%E6%AD%A3%E6%96%B9%E5%BD%A2">102.实现一个宽高自适应的正方形</a></li><li><a href="#103%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E4%B8%89%E8%A7%92%E5%BD%A2">103.实现一个三角形</a></li><li><a href="#104%E4%B8%80%E4%B8%AA%E8%87%AA%E9%80%82%E5%BA%94%E7%9F%A9%E5%BD%A2%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%E4%B8%94%E5%AE%BD%E9%AB%98%E6%AF%94%E4%B8%BA-21">104.一个自适应矩形，水平垂直居中，且宽高比为 2:1</a></li><li><a href="#105-%E4%BD%A0%E7%9F%A5%E9%81%93-css-%E4%B8%AD%E4%B8%8D%E5%90%8C%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E4%B8%BA%E7%99%BE%E5%88%86%E6%AF%94%E6%97%B6%E5%AF%B9%E5%BA%94%E7%9A%84%E8%AE%A1%E7%AE%97%E5%9F%BA%E5%87%86">105.你知道 CSS 中不同属性设置为百分比\\x 时对应的计算基准？</a></li></ul><h4 id="_1-介绍一下标准的-css-的盒子模型-低版本-ie-的盒子模型有什么不同的" tabindex="-1">1.介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？ <a class="header-anchor" href="#_1-介绍一下标准的-css-的盒子模型-低版本-ie-的盒子模型有什么不同的" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）有两种盒子模型：IE盒模型（border-box）、W3C标准盒模型（content-box）</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个部分</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">IE盒模型和W3C标准盒模型的区别：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）W3C标准盒模型：属性width，height只包含内容content，不包含border和padding</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）IE盒模型：属性width，height包含content、border和padding，指的是content</span></span>
<span class="line"><span style="color:#A6ACCD;">+padding+border。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">在ie8+浏览器中使用哪个盒模型可以由box-sizing（CSS新增的属性）控制，默认值为content-box，即标准盒模型；</span></span>
<span class="line"><span style="color:#A6ACCD;">如果将box-sizing设为border-box则用的是IE盒模型。如果在ie6，7，8中DOCTYPE缺失会将盒子模型解释为IE</span></span>
<span class="line"><span style="color:#A6ACCD;">盒子模型。若在页面中声明了DOCTYPE类型，所有的浏览器都会把盒模型解释为W3C盒模型。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）有两种盒子模型：IE盒模型（border-box）、W3C标准盒模型（content-box）</span></span>
<span class="line"><span style="color:#abb2bf;">（2）盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个部分</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">IE盒模型和W3C标准盒模型的区别：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）W3C标准盒模型：属性width，height只包含内容content，不包含border和padding</span></span>
<span class="line"><span style="color:#abb2bf;">（2）IE盒模型：属性width，height包含content、border和padding，指的是content</span></span>
<span class="line"><span style="color:#abb2bf;">+padding+border。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">在ie8+浏览器中使用哪个盒模型可以由box-sizing（CSS新增的属性）控制，默认值为content-box，即标准盒模型；</span></span>
<span class="line"><span style="color:#abb2bf;">如果将box-sizing设为border-box则用的是IE盒模型。如果在ie6，7，8中DOCTYPE缺失会将盒子模型解释为IE</span></span>
<span class="line"><span style="color:#abb2bf;">盒子模型。若在页面中声明了DOCTYPE类型，所有的浏览器都会把盒模型解释为W3C盒模型。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">盒模型都是由四个部分组成的，分别是margin、border、padding和content。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同。标准盒模型的width和height属性的</span></span>
<span class="line"><span style="color:#A6ACCD;">范围只包含了content，而IE盒模型的width和height属性的范围包含了border、padding和content。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一般来说，我们可以通过修改元素的box-sizing属性来改变元素的盒模型。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">盒模型都是由四个部分组成的，分别是margin、border、padding和content。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同。标准盒模型的width和height属性的</span></span>
<span class="line"><span style="color:#abb2bf;">范围只包含了content，而IE盒模型的width和height属性的范围包含了border、padding和content。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">一般来说，我们可以通过修改元素的box-sizing属性来改变元素的盒模型。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细的资料可以参考： <a href="https://juejin.im/post/59ef72f5f265da4320026f76" target="_blank" rel="noreferrer">《CSS 盒模型详解》</a></p><h4 id="_2-css-选择符有哪些" tabindex="-1">2.CSS 选择符有哪些？ <a class="header-anchor" href="#_2-css-选择符有哪些" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）id选择器（#myid）</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）类选择器（.myclassname）</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）标签选择器（div,h1,p）</span></span>
<span class="line"><span style="color:#A6ACCD;">（4）后代选择器（h1 p）</span></span>
<span class="line"><span style="color:#A6ACCD;">（5）相邻后代选择器（子）选择器（ul&gt;li）</span></span>
<span class="line"><span style="color:#A6ACCD;">（6）兄弟选择器（li~a）</span></span>
<span class="line"><span style="color:#A6ACCD;">（7）相邻兄弟选择器（li+a）</span></span>
<span class="line"><span style="color:#A6ACCD;">（8）属性选择器（a[rel=&quot;external&quot;]）</span></span>
<span class="line"><span style="color:#A6ACCD;">（9）伪类选择器（a:hover,li:nth-child）</span></span>
<span class="line"><span style="color:#A6ACCD;">（10）伪元素选择器（::before、::after）</span></span>
<span class="line"><span style="color:#A6ACCD;">（11）通配符选择器（*）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）id选择器（#myid）</span></span>
<span class="line"><span style="color:#abb2bf;">（2）类选择器（.myclassname）</span></span>
<span class="line"><span style="color:#abb2bf;">（3）标签选择器（div,h1,p）</span></span>
<span class="line"><span style="color:#abb2bf;">（4）后代选择器（h1 p）</span></span>
<span class="line"><span style="color:#abb2bf;">（5）相邻后代选择器（子）选择器（ul&gt;li）</span></span>
<span class="line"><span style="color:#abb2bf;">（6）兄弟选择器（li~a）</span></span>
<span class="line"><span style="color:#abb2bf;">（7）相邻兄弟选择器（li+a）</span></span>
<span class="line"><span style="color:#abb2bf;">（8）属性选择器（a[rel=&quot;external&quot;]）</span></span>
<span class="line"><span style="color:#abb2bf;">（9）伪类选择器（a:hover,li:nth-child）</span></span>
<span class="line"><span style="color:#abb2bf;">（10）伪元素选择器（::before、::after）</span></span>
<span class="line"><span style="color:#abb2bf;">（11）通配符选择器（*）</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_3-before-和-after-中双冒号和单冒号有什么区别-解释一下这-2-个伪元素的作用。" tabindex="-1">3.::before 和:after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用。 <a class="header-anchor" href="#_3-before-和-after-中双冒号和单冒号有什么区别-解释一下这-2-个伪元素的作用。" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">单冒号（:）用于CSS3伪类，双冒号（::）用于CSS3伪元素。（伪元素由双冒号和伪元素名称组成）</span></span>
<span class="line"><span style="color:#A6ACCD;">双冒号是在当前规范中引入的，用于区分伪类和伪元素。不过浏览器需要同时支持旧的已经存在的伪元素写法，</span></span>
<span class="line"><span style="color:#A6ACCD;">比如:first-line、:first-letter、:before、:after等，</span></span>
<span class="line"><span style="color:#A6ACCD;">而新的在CSS3中引入的伪元素则不允许再支持旧的单冒号的写法。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">想让插入的内容出现在其它内容前，使用::before，否者，使用::after；</span></span>
<span class="line"><span style="color:#A6ACCD;">在代码顺序上，::after生成的内容也比::before生成的内容靠后。</span></span>
<span class="line"><span style="color:#A6ACCD;">如果按堆栈视角，::after生成的内容会在::before生成的内容之上。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">单冒号（:）用于CSS3伪类，双冒号（::）用于CSS3伪元素。（伪元素由双冒号和伪元素名称组成）</span></span>
<span class="line"><span style="color:#abb2bf;">双冒号是在当前规范中引入的，用于区分伪类和伪元素。不过浏览器需要同时支持旧的已经存在的伪元素写法，</span></span>
<span class="line"><span style="color:#abb2bf;">比如:first-line、:first-letter、:before、:after等，</span></span>
<span class="line"><span style="color:#abb2bf;">而新的在CSS3中引入的伪元素则不允许再支持旧的单冒号的写法。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">想让插入的内容出现在其它内容前，使用::before，否者，使用::after；</span></span>
<span class="line"><span style="color:#abb2bf;">在代码顺序上，::after生成的内容也比::before生成的内容靠后。</span></span>
<span class="line"><span style="color:#abb2bf;">如果按堆栈视角，::after生成的内容会在::before生成的内容之上。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">在css3中使用单冒号来表示伪类，用双冒号来表示伪元素。但是为了兼容已有的伪元素的写法，在一些浏览器中也可以使用单冒号</span></span>
<span class="line"><span style="color:#A6ACCD;">来表示伪元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">伪类一般匹配的是元素的一些特殊状态，如hover、link等，而伪元素一般匹配的特殊的位置，比如after、before等。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">在css3中使用单冒号来表示伪类，用双冒号来表示伪元素。但是为了兼容已有的伪元素的写法，在一些浏览器中也可以使用单冒号</span></span>
<span class="line"><span style="color:#abb2bf;">来表示伪元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">伪类一般匹配的是元素的一些特殊状态，如hover、link等，而伪元素一般匹配的特殊的位置，比如after、before等。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_4-伪类与伪元素的区别" tabindex="-1">4.伪类与伪元素的区别 <a class="header-anchor" href="#_4-伪类与伪元素的区别" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">css引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分，比如，一句</span></span>
<span class="line"><span style="color:#A6ACCD;">话中的第一个字母，或者是列表中的第一个元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的</span></span>
<span class="line"><span style="color:#A6ACCD;">元素时，我们可以通过:hover来描述这个元素的状态。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">伪元素用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。比如说，我们可以通过::be</span></span>
<span class="line"><span style="color:#A6ACCD;">fore来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">有时你会发现伪元素使用了两个冒号（::）而不是一个冒号（:）。这是CSS3的一部分，并尝试区分伪类和伪元素。大多数浏览</span></span>
<span class="line"><span style="color:#A6ACCD;">器都支持这两个值。按照规则应该使用（::）而不是（:），从而区分伪类和伪元素。但是，由于在旧版本的W3C规范并未对此进行</span></span>
<span class="line"><span style="color:#A6ACCD;">特别区分，因此目前绝大多数的浏览器都支持使用这两种方式表示伪元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">css引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分，比如，一句</span></span>
<span class="line"><span style="color:#abb2bf;">话中的第一个字母，或者是列表中的第一个元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的</span></span>
<span class="line"><span style="color:#abb2bf;">元素时，我们可以通过:hover来描述这个元素的状态。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">伪元素用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。比如说，我们可以通过::be</span></span>
<span class="line"><span style="color:#abb2bf;">fore来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">有时你会发现伪元素使用了两个冒号（::）而不是一个冒号（:）。这是CSS3的一部分，并尝试区分伪类和伪元素。大多数浏览</span></span>
<span class="line"><span style="color:#abb2bf;">器都支持这两个值。按照规则应该使用（::）而不是（:），从而区分伪类和伪元素。但是，由于在旧版本的W3C规范并未对此进行</span></span>
<span class="line"><span style="color:#abb2bf;">特别区分，因此目前绝大多数的浏览器都支持使用这两种方式表示伪元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/" target="_blank" rel="noreferrer">《总结伪类与伪元素》</a></p><h4 id="_5-css-中哪些属性可以继承" tabindex="-1">5.CSS 中哪些属性可以继承？ <a class="header-anchor" href="#_5-css-中哪些属性可以继承" aria-hidden="true">#</a></h4><p>相关资料：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">每个CSS属性定义的概述都指出了这个属性是默认继承的，还是默认不继承的。这决定了当你没有为元素的属性指定值时该如何计算</span></span>
<span class="line"><span style="color:#A6ACCD;">值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">当元素的一个继承属性没有指定值时，则取父元素的同属性的计算值。只有文档根元素取该属性的概述中给定的初始值（这里的意思应</span></span>
<span class="line"><span style="color:#A6ACCD;">该是在该属性本身的定义中的默认值）。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">当元素的一个非继承属性（在Mozilla code里有时称之为reset property）没有指定值时，则取属性的初始值initial v</span></span>
<span class="line"><span style="color:#A6ACCD;">alue（该值在该属性的概述里被指定）。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">有继承性的属性：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）字体系列属性</span></span>
<span class="line"><span style="color:#A6ACCD;">font、font-family、font-weight、font-size、font-style、font-variant、font-stretch、font-size-adjust</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）文本系列属性</span></span>
<span class="line"><span style="color:#A6ACCD;">text-indent、text-align、text-shadow、line-height、word-spacing、letter-spacing、</span></span>
<span class="line"><span style="color:#A6ACCD;">text-transform、direction、color</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）表格布局属性</span></span>
<span class="line"><span style="color:#A6ACCD;">caption-side border-collapse empty-cells</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）列表属性</span></span>
<span class="line"><span style="color:#A6ACCD;">list-style-type、list-style-image、list-style-position、list-style</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）光标属性</span></span>
<span class="line"><span style="color:#A6ACCD;">cursor</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）元素可见性</span></span>
<span class="line"><span style="color:#A6ACCD;">visibility</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（7）还有一些不常用的；speak，page，设置嵌套引用的引号类型quotes等属性</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">注意：当一个属性不是继承属性时，可以使用inherit关键字指定一个属性应从父元素继承它的值，inherit关键字用于显式地</span></span>
<span class="line"><span style="color:#A6ACCD;">指定继承性，可用于任何继承性/非继承性属性。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">每个CSS属性定义的概述都指出了这个属性是默认继承的，还是默认不继承的。这决定了当你没有为元素的属性指定值时该如何计算</span></span>
<span class="line"><span style="color:#abb2bf;">值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">当元素的一个继承属性没有指定值时，则取父元素的同属性的计算值。只有文档根元素取该属性的概述中给定的初始值（这里的意思应</span></span>
<span class="line"><span style="color:#abb2bf;">该是在该属性本身的定义中的默认值）。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">当元素的一个非继承属性（在Mozilla code里有时称之为reset property）没有指定值时，则取属性的初始值initial v</span></span>
<span class="line"><span style="color:#abb2bf;">alue（该值在该属性的概述里被指定）。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">有继承性的属性：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）字体系列属性</span></span>
<span class="line"><span style="color:#abb2bf;">font、font-family、font-weight、font-size、font-style、font-variant、font-stretch、font-size-adjust</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）文本系列属性</span></span>
<span class="line"><span style="color:#abb2bf;">text-indent、text-align、text-shadow、line-height、word-spacing、letter-spacing、</span></span>
<span class="line"><span style="color:#abb2bf;">text-transform、direction、color</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）表格布局属性</span></span>
<span class="line"><span style="color:#abb2bf;">caption-side border-collapse empty-cells</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）列表属性</span></span>
<span class="line"><span style="color:#abb2bf;">list-style-type、list-style-image、list-style-position、list-style</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）光标属性</span></span>
<span class="line"><span style="color:#abb2bf;">cursor</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）元素可见性</span></span>
<span class="line"><span style="color:#abb2bf;">visibility</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（7）还有一些不常用的；speak，page，设置嵌套引用的引号类型quotes等属性</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">注意：当一个属性不是继承属性时，可以使用inherit关键字指定一个属性应从父元素继承它的值，inherit关键字用于显式地</span></span>
<span class="line"><span style="color:#abb2bf;">指定继承性，可用于任何继承性/非继承性属性。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">每一个属性在定义中都给出了这个属性是否具有继承性，一个具有继承性的属性会在没有指定值的时候，会使用父元素的同属性的值</span></span>
<span class="line"><span style="color:#A6ACCD;">来作为自己的值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一般具有继承性的属性有，字体相关的属性，font-size和font-weight等。文本相关的属性，color和text-align等。</span></span>
<span class="line"><span style="color:#A6ACCD;">表格的一些布局属性、列表属性如list-style等。还有光标属性cursor、元素可见性visibility。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">当一个属性不是继承属性的时候，我们也可以通过将它的值设置为inherit来使它从父元素那获取同名的属性值来继承。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">每一个属性在定义中都给出了这个属性是否具有继承性，一个具有继承性的属性会在没有指定值的时候，会使用父元素的同属性的值</span></span>
<span class="line"><span style="color:#abb2bf;">来作为自己的值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">一般具有继承性的属性有，字体相关的属性，font-size和font-weight等。文本相关的属性，color和text-align等。</span></span>
<span class="line"><span style="color:#abb2bf;">表格的一些布局属性、列表属性如list-style等。还有光标属性cursor、元素可见性visibility。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">当一个属性不是继承属性的时候，我们也可以通过将它的值设置为inherit来使它从父元素那获取同名的属性值来继承。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细的资料可以参考： <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance" target="_blank" rel="noreferrer">《继承属性》</a><a href="https://www.jianshu.com/p/34044e3c9317" target="_blank" rel="noreferrer">《CSS 有哪些属性可以继承？》</a></p><h4 id="_6-css-优先级算法如何计算" tabindex="-1">6.CSS 优先级算法如何计算？ <a class="header-anchor" href="#_6-css-优先级算法如何计算" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">CSS的优先级是根据样式声明的特殊性值来判断的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">选择器的特殊性值分为四个等级，如下：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）标签内选择符x,0,0,0</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）ID选择符0,x,0,0</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）class选择符/属性选择符/伪类选择符	0,0,x,0</span></span>
<span class="line"><span style="color:#A6ACCD;">（4）元素和伪元素选择符0,0,0,x</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">计算方法：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）每个等级的初始值为0</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）每个等级的叠加为选择器出现的次数相加</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）不可进位，比如0,99,99,99</span></span>
<span class="line"><span style="color:#A6ACCD;">（4）依次表示为：0,0,0,0</span></span>
<span class="line"><span style="color:#A6ACCD;">（5）每个等级计数之间没关联</span></span>
<span class="line"><span style="color:#A6ACCD;">（6）等级判断从左向右，如果某一位数值相同，则判断下一位数值</span></span>
<span class="line"><span style="color:#A6ACCD;">（7）如果两个优先级相同，则最后出现的优先级高，!important也适用</span></span>
<span class="line"><span style="color:#A6ACCD;">（8）通配符选择器的特殊性值为：0,0,0,0</span></span>
<span class="line"><span style="color:#A6ACCD;">（9）继承样式优先级最低，通配符样式优先级高于继承样式</span></span>
<span class="line"><span style="color:#A6ACCD;">（10）!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为1,0,0,0,0。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">计算实例：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）#demo a{color: orange;}/*特殊性值：0,1,0,1*/</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）div#demo a{color: red;}/*特殊性值：0,1,0,2*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">注意：</span></span>
<span class="line"><span style="color:#A6ACCD;">（1）样式应用时，css会先查看规则的权重（!important），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）特殊性值越大的声明优先级越高。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高（距离元素出现最近的）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> (4) 部分浏览器由于字节溢出问题出现的进位表现不做考虑</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">CSS的优先级是根据样式声明的特殊性值来判断的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">选择器的特殊性值分为四个等级，如下：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）标签内选择符x,0,0,0</span></span>
<span class="line"><span style="color:#abb2bf;">（2）ID选择符0,x,0,0</span></span>
<span class="line"><span style="color:#abb2bf;">（3）class选择符/属性选择符/伪类选择符	0,0,x,0</span></span>
<span class="line"><span style="color:#abb2bf;">（4）元素和伪元素选择符0,0,0,x</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">计算方法：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）每个等级的初始值为0</span></span>
<span class="line"><span style="color:#abb2bf;">（2）每个等级的叠加为选择器出现的次数相加</span></span>
<span class="line"><span style="color:#abb2bf;">（3）不可进位，比如0,99,99,99</span></span>
<span class="line"><span style="color:#abb2bf;">（4）依次表示为：0,0,0,0</span></span>
<span class="line"><span style="color:#abb2bf;">（5）每个等级计数之间没关联</span></span>
<span class="line"><span style="color:#abb2bf;">（6）等级判断从左向右，如果某一位数值相同，则判断下一位数值</span></span>
<span class="line"><span style="color:#abb2bf;">（7）如果两个优先级相同，则最后出现的优先级高，!important也适用</span></span>
<span class="line"><span style="color:#abb2bf;">（8）通配符选择器的特殊性值为：0,0,0,0</span></span>
<span class="line"><span style="color:#abb2bf;">（9）继承样式优先级最低，通配符样式优先级高于继承样式</span></span>
<span class="line"><span style="color:#abb2bf;">（10）!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为1,0,0,0,0。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">计算实例：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）#demo a{color: orange;}/*特殊性值：0,1,0,1*/</span></span>
<span class="line"><span style="color:#abb2bf;">（2）div#demo a{color: red;}/*特殊性值：0,1,0,2*/</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">注意：</span></span>
<span class="line"><span style="color:#abb2bf;">（1）样式应用时，css会先查看规则的权重（!important），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）特殊性值越大的声明优先级越高。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高（距离元素出现最近的）</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"> (4) 部分浏览器由于字节溢出问题出现的进位表现不做考虑</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">判断优先级时，首先我们会判断一条属性声明是否有权重，也就是是否在声明后面加上了!important。一条声明如果加上了权重，</span></span>
<span class="line"><span style="color:#A6ACCD;">那么它的优先级就是最高的，前提是它之后不再出现相同权重的声明。如果权重相同，我们则需要去比较匹配规则的特殊性。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一条匹配规则一般由多个选择器组成，一条规则的特殊性由组成它的选择器的特殊性累加而成。选择器的特殊性可以分为四个等级，</span></span>
<span class="line"><span style="color:#A6ACCD;">第一个等级是行内样式，为1000，第二个等级是id选择器，为0100，第三个等级是类选择器、伪类选择器和属性选择器，为0010，</span></span>
<span class="line"><span style="color:#A6ACCD;">第四个等级是元素选择器和伪元素选择器，为0001。规则中每出现一个选择器，就将它的特殊性进行叠加，这个叠加只限于对应的等</span></span>
<span class="line"><span style="color:#A6ACCD;">级的叠加，不会产生进位。选择器特殊性值的比较是从左向右排序的，也就是说以1开头的特殊性值比所有以0开头的特殊性值要大。</span></span>
<span class="line"><span style="color:#A6ACCD;">比如说特殊性值为1000的的规则优先级就要比特殊性值为0999的规则高。如果两个规则的特殊性值相等的时候，那么就会根据它们引</span></span>
<span class="line"><span style="color:#A6ACCD;">入的顺序，后出现的规则的优先级最高。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">判断优先级时，首先我们会判断一条属性声明是否有权重，也就是是否在声明后面加上了!important。一条声明如果加上了权重，</span></span>
<span class="line"><span style="color:#abb2bf;">那么它的优先级就是最高的，前提是它之后不再出现相同权重的声明。如果权重相同，我们则需要去比较匹配规则的特殊性。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">一条匹配规则一般由多个选择器组成，一条规则的特殊性由组成它的选择器的特殊性累加而成。选择器的特殊性可以分为四个等级，</span></span>
<span class="line"><span style="color:#abb2bf;">第一个等级是行内样式，为1000，第二个等级是id选择器，为0100，第三个等级是类选择器、伪类选择器和属性选择器，为0010，</span></span>
<span class="line"><span style="color:#abb2bf;">第四个等级是元素选择器和伪元素选择器，为0001。规则中每出现一个选择器，就将它的特殊性进行叠加，这个叠加只限于对应的等</span></span>
<span class="line"><span style="color:#abb2bf;">级的叠加，不会产生进位。选择器特殊性值的比较是从左向右排序的，也就是说以1开头的特殊性值比所有以0开头的特殊性值要大。</span></span>
<span class="line"><span style="color:#abb2bf;">比如说特殊性值为1000的的规则优先级就要比特殊性值为0999的规则高。如果两个规则的特殊性值相等的时候，那么就会根据它们引</span></span>
<span class="line"><span style="color:#abb2bf;">入的顺序，后出现的规则的优先级最高。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>对于组合声明的特殊性值计算可以参考： <a href="https://www.jianshu.com/p/1c4e639ff7d5" target="_blank" rel="noreferrer">《CSS 优先级计算及应用》</a><a href="http://www.cnblogs.com/wangmeijian/p/4207433.html" target="_blank" rel="noreferrer">《CSS 优先级计算规则》</a><a href="https://www.zhangxinxu.com/wordpress/2012/08/256-class-selector-beat-id-selector/" target="_blank" rel="noreferrer">《有趣：256 个 class 选择器可以干掉 1 个 id 选择器》</a></p><h4 id="_7-关于伪类-lvha-的解释" tabindex="-1">7.关于伪类 LVHA 的解释? <a class="header-anchor" href="#_7-关于伪类-lvha-的解释" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">a标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">当链接未访问过时：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）当鼠标滑过a链接时，满足:link和:hover两种状态，要改变a标签的颜色，就必须将:hover伪类在:link伪</span></span>
<span class="line"><span style="color:#A6ACCD;">类后面声明；</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）当鼠标点击激活a链接时，同时满足:link、:hover、:active三种状态，要显示a标签激活时的样式（:active），</span></span>
<span class="line"><span style="color:#A6ACCD;">必须将:active声明放到:link和:hover之后。因此得出LVHA这个顺序。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">当链接访问过时，情况基本同上，只不过需要将:link换成:visited。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这个顺序能不能变？可以，但也只有:link和:visited可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，</span></span>
<span class="line"><span style="color:#A6ACCD;">也就不存在覆盖的问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">a标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active；</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">当链接未访问过时：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）当鼠标滑过a链接时，满足:link和:hover两种状态，要改变a标签的颜色，就必须将:hover伪类在:link伪</span></span>
<span class="line"><span style="color:#abb2bf;">类后面声明；</span></span>
<span class="line"><span style="color:#abb2bf;">（2）当鼠标点击激活a链接时，同时满足:link、:hover、:active三种状态，要显示a标签激活时的样式（:active），</span></span>
<span class="line"><span style="color:#abb2bf;">必须将:active声明放到:link和:hover之后。因此得出LVHA这个顺序。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">当链接访问过时，情况基本同上，只不过需要将:link换成:visited。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">这个顺序能不能变？可以，但也只有:link和:visited可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，</span></span>
<span class="line"><span style="color:#abb2bf;">也就不存在覆盖的问题。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_8-css3-新增伪类有那些" tabindex="-1">8.CSS3 新增伪类有那些？ <a class="header-anchor" href="#_8-css3-新增伪类有那些" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）elem:nth-child(n)选中父元素下的第n个子元素，并且这个子元素的标签名为elem，n可以接受具体的数</span></span>
<span class="line"><span style="color:#A6ACCD;">值，也可以接受函数。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）elem:nth-last-child(n)作用同上，不过是从后开始查找。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）elem:last-child选中最后一个子元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）elem:only-child如果elem是父元素下唯一的子元素，则选中之。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）elem:nth-of-type(n)选中父元素下第n个elem类型元素，n可以接受具体的数值，也可以接受函数。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）elem:first-of-type选中父元素下第一个elem类型元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（7）elem:last-of-type选中父元素下最后一个elem类型元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（8）elem:only-of-type如果父元素下的子元素只有一个elem类型元素，则选中该元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（9）elem:empty选中不包含子元素和内容的elem类型元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（10）elem:target选择当前活动的elem元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（11）:not(elem)选择非elem元素的每个元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（12）:enabled 控制表单控件的禁用状态。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（13）:disabled	控制表单控件的禁用状态。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(14):checked单选框或复选框被选中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）elem:nth-child(n)选中父元素下的第n个子元素，并且这个子元素的标签名为elem，n可以接受具体的数</span></span>
<span class="line"><span style="color:#abb2bf;">值，也可以接受函数。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）elem:nth-last-child(n)作用同上，不过是从后开始查找。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）elem:last-child选中最后一个子元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）elem:only-child如果elem是父元素下唯一的子元素，则选中之。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）elem:nth-of-type(n)选中父元素下第n个elem类型元素，n可以接受具体的数值，也可以接受函数。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）elem:first-of-type选中父元素下第一个elem类型元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（7）elem:last-of-type选中父元素下最后一个elem类型元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（8）elem:only-of-type如果父元素下的子元素只有一个elem类型元素，则选中该元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（9）elem:empty选中不包含子元素和内容的elem类型元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（10）elem:target选择当前活动的elem元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（11）:not(elem)选择非elem元素的每个元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（12）:enabled 控制表单控件的禁用状态。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（13）:disabled	控制表单控件的禁用状态。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">(14):checked单选框或复选框被选中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细的资料可以参考： <a href="https://www.cnblogs.com/SKLthegoodman/p/css3.html" target="_blank" rel="noreferrer">《CSS3 新特性总结(伪类)》</a><a href="https://blog.csdn.net/zhouziyu2011/article/details/58605705" target="_blank" rel="noreferrer">《浅谈 CSS 伪类和伪元素及 CSS3 新增伪类》</a></p><h4 id="_9-如何居中-div" tabindex="-1">9.如何居中 div？ <a class="header-anchor" href="#_9-如何居中-div" aria-hidden="true">#</a></h4><p>-水平居中：给 div 设置一个宽度，然后添加 margin:0 auto 属性</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>-水平居中，利用 text-align:center 实现</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">400px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-align: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">400</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>-让绝对定位的 div 居中</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*方便看效果*/</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: pink; </span><span style="color:#7F848E;font-style:italic;">/*方便看效果*/</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>-水平垂直居中一</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*确定容器的宽高宽500高300的层设置层的外边距div{*/</span></span>
<span class="line"><span style="color:#A6ACCD;">position: absolute;</span><span style="color:#676E95;font-style:italic;">/*绝对定位*/</span></span>
<span class="line"><span style="color:#A6ACCD;">width: 500px;</span></span>
<span class="line"><span style="color:#A6ACCD;">height: 300px;</span></span>
<span class="line"><span style="color:#A6ACCD;">top: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">left: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">margin: -150px 0 0 -250px;</span><span style="color:#676E95;font-style:italic;">/*外边距为自身宽高的一半*/</span></span>
<span class="line"><span style="color:#FFCB6B;">background-color</span><span style="color:#A6ACCD;">: pink;</span><span style="color:#676E95;font-style:italic;">/*方便看效果*/</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*确定容器的宽高宽500高300的层设置层的外边距div{*/</span></span>
<span class="line"><span style="color:#C678DD;">position: absolute;</span><span style="color:#7F848E;font-style:italic;">/*绝对定位*/</span></span>
<span class="line"><span style="color:#C678DD;">width: 500px;</span></span>
<span class="line"><span style="color:#C678DD;">height: 300px;</span></span>
<span class="line"><span style="color:#C678DD;">top: 50%;</span></span>
<span class="line"><span style="color:#C678DD;">left: 50%;</span></span>
<span class="line"><span style="color:#C678DD;">margin: -150px 0 0 -250px;</span><span style="color:#7F848E;font-style:italic;">/*外边距为自身宽高的一半*/</span></span>
<span class="line"><span style="color:#E06C75;">background-color</span><span style="color:#C678DD;">: pink;</span><span style="color:#7F848E;font-style:italic;">/*方便看效果*/</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>-水平垂直居中二</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*未知容器的宽高，利用\`transform\`属性*/</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*相对定位或绝对定位均可*/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*方便看效果*/</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*未知容器的宽高，利用\`transform\`属性*/</span></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/*相对定位或绝对定位均可*/</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  transform: </span><span style="color:#56B6C2;">translate</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">-50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">-50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: pink; </span><span style="color:#7F848E;font-style:italic;">/*方便看效果*/</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>-水平垂直居中三</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*利用flex布局实际使用时应考虑兼容性*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*垂直居中*/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*水平居中*/</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">containerdiv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*方便看效果*/</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*利用flex布局实际使用时应考虑兼容性*/</span></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  align-items: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/*垂直居中*/</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/*水平居中*/</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.containerdiv</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: pink; </span><span style="color:#7F848E;font-style:italic;">/*方便看效果*/</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>-水平垂直居中四</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*利用text-align:center和vertical-align:middle属性*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">vertical-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> middle</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">400px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">vertical-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> middle</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*利用text-align:center和vertical-align:middle属性*/</span></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">fixed</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-align: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  white-space: </span><span style="color:#D19A66;">nowrap</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#56B6C2;">::after</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  vertical-align: </span><span style="color:#D19A66;">middle</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">400</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">  white-space: </span><span style="color:#D19A66;">normal</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  vertical-align: </span><span style="color:#D19A66;">middle</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">一般常见的几种居中的方法有：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">对于宽高固定的元素</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）我们可以利用margin:0 auto来实现元素的水平居中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）利用绝对定位，设置四个方向的值都为0，并将margin设置为auto，由于宽高固定，因此对应方向实现平分，可以实现水</span></span>
<span class="line"><span style="color:#A6ACCD;">平和垂直方向上的居中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过margin负值来调整元素</span></span>
<span class="line"><span style="color:#A6ACCD;">的中心点到页面的中心。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过translate来调整元素</span></span>
<span class="line"><span style="color:#A6ACCD;">的中心点到页面的中心。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）使用flex布局，通过align-items:center和justify-content:center设置容器的垂直和水平方向上为居中对</span></span>
<span class="line"><span style="color:#A6ACCD;">齐，然后它的子元素也可以实现垂直和水平的居中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">对于宽高不定的元素，上面的后面两种方法，可以实现元素的垂直和水平的居中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">一般常见的几种居中的方法有：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">对于宽高固定的元素</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）我们可以利用margin:0 auto来实现元素的水平居中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）利用绝对定位，设置四个方向的值都为0，并将margin设置为auto，由于宽高固定，因此对应方向实现平分，可以实现水</span></span>
<span class="line"><span style="color:#abb2bf;">平和垂直方向上的居中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过margin负值来调整元素</span></span>
<span class="line"><span style="color:#abb2bf;">的中心点到页面的中心。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过translate来调整元素</span></span>
<span class="line"><span style="color:#abb2bf;">的中心点到页面的中心。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）使用flex布局，通过align-items:center和justify-content:center设置容器的垂直和水平方向上为居中对</span></span>
<span class="line"><span style="color:#abb2bf;">齐，然后它的子元素也可以实现垂直和水平的居中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">对于宽高不定的元素，上面的后面两种方法，可以实现元素的垂直和水平的居中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_10-display-有哪些值-说明他们的作用。" tabindex="-1">10.display 有哪些值？说明他们的作用。 <a class="header-anchor" href="#_10-display-有哪些值-说明他们的作用。" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">block	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。</span></span>
<span class="line"><span style="color:#A6ACCD;">none	元素不显示，并从文档流中移除。</span></span>
<span class="line"><span style="color:#A6ACCD;">inline	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。</span></span>
<span class="line"><span style="color:#A6ACCD;">inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。</span></span>
<span class="line"><span style="color:#A6ACCD;">list-item	像块类型元素一样显示，并添加样式列表标记。</span></span>
<span class="line"><span style="color:#A6ACCD;">table	此元素会作为块级表格来显示。</span></span>
<span class="line"><span style="color:#A6ACCD;">inherit	规定应该从父元素继承display属性的值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">block	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。</span></span>
<span class="line"><span style="color:#abb2bf;">none	元素不显示，并从文档流中移除。</span></span>
<span class="line"><span style="color:#abb2bf;">inline	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。</span></span>
<span class="line"><span style="color:#abb2bf;">inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。</span></span>
<span class="line"><span style="color:#abb2bf;">list-item	像块类型元素一样显示，并添加样式列表标记。</span></span>
<span class="line"><span style="color:#abb2bf;">table	此元素会作为块级表格来显示。</span></span>
<span class="line"><span style="color:#abb2bf;">inherit	规定应该从父元素继承display属性的值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="http://www.w3school.com.cn/css/pr_class_display.asp" target="_blank" rel="noreferrer">《CSS display 属性》</a></p><h4 id="_11-position-的值-relative-和-absolute-定位原点是" tabindex="-1">11.position 的值 relative 和 absolute 定位原点是？ <a class="header-anchor" href="#_11-position-的值-relative-和-absolute-定位原点是" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">absolute</span></span>
<span class="line"><span style="color:#A6ACCD;">生成绝对定位的元素，相对于值不为static的第一个父元素的padding box进行定位，也可以理解为离自己这一级元素最近的</span></span>
<span class="line"><span style="color:#A6ACCD;">一级position设置为absolute或者relative的父元素的padding box的左上角为原点的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">fixed（老IE不支持）</span></span>
<span class="line"><span style="color:#A6ACCD;">生成绝对定位的元素，相对于浏览器窗口进行定位。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">relative</span></span>
<span class="line"><span style="color:#A6ACCD;">生成相对定位的元素，相对于其元素本身所在正常位置进行定位。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">static</span></span>
<span class="line"><span style="color:#A6ACCD;">默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">inherit</span></span>
<span class="line"><span style="color:#A6ACCD;">规定从父元素继承position属性的值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">absolute</span></span>
<span class="line"><span style="color:#abb2bf;">生成绝对定位的元素，相对于值不为static的第一个父元素的padding box进行定位，也可以理解为离自己这一级元素最近的</span></span>
<span class="line"><span style="color:#abb2bf;">一级position设置为absolute或者relative的父元素的padding box的左上角为原点的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">fixed（老IE不支持）</span></span>
<span class="line"><span style="color:#abb2bf;">生成绝对定位的元素，相对于浏览器窗口进行定位。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">relative</span></span>
<span class="line"><span style="color:#abb2bf;">生成相对定位的元素，相对于其元素本身所在正常位置进行定位。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">static</span></span>
<span class="line"><span style="color:#abb2bf;">默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">inherit</span></span>
<span class="line"><span style="color:#abb2bf;">规定从父元素继承position属性的值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">relative定位的元素，是相对于元素本身的正常位置来进行定位的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">absolute定位的元素，是相对于它的第一个position值不为static的祖先元素的padding box来进行定位的。这句话</span></span>
<span class="line"><span style="color:#A6ACCD;">我们可以这样来理解，我们首先需要找到绝对定位元素的一个position的值不为static的祖先元素，然后相对于这个祖先元</span></span>
<span class="line"><span style="color:#A6ACCD;">素的padding box来定位，也就是说在计算定位距离的时候，padding的值也要算进去。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">relative定位的元素，是相对于元素本身的正常位置来进行定位的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">absolute定位的元素，是相对于它的第一个position值不为static的祖先元素的padding box来进行定位的。这句话</span></span>
<span class="line"><span style="color:#abb2bf;">我们可以这样来理解，我们首先需要找到绝对定位元素的一个position的值不为static的祖先元素，然后相对于这个祖先元</span></span>
<span class="line"><span style="color:#abb2bf;">素的padding box来定位，也就是说在计算定位距离的时候，padding的值也要算进去。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_12-css3-有哪些新特性-根据项目回答" tabindex="-1">12.CSS3 有哪些新特性？（根据项目回答） <a class="header-anchor" href="#_12-css3-有哪些新特性-根据项目回答" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">新增各种CSS选择器	（:not(.input)：所有class不是“input”的节点）</span></span>
<span class="line"><span style="color:#A6ACCD;">圆角		（border-radius:8px）</span></span>
<span class="line"><span style="color:#A6ACCD;">多列布局	（multi-column layout）</span></span>
<span class="line"><span style="color:#A6ACCD;">阴影和反射	（Shadow\\Reflect）</span></span>
<span class="line"><span style="color:#A6ACCD;">文字特效		（text-shadow）</span></span>
<span class="line"><span style="color:#A6ACCD;">文字渲染		（Text-decoration）</span></span>
<span class="line"><span style="color:#A6ACCD;">线性渐变		（gradient）</span></span>
<span class="line"><span style="color:#A6ACCD;">旋转			（transform）</span></span>
<span class="line"><span style="color:#A6ACCD;">缩放，定位，倾斜，动画，多背景</span></span>
<span class="line"><span style="color:#A6ACCD;">例如：transform:\\scale(0.85,0.90)\\translate(0px,-30px)\\skew(-9deg,0deg)\\Animation:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">新增各种CSS选择器	（:not(.input)：所有class不是“input”的节点）</span></span>
<span class="line"><span style="color:#abb2bf;">圆角		（border-radius:8px）</span></span>
<span class="line"><span style="color:#abb2bf;">多列布局	（multi-column layout）</span></span>
<span class="line"><span style="color:#abb2bf;">阴影和反射	（Shadow\\Reflect）</span></span>
<span class="line"><span style="color:#abb2bf;">文字特效		（text-shadow）</span></span>
<span class="line"><span style="color:#abb2bf;">文字渲染		（Text-decoration）</span></span>
<span class="line"><span style="color:#abb2bf;">线性渐变		（gradient）</span></span>
<span class="line"><span style="color:#abb2bf;">旋转			（transform）</span></span>
<span class="line"><span style="color:#abb2bf;">缩放，定位，倾斜，动画，多背景</span></span>
<span class="line"><span style="color:#abb2bf;">例如：transform:\\scale(0.85,0.90)\\translate(0px,-30px)\\skew(-9deg,0deg)\\Animation:</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_13-请解释一下-css3-的-flex-box-弹性盒布局模型-以及适用场景" tabindex="-1">13.请解释一下 CSS3 的 Flex box（弹性盒布局模型），以及适用场景？ <a class="header-anchor" href="#_13-请解释一下-css3-的-flex-box-弹性盒布局模型-以及适用场景" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Flex是FlexibleBox的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">任何一个容器都可以指定为Flex布局。行内元素也可以使用Flex布局。注意，设为Flex布局以后，子元素的float、cl</span></span>
<span class="line"><span style="color:#A6ACCD;">ear和vertical-align属性将失效。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">采用Flex布局的元素，称为Flex容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为Flex</span></span>
<span class="line"><span style="color:#A6ACCD;">项目（flex item），简称&quot;项目&quot;。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis），项目默认沿主轴排列。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">以下6个属性设置在容器上。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">flex-direction属性决定主轴的方向（即项目的排列方向）。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">flex-wrap属性定义，如果一条轴线排不下，如何换行。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">justify-content属性定义了项目在主轴上的对齐方式。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">align-items属性定义项目在交叉轴上如何对齐。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">以下6个属性设置在项目上。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认</span></span>
<span class="line"><span style="color:#A6ACCD;">值为auto，即项目的本来大小。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的align-items属性，如果没有父元素，则等同于stretch。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">Flex是FlexibleBox的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">任何一个容器都可以指定为Flex布局。行内元素也可以使用Flex布局。注意，设为Flex布局以后，子元素的float、cl</span></span>
<span class="line"><span style="color:#abb2bf;">ear和vertical-align属性将失效。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">采用Flex布局的元素，称为Flex容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为Flex</span></span>
<span class="line"><span style="color:#abb2bf;">项目（flex item），简称&quot;项目&quot;。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis），项目默认沿主轴排列。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">以下6个属性设置在容器上。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">flex-direction属性决定主轴的方向（即项目的排列方向）。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">flex-wrap属性定义，如果一条轴线排不下，如何换行。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">justify-content属性定义了项目在主轴上的对齐方式。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">align-items属性定义项目在交叉轴上如何对齐。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">以下6个属性设置在项目上。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认</span></span>
<span class="line"><span style="color:#abb2bf;">值为auto，即项目的本来大小。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父</span></span>
<span class="line"><span style="color:#abb2bf;">元素的align-items属性，如果没有父元素，则等同于stretch。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">flex布局是CSS3新增的一种布局方式，我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex</span></span>
<span class="line"><span style="color:#A6ACCD;">容器，它的所有子元素都会成为它的项目。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。我们可以使用flex-direction来指定主轴的方向。</span></span>
<span class="line"><span style="color:#A6ACCD;">我们可以使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴上的排列方式。还</span></span>
<span class="line"><span style="color:#A6ACCD;">可以使用flex-wrap来规定当一行排列不下时的换行方式。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">对于容器中的项目，我们可以使用order属性来指定项目的排列顺序，还可以使用flex-grow来指定当排列空间有剩余的时候，</span></span>
<span class="line"><span style="color:#A6ACCD;">项目的放大比例。还可以使用flex-shrink来指定当排列空间不足时，项目的缩小比例。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">flex布局是CSS3新增的一种布局方式，我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex</span></span>
<span class="line"><span style="color:#abb2bf;">容器，它的所有子元素都会成为它的项目。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。我们可以使用flex-direction来指定主轴的方向。</span></span>
<span class="line"><span style="color:#abb2bf;">我们可以使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴上的排列方式。还</span></span>
<span class="line"><span style="color:#abb2bf;">可以使用flex-wrap来规定当一行排列不下时的换行方式。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">对于容器中的项目，我们可以使用order属性来指定项目的排列顺序，还可以使用flex-grow来指定当排列空间有剩余的时候，</span></span>
<span class="line"><span style="color:#abb2bf;">项目的放大比例。还可以使用flex-shrink来指定当排列空间不足时，项目的缩小比例。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noreferrer">《Flex 布局教程：语法篇》</a><a href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html" target="_blank" rel="noreferrer">《Flex 布局教程：实例篇》</a></p><h4 id="_14-用纯-css-创建一个三角形的原理是什么" tabindex="-1">14.用纯 CSS 创建一个三角形的原理是什么？ <a class="header-anchor" href="#_14-用纯-css-创建一个三角形的原理是什么" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">采用的是相邻边框连接处的均分原理。</span></span>
<span class="line"><span style="color:#A6ACCD;">  将元素的宽高设为0，只设置</span></span>
<span class="line"><span style="color:#A6ACCD;">  border</span></span>
<span class="line"><span style="color:#A6ACCD;">  ，把任意三条边隐藏掉（颜色设为</span></span>
<span class="line"><span style="color:#A6ACCD;">  transparent），剩下的就是一个三角形。</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">demo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transparent transparent red transparent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#C678DD;">采用的是相邻边框连接处的均分原理。</span></span>
<span class="line"><span style="color:#C678DD;">  将元素的宽高设为0，只设置</span></span>
<span class="line"><span style="color:#C678DD;">  border</span></span>
<span class="line"><span style="color:#C678DD;">  ，把任意三条边隐藏掉（颜色设为</span></span>
<span class="line"><span style="color:#C678DD;">  transparent），剩下的就是一个三角形。</span></span>
<span class="line"><span style="color:#C678DD;">  </span><span style="color:#61AFEF;">#demo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-width: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-style: </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-color: </span><span style="color:#D19A66;">transparent</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">transparent</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">transparent</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="_15-一个满屏品字布局如何设计" tabindex="-1">15.一个满屏品字布局如何设计? <a class="header-anchor" href="#_15-一个满屏品字布局如何设计" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">简单的方式：</span></span>
<span class="line"><span style="color:#A6ACCD;">	上面的div宽100%，</span></span>
<span class="line"><span style="color:#A6ACCD;">	下面的两个div分别宽50%，</span></span>
<span class="line"><span style="color:#A6ACCD;">	然后用float或者inline使其不换行即可</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">简单的方式：</span></span>
<span class="line"><span style="color:#abb2bf;">	上面的div宽100%，</span></span>
<span class="line"><span style="color:#abb2bf;">	下面的两个div分别宽50%，</span></span>
<span class="line"><span style="color:#abb2bf;">	然后用float或者inline使其不换行即可</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_16-css-多列等高如何实现" tabindex="-1">16.CSS 多列等高如何实现？ <a class="header-anchor" href="#_16-css-多列等高如何实现" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）利用padding-bottom|margin-bottom正负值相抵，不会影响页面布局的特点。设置父容器设置超出隐藏（overflow:</span></span>
<span class="line"><span style="color:#A6ACCD;">hidden），这样父容器的高度就还是它里面的列没有设定padding-bottom时的高度，当它里面的任一列高度增加了，则</span></span>
<span class="line"><span style="color:#A6ACCD;">父容器的高度被撑到里面最高那列的高度，其他比这列矮的列会用它们的padding-bottom补偿这部分高度差。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）利用table-cell所有单元格高度都相等的特性，来实现多列等高。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）利用flex布局中项目align-items属性默认为stretch，如果项目未设置高度或设为auto，将占满整个容器的高度</span></span>
<span class="line"><span style="color:#A6ACCD;">的特性，来实现多列等高。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）利用padding-bottom|margin-bottom正负值相抵，不会影响页面布局的特点。设置父容器设置超出隐藏（overflow:</span></span>
<span class="line"><span style="color:#abb2bf;">hidden），这样父容器的高度就还是它里面的列没有设定padding-bottom时的高度，当它里面的任一列高度增加了，则</span></span>
<span class="line"><span style="color:#abb2bf;">父容器的高度被撑到里面最高那列的高度，其他比这列矮的列会用它们的padding-bottom补偿这部分高度差。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）利用table-cell所有单元格高度都相等的特性，来实现多列等高。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）利用flex布局中项目align-items属性默认为stretch，如果项目未设置高度或设为auto，将占满整个容器的高度</span></span>
<span class="line"><span style="color:#abb2bf;">的特性，来实现多列等高。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://juejin.im/post/5b0fb34151882515662238fd" target="_blank" rel="noreferrer">《前端应该掌握的 CSS 实现多列等高布局》</a><a href="https://codepen.io/yangbo5207/post/equh" target="_blank" rel="noreferrer">《CSS：多列等高布局》</a></p><h4 id="_17-经常遇到的浏览器的兼容性有哪些-原因-解决方法是什么-常用-hack-的技巧" tabindex="-1">17.经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧？ <a class="header-anchor" href="#_17-经常遇到的浏览器的兼容性有哪些-原因-解决方法是什么-常用-hack-的技巧" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）png24位的图片在iE6浏览器上出现背景</span></span>
<span class="line"><span style="color:#A6ACCD;">解决方案：做成PNG8，也可以引用一段脚本处理。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）浏览器默认的margin和padding不同</span></span>
<span class="line"><span style="color:#A6ACCD;">解决方案：加一个全局的*{margin:0;padding:0;}来统一。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或</span></span>
<span class="line"><span style="color:#A6ACCD;">margin-right，margin值会加倍。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#box{float:left;width:10px;margin:0 0 0 10px;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这种情况之下IE会产生20px的距离</span></span>
<span class="line"><span style="color:#A6ACCD;">解决方案：在float的标签样式控制中加入_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）渐进识别的方式，从总体中逐渐排除局部。</span></span>
<span class="line"><span style="color:#A6ACCD;">首先，巧妙的使用&quot;\\9&quot;这一标记，将IE游览器从所有情况中分离出来。</span></span>
<span class="line"><span style="color:#A6ACCD;">接着，再次使用&quot;+&quot;将IE8和IE7、IE6分离开来，这样IE8已经独立识别。</span></span>
<span class="line"><span style="color:#A6ACCD;">.bb{</span></span>
<span class="line"><span style="color:#A6ACCD;">background-color:#f1ee18;/*所有识别*/</span></span>
<span class="line"><span style="color:#A6ACCD;">.background-color:#00deff\\9;/*IE6、7、8识别*/</span></span>
<span class="line"><span style="color:#A6ACCD;">+background-color:#a200ff;/*IE6、7识别*/</span></span>
<span class="line"><span style="color:#A6ACCD;">_background-color:#1e0bd1;/*IE6识别*/</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用getAttribute()获取自定义</span></span>
<span class="line"><span style="color:#A6ACCD;">属性；Firefox下，只能使用getAttribute()获取自定义属性</span></span>
<span class="line"><span style="color:#A6ACCD;">解决方法：统一通过getAttribute()获取自定义属性。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）IE下，event对象有x、y属性，但是没有pageX、pageY属性;Firefox下，event对象有</span></span>
<span class="line"><span style="color:#A6ACCD;">pageX、pageY属性，但是没有x、y属性。</span></span>
<span class="line"><span style="color:#A6ACCD;">解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（7）Chrome中文界面下默认会将小于12px的文本强制按照12px显示</span></span>
<span class="line"><span style="color:#A6ACCD;">解决方法：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1.可通过加入CSS属性-webkit-text-size-adjust:none;解决。但是，在chrome</span></span>
<span class="line"><span style="color:#A6ACCD;">更新到27版本之后就不可以用了。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2.还可以使用-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);</span></span>
<span class="line"><span style="color:#A6ACCD;">收缩的是整个span的大小，这时候，必须要将span转换成块元素，可以使用display：block/inline-block/...；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（8）超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了</span></span>
<span class="line"><span style="color:#A6ACCD;">解决方法：改变CSS属性的排列顺序L-V-H-A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（9）怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模</span></span>
<span class="line"><span style="color:#A6ACCD;">式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）png24位的图片在iE6浏览器上出现背景</span></span>
<span class="line"><span style="color:#abb2bf;">解决方案：做成PNG8，也可以引用一段脚本处理。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）浏览器默认的margin和padding不同</span></span>
<span class="line"><span style="color:#abb2bf;">解决方案：加一个全局的*{margin:0;padding:0;}来统一。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或</span></span>
<span class="line"><span style="color:#abb2bf;">margin-right，margin值会加倍。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#box{float:left;width:10px;margin:0 0 0 10px;}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">这种情况之下IE会产生20px的距离</span></span>
<span class="line"><span style="color:#abb2bf;">解决方案：在float的标签样式控制中加入_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）渐进识别的方式，从总体中逐渐排除局部。</span></span>
<span class="line"><span style="color:#abb2bf;">首先，巧妙的使用&quot;\\9&quot;这一标记，将IE游览器从所有情况中分离出来。</span></span>
<span class="line"><span style="color:#abb2bf;">接着，再次使用&quot;+&quot;将IE8和IE7、IE6分离开来，这样IE8已经独立识别。</span></span>
<span class="line"><span style="color:#abb2bf;">.bb{</span></span>
<span class="line"><span style="color:#abb2bf;">background-color:#f1ee18;/*所有识别*/</span></span>
<span class="line"><span style="color:#abb2bf;">.background-color:#00deff\\9;/*IE6、7、8识别*/</span></span>
<span class="line"><span style="color:#abb2bf;">+background-color:#a200ff;/*IE6、7识别*/</span></span>
<span class="line"><span style="color:#abb2bf;">_background-color:#1e0bd1;/*IE6识别*/</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用getAttribute()获取自定义</span></span>
<span class="line"><span style="color:#abb2bf;">属性；Firefox下，只能使用getAttribute()获取自定义属性</span></span>
<span class="line"><span style="color:#abb2bf;">解决方法：统一通过getAttribute()获取自定义属性。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）IE下，event对象有x、y属性，但是没有pageX、pageY属性;Firefox下，event对象有</span></span>
<span class="line"><span style="color:#abb2bf;">pageX、pageY属性，但是没有x、y属性。</span></span>
<span class="line"><span style="color:#abb2bf;">解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（7）Chrome中文界面下默认会将小于12px的文本强制按照12px显示</span></span>
<span class="line"><span style="color:#abb2bf;">解决方法：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">1.可通过加入CSS属性-webkit-text-size-adjust:none;解决。但是，在chrome</span></span>
<span class="line"><span style="color:#abb2bf;">更新到27版本之后就不可以用了。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">2.还可以使用-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);</span></span>
<span class="line"><span style="color:#abb2bf;">收缩的是整个span的大小，这时候，必须要将span转换成块元素，可以使用display：block/inline-block/...；</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（8）超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了</span></span>
<span class="line"><span style="color:#abb2bf;">解决方法：改变CSS属性的排列顺序L-V-H-A</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（9）怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模</span></span>
<span class="line"><span style="color:#abb2bf;">式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_18-li-与-li-之间有看不见的空白间隔是什么原因引起的-有什么解决办法" tabindex="-1"><a href="http://18.li" target="_blank" rel="noreferrer">18.li</a> 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？ <a class="header-anchor" href="#_18-li-与-li-之间有看不见的空白间隔是什么原因引起的-有什么解决办法" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">浏览器会把inline元素间的空白字符（空格、换行、Tab等）渲染成一个空格。而为了美观。我们通常是一个&lt;li&gt;放在一行，</span></span>
<span class="line"><span style="color:#A6ACCD;">这导致&lt;li&gt;换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">解决办法：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）为&lt;li&gt;设置float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）将所有&lt;li&gt;写在同一行。不足：代码不美观。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）将&lt;ul&gt;内的字符尺寸直接设为0，即font-size:0。不足：&lt;ul&gt;中的其他字符尺寸也被设为0，需要额外重新设定其他</span></span>
<span class="line"><span style="color:#A6ACCD;">字符尺寸，且在Safari浏览器依然会出现空白间隔。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）消除&lt;ul&gt;的字符间隔letter-spacing:-8px，不足：这也设置了&lt;li&gt;内的字符间隔，因此需要将&lt;li&gt;内的字符</span></span>
<span class="line"><span style="color:#A6ACCD;">间隔设为默认letter-spacing:normal。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">浏览器会把inline元素间的空白字符（空格、换行、Tab等）渲染成一个空格。而为了美观。我们通常是一个&lt;li&gt;放在一行，</span></span>
<span class="line"><span style="color:#abb2bf;">这导致&lt;li&gt;换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">解决办法：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）为&lt;li&gt;设置float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）将所有&lt;li&gt;写在同一行。不足：代码不美观。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）将&lt;ul&gt;内的字符尺寸直接设为0，即font-size:0。不足：&lt;ul&gt;中的其他字符尺寸也被设为0，需要额外重新设定其他</span></span>
<span class="line"><span style="color:#abb2bf;">字符尺寸，且在Safari浏览器依然会出现空白间隔。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）消除&lt;ul&gt;的字符间隔letter-spacing:-8px，不足：这也设置了&lt;li&gt;内的字符间隔，因此需要将&lt;li&gt;内的字符</span></span>
<span class="line"><span style="color:#abb2bf;">间隔设为默认letter-spacing:normal。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://blog.csdn.net/sjinsa/article/details/70919546" target="_blank" rel="noreferrer">《li 与 li 之间有看不见的空白间隔是什么原因引起的？》</a></p><h4 id="_19-为什么要初始化-css-样式" tabindex="-1">19.为什么要初始化 CSS 样式？ <a class="header-anchor" href="#_19-为什么要初始化-css-样式" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">-因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">最简单的初始化方法：*{padding:0;margin:0;}（强烈不建议）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">淘宝的样式初始化代码：</span></span>
<span class="line"><span style="color:#A6ACCD;">body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend</span></span>
<span class="line"><span style="color:#A6ACCD;">,button,input,textarea,th,td{margin:0;padding:0;}</span></span>
<span class="line"><span style="color:#A6ACCD;">body,button,input,select,textarea{font:12px/1.5tahoma,arial,\\5b8b\\4f53;}</span></span>
<span class="line"><span style="color:#A6ACCD;">h1,h2,h3,h4,h5,h6{font-size:100%;}</span></span>
<span class="line"><span style="color:#A6ACCD;">address,cite,dfn,em,var{font-style:normal;}</span></span>
<span class="line"><span style="color:#A6ACCD;">code,kbd,pre,samp{font-family:couriernew,courier,monospace;}</span></span>
<span class="line"><span style="color:#A6ACCD;">small{font-size:12px;}</span></span>
<span class="line"><span style="color:#A6ACCD;">ul,ol{list-style:none;}</span></span>
<span class="line"><span style="color:#A6ACCD;">a{text-decoration:none;}</span></span>
<span class="line"><span style="color:#A6ACCD;">a:hover{text-decoration:underline;}</span></span>
<span class="line"><span style="color:#A6ACCD;">sup{vertical-align:text-top;}</span></span>
<span class="line"><span style="color:#A6ACCD;">sub{vertical-align:text-bottom;}</span></span>
<span class="line"><span style="color:#A6ACCD;">legend{color:#000;}</span></span>
<span class="line"><span style="color:#A6ACCD;">fieldset,img{border:0;}</span></span>
<span class="line"><span style="color:#A6ACCD;">button,input,select,textarea{font-size:100%;}</span></span>
<span class="line"><span style="color:#A6ACCD;">table{border-collapse:collapse;border-spacing:0;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">-因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">-当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">最简单的初始化方法：*{padding:0;margin:0;}（强烈不建议）</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">淘宝的样式初始化代码：</span></span>
<span class="line"><span style="color:#abb2bf;">body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend</span></span>
<span class="line"><span style="color:#abb2bf;">,button,input,textarea,th,td{margin:0;padding:0;}</span></span>
<span class="line"><span style="color:#abb2bf;">body,button,input,select,textarea{font:12px/1.5tahoma,arial,\\5b8b\\4f53;}</span></span>
<span class="line"><span style="color:#abb2bf;">h1,h2,h3,h4,h5,h6{font-size:100%;}</span></span>
<span class="line"><span style="color:#abb2bf;">address,cite,dfn,em,var{font-style:normal;}</span></span>
<span class="line"><span style="color:#abb2bf;">code,kbd,pre,samp{font-family:couriernew,courier,monospace;}</span></span>
<span class="line"><span style="color:#abb2bf;">small{font-size:12px;}</span></span>
<span class="line"><span style="color:#abb2bf;">ul,ol{list-style:none;}</span></span>
<span class="line"><span style="color:#abb2bf;">a{text-decoration:none;}</span></span>
<span class="line"><span style="color:#abb2bf;">a:hover{text-decoration:underline;}</span></span>
<span class="line"><span style="color:#abb2bf;">sup{vertical-align:text-top;}</span></span>
<span class="line"><span style="color:#abb2bf;">sub{vertical-align:text-bottom;}</span></span>
<span class="line"><span style="color:#abb2bf;">legend{color:#000;}</span></span>
<span class="line"><span style="color:#abb2bf;">fieldset,img{border:0;}</span></span>
<span class="line"><span style="color:#abb2bf;">button,input,select,textarea{font-size:100%;}</span></span>
<span class="line"><span style="color:#abb2bf;">table{border-collapse:collapse;border-spacing:0;}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_20-什么是包含块-对于包含块的理解" tabindex="-1">20.什么是包含块，对于包含块的理解? <a class="header-anchor" href="#_20-什么是包含块-对于包含块的理解" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">包含块（containing block）就是元素用来计算和定位的一个框。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）根元素（很多场景下可以看成是&lt;html&gt;）被称为“初始包含块”，其尺寸等同于浏览器可视窗口的大小。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）对于其他元素，如果该元素的position是relative或者static，则“包含块”由其最近的块容器祖先盒的content box</span></span>
<span class="line"><span style="color:#A6ACCD;">边界形成。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）如果元素position:fixed，则“包含块”是“初始包含块”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）如果元素position:absolute，则“包含块”由最近的position不为static的祖先元素建立，具体方式如下：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果该祖先元素是纯inline元素，则规则略复杂：</span></span>
<span class="line"><span style="color:#A6ACCD;">•假设给内联元素的前后各生成一个宽度为0的内联盒子（inline box），则这两个内联盒子的padding box外面的包</span></span>
<span class="line"><span style="color:#A6ACCD;">围盒就是内联元素的“包含块”；</span></span>
<span class="line"><span style="color:#A6ACCD;">•如果该内联元素被跨行分割了，那么“包含块”是未定义的，也就是CSS2.1规范并没有明确定义，浏览器自行发挥</span></span>
<span class="line"><span style="color:#A6ACCD;">否则，“包含块”由该祖先的padding box边界形成。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果没有符合条件的祖先元素，则“包含块”是“初始包含块”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">包含块（containing block）就是元素用来计算和定位的一个框。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）根元素（很多场景下可以看成是&lt;html&gt;）被称为“初始包含块”，其尺寸等同于浏览器可视窗口的大小。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）对于其他元素，如果该元素的position是relative或者static，则“包含块”由其最近的块容器祖先盒的content box</span></span>
<span class="line"><span style="color:#abb2bf;">边界形成。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）如果元素position:fixed，则“包含块”是“初始包含块”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）如果元素position:absolute，则“包含块”由最近的position不为static的祖先元素建立，具体方式如下：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">如果该祖先元素是纯inline元素，则规则略复杂：</span></span>
<span class="line"><span style="color:#abb2bf;">•假设给内联元素的前后各生成一个宽度为0的内联盒子（inline box），则这两个内联盒子的padding box外面的包</span></span>
<span class="line"><span style="color:#abb2bf;">围盒就是内联元素的“包含块”；</span></span>
<span class="line"><span style="color:#abb2bf;">•如果该内联元素被跨行分割了，那么“包含块”是未定义的，也就是CSS2.1规范并没有明确定义，浏览器自行发挥</span></span>
<span class="line"><span style="color:#abb2bf;">否则，“包含块”由该祖先的padding box边界形成。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">如果没有符合条件的祖先元素，则“包含块”是“初始包含块”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_21-css-里的-visibility-属性有个-collapse-属性值是干嘛用的-在不同浏览器下以后什么区别" tabindex="-1">21.CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？ <a class="header-anchor" href="#_21-css-里的-visibility-属性有个-collapse-属性值是干嘛用的-在不同浏览器下以后什么区别" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）对于一般的元素，它的表现跟visibility：hidden;是一样的。元素是不可见的，但此时仍占用页面空间。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）但例外的是，如果这个元素是table相关的元素，例如table行，table group，table列，table column group，它的</span></span>
<span class="line"><span style="color:#A6ACCD;">表现却跟display:none一样，也就是说，它们占用的空间也会释放。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">在不同浏览器下的区别：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位</span></span>
<span class="line"><span style="color:#A6ACCD;">置。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）对于一般的元素，它的表现跟visibility：hidden;是一样的。元素是不可见的，但此时仍占用页面空间。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）但例外的是，如果这个元素是table相关的元素，例如table行，table group，table列，table column group，它的</span></span>
<span class="line"><span style="color:#abb2bf;">表现却跟display:none一样，也就是说，它们占用的空间也会释放。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">在不同浏览器下的区别：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位</span></span>
<span class="line"><span style="color:#abb2bf;">置。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="http://www.webhek.com/post/visibility-collapse.html" target="_blank" rel="noreferrer">《CSS 里的 visibility 属性有个鲜为人知的属性值：collapse》</a></p><h4 id="_22-width-auto-和-width-100-的区别" tabindex="-1">22.width:auto 和 width:100%的区别 <a class="header-anchor" href="#_22-width-auto-和-width-100-的区别" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">一般而言</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">width:100%会使元素box的宽度等于父元素的content box的宽度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">一般而言</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">width:100%会使元素box的宽度等于父元素的content box的宽度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_23-绝对定位元素与非绝对定位元素的百分比计算的区别" tabindex="-1">23.绝对定位元素与非绝对定位元素的百分比计算的区别 <a class="header-anchor" href="#_23-绝对定位元素与非绝对定位元素的百分比计算的区别" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">绝对定位元素的宽高百分比是相对于临近的position不为static的祖先元素的padding box来计算的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">非绝对定位元素的宽高百分比则是相对于父元素的content box来计算的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">绝对定位元素的宽高百分比是相对于临近的position不为static的祖先元素的padding box来计算的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">非绝对定位元素的宽高百分比则是相对于父元素的content box来计算的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_24-简单介绍使用图片-base64-编码的优点和缺点。" tabindex="-1">24.简单介绍使用图片 base64 编码的优点和缺点。 <a class="header-anchor" href="#_24-简单介绍使用图片-base64-编码的优点和缺点。" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">base64编码是一种图片处理格式，通过特定的算法将图片编码成一长串字符串，在页面上显示的时候，可以用该字符串来代替图片的</span></span>
<span class="line"><span style="color:#A6ACCD;">url属性。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">使用base64的优点是：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）减少一个图片的HTTP请求</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">使用base64的缺点是：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）根据base64的编码原理，编码后的大小会比原文件大小大1/3，如果把大图片编码到html/css中，不仅会造成文件体</span></span>
<span class="line"><span style="color:#A6ACCD;">积的增加，影响文件的加载速度，还会增加浏览器对html或css文件解析渲染的时间。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）使用base64无法直接缓存，要缓存只能缓存包含base64的文件，比如HTML或者CSS，这相比域直接缓存图片的效果要</span></span>
<span class="line"><span style="color:#A6ACCD;">差很多。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）兼容性的问题，ie8以前的浏览器不支持。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一般一些网站的小图标可以使用base64图片来引入。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">base64编码是一种图片处理格式，通过特定的算法将图片编码成一长串字符串，在页面上显示的时候，可以用该字符串来代替图片的</span></span>
<span class="line"><span style="color:#abb2bf;">url属性。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">使用base64的优点是：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）减少一个图片的HTTP请求</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">使用base64的缺点是：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）根据base64的编码原理，编码后的大小会比原文件大小大1/3，如果把大图片编码到html/css中，不仅会造成文件体</span></span>
<span class="line"><span style="color:#abb2bf;">积的增加，影响文件的加载速度，还会增加浏览器对html或css文件解析渲染的时间。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）使用base64无法直接缓存，要缓存只能缓存包含base64的文件，比如HTML或者CSS，这相比域直接缓存图片的效果要</span></span>
<span class="line"><span style="color:#abb2bf;">差很多。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）兼容性的问题，ie8以前的浏览器不支持。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">一般一些网站的小图标可以使用base64图片来引入。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.cnblogs.com/coco1s/p/4375774.html" target="_blank" rel="noreferrer">《玩转图片 base64 编码》</a><a href="https://www.zhihu.com/question/31155574" target="_blank" rel="noreferrer">《前端开发中，使用 base64 图片的弊端是什么？》</a><a href="https://www.zhangxinxu.com/wordpress/2012/04/base64-url-image-%E5%9B%BE%E7%89%87-%E9%A1%B5%E9%9D%A2%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/" target="_blank" rel="noreferrer">《小 tip:base64:URL 背景图片与 web 页面性能优化》</a></p><h4 id="_25-display-、-position-和-float-的相互关系" tabindex="-1">25.&#39;display&#39;、&#39;position&#39;和&#39;float&#39;的相互关系？ <a class="header-anchor" href="#_25-display-、-position-和-float-的相互关系" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）首先我们判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）然后判断position的值是否为absolute或者fixed，如果是，则float属性失效，并且display的值应该被</span></span>
<span class="line"><span style="color:#A6ACCD;">设置为table或者block，具体转换需要看初始转换值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）如果position的值不为absolute或者fixed，则判断float属性的值是否为none，如果不是，则display</span></span>
<span class="line"><span style="color:#A6ACCD;">的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对</span></span>
<span class="line"><span style="color:#A6ACCD;">于浮动后的最终位置定位。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，</span></span>
<span class="line"><span style="color:#A6ACCD;">则保持指定的display属性值不变。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">总的来说，可以把它看作是一个类似优先级的机制，&quot;position:absolute&quot;和&quot;position:fixed&quot;优先级最高，有它存在</span></span>
<span class="line"><span style="color:#A6ACCD;">的时候，浮动不起作用，&#39;display&#39;的值也需要调整；其次，元素的&#39;float&#39;特性的值不是&quot;none&quot;的时候或者它是根元素</span></span>
<span class="line"><span style="color:#A6ACCD;">的时候，调整&#39;display&#39;的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，&#39;display&#39;特性值同设置值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）首先我们判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）然后判断position的值是否为absolute或者fixed，如果是，则float属性失效，并且display的值应该被</span></span>
<span class="line"><span style="color:#abb2bf;">设置为table或者block，具体转换需要看初始转换值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）如果position的值不为absolute或者fixed，则判断float属性的值是否为none，如果不是，则display</span></span>
<span class="line"><span style="color:#abb2bf;">的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对</span></span>
<span class="line"><span style="color:#abb2bf;">于浮动后的最终位置定位。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，</span></span>
<span class="line"><span style="color:#abb2bf;">则保持指定的display属性值不变。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">总的来说，可以把它看作是一个类似优先级的机制，&quot;position:absolute&quot;和&quot;position:fixed&quot;优先级最高，有它存在</span></span>
<span class="line"><span style="color:#abb2bf;">的时候，浮动不起作用，&#39;display&#39;的值也需要调整；其次，元素的&#39;float&#39;特性的值不是&quot;none&quot;的时候或者它是根元素</span></span>
<span class="line"><span style="color:#abb2bf;">的时候，调整&#39;display&#39;的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，&#39;display&#39;特性值同设置值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.cnblogs.com/jackyWHJ/p/3756087.html" target="_blank" rel="noreferrer">《position 跟 display、margincollapse、overflow、float 这些特性相互叠加后会怎么样？》</a></p><h4 id="_26-margin-重叠问题的理解。" tabindex="-1">26.margin 重叠问题的理解。 <a class="header-anchor" href="#_26-margin-重叠问题的理解。" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">块级元素的上外边距（margin-top）与下外边距（margin-bottom）有时会合并为单个外边距，这样的现象称为“margin合</span></span>
<span class="line"><span style="color:#A6ACCD;">并”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">产生折叠的必备条件：margin必须是邻接的!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">而根据w3c规范，两个margin是邻接的必须满足以下条件：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">•必须是处于常规文档流（非float和绝对定位）的块级盒子，并且处于同一个BFC当中。</span></span>
<span class="line"><span style="color:#A6ACCD;">•没有线盒，没有空隙，没有padding和border将他们分隔开</span></span>
<span class="line"><span style="color:#A6ACCD;">•都属于垂直方向上相邻的外边距，可以是下面任意一种情况</span></span>
<span class="line"><span style="color:#A6ACCD;">•元素的margin-top与其第一个常规文档流的子元素的margin-top</span></span>
<span class="line"><span style="color:#A6ACCD;">•元素的margin-bottom与其下一个常规文档流的兄弟元素的margin-top</span></span>
<span class="line"><span style="color:#A6ACCD;">•height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom</span></span>
<span class="line"><span style="color:#A6ACCD;">•高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top</span></span>
<span class="line"><span style="color:#A6ACCD;">和margin-bottom</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">margin合并的3种场景：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）相邻兄弟元素margin合并。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">解决办法：</span></span>
<span class="line"><span style="color:#A6ACCD;">•设置块状格式化上下文元素（BFC）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）父级和第一个/最后一个子元素的margin合并。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">解决办法：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">对于margin-top合并，可以进行如下操作（满足一个条件即可）：</span></span>
<span class="line"><span style="color:#A6ACCD;">•父元素设置为块状格式化上下文元素；</span></span>
<span class="line"><span style="color:#A6ACCD;">•父元素设置border-top值；</span></span>
<span class="line"><span style="color:#A6ACCD;">•父元素设置padding-top值；</span></span>
<span class="line"><span style="color:#A6ACCD;">•父元素和第一个子元素之间添加内联元素进行分隔。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">对于margin-bottom合并，可以进行如下操作（满足一个条件即可）：</span></span>
<span class="line"><span style="color:#A6ACCD;">•父元素设置为块状格式化上下文元素；</span></span>
<span class="line"><span style="color:#A6ACCD;">•父元素设置border-bottom值；</span></span>
<span class="line"><span style="color:#A6ACCD;">•父元素设置padding-bottom值；</span></span>
<span class="line"><span style="color:#A6ACCD;">•父元素和最后一个子元素之间添加内联元素进行分隔；</span></span>
<span class="line"><span style="color:#A6ACCD;">•父元素设置height、min-height或max-height。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）空块级元素的margin合并。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">解决办法：</span></span>
<span class="line"><span style="color:#A6ACCD;">•设置垂直方向的border；</span></span>
<span class="line"><span style="color:#A6ACCD;">•设置垂直方向的padding；</span></span>
<span class="line"><span style="color:#A6ACCD;">•里面添加内联元素（直接Space键空格是没用的）；</span></span>
<span class="line"><span style="color:#A6ACCD;">•设置height或者min-height。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">块级元素的上外边距（margin-top）与下外边距（margin-bottom）有时会合并为单个外边距，这样的现象称为“margin合</span></span>
<span class="line"><span style="color:#abb2bf;">并”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">产生折叠的必备条件：margin必须是邻接的!</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">而根据w3c规范，两个margin是邻接的必须满足以下条件：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">•必须是处于常规文档流（非float和绝对定位）的块级盒子，并且处于同一个BFC当中。</span></span>
<span class="line"><span style="color:#abb2bf;">•没有线盒，没有空隙，没有padding和border将他们分隔开</span></span>
<span class="line"><span style="color:#abb2bf;">•都属于垂直方向上相邻的外边距，可以是下面任意一种情况</span></span>
<span class="line"><span style="color:#abb2bf;">•元素的margin-top与其第一个常规文档流的子元素的margin-top</span></span>
<span class="line"><span style="color:#abb2bf;">•元素的margin-bottom与其下一个常规文档流的兄弟元素的margin-top</span></span>
<span class="line"><span style="color:#abb2bf;">•height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom</span></span>
<span class="line"><span style="color:#abb2bf;">•高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top</span></span>
<span class="line"><span style="color:#abb2bf;">和margin-bottom</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">margin合并的3种场景：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）相邻兄弟元素margin合并。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">解决办法：</span></span>
<span class="line"><span style="color:#abb2bf;">•设置块状格式化上下文元素（BFC）</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）父级和第一个/最后一个子元素的margin合并。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">解决办法：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">对于margin-top合并，可以进行如下操作（满足一个条件即可）：</span></span>
<span class="line"><span style="color:#abb2bf;">•父元素设置为块状格式化上下文元素；</span></span>
<span class="line"><span style="color:#abb2bf;">•父元素设置border-top值；</span></span>
<span class="line"><span style="color:#abb2bf;">•父元素设置padding-top值；</span></span>
<span class="line"><span style="color:#abb2bf;">•父元素和第一个子元素之间添加内联元素进行分隔。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">对于margin-bottom合并，可以进行如下操作（满足一个条件即可）：</span></span>
<span class="line"><span style="color:#abb2bf;">•父元素设置为块状格式化上下文元素；</span></span>
<span class="line"><span style="color:#abb2bf;">•父元素设置border-bottom值；</span></span>
<span class="line"><span style="color:#abb2bf;">•父元素设置padding-bottom值；</span></span>
<span class="line"><span style="color:#abb2bf;">•父元素和最后一个子元素之间添加内联元素进行分隔；</span></span>
<span class="line"><span style="color:#abb2bf;">•父元素设置height、min-height或max-height。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）空块级元素的margin合并。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">解决办法：</span></span>
<span class="line"><span style="color:#abb2bf;">•设置垂直方向的border；</span></span>
<span class="line"><span style="color:#abb2bf;">•设置垂直方向的padding；</span></span>
<span class="line"><span style="color:#abb2bf;">•里面添加内联元素（直接Space键空格是没用的）；</span></span>
<span class="line"><span style="color:#abb2bf;">•设置height或者min-height。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">margin重叠指的是在垂直方向上，两个相邻元素的margin发生重叠的情况。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一般来说可以分为四种情形：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">第一种是相邻兄弟元素的marin-bottom和margin-top的值发生重叠。这种情况下我们可以通过设置其中一个元素为BFC</span></span>
<span class="line"><span style="color:#A6ACCD;">来解决。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">第二种是父元素的margin-top和子元素的margin-top发生重叠。它们发生重叠是因为它们是相邻的，所以我们可以通过这</span></span>
<span class="line"><span style="color:#A6ACCD;">一点来解决这个问题。我们可以为父元素设置border-top、padding-top值来分隔它们，当然我们也可以将父元素设置为BFC</span></span>
<span class="line"><span style="color:#A6ACCD;">来解决。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">第三种是高度为auto的父元素的margin-bottom和子元素的margin-bottom发生重叠。它们发生重叠一个是因为它们相</span></span>
<span class="line"><span style="color:#A6ACCD;">邻，一个是因为父元素的高度不固定。因此我们可以为父元素设置border-bottom、padding-bottom来分隔它们，也可以为</span></span>
<span class="line"><span style="color:#A6ACCD;">父元素设置一个高度，max-height和min-height也能解决这个问题。当然将父元素设置为BFC是最简单的方法。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">第四种情况，是没有内容的元素，自身的margin-top和margin-bottom发生的重叠。我们可以通过为其设置border、pa</span></span>
<span class="line"><span style="color:#A6ACCD;">dding或者高度来解决这个问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">margin重叠指的是在垂直方向上，两个相邻元素的margin发生重叠的情况。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">一般来说可以分为四种情形：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">第一种是相邻兄弟元素的marin-bottom和margin-top的值发生重叠。这种情况下我们可以通过设置其中一个元素为BFC</span></span>
<span class="line"><span style="color:#abb2bf;">来解决。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">第二种是父元素的margin-top和子元素的margin-top发生重叠。它们发生重叠是因为它们是相邻的，所以我们可以通过这</span></span>
<span class="line"><span style="color:#abb2bf;">一点来解决这个问题。我们可以为父元素设置border-top、padding-top值来分隔它们，当然我们也可以将父元素设置为BFC</span></span>
<span class="line"><span style="color:#abb2bf;">来解决。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">第三种是高度为auto的父元素的margin-bottom和子元素的margin-bottom发生重叠。它们发生重叠一个是因为它们相</span></span>
<span class="line"><span style="color:#abb2bf;">邻，一个是因为父元素的高度不固定。因此我们可以为父元素设置border-bottom、padding-bottom来分隔它们，也可以为</span></span>
<span class="line"><span style="color:#abb2bf;">父元素设置一个高度，max-height和min-height也能解决这个问题。当然将父元素设置为BFC是最简单的方法。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">第四种情况，是没有内容的元素，自身的margin-top和margin-bottom发生的重叠。我们可以通过为其设置border、pa</span></span>
<span class="line"><span style="color:#abb2bf;">dding或者高度来解决这个问题。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_27-对-bfc-规范-块级格式化上下文-block-formatting-context-的理解" tabindex="-1">27.对 BFC 规范（块级格式化上下文：block formatting context）的理解？ <a class="header-anchor" href="#_27-对-bfc-规范-块级格式化上下文-block-formatting-context-的理解" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒</span></span>
<span class="line"><span style="color:#A6ACCD;">子的区域，也是浮动元素与其他元素的交互限定区域。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">通俗来讲</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">•BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。</span></span>
<span class="line"><span style="color:#A6ACCD;">•如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">创建BFC</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）根元素或包含根元素的元素</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）浮动元素float＝left|right或inherit（≠none）</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）绝对定位元素position＝absolute或fixed</span></span>
<span class="line"><span style="color:#A6ACCD;">（4）display＝inline-block|flex|inline-flex|table-cell或table-caption</span></span>
<span class="line"><span style="color:#A6ACCD;">（5）overflow＝hidden|auto或scroll(≠visible)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒</span></span>
<span class="line"><span style="color:#abb2bf;">子的区域，也是浮动元素与其他元素的交互限定区域。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">通俗来讲</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">•BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。</span></span>
<span class="line"><span style="color:#abb2bf;">•如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">创建BFC</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）根元素或包含根元素的元素</span></span>
<span class="line"><span style="color:#abb2bf;">（2）浮动元素float＝left|right或inherit（≠none）</span></span>
<span class="line"><span style="color:#abb2bf;">（3）绝对定位元素position＝absolute或fixed</span></span>
<span class="line"><span style="color:#abb2bf;">（4）display＝inline-block|flex|inline-flex|table-cell或table-caption</span></span>
<span class="line"><span style="color:#abb2bf;">（5）overflow＝hidden|auto或scroll(≠visible)</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">BFC指的是块级格式化上下文，一个元素形成了BFC之后，那么它内部元素产生的布局不会影响到外部元素，外部元素的布局也</span></span>
<span class="line"><span style="color:#A6ACCD;">不会影响到BFC中的内部元素。一个BFC就像是一个隔离区域，和其他区域互不影响。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一般来说根元素是一个BFC区域，浮动和绝对定位的元素也会形成BFC，display属性的值为inline-block、flex这些</span></span>
<span class="line"><span style="color:#A6ACCD;">属性时也会创建BFC。还有就是元素的overflow的值不为visible时都会创建BFC。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">BFC指的是块级格式化上下文，一个元素形成了BFC之后，那么它内部元素产生的布局不会影响到外部元素，外部元素的布局也</span></span>
<span class="line"><span style="color:#abb2bf;">不会影响到BFC中的内部元素。一个BFC就像是一个隔离区域，和其他区域互不影响。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">一般来说根元素是一个BFC区域，浮动和绝对定位的元素也会形成BFC，display属性的值为inline-block、flex这些</span></span>
<span class="line"><span style="color:#abb2bf;">属性时也会创建BFC。还有就是元素的overflow的值不为visible时都会创建BFC。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html" target="_blank" rel="noreferrer">《深入理解 BFC 和 MarginCollapse》</a><a href="https://segmentfault.com/a/1190000013647777" target="_blank" rel="noreferrer">《前端面试题-BFC（块格式化上下文）》</a></p><h4 id="_28-ifc-是什么" tabindex="-1">28.IFC 是什么？ <a class="header-anchor" href="#_28-ifc-是什么" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">IFC指的是行级格式化上下文，它有这样的一些布局规则：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）行级上下文内部的盒子会在水平方向，一个接一个地放置。</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）当一行不够的时候会自动切换到下一行。</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）行级上下文的高度由内部最高的内联盒子的高度决定。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">IFC指的是行级格式化上下文，它有这样的一些布局规则：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）行级上下文内部的盒子会在水平方向，一个接一个地放置。</span></span>
<span class="line"><span style="color:#abb2bf;">（2）当一行不够的时候会自动切换到下一行。</span></span>
<span class="line"><span style="color:#abb2bf;">（3）行级上下文的高度由内部最高的内联盒子的高度决定。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://segmentfault.com/a/1190000004466536#articleHeader5" target="_blank" rel="noreferrer">《[译]:BFC 与 IFC》</a><a href="https://blog.csdn.net/paintandraw/article/details/80401741" target="_blank" rel="noreferrer">《BFC 和 IFC 的理解（布局）》</a></p><h4 id="_29-请解释一下为什么需要清除浮动-清除浮动的方式" tabindex="-1">29.请解释一下为什么需要清除浮动？清除浮动的方式 <a class="header-anchor" href="#_29-请解释一下为什么需要清除浮动-清除浮动的方式" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。浮动框不属于文档流中的普通流，当元素浮动之后，</span></span>
<span class="line"><span style="color:#A6ACCD;">不会影响块级元素的布局，只会影响内联元素布局。此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框</span></span>
<span class="line"><span style="color:#A6ACCD;">的高度小于浮动框的时候，此时就会出现“高度塌陷”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">清除浮动是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">清除浮动的方式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）使用clear属性清除浮动。参考28。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）使用BFC块级格式化上下文来清除浮动。参考26。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">因为BFC元素不会影响外部元素的特点，所以BFC元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元</span></span>
<span class="line"><span style="color:#A6ACCD;">素高度塌陷，必然会影响后面元素布局和定位，这显然有违BFC元素的子元素不会影响外部元素的设定。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。浮动框不属于文档流中的普通流，当元素浮动之后，</span></span>
<span class="line"><span style="color:#abb2bf;">不会影响块级元素的布局，只会影响内联元素布局。此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框</span></span>
<span class="line"><span style="color:#abb2bf;">的高度小于浮动框的时候，此时就会出现“高度塌陷”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">清除浮动是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">清除浮动的方式</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）使用clear属性清除浮动。参考28。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）使用BFC块级格式化上下文来清除浮动。参考26。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">因为BFC元素不会影响外部元素的特点，所以BFC元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元</span></span>
<span class="line"><span style="color:#abb2bf;">素高度塌陷，必然会影响后面元素布局和定位，这显然有违BFC元素的子元素不会影响外部元素的设定。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_30-使用-clear-属性清除浮动的原理" tabindex="-1">30.使用 clear 属性清除浮动的原理？ <a class="header-anchor" href="#_30-使用-clear-属性清除浮动的原理" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">使用clear属性清除浮动，其语法如下：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">clear:none|left|right|both</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果单看字面意思，clear:left应该是“清除左浮动”，clear:right应该是“清除右浮动”的意思，实际上，这种解释是有问</span></span>
<span class="line"><span style="color:#A6ACCD;">题的，因为浮动一直还在，并没有清除。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">官方对clear属性的解释是：“元素盒子的边不能和前面的浮动元素相邻。”，我们对元素设置clear属性是为了避免浮动元素</span></span>
<span class="line"><span style="color:#A6ACCD;">对该元素的影响，而不是清除掉浮动。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">还需要注意的一点是clear属性指的是元素盒子的边不能和前面的浮动元素相邻，注意这里“前面的”3个字，也就是clear属</span></span>
<span class="line"><span style="color:#A6ACCD;">性对“后面的”浮动元素是不闻不问的。考虑到float属性要么是left，要么是right，不可能同时存在，同时由于clear</span></span>
<span class="line"><span style="color:#A6ACCD;">属性对“后面的”浮动元素不闻不问，因此，当clear:left有效的时候，clear:right必定无效，也就是此时clear:left</span></span>
<span class="line"><span style="color:#A6ACCD;">等同于设置clear:both；同样地，clear:right如果有效也是等同于设置clear:both。由此可见，clear:left和cle</span></span>
<span class="line"><span style="color:#A6ACCD;">ar:right这两个声明就没有任何使用的价值，至少在CSS世界中是如此，直接使用clear:both吧。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一般使用伪元素的方式清除浮动</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.clear::after{</span></span>
<span class="line"><span style="color:#A6ACCD;">content:&#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">display:table;//也可以是&#39;block&#39;，或者是&#39;list-item&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">clear:both;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">clear属性只有块级元素才有效的，而::after等伪元素默认都是内联水平，这就是借助伪元素清除浮动影响时需要设置disp</span></span>
<span class="line"><span style="color:#A6ACCD;">lay属性值的原因。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">使用clear属性清除浮动，其语法如下：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">clear:none|left|right|both</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">如果单看字面意思，clear:left应该是“清除左浮动”，clear:right应该是“清除右浮动”的意思，实际上，这种解释是有问</span></span>
<span class="line"><span style="color:#abb2bf;">题的，因为浮动一直还在，并没有清除。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">官方对clear属性的解释是：“元素盒子的边不能和前面的浮动元素相邻。”，我们对元素设置clear属性是为了避免浮动元素</span></span>
<span class="line"><span style="color:#abb2bf;">对该元素的影响，而不是清除掉浮动。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">还需要注意的一点是clear属性指的是元素盒子的边不能和前面的浮动元素相邻，注意这里“前面的”3个字，也就是clear属</span></span>
<span class="line"><span style="color:#abb2bf;">性对“后面的”浮动元素是不闻不问的。考虑到float属性要么是left，要么是right，不可能同时存在，同时由于clear</span></span>
<span class="line"><span style="color:#abb2bf;">属性对“后面的”浮动元素不闻不问，因此，当clear:left有效的时候，clear:right必定无效，也就是此时clear:left</span></span>
<span class="line"><span style="color:#abb2bf;">等同于设置clear:both；同样地，clear:right如果有效也是等同于设置clear:both。由此可见，clear:left和cle</span></span>
<span class="line"><span style="color:#abb2bf;">ar:right这两个声明就没有任何使用的价值，至少在CSS世界中是如此，直接使用clear:both吧。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">一般使用伪元素的方式清除浮动</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">.clear::after{</span></span>
<span class="line"><span style="color:#abb2bf;">content:&#39;&#39;;</span></span>
<span class="line"><span style="color:#abb2bf;">display:table;//也可以是&#39;block&#39;，或者是&#39;list-item&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">clear:both;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">clear属性只有块级元素才有效的，而::after等伪元素默认都是内联水平，这就是借助伪元素清除浮动影响时需要设置disp</span></span>
<span class="line"><span style="color:#abb2bf;">lay属性值的原因。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_31-zoom-1-的清除浮动原理" tabindex="-1">31.zoom:1 的清除浮动原理? <a class="header-anchor" href="#_31-zoom-1-的清除浮动原理" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">清除浮动，触发hasLayout；</span></span>
<span class="line"><span style="color:#A6ACCD;">zoom属性是IE浏览器的专有属性，它可以设置或检索对象的缩放比例。解决ie下比较奇葩的bug。譬如外边距（margin）</span></span>
<span class="line"><span style="color:#A6ACCD;">的重叠，浮动清除，触发ie的haslayout属性等。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">来龙去脉大概如下：</span></span>
<span class="line"><span style="color:#A6ACCD;">当设置了zoom的值之后，所设置的元素就会就会扩大或者缩小，高度宽度就会重新计算了，这里一旦改变zoom值时其实也会发</span></span>
<span class="line"><span style="color:#A6ACCD;">生重新渲染，运用这个原理，也就解决了ie下子元素浮动时候父元素不随着自动扩大的问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">zoom属性是IE浏览器的专有属性，火狐和老版本的webkit核心的浏览器都不支持这个属性。然而，zoom现在已经被逐步标</span></span>
<span class="line"><span style="color:#A6ACCD;">准化，出现在CSS3.0规范草案中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">目前非ie由于不支持这个属性，它们又是通过什么属性来实现元素的缩放呢？可以通过css3里面的动画属性scale进行缩放。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">清除浮动，触发hasLayout；</span></span>
<span class="line"><span style="color:#abb2bf;">zoom属性是IE浏览器的专有属性，它可以设置或检索对象的缩放比例。解决ie下比较奇葩的bug。譬如外边距（margin）</span></span>
<span class="line"><span style="color:#abb2bf;">的重叠，浮动清除，触发ie的haslayout属性等。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">来龙去脉大概如下：</span></span>
<span class="line"><span style="color:#abb2bf;">当设置了zoom的值之后，所设置的元素就会就会扩大或者缩小，高度宽度就会重新计算了，这里一旦改变zoom值时其实也会发</span></span>
<span class="line"><span style="color:#abb2bf;">生重新渲染，运用这个原理，也就解决了ie下子元素浮动时候父元素不随着自动扩大的问题。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">zoom属性是IE浏览器的专有属性，火狐和老版本的webkit核心的浏览器都不支持这个属性。然而，zoom现在已经被逐步标</span></span>
<span class="line"><span style="color:#abb2bf;">准化，出现在CSS3.0规范草案中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">目前非ie由于不支持这个属性，它们又是通过什么属性来实现元素的缩放呢？可以通过css3里面的动画属性scale进行缩放。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_32-移动端的布局用过媒体查询吗" tabindex="-1">32.移动端的布局用过媒体查询吗？ <a class="header-anchor" href="#_32-移动端的布局用过媒体查询吗" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">假设你现在正用一台显示设备来阅读这篇文章，同时你也想把它投影到屏幕上，或者打印出来，而显示设备、屏幕投影和打印等这些</span></span>
<span class="line"><span style="color:#A6ACCD;">媒介都有自己的特点，CSS就是为文档提供在不同媒介上展示的适配方法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">当媒体查询为真时，相关的样式表或样式规则会按照正常的级联规被应用。当媒体查询返回假，标签上带有媒体查询的样式表仍将被</span></span>
<span class="line"><span style="color:#A6ACCD;">下载（只不过不会被应用）。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">包含了一个媒体类型和至少一个使用宽度、高度和颜色等媒体属性来限制样式表范围的表达式。CSS3加入的媒体查询使得无需修改</span></span>
<span class="line"><span style="color:#A6ACCD;">内容便可以使样式应用于某些特定的设备范围。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">假设你现在正用一台显示设备来阅读这篇文章，同时你也想把它投影到屏幕上，或者打印出来，而显示设备、屏幕投影和打印等这些</span></span>
<span class="line"><span style="color:#abb2bf;">媒介都有自己的特点，CSS就是为文档提供在不同媒介上展示的适配方法</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">当媒体查询为真时，相关的样式表或样式规则会按照正常的级联规被应用。当媒体查询返回假，标签上带有媒体查询的样式表仍将被</span></span>
<span class="line"><span style="color:#abb2bf;">下载（只不过不会被应用）。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">包含了一个媒体类型和至少一个使用宽度、高度和颜色等媒体属性来限制样式表范围的表达式。CSS3加入的媒体查询使得无需修改</span></span>
<span class="line"><span style="color:#abb2bf;">内容便可以使样式应用于某些特定的设备范围。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="http://www.runoob.com/cssref/css3-pr-mediaquery.html" target="_blank" rel="noreferrer">《CSS3@media 查询》</a><a href="http://caibaojian.com/356.html" target="_blank" rel="noreferrer">《响应式布局和自适应布局详解》</a></p><h4 id="_33-使用-css-预处理器吗-喜欢哪个" tabindex="-1">33.使用 CSS 预处理器吗？喜欢哪个？ <a class="header-anchor" href="#_33-使用-css-预处理器吗-喜欢哪个" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">SASS（SASS、LESS没有本质区别，只因为团队前端都是用的SASS）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">SASS（SASS、LESS没有本质区别，只因为团队前端都是用的SASS）</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_34-css-优化、提高性能的方法有哪些" tabindex="-1">34.CSS 优化、提高性能的方法有哪些？ <a class="header-anchor" href="#_34-css-优化、提高性能的方法有哪些" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">加载性能：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）css压缩：将写好的css进行打包压缩，可以减少很多的体积。</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）css单一样式：当需要下边距和左边距的时候，很多时候选择:margin:top 0 bottom 0;但margin-bottom:bot</span></span>
<span class="line"><span style="color:#A6ACCD;">tom;margin-left:left;执行的效率更高。</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）减少使用@import,而建议使用link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">选择器性能：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS选择符是从右到</span></span>
<span class="line"><span style="color:#A6ACCD;">左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）如果规则拥有ID选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹</span></span>
<span class="line"><span style="color:#A6ACCD;">配它们了）。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）避免使用通配规则，如*{}计算次数惊人！只对需要用到的元素进行选择。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）尽量少的去对标签进行选择，而是用class。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过</span></span>
<span class="line"><span style="color:#A6ACCD;">三层，更多的使用类来关联每一个标签元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">渲染性能：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）慎重使用高性能属性：浮动、定位。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）尽量减少页面重排、重绘。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少css文档体积。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）属性值为0时，不加单位。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）属性值为浮动小数0.**，可以省略小数点之前的0。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（7）不使用@import前缀，它会影响css的加载速度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（8）选择器优化嵌套，尽量避免层级过深。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（9）css雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清</span></span>
<span class="line"><span style="color:#A6ACCD;">楚，再使用。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（10）正确使用display的属性，由于display的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（11）不滥用web字体。对于中文网站来说WebFonts可能很陌生，国外却很流行。web fonts通常体积庞大，而且一些浏</span></span>
<span class="line"><span style="color:#A6ACCD;">览器在下载web fonts时会阻塞页面渲染损伤性能。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">可维护性、健壮性：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）将具有相同属性的样式抽离出来，整合并通过class在页面中进行使用，提高css的可维护性。</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）样式与内容分离：将css代码定义到外部css中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">加载性能：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）css压缩：将写好的css进行打包压缩，可以减少很多的体积。</span></span>
<span class="line"><span style="color:#abb2bf;">（2）css单一样式：当需要下边距和左边距的时候，很多时候选择:margin:top 0 bottom 0;但margin-bottom:bot</span></span>
<span class="line"><span style="color:#abb2bf;">tom;margin-left:left;执行的效率更高。</span></span>
<span class="line"><span style="color:#abb2bf;">（3）减少使用@import,而建议使用link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">选择器性能：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS选择符是从右到</span></span>
<span class="line"><span style="color:#abb2bf;">左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）如果规则拥有ID选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹</span></span>
<span class="line"><span style="color:#abb2bf;">配它们了）。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）避免使用通配规则，如*{}计算次数惊人！只对需要用到的元素进行选择。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）尽量少的去对标签进行选择，而是用class。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过</span></span>
<span class="line"><span style="color:#abb2bf;">三层，更多的使用类来关联每一个标签元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">渲染性能：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）慎重使用高性能属性：浮动、定位。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）尽量减少页面重排、重绘。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少css文档体积。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）属性值为0时，不加单位。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）属性值为浮动小数0.**，可以省略小数点之前的0。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（7）不使用@import前缀，它会影响css的加载速度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（8）选择器优化嵌套，尽量避免层级过深。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（9）css雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清</span></span>
<span class="line"><span style="color:#abb2bf;">楚，再使用。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（10）正确使用display的属性，由于display的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（11）不滥用web字体。对于中文网站来说WebFonts可能很陌生，国外却很流行。web fonts通常体积庞大，而且一些浏</span></span>
<span class="line"><span style="color:#abb2bf;">览器在下载web fonts时会阻塞页面渲染损伤性能。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">可维护性、健壮性：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）将具有相同属性的样式抽离出来，整合并通过class在页面中进行使用，提高css的可维护性。</span></span>
<span class="line"><span style="color:#abb2bf;">（2）样式与内容分离：将css代码定义到外部css中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.zhihu.com/question/19886806" target="_blank" rel="noreferrer">《CSS 优化、提高性能的方法有哪些？》</a><a href="https://www.jianshu.com/p/4e673bf24a3b" target="_blank" rel="noreferrer">《CSS 优化，提高性能的方法》</a></p><h4 id="_35-浏览器是怎样解析-css-选择器的" tabindex="-1">35.浏览器是怎样解析 CSS 选择器的？ <a class="header-anchor" href="#_35-浏览器是怎样解析-css-选择器的" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">样式系统从关键选择器开始匹配，然后左移查找规则选择器的祖先元素。只要选择器的子树一直在工作，样式系统就会持续左移，直</span></span>
<span class="line"><span style="color:#A6ACCD;">到和规则匹配，或者是因为不匹配而放弃该规则。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">试想一下，如果采用从左至右的方式读取CSS规则，那么大多数规则读到最后（最右）才会发现是不匹配的，这样做会费时耗能，</span></span>
<span class="line"><span style="color:#A6ACCD;">最后有很多都是无用的；而如果采取从右向左的方式，那么只要发现最右边选择器不匹配，就可以直接舍弃了，避免了许多无效匹配。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">样式系统从关键选择器开始匹配，然后左移查找规则选择器的祖先元素。只要选择器的子树一直在工作，样式系统就会持续左移，直</span></span>
<span class="line"><span style="color:#abb2bf;">到和规则匹配，或者是因为不匹配而放弃该规则。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">试想一下，如果采用从左至右的方式读取CSS规则，那么大多数规则读到最后（最右）才会发现是不匹配的，这样做会费时耗能，</span></span>
<span class="line"><span style="color:#abb2bf;">最后有很多都是无用的；而如果采取从右向左的方式，那么只要发现最右边选择器不匹配，就可以直接舍弃了，避免了许多无效匹配。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://juejin.im/entry/5a123c55f265da432240cc90" target="_blank" rel="noreferrer">《探究 CSS 解析原理》</a></p><h4 id="_36-在网页中应该使用奇数还是偶数的字体-为什么呢" tabindex="-1">36.在网页中应该使用奇数还是偶数的字体？为什么呢？ <a class="header-anchor" href="#_36-在网页中应该使用奇数还是偶数的字体-为什么呢" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）偶数字号相对更容易和web设计的其他部分构成比例关系。比如：当我用了14px的正文字号，我可能会在一些地方用14</span></span>
<span class="line"><span style="color:#A6ACCD;">×0.5=7px的margin，在另一些地方用14×1.5=21px的标题字号。</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）浏览器缘故，低版本的浏览器ie6会把奇数字体强制转化为偶数，即13px渲染为14px。</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）系统差别，早期的Windows里，中易宋体点阵只有12和14、15、16px，唯独缺少13px。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）偶数字号相对更容易和web设计的其他部分构成比例关系。比如：当我用了14px的正文字号，我可能会在一些地方用14</span></span>
<span class="line"><span style="color:#abb2bf;">×0.5=7px的margin，在另一些地方用14×1.5=21px的标题字号。</span></span>
<span class="line"><span style="color:#abb2bf;">（2）浏览器缘故，低版本的浏览器ie6会把奇数字体强制转化为偶数，即13px渲染为14px。</span></span>
<span class="line"><span style="color:#abb2bf;">（3）系统差别，早期的Windows里，中易宋体点阵只有12和14、15、16px，唯独缺少13px。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://blog.csdn.net/jian_xi/article/details/79346477" target="_blank" rel="noreferrer">《谈谈网页中使用奇数字体和偶数字体》</a><a href="https://www.zhihu.com/question/20440679" target="_blank" rel="noreferrer">《现在网页设计中的为什么少有人用 11px、13px、15px 等奇数的字体？》</a></p><h4 id="_37-margin-和-padding-分别适合什么场景使用" tabindex="-1">37.margin 和 padding 分别适合什么场景使用？ <a class="header-anchor" href="#_37-margin-和-padding-分别适合什么场景使用" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">margin是用来隔开元素与元素的间距；padding是用来隔开元素与内容的间隔。</span></span>
<span class="line"><span style="color:#A6ACCD;">margin用于布局分开元素使元素与元素互不相干。</span></span>
<span class="line"><span style="color:#A6ACCD;">padding用于元素与内容之间的间隔，让内容（文字）与（包裹）元素之间有一段距离。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">何时应当使用margin：</span></span>
<span class="line"><span style="color:#A6ACCD;">•需要在border外侧添加空白时。</span></span>
<span class="line"><span style="color:#A6ACCD;">•空白处不需要背景（色）时。</span></span>
<span class="line"><span style="color:#A6ACCD;">•上下相连的两个盒子之间的空白，需要相互抵消时。如15px+20px的margin，将得到20px的空白。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">何时应当时用padding：</span></span>
<span class="line"><span style="color:#A6ACCD;">•需要在border内测添加空白时。</span></span>
<span class="line"><span style="color:#A6ACCD;">•空白处需要背景（色）时。</span></span>
<span class="line"><span style="color:#A6ACCD;">•上下相连的两个盒子之间的空白，希望等于两者之和时。如15px+20px的padding，将得到35px的空白。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">margin是用来隔开元素与元素的间距；padding是用来隔开元素与内容的间隔。</span></span>
<span class="line"><span style="color:#abb2bf;">margin用于布局分开元素使元素与元素互不相干。</span></span>
<span class="line"><span style="color:#abb2bf;">padding用于元素与内容之间的间隔，让内容（文字）与（包裹）元素之间有一段距离。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">何时应当使用margin：</span></span>
<span class="line"><span style="color:#abb2bf;">•需要在border外侧添加空白时。</span></span>
<span class="line"><span style="color:#abb2bf;">•空白处不需要背景（色）时。</span></span>
<span class="line"><span style="color:#abb2bf;">•上下相连的两个盒子之间的空白，需要相互抵消时。如15px+20px的margin，将得到20px的空白。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">何时应当时用padding：</span></span>
<span class="line"><span style="color:#abb2bf;">•需要在border内测添加空白时。</span></span>
<span class="line"><span style="color:#abb2bf;">•空白处需要背景（色）时。</span></span>
<span class="line"><span style="color:#abb2bf;">•上下相连的两个盒子之间的空白，希望等于两者之和时。如15px+20px的padding，将得到35px的空白。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_38-抽离样式模块怎么写-说出思路-有无实践经验-阿里航旅的面试题" tabindex="-1">38.抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题] <a class="header-anchor" href="#_38-抽离样式模块怎么写-说出思路-有无实践经验-阿里航旅的面试题" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">我的理解是把常用的css样式单独做成css文件……通用的和业务相关的分离出来，通用的做成样式模块儿共享，业务相关的，放</span></span>
<span class="line"><span style="color:#A6ACCD;">进业务相关的库里面做成对应功能的模块儿。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">我的理解是把常用的css样式单独做成css文件……通用的和业务相关的分离出来，通用的做成样式模块儿共享，业务相关的，放</span></span>
<span class="line"><span style="color:#abb2bf;">进业务相关的库里面做成对应功能的模块儿。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="http://nec.netease.com/standard/css-sort.html" target="_blank" rel="noreferrer">《CSS 规范-分类方法》</a></p><h4 id="_39-简单说一下-css3-的-all-属性。" tabindex="-1">39.简单说一下 css3 的 all 属性。 <a class="header-anchor" href="#_39-简单说一下-css3-的-all-属性。" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">all属性实际上是所有CSS属性的缩写，表示，所有的CSS属性都怎样怎样，但是，不包括unicode-bidi和direction</span></span>
<span class="line"><span style="color:#A6ACCD;">这两个CSS属性。支持三个CSS通用属性值，initial,inherit,unset。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">initial是初始值的意思，也就是该元素元素都除了unicode-bidi和direction以外的CSS属性都使用属性的默认初始</span></span>
<span class="line"><span style="color:#A6ACCD;">值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">inherit是继承的意思，也就是该元素除了unicode-bidi和direction以外的CSS属性都继承父元素的属性值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">unset是取消设置的意思，也就是当前元素浏览器或用户设置的CSS忽略，然后如果是具有继承特性的CSS，如color，则</span></span>
<span class="line"><span style="color:#A6ACCD;">使用继承值；如果是没有继承特性的CSS属性，如background-color，则使用初始值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">all属性实际上是所有CSS属性的缩写，表示，所有的CSS属性都怎样怎样，但是，不包括unicode-bidi和direction</span></span>
<span class="line"><span style="color:#abb2bf;">这两个CSS属性。支持三个CSS通用属性值，initial,inherit,unset。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">initial是初始值的意思，也就是该元素元素都除了unicode-bidi和direction以外的CSS属性都使用属性的默认初始</span></span>
<span class="line"><span style="color:#abb2bf;">值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">inherit是继承的意思，也就是该元素除了unicode-bidi和direction以外的CSS属性都继承父元素的属性值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">unset是取消设置的意思，也就是当前元素浏览器或用户设置的CSS忽略，然后如果是具有继承特性的CSS，如color，则</span></span>
<span class="line"><span style="color:#abb2bf;">使用继承值；如果是没有继承特性的CSS属性，如background-color，则使用初始值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.zhangxinxu.com/wordpress/2016/03/know-about-css3-all/" target="_blank" rel="noreferrer">《简单了解 CSS3 的 all 属性》</a></p><h4 id="_40-为什么不建议使用统配符初始化-css-样式。" tabindex="-1">40.为什么不建议使用统配符初始化 css 样式。 <a class="header-anchor" href="#_40-为什么不建议使用统配符初始化-css-样式。" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">采用*{padding:0;margin:0;}这样的写法好处是写起来很简单，但是是通配符，需要把所有的标签都遍历一遍，当网站较大时，</span></span>
<span class="line"><span style="color:#A6ACCD;">样式比较多，这样写就大大的加强了网站运行的负载，会使网站加载的时候需要很长一段时间，因此一般大型的网站都有分层次的一</span></span>
<span class="line"><span style="color:#A6ACCD;">套初始化样式。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">出于性能的考虑，并不是所有标签都会有padding和margin，因此对常见的具有默认padding和margin的元素初始化即</span></span>
<span class="line"><span style="color:#A6ACCD;">可，并不需使用通配符*来初始化。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">采用*{padding:0;margin:0;}这样的写法好处是写起来很简单，但是是通配符，需要把所有的标签都遍历一遍，当网站较大时，</span></span>
<span class="line"><span style="color:#abb2bf;">样式比较多，这样写就大大的加强了网站运行的负载，会使网站加载的时候需要很长一段时间，因此一般大型的网站都有分层次的一</span></span>
<span class="line"><span style="color:#abb2bf;">套初始化样式。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">出于性能的考虑，并不是所有标签都会有padding和margin，因此对常见的具有默认padding和margin的元素初始化即</span></span>
<span class="line"><span style="color:#abb2bf;">可，并不需使用通配符*来初始化。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_41-absolute-的-containingblock-包含块-计算方式跟正常流有什么不同" tabindex="-1">41.absolute 的 containingblock（包含块）计算方式跟正常流有什么不同？ <a class="header-anchor" href="#_41-absolute-的-containingblock-包含块-计算方式跟正常流有什么不同" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）内联元素也可以作为“包含块”所在的元素；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）“包含块”所在的元素不是父块级元素，而是最近的position不为static的祖先元素或根元素；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）边界是padding box而不是content box。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）内联元素也可以作为“包含块”所在的元素；</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）“包含块”所在的元素不是父块级元素，而是最近的position不为static的祖先元素或根元素；</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）边界是padding box而不是content box。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_42-对于-haslayout-的理解" tabindex="-1">42.对于 hasLayout 的理解？ <a class="header-anchor" href="#_42-对于-haslayout-的理解" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">hasLayout是IE特有的一个属性。很多的IE下的css bug都与其息息相关。在IE中，一个元素要么自己对自身的内容进</span></span>
<span class="line"><span style="color:#A6ACCD;">行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。当一个元素的hasLayout属性值为true时，它负责对自己和可</span></span>
<span class="line"><span style="color:#A6ACCD;">能的子孙元素进行尺寸计算和定位。虽然这意味着这个元素需要花更多的代价来维护自身和里面的内容，而不是依赖于祖先元素来完</span></span>
<span class="line"><span style="color:#A6ACCD;">成这些工作。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">hasLayout是IE特有的一个属性。很多的IE下的css bug都与其息息相关。在IE中，一个元素要么自己对自身的内容进</span></span>
<span class="line"><span style="color:#abb2bf;">行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。当一个元素的hasLayout属性值为true时，它负责对自己和可</span></span>
<span class="line"><span style="color:#abb2bf;">能的子孙元素进行尺寸计算和定位。虽然这意味着这个元素需要花更多的代价来维护自身和里面的内容，而不是依赖于祖先元素来完</span></span>
<span class="line"><span style="color:#abb2bf;">成这些工作。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://segmentfault.com/a/1190000010883974" target="_blank" rel="noreferrer">《CSS 基础篇--CSS 中 IE 浏览器的 hasLayout，IE 低版本的 bug 根源》</a><a href="https://segmentfault.com/a/1190000004632071" target="_blank" rel="noreferrer">《CSS 魔法堂：hasLayout 原来是这样的！》</a></p><h4 id="_43-元素竖向的百分比设定是相对于容器的高度吗" tabindex="-1">43.元素竖向的百分比设定是相对于容器的高度吗？ <a class="header-anchor" href="#_43-元素竖向的百分比设定是相对于容器的高度吗" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">如果是height的话，是相对于包含块的高度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果是padding或者margin竖直方向的属性则是相对于包含块的宽度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">如果是height的话，是相对于包含块的高度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">如果是padding或者margin竖直方向的属性则是相对于包含块的宽度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_44-全屏滚动的原理是什么-用到了-css-的哪些属性-待深入实践" tabindex="-1">44.全屏滚动的原理是什么？用到了 CSS 的哪些属性？（待深入实践） <a class="header-anchor" href="#_44-全屏滚动的原理是什么-用到了-css-的哪些属性-待深入实践" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，容器及容</span></span>
<span class="line"><span style="color:#A6ACCD;">器内的页面取当前可视区高度，同时容器的父级元素overflow属性值设为hidden，通过更改容器可视区的位置来实现全</span></span>
<span class="line"><span style="color:#A6ACCD;">屏滚动效果。主要是响应鼠标事件，页面通过CSS的动画效果，进行移动。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">overflow：hidden；transition：all 1000 ms ease；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，容器及容</span></span>
<span class="line"><span style="color:#abb2bf;">器内的页面取当前可视区高度，同时容器的父级元素overflow属性值设为hidden，通过更改容器可视区的位置来实现全</span></span>
<span class="line"><span style="color:#abb2bf;">屏滚动效果。主要是响应鼠标事件，页面通过CSS的动画效果，进行移动。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">overflow：hidden；transition：all 1000 ms ease；</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://blog.csdn.net/liona_koukou/article/details/52680409" target="_blank" rel="noreferrer">《js 实现网页全屏切换（平滑过渡），鼠标滚动切换》</a><a href="https://juejin.im/post/5aeef41cf265da0ba0630de0" target="_blank" rel="noreferrer">《用 ES6 写全屏滚动插件》</a></p><h4 id="_45-什么是响应式设计-响应式设计的基本原理是什么-如何兼容低版本的-ie-待深入了解" tabindex="-1">45.什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？（待深入了解） <a class="header-anchor" href="#_45-什么是响应式设计-响应式设计的基本原理是什么-如何兼容低版本的-ie-待深入了解" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">响应式网站设计是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。基本原理是通过媒体查询检测不同的设备屏</span></span>
<span class="line"><span style="color:#A6ACCD;">幕尺寸做处理。页面头部必须有meta声明的viewport。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">响应式网站设计是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。基本原理是通过媒体查询检测不同的设备屏</span></span>
<span class="line"><span style="color:#abb2bf;">幕尺寸做处理。页面头部必须有meta声明的viewport。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://blog.csdn.net/dreamerframework/article/details/8994741" target="_blank" rel="noreferrer">《响应式布局原理》</a><a href="http://www.mahaixiang.cn/wzsj/278.html" target="_blank" rel="noreferrer">《响应式布局的实现方法和原理》</a></p><h4 id="_46-视差滚动效果-如何给每页做不同的动画-回到顶部-向下滑动要再次出现-和只出现一次分别怎么做" tabindex="-1">46.视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？） <a class="header-anchor" href="#_46-视差滚动效果-如何给每页做不同的动画-回到顶部-向下滑动要再次出现-和只出现一次分别怎么做" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.zhihu.com/question/20990029" target="_blank" rel="noreferrer">《如何实现视差滚动效果的网页？》</a></p><h4 id="_47-如何修改-chrome-记住密码后自动填充表单的黄色背景" tabindex="-1">47.如何修改 chrome 记住密码后自动填充表单的黄色背景？ <a class="header-anchor" href="#_47-如何修改-chrome-记住密码后自动填充表单的黄色背景" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">chrome表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的in</span></span>
<span class="line"><span style="color:#A6ACCD;">put表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">background-color:rgb(250,255,189)!important;</span></span>
<span class="line"><span style="color:#A6ACCD;">background-image:none!important;</span></span>
<span class="line"><span style="color:#A6ACCD;">color:rgb(0,0,0)!important;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">对chrome默认定义的background-color，background-image，color使用important是不能提高其优先级的，但是</span></span>
<span class="line"><span style="color:#A6ACCD;">其他属性可使用。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">使用足够大的纯色内阴影来覆盖input输入框的黄色背景，处理如下</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">input:-webkit-autofill,textarea:-webkit-autofill,select:-webkit-autofill{</span></span>
<span class="line"><span style="color:#A6ACCD;">-webkit-box-shadow:000px 1000px white inset;</span></span>
<span class="line"><span style="color:#A6ACCD;">border:1px solid #CCC !important;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">chrome表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的in</span></span>
<span class="line"><span style="color:#abb2bf;">put表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">{</span></span>
<span class="line"><span style="color:#abb2bf;">background-color:rgb(250,255,189)!important;</span></span>
<span class="line"><span style="color:#abb2bf;">background-image:none!important;</span></span>
<span class="line"><span style="color:#abb2bf;">color:rgb(0,0,0)!important;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">对chrome默认定义的background-color，background-image，color使用important是不能提高其优先级的，但是</span></span>
<span class="line"><span style="color:#abb2bf;">其他属性可使用。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">使用足够大的纯色内阴影来覆盖input输入框的黄色背景，处理如下</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">input:-webkit-autofill,textarea:-webkit-autofill,select:-webkit-autofill{</span></span>
<span class="line"><span style="color:#abb2bf;">-webkit-box-shadow:000px 1000px white inset;</span></span>
<span class="line"><span style="color:#abb2bf;">border:1px solid #CCC !important;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://blog.csdn.net/zsl_955200/article/details/78276209" target="_blank" rel="noreferrer">《去掉 chrome 记住密码后的默认填充样式》</a><a href="https://blog.csdn.net/M_agician/article/details/73381706" target="_blank" rel="noreferrer">《修改谷歌浏览器 chrome 记住密码后自动填充表单的黄色背景》</a></p><h4 id="_48-怎么让-chrome-支持小于-12px-的文字" tabindex="-1">48.怎么让 Chrome 支持小于 12px 的文字？ <a class="header-anchor" href="#_48-怎么让-chrome-支持小于-12px-的文字" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">在谷歌下css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">解决办法：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）可以使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size</span></span>
<span class="line"><span style="color:#A6ACCD;">-adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器</span></span>
<span class="line"><span style="color:#A6ACCD;">已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）还可以使用css3的transform缩放属性-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.</span></span>
<span class="line"><span style="color:#A6ACCD;">75);收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/</span></span>
<span class="line"><span style="color:#A6ACCD;">inline-block/...；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">在谷歌下css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">解决办法：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）可以使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size</span></span>
<span class="line"><span style="color:#abb2bf;">-adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器</span></span>
<span class="line"><span style="color:#abb2bf;">已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）还可以使用css3的transform缩放属性-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.</span></span>
<span class="line"><span style="color:#abb2bf;">75);收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/</span></span>
<span class="line"><span style="color:#abb2bf;">inline-block/...；</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://570109268.iteye.com/blog/2406562" target="_blank" rel="noreferrer">《谷歌浏览器不支持 CSS 设置小于 12px 的文字怎么办？》</a></p><h4 id="_49-让页面里的字体变清晰-变细用-css-怎么做" tabindex="-1">49.让页面里的字体变清晰，变细用 CSS 怎么做？ <a class="header-anchor" href="#_49-让页面里的字体变清晰-变细用-css-怎么做" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">webkit内核的私有属性：-webkit-font-smoothing，用于字体抗锯齿，使用后字体看起来会更清晰舒服。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">在MacOS测试环境下面设置-webkit-font-smoothing:antialiased;但是这个属性仅仅是面向MacOS，其他操作系统设</span></span>
<span class="line"><span style="color:#A6ACCD;">置后无效。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">webkit内核的私有属性：-webkit-font-smoothing，用于字体抗锯齿，使用后字体看起来会更清晰舒服。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">在MacOS测试环境下面设置-webkit-font-smoothing:antialiased;但是这个属性仅仅是面向MacOS，其他操作系统设</span></span>
<span class="line"><span style="color:#abb2bf;">置后无效。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://blog.csdn.net/huo_bao/article/details/50251585" target="_blank" rel="noreferrer">《让字体变的更清晰 CSS 中-webkit-font-smoothing》</a></p><h4 id="_50-font-style-属性中-italic-和-oblique-的区别" tabindex="-1">50.font-style 属性中 italic 和 oblique 的区别？ <a class="header-anchor" href="#_50-font-style-属性中-italic-和-oblique-的区别" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">italic和oblique这两个关键字都表示“斜体”的意思。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">它们的区别在于，italic是使用当前字体的斜体字体，而oblique只是单纯地让文字倾斜。如果当前字体没有对应的斜体字体，</span></span>
<span class="line"><span style="color:#A6ACCD;">则退而求其次，解析为oblique，也就是单纯形状倾斜。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">italic和oblique这两个关键字都表示“斜体”的意思。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">它们的区别在于，italic是使用当前字体的斜体字体，而oblique只是单纯地让文字倾斜。如果当前字体没有对应的斜体字体，</span></span>
<span class="line"><span style="color:#abb2bf;">则退而求其次，解析为oblique，也就是单纯形状倾斜。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_51-设备像素、css-像素、设备独立像素、dpr、ppi-之间的区别" tabindex="-1">51.设备像素、css 像素、设备独立像素、dpr、ppi 之间的区别？ <a class="header-anchor" href="#_51-设备像素、css-像素、设备独立像素、dpr、ppi-之间的区别" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">设备像素指的是物理像素，一般手机的分辨率指的就是设备像素，一个设备的设备像素是不可变的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">css像素和设备独立像素是等价的，不管在何种分辨率的设备上，css像素的大小应该是一致的，css像素是一个相对单位，它是相</span></span>
<span class="line"><span style="color:#A6ACCD;">对于设备像素的，一个css像素的大小取决于页面缩放程度和dpr的大小。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dpr指的是设备像素和设备独立像素的比值，一般的pc屏幕，dpr=1。在iphone4时，苹果推出了retina屏幕，它的dpr</span></span>
<span class="line"><span style="color:#A6ACCD;">为2。屏幕的缩放会改变dpr的值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ppi指的是每英寸的物理像素的密度，ppi越大，屏幕的分辨率越大。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">设备像素指的是物理像素，一般手机的分辨率指的就是设备像素，一个设备的设备像素是不可变的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">css像素和设备独立像素是等价的，不管在何种分辨率的设备上，css像素的大小应该是一致的，css像素是一个相对单位，它是相</span></span>
<span class="line"><span style="color:#abb2bf;">对于设备像素的，一个css像素的大小取决于页面缩放程度和dpr的大小。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">dpr指的是设备像素和设备独立像素的比值，一般的pc屏幕，dpr=1。在iphone4时，苹果推出了retina屏幕，它的dpr</span></span>
<span class="line"><span style="color:#abb2bf;">为2。屏幕的缩放会改变dpr的值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">ppi指的是每英寸的物理像素的密度，ppi越大，屏幕的分辨率越大。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.cnblogs.com/libin-1/p/7148377.html" target="_blank" rel="noreferrer">《什么是物理像素、虚拟像素、逻辑像素、设备像素，什么又是 PPI,DPI,DPR 和 DIP》</a><a href="https://www.jianshu.com/p/af6dad66e49a" target="_blank" rel="noreferrer">《前端工程师需要明白的「像素」》</a><a href="https://github.com/jawil/blog/issues/21" target="_blank" rel="noreferrer">《CSS 像素、物理像素、逻辑像素、设备像素比、PPI、Viewport》</a><a href="https://github.com/wujunchuan/wujunchuan.github.io/issues/15" target="_blank" rel="noreferrer">《前端开发中像素的概念》</a></p><h4 id="_52-layout-viewport、visual-viewport-和-ideal-viewport-的区别" tabindex="-1">52.layout viewport、visual viewport 和 ideal viewport 的区别？ <a class="header-anchor" href="#_52-layout-viewport、visual-viewport-和-ideal-viewport-的区别" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">如果把移动设备上浏览器的可视区域设为viewport的话，某些网站就会因为viewport太窄而显示错乱，所以这些浏览器就决定</span></span>
<span class="line"><span style="color:#A6ACCD;">默认情况下把viewport设为一个较宽的值，比如980px，这样的话即使是那些为桌面设计的网站也能在移动浏览器上正常显示了。</span></span>
<span class="line"><span style="color:#A6ACCD;">ppk把这个浏览器默认的viewport叫做layout viewport。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">layout viewport的宽度是大于浏览器可视区域的宽度的，所以我们还需要一个viewport来代表浏览器可视区域的大小，ppk把</span></span>
<span class="line"><span style="color:#A6ACCD;">这个viewport叫做visual viewport。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ideal viewport是最适合移动设备的viewport，ideal viewport的宽度等于移动设备的屏幕宽度，只要在css中把某一元</span></span>
<span class="line"><span style="color:#A6ACCD;">素的宽度设为ideal viewport的宽度（单位用px），那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为100%的效果。i</span></span>
<span class="line"><span style="color:#A6ACCD;">deal viewport的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport而设计的网站，不需要用户手动缩放，也</span></span>
<span class="line"><span style="color:#A6ACCD;">不需要出现横向滚动条，都可以完美的呈现给用户。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">如果把移动设备上浏览器的可视区域设为viewport的话，某些网站就会因为viewport太窄而显示错乱，所以这些浏览器就决定</span></span>
<span class="line"><span style="color:#abb2bf;">默认情况下把viewport设为一个较宽的值，比如980px，这样的话即使是那些为桌面设计的网站也能在移动浏览器上正常显示了。</span></span>
<span class="line"><span style="color:#abb2bf;">ppk把这个浏览器默认的viewport叫做layout viewport。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">layout viewport的宽度是大于浏览器可视区域的宽度的，所以我们还需要一个viewport来代表浏览器可视区域的大小，ppk把</span></span>
<span class="line"><span style="color:#abb2bf;">这个viewport叫做visual viewport。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">ideal viewport是最适合移动设备的viewport，ideal viewport的宽度等于移动设备的屏幕宽度，只要在css中把某一元</span></span>
<span class="line"><span style="color:#abb2bf;">素的宽度设为ideal viewport的宽度（单位用px），那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为100%的效果。i</span></span>
<span class="line"><span style="color:#abb2bf;">deal viewport的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport而设计的网站，不需要用户手动缩放，也</span></span>
<span class="line"><span style="color:#abb2bf;">不需要出现横向滚动条，都可以完美的呈现给用户。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">移动端一共需要理解三个viewport的概念的理解。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">第一个视口是布局视口，在移动端显示网页时，由于移动端的屏幕尺寸比较小，如果网页使用移动端的屏幕尺寸进行布局的话，那么整</span></span>
<span class="line"><span style="color:#A6ACCD;">个页面的布局都会显示错乱。所以移动端浏览器提供了一个layout viewport布局视口的概念，使用这个视口来对页面进行布局展</span></span>
<span class="line"><span style="color:#A6ACCD;">示，一般layout viewport的大小为980px，因此页面布局不会有太大的变化，我们可以通过拖动和缩放来查看到这个页面。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">第二个视口指的是视觉视口，visual viewport指的是移动设备上我们可见的区域的视口大小，一般为屏幕的分辨率的大小。visu</span></span>
<span class="line"><span style="color:#A6ACCD;">al viewport和layout viewport的关系，就像是我们通过窗户看外面的风景，视觉视口就是窗户，而外面的风景就是布局视口</span></span>
<span class="line"><span style="color:#A6ACCD;">中的网页内容。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">第三个视口是理想视口，由于layout viewport一般比visual viewport要大，所以想要看到整个页面必须通过拖动和缩放才</span></span>
<span class="line"><span style="color:#A6ACCD;">能实现。所以又提出了ideal viewport的概念，ideal viewport下用户不用缩放和滚动条就能够查看到整个页面，并且页面在</span></span>
<span class="line"><span style="color:#A6ACCD;">不同分辨率下显示的内容大小相同。ideal viewport其实就是通过修改layout viewport的大小，让它等于设备的宽度，这个</span></span>
<span class="line"><span style="color:#A6ACCD;">宽度可以理解为是设备独立像素，因此根据ideal viewport设计的页面，在不同分辨率的屏幕下，显示应该相同。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">移动端一共需要理解三个viewport的概念的理解。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">第一个视口是布局视口，在移动端显示网页时，由于移动端的屏幕尺寸比较小，如果网页使用移动端的屏幕尺寸进行布局的话，那么整</span></span>
<span class="line"><span style="color:#abb2bf;">个页面的布局都会显示错乱。所以移动端浏览器提供了一个layout viewport布局视口的概念，使用这个视口来对页面进行布局展</span></span>
<span class="line"><span style="color:#abb2bf;">示，一般layout viewport的大小为980px，因此页面布局不会有太大的变化，我们可以通过拖动和缩放来查看到这个页面。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">第二个视口指的是视觉视口，visual viewport指的是移动设备上我们可见的区域的视口大小，一般为屏幕的分辨率的大小。visu</span></span>
<span class="line"><span style="color:#abb2bf;">al viewport和layout viewport的关系，就像是我们通过窗户看外面的风景，视觉视口就是窗户，而外面的风景就是布局视口</span></span>
<span class="line"><span style="color:#abb2bf;">中的网页内容。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">第三个视口是理想视口，由于layout viewport一般比visual viewport要大，所以想要看到整个页面必须通过拖动和缩放才</span></span>
<span class="line"><span style="color:#abb2bf;">能实现。所以又提出了ideal viewport的概念，ideal viewport下用户不用缩放和滚动条就能够查看到整个页面，并且页面在</span></span>
<span class="line"><span style="color:#abb2bf;">不同分辨率下显示的内容大小相同。ideal viewport其实就是通过修改layout viewport的大小，让它等于设备的宽度，这个</span></span>
<span class="line"><span style="color:#abb2bf;">宽度可以理解为是设备独立像素，因此根据ideal viewport设计的页面，在不同分辨率的屏幕下，显示应该相同。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.cnblogs.com/2050/p/3877280.html" target="_blank" rel="noreferrer">《移动前端开发之 viewport 的深入理解》</a><a href="https://www.html.cn/archives/5975" target="_blank" rel="noreferrer">《说说移动前端中 viewport（视口）》</a><a href="https://juejin.im/post/5b6d21daf265da0f9d1a2ed7#heading-14" target="_blank" rel="noreferrer">《移动端适配知识你到底知多少》</a></p><h4 id="_53-position-fixed-在-android-下无效怎么处理" tabindex="-1">53.position:fixed;在 android 下无效怎么处理？ <a class="header-anchor" href="#_53-position-fixed-在-android-下无效怎么处理" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">因为移动端浏览器默认的viewport叫做layout viewport。在移动端显示时，因为layout viewport的宽度大于移动端屏幕</span></span>
<span class="line"><span style="color:#A6ACCD;">的宽度，所以页面会出现滚动条左右移动，fixed的元素是相对layout viewport来固定位置的，而不是移动端屏幕来固定位置的</span></span>
<span class="line"><span style="color:#A6ACCD;">，所以会出现感觉fixed无效的情况。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果想实现fixed相对于屏幕的固定效果，我们需要改变的是viewport的大小为ideal viewport，可以如下设置：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;metaname=&quot;viewport&quot;content=&quot;width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-sca</span></span>
<span class="line"><span style="color:#A6ACCD;">le=1.0,user-scalable=no&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">因为移动端浏览器默认的viewport叫做layout viewport。在移动端显示时，因为layout viewport的宽度大于移动端屏幕</span></span>
<span class="line"><span style="color:#abb2bf;">的宽度，所以页面会出现滚动条左右移动，fixed的元素是相对layout viewport来固定位置的，而不是移动端屏幕来固定位置的</span></span>
<span class="line"><span style="color:#abb2bf;">，所以会出现感觉fixed无效的情况。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">如果想实现fixed相对于屏幕的固定效果，我们需要改变的是viewport的大小为ideal viewport，可以如下设置：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">&lt;metaname=&quot;viewport&quot;content=&quot;width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-sca</span></span>
<span class="line"><span style="color:#abb2bf;">le=1.0,user-scalable=no&quot;/&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_54-如果需要手动写动画-你认为最小时间间隔是多久-为什么-阿里" tabindex="-1">54.如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里） <a class="header-anchor" href="#_54-如果需要手动写动画-你认为最小时间间隔是多久-为什么-阿里" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms＝16.7ms</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms＝16.7ms</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_55-如何让去除-inline-block-元素间间距" tabindex="-1">55.如何让去除 inline-block 元素间间距？ <a class="header-anchor" href="#_55-如何让去除-inline-block-元素间间距" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/" target="_blank" rel="noreferrer">《去除 inline-block 元素间间距的 N 种方法》</a></p><h4 id="_56-overflow-scroll-时不能平滑滚动的问题怎么处理" tabindex="-1">56.overflow:scroll 时不能平滑滚动的问题怎么处理？ <a class="header-anchor" href="#_56-overflow-scroll-时不能平滑滚动的问题怎么处理" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">以下代码可解决这种卡顿的问题：-webkit-overflow-scrolling:touch;是因为这行代码启用了硬件加速特性，所以滑动很流</span></span>
<span class="line"><span style="color:#A6ACCD;">畅。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">以下代码可解决这种卡顿的问题：-webkit-overflow-scrolling:touch;是因为这行代码启用了硬件加速特性，所以滑动很流</span></span>
<span class="line"><span style="color:#abb2bf;">畅。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.jianshu.com/p/1f4693d0ad2d" target="_blank" rel="noreferrer">《解决页面使用 overflow:scroll 在 iOS 上滑动卡顿的问题》</a></p><h4 id="_57-有一个高度自适应的-div-里面有两个-div-一个高度-100px-希望另一个填满剩下的高度。" tabindex="-1">57.有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。 <a class="header-anchor" href="#_57-有一个高度自适应的-div-里面有两个-div-一个高度-100px-希望另一个填满剩下的高度。" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）外层div使用position：relative；高度要求自适应的div使用position:absolute;top:100px;bottom:0;</span></span>
<span class="line"><span style="color:#A6ACCD;">left:0;right:0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）使用flex布局，设置主轴为竖轴，第二个div的flex-grow为1。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）外层div使用position：relative；高度要求自适应的div使用position:absolute;top:100px;bottom:0;</span></span>
<span class="line"><span style="color:#abb2bf;">left:0;right:0;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）使用flex布局，设置主轴为竖轴，第二个div的flex-grow为1。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://blog.csdn.net/xutongbao/article/details/79408522" target="_blank" rel="noreferrer">《有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度(三种方案)》</a></p><h4 id="_58-png、jpg、gif-这些图片格式解释一下-分别什么时候用。有没有了解过-webp" tabindex="-1">58.png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？ <a class="header-anchor" href="#_58-png、jpg、gif-这些图片格式解释一下-分别什么时候用。有没有了解过-webp" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）BMP，是无损的、既支持索引色也支持直接色的、点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常</span></span>
<span class="line"><span style="color:#A6ACCD;">具有较大的文件大小。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）GIF是无损的、采用索引色的、点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具</span></span>
<span class="line"><span style="color:#A6ACCD;">有支持动画以及透明的优点。但，GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积</span></span>
<span class="line"><span style="color:#A6ACCD;">较小的场景。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）JPEG是有损的、采用直接色的、点阵图。JPEG的图片的优点，是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来</span></span>
<span class="line"><span style="color:#A6ACCD;">存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，</span></span>
<span class="line"><span style="color:#A6ACCD;">又会导致图片文件较GIF更大。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）PNG-8是无损的、使用索引色的、点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的</span></span>
<span class="line"><span style="color:#A6ACCD;">情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8</span></span>
<span class="line"><span style="color:#A6ACCD;">还支持透明度的调节，而GIF并不支持。现在，除非需要动画的支持，否则我们没有理由使用GIF而不是PNG-8。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）PNG-24是无损的、使用直接色的、点阵图。PNG-24的优点在于，它压缩了图片的数据，使得同样效果的图片，PNG-24格</span></span>
<span class="line"><span style="color:#A6ACCD;">式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）SVG是无损的、矢量图。SVG是矢量图。这意味着SVG图片由直线和曲线以及绘制它们的方法组成。当你放大一个SVG图</span></span>
<span class="line"><span style="color:#A6ACCD;">片的时候，你看到的还是线和曲线，而不会出现像素点。这意味着SVG图片在放大时，不会失真，所以它非常适合用来绘制企</span></span>
<span class="line"><span style="color:#A6ACCD;">业Logo、Icon等。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（7）WebP是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的、点阵图。从名字就可以看出来它是</span></span>
<span class="line"><span style="color:#A6ACCD;">为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，</span></span>
<span class="line"><span style="color:#A6ACCD;">如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">•在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；</span></span>
<span class="line"><span style="color:#A6ACCD;">•在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；</span></span>
<span class="line"><span style="color:#A6ACCD;">•WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">但是目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）BMP，是无损的、既支持索引色也支持直接色的、点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常</span></span>
<span class="line"><span style="color:#abb2bf;">具有较大的文件大小。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）GIF是无损的、采用索引色的、点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具</span></span>
<span class="line"><span style="color:#abb2bf;">有支持动画以及透明的优点。但，GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积</span></span>
<span class="line"><span style="color:#abb2bf;">较小的场景。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）JPEG是有损的、采用直接色的、点阵图。JPEG的图片的优点，是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来</span></span>
<span class="line"><span style="color:#abb2bf;">存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，</span></span>
<span class="line"><span style="color:#abb2bf;">又会导致图片文件较GIF更大。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）PNG-8是无损的、使用索引色的、点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的</span></span>
<span class="line"><span style="color:#abb2bf;">情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8</span></span>
<span class="line"><span style="color:#abb2bf;">还支持透明度的调节，而GIF并不支持。现在，除非需要动画的支持，否则我们没有理由使用GIF而不是PNG-8。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）PNG-24是无损的、使用直接色的、点阵图。PNG-24的优点在于，它压缩了图片的数据，使得同样效果的图片，PNG-24格</span></span>
<span class="line"><span style="color:#abb2bf;">式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）SVG是无损的、矢量图。SVG是矢量图。这意味着SVG图片由直线和曲线以及绘制它们的方法组成。当你放大一个SVG图</span></span>
<span class="line"><span style="color:#abb2bf;">片的时候，你看到的还是线和曲线，而不会出现像素点。这意味着SVG图片在放大时，不会失真，所以它非常适合用来绘制企</span></span>
<span class="line"><span style="color:#abb2bf;">业Logo、Icon等。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（7）WebP是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的、点阵图。从名字就可以看出来它是</span></span>
<span class="line"><span style="color:#abb2bf;">为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，</span></span>
<span class="line"><span style="color:#abb2bf;">如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">•在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；</span></span>
<span class="line"><span style="color:#abb2bf;">•在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；</span></span>
<span class="line"><span style="color:#abb2bf;">•WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">但是目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">我了解到的一共有七种常见的图片的格式。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）第一种是BMP格式，它是无损压缩的，支持索引色和直接色的点阵图。由于它基本上没有进行压缩，因此它的文件体积一般比</span></span>
<span class="line"><span style="color:#A6ACCD;">较大。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）第二种是GIF格式，它是无损压缩的使用索引色的点阵图。由于使用了LZW压缩方法，因此文件的体积很小。并且GIF还</span></span>
<span class="line"><span style="color:#A6ACCD;">支持动画和透明度。但因为它使用的是索引色，所以它适用于一些对颜色要求不高且需要文件体积小的场景。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）第三种是JPEG格式，它是有损压缩的使用直接色的点阵图。由于使用了直接色，色彩较为丰富，一般适用于来存储照片。但</span></span>
<span class="line"><span style="color:#A6ACCD;">由于使用的是直接色，可能文件的体积相对于GIF格式来说更大。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）第四种是PNG-8格式，它是无损压缩的使用索引色的点阵图。它是GIF的一种很好的替代格式，它也支持透明度的调整，并</span></span>
<span class="line"><span style="color:#A6ACCD;">且文件的体积相对于GIF格式更小。一般来说如果不是需要动画的情况，我们都可以使用PNG-8格式代替GIF格式。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）第五种是PNG-24格式，它是无损压缩的使用直接色的点阵图。PNG-24的优点是它使用了压缩算法，所以它的体积比BMP</span></span>
<span class="line"><span style="color:#A6ACCD;">格式的文件要小得多，但是相对于其他的几种格式，还是要大一些。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）第六种格式是svg格式，它是矢量图，它记录的图片的绘制方式，因此对矢量图进行放大和缩小不会产生锯齿和失真。它一般</span></span>
<span class="line"><span style="color:#A6ACCD;">适合于用来制作一些网站logo或者图标之类的图片。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（7）第七种格式是webp格式，它是支持有损和无损两种压缩方式的使用直接色的点阵图。使用webp格式的最大的优点是，在相</span></span>
<span class="line"><span style="color:#A6ACCD;">同质量的文件下，它拥有更小的文件体积。因此它非常适合于网络图片的传输，因为图片体积的减少，意味着请求时间的减小，</span></span>
<span class="line"><span style="color:#A6ACCD;">这样会提高用户的体验。这是谷歌开发的一种新的图片格式，目前在兼容性上还不是太好。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">我了解到的一共有七种常见的图片的格式。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）第一种是BMP格式，它是无损压缩的，支持索引色和直接色的点阵图。由于它基本上没有进行压缩，因此它的文件体积一般比</span></span>
<span class="line"><span style="color:#abb2bf;">较大。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）第二种是GIF格式，它是无损压缩的使用索引色的点阵图。由于使用了LZW压缩方法，因此文件的体积很小。并且GIF还</span></span>
<span class="line"><span style="color:#abb2bf;">支持动画和透明度。但因为它使用的是索引色，所以它适用于一些对颜色要求不高且需要文件体积小的场景。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）第三种是JPEG格式，它是有损压缩的使用直接色的点阵图。由于使用了直接色，色彩较为丰富，一般适用于来存储照片。但</span></span>
<span class="line"><span style="color:#abb2bf;">由于使用的是直接色，可能文件的体积相对于GIF格式来说更大。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）第四种是PNG-8格式，它是无损压缩的使用索引色的点阵图。它是GIF的一种很好的替代格式，它也支持透明度的调整，并</span></span>
<span class="line"><span style="color:#abb2bf;">且文件的体积相对于GIF格式更小。一般来说如果不是需要动画的情况，我们都可以使用PNG-8格式代替GIF格式。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）第五种是PNG-24格式，它是无损压缩的使用直接色的点阵图。PNG-24的优点是它使用了压缩算法，所以它的体积比BMP</span></span>
<span class="line"><span style="color:#abb2bf;">格式的文件要小得多，但是相对于其他的几种格式，还是要大一些。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）第六种格式是svg格式，它是矢量图，它记录的图片的绘制方式，因此对矢量图进行放大和缩小不会产生锯齿和失真。它一般</span></span>
<span class="line"><span style="color:#abb2bf;">适合于用来制作一些网站logo或者图标之类的图片。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（7）第七种格式是webp格式，它是支持有损和无损两种压缩方式的使用直接色的点阵图。使用webp格式的最大的优点是，在相</span></span>
<span class="line"><span style="color:#abb2bf;">同质量的文件下，它拥有更小的文件体积。因此它非常适合于网络图片的传输，因为图片体积的减少，意味着请求时间的减小，</span></span>
<span class="line"><span style="color:#abb2bf;">这样会提高用户的体验。这是谷歌开发的一种新的图片格式，目前在兼容性上还不是太好。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.cnblogs.com/xinzhao/p/5130410.html" target="_blank" rel="noreferrer">《图片格式那么多，哪种更适合你？》</a></p><h4 id="_59-浏览器如何判断是否支持-webp-格式图片" tabindex="-1">59.浏览器如何判断是否支持 webp 格式图片 <a class="header-anchor" href="#_59-浏览器如何判断是否支持-webp-格式图片" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）宽高判断法。通过创建image对象，将其src属性设置为webp格式的图片，然后在onload事件中获取图片的宽高，如</span></span>
<span class="line"><span style="color:#A6ACCD;">果能够获取，则说明浏览器支持webp格式图片。如果不能获取或者触发了onerror函数，那么就说明浏览器不支持webp格</span></span>
<span class="line"><span style="color:#A6ACCD;">式的图片。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）canvas判断方法。我们可以动态的创建一个canvas对象，通过canvas的toDataURL将设置为webp格式，然后判断</span></span>
<span class="line"><span style="color:#A6ACCD;">返回值中是否含有image/webp字段，如果包含则说明支持WebP，反之则不支持。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）宽高判断法。通过创建image对象，将其src属性设置为webp格式的图片，然后在onload事件中获取图片的宽高，如</span></span>
<span class="line"><span style="color:#abb2bf;">果能够获取，则说明浏览器支持webp格式图片。如果不能获取或者触发了onerror函数，那么就说明浏览器不支持webp格</span></span>
<span class="line"><span style="color:#abb2bf;">式的图片。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）canvas判断方法。我们可以动态的创建一个canvas对象，通过canvas的toDataURL将设置为webp格式，然后判断</span></span>
<span class="line"><span style="color:#abb2bf;">返回值中是否含有image/webp字段，如果包含则说明支持WebP，反之则不支持。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://blog.csdn.net/jesslu/article/details/82495061" target="_blank" rel="noreferrer">《判断浏览器是否支持 WebP 图片》</a><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL" target="_blank" rel="noreferrer">《toDataURL()》</a></p><h4 id="_60-什么是-cookie-隔离-或者说-请求资源的时候不要让它带-cookie-怎么做" tabindex="-1">60.什么是 Cookie 隔离？（或者说：请求资源的时候不要让它带 cookie 怎么做） <a class="header-anchor" href="#_60-什么是-cookie-隔离-或者说-请求资源的时候不要让它带-cookie-怎么做" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">网站向服务器请求的时候，会自动带上cookie这样增加表头信息量，使请求变慢。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，所以不如隔离开</span></span>
<span class="line"><span style="color:#A6ACCD;">，静态资源放CDN。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，这样可以降低请</span></span>
<span class="line"><span style="color:#A6ACCD;">求头的大小，降低请求时间，从而达到降低整体请求延时的目的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">同时这种方式不会将cookie传入WebServer，也减少了WebServer对cookie的处理分析环节，提高了webserver的</span></span>
<span class="line"><span style="color:#A6ACCD;">http请求的解析速度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">网站向服务器请求的时候，会自动带上cookie这样增加表头信息量，使请求变慢。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，所以不如隔离开</span></span>
<span class="line"><span style="color:#abb2bf;">，静态资源放CDN。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，这样可以降低请</span></span>
<span class="line"><span style="color:#abb2bf;">求头的大小，降低请求时间，从而达到降低整体请求延时的目的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">同时这种方式不会将cookie传入WebServer，也减少了WebServer对cookie的处理分析环节，提高了webserver的</span></span>
<span class="line"><span style="color:#abb2bf;">http请求的解析速度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.zhihu.com/question/36514327?rf=37353035" target="_blank" rel="noreferrer">《CDN 是什么？使用 CDN 有什么优势？》</a></p><h4 id="_61-style-标签写在-body-后与-body-前有什么区别" tabindex="-1">61.style 标签写在 body 后与 body 前有什么区别？ <a class="header-anchor" href="#_61-style-标签写在-body-后与-body-前有什么区别" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">页面加载自上而下当然是先加载样式。写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式</span></span>
<span class="line"><span style="color:#A6ACCD;">表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可</span></span>
<span class="line"><span style="color:#A6ACCD;">能会出现FOUC现象（即样式失效导致的页面闪烁问题）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">页面加载自上而下当然是先加载样式。写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式</span></span>
<span class="line"><span style="color:#abb2bf;">表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可</span></span>
<span class="line"><span style="color:#abb2bf;">能会出现FOUC现象（即样式失效导致的页面闪烁问题）</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_62-什么是-css-预处理器-后处理器" tabindex="-1">62.什么是 CSS 预处理器/后处理器？ <a class="header-anchor" href="#_62-什么是-css-预处理器-后处理器" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成</span></span>
<span class="line"><span style="color:#A6ACCD;">文件，然后开发者就只要使用这种语言进行编码工作。通俗的说，CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然</span></span>
<span class="line"><span style="color:#A6ACCD;">后再编译成正常的CSS文件。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less csssprite，增强了css代码的复用性，还有层级、mixin、</span></span>
<span class="line"><span style="color:#A6ACCD;">变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CSS后处理器是对CSS进行处理，并最终生成CSS的预处理器，它属于广义上的CSS预处理器。我们很久以前就在用CSS后</span></span>
<span class="line"><span style="color:#A6ACCD;">处理器了，最典型的例子是CSS压缩工具（如clean-css），只不过以前没单独拿出来说过。还有最近比较火的Autoprefixer，</span></span>
<span class="line"><span style="color:#A6ACCD;">以CanIUse上的浏览器支持数据为基础，自动处理兼容性问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的是给CSS属性添加浏</span></span>
<span class="line"><span style="color:#A6ACCD;">览器私有前缀，实现跨浏览器兼容性的问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成</span></span>
<span class="line"><span style="color:#abb2bf;">文件，然后开发者就只要使用这种语言进行编码工作。通俗的说，CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然</span></span>
<span class="line"><span style="color:#abb2bf;">后再编译成正常的CSS文件。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less csssprite，增强了css代码的复用性，还有层级、mixin、</span></span>
<span class="line"><span style="color:#abb2bf;">变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">CSS后处理器是对CSS进行处理，并最终生成CSS的预处理器，它属于广义上的CSS预处理器。我们很久以前就在用CSS后</span></span>
<span class="line"><span style="color:#abb2bf;">处理器了，最典型的例子是CSS压缩工具（如clean-css），只不过以前没单独拿出来说过。还有最近比较火的Autoprefixer，</span></span>
<span class="line"><span style="color:#abb2bf;">以CanIUse上的浏览器支持数据为基础，自动处理兼容性问题。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的是给CSS属性添加浏</span></span>
<span class="line"><span style="color:#abb2bf;">览器私有前缀，实现跨浏览器兼容性的问题。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://blog.csdn.net/yushuangyushuang/article/details/79209752" target="_blank" rel="noreferrer">《CSS 预处理器和后处理器》</a></p><h4 id="_63-阐述一下-csssprites" tabindex="-1">63.阐述一下 CSSSprites <a class="header-anchor" href="#_63-阐述一下-csssprites" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的background-image，background-repeat，background</span></span>
<span class="line"><span style="color:#A6ACCD;">-position的组合进行背景定位。利用CSSSprites能很好地减少网页的http请求，从而很好的提高页面的性能；CSSSprites</span></span>
<span class="line"><span style="color:#A6ACCD;">能减少图片的字节。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">优点：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">减少HTTP请求数，极大地提高页面加载速度</span></span>
<span class="line"><span style="color:#A6ACCD;">增加图片信息重复度，提高压缩比，减少图片大小</span></span>
<span class="line"><span style="color:#A6ACCD;">更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">缺点：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">图片合并麻烦</span></span>
<span class="line"><span style="color:#A6ACCD;">维护麻烦，修改一个图片可能需要重新布局整个图片，样式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的background-image，background-repeat，background</span></span>
<span class="line"><span style="color:#abb2bf;">-position的组合进行背景定位。利用CSSSprites能很好地减少网页的http请求，从而很好的提高页面的性能；CSSSprites</span></span>
<span class="line"><span style="color:#abb2bf;">能减少图片的字节。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">优点：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">减少HTTP请求数，极大地提高页面加载速度</span></span>
<span class="line"><span style="color:#abb2bf;">增加图片信息重复度，提高压缩比，减少图片大小</span></span>
<span class="line"><span style="color:#abb2bf;">更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">缺点：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">图片合并麻烦</span></span>
<span class="line"><span style="color:#abb2bf;">维护麻烦，修改一个图片可能需要重新布局整个图片，样式</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_64-使用-rem-布局的优缺点" tabindex="-1">64.使用 rem 布局的优缺点？ <a class="header-anchor" href="#_64-使用-rem-布局的优缺点" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">优点：</span></span>
<span class="line"><span style="color:#A6ACCD;">在屏幕分辨率千差万别的时代，只要将rem与屏幕分辨率关联起来就可以实现页面的整体缩放，使得在设备上的展现都统一起来了。</span></span>
<span class="line"><span style="color:#A6ACCD;">而且现在浏览器基本都已经支持rem了，兼容性也非常的好。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">缺点：</span></span>
<span class="line"><span style="color:#A6ACCD;">（1）在奇葩的dpr设备上表现效果不太好，比如一些华为的高端机型用rem布局会出现错乱。</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）使用iframe引用也会出现问题。</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）rem在多屏幕尺寸适配上与当前两大平台的设计哲学不一致。即大屏的出现到底是为了看得又大又清楚，还是为了看的更多的问</span></span>
<span class="line"><span style="color:#A6ACCD;">题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">优点：</span></span>
<span class="line"><span style="color:#abb2bf;">在屏幕分辨率千差万别的时代，只要将rem与屏幕分辨率关联起来就可以实现页面的整体缩放，使得在设备上的展现都统一起来了。</span></span>
<span class="line"><span style="color:#abb2bf;">而且现在浏览器基本都已经支持rem了，兼容性也非常的好。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">缺点：</span></span>
<span class="line"><span style="color:#abb2bf;">（1）在奇葩的dpr设备上表现效果不太好，比如一些华为的高端机型用rem布局会出现错乱。</span></span>
<span class="line"><span style="color:#abb2bf;">（2）使用iframe引用也会出现问题。</span></span>
<span class="line"><span style="color:#abb2bf;">（3）rem在多屏幕尺寸适配上与当前两大平台的设计哲学不一致。即大屏的出现到底是为了看得又大又清楚，还是为了看的更多的问</span></span>
<span class="line"><span style="color:#abb2bf;">题。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.zhihu.com/question/21504656" target="_blank" rel="noreferrer">《css3 的字体大小单位 rem 到底好在哪？》</a><a href="https://www.jianshu.com/p/e8ae1c3861dc" target="_blank" rel="noreferrer">《VW:是时候放弃 REM 布局了》</a><a href="https://blog.csdn.net/Honeymao/article/details/76795089" target="_blank" rel="noreferrer">《为什么设计稿是 750px》</a><a href="https://github.com/amfe/article/issues/17" target="_blank" rel="noreferrer">《使用 Flexible 实现手淘 H5 页面的终端适配》</a></p><h4 id="_65-几种常见的-css-布局" tabindex="-1">65.几种常见的 CSS 布局 <a class="header-anchor" href="#_65-几种常见的-css-布局" aria-hidden="true">#</a></h4><p>详细的资料可以参考： <a href="https://juejin.im/post/5bbcd7ff5188255c80668028#heading-12" target="_blank" rel="noreferrer">《几种常见的 CSS 布局》</a></p><h4 id="_66-画一条-0-5px-的线" tabindex="-1">66.画一条 0.5px 的线 <a class="header-anchor" href="#_66-画一条-0-5px-的线" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">采用meta viewport的方式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">采用border-image的方式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">采用transform:scale()的方式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">采用meta viewport的方式</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">采用border-image的方式</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">采用transform:scale()的方式</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://juejin.im/post/5ab65f40f265da2384408a95" target="_blank" rel="noreferrer">《怎么画一条 0.5px 的边（更新）》</a></p><h4 id="_67-transition-和-animation-的区别" tabindex="-1">67.transition 和 animation 的区别 <a class="header-anchor" href="#_67-transition-和-animation-的区别" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">transition关注的是CSS property的变化，property值和时间的关系是一个三次贝塞尔曲线。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">animation作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">transition关注的是CSS property的变化，property值和时间的关系是一个三次贝塞尔曲线。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">animation作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>详细资料可以参考： <a href="https://www.zhihu.com/question/19749045" target="_blank" rel="noreferrer">《CSSanimation 与 CSStransition 有何区别？》</a><a href="https://blog.csdn.net/cddcj/article/details/53582334" target="_blank" rel="noreferrer">《CSS3Transition 和 Animation 区别及比较》</a><a href="http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html" target="_blank" rel="noreferrer">《CSS 动画简介》</a><a href="https://juejin.im/post/5b137e6e51882513ac201dfb" target="_blank" rel="noreferrer">《CSS 动画：animation、transition、transform、translate》</a></p><h4 id="_68-什么是首选最小宽度" tabindex="-1">68.什么是首选最小宽度？ <a class="header-anchor" href="#_68-什么是首选最小宽度" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">“首选最小宽度”，指的是元素最适合的最小宽度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">东亚文字（如中文）最小宽度为每个汉字的宽度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">西方文字最小宽度由特定的连续的英文字符单元决定。并不是所有的英文字符都会组成连续单元，一般会终止于空格（普通空格）、短</span></span>
<span class="line"><span style="color:#A6ACCD;">横线、问号以及其他非英文字符等。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果想让英文字符和中文一样，每一个字符都用最小宽度单元，可以试试使用CSS中的word-break:break-all。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">“首选最小宽度”，指的是元素最适合的最小宽度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">东亚文字（如中文）最小宽度为每个汉字的宽度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">西方文字最小宽度由特定的连续的英文字符单元决定。并不是所有的英文字符都会组成连续单元，一般会终止于空格（普通空格）、短</span></span>
<span class="line"><span style="color:#abb2bf;">横线、问号以及其他非英文字符等。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">如果想让英文字符和中文一样，每一个字符都用最小宽度单元，可以试试使用CSS中的word-break:break-all。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_69-为什么-height-100-会无效" tabindex="-1">69.为什么 height:100%会无效？ <a class="header-anchor" href="#_69-为什么-height-100-会无效" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">对于普通文档流中的元素，百分比高度值要想起作用，其父级必须有一个可以生效的高度值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">原因是如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为auto，因为解释成了auto，</span></span>
<span class="line"><span style="color:#A6ACCD;">所以无法参与计算。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">使用绝对定位的元素会有计算值，即使祖先元素的height计算为auto也是如此。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">对于普通文档流中的元素，百分比高度值要想起作用，其父级必须有一个可以生效的高度值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">原因是如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为auto，因为解释成了auto，</span></span>
<span class="line"><span style="color:#abb2bf;">所以无法参与计算。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">使用绝对定位的元素会有计算值，即使祖先元素的height计算为auto也是如此。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_70-min-width-max-width-和-min-height-max-height-属性间的覆盖规则" tabindex="-1">70.min-width/max-width 和 min-height/max-height 属性间的覆盖规则？ <a class="header-anchor" href="#_70-min-width-max-width-和-min-height-max-height-属性间的覆盖规则" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）max-width会覆盖width，即使width是行类样式或者设置了!important。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）min-width会覆盖max-width，此规则发生在min-width和max-width冲突的时候。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）max-width会覆盖width，即使width是行类样式或者设置了!important。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）min-width会覆盖max-width，此规则发生在min-width和max-width冲突的时候。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_71-内联盒模型基本概念" tabindex="-1">71.内联盒模型基本概念 <a class="header-anchor" href="#_71-内联盒模型基本概念" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）内容区域（content area）。内容区域指一种围绕文字看不见的盒子，其大小仅受字符本身特性控制，本质上是一个字符盒子</span></span>
<span class="line"><span style="color:#A6ACCD;">（character box）；但是有些元素，如图片这样的替换元素，其内容显然不是文字，不存在字符盒子之类的，因此，对于这些</span></span>
<span class="line"><span style="color:#A6ACCD;">元素，内容区域可以看成元素自身。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）内联盒子（inline box）。“内联盒子”不会让内容成块显示，而是排成一行，这里的“内联盒子”实际指的就是元素的“外在盒</span></span>
<span class="line"><span style="color:#A6ACCD;">子”，用来决定元素是内联还是块级。该盒子又可以细分为“内联盒子”和“匿名内联盒子”两类。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）行框盒子（line box），每一行就是一个“行框盒子”（实线框标注），每个“行框盒子”又是由一个一个“内联盒子”组成的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）包含块（containing box），由一行一行的“行框盒子”组成。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）内容区域（content area）。内容区域指一种围绕文字看不见的盒子，其大小仅受字符本身特性控制，本质上是一个字符盒子</span></span>
<span class="line"><span style="color:#abb2bf;">（character box）；但是有些元素，如图片这样的替换元素，其内容显然不是文字，不存在字符盒子之类的，因此，对于这些</span></span>
<span class="line"><span style="color:#abb2bf;">元素，内容区域可以看成元素自身。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）内联盒子（inline box）。“内联盒子”不会让内容成块显示，而是排成一行，这里的“内联盒子”实际指的就是元素的“外在盒</span></span>
<span class="line"><span style="color:#abb2bf;">子”，用来决定元素是内联还是块级。该盒子又可以细分为“内联盒子”和“匿名内联盒子”两类。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）行框盒子（line box），每一行就是一个“行框盒子”（实线框标注），每个“行框盒子”又是由一个一个“内联盒子”组成的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）包含块（containing box），由一行一行的“行框盒子”组成。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_72-什么是幽灵空白节点" tabindex="-1">72.什么是幽灵空白节点？ <a class="header-anchor" href="#_72-什么是幽灵空白节点" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">“幽灵空白节点”是内联盒模型中非常重要的一个概念，具体指的是：在HTML5文档声明中，内联元素的所有解析和渲染表现就如同</span></span>
<span class="line"><span style="color:#A6ACCD;">每个行框盒子的前面有一个“空白节点”一样。这个“空白节点”永远透明，不占据任何宽度，看不见也无法通过脚本获取，就好像幽灵</span></span>
<span class="line"><span style="color:#A6ACCD;">一样，但又确确实实地存在，表现如同文本节点一样，因此，我称之为“幽灵空白节点”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">“幽灵空白节点”是内联盒模型中非常重要的一个概念，具体指的是：在HTML5文档声明中，内联元素的所有解析和渲染表现就如同</span></span>
<span class="line"><span style="color:#abb2bf;">每个行框盒子的前面有一个“空白节点”一样。这个“空白节点”永远透明，不占据任何宽度，看不见也无法通过脚本获取，就好像幽灵</span></span>
<span class="line"><span style="color:#abb2bf;">一样，但又确确实实地存在，表现如同文本节点一样，因此，我称之为“幽灵空白节点”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_73-什么是替换元素" tabindex="-1">73.什么是替换元素？ <a class="header-anchor" href="#_73-什么是替换元素" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">通过修改某个属性值呈现的内容就可以被替换的元素就称为“替换元素”。因此，&lt;img&gt;、&lt;object&gt;、&lt;video&gt;、&lt;iframe&gt;或者表</span></span>
<span class="line"><span style="color:#A6ACCD;">单元素&lt;textarea&gt;和&lt;input&gt;和&lt;select&gt;都是典型的替换元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">替换元素除了内容可替换这一特性以外，还有以下一些特性。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）内容的外观不受页面上的CSS的影响。用专业的话讲就是在样式表现在CSS作用域之外。如何更改替换元素本身的外观需要</span></span>
<span class="line"><span style="color:#A6ACCD;">类似appearance属性，或者浏览器自身暴露的一些样式接口，</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）有自己的尺寸。在Web中，很多替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是300像素×150像</span></span>
<span class="line"><span style="color:#A6ACCD;">素，如&lt;video&gt;、&lt;iframe&gt;或者&lt;canvas&gt;等，也有少部分替换元素为0像素，如&lt;img&gt;图片，而表单元素的替换元素</span></span>
<span class="line"><span style="color:#A6ACCD;">的尺寸则和浏览器有关，没有明显的规律。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）在很多CSS属性上有自己的一套表现规则。比较具有代表性的就是vertical-align属性，对于替换元素和非替换元素，ve</span></span>
<span class="line"><span style="color:#A6ACCD;">rtical-align属性值的解释是不一样的。比方说vertical-align的默认值的baseline，很简单的属性值，基线之意，</span></span>
<span class="line"><span style="color:#A6ACCD;">被定义为字符x的下边缘，而替换元素的基线却被硬生生定义成了元素的下边缘。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）所有的替换元素都是内联水平元素，也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。但是，替换元素默认</span></span>
<span class="line"><span style="color:#A6ACCD;">的display值却是不一样的，有的是inline，有的是inline-block。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">通过修改某个属性值呈现的内容就可以被替换的元素就称为“替换元素”。因此，&lt;img&gt;、&lt;object&gt;、&lt;video&gt;、&lt;iframe&gt;或者表</span></span>
<span class="line"><span style="color:#abb2bf;">单元素&lt;textarea&gt;和&lt;input&gt;和&lt;select&gt;都是典型的替换元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">替换元素除了内容可替换这一特性以外，还有以下一些特性。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）内容的外观不受页面上的CSS的影响。用专业的话讲就是在样式表现在CSS作用域之外。如何更改替换元素本身的外观需要</span></span>
<span class="line"><span style="color:#abb2bf;">类似appearance属性，或者浏览器自身暴露的一些样式接口，</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）有自己的尺寸。在Web中，很多替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是300像素×150像</span></span>
<span class="line"><span style="color:#abb2bf;">素，如&lt;video&gt;、&lt;iframe&gt;或者&lt;canvas&gt;等，也有少部分替换元素为0像素，如&lt;img&gt;图片，而表单元素的替换元素</span></span>
<span class="line"><span style="color:#abb2bf;">的尺寸则和浏览器有关，没有明显的规律。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）在很多CSS属性上有自己的一套表现规则。比较具有代表性的就是vertical-align属性，对于替换元素和非替换元素，ve</span></span>
<span class="line"><span style="color:#abb2bf;">rtical-align属性值的解释是不一样的。比方说vertical-align的默认值的baseline，很简单的属性值，基线之意，</span></span>
<span class="line"><span style="color:#abb2bf;">被定义为字符x的下边缘，而替换元素的基线却被硬生生定义成了元素的下边缘。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）所有的替换元素都是内联水平元素，也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。但是，替换元素默认</span></span>
<span class="line"><span style="color:#abb2bf;">的display值却是不一样的，有的是inline，有的是inline-block。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_74-替换元素的计算规则" tabindex="-1">74.替换元素的计算规则？ <a class="header-anchor" href="#_74-替换元素的计算规则" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">替换元素的尺寸从内而外分为3类：固有尺寸、HTML尺寸和CSS尺寸。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）固有尺寸指的是替换内容原本的尺寸。例如，图片、视频作为一个独立文件存在的时候，都是有着自己的宽度和高度的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）HTML尺寸只能通过HTML原生属性改变，这些HTML原生属性包括&lt;img&gt;的width和height属性、&lt;input&gt;的s</span></span>
<span class="line"><span style="color:#A6ACCD;">ize属性、&lt;textarea&gt;的cols和rows属性等。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）CSS尺寸特指可以通过CSS的width和height或者max-width/min-width和max-height/min-height设置的</span></span>
<span class="line"><span style="color:#A6ACCD;">尺寸，对应盒尺寸中的content box。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这3层结构的计算规则具体如下</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）如果没有CSS尺寸和HTML尺寸，则使用固有尺寸作为最终的宽高。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）如果没有CSS尺寸，则使用HTML尺寸作为最终的宽高。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）如果有CSS尺寸，则最终尺寸由CSS属性决定。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）如果上面的条件都不符合，则最终宽度表现为300像素，高度为150像素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）内联替换元素和块级替换元素使用上面同一套尺寸计算规则。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">替换元素的尺寸从内而外分为3类：固有尺寸、HTML尺寸和CSS尺寸。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）固有尺寸指的是替换内容原本的尺寸。例如，图片、视频作为一个独立文件存在的时候，都是有着自己的宽度和高度的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）HTML尺寸只能通过HTML原生属性改变，这些HTML原生属性包括&lt;img&gt;的width和height属性、&lt;input&gt;的s</span></span>
<span class="line"><span style="color:#abb2bf;">ize属性、&lt;textarea&gt;的cols和rows属性等。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）CSS尺寸特指可以通过CSS的width和height或者max-width/min-width和max-height/min-height设置的</span></span>
<span class="line"><span style="color:#abb2bf;">尺寸，对应盒尺寸中的content box。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">这3层结构的计算规则具体如下</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）如果没有CSS尺寸和HTML尺寸，则使用固有尺寸作为最终的宽高。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）如果没有CSS尺寸，则使用HTML尺寸作为最终的宽高。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）如果有CSS尺寸，则最终尺寸由CSS属性决定。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）如果上面的条件都不符合，则最终宽度表现为300像素，高度为150像素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）内联替换元素和块级替换元素使用上面同一套尺寸计算规则。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_75-content-与替换元素的关系" tabindex="-1">75.content 与替换元素的关系？ <a class="header-anchor" href="#_75-content-与替换元素的关系" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">content属性生成的对象称为“匿名替换元素”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）我们使用content生成的文本是无法选中、无法复制的，好像设置了user select:none声明一般，但是普通元素的文本</span></span>
<span class="line"><span style="color:#A6ACCD;">却可以被轻松选中。同时，content生成的文本无法被屏幕阅读设备读取，也无法被搜索引擎抓取，因此，千万不要自以为是</span></span>
<span class="line"><span style="color:#A6ACCD;">地把重要的文本信息使用content属性生成，因为这对可访问性和SEO都很不友好。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）content生成的内容不能左右:empty伪类。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）content动态生成值无法获取。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">content属性生成的对象称为“匿名替换元素”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）我们使用content生成的文本是无法选中、无法复制的，好像设置了user select:none声明一般，但是普通元素的文本</span></span>
<span class="line"><span style="color:#abb2bf;">却可以被轻松选中。同时，content生成的文本无法被屏幕阅读设备读取，也无法被搜索引擎抓取，因此，千万不要自以为是</span></span>
<span class="line"><span style="color:#abb2bf;">地把重要的文本信息使用content属性生成，因为这对可访问性和SEO都很不友好。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）content生成的内容不能左右:empty伪类。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）content动态生成值无法获取。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_76-margin-auto-的填充规则" tabindex="-1">76.margin:auto 的填充规则？ <a class="header-anchor" href="#_76-margin-auto-的填充规则" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">margin的&#39;auto&#39;可不是摆设，是具有强烈的计算意味的关键字，用来计算元素对应方向应该获得的剩余间距大小。但是触发mar</span></span>
<span class="line"><span style="color:#A6ACCD;">gin:auto计算有一个前提条件，就是width或height为auto时，元素是具有对应方向的自动填充特性的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）如果一侧定值，一侧auto，则auto为剩余空间大小。</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）如果两侧均是auto，则平分剩余空间。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">margin的&#39;auto&#39;可不是摆设，是具有强烈的计算意味的关键字，用来计算元素对应方向应该获得的剩余间距大小。但是触发mar</span></span>
<span class="line"><span style="color:#abb2bf;">gin:auto计算有一个前提条件，就是width或height为auto时，元素是具有对应方向的自动填充特性的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）如果一侧定值，一侧auto，则auto为剩余空间大小。</span></span>
<span class="line"><span style="color:#abb2bf;">（2）如果两侧均是auto，则平分剩余空间。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_77-margin-无效的情形" tabindex="-1">77.margin 无效的情形 <a class="header-anchor" href="#_77-margin-无效的情形" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）display计算值inline的非替换元素的垂直margin是无效的。对于内联替换元素，垂直margin有效，并且没有ma</span></span>
<span class="line"><span style="color:#A6ACCD;">rgin合并的问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）表格中的&lt;tr&gt;和&lt;td&gt;元素或者设置display计算值是table-cell或table-row的元素的margin都是无效的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）绝对定位元素非定位方位的margin值“无效”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）定高容器的子元素的margin-bottom或者宽度定死的子元素的margin-right的定位“失效”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）display计算值inline的非替换元素的垂直margin是无效的。对于内联替换元素，垂直margin有效，并且没有ma</span></span>
<span class="line"><span style="color:#abb2bf;">rgin合并的问题。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）表格中的&lt;tr&gt;和&lt;td&gt;元素或者设置display计算值是table-cell或table-row的元素的margin都是无效的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）绝对定位元素非定位方位的margin值“无效”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）定高容器的子元素的margin-bottom或者宽度定死的子元素的margin-right的定位“失效”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_78-border-的特殊性" tabindex="-1">78.border 的特殊性？ <a class="header-anchor" href="#_78-border-的特殊性" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）border-width却不支持百分比。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）border-style的默认值是none，有一部分人可能会误以为是solid。这也是单纯设置border-width或border-col</span></span>
<span class="line"><span style="color:#A6ACCD;">or没有边框显示的原因。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）border-style:double的表现规则：双线宽度永远相等，中间间隔±1。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）border-color默认颜色就是color色值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）默认background背景图片是相对于padding box定位的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）border-width却不支持百分比。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）border-style的默认值是none，有一部分人可能会误以为是solid。这也是单纯设置border-width或border-col</span></span>
<span class="line"><span style="color:#abb2bf;">or没有边框显示的原因。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）border-style:double的表现规则：双线宽度永远相等，中间间隔±1。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）border-color默认颜色就是color色值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）默认background背景图片是相对于padding box定位的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_79-什么是基线和-x-height" tabindex="-1">79.什么是基线和 x-height？ <a class="header-anchor" href="#_79-什么是基线和-x-height" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">字母x的下边缘（线）就是我们的基线。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">x-height指的就是小写字母x的高度，术语描述就是基线和等分线（meanline）（也称作中线，midline）之间的距离。在C</span></span>
<span class="line"><span style="color:#A6ACCD;">SS世界中，middle指的是基线往上1/2x-height高度。我们可以近似理解为字母x交叉点那个位置。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ex是CSS中的一个相对单位，指的是小写字母x的高度，没错，就是指x-height。ex的价值就在其副业上不受字体和字号影</span></span>
<span class="line"><span style="color:#A6ACCD;">响的内联元素的垂直居中对齐效果。内联元素默认是基线对齐的，而基线就是x的底部，而1ex就是一个x的高度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">字母x的下边缘（线）就是我们的基线。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">x-height指的就是小写字母x的高度，术语描述就是基线和等分线（meanline）（也称作中线，midline）之间的距离。在C</span></span>
<span class="line"><span style="color:#abb2bf;">SS世界中，middle指的是基线往上1/2x-height高度。我们可以近似理解为字母x交叉点那个位置。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">ex是CSS中的一个相对单位，指的是小写字母x的高度，没错，就是指x-height。ex的价值就在其副业上不受字体和字号影</span></span>
<span class="line"><span style="color:#abb2bf;">响的内联元素的垂直居中对齐效果。内联元素默认是基线对齐的，而基线就是x的底部，而1ex就是一个x的高度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_80-line-height-的特殊性" tabindex="-1">80.line-height 的特殊性？ <a class="header-anchor" href="#_80-line-height-的特殊性" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）对于非替换元素的纯内联元素，其可视高度完全由line-height决定。对于文本这样的纯内联元素，line-height就是高</span></span>
<span class="line"><span style="color:#A6ACCD;">度计算的基石，用专业说法就是指定了用来计算行框盒子高度的基础高度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）内联元素的高度由固定高度和不固定高度组成，这个不固定的部分就是这里的“行距”。换句话说，line-height之所以起作</span></span>
<span class="line"><span style="color:#A6ACCD;">用，就是通过改变“行距”来实现的。在CSS中，“行距”分散在当前文字的上方和下方，也就是即使是第一行文字，其上方也是</span></span>
<span class="line"><span style="color:#A6ACCD;">有“行距”的，只不过这个“行距”的高度仅仅是完整“行距”高度的一半，因此，也被称为“半行距”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）行距=line-height-font-size。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）border以及line-height等传统CSS属性并没有小数像素的概念。如果标注的是文字上边距，则向下取整；如果是文字下</span></span>
<span class="line"><span style="color:#A6ACCD;">边距，则向上取整。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）对于纯文本元素，line-height直接决定了最终的高度。但是，如果同时有替换元素，则line-height只能决定最小高度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）对于块级元素，line-height对其本身是没有任何作用的，我们平时改变line-height，块级元素的高度跟着变化实际上是</span></span>
<span class="line"><span style="color:#A6ACCD;">通过改变块级元素里面内联级别元素占据的高度实现的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（7）line-height的默认值是normal，还支持数值、百分比值以及长度值。为数值类型时，其最终的计算值是和当前font-si</span></span>
<span class="line"><span style="color:#A6ACCD;">ze相乘后的值。为百分比值时，其最终的计算值是和当前font-size相乘后的值。为长度值时原意不变。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（8）如果使用数值作为line-height的属性值，那么所有的子元素继承的都是这个值；但是，如果使用百分比值或者长度值作为</span></span>
<span class="line"><span style="color:#A6ACCD;">属性值，那么所有的子元素继承的是最终的计算值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（9）无论内联元素line-height如何设置，最终父级元素的高度都是由数值大的那个line-height决定的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（10）只要有“内联盒子”在，就一定会有“行框盒子”，就是每一行内联元素外面包裹的一层看不见的盒子。然后，重点来了，在每个</span></span>
<span class="line"><span style="color:#A6ACCD;">“行框盒子”前面有一个宽度为0的具有该元素的字体和行高属性的看不见的“幽灵空白节点”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）对于非替换元素的纯内联元素，其可视高度完全由line-height决定。对于文本这样的纯内联元素，line-height就是高</span></span>
<span class="line"><span style="color:#abb2bf;">度计算的基石，用专业说法就是指定了用来计算行框盒子高度的基础高度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）内联元素的高度由固定高度和不固定高度组成，这个不固定的部分就是这里的“行距”。换句话说，line-height之所以起作</span></span>
<span class="line"><span style="color:#abb2bf;">用，就是通过改变“行距”来实现的。在CSS中，“行距”分散在当前文字的上方和下方，也就是即使是第一行文字，其上方也是</span></span>
<span class="line"><span style="color:#abb2bf;">有“行距”的，只不过这个“行距”的高度仅仅是完整“行距”高度的一半，因此，也被称为“半行距”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）行距=line-height-font-size。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）border以及line-height等传统CSS属性并没有小数像素的概念。如果标注的是文字上边距，则向下取整；如果是文字下</span></span>
<span class="line"><span style="color:#abb2bf;">边距，则向上取整。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）对于纯文本元素，line-height直接决定了最终的高度。但是，如果同时有替换元素，则line-height只能决定最小高度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）对于块级元素，line-height对其本身是没有任何作用的，我们平时改变line-height，块级元素的高度跟着变化实际上是</span></span>
<span class="line"><span style="color:#abb2bf;">通过改变块级元素里面内联级别元素占据的高度实现的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（7）line-height的默认值是normal，还支持数值、百分比值以及长度值。为数值类型时，其最终的计算值是和当前font-si</span></span>
<span class="line"><span style="color:#abb2bf;">ze相乘后的值。为百分比值时，其最终的计算值是和当前font-size相乘后的值。为长度值时原意不变。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（8）如果使用数值作为line-height的属性值，那么所有的子元素继承的都是这个值；但是，如果使用百分比值或者长度值作为</span></span>
<span class="line"><span style="color:#abb2bf;">属性值，那么所有的子元素继承的是最终的计算值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（9）无论内联元素line-height如何设置，最终父级元素的高度都是由数值大的那个line-height决定的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（10）只要有“内联盒子”在，就一定会有“行框盒子”，就是每一行内联元素外面包裹的一层看不见的盒子。然后，重点来了，在每个</span></span>
<span class="line"><span style="color:#abb2bf;">“行框盒子”前面有一个宽度为0的具有该元素的字体和行高属性的看不见的“幽灵空白节点”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_81-vertical-align-的特殊性" tabindex="-1">81.vertical-align 的特殊性？ <a class="header-anchor" href="#_81-vertical-align-的特殊性" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）vertical-align的默认值是baseline，即基线对齐，而基线的定义是字母x的下边缘。因此，内联元素默认都是沿着字</span></span>
<span class="line"><span style="color:#A6ACCD;">母x的下边缘对齐的。对于图片等替换元素，往往使用元素本身的下边缘作为基线。：一个inline-block元素，如果里面</span></span>
<span class="line"><span style="color:#A6ACCD;">没有内联元素，或者overflow不是visible，则该元素的基线就是其margin底边缘；否则其基线就是元素里面最后一行</span></span>
<span class="line"><span style="color:#A6ACCD;">内联元素的基线。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）vertical-align:top就是垂直上边缘对齐，如果是内联元素，则和这一行位置最高的内联元素的顶部对齐；如果display</span></span>
<span class="line"><span style="color:#A6ACCD;">计算值是table-cell的元素，我们不妨脑补成&lt;td&gt;元素，则和&lt;tr&gt;元素上边缘对齐。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）vertical-align:middle是中间对齐，对于内联元素，元素的垂直中心点和行框盒子基线往上1/2x-height处对齐。对</span></span>
<span class="line"><span style="color:#A6ACCD;">于table-cell元素，单元格填充盒子相对于外面的表格行居中对齐。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）vertical-align支持数值属性，根据数值的不同，相对于基线往上或往下偏移，如果是负值，往下偏移，如果是正值，往上</span></span>
<span class="line"><span style="color:#A6ACCD;">偏移。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）vertical-align属性的百分比值则是相对于line-height的计算值计算的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（6）vertical-align起作用是有前提条件的，这个前提条件就是：只能应用于内联元素以及display值为table-cell的元</span></span>
<span class="line"><span style="color:#A6ACCD;">素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（7）table-cell元素设置vertical-align垂直对齐的是子元素，但是其作用的并不是子元素，而是table-cell元素自身。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）vertical-align的默认值是baseline，即基线对齐，而基线的定义是字母x的下边缘。因此，内联元素默认都是沿着字</span></span>
<span class="line"><span style="color:#abb2bf;">母x的下边缘对齐的。对于图片等替换元素，往往使用元素本身的下边缘作为基线。：一个inline-block元素，如果里面</span></span>
<span class="line"><span style="color:#abb2bf;">没有内联元素，或者overflow不是visible，则该元素的基线就是其margin底边缘；否则其基线就是元素里面最后一行</span></span>
<span class="line"><span style="color:#abb2bf;">内联元素的基线。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）vertical-align:top就是垂直上边缘对齐，如果是内联元素，则和这一行位置最高的内联元素的顶部对齐；如果display</span></span>
<span class="line"><span style="color:#abb2bf;">计算值是table-cell的元素，我们不妨脑补成&lt;td&gt;元素，则和&lt;tr&gt;元素上边缘对齐。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）vertical-align:middle是中间对齐，对于内联元素，元素的垂直中心点和行框盒子基线往上1/2x-height处对齐。对</span></span>
<span class="line"><span style="color:#abb2bf;">于table-cell元素，单元格填充盒子相对于外面的表格行居中对齐。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）vertical-align支持数值属性，根据数值的不同，相对于基线往上或往下偏移，如果是负值，往下偏移，如果是正值，往上</span></span>
<span class="line"><span style="color:#abb2bf;">偏移。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）vertical-align属性的百分比值则是相对于line-height的计算值计算的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（6）vertical-align起作用是有前提条件的，这个前提条件就是：只能应用于内联元素以及display值为table-cell的元</span></span>
<span class="line"><span style="color:#abb2bf;">素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（7）table-cell元素设置vertical-align垂直对齐的是子元素，但是其作用的并不是子元素，而是table-cell元素自身。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_82-overflow-的特殊性" tabindex="-1">82.overflow 的特殊性？ <a class="header-anchor" href="#_82-overflow-的特殊性" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）一个设置了overflow:hidden声明的元素，假设同时存在border属性和padding属性，则当子元素内容超出容器宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">高度限制的时候，剪裁的边界是border box的内边缘，而非padding box的内边缘。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）HTML中有两个标签是默认可以产生滚动条的，一个是根元素&lt;html&gt;，另一个是文本域&lt;textarea&gt;。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）滚动条会占用容器的可用宽度或高度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）元素设置了overflow:hidden声明，里面内容高度溢出的时候，滚动依然存在，仅仅滚动条不存在！</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）一个设置了overflow:hidden声明的元素，假设同时存在border属性和padding属性，则当子元素内容超出容器宽度</span></span>
<span class="line"><span style="color:#abb2bf;">高度限制的时候，剪裁的边界是border box的内边缘，而非padding box的内边缘。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）HTML中有两个标签是默认可以产生滚动条的，一个是根元素&lt;html&gt;，另一个是文本域&lt;textarea&gt;。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）滚动条会占用容器的可用宽度或高度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）元素设置了overflow:hidden声明，里面内容高度溢出的时候，滚动依然存在，仅仅滚动条不存在！</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_83-无依赖绝对定位是什么" tabindex="-1">83.无依赖绝对定位是什么？ <a class="header-anchor" href="#_83-无依赖绝对定位是什么" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">没有设置left/top/right/bottom属性值的绝对定位称为“无依赖绝对定位”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">无依赖绝对定位其定位的位置和没有设置position:absolute时候的位置相关。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">没有设置left/top/right/bottom属性值的绝对定位称为“无依赖绝对定位”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">无依赖绝对定位其定位的位置和没有设置position:absolute时候的位置相关。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_84-absolute-与-overflow-的关系" tabindex="-1">84.absolute 与 overflow 的关系？ <a class="header-anchor" href="#_84-absolute-与-overflow-的关系" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）如果overflow不是定位元素，同时绝对定位元素和overflow容器之间也没有定位元素，则overflow无法对absolute</span></span>
<span class="line"><span style="color:#A6ACCD;">元素进行剪裁。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）如果overflow的属性值不是hidden而是auto或者scroll，即使绝对定位元素高宽比overflow元素高宽还要大，也</span></span>
<span class="line"><span style="color:#A6ACCD;">都不会出现滚动条。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）overflow元素自身transform的时候，Chrome和Opera浏览器下的overflow剪裁是无效的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）如果overflow不是定位元素，同时绝对定位元素和overflow容器之间也没有定位元素，则overflow无法对absolute</span></span>
<span class="line"><span style="color:#abb2bf;">元素进行剪裁。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）如果overflow的属性值不是hidden而是auto或者scroll，即使绝对定位元素高宽比overflow元素高宽还要大，也</span></span>
<span class="line"><span style="color:#abb2bf;">都不会出现滚动条。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）overflow元素自身transform的时候，Chrome和Opera浏览器下的overflow剪裁是无效的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_85-clip-裁剪是什么" tabindex="-1">85.clip 裁剪是什么？ <a class="header-anchor" href="#_85-clip-裁剪是什么" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">所谓“可访问性隐藏”，指的是虽然内容肉眼看不见，但是其他辅助设备却能够进行识别和访问的隐藏。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">clip剪裁被我称为“最佳可访问性隐藏”的另外一个原因就是，它具有更强的普遍适应性，任何元素、任何场景都可以无障碍使用。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">所谓“可访问性隐藏”，指的是虽然内容肉眼看不见，但是其他辅助设备却能够进行识别和访问的隐藏。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">clip剪裁被我称为“最佳可访问性隐藏”的另外一个原因就是，它具有更强的普遍适应性，任何元素、任何场景都可以无障碍使用。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_86-relative-的特殊性" tabindex="-1">86.relative 的特殊性？ <a class="header-anchor" href="#_86-relative-的特殊性" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）相对定位元素的left/top/right/bottom的百分比值是相对于包含块计算的，而不是自身。注意，虽然定位位移是相对自身，但是百分比值的计算值不是。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）top和bottom这两个垂直方向的百分比值计算跟height的百分比值是一样的，都是相对高度计算的。同时，如果包含块的高度是auto，那么计算值是0，偏移无效，也就是说，如果父元素没有设定高度或者不是“格式化高度”，那么relative类似top:20%的代码等同于top:0。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）当相对定位元素同时应用对立方向定位值的时候，也就是top/bottom和left/right同时使用的时候，只有一个方向的定位属性会起作用。而谁起作用则是与文档流的顺序有关的，默认的文档流是自上而下、从左往右，因此top/bottom同时使用的时候，bottom失效；left/right同时使用的时候，right失效。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）相对定位元素的left/top/right/bottom的百分比值是相对于包含块计算的，而不是自身。注意，虽然定位位移是相对自身，但是百分比值的计算值不是。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）top和bottom这两个垂直方向的百分比值计算跟height的百分比值是一样的，都是相对高度计算的。同时，如果包含块的高度是auto，那么计算值是0，偏移无效，也就是说，如果父元素没有设定高度或者不是“格式化高度”，那么relative类似top:20%的代码等同于top:0。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）当相对定位元素同时应用对立方向定位值的时候，也就是top/bottom和left/right同时使用的时候，只有一个方向的定位属性会起作用。而谁起作用则是与文档流的顺序有关的，默认的文档流是自上而下、从左往右，因此top/bottom同时使用的时候，bottom失效；left/right同时使用的时候，right失效。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_87-什么是层叠上下文" tabindex="-1">87.什么是层叠上下文？ <a class="header-anchor" href="#_87-什么是层叠上下文" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">层叠上下文，英文称作stacking context，是HTML中的一个三维的概念。如果一个元素含有层叠上下文，我们可以理解为这个元</span></span>
<span class="line"><span style="color:#A6ACCD;">素在z轴上就“高人一等”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">层叠上下文元素有如下特性：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）层叠上下文的层叠水平要比普通元素高（原因后面会说明）。</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）层叠上下文可以阻断元素的混合模式。</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）层叠上下文可以嵌套，内部层叠上下文及其所有子元素均受制于外部的“层叠上下文”。</span></span>
<span class="line"><span style="color:#A6ACCD;">（4）每个层叠上下文和兄弟元素独立，也就是说，当进行层叠变化或渲染的时候，只需要考虑后代元素。</span></span>
<span class="line"><span style="color:#A6ACCD;">（5）每个层叠上下文是自成体系的，当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">层叠上下文的创建：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）页面根元素天生具有层叠上下文，称为根层叠上下文。根层叠上下文指的是页面根元素，可以看成是&lt;html&gt;元素。因此，页面中所有的元素一定处于至少一个“层叠结界”中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）对于position值为relative/absolute以及Firefox/IE浏览器（不包括Chrome浏览器）下含有position:fixed声明的定位元素，当其z-index值不是auto的时候，会创建层叠上下文。Chrome等WebKit内核浏览器下，position:fixed元素天然层叠上下文元素，无须z-index为数值。根据我的测试，目前IE和Firefox仍是老套路。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）其他一些CSS3属性，比如元素的opacity值不是1。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">层叠上下文，英文称作stacking context，是HTML中的一个三维的概念。如果一个元素含有层叠上下文，我们可以理解为这个元</span></span>
<span class="line"><span style="color:#abb2bf;">素在z轴上就“高人一等”。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">层叠上下文元素有如下特性：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）层叠上下文的层叠水平要比普通元素高（原因后面会说明）。</span></span>
<span class="line"><span style="color:#abb2bf;">（2）层叠上下文可以阻断元素的混合模式。</span></span>
<span class="line"><span style="color:#abb2bf;">（3）层叠上下文可以嵌套，内部层叠上下文及其所有子元素均受制于外部的“层叠上下文”。</span></span>
<span class="line"><span style="color:#abb2bf;">（4）每个层叠上下文和兄弟元素独立，也就是说，当进行层叠变化或渲染的时候，只需要考虑后代元素。</span></span>
<span class="line"><span style="color:#abb2bf;">（5）每个层叠上下文是自成体系的，当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">层叠上下文的创建：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）页面根元素天生具有层叠上下文，称为根层叠上下文。根层叠上下文指的是页面根元素，可以看成是&lt;html&gt;元素。因此，页面中所有的元素一定处于至少一个“层叠结界”中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）对于position值为relative/absolute以及Firefox/IE浏览器（不包括Chrome浏览器）下含有position:fixed声明的定位元素，当其z-index值不是auto的时候，会创建层叠上下文。Chrome等WebKit内核浏览器下，position:fixed元素天然层叠上下文元素，无须z-index为数值。根据我的测试，目前IE和Firefox仍是老套路。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）其他一些CSS3属性，比如元素的opacity值不是1。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_88-什么是层叠水平" tabindex="-1">88.什么是层叠水平？ <a class="header-anchor" href="#_88-什么是层叠水平" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">层叠水平，英文称作stacking level，决定了同一个层叠上下文中元素在z轴上的显示顺序。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">显而易见，所有的元素都有层叠水平，包括层叠上下文元素，也包括普通元素。然而，对普通元素的层叠水平探讨只局限在当前层叠上</span></span>
<span class="line"><span style="color:#A6ACCD;">下文元素中。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">层叠水平，英文称作stacking level，决定了同一个层叠上下文中元素在z轴上的显示顺序。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">显而易见，所有的元素都有层叠水平，包括层叠上下文元素，也包括普通元素。然而，对普通元素的层叠水平探讨只局限在当前层叠上</span></span>
<span class="line"><span style="color:#abb2bf;">下文元素中。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_89-元素的层叠顺序" tabindex="-1">89.元素的层叠顺序？ <a class="header-anchor" href="#_89-元素的层叠顺序" aria-hidden="true">#</a></h4><p>层叠顺序，英文称作 stacking order，表示元素发生层叠时有着特定的垂直显示顺序。</p><p><img src="https://cavszhouyou-1254093697.cos.ap-chongqing.myqcloud.com/note-15.png" alt="层叠顺序"></p><h4 id="_90-层叠准则" tabindex="-1">90.层叠准则？ <a class="header-anchor" href="#_90-层叠准则" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）谁大谁上：当具有明显的层叠水平标识的时候，如生效的z-index属性值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在DOM流中处于后面的元素会覆盖前面的元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）谁大谁上：当具有明显的层叠水平标识的时候，如生效的z-index属性值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在DOM流中处于后面的元素会覆盖前面的元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_91-font-weight-的特殊性" tabindex="-1">91.font-weight 的特殊性？ <a class="header-anchor" href="#_91-font-weight-的特殊性" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">如果使用数值作为font-weight属性值，必须是100～900的整百数。因为这里的数值仅仅是外表长得像数值，实际上是一个具有特定含义的关键字，并且这里的数值关键字和字母关键字之间是有对应关系的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">如果使用数值作为font-weight属性值，必须是100～900的整百数。因为这里的数值仅仅是外表长得像数值，实际上是一个具有特定含义的关键字，并且这里的数值关键字和字母关键字之间是有对应关系的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_92-text-indent-的特殊性" tabindex="-1">92.text-indent 的特殊性？ <a class="header-anchor" href="#_92-text-indent-的特殊性" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">（1）text-indent仅对第一行内联盒子内容有效。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）非替换元素以外的display计算值为inline的内联元素设置text-indent值无效，如果计算值inline-block/inli</span></span>
<span class="line"><span style="color:#A6ACCD;">ne-table则会生效。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）&lt;input&gt;标签按钮text-indent值无效。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）&lt;button&gt;标签按钮text-indent值有效。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）text-indent的百分比值是相对于当前元素的“包含块”计算的，而不是当前元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">（1）text-indent仅对第一行内联盒子内容有效。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）非替换元素以外的display计算值为inline的内联元素设置text-indent值无效，如果计算值inline-block/inli</span></span>
<span class="line"><span style="color:#abb2bf;">ne-table则会生效。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）&lt;input&gt;标签按钮text-indent值无效。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）&lt;button&gt;标签按钮text-indent值有效。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）text-indent的百分比值是相对于当前元素的“包含块”计算的，而不是当前元素。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_93-letter-spacing-与字符间距" tabindex="-1">93.letter-spacing 与字符间距？ <a class="header-anchor" href="#_93-letter-spacing-与字符间距" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">letter-spacing可以用来控制字符之间的间距，这里说的“字符”包括英文字母、汉字以及空格等。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">letter-spacing具有以下一些特性。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）继承性。</span></span>
<span class="line"><span style="color:#A6ACCD;">（2）默认值是normal而不是0。虽然说正常情况下，normal的计算值就是0，但两者还是有差别的，在有些场景下，letter-spacing会调整normal的计算值以实现更好的版面布局。</span></span>
<span class="line"><span style="color:#A6ACCD;">（3）支持负值，且值足够大的时候，会让字符形成重叠，甚至反向排列。</span></span>
<span class="line"><span style="color:#A6ACCD;">（4）和text-indent属性一样，无论值多大或多小，第一行一定会保留至少一个字符。</span></span>
<span class="line"><span style="color:#A6ACCD;">（5）支持小数值，即使0.1px也是支持的。</span></span>
<span class="line"><span style="color:#A6ACCD;">（6）暂不支持百分比值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">letter-spacing可以用来控制字符之间的间距，这里说的“字符”包括英文字母、汉字以及空格等。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">letter-spacing具有以下一些特性。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）继承性。</span></span>
<span class="line"><span style="color:#abb2bf;">（2）默认值是normal而不是0。虽然说正常情况下，normal的计算值就是0，但两者还是有差别的，在有些场景下，letter-spacing会调整normal的计算值以实现更好的版面布局。</span></span>
<span class="line"><span style="color:#abb2bf;">（3）支持负值，且值足够大的时候，会让字符形成重叠，甚至反向排列。</span></span>
<span class="line"><span style="color:#abb2bf;">（4）和text-indent属性一样，无论值多大或多小，第一行一定会保留至少一个字符。</span></span>
<span class="line"><span style="color:#abb2bf;">（5）支持小数值，即使0.1px也是支持的。</span></span>
<span class="line"><span style="color:#abb2bf;">（6）暂不支持百分比值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_94-word-spacing-与单词间距" tabindex="-1">94.word-spacing 与单词间距？ <a class="header-anchor" href="#_94-word-spacing-与单词间距" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">letter-spacing作用于所有字符，但word-spacing仅作用于空格字符。换句话说，word-spacing的作用就是增加空格的间隙</span></span>
<span class="line"><span style="color:#A6ACCD;">宽度。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">letter-spacing作用于所有字符，但word-spacing仅作用于空格字符。换句话说，word-spacing的作用就是增加空格的间隙</span></span>
<span class="line"><span style="color:#abb2bf;">宽度。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_95-white-space-与换行和空格的控制" tabindex="-1">95.white-space 与换行和空格的控制？ <a class="header-anchor" href="#_95-white-space-与换行和空格的控制" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">white-space属性声明了如何处理元素内的空白字符，这类空白字符包括Space（空格）键、Enter（回车）键、Tab（制表符）</span></span>
<span class="line"><span style="color:#A6ACCD;">键产生的空白。因此，white-space可以决定图文内容是否在一行显示（回车空格是否生效），是否显示大段连续空白（空格是否</span></span>
<span class="line"><span style="color:#A6ACCD;">生效）等。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">其属性值包括下面这些。</span></span>
<span class="line"><span style="color:#A6ACCD;">•normal：合并空白字符和换行符。</span></span>
<span class="line"><span style="color:#A6ACCD;">•pre：空白字符不合并，并且内容只在有换行符的地方换行。</span></span>
<span class="line"><span style="color:#A6ACCD;">•nowrap：该值和normal一样会合并空白字符，但不允许文本环绕。</span></span>
<span class="line"><span style="color:#A6ACCD;">•pre-wrap：空白字符不合并，并且内容只在有换行符的地方换行，同时允许文本环绕。</span></span>
<span class="line"><span style="color:#A6ACCD;">•pre-line：合并空白字符，但只在有换行符的地方换行，允许文本环绕。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">white-space属性声明了如何处理元素内的空白字符，这类空白字符包括Space（空格）键、Enter（回车）键、Tab（制表符）</span></span>
<span class="line"><span style="color:#abb2bf;">键产生的空白。因此，white-space可以决定图文内容是否在一行显示（回车空格是否生效），是否显示大段连续空白（空格是否</span></span>
<span class="line"><span style="color:#abb2bf;">生效）等。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">其属性值包括下面这些。</span></span>
<span class="line"><span style="color:#abb2bf;">•normal：合并空白字符和换行符。</span></span>
<span class="line"><span style="color:#abb2bf;">•pre：空白字符不合并，并且内容只在有换行符的地方换行。</span></span>
<span class="line"><span style="color:#abb2bf;">•nowrap：该值和normal一样会合并空白字符，但不允许文本环绕。</span></span>
<span class="line"><span style="color:#abb2bf;">•pre-wrap：空白字符不合并，并且内容只在有换行符的地方换行，同时允许文本环绕。</span></span>
<span class="line"><span style="color:#abb2bf;">•pre-line：合并空白字符，但只在有换行符的地方换行，允许文本环绕。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_96-隐藏元素的-background-image-到底加不加载" tabindex="-1">96.隐藏元素的 background-image 到底加不加载？ <a class="header-anchor" href="#_96-隐藏元素的-background-image-到底加不加载" aria-hidden="true">#</a></h4><p>相关知识点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">根据测试，一个元素如果display计算值为none，在IE浏览器下（IE8～IE11，更高版本不确定）依然会发送图片请求，Fire</span></span>
<span class="line"><span style="color:#A6ACCD;">fox浏览器不会，至于Chrome和Safari浏览器则似乎更加智能一点：如果隐藏元素同时又设置了background-image，则图片</span></span>
<span class="line"><span style="color:#A6ACCD;">依然会去加载；如果是父元素的display计算值为none，则背景图不会请求，此时浏览器或许放心地认为这个背景图暂时是不会使</span></span>
<span class="line"><span style="color:#A6ACCD;">用的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果不是background-image，而是&lt;img&gt;元素，则设置display:none在所有浏览器下依旧都会请求图片资源。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">还需要注意的是如果设置的样式没有对应的元素，则background-image也不会加载。hover情况下的background-image，在触</span></span>
<span class="line"><span style="color:#A6ACCD;">发时加载。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">根据测试，一个元素如果display计算值为none，在IE浏览器下（IE8～IE11，更高版本不确定）依然会发送图片请求，Fire</span></span>
<span class="line"><span style="color:#abb2bf;">fox浏览器不会，至于Chrome和Safari浏览器则似乎更加智能一点：如果隐藏元素同时又设置了background-image，则图片</span></span>
<span class="line"><span style="color:#abb2bf;">依然会去加载；如果是父元素的display计算值为none，则背景图不会请求，此时浏览器或许放心地认为这个背景图暂时是不会使</span></span>
<span class="line"><span style="color:#abb2bf;">用的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">如果不是background-image，而是&lt;img&gt;元素，则设置display:none在所有浏览器下依旧都会请求图片资源。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">还需要注意的是如果设置的样式没有对应的元素，则background-image也不会加载。hover情况下的background-image，在触</span></span>
<span class="line"><span style="color:#abb2bf;">发时加载。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>回答：</p><p>-（1）元素的背景图片</p><p>-元素本身设置 display:none，会请求图片 -父级元素设置 display:none，不会请求图片 -样式没有元素使用，不会请求 -:hover 样式下，触发时请求</p><p>-（2）img 标签图片任何情况下都会请求图片</p><p>详细资料可以参考： <a href="https://www.jb51.net/css/469033.html" target="_blank" rel="noreferrer">《CSS 控制前端图片 HTTP 请求的各种情况示例》</a></p><h4 id="_97-如何实现单行-多行文本溢出的省略" tabindex="-1">97.如何实现单行／多行文本溢出的省略（...）？ <a class="header-anchor" href="#_97-如何实现单行-多行文本溢出的省略" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*单行文本溢出*/</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ellipsis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*多行文本溢出*/</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/*高度为需要显示的行数*行高，比如这里我们显示两行，则为3*/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*单行文本溢出*/</span></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-overflow: </span><span style="color:#D19A66;">ellipsis</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  white-space: </span><span style="color:#D19A66;">nowrap</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*多行文本溢出*/</span></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  line-height: </span><span style="color:#D19A66;">1.5</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/*高度为需要显示的行数*行高，比如这里我们显示两行，则为3*/</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#56B6C2;">:after</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&#39;...&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>详细资料可以参考： <a href="https://zhuanlan.zhihu.com/p/30707916" target="_blank" rel="noreferrer">《【CSS/JS】如何实现单行／多行文本溢出的省略》</a><a href="https://juejin.im/entry/587f453e1b69e60058555a5f" target="_blank" rel="noreferrer">《CSS 多行文本溢出省略显示》</a></p><h4 id="_98-常见的元素隐藏方式" tabindex="-1">98.常见的元素隐藏方式？ <a class="header-anchor" href="#_98-常见的元素隐藏方式" aria-hidden="true">#</a></h4><p>-（1）使用 display:none;隐藏元素，渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。</p><p>-（2）使用 visibility:hidden;隐藏元素。元素在页面中仍占据空间，但是不会响应绑定的监听事件。</p><p>-（3）使用 opacity:0;将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。</p><p>-（4）通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。</p><p>-（5）通过 z-index 负值，来使其他元素遮盖住该元素，以此来实现隐藏。</p><p>-（6）通过 clip/clip-path 元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。</p><p>-（7）通过 transform:scale(0,0)来将元素缩放为 0，以此来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。</p><p>详细资料可以参考： <a href="https://juejin.im/post/584b645a128fe10058a0d625#heading-2" target="_blank" rel="noreferrer">《CSS 隐藏元素的八种方法》</a></p><h4 id="_99-css-实现上下固定中间自适应布局" tabindex="-1">99.css 实现上下固定中间自适应布局？ <a class="header-anchor" href="#_99-css-实现上下固定中间自适应布局" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">利用绝对定位实现body </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">footer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">利用flex布局实现html</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> column</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-grow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">footer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#C678DD;">利用绝对定位实现body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.header</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">green</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.footer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">利用flex布局实现html</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-direction: </span><span style="color:#D19A66;">column</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.header</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-grow: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">green</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.footer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>详细资料可以参考： <a href="https://www.jianshu.com/p/30bc9751e3e8" target="_blank" rel="noreferrer">《css 实现上下固定中间自适应布局》</a></p><h4 id="_100-css-两栏布局的实现" tabindex="-1">100.css 两栏布局的实现？ <a class="header-anchor" href="#_100-css-两栏布局的实现" aria-hidden="true">#</a></h4><p>相关资料：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*两栏布局一般指的是页面中一共两栏，左边固定，右边自适应的布局，一共有四种实现的方式。*/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*以左边宽度固定为200px为例*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（1）利用浮动，将左边元素宽度设置为200px，并且设置向左浮动。将右边元素的margin-left设置为200px，宽度设置为auto（默认为auto，撑满整个父元素）。*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">outer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（2）第二种是利用flex布局，将左边元素的放大和缩小比例设置为0，基础大小设置为200px。将右边的元素的放大比例设置为1，缩小比例设置为1，基础大小设置为auto。*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">outer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-shrink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-grow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-basis</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/*11auto*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（3）第三种是利用绝对定位布局的方式，将父级元素设置相对定位。左边元素设置为absolute定位，并且宽度设置为</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">200px。将右边元素的margin-left的值设置为200px。*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">outer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（4）第四种还是利用绝对定位的方式，将父级元素设置为相对定位。左边元素宽度设置为200px，右边元素设置为绝对定位，左边定位为200px，其余方向定位为0。*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">outer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*两栏布局一般指的是页面中一共两栏，左边固定，右边自适应的布局，一共有四种实现的方式。*/</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*以左边宽度固定为200px为例*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*（1）利用浮动，将左边元素宽度设置为200px，并且设置向左浮动。将右边元素的margin-left设置为200px，宽度设置为auto（默认为auto，撑满整个父元素）。*/</span></span>
<span class="line"><span style="color:#D19A66;">.outer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  float: </span><span style="color:#D19A66;">left</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  background: gold;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*（2）第二种是利用flex布局，将左边元素的放大和缩小比例设置为0，基础大小设置为200px。将右边的元素的放大比例设置为1，缩小比例设置为1，基础大小设置为auto。*/</span></span>
<span class="line"><span style="color:#D19A66;">.outer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-shrink: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-grow: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex-basis: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/*11auto*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  background: gold;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*（3）第三种是利用绝对定位布局的方式，将父级元素设置相对定位。左边元素设置为absolute定位，并且宽度设置为</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">200px。将右边元素的margin-left的值设置为200px。*/</span></span>
<span class="line"><span style="color:#D19A66;">.outer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  background: gold;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*（4）第四种还是利用绝对定位的方式，将父级元素设置为相对定位。左边元素宽度设置为200px，右边元素设置为绝对定位，左边定位为200px，其余方向定位为0。*/</span></span>
<span class="line"><span style="color:#D19A66;">.outer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  background: gold;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="http://cavszhouyou.top/Demo-Display/TwoColumnLayout/index.html" target="_blank" rel="noreferrer">《两栏布局 demo 展示》</a></p><p>回答：</p><p>两栏布局一般指的是页面中一共两栏，左边固定，右边自适应的布局，一共有四种实现的方式。</p><p>以左边宽度固定为 200px 为例</p><p>-（1）利用浮动，将左边元素宽度设置为 200px，并且设置向左浮动。将右边元素的 margin-left 设置为 200px，宽度设置为 auto（默认为 auto，撑满整个父元素）。</p><p>-（2）第二种是利用 flex 布局，将左边元素的放大和缩小比例设置为 0，基础大小设置为 200px。将右边的元素的放大比例设置为 1，缩小比例设置为 1，基础大小设置为 auto。</p><p>-（3）第三种是利用绝对定位布局的方式，将父级元素设置相对定位。左边元素设置为 absolute 定位，并且宽度设置为 200px。将右边元素的 margin-left 的值设置为 200px。</p><p>-（4）第四种还是利用绝对定位的方式，将父级元素设置为相对定位。左边元素宽度设置为 200px，右边元素设置为绝对定位，左边定位为 200px，其余方向定位为 0。</p><h4 id="_101-css-三栏布局的实现" tabindex="-1">101.css 三栏布局的实现？ <a class="header-anchor" href="#_101-css-三栏布局的实现" aria-hidden="true">#</a></h4><p>相关资料：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*三栏布局一般指的是页面中一共有三栏，左右两栏宽度固定，中间自适应的布局，一共有五种实现方式。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">这里以左边宽度固定为100px，右边宽度固定为200px为例。*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（1）利用绝对定位的方式，左右两栏设置为绝对定位，中间设置对应方向大小的margin的值。*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">outer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> lightgreen</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（2）利用flex布局的方式，左右两栏的放大和缩小比例都设置为0，基础大小设置为固定的大小，中间一栏设置为auto*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">outer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> lightgreen</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（3）利用浮动的方式，左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，注意这种方式，中间一栏必须放到最后。*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">outer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> lightgreen</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（4）圣杯布局，利用浮动和负边距来实现。父级元素设置左右的 padding，三列均设置向左浮动，中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，通过设置 margin 负值将其移动到上一行，再利用相对定位，定位到两边。*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">outer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> lightgreen</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*（5）双飞翼布局，双飞翼布局相对于圣杯布局来说，左右位置的保留是通过中间列的 margin 值来实现的，而不是通过父元</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">素的 padding 来实现的。本质上来说，也是通过浮动和外边距负值来实现的。*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">outer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> lightgreen</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*三栏布局一般指的是页面中一共有三栏，左右两栏宽度固定，中间自适应的布局，一共有五种实现方式。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">这里以左边宽度固定为100px，右边宽度固定为200px为例。*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*（1）利用绝对定位的方式，左右两栏设置为绝对定位，中间设置对应方向大小的margin的值。*/</span></span>
<span class="line"><span style="color:#D19A66;">.outer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: gold;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-right: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: lightgreen;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*（2）利用flex布局的方式，左右两栏的放大和缩小比例都设置为0，基础大小设置为固定的大小，中间一栏设置为auto*/</span></span>
<span class="line"><span style="color:#D19A66;">.outer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex: </span><span style="color:#D19A66;">00100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex: </span><span style="color:#D19A66;">00200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: gold;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  flex: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: lightgreen;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*（3）利用浮动的方式，左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，注意这种方式，中间一栏必须放到最后。*/</span></span>
<span class="line"><span style="color:#D19A66;">.outer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  float: </span><span style="color:#D19A66;">left</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  float: </span><span style="color:#D19A66;">right</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: gold;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-right: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: lightgreen;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*（4）圣杯布局，利用浮动和负边距来实现。父级元素设置左右的 padding，三列均设置向左浮动，中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，通过设置 margin 负值将其移动到上一行，再利用相对定位，定位到两边。*/</span></span>
<span class="line"><span style="color:#D19A66;">.outer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding-left: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding-right: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">-100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  float: </span><span style="color:#D19A66;">left</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">-100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  float: </span><span style="color:#D19A66;">right</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">-200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: gold;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  float: </span><span style="color:#D19A66;">left</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: lightgreen;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*（5）双飞翼布局，双飞翼布局相对于圣杯布局来说，左右位置的保留是通过中间列的 margin 值来实现的，而不是通过父元</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">素的 padding 来实现的。本质上来说，也是通过浮动和外边距负值来实现的。*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.outer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.left</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  float: </span><span style="color:#D19A66;">left</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">-100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.right</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  float: </span><span style="color:#D19A66;">left</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">-200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: gold;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.wrapper</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  float: </span><span style="color:#D19A66;">left</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: lightgreen;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-right: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="http://cavszhouyou.top/Demo-Display/ThreeColumnLayout/index.html" target="_blank" rel="noreferrer">《三栏布局 demo 展示》</a></p><p>回答：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">三栏布局一般指的是页面中一共有三栏，左右两栏宽度固定，中间自适应的布局，一共有五种实现方式。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这里以左边宽度固定为100px，右边宽度固定为200px为例。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（1）利用绝对定位的方式，左右两栏设置为绝对定位，中间设置对应方向大小的margin的值。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（2）利用flex布局的方式，左右两栏的放大和缩小比例都设置为0，基础大小设置为固定的大小，中间一栏设置为auto。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（3）利用浮动的方式，左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，注意这种方式，中间一栏必须放到最后。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（4）圣杯布局，利用浮动和负边距来实现。父级元素设置左右的padding，三列均设置向左浮动，中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，通过设置margin负值将其移动到上一行，再利用相对定位，定位到两边。圣杯布局中间列的宽度不能小于两边任意列的宽度，而双飞翼布局则不存在这个问题。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">（5）双飞翼布局，双飞翼布局相对于圣杯布局来说，左右位置的保留是通过中间列的margin值来实现的，而不是通过父元素的padding来实现的。本质上来说，也是通过浮动和外边距负值来实现的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">三栏布局一般指的是页面中一共有三栏，左右两栏宽度固定，中间自适应的布局，一共有五种实现方式。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">这里以左边宽度固定为100px，右边宽度固定为200px为例。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（1）利用绝对定位的方式，左右两栏设置为绝对定位，中间设置对应方向大小的margin的值。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（2）利用flex布局的方式，左右两栏的放大和缩小比例都设置为0，基础大小设置为固定的大小，中间一栏设置为auto。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（3）利用浮动的方式，左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，注意这种方式，中间一栏必须放到最后。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（4）圣杯布局，利用浮动和负边距来实现。父级元素设置左右的padding，三列均设置向左浮动，中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，通过设置margin负值将其移动到上一行，再利用相对定位，定位到两边。圣杯布局中间列的宽度不能小于两边任意列的宽度，而双飞翼布局则不存在这个问题。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">（5）双飞翼布局，双飞翼布局相对于圣杯布局来说，左右位置的保留是通过中间列的margin值来实现的，而不是通过父元素的padding来实现的。本质上来说，也是通过浮动和外边距负值来实现的。</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h4 id="_102-实现一个宽高自适应的正方形" tabindex="-1">102.实现一个宽高自适应的正方形 <a class="header-anchor" href="#_102-实现一个宽高自适应的正方形" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*1.第一种方式是利用vw来实现*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">square</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10vw</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*2.第二种方式是利用元素的margin/padding百分比是相对父元素width的性质来实现*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">square</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> orange</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*3.第三种方式是利用子元素的margin-top的值来实现的*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">square</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">square</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*1.第一种方式是利用vw来实现*/</span></span>
<span class="line"><span style="color:#D19A66;">.square</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">vw</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*2.第二种方式是利用元素的margin/padding百分比是相对父元素width的性质来实现*/</span></span>
<span class="line"><span style="color:#D19A66;">.square</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding-top: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">orange</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*3.第三种方式是利用子元素的margin-top的值来实现的*/</span></span>
<span class="line"><span style="color:#D19A66;">.square</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">30</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">hidden</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">yellow</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.square</span><span style="color:#56B6C2;">::after</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-top: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="http://cavszhouyou.top/Demo-Display/AdaptiveSquare/index.html" target="_blank" rel="noreferrer">《自适应正方形 demo 展示》</a></p><h4 id="_103-实现一个三角形" tabindex="-1">103.实现一个三角形 <a class="header-anchor" href="#_103-实现一个三角形" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*三角形的实现原理是利用了元素边框连接处的等分原理。*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomatotransparenttransparenttransparent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*三角形的实现原理是利用了元素边框连接处的等分原理。*/</span></span>
<span class="line"><span style="color:#D19A66;">.triangle</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-style: </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-color: tomatotransparenttransparenttransparent;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="http://cavszhouyou.top/Demo-Display/Triangle/index.html" target="_blank" rel="noreferrer">《三角形 demo 展示》</a></p><h4 id="_104-一个自适应矩形-水平垂直居中-且宽高比为-2-1" tabindex="-1">104.一个自适应矩形，水平垂直居中，且宽高比为 2:1 <a class="header-anchor" href="#_104-一个自适应矩形-水平垂直居中-且宽高比为-2-1" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*实现原理参考自适应正方形和水平居中方式*/</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> tomato</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*实现原理参考自适应正方形和水平居中方式*/</span></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  right: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding-top: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: tomato;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="_105-你知道-css-中不同属性设置为百分比-时对应的计算基准" tabindex="-1">105.你知道 CSS 中不同属性设置为百分比%时对应的计算基准？ <a class="header-anchor" href="#_105-你知道-css-中不同属性设置为百分比-时对应的计算基准" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">公式：当前元素某CSS属性值 = 基准 * 对应的百分比</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 position 为 relative 和 absolute 时，top和bottom、left和right基准分别为包含块的 height、width</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 position 为 fixed 时，top和bottom、left和right基准分别为初始包含块（也就是视口）的 height、width，移动设备较为复杂，基准为 Layout viewport 的 height、width</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 height 和 width 设置为百分比时，基准分别为包含块的 height 和 width</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 margin 和 padding 设置为百分比时，基准为包含块的 width（易错）</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 border-width，不支持百分比</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 text-indent，基准为包含块的 width</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 border-radius，基准为分别为自身的height、width</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 background-size，基准为分别为自身的height、width</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 translateX、translateY，基准为分别为自身的height、width</span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 line-height，基准为自身的 font-size</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">元素的 font-size，基准为父元素字体</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">公式：当前元素某CSS属性值 = 基准 * 对应的百分比</span></span>
<span class="line"><span style="color:#abb2bf;">元素的 position 为 relative 和 absolute 时，top和bottom、left和right基准分别为包含块的 height、width</span></span>
<span class="line"><span style="color:#abb2bf;">元素的 position 为 fixed 时，top和bottom、left和right基准分别为初始包含块（也就是视口）的 height、width，移动设备较为复杂，基准为 Layout viewport 的 height、width</span></span>
<span class="line"><span style="color:#abb2bf;">元素的 height 和 width 设置为百分比时，基准分别为包含块的 height 和 width</span></span>
<span class="line"><span style="color:#abb2bf;">元素的 margin 和 padding 设置为百分比时，基准为包含块的 width（易错）</span></span>
<span class="line"><span style="color:#abb2bf;">元素的 border-width，不支持百分比</span></span>
<span class="line"><span style="color:#abb2bf;">元素的 text-indent，基准为包含块的 width</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">元素的 border-radius，基准为分别为自身的height、width</span></span>
<span class="line"><span style="color:#abb2bf;">元素的 background-size，基准为分别为自身的height、width</span></span>
<span class="line"><span style="color:#abb2bf;">元素的 translateX、translateY，基准为分别为自身的height、width</span></span>
<span class="line"><span style="color:#abb2bf;">元素的 line-height，基准为自身的 font-size</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">元素的 font-size，基准为父元素字体</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div>`,327);function f(s,g,E,u,m,x){const e=c,o=A("ClientOnly");return p(),r("div",null,[h,i(o,null,{default:y(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(p(),D(e,{key:0,article:s.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),F])}const S=t(B,[["render",f]]);export{w as __pageData,S as default};