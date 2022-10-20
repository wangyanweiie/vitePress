import{_ as t,c as r,o as d,a as e}from"./app.0b0263bf.js";const m=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u65B9\u6CD5","slug":"\u4E00\u3001\u65B9\u6CD5","link":"#\u4E00\u3001\u65B9\u6CD5","children":[{"level":3,"title":"1. \u6570\u636E\u7C7B\u578B\u8F6C\u6362","slug":"_1-\u6570\u636E\u7C7B\u578B\u8F6C\u6362","link":"#_1-\u6570\u636E\u7C7B\u578B\u8F6C\u6362","children":[]},{"level":3,"title":"2. \u5B57\u7B26\u4E32\u65B9\u6CD5","slug":"_2-\u5B57\u7B26\u4E32\u65B9\u6CD5","link":"#_2-\u5B57\u7B26\u4E32\u65B9\u6CD5","children":[]},{"level":3,"title":"3. \u6570\u7EC4\u904D\u5386","slug":"_3-\u6570\u7EC4\u904D\u5386","link":"#_3-\u6570\u7EC4\u904D\u5386","children":[]},{"level":3,"title":"4. \u6570\u7EC4\u65B9\u6CD5","slug":"_4-\u6570\u7EC4\u65B9\u6CD5","link":"#_4-\u6570\u7EC4\u65B9\u6CD5","children":[]},{"level":3,"title":"5. Math\u5BF9\u8C61\u65B9\u6CD5","slug":"_5-math\u5BF9\u8C61\u65B9\u6CD5","link":"#_5-math\u5BF9\u8C61\u65B9\u6CD5","children":[]},{"level":3,"title":"6. Date\u5BF9\u8C61\u65B9\u6CD5","slug":"_6-date\u5BF9\u8C61\u65B9\u6CD5","link":"#_6-date\u5BF9\u8C61\u65B9\u6CD5","children":[]},{"level":3,"title":"7. ES6\u65B9\u6CD5\u62D3\u5C55","slug":"_7-es6\u65B9\u6CD5\u62D3\u5C55","link":"#_7-es6\u65B9\u6CD5\u62D3\u5C55","children":[]}]}],"relativePath":"note/frame/JavaScript.md"}'),a={name:"note/frame/JavaScript.md"},h=e('<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u65B9\u6CD5" tabindex="-1">\u4E00\u3001\u65B9\u6CD5 <a class="header-anchor" href="#\u4E00\u3001\u65B9\u6CD5" aria-hidden="true">#</a></h2><h3 id="_1-\u6570\u636E\u7C7B\u578B\u8F6C\u6362" tabindex="-1">1. \u6570\u636E\u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#_1-\u6570\u636E\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>str = String(num)</td><td>\u6570\u5B57\u8F6C\u5B57\u7B26\u4E32</td></tr><tr><td>str = num.toString()</td><td>\u6570\u5B57\u8F6C\u5B57\u7B26\u4E32</td></tr><tr><td>num = Number(str)</td><td>\u5B57\u7B26\u4E32\u8F6C\u6570\u5B57</td></tr><tr><td>num = str.toNumber()</td><td>\u5B57\u7B26\u4E32\u8F6C\u6570\u5B57</td></tr><tr><td>newNum = Number.parseInt(num)</td><td>\u8F6C\u6362\u4E3A\u6574\u6570\uFF0C\u4E0D\u4F1A\u56DB\u820D\u4E94\u5165</td></tr><tr><td>newNum = Number.parseFloat(num)</td><td>\u8F6C\u6362\u4E3A\u6D6E\u70B9\u6570</td></tr><tr><td>newStr = num.toFixed(n)</td><td>\u4FDD\u7559\u51E0\u4F4D\u5C0F\u6570\uFF0C\u56DB\u820D\u4E94\u5165</td></tr></tbody></table><h3 id="_2-\u5B57\u7B26\u4E32\u65B9\u6CD5" tabindex="-1">2. \u5B57\u7B26\u4E32\u65B9\u6CD5 <a class="header-anchor" href="#_2-\u5B57\u7B26\u4E32\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>newStr = str.concat(str1,str2,...)</td><td>\u62FC\u63A5\u5B57\u7B26\u4E32</td></tr><tr><td>newStr = str.substr(\u5F00\u59CB\u4E0B\u6807,\u622A\u53D6\u957F\u5EA6)</td><td>\u622A\u53D6\u5B57\u7B26\u4E32</td></tr><tr><td>newStr = str.slice(\u5F00\u59CB\u4E0B\u6807,\u7ED3\u675F\u4E0B\u6807)</td><td>\u622A\u53D6\u5B57\u7B26\u4E32</td></tr><tr><td>newArr = str.split(&#39;&#39;)</td><td>\u5206\u9694\u5B57\u7B26\u4E32\uFF0C\u9ED8\u8BA4\u5168\u5C40\u5206\u9694\uFF0C\u8FD4\u56DE\u6570\u7EC4</td></tr><tr><td>str.indexOf(&#39;..&#39;)</td><td>\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u6307\u5B9A\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u7B26\u5408\u7684\u4E0B\u6807\uFF0C\u67E5\u627E\u4E0D\u5230\u8FD4\u56DE-1</td></tr></tbody></table><h3 id="_3-\u6570\u7EC4\u904D\u5386" tabindex="-1">3. \u6570\u7EC4\u904D\u5386 <a class="header-anchor" href="#_3-\u6570\u7EC4\u904D\u5386" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>for(var i in arr){}</td><td>\u5FEB\u901F\u904D\u5386,i\u662F\u6570\u7EC4\u5143\u7D20\u7684\u4E0B\u6807</td></tr><tr><td>arr.forEach((item,index,arr) =&gt; {})</td><td>item \u6570\u7EC4\u5143\u7D20\uFF0Cindex \u6570\u7EC4\u5143\u7D20\u4E0B\u6807\uFF0Carr \u6570\u7EC4\u672C\u8EAB</td></tr><tr><td>newArr = arr.map((item,index,arr) =&gt; {})</td><td>\u53EF\u4EE5\u64CD\u4F5C\u6BCF\u4E00\u9879\u6570\u7EC4\u5143\u7D20\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4</td></tr><tr><td>newArr = arr.filter((item,index,arr) =&gt; {})</td><td>\u8FC7\u6EE4\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u5143\u7D20\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4</td></tr></tbody></table><h3 id="_4-\u6570\u7EC4\u65B9\u6CD5" tabindex="-1">4. \u6570\u7EC4\u65B9\u6CD5 <a class="header-anchor" href="#_4-\u6570\u7EC4\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>newArr = arr.concat(arr1,arr2,...)</td><td>\u62FC\u63A5\u6570\u7EC4</td></tr><tr><td>arr.slice(\u5F00\u59CB\u4E0B\u6807,\u7ED3\u675F\u4E0B\u6807)</td><td>\u622A\u53D6\u6570\u7EC4</td></tr><tr><td>arr.includes(&#39;str&#39;)</td><td>\u5224\u65AD\u6570\u7EC4\u662F\u5426\u5305\u542B\u6307\u5B9A\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE true or false</td></tr><tr><td>arr.indexOf(&#39;..&#39;)</td><td>\u5224\u65AD\u6570\u7EC4\u662F\u5426\u5305\u542B\u6307\u5B9A\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u7B26\u5408\u7684\u4E0B\u6807\uFF0C\u67E5\u627E\u4E0D\u5230\u8FD4\u56DE-1</td></tr><tr><td>arr.push()</td><td>\u5C3E\u90E8\u65B0\u589E\u5143\u7D20</td></tr><tr><td>arr.unshift()</td><td>\u5934\u90E8\u65B0\u589E\u5143\u7D20</td></tr><tr><td>arr.pop()</td><td>\u5C3E\u90E8\u5220\u9664\u5143\u7D20</td></tr><tr><td>arr.shift()</td><td>\u5934\u90E8\u5220\u9664\u5143\u7D20</td></tr><tr><td>newStr = arr.join(&#39;&#39;)</td><td>\u5206\u9694\u6570\u7EC4\uFF0C\u9ED8\u8BA4\u5168\u5C40\u5206\u9694\uFF0C\u8FD4\u56DE\u5B57\u7B26\u4E32</td></tr><tr><td>newArr = arr.splice(\u5F00\u59CB\u4E0B\u6807,\u5220\u9664\u6570,\u65B0\u589E1,\u65B0\u589E2...)</td><td></td></tr><tr><td>Array.isArray(arr)</td><td>\u5224\u65AD\u662F\u5426\u4E3A\u6570\u7EC4\u7C7B\u578B\uFF0C\u8FD4\u56DE true or false</td></tr></tbody></table><h3 id="_5-math\u5BF9\u8C61\u65B9\u6CD5" tabindex="-1">5. Math\u5BF9\u8C61\u65B9\u6CD5 <a class="header-anchor" href="#_5-math\u5BF9\u8C61\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>Math.ceil(num)</td><td>\u5411\u4E0A\u53D6\u6574</td></tr><tr><td>Math.floor(num)</td><td>\u5411\u4E0B\u53D6\u6574</td></tr><tr><td>Math.round(num)</td><td>\u56DB\u820D\u4E94\u5165\u53D6\u6574</td></tr><tr><td>Math.abs(num)</td><td>\u53D6\u7EDD\u5BF9\u503C</td></tr></tbody></table><h3 id="_6-date\u5BF9\u8C61\u65B9\u6CD5" tabindex="-1">6. Date\u5BF9\u8C61\u65B9\u6CD5 <a class="header-anchor" href="#_6-date\u5BF9\u8C61\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>new Date()</td><td>\u83B7\u53D6\u5F53\u524D\u65F6\u95F4</td></tr><tr><td>Date.now()</td><td>\u83B7\u53D6\u5F53\u524D\u65F6\u95F4</td></tr></tbody></table><h3 id="_7-es6\u65B9\u6CD5\u62D3\u5C55" tabindex="-1">7. ES6\u65B9\u6CD5\u62D3\u5C55 <a class="header-anchor" href="#_7-es6\u65B9\u6CD5\u62D3\u5C55" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\uFF08??\uFF09</td><td>\u903B\u8F91\u64CD\u4F5C\u7B26,\u5F53\u5DE6\u4FA7\u503C\u4E3A null \u6216\u8005 undefined \u65F6\u8FD4\u56DE\u5176\u53F3\u4FA7\u503C,\u5426\u5219\u8FD4\u56DE\u5DE6\u4FA7\u503C;</td></tr><tr><td>Object.assign(target, ...sources)</td><td>\u5408\u5E76\u5BF9\u8C61</td></tr><tr><td><a href="http://array.at" target="_blank" rel="noreferrer">array.at</a>(-1)</td><td>\u6570\u7EC4\u7684\u8D1F\u7D22\u5F15\u8BBF\u95EE\u5668</td></tr></tbody></table>',16),n=[h];function i(l,s,o,c,_,u){return d(),r("div",null,n)}const f=t(a,[["render",i]]);export{m as __pageData,f as default};