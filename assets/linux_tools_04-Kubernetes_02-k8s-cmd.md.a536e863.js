import{_ as C}from"./chunks/ArticleMetadata.2facd5d6.js";import{_ as d,c as b,b as o,w as c,d as y,e as A,a as i,r as h,o as l,f as t,g as r}from"./app.2918728e.js";const S=JSON.parse('{"title":"K8S指令","description":"","frontmatter":{"title":"K8S指令","author":"yinuuu","date":"2023/01/01","categories":["K8S"],"tags":["K8S"]},"headers":[{"level":2,"title":"CH库环境","slug":"ch库环境","link":"#ch库环境","children":[]},{"level":2,"title":"TAF K8S","slug":"taf-k8s","link":"#taf-k8s","children":[]},{"level":2,"title":"IP以及端口","slug":"ip以及端口","link":"#ip以及端口","children":[]},{"level":2,"title":"创建应用","slug":"创建应用","link":"#创建应用","children":[]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[{"level":3,"title":"查看集群信息","slug":"查看集群信息","link":"#查看集群信息","children":[]},{"level":3,"title":"查看节点","slug":"查看节点","link":"#查看节点","children":[]},{"level":3,"title":"查看POD","slug":"查看pod","link":"#查看pod","children":[]},{"level":3,"title":"查看Service","slug":"查看service","link":"#查看service","children":[]},{"level":3,"title":"端口转发","slug":"端口转发","link":"#端口转发","children":[]},{"level":3,"title":"磁盘映射","slug":"磁盘映射","link":"#磁盘映射","children":[]}]},{"level":2,"title":"证书","slug":"证书","link":"#证书","children":[]}],"relativePath":"linux/tools/04-Kubernetes/02-k8s-cmd.md","lastUpdated":1677165673000}'),u={name:"linux/tools/04-Kubernetes/02-k8s-cmd.md"},B=y("h1",{id:"环境",tabindex:"-1"},[A("环境 "),y("a",{class:"header-anchor",href:"#环境","aria-hidden":"true"},"#")],-1),m=i(`<h2 id="ch库环境" tabindex="-1">CH库环境 <a class="header-anchor" href="#ch库环境" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">172.16.9.195:30880</span></span>
<span class="line"><span style="color:#A6ACCD;">admin</span></span>
<span class="line"><span style="color:#A6ACCD;">P@88w0rd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">172.16.9.195:30880</span></span>
<span class="line"><span style="color:#abb2bf;">admin</span></span>
<span class="line"><span style="color:#abb2bf;">P@88w0rd</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h2 id="taf-k8s" tabindex="-1">TAF K8S <a class="header-anchor" href="#taf-k8s" aria-hidden="true">#</a></h2><p>taf-test -&gt; <a href="http://taf.test.whup.com:8080" target="_blank" rel="noreferrer">http://taf.test.whup.com:8080</a> taf-dev -&gt; <a href="http://dev.test.whup.com:8080" target="_blank" rel="noreferrer">http://dev.test.whup.com:8080</a></p><p>k8s： taf-test: namespace taf-test taf-dev: namespace taf-dev</p><p><a href="http://taf-test.k8s.12345up.com/" target="_blank" rel="noreferrer">http://taf-test.k8s.12345up.com/</a></p><p>admin Upchina@999</p><h1 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-hidden="true">#</a></h1>`,8),D=i('<h2 id="ip以及端口" tabindex="-1">IP以及端口 <a class="header-anchor" href="#ip以及端口" aria-hidden="true">#</a></h2><p><a href="https://www.jianshu.com/p/7e3646e26fc7" target="_blank" rel="noreferrer">https://www.jianshu.com/p/7e3646e26fc7</a></p><h1 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h1>',3),f=i(`<h2 id="创建应用" tabindex="-1">创建应用 <a class="header-anchor" href="#创建应用" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#在指定名称空间上部署应用</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl create deployment </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">image nginx demo</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">namespace</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">myns</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#查看部署状况</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl describe deployment demo</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">namespace</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">myns</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl get deployments </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">namespace</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">myns</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#查看yaml文件</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl get pods demo</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">645c888794</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vzrzq   </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">namespace</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">myns </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#创建Service</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl create service nodeport demo</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">tcp </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">myns</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#编辑deployments 的yaml文件</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl edit deployment</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">demo</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#查看svc 信息</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl describe svc  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">n myns demo</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#编辑svc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">kubectl edit svc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">demo</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">n myns</span></span>
<span class="line"><span style="color:#F78C6C;">172.16</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">9.195</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">31111</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">#</span><span style="color:#E06C75;">在指定名称空间上部署应用</span></span>
<span class="line"><span style="color:#E06C75;">kubectl</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">deployment</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">--</span><span style="color:#E06C75;">image</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">--</span><span style="color:#E06C75;">namespace</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">myns</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">#</span><span style="color:#E06C75;">查看部署状况</span></span>
<span class="line"><span style="color:#E06C75;">kubectl</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">describe</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">deployment</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">--</span><span style="color:#E06C75;">namespace</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">myns</span></span>
<span class="line"><span style="color:#E06C75;">kubectl</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">get</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">deployments</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">--</span><span style="color:#E06C75;">namespace</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">myns</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">#</span><span style="color:#E06C75;">查看yaml文件</span></span>
<span class="line"><span style="color:#E06C75;">kubectl</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">get</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">pods</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">nginx</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">645</span><span style="color:#E06C75;">c888794</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">vzrzq</span><span style="color:#ABB2BF;">   </span><span style="color:#56B6C2;">--</span><span style="color:#E06C75;">namespace</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">myns</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">o</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">#</span><span style="color:#E06C75;">创建Service</span></span>
<span class="line"><span style="color:#E06C75;">kubectl</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">service</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">nodeport</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">--</span><span style="color:#E06C75;">tcp</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">80</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">80</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">n</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">myns</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">#</span><span style="color:#E06C75;">编辑deployments</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">的yaml文件</span></span>
<span class="line"><span style="color:#E06C75;">kubectl</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">edit</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">deployment</span><span style="color:#56B6C2;">/</span><span style="color:#E06C75;">demo</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">#</span><span style="color:#E06C75;">查看svc</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">信息</span></span>
<span class="line"><span style="color:#E06C75;">kubectl</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">describe</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">svc</span><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">myns</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">demo</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">#</span><span style="color:#E06C75;">编辑svc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">kubectl</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">edit</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">svc</span><span style="color:#56B6C2;">/</span><span style="color:#E06C75;">demo</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">nginx</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">myns</span></span>
<span class="line"><span style="color:#D19A66;">172.16</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">9.195</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">31111</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h2><h3 id="查看集群信息" tabindex="-1">查看集群信息 <a class="header-anchor" href="#查看集群信息" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">root@upchina1:~# kubectl cluster-info</span></span>
<span class="line"><span style="color:#A6ACCD;">Kubernetes control plane is running at https://lb.kubesphere.local:6443</span></span>
<span class="line"><span style="color:#A6ACCD;">coredns is running at https://lb.kubesphere.local:6443/api/v1/namespaces/kube-system/services/coredns:dns/proxy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">To further debug and diagnose cluster problems, use &#39;kubectl cluster-info dump&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">root@upchina1:~# kubectl cluster-info</span></span>
<span class="line"><span style="color:#abb2bf;">Kubernetes control plane is running at https://lb.kubesphere.local:6443</span></span>
<span class="line"><span style="color:#abb2bf;">coredns is running at https://lb.kubesphere.local:6443/api/v1/namespaces/kube-system/services/coredns:dns/proxy</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">To further debug and diagnose cluster problems, use &#39;kubectl cluster-info dump&#39;.</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="查看节点" tabindex="-1">查看节点 <a class="header-anchor" href="#查看节点" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#查看所有节点</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl get nodes</span></span>
<span class="line"><span style="color:#A6ACCD;">root@upchina1:~# kubectl get nodes</span></span>
<span class="line"><span style="color:#A6ACCD;">NAME       STATUS   ROLES                         AGE     VERSION</span></span>
<span class="line"><span style="color:#A6ACCD;">upchina1   Ready    control-plane,master,worker   2d22h   v1.20.4</span></span>
<span class="line"><span style="color:#A6ACCD;">upchina2   Ready    worker                        2d21h   v1.20.4</span></span>
<span class="line"><span style="color:#A6ACCD;">upchina3   Ready    worker                        2d21h   v1.20.4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#查看某个节点的信息</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl describe node upchina1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">#查看所有节点</span></span>
<span class="line"><span style="color:#abb2bf;">kubectl get nodes</span></span>
<span class="line"><span style="color:#abb2bf;">root@upchina1:~# kubectl get nodes</span></span>
<span class="line"><span style="color:#abb2bf;">NAME       STATUS   ROLES                         AGE     VERSION</span></span>
<span class="line"><span style="color:#abb2bf;">upchina1   Ready    control-plane,master,worker   2d22h   v1.20.4</span></span>
<span class="line"><span style="color:#abb2bf;">upchina2   Ready    worker                        2d21h   v1.20.4</span></span>
<span class="line"><span style="color:#abb2bf;">upchina3   Ready    worker                        2d21h   v1.20.4</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#查看某个节点的信息</span></span>
<span class="line"><span style="color:#abb2bf;">kubectl describe node upchina1</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="查看pod" tabindex="-1">查看POD <a class="header-anchor" href="#查看pod" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#查看所有命令空间</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl get ns</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#查看所有名称空间内的资源</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl get pods --all-namespaces</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#查看命名空间得pods</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl get pods --namespace=myns </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#进入Pod</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl exec demo-nginx-645c888794-vzrzq -n myns -it /bin/bash </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#进入pod中指定得容器</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl exec -it chi-demo-cluster-name-0-0-0  -c clickhouse -- /bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">#查看所有命令空间</span></span>
<span class="line"><span style="color:#abb2bf;">kubectl get ns</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#查看所有名称空间内的资源</span></span>
<span class="line"><span style="color:#abb2bf;">kubectl get pods --all-namespaces</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#查看命名空间得pods</span></span>
<span class="line"><span style="color:#abb2bf;">kubectl get pods --namespace=myns </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#进入Pod</span></span>
<span class="line"><span style="color:#abb2bf;">kubectl exec demo-nginx-645c888794-vzrzq -n myns -it /bin/bash </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#进入pod中指定得容器</span></span>
<span class="line"><span style="color:#abb2bf;">kubectl exec -it chi-demo-cluster-name-0-0-0  -c clickhouse -- /bin/bash</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="查看service" tabindex="-1">查看Service <a class="header-anchor" href="#查看service" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">root@upchina1:~# kubectl get service</span></span>
<span class="line"><span style="color:#A6ACCD;">NAME                             TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                         AGE</span></span>
<span class="line"><span style="color:#A6ACCD;">chi-demo-cluster-name-0-0        ClusterIP      None            &lt;none&gt;        8123/TCP,9000/TCP,9009/TCP      2d20h</span></span>
<span class="line"><span style="color:#A6ACCD;">chi-demo-cluster-name-0-1        ClusterIP      None            &lt;none&gt;        8123/TCP,9000/TCP,9009/TCP      2d20h</span></span>
<span class="line"><span style="color:#A6ACCD;">chi-demo-cluster-name-1-0        ClusterIP      None            &lt;none&gt;        8123/TCP,9000/TCP,9009/TCP      2d20h</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#创建service</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl create service nodeport nginx --tcp 80:80 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#删除service</span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl delete service nginx </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">root@upchina1:~# kubectl get service</span></span>
<span class="line"><span style="color:#abb2bf;">NAME                             TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                         AGE</span></span>
<span class="line"><span style="color:#abb2bf;">chi-demo-cluster-name-0-0        ClusterIP      None            &lt;none&gt;        8123/TCP,9000/TCP,9009/TCP      2d20h</span></span>
<span class="line"><span style="color:#abb2bf;">chi-demo-cluster-name-0-1        ClusterIP      None            &lt;none&gt;        8123/TCP,9000/TCP,9009/TCP      2d20h</span></span>
<span class="line"><span style="color:#abb2bf;">chi-demo-cluster-name-1-0        ClusterIP      None            &lt;none&gt;        8123/TCP,9000/TCP,9009/TCP      2d20h</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#创建service</span></span>
<span class="line"><span style="color:#abb2bf;">kubectl create service nodeport nginx --tcp 80:80 </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#删除service</span></span>
<span class="line"><span style="color:#abb2bf;">kubectl delete service nginx </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="端口转发" tabindex="-1">端口转发 <a class="header-anchor" href="#端口转发" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> kubectl port-forward demo-nginx-645c888794-vzrzq 80:8888  --namespace=myns</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;"> kubectl port-forward demo-nginx-645c888794-vzrzq 80:8888  --namespace=myns</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h3 id="磁盘映射" tabindex="-1">磁盘映射 <a class="header-anchor" href="#磁盘映射" aria-hidden="true">#</a></h3><h1 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h1>`,15),g=i(`<h2 id="证书" tabindex="-1">证书 <a class="header-anchor" href="#证书" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">https://blog.csdn.net/zuolinux/article/details/108671941</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">wget -O Makefile https://raw.githubusercontent.com/kubernetes/examples/master/staging/https-nginx/Makefile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> make keys KEY=/tmp/nginx.key CERT=/tmp/nginx.crt </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">https://blog.csdn.net/zuolinux/article/details/108671941</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">wget -O Makefile https://raw.githubusercontent.com/kubernetes/examples/master/staging/https-nginx/Makefile</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"> make keys KEY=/tmp/nginx.key CERT=/tmp/nginx.crt </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div>`,2);function k(s,F,v,E,_,x){const e=C,p=h("ClientOnly");return l(),b("div",null,[B,o(p,null,{default:c(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(l(),t(e,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),m,o(p,null,{default:c(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(l(),t(e,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),D,o(p,null,{default:c(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(l(),t(e,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),f,o(p,null,{default:c(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(l(),t(e,{key:0,article:s.$frontmatter},null,8,["article"])):r("",!0)]}),_:1}),g])}const w=d(u,[["render",k]]);export{S as __pageData,w as default};
