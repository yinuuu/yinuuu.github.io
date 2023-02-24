import{_ as s,c as n,o as a,a as l}from"./app.2918728e.js";const F=JSON.parse(`{"title":"Vim常用指令","description":"","frontmatter":{"title":"Vim常用指令","author":"yinuuu","date":"2023/01/01","categories":["Vim"],"tags":["Vim"]},"headers":[{"level":3,"title":"Vim 导航基础","slug":"vim-导航基础","link":"#vim-导航基础","children":[]},{"level":3,"title":"模式","slug":"模式","link":"#模式","children":[]},{"level":3,"title":"Vim 的 '语法'","slug":"vim-的-语法","link":"#vim-的-语法","children":[]},{"level":3,"title":"一些快捷键和技巧","slug":"一些快捷键和技巧","link":"#一些快捷键和技巧","children":[]},{"level":3,"title":"宏","slug":"宏","link":"#宏","children":[]},{"level":3,"title":"配置 ~/.vimrc","slug":"配置-vimrc","link":"#配置-vimrc","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"linux/linux/02-Vim/01-Vim编辑器.md","lastUpdated":1677165673000}`),p={name:"linux/linux/02-Vim/01-Vim编辑器.md"},o=l(`<p><a href="http://www.vim.org" target="_blank" rel="noreferrer">Vim</a> (Vi IMproved) 是 Unix 上的流行编辑器 vi 的克隆版本。这个文本编辑器是为性能和提升效率而设计的，并且在大多数基于 unix 的系统上普遍存在。它有大量的快捷键可用来快速导航到文件的特定位置，以便进行快速编辑。</p><h3 id="vim-导航基础" tabindex="-1">Vim 导航基础 <a class="header-anchor" href="#vim-导航基础" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">filenam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 在 Vim 中打开 &lt;filename&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:q</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 退出 Vim</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:w</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 保存当前文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:wq</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 保存文件并退出 Vim </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:q!</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 退出 Vim 并且不保存文件</span></span>
<span class="line"><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># ! *强制* 执行 :q， 因此没有保存就退出 Vim</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:x</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 保存文件并且退出 Vim， 是 :wq 的简写版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">u</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 撤销</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">CTRL+R</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;"># 重做</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">h</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 左移一个字符</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">j</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 下移一行</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">k</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 上移一行</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">l</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 右移一个字符</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 在行内移动</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">0</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移到行首</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移到行尾</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">^</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移到行内的第一个非空白字符处</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 在文本中查找</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">/word</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 光标之后的所有该词都高亮显示</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">?word</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 光标之前的所有该词都高亮显示</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">n</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 查找后将光标移到该词的下一个出现位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">N</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 光标移到该词的上一个出现位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">:</span><span style="color:#FFCB6B;">%s/foo/bar/g</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 将文件每一行上的所有 &#39;foo&#39; 都改成 &#39;bar&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:s/foo/bar/g</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 将当前行上的所有 &#39;foo&#39; 都改成 &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 跳到字符处</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">f&lt;字符&gt;</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 向前跳移到 &lt;字符&gt; 上</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">t&lt;字符&gt;</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 向前跳移到 &lt;字符&gt; 的左侧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 例如，</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">f&lt;</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 向前跳移到 &lt; 上</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">t&lt;</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 向前跳移到 &lt; 的左侧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 按词移动</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 默认一个单词由字母，数字和下划线组成</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">w</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移动到下一个词首</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">b</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移动到前一个词首</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">e</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移动到下一个词尾</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 移动的其它命令</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">gg</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 移到文件顶部</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">G</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移到文件末尾</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:NUM</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 移到第 NUM 行 (NUM 是任意数字)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">H</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移到屏幕顶部</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">M</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移到屏幕中间位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">L</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 移到屏幕末尾</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">    vim &lt;</span><span style="color:#98C379;">filenam</span><span style="color:#ABB2BF;">e&gt;   </span><span style="color:#7F848E;font-style:italic;"># 在 Vim 中打开 &lt;filename&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    :q               </span><span style="color:#7F848E;font-style:italic;"># 退出 Vim</span></span>
<span class="line"><span style="color:#ABB2BF;">    :w               </span><span style="color:#7F848E;font-style:italic;"># 保存当前文件</span></span>
<span class="line"><span style="color:#ABB2BF;">    :wq              </span><span style="color:#7F848E;font-style:italic;"># 保存文件并退出 Vim </span></span>
<span class="line"><span style="color:#ABB2BF;">    :q!              </span><span style="color:#7F848E;font-style:italic;"># 退出 Vim 并且不保存文件</span></span>
<span class="line"><span style="color:#ABB2BF;">                     </span><span style="color:#7F848E;font-style:italic;"># ! *强制* 执行 :q， 因此没有保存就退出 Vim</span></span>
<span class="line"><span style="color:#ABB2BF;">    :x               </span><span style="color:#7F848E;font-style:italic;"># 保存文件并且退出 Vim， 是 :wq 的简写版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    u                </span><span style="color:#7F848E;font-style:italic;"># 撤销</span></span>
<span class="line"><span style="color:#ABB2BF;">    CTRL+R           </span><span style="color:#7F848E;font-style:italic;"># 重做</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    h                </span><span style="color:#7F848E;font-style:italic;"># 左移一个字符</span></span>
<span class="line"><span style="color:#ABB2BF;">    j                </span><span style="color:#7F848E;font-style:italic;"># 下移一行</span></span>
<span class="line"><span style="color:#ABB2BF;">    k                </span><span style="color:#7F848E;font-style:italic;"># 上移一行</span></span>
<span class="line"><span style="color:#ABB2BF;">    l                </span><span style="color:#7F848E;font-style:italic;"># 右移一个字符</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># 在行内移动</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    0                </span><span style="color:#7F848E;font-style:italic;"># 移到行首</span></span>
<span class="line"><span style="color:#ABB2BF;">    $                </span><span style="color:#7F848E;font-style:italic;"># 移到行尾</span></span>
<span class="line"><span style="color:#ABB2BF;">    ^                </span><span style="color:#7F848E;font-style:italic;"># 移到行内的第一个非空白字符处</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># 在文本中查找</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    /word            </span><span style="color:#7F848E;font-style:italic;"># 光标之后的所有该词都高亮显示</span></span>
<span class="line"><span style="color:#ABB2BF;">    ?word            </span><span style="color:#7F848E;font-style:italic;"># 光标之前的所有该词都高亮显示</span></span>
<span class="line"><span style="color:#ABB2BF;">    n                </span><span style="color:#7F848E;font-style:italic;"># 查找后将光标移到该词的下一个出现位置</span></span>
<span class="line"><span style="color:#ABB2BF;">    N                </span><span style="color:#7F848E;font-style:italic;"># 光标移到该词的上一个出现位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">:</span><span style="color:#ABB2BF;">%s/foo/bar/g    </span><span style="color:#7F848E;font-style:italic;"># 将文件每一行上的所有 &#39;foo&#39; 都改成 &#39;bar&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    :s/foo/bar/g     </span><span style="color:#7F848E;font-style:italic;"># 将当前行上的所有 &#39;foo&#39; 都改成 &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># 跳到字符处</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    f&lt;字符&gt;         </span><span style="color:#7F848E;font-style:italic;"># 向前跳移到 &lt;字符&gt; 上</span></span>
<span class="line"><span style="color:#ABB2BF;">    t&lt;字符&gt;         </span><span style="color:#7F848E;font-style:italic;"># 向前跳移到 &lt;字符&gt; 的左侧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># 例如，</span></span>
<span class="line"><span style="color:#ABB2BF;">    f&lt;               </span><span style="color:#7F848E;font-style:italic;"># 向前跳移到 &lt; 上</span></span>
<span class="line"><span style="color:#ABB2BF;">    t&lt;               </span><span style="color:#7F848E;font-style:italic;"># 向前跳移到 &lt; 的左侧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># 按词移动</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># 默认一个单词由字母，数字和下划线组成</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    w                </span><span style="color:#7F848E;font-style:italic;"># 移动到下一个词首</span></span>
<span class="line"><span style="color:#ABB2BF;">    b                </span><span style="color:#7F848E;font-style:italic;"># 移动到前一个词首</span></span>
<span class="line"><span style="color:#ABB2BF;">    e                </span><span style="color:#7F848E;font-style:italic;"># 移动到下一个词尾</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># 移动的其它命令</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    gg               </span><span style="color:#7F848E;font-style:italic;"># 移到文件顶部</span></span>
<span class="line"><span style="color:#ABB2BF;">    G                </span><span style="color:#7F848E;font-style:italic;"># 移到文件末尾</span></span>
<span class="line"><span style="color:#ABB2BF;">    :NUM             </span><span style="color:#7F848E;font-style:italic;"># 移到第 NUM 行 (NUM 是任意数字)</span></span>
<span class="line"><span style="color:#ABB2BF;">    H                </span><span style="color:#7F848E;font-style:italic;"># 移到屏幕顶部</span></span>
<span class="line"><span style="color:#ABB2BF;">    M                </span><span style="color:#7F848E;font-style:italic;"># 移到屏幕中间位置</span></span>
<span class="line"><span style="color:#ABB2BF;">    L                </span><span style="color:#7F848E;font-style:italic;"># 移到屏幕末尾</span></span>
<span class="line"></span></code></pre></div><h3 id="模式" tabindex="-1">模式 <a class="header-anchor" href="#模式" aria-hidden="true">#</a></h3><p>Vim 基于 <strong>模式</strong> 这个概念。 命令模式 - Vim 启动后就处于这个模式，用于导航和操作命令 插入模式 - 用于在你的文件中进行修改 可视模式 - 用于高亮文本并对它们进行操作 Ex 模式  - 用于跳到底部的 &#39;:&#39; 提示行上输入命令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">i</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 在光标位置前，将 Vim 切换到插入模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 在光标位置后，将 Vim 切换到插入模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">v</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 将 Vim 切换到可视模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 将 Vim 切换到 ex 模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">esc&gt;</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 无论你当前处于什么模式，都返回到命令模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 复制和粘贴文本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">y</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 复制所选的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">yy</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 复制当前行</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">d</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 删除所选的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">dd</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 删除当前行</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 在当前光标位置后粘贴复制的文本</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 在当前光标位置前粘贴复制的文本</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">x</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 删除当前光标位置处的字符</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">    i                </span><span style="color:#7F848E;font-style:italic;"># 在光标位置前，将 Vim 切换到插入模式</span></span>
<span class="line"><span style="color:#ABB2BF;">    a                </span><span style="color:#7F848E;font-style:italic;"># 在光标位置后，将 Vim 切换到插入模式</span></span>
<span class="line"><span style="color:#ABB2BF;">    v                </span><span style="color:#7F848E;font-style:italic;"># 将 Vim 切换到可视模式</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">:</span><span style="color:#ABB2BF;">                </span><span style="color:#7F848E;font-style:italic;"># 将 Vim 切换到 ex 模式</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;esc&gt;            </span><span style="color:#7F848E;font-style:italic;"># 无论你当前处于什么模式，都返回到命令模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># 复制和粘贴文本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    y                </span><span style="color:#7F848E;font-style:italic;"># 复制所选的内容</span></span>
<span class="line"><span style="color:#ABB2BF;">    yy               </span><span style="color:#7F848E;font-style:italic;"># 复制当前行</span></span>
<span class="line"><span style="color:#ABB2BF;">    d                </span><span style="color:#7F848E;font-style:italic;"># 删除所选的内容</span></span>
<span class="line"><span style="color:#ABB2BF;">    dd               </span><span style="color:#7F848E;font-style:italic;"># 删除当前行</span></span>
<span class="line"><span style="color:#ABB2BF;">    p                </span><span style="color:#7F848E;font-style:italic;"># 在当前光标位置后粘贴复制的文本</span></span>
<span class="line"><span style="color:#ABB2BF;">    P                </span><span style="color:#7F848E;font-style:italic;"># 在当前光标位置前粘贴复制的文本</span></span>
<span class="line"><span style="color:#ABB2BF;">    x                </span><span style="color:#7F848E;font-style:italic;"># 删除当前光标位置处的字符</span></span>
<span class="line"></span></code></pre></div><h3 id="vim-的-语法" tabindex="-1">Vim 的 &#39;语法&#39; <a class="header-anchor" href="#vim-的-语法" aria-hidden="true">#</a></h3><p>Vim 可以被认为是按 &#39;动词-修饰词-名词&#39; 格式编排的一组命令： 动词     - 你的动作 修饰词   - 你如何执行你的动作 名词     - 你的动作所作用于的对象 关于 &#39;动词&#39;，&#39;修饰词&#39;，和 &#39;名词&#39; 的几个重要例子：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># &#39;动词&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">d</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 删除</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">c</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 修改</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">y</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 复制</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">v</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 可视化选择</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># &#39;修饰词&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">i</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 内部的</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 周围的</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">NUM</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 数字 (NUM 是任意数字)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">f</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 查找文本并位于其上</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">t</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 查找文本并停于其前面</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">/</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 从光标处开始查找字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">?</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 在光标前查找字符串</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># &#39;名词&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">w</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 词</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">s</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 句子</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 段落</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">b</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 示例 &#39;语句&#39; 或命令</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">d2w</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 删除 2 个词</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">cis</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 修改段落内的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">yip</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 复制段落内的内容 (复制你所在的段落)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ct&lt;</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 修改直到括号开启处</span></span>
<span class="line"><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 对你的当前位置直到下个括号开启处的内容进行修改</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">d$</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 删除直到行尾</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># &#39;动词&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    d                </span><span style="color:#7F848E;font-style:italic;"># 删除</span></span>
<span class="line"><span style="color:#ABB2BF;">    c                </span><span style="color:#7F848E;font-style:italic;"># 修改</span></span>
<span class="line"><span style="color:#ABB2BF;">    y                </span><span style="color:#7F848E;font-style:italic;"># 复制</span></span>
<span class="line"><span style="color:#ABB2BF;">    v                </span><span style="color:#7F848E;font-style:italic;"># 可视化选择</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># &#39;修饰词&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    i                </span><span style="color:#7F848E;font-style:italic;"># 内部的</span></span>
<span class="line"><span style="color:#ABB2BF;">    a                </span><span style="color:#7F848E;font-style:italic;"># 周围的</span></span>
<span class="line"><span style="color:#ABB2BF;">    NUM              </span><span style="color:#7F848E;font-style:italic;"># 数字 (NUM 是任意数字)</span></span>
<span class="line"><span style="color:#ABB2BF;">    f                </span><span style="color:#7F848E;font-style:italic;"># 查找文本并位于其上</span></span>
<span class="line"><span style="color:#ABB2BF;">    t                </span><span style="color:#7F848E;font-style:italic;"># 查找文本并停于其前面</span></span>
<span class="line"><span style="color:#ABB2BF;">    /                </span><span style="color:#7F848E;font-style:italic;"># 从光标处开始查找字符串</span></span>
<span class="line"><span style="color:#ABB2BF;">    ?                </span><span style="color:#7F848E;font-style:italic;"># 在光标前查找字符串</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># &#39;名词&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    w                </span><span style="color:#7F848E;font-style:italic;"># 词</span></span>
<span class="line"><span style="color:#ABB2BF;">    s                </span><span style="color:#7F848E;font-style:italic;"># 句子</span></span>
<span class="line"><span style="color:#ABB2BF;">    p                </span><span style="color:#7F848E;font-style:italic;"># 段落</span></span>
<span class="line"><span style="color:#ABB2BF;">    b                </span><span style="color:#7F848E;font-style:italic;"># 块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># 示例 &#39;语句&#39; 或命令</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    d2w              </span><span style="color:#7F848E;font-style:italic;"># 删除 2 个词</span></span>
<span class="line"><span style="color:#ABB2BF;">    cis              </span><span style="color:#7F848E;font-style:italic;"># 修改段落内的内容</span></span>
<span class="line"><span style="color:#ABB2BF;">    yip              </span><span style="color:#7F848E;font-style:italic;"># 复制段落内的内容 (复制你所在的段落)</span></span>
<span class="line"><span style="color:#ABB2BF;">    ct&lt;              </span><span style="color:#7F848E;font-style:italic;"># 修改直到括号开启处</span></span>
<span class="line"><span style="color:#ABB2BF;">                     </span><span style="color:#7F848E;font-style:italic;"># 对你的当前位置直到下个括号开启处的内容进行修改</span></span>
<span class="line"><span style="color:#ABB2BF;">    d$               </span><span style="color:#7F848E;font-style:italic;"># 删除直到行尾</span></span>
<span class="line"></span></code></pre></div><h3 id="一些快捷键和技巧" tabindex="-1">一些快捷键和技巧 <a class="header-anchor" href="#一些快捷键和技巧" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 将所选内容缩进一级</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 将所选内容取消缩进一级</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:earlier</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">15m</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 将文档还原到 15 分钟前的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">:later</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">15m</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># 逆转上述命令</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ddp</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 相邻行交换位置，先 dd 再 p</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 重复之前动作</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">    &gt;                </span><span style="color:#7F848E;font-style:italic;"># 将所选内容缩进一级</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;                </span><span style="color:#7F848E;font-style:italic;"># 将所选内容取消缩进一级</span></span>
<span class="line"><span style="color:#ABB2BF;">    :earlier </span><span style="color:#98C379;">15m</span><span style="color:#ABB2BF;">     </span><span style="color:#7F848E;font-style:italic;"># 将文档还原到 15 分钟前的状态</span></span>
<span class="line"><span style="color:#ABB2BF;">    :later </span><span style="color:#98C379;">15m</span><span style="color:#ABB2BF;">       </span><span style="color:#7F848E;font-style:italic;"># 逆转上述命令</span></span>
<span class="line"><span style="color:#ABB2BF;">    ddp              </span><span style="color:#7F848E;font-style:italic;"># 相邻行交换位置，先 dd 再 p</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">.</span><span style="color:#ABB2BF;">                </span><span style="color:#7F848E;font-style:italic;"># 重复之前动作</span></span>
<span class="line"></span></code></pre></div><h3 id="宏" tabindex="-1">宏 <a class="header-anchor" href="#宏" aria-hidden="true">#</a></h3><p>宏基本上来说就是可录制的动作。 当你开始录制宏时，它会记录你使用的 <strong>每个</strong> 动作和命令， 直到你停止录制。当调用宏时，它会将这个完全相同的动作和命令序列 再次应用于所选文本之上。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">qa</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 开始录制一个叫 &#39;a&#39; 的宏</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">q</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 停止录制</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">@a</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 重播宏</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">    qa               </span><span style="color:#7F848E;font-style:italic;"># 开始录制一个叫 &#39;a&#39; 的宏</span></span>
<span class="line"><span style="color:#ABB2BF;">    q                </span><span style="color:#7F848E;font-style:italic;"># 停止录制</span></span>
<span class="line"><span style="color:#ABB2BF;">    @a               </span><span style="color:#7F848E;font-style:italic;"># 重播宏</span></span>
<span class="line"></span></code></pre></div><h3 id="配置-vimrc" tabindex="-1">配置 ~/.vimrc <a class="header-anchor" href="#配置-vimrc" aria-hidden="true">#</a></h3><p>.vimrc 可用于在启动时对 Vim 进行配置。 这里是一个示例 ~/.vimrc 文件：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 示例 ~/.vimrc</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2015.10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 需要 Vim iMproved 版本</span></span>
<span class="line"><span style="color:#C3E88D;">set nocompatible</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 根据文件名检测文件类型，以便能进行智能自动缩进等操作。</span></span>
<span class="line"><span style="color:#FFCB6B;">filetype</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">indent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 开启语法高亮</span></span>
<span class="line"><span style="color:#C3E88D;">syntax on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 更好的命令行补全</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wildmenu</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 除了当使用大写字母时使用大小写无关查找</span></span>
<span class="line"><span style="color:#C3E88D;">set ignorecase</span></span>
<span class="line"><span style="color:#C3E88D;">set smartcase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 当新开一行时，如果没有开启文件特定的缩进规则，</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 则缩进保持与你当前行一致</span></span>
<span class="line"><span style="color:#C3E88D;">set autoindent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 在左侧显示行号</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 缩进选项，根据个人偏好进行修改</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 每个 TAB 的可视空格数</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tabstop=</span><span style="color:#F78C6C;">4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 编辑时 TAB 对应的空格数</span></span>
<span class="line"><span style="color:#C3E88D;">set softtabstop=4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 当使用缩进操作 </span><span style="color:#89DDFF;">(&gt;&gt;</span><span style="color:#A6ACCD;"> 和 &lt;&lt;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 时缩进的空格数</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shiftwidth=</span><span style="color:#F78C6C;">4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 将 TAB 转换成空格</span></span>
<span class="line"><span style="color:#C3E88D;">set expandtab</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 为缩进和对齐开启智能化的 TAB 和空格切换功能</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">smarttab</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot; 示例 ~/.vimrc</span></span>
<span class="line"><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2015.10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot; 需要 Vim iMproved 版本</span></span>
<span class="line"><span style="color:#98C379;">set nocompatible</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> 根据文件名检测文件类型，以便能进行智能自动缩进等操作。</span></span>
<span class="line"><span style="color:#ABB2BF;">filetype </span><span style="color:#98C379;">indent</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">plugin</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot; 开启语法高亮</span></span>
<span class="line"><span style="color:#98C379;">syntax on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> 更好的命令行补全</span></span>
<span class="line"><span style="color:#56B6C2;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">wildmenu</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot; 除了当使用大写字母时使用大小写无关查找</span></span>
<span class="line"><span style="color:#98C379;">set ignorecase</span></span>
<span class="line"><span style="color:#98C379;">set smartcase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> 当新开一行时，如果没有开启文件特定的缩进规则，</span></span>
<span class="line"><span style="color:#98C379;">&quot; 则缩进保持与你当前行一致</span></span>
<span class="line"><span style="color:#98C379;">set autoindent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> 在左侧显示行号</span></span>
<span class="line"><span style="color:#56B6C2;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot; 缩进选项，根据个人偏好进行修改</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> 每个 TAB 的可视空格数</span></span>
<span class="line"><span style="color:#56B6C2;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">tabstop=</span><span style="color:#D19A66;">4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot; 编辑时 TAB 对应的空格数</span></span>
<span class="line"><span style="color:#98C379;">set softtabstop=4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> 当使用缩进操作 (&gt;&gt; 和 &lt;&lt;) 时缩进的空格数</span></span>
<span class="line"><span style="color:#56B6C2;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">shiftwidth=</span><span style="color:#D19A66;">4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot; 将 TAB 转换成空格</span></span>
<span class="line"><span style="color:#98C379;">set expandtab</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> 为缩进和对齐开启智能化的 TAB 和空格切换功能</span></span>
<span class="line"><span style="color:#56B6C2;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">smarttab</span></span>
<span class="line"></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><p><a href="http://www.vim.org/index.php" target="_blank" rel="noreferrer">Vim | Home</a><code>$ vimtutor</code></p><p><a href="https://danielmiessler.com/study/vim/" target="_blank" rel="noreferrer">A vim Tutorial and Primer</a></p><p><a href="http://stackoverflow.com/questions/726894/what-are-the-dark-corners-of-vim-your-mom-never-told-you-about" target="_blank" rel="noreferrer">What are the dark corners of Vim your mom never told you about? (Stack Overflow thread)</a></p><p><a href="https://wiki.archlinux.org/index.php/Vim" target="_blank" rel="noreferrer">Arch Linux Wiki</a></p>`,22),t=[o];function e(c,i,r,y,C,A){return a(),n("div",null,t)}const D=s(p,[["render",e]]);export{F as __pageData,D as default};
