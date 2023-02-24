import{_ as s,c as n,o as a,a as l}from"./app.2918728e.js";const D=JSON.parse('{"title":"Git常用指令","description":"","frontmatter":{"title":"Git常用指令","author":"yinuuu","date":"2023/01/01","categories":["Git"],"tags":["Git"]},"headers":[{"level":2,"title":"新建代码库","slug":"新建代码库","link":"#新建代码库","children":[]},{"level":2,"title":"增加 / 删除文件","slug":"增加-删除文件","link":"#增加-删除文件","children":[]},{"level":2,"title":"代码提交","slug":"代码提交","link":"#代码提交","children":[]},{"level":2,"title":"分支","slug":"分支","link":"#分支","children":[]},{"level":2,"title":"标签","slug":"标签","link":"#标签","children":[]},{"level":2,"title":"查看信息","slug":"查看信息","link":"#查看信息","children":[]},{"level":2,"title":"远程同步","slug":"远程同步","link":"#远程同步","children":[]},{"level":2,"title":"撤销","slug":"撤销","link":"#撤销","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":2,"title":"相关链接","slug":"相关链接","link":"#相关链接","children":[]}],"relativePath":"linux/tools/01-Git/01-Git常用命令.md","lastUpdated":1677165673000}'),p={name:"linux/tools/01-Git/01-Git常用命令.md"},o=l(`<h2 id="新建代码库" tabindex="-1">新建代码库 <a class="header-anchor" href="#新建代码库" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">project-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 递归克隆子模块</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--recurse-submodules</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submodule</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--recursive</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> [project-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">clone</span><span style="color:#ABB2BF;"> [url]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 递归克隆子模块</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">clone</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--recurse-submodules</span><span style="color:#ABB2BF;"> [url]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">submodule</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">update</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--remote</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--recursive</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;a name=&quot;224e2ccd&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">## 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">Git 的设置文件为\`.gitconfig\`，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`bash</span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config --list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config -e [--global]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config [--global] user.name &quot;[name]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config [--global] user.email &quot;[email address]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">&lt;a name=&quot;224e2ccd&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">## 配置</span></span>
<span class="line"><span style="color:#abb2bf;">Git 的设置文件为\`.gitconfig\`，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。</span></span>
<span class="line"><span style="color:#abb2bf;">\`\`\`bash</span></span>
<span class="line"><span style="color:#abb2bf;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#abb2bf;">$ git config --list</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#abb2bf;">$ git config -e [--global]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#abb2bf;">$ git config [--global] user.name &quot;[name]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">$ git config [--global] user.email &quot;[email address]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><h2 id="增加-删除文件" tabindex="-1">增加 / 删除文件 <a class="header-anchor" href="#增加-删除文件" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file-original</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file-renamed</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> [file1] [file2] </span><span style="color:#98C379;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">rm</span><span style="color:#ABB2BF;"> [file1] [file2] </span><span style="color:#98C379;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">rm</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--cached</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">mv</span><span style="color:#ABB2BF;"> [file-original] [file-renamed]</span></span>
<span class="line"></span></code></pre></div><p><a name="d16ebf33"></a></p><h2 id="代码提交" tabindex="-1">代码提交 <a class="header-anchor" href="#代码提交" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro has-diff vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-m</span><span style="color:#ABB2BF;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> [file1] [file2] </span><span style="color:#98C379;">...</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-m</span><span style="color:#ABB2BF;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--amend</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-m</span><span style="color:#ABB2BF;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--amend</span><span style="color:#ABB2BF;"> [file1] [file2] </span><span style="color:#98C379;">...</span></span>
<span class="line"></span></code></pre></div><p><a name="bfc04cfd"></a></p><h2 id="分支" tabindex="-1">分支 <a class="header-anchor" href="#分支" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--track</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--set-upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 选择一个commit，合并进当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cherry-pick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--delete</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-dr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote/branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-b</span><span style="color:#ABB2BF;"> [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> [branch] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--track</span><span style="color:#ABB2BF;"> [branch] [remote-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--set-upstream</span><span style="color:#ABB2BF;"> [branch] [remote-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">merge</span><span style="color:#ABB2BF;"> [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 选择一个commit，合并进当前分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">cherry-pick</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-d</span><span style="color:#ABB2BF;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除远程分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--delete</span><span style="color:#ABB2BF;"> [branch-name]</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-dr</span><span style="color:#ABB2BF;"> [remote/branch]</span></span>
<span class="line"></span></code></pre></div><p><a name="14d34236"></a></p><h2 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有tag</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除本地tag</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程tag</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看tag信息</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交指定tag</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交所有tag</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 列出所有tag</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">tag</span><span style="color:#ABB2BF;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">tag</span><span style="color:#ABB2BF;"> [tag] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除本地tag</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">tag</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-d</span><span style="color:#ABB2BF;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除远程tag</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">:refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看tag信息</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">show</span><span style="color:#ABB2BF;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交指定tag</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> [remote] [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交所有tag</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> [remote] </span><span style="color:#D19A66;">--tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-b</span><span style="color:#ABB2BF;"> [branch] [tag]</span></span>
<span class="line"></span></code></pre></div><p><a name="756553d8"></a></p><h2 id="查看信息" tabindex="-1">查看信息 <a class="header-anchor" href="#查看信息" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 显示有变更的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">keyword</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--follow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">whatchanged</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--pretty</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shortlog</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blame</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">first-branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">second-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--shortstat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@{0 day ago}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name-only</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reflog</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro has-diff vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 显示有变更的文件</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-S</span><span style="color:#ABB2BF;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;"> [tag] </span><span style="color:#98C379;">HEAD</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;"> [tag] </span><span style="color:#98C379;">HEAD</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--grep</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--follow</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">whatchanged</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-p</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-5</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--pretty</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">shortlog</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">blame</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">diff</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--cached</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">diff</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">diff</span><span style="color:#ABB2BF;"> [first-branch]...[second-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">diff</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--shortstat</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;@{0 day ago}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">show</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">show</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--name-only</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">show</span><span style="color:#ABB2BF;"> [commit]:[filename]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reflog</span></span>
<span class="line"></span></code></pre></div><p><a name="3a92aa11"></a></p><h2 id="远程同步" tabindex="-1">远程同步 <a class="header-anchor" href="#远程同步" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">shortname</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--all</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">fetch</span><span style="color:#ABB2BF;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">show</span><span style="color:#ABB2BF;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> [shortname] [url]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">pull</span><span style="color:#ABB2BF;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> [remote] </span><span style="color:#D19A66;">--force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> [remote] </span><span style="color:#D19A66;">--all</span></span>
<span class="line"></span></code></pre></div><p><a name="bd9fcf46"></a></p><h2 id="撤销" tabindex="-1">撤销 <a class="header-anchor" href="#撤销" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--keep</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pop</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> [commit] [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reset</span><span style="color:#ABB2BF;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reset</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reset</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reset</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--hard</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reset</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--keep</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">revert</span><span style="color:#ABB2BF;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">stash</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">stash</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">pop</span></span>
<span class="line"></span></code></pre></div><p><a name="0d98c747"></a></p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 生成一个可供发布的压缩包</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">archive</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 生成一个可供发布的压缩包</span></span>
<span class="line"><span style="color:#ABB2BF;">$ </span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">archive</span></span>
<span class="line"></span></code></pre></div><p><a name="d82680d8"></a></p><h2 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-hidden="true">#</a></h2><ul><li><a href="http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html" target="_blank" rel="noreferrer">http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html</a></li></ul>`,29),e=[o];function t(c,r,y,i,C,A){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{D as __pageData,F as default};
