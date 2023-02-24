import{_ as s,c as n,o as a,a as l}from"./app.2918728e.js";const D=JSON.parse('{"title":"Nginx常用命令","description":"","frontmatter":{"title":"Nginx常用命令","author":"yinuuu","date":"2023/01/01","categories":["Nginx"],"tags":["Nginx"]},"headers":[{"level":2,"title":"1 常用命令","slug":"_1-常用命令","link":"#_1-常用命令","children":[]},{"level":2,"title":"2. 配置文件","slug":"_2-配置文件","link":"#_2-配置文件","children":[{"level":3,"title":"2.1 全局块","slug":"_2-1-全局块","link":"#_2-1-全局块","children":[]},{"level":3,"title":"2.2 events 块","slug":"_2-2-events-块","link":"#_2-2-events-块","children":[]},{"level":3,"title":"2.3 http 块","slug":"_2-3-http-块","link":"#_2-3-http-块","children":[]}]},{"level":2,"title":"3 nginx.conf 详细的配置文件介绍","slug":"_3-nginx-conf-详细的配置文件介绍","link":"#_3-nginx-conf-详细的配置文件介绍","children":[]},{"level":2,"title":"4 总结","slug":"_4-总结","link":"#_4-总结","children":[]}],"relativePath":"linux/tools/02-Nginx/01-常用命令 & 配置文件.md","lastUpdated":1677165673000}'),p={name:"linux/tools/02-Nginx/01-常用命令 & 配置文件.md"},o=l(`<h2 id="_1-常用命令" tabindex="-1">1 常用命令 <a class="header-anchor" href="#_1-常用命令" aria-hidden="true">#</a></h2><p>以下命令nginx已经通过apt安装好了，有nginx命令。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;">			</span><span style="color:#676E95;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-V</span><span style="color:#A6ACCD;">			</span><span style="color:#676E95;font-style:italic;"># 如果你想同时看到更详细的配置项，使用 -V</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;"># 查看 Nginx 配置语法的正确性</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-T</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 这里如果用大写 T，效果就是 测试、丢弃并退出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/path/confi</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 为Nginx指定一个配置文件，来代替缺省值conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动 Nginx 服务</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> 		</span><span style="color:#676E95;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;">   		</span><span style="color:#676E95;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开机自启动</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> 	</span><span style="color:#676E95;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;">   	</span><span style="color:#676E95;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启 Nginx 服务</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> 	</span><span style="color:#676E95;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;">   	</span><span style="color:#676E95;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看 Nginx 服务状态</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx		#systemd</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;">   	</span><span style="color:#676E95;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重载 Nginx 服务</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> 	</span><span style="color:#676E95;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#A6ACCD;">   	</span><span style="color:#676E95;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  停止 Nginx 服务</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> 		</span><span style="color:#676E95;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;">   		</span><span style="color:#676E95;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看命令帮助</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">nginx </span><span style="color:#D19A66;">-v</span><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:#ABB2BF;">nginx </span><span style="color:#D19A66;">-V</span><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;font-style:italic;"># 如果你想同时看到更详细的配置项，使用 -V</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-t</span><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;"># 查看 Nginx 配置语法的正确性</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-T</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;"># 这里如果用大写 T，效果就是 测试、丢弃并退出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">nginx </span><span style="color:#D19A66;">-c</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">/path/confi</span><span style="color:#ABB2BF;">g&gt;  </span><span style="color:#7F848E;font-style:italic;"># 为Nginx指定一个配置文件，来代替缺省值conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 启动 Nginx 服务</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">systemctl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">start</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> 		</span><span style="color:#7F848E;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">service</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">start</span><span style="color:#ABB2BF;">   		</span><span style="color:#7F848E;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 开机自启动</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">systemctl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">enable</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> 	</span><span style="color:#7F848E;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">service</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">enable</span><span style="color:#ABB2BF;">   	</span><span style="color:#7F848E;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重启 Nginx 服务</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">systemctl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">restart</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> 	</span><span style="color:#7F848E;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">service</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">restart</span><span style="color:#ABB2BF;">   	</span><span style="color:#7F848E;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看 Nginx 服务状态</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">systemctl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">status</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx		#systemd</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">service</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">status</span><span style="color:#ABB2BF;">   	</span><span style="color:#7F848E;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重载 Nginx 服务</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">systemctl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reload</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> 	</span><span style="color:#7F848E;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">service</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reload</span><span style="color:#ABB2BF;">   	</span><span style="color:#7F848E;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#  停止 Nginx 服务</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">systemctl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">stop</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> 		</span><span style="color:#7F848E;font-style:italic;">#systemd</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">service</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">stop</span><span style="color:#ABB2BF;">   		</span><span style="color:#7F848E;font-style:italic;">#sysvinit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看命令帮助</span></span>
<span class="line"><span style="color:#ABB2BF;">systemctl </span><span style="color:#D19A66;">-h</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-配置文件" tabindex="-1">2. 配置文件 <a class="header-anchor" href="#_2-配置文件" aria-hidden="true">#</a></h2><p>nginx 安装目录下，其默认的配置文件都放在这个目录的 conf 目录下，而主配置文件 nginx.conf 也在其中，后续对 nginx 的使用基本上都是对此配置文件进行相应的修改 <img src="https://gitee.com/krislin_zhao/IMGcloud/raw/master/img/20200519132450.png#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=F1Z2Q&amp;originHeight=300&amp;originWidth=655&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><h3 id="_2-1-全局块" tabindex="-1">2.1 全局块 <a class="header-anchor" href="#_2-1-全局块" aria-hidden="true">#</a></h3><p>从配置文件开始到 events 块之间的内容，主要会设置一些影响 nginx 服务器整体运行的配置指令，主要包括配置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数，进程 PID 存放路径、日志存放路径和类型以及配置文件的引入等。 比如上面第一行配置的： <img src="https://gitee.com/krislin_zhao/IMGcloud/raw/master/img/20200519132657.png#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=KVNgF&amp;originHeight=51&amp;originWidth=567&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""> 这是 Nginx 服务器并发处理服务的关键配置，worker_processes 值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约</p><h3 id="_2-2-events-块" tabindex="-1">2.2 events 块 <a class="header-anchor" href="#_2-2-events-块" aria-hidden="true">#</a></h3><p>events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 work process 下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 word process 可以同时支持的最大连接数等。 <img src="https://gitee.com/krislin_zhao/IMGcloud/raw/master/img/20200519132920.png#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=I5SUh&amp;originHeight=95&amp;originWidth=747&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""> 上述例子就表示每个 work process 支持的最大连接数为 1024. 这部分的配置对 Nginx 的性能影响较大，在实际中应该灵活配置。</p><h3 id="_2-3-http-块" tabindex="-1">2.3 http 块 <a class="header-anchor" href="#_2-3-http-块" aria-hidden="true">#</a></h3><p>这算是 Nginx 服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。 需要注意的是：http 块也可以包括 <strong>http</strong> <strong>全局块</strong>、<strong>server</strong> <strong>块</strong>。</p><h4 id="_2-3-1-http全局块" tabindex="-1">2.3.1 http全局块 <a class="header-anchor" href="#_2-3-1-http全局块" aria-hidden="true">#</a></h4><p>http 全局块配置的指令包括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等。 <strong>upstream</strong>（上游服务器设置，主要为反向代理、负载均衡相关配置，upstream 的指令用于设置一系列的后端服务器，设置反向代理及后端服务器的负载均衡</p><h4 id="_2-3-2-server块" tabindex="-1">2.3.2 server块 <a class="header-anchor" href="#_2-3-2-server块" aria-hidden="true">#</a></h4><p>这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本。 每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。 而每个 server 块也分为全局 server 块，以及可以同时包含多个 locaton 块。 <strong>（1）全局 server 块</strong> 最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或 IP 配置。 <strong>（2）location块</strong> 一个 server 块可以配置多个 location 块。 这块的主要作用是基于 Nginx 服务器接收到的请求字符串（例如 server_name/uri-string），对虚拟主机名称（也可以是 IP 别名）之外的字符串（例如 前面的 /uri-string）进行匹配，对特定的请求进行处理。地址定向、数据缓存和应答控制等功能，还有许多第三方模块的配置也在这里进行。</p><h2 id="_3-nginx-conf-详细的配置文件介绍" tabindex="-1">3 nginx.conf 详细的配置文件介绍 <a class="header-anchor" href="#_3-nginx-conf-详细的配置文件介绍" aria-hidden="true">#</a></h2><div class="language-properties"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#定义Nginx运行的用户和用户组</span></span>
<span class="line"><span style="color:#A6ACCD;">user www www</span><span style="color:#676E95;font-style:italic;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#nginx进程数，通常设置成和cpu的数量相等</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes 4</span><span style="color:#676E95;font-style:italic;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#全局错误日志定义类型，[debug | info | notice | warn | error | crit]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#进程pid文件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#指定进程可以打开的最大描述符：数目</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#工作模式与连接数上限</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">##这个指令是指当一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n 的值保持一致。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#这是因为nginx调度时分配请求到进程并不是那么的均衡，所以假如填写10240，总并发量达到3-4万时就有进程可能超过10240了，这时会返回502错误。</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_rlimit_nofile 65535</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#是Linux 2.6以上版本内核中的高性能网络I/O模型，linux建议epoll，如果跑在FreeBSD上面，就用kqueue模型。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#补充说明：</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#与apache相类，nginx针对不同的操作系统，有不同的事件模型</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#A）标准事件模型</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#Select、poll属于标准事件模型，如果当前系统不存在更有效的方法，nginx会选择select或poll</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#B）高效事件模型</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#Kqueue：使用于FreeBSD 4.1+, OpenBSD 2.9+, NetBSD 2.0 和 MacOS X.使用双处理器的MacOS X系统使用kqueue可能会造成内核崩溃。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#Epoll：使用于Linux内核2.6版本及以后的系统。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#/dev/poll：使用于Solaris 7 11/99+，HP/UX 11.22+ (eventport)，IRIX 6.5.15+ 和 Tru64 UNIX 5.1A+。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#Eventport：使用于Solaris 10。 为了防止出现内核崩溃的问题， 有必要安装安全补丁。</span></span>
<span class="line"><span style="color:#A6ACCD;">    use epoll</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#单个进程最大连接数（最大连接数=连接数+进程数）</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cup跑到100%就行。</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#keepalive 超时时间</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout 60</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求头的大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#分页大小可以用命令getconf PAGESIZE 取得。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#[root@web001 ~]# getconf PAGESIZE</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#但也有client_header_buffer_size超过4k的情况，但是client_header_buffer_size该值必须设置为“系统分页大小”的整倍数。</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_header_buffer_size 4k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#这个将为打开文件指定缓存，默认是没有启用的，max指定缓存数量，建议和打开文件数一致，inactive是指经过多长时间文件没被请求后删除缓存。</span></span>
<span class="line"><span style="color:#A6ACCD;">    open_file_cache </span><span style="color:#F07178;">max</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">65535 </span><span style="color:#F07178;">inactive</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">60s</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#这个是指多长时间检查一次缓存的有效信息。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#语法:open_file_cache_valid time 默认值:open_file_cache_valid 60 使用字段:http, server, location 这个指令指定了何时需要检查open_file_cache中缓存项目的有效信息.</span></span>
<span class="line"><span style="color:#A6ACCD;">    open_file_cache_valid 80s</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#open_file_cache指令中的inactive参数时间内文件的最少使用次数，如果超过这个数字，文件描述符一直是在缓存中打开的，如上例，如果有一个文件在inactive时间内一次没被使用，它将被移除。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#语法:open_file_cache_min_uses number 默认值:open_file_cache_min_uses 1 使用字段:http, server, location  这个指令指定了在open_file_cache指令无效的参数中一定的时间范围内可以使用的最小文件数,如果使用更大的值,文件描述符在cache中总是打开状态.</span></span>
<span class="line"><span style="color:#A6ACCD;">    open_file_cache_min_uses 1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#语法:open_file_cache_errors on | off 默认值:open_file_cache_errors off 使用字段:http, server, location 这个指令指定是否在搜索一个文件是记录cache错误.</span></span>
<span class="line"><span style="color:#A6ACCD;">    open_file_cache_errors on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span></span>
<span class="line"><span style="color:#A6ACCD;">http{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#文件扩展名与文件类型映射表</span></span>
<span class="line"><span style="color:#A6ACCD;">    include mime.types</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#默认文件类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type application/octet-stream</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#默认编码</span></span>
<span class="line"><span style="color:#A6ACCD;">    charset utf-8</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#服务器名字的hash表大小</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#保存服务器名字的hash表是由指令server_names_hash_max_size 和server_names_hash_bucket_size所控制的。参数hash bucket size总是等于hash表的大小，并且是一路处理器缓存大小的倍数。在减少了在内存中的存取次数后，使在处理器中加速查找hash表键值成为可能。如果hash bucket size等于一路处理器缓存的大小，那么在查找键的时候，最坏的情况下在内存中查找的次数为2。第一次是确定存储单元的地址，第二次是在存储单元中查找键 值。因此，如果Nginx给出需要增大hash max size 或 hash bucket size的提示，那么首要的是增大前一个参数的大小.</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_names_hash_bucket_size 128</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求的头部大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。分页大小可以用命令getconf PAGESIZE取得。</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_header_buffer_size 32k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#客户请求头缓冲大小。nginx默认会用client_header_buffer_size这个buffer来读取header值，如果header过大，它会使用large_client_header_buffers来读取。</span></span>
<span class="line"><span style="color:#A6ACCD;">    large_client_header_buffers 4 64k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#设定通过nginx上传文件的大小</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_max_body_size 8m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。</span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">#开启目录列表访问，合适下载服务器，默认关闭。</span></span>
<span class="line"><span style="color:#A6ACCD;">    autoindex on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">#此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nopush on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nodelay on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#长连接超时时间，单位是秒</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout 120</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_connect_timeout 300</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_send_timeout 300</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_read_timeout 300</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_buffer_size 64k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_buffers 4 64k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_busy_buffers_size 128k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastcgi_temp_file_write_size 128k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#gzip模块设置</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip on</span><span style="color:#676E95;font-style:italic;">; #开启gzip压缩输出</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_min_length 1k</span><span style="color:#676E95;font-style:italic;">;    #最小压缩文件大小</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_buffers 4 16k</span><span style="color:#676E95;font-style:italic;">;    #压缩缓冲区</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_http_version 1.0</span><span style="color:#676E95;font-style:italic;">; #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_comp_level 2</span><span style="color:#676E95;font-style:italic;">;     #压缩等级</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_types text/plain application/x-javascript text/css application/xml</span><span style="color:#676E95;font-style:italic;">;    #压缩类型，默认就已经包含textml，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_vary on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#开启限制IP连接数的时候需要使用</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#limit_zone crawler $binary_remote_addr 10m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#负载均衡配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    upstream piao.jd.com {</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。</span></span>
<span class="line"><span style="color:#A6ACCD;">        server 192.168.80.121:80 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">3</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server 192.168.80.122:80 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server 192.168.80.123:80 </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">3</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#nginx的upstream目前支持4种方式的分配</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#1、轮询（默认）</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#2、weight</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#例如：</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#upstream bakend {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server 192.168.0.14 weight=10;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server 192.168.0.15 weight=10;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#2、ip_hash</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#例如：</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#upstream bakend {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    ip_hash;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server 192.168.0.14:88;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server 192.168.0.15:80;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#3、fair（第三方）</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#按后端服务器的响应时间来分配请求，响应时间短的优先分配。</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#upstream backend {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server server1;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server server2;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    fair;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#4、url_hash（第三方）</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#例：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#upstream backend {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server squid1:3128;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server squid2:3128;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    hash $request_uri;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    hash_method crc32;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#tips:</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#upstream bakend{#定义负载均衡设备的Ip及设备状态}{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    ip_hash;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server 127.0.0.1:9090 down;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server 127.0.0.1:8080 weight=2;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server 127.0.0.1:6060;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    server 127.0.0.1:7070 backup;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#在需要使用负载均衡的server中增加 proxy_pass http://bakend/;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#每个设备的状态设置为:</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#1.down表示单前的server暂时不参与负载</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#2.weight为weight越大，负载的权重就越大。</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#3.max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream模块定义的错误</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#4.fail_timeout:max_fails次失败后，暂停的时间。</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#nginx支持同时设置多组的负载均衡，用来给不用的server来使用。</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#client_body_in_file_only设置为On 可以讲client post过来的数据记录到文件中用来做debug</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#client_body_temp_path设置记录文件的目录 可以设置最多3层目录</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#location对URL进行匹配.可以进行重定向或者进行新的代理 负载均衡</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#虚拟主机的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#监听端口</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#域名可以有多个，用空格隔开</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name www.jd.com jd.com</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#默认入口文件名称</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html index.htm index.php</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        root /data/www/jd</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#对******进行负载均衡</span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~ .*.(php|php5)?$</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            fastcgi_pass 127.0.0.1:9000</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            fastcgi_index index.php</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            include fastcgi.conf</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#图片缓存时间设置</span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            expires 10d</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#JS和CSS缓存时间设置</span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~ .*.(js|css)?$</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            expires 1h</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#日志格式设定</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#$remote_addr与$http_x_forwarded_for用以记录客户端的ip地址；</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#$remote_user：用来记录客户端用户名称；</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#$time_local： 用来记录访问时间与时区；</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#$request： 用来记录请求的url与http协议；</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#$status： 用来记录请求状态；成功是200，</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#$body_bytes_sent ：记录发送给客户端文件主体内容大小；</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#$http_referer：用来记录从那个页面链接访问过来的；</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#$http_user_agent：记录客户浏览器的相关信息；</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#通常web服务器放在反向代理的后面，这样就不能获取到客户的IP地址了，通过$remote_add拿到的IP地址是反向代理服务器的iP地址。反向代理服务器在转发请求的http头信息中，可以增加x_forwarded_for信息，用以记录原有客户端的IP地址和原来客户端的请求的服务器地址。</span></span>
<span class="line"><span style="color:#A6ACCD;">        log_format access </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$remote_addr - $remote_user [$time_local] &quot;$request&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$status $body_bytes_sent &quot;$http_referer&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;$http_user_agent&quot; $http_x_forwarded_for</span><span style="color:#89DDFF;">&#39;</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#定义本虚拟主机的访问日志</span></span>
<span class="line"><span style="color:#A6ACCD;">        access_log  /usr/local/nginx/logs/host.access.log  main</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        access_log  /usr/local/nginx/logs/host.access.404.log  log404</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#对 &quot;/connect-controller&quot; 启用反向代理</span></span>
<span class="line"><span style="color:#A6ACCD;">        location /connect-controller {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://127.0.0.1:88</span><span style="color:#676E95;font-style:italic;">; #请注意此处端口号不能与虚拟主机监听的端口号一样（也就是server监听的端口）</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_redirect off</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header X-Real-IP $remote_addr</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#以下是一些反向代理的配置，可选。</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header Host $host</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#允许客户端请求的最大单文件字节数</span></span>
<span class="line"><span style="color:#A6ACCD;">            client_max_body_size 10m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#缓冲区代理缓冲用户端请求的最大字节数，</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误</span></span>
<span class="line"><span style="color:#A6ACCD;">            client_body_buffer_size 128k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#表示使nginx阻止HTTP应答代码为400或者更高的应答。</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_intercept_errors on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#后端服务器连接的超时时间_发起握手等候响应超时时间</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#nginx跟后端服务器连接超时时间(代理连接超时)</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_connect_timeout 90</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#后端服务器数据回传时间(代理发送超时)</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_send_timeout 90</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#连接成功后，后端服务器响应时间(代理接收超时)</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_read_timeout 90</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_buffer_size 4k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#proxy_buffers缓冲区，网页平均在32k以下的设置</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_buffers 4 32k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#高负荷下缓冲大小（proxy_buffers*2）</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_busy_buffers_size 64k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">#设定缓存文件夹大小，大于这个值，将从upstream服务器传</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_temp_file_write_size 64k</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#本地动静分离反向代理配置</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#所有jsp的页面均交由tomcat或resin处理</span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~ .(jsp|jspx|do)?$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header Host $host</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header X-Real-IP $remote_addr</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://127.0.0.1:8080</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#定义Nginx运行的用户和用户组</span></span>
<span class="line"><span style="color:#98C379;">user www www</span><span style="color:#7F848E;font-style:italic;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#nginx进程数，通常设置成和cpu的数量相等</span></span>
<span class="line"><span style="color:#98C379;">worker_processes 4</span><span style="color:#7F848E;font-style:italic;">; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#全局错误日志定义类型，[debug | info | notice | warn | error | crit]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#进程pid文件</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#指定进程可以打开的最大描述符：数目</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#工作模式与连接数上限</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##这个指令是指当一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n 的值保持一致。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#这是因为nginx调度时分配请求到进程并不是那么的均衡，所以假如填写10240，总并发量达到3-4万时就有进程可能超过10240了，这时会返回502错误。</span></span>
<span class="line"><span style="color:#98C379;">worker_rlimit_nofile 65535</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">events {</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#是Linux 2.6以上版本内核中的高性能网络I/O模型，linux建议epoll，如果跑在FreeBSD上面，就用kqueue模型。</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#补充说明：</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#与apache相类，nginx针对不同的操作系统，有不同的事件模型</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#A）标准事件模型</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#Select、poll属于标准事件模型，如果当前系统不存在更有效的方法，nginx会选择select或poll</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#B）高效事件模型</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#Kqueue：使用于FreeBSD 4.1+, OpenBSD 2.9+, NetBSD 2.0 和 MacOS X.使用双处理器的MacOS X系统使用kqueue可能会造成内核崩溃。</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#Epoll：使用于Linux内核2.6版本及以后的系统。</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#/dev/poll：使用于Solaris 7 11/99+，HP/UX 11.22+ (eventport)，IRIX 6.5.15+ 和 Tru64 UNIX 5.1A+。</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#Eventport：使用于Solaris 10。 为了防止出现内核崩溃的问题， 有必要安装安全补丁。</span></span>
<span class="line"><span style="color:#98C379;">    use epoll</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#单个进程最大连接数（最大连接数=连接数+进程数）</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cup跑到100%就行。</span></span>
<span class="line"><span style="color:#98C379;">    worker_connections  1024</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#keepalive 超时时间</span></span>
<span class="line"><span style="color:#98C379;">    keepalive_timeout 60</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求头的大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#分页大小可以用命令getconf PAGESIZE 取得。</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#[root@web001 ~]# getconf PAGESIZE</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#但也有client_header_buffer_size超过4k的情况，但是client_header_buffer_size该值必须设置为“系统分页大小”的整倍数。</span></span>
<span class="line"><span style="color:#98C379;">    client_header_buffer_size 4k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#这个将为打开文件指定缓存，默认是没有启用的，max指定缓存数量，建议和打开文件数一致，inactive是指经过多长时间文件没被请求后删除缓存。</span></span>
<span class="line"><span style="color:#98C379;">    open_file_cache </span><span style="color:#C678DD;">max</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">65535 </span><span style="color:#C678DD;">inactive</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">60s</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#这个是指多长时间检查一次缓存的有效信息。</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#语法:open_file_cache_valid time 默认值:open_file_cache_valid 60 使用字段:http, server, location 这个指令指定了何时需要检查open_file_cache中缓存项目的有效信息.</span></span>
<span class="line"><span style="color:#98C379;">    open_file_cache_valid 80s</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#open_file_cache指令中的inactive参数时间内文件的最少使用次数，如果超过这个数字，文件描述符一直是在缓存中打开的，如上例，如果有一个文件在inactive时间内一次没被使用，它将被移除。</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#语法:open_file_cache_min_uses number 默认值:open_file_cache_min_uses 1 使用字段:http, server, location  这个指令指定了在open_file_cache指令无效的参数中一定的时间范围内可以使用的最小文件数,如果使用更大的值,文件描述符在cache中总是打开状态.</span></span>
<span class="line"><span style="color:#98C379;">    open_file_cache_min_uses 1</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#语法:open_file_cache_errors on | off 默认值:open_file_cache_errors off 使用字段:http, server, location 这个指令指定是否在搜索一个文件是记录cache错误.</span></span>
<span class="line"><span style="color:#98C379;">    open_file_cache_errors on</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span></span>
<span class="line"><span style="color:#98C379;">http{</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#文件扩展名与文件类型映射表</span></span>
<span class="line"><span style="color:#98C379;">    include mime.types</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#默认文件类型</span></span>
<span class="line"><span style="color:#98C379;">    default_type application/octet-stream</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#默认编码</span></span>
<span class="line"><span style="color:#98C379;">    charset utf-8</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#服务器名字的hash表大小</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#保存服务器名字的hash表是由指令server_names_hash_max_size 和server_names_hash_bucket_size所控制的。参数hash bucket size总是等于hash表的大小，并且是一路处理器缓存大小的倍数。在减少了在内存中的存取次数后，使在处理器中加速查找hash表键值成为可能。如果hash bucket size等于一路处理器缓存的大小，那么在查找键的时候，最坏的情况下在内存中查找的次数为2。第一次是确定存储单元的地址，第二次是在存储单元中查找键 值。因此，如果Nginx给出需要增大hash max size 或 hash bucket size的提示，那么首要的是增大前一个参数的大小.</span></span>
<span class="line"><span style="color:#98C379;">    server_names_hash_bucket_size 128</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求的头部大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。分页大小可以用命令getconf PAGESIZE取得。</span></span>
<span class="line"><span style="color:#98C379;">    client_header_buffer_size 32k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#客户请求头缓冲大小。nginx默认会用client_header_buffer_size这个buffer来读取header值，如果header过大，它会使用large_client_header_buffers来读取。</span></span>
<span class="line"><span style="color:#98C379;">    large_client_header_buffers 4 64k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#设定通过nginx上传文件的大小</span></span>
<span class="line"><span style="color:#98C379;">    client_max_body_size 8m</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。</span></span>
<span class="line"><span style="color:#98C379;">    sendfile on</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">     </span><span style="color:#7F848E;font-style:italic;">#开启目录列表访问，合适下载服务器，默认关闭。</span></span>
<span class="line"><span style="color:#98C379;">    autoindex on</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">      </span><span style="color:#7F848E;font-style:italic;">#此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用</span></span>
<span class="line"><span style="color:#98C379;">    tcp_nopush on</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">     </span></span>
<span class="line"><span style="color:#98C379;">    tcp_nodelay on</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#长连接超时时间，单位是秒</span></span>
<span class="line"><span style="color:#98C379;">    keepalive_timeout 120</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。</span></span>
<span class="line"><span style="color:#98C379;">    fastcgi_connect_timeout 300</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    fastcgi_send_timeout 300</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    fastcgi_read_timeout 300</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    fastcgi_buffer_size 64k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    fastcgi_buffers 4 64k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    fastcgi_busy_buffers_size 128k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    fastcgi_temp_file_write_size 128k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#gzip模块设置</span></span>
<span class="line"><span style="color:#98C379;">    gzip on</span><span style="color:#7F848E;font-style:italic;">; #开启gzip压缩输出</span></span>
<span class="line"><span style="color:#98C379;">    gzip_min_length 1k</span><span style="color:#7F848E;font-style:italic;">;    #最小压缩文件大小</span></span>
<span class="line"><span style="color:#98C379;">    gzip_buffers 4 16k</span><span style="color:#7F848E;font-style:italic;">;    #压缩缓冲区</span></span>
<span class="line"><span style="color:#98C379;">    gzip_http_version 1.0</span><span style="color:#7F848E;font-style:italic;">; #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）</span></span>
<span class="line"><span style="color:#98C379;">    gzip_comp_level 2</span><span style="color:#7F848E;font-style:italic;">;     #压缩等级</span></span>
<span class="line"><span style="color:#98C379;">    gzip_types text/plain application/x-javascript text/css application/xml</span><span style="color:#7F848E;font-style:italic;">;    #压缩类型，默认就已经包含textml，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。</span></span>
<span class="line"><span style="color:#98C379;">    gzip_vary on</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#开启限制IP连接数的时候需要使用</span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#limit_zone crawler $binary_remote_addr 10m;</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#负载均衡配置</span></span>
<span class="line"><span style="color:#98C379;">    upstream piao.jd.com {</span></span>
<span class="line"><span style="color:#98C379;">     </span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。</span></span>
<span class="line"><span style="color:#98C379;">        server 192.168.80.121:80 </span><span style="color:#C678DD;">weight</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">3</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        server 192.168.80.122:80 </span><span style="color:#C678DD;">weight</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">2</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        server 192.168.80.123:80 </span><span style="color:#C678DD;">weight</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">3</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#nginx的upstream目前支持4种方式的分配</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#1、轮询（默认）</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#2、weight</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#例如：</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#upstream bakend {</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server 192.168.0.14 weight=10;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server 192.168.0.15 weight=10;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#2、ip_hash</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#例如：</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#upstream bakend {</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    ip_hash;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server 192.168.0.14:88;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server 192.168.0.15:80;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#3、fair（第三方）</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#按后端服务器的响应时间来分配请求，响应时间短的优先分配。</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#upstream backend {</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server server1;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server server2;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    fair;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#4、url_hash（第三方）</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#例：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#upstream backend {</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server squid1:3128;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server squid2:3128;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    hash $request_uri;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    hash_method crc32;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#tips:</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#upstream bakend{#定义负载均衡设备的Ip及设备状态}{</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    ip_hash;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server 127.0.0.1:9090 down;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server 127.0.0.1:8080 weight=2;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server 127.0.0.1:6060;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#    server 127.0.0.1:7070 backup;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#在需要使用负载均衡的server中增加 proxy_pass http://bakend/;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#每个设备的状态设置为:</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#1.down表示单前的server暂时不参与负载</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#2.weight为weight越大，负载的权重就越大。</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#3.max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream模块定义的错误</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#4.fail_timeout:max_fails次失败后，暂停的时间。</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#nginx支持同时设置多组的负载均衡，用来给不用的server来使用。</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#client_body_in_file_only设置为On 可以讲client post过来的数据记录到文件中用来做debug</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#client_body_temp_path设置记录文件的目录 可以设置最多3层目录</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#location对URL进行匹配.可以进行重定向或者进行新的代理 负载均衡</span></span>
<span class="line"><span style="color:#98C379;">    }</span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span></span>
<span class="line"><span style="color:#98C379;">    </span><span style="color:#7F848E;font-style:italic;">#虚拟主机的配置</span></span>
<span class="line"><span style="color:#98C379;">    server {</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#监听端口</span></span>
<span class="line"><span style="color:#98C379;">        listen 80</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#域名可以有多个，用空格隔开</span></span>
<span class="line"><span style="color:#98C379;">        server_name www.jd.com jd.com</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#默认入口文件名称</span></span>
<span class="line"><span style="color:#98C379;">        index index.html index.htm index.php</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        root /data/www/jd</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#对******进行负载均衡</span></span>
<span class="line"><span style="color:#98C379;">        location ~ .*.(php|php5)?$</span></span>
<span class="line"><span style="color:#98C379;">        {</span></span>
<span class="line"><span style="color:#98C379;">            fastcgi_pass 127.0.0.1:9000</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">            fastcgi_index index.php</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">            include fastcgi.conf</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        }</span></span>
<span class="line"><span style="color:#98C379;">         </span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#图片缓存时间设置</span></span>
<span class="line"><span style="color:#98C379;">        location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$</span></span>
<span class="line"><span style="color:#98C379;">        {</span></span>
<span class="line"><span style="color:#98C379;">            expires 10d</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        }</span></span>
<span class="line"><span style="color:#98C379;">         </span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#JS和CSS缓存时间设置</span></span>
<span class="line"><span style="color:#98C379;">        location ~ .*.(js|css)?$</span></span>
<span class="line"><span style="color:#98C379;">        {</span></span>
<span class="line"><span style="color:#98C379;">            expires 1h</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        }</span></span>
<span class="line"><span style="color:#98C379;">         </span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#日志格式设定</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#$remote_addr与$http_x_forwarded_for用以记录客户端的ip地址；</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#$remote_user：用来记录客户端用户名称；</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#$time_local： 用来记录访问时间与时区；</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#$request： 用来记录请求的url与http协议；</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#$status： 用来记录请求状态；成功是200，</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#$body_bytes_sent ：记录发送给客户端文件主体内容大小；</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#$http_referer：用来记录从那个页面链接访问过来的；</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#$http_user_agent：记录客户浏览器的相关信息；</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#通常web服务器放在反向代理的后面，这样就不能获取到客户的IP地址了，通过$remote_add拿到的IP地址是反向代理服务器的iP地址。反向代理服务器在转发请求的http头信息中，可以增加x_forwarded_for信息，用以记录原有客户端的IP地址和原来客户端的请求的服务器地址。</span></span>
<span class="line"><span style="color:#98C379;">        log_format access </span><span style="color:#98C379;">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#98C379;">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#98C379;">&#39;&quot;$http_user_agent&quot; $http_x_forwarded_for&#39;</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">         </span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#定义本虚拟主机的访问日志</span></span>
<span class="line"><span style="color:#98C379;">        access_log  /usr/local/nginx/logs/host.access.log  main</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        access_log  /usr/local/nginx/logs/host.access.404.log  log404</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">         </span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#对 &quot;/connect-controller&quot; 启用反向代理</span></span>
<span class="line"><span style="color:#98C379;">        location /connect-controller {</span></span>
<span class="line"><span style="color:#98C379;">            proxy_pass http://127.0.0.1:88</span><span style="color:#7F848E;font-style:italic;">; #请注意此处端口号不能与虚拟主机监听的端口号一样（也就是server监听的端口）</span></span>
<span class="line"><span style="color:#98C379;">            proxy_redirect off</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">            proxy_set_header X-Real-IP $remote_addr</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">             </span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span></span>
<span class="line"><span style="color:#98C379;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">             </span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#以下是一些反向代理的配置，可选。</span></span>
<span class="line"><span style="color:#98C379;">            proxy_set_header Host $host</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#允许客户端请求的最大单文件字节数</span></span>
<span class="line"><span style="color:#98C379;">            client_max_body_size 10m</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#缓冲区代理缓冲用户端请求的最大字节数，</span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。</span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误</span></span>
<span class="line"><span style="color:#98C379;">            client_body_buffer_size 128k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#表示使nginx阻止HTTP应答代码为400或者更高的应答。</span></span>
<span class="line"><span style="color:#98C379;">            proxy_intercept_errors on</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#后端服务器连接的超时时间_发起握手等候响应超时时间</span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#nginx跟后端服务器连接超时时间(代理连接超时)</span></span>
<span class="line"><span style="color:#98C379;">            proxy_connect_timeout 90</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#后端服务器数据回传时间(代理发送超时)</span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据</span></span>
<span class="line"><span style="color:#98C379;">            proxy_send_timeout 90</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#连接成功后，后端服务器响应时间(代理接收超时)</span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）</span></span>
<span class="line"><span style="color:#98C379;">            proxy_read_timeout 90</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小</span></span>
<span class="line"><span style="color:#98C379;">            proxy_buffer_size 4k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#proxy_buffers缓冲区，网页平均在32k以下的设置</span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k</span></span>
<span class="line"><span style="color:#98C379;">            proxy_buffers 4 32k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#高负荷下缓冲大小（proxy_buffers*2）</span></span>
<span class="line"><span style="color:#98C379;">            proxy_busy_buffers_size 64k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长</span></span>
<span class="line"><span style="color:#98C379;">            </span><span style="color:#7F848E;font-style:italic;">#设定缓存文件夹大小，大于这个值，将从upstream服务器传</span></span>
<span class="line"><span style="color:#98C379;">            proxy_temp_file_write_size 64k</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        }</span></span>
<span class="line"><span style="color:#98C379;">        </span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#本地动静分离反向代理配置</span></span>
<span class="line"><span style="color:#98C379;">        </span><span style="color:#7F848E;font-style:italic;">#所有jsp的页面均交由tomcat或resin处理</span></span>
<span class="line"><span style="color:#98C379;">        location ~ .(jsp|jspx|do)?$ {</span></span>
<span class="line"><span style="color:#98C379;">            proxy_set_header Host $host</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">            proxy_set_header X-Real-IP $remote_addr</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">            proxy_pass http://127.0.0.1:8080</span><span style="color:#7F848E;font-style:italic;">;</span></span>
<span class="line"><span style="color:#98C379;">        }</span></span>
<span class="line"><span style="color:#98C379;">    }</span></span>
<span class="line"><span style="color:#98C379;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-总结" tabindex="-1">4 总结 <a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a></h2><p>Nginx 配置文件主要分成四部分：main（全局设置）、server（主机设置）、upstream（上游服务器设置，主要为反向代理、负载均衡相关配置）和 location（URL匹配特定位置后的设置）。 main 部分设置的指令影响其他所有部分的设置； server 部分的指令主要用于制定虚拟主机域名、IP 和端口号； upstream 的指令用于设置一系列的后端服务器，设置反向代理及后端服务器的负载均衡； location 部分用于匹配网页位置（比如，根目录“/”，“/images”，等等）。 他们之间的关系：server 继承 main，location 继承 server；upstream 既不会继承指令也不会被继承。</p>`,19),e=[o];function t(c,i,r,y,C,f){return a(),n("div",null,e)}const E=s(p,[["render",t]]);export{D as __pageData,E as default};
