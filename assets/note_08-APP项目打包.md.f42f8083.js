import{_ as e,c as d,o as i,a}from"./app.e5652c6f.js";const r="/vitePress/assets/dcloud.3720da57.png",l="/vitePress/assets/reName1.0c1ac30f.png",s="/vitePress/assets/reName2.0a921f76.png",o="/vitePress/assets/find1.f39b8cb9.png",n="/vitePress/assets/find2.738bed80.png",c="/vitePress/assets/keyStore.d6dba8e7.png",_="/vitePress/assets/keyStoreInfo.bbf67ee3.png",h="/vitePress/assets/key.d8fa1091.png",p="/vitePress/assets/logo.b8e89bfb.png",u="/vitePress/assets/www.1926d32e.png",m="/vitePress/assets/build.947499f1.png",t="/vitePress/assets/build\u2464.08eea5ce.png",g="/vitePress/assets/build\u2460.a2fa1804.png",b="/vitePress/assets/build\u2461.62be25dd.png",f="/vitePress/assets/build\u2462.74a8accd.png",P="/vitePress/assets/build\u2463.dad3524f.png",D=JSON.parse('{"title":"APP \u9879\u76EE\u6253\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001uni-app","slug":"\u4E00\u3001uni-app","link":"#\u4E00\u3001uni-app","children":[{"level":3,"title":"1. \u6D41\u7A0B","slug":"_1-\u6D41\u7A0B","link":"#_1-\u6D41\u7A0B","children":[]},{"level":3,"title":"2. \u5F00\u53D1\u8005\u4E2D\u5FC3","slug":"_2-\u5F00\u53D1\u8005\u4E2D\u5FC3","link":"#_2-\u5F00\u53D1\u8005\u4E2D\u5FC3","children":[]},{"level":3,"title":"3. \u9879\u76EE\u8BC1\u4E66","slug":"_3-\u9879\u76EE\u8BC1\u4E66","link":"#_3-\u9879\u76EE\u8BC1\u4E66","children":[]}]},{"level":2,"title":"\u4E8C\u3001android","slug":"\u4E8C\u3001android","link":"#\u4E8C\u3001android","children":[{"level":3,"title":"1. \u5F00\u53D1\u8005\u4E2D\u5FC3\u914D\u7F6E","slug":"_1-\u5F00\u53D1\u8005\u4E2D\u5FC3\u914D\u7F6E","link":"#_1-\u5F00\u53D1\u8005\u4E2D\u5FC3\u914D\u7F6E","children":[]},{"level":3,"title":"2. \u9879\u76EE\u914D\u7F6E","slug":"_2-\u9879\u76EE\u914D\u7F6E","link":"#_2-\u9879\u76EE\u914D\u7F6E","children":[]},{"level":3,"title":"3. \u6253\u5305\u53D1\u5E03","slug":"_3-\u6253\u5305\u53D1\u5E03","link":"#_3-\u6253\u5305\u53D1\u5E03","children":[]}]}],"relativePath":"note/08-APP\u9879\u76EE\u6253\u5305.md"}'),v={name:"note/08-APP\u9879\u76EE\u6253\u5305.md"},k=a('<h1 id="app-\u9879\u76EE\u6253\u5305" tabindex="-1">APP \u9879\u76EE\u6253\u5305 <a class="header-anchor" href="#app-\u9879\u76EE\u6253\u5305" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001uni-app" tabindex="-1">\u4E00\u3001<code>uni-app</code> <a class="header-anchor" href="#\u4E00\u3001uni-app" aria-hidden="true">#</a></h2><h3 id="_1-\u6D41\u7A0B" tabindex="-1">1. \u6D41\u7A0B <a class="header-anchor" href="#_1-\u6D41\u7A0B" aria-hidden="true">#</a></h3><ol><li>\u5F00\u53D1\u8005\u4E2D\u5FC3 - \u5E94\u7528\u7BA1\u7406 - \u521B\u5EFA\u5E94\u7528\u751F\u6210 <code>APP ID</code></li><li>\u70B9\u51FB\u5E94\u7528 - \u5E94\u7528\u8BC1\u4E66\u7BA1\u7406 - \u751F\u6210\u8BC1\u4E66 - \u4E0B\u8F7D\u8BC1\u4E66</li><li><code>HBulider</code> \u4E91\u6253\u5305 - \u586B\u5199\u8BC1\u4E66\u522B\u540D + \u8BC1\u4E66\u5BC6\u94A5 + \u4E0A\u4F20\u8BC1\u4E66 + \u4F20\u7EDF\u6253\u5305</li><li>\u4E0B\u8F7D\u6253\u5305\u5B8C\u6210\u7684<code>APK</code>\u5305</li><li>\u5C06<code>APK</code>\u5305\u4E0A\u4F20\u5230\u84B2\u516C\u82F1/<code>MinIon</code> - \u751F\u6210\u4E0B\u8F7D\u4E8C\u7EF4\u7801</li><li>\u6BCF\u6B21\u6253\u5305\u66F4\u65B0<code>APP</code>\u8981\u6CE8\u610F\u66F4\u65B0\u7248\u672C\u53F7</li></ol><h3 id="_2-\u5F00\u53D1\u8005\u4E2D\u5FC3" tabindex="-1">2. \u5F00\u53D1\u8005\u4E2D\u5FC3 <a class="header-anchor" href="#_2-\u5F00\u53D1\u8005\u4E2D\u5FC3" aria-hidden="true">#</a></h3><table><thead><tr><th>\u7528\u6236</th><th>\u8D26\u53F7</th><th>\u5BC6\u7801</th></tr></thead><tbody><tr><td>\u84B2\u516C\u82F1</td><td>15151805610</td><td>830805</td></tr><tr><td>MinIon</td><td>minioadmin</td><td>minioadmin</td></tr><tr><td>\u859B\u51B2</td><td><a href="mailto:1963005734@qq.com" target="_blank" rel="noreferrer">1963005734@qq.com</a></td><td>xc980712.</td></tr><tr><td>\u5409\u5B87\u8FB0</td><td><a href="mailto:jijieoo@outlook.com" target="_blank" rel="noreferrer">jijieoo@outlook.com</a></td><td>Jijieoo1991</td></tr><tr><td>\u738B\u8A00\u4F1F</td><td><a href="mailto:740484522@qq.com" target="_blank" rel="noreferrer">740484522@qq.com</a></td><td>wyw0724.</td></tr></tbody></table><h3 id="_3-\u9879\u76EE\u8BC1\u4E66" tabindex="-1">3. \u9879\u76EE\u8BC1\u4E66 <a class="header-anchor" href="#_3-\u9879\u76EE\u8BC1\u4E66" aria-hidden="true">#</a></h3><table><thead><tr><th>\u9879\u76EE</th><th>\u8BC1\u4E66\u522B\u540D</th><th>\u8BC1\u4E66\u5BC6\u94A5</th><th>Android\u5305\u540D</th></tr></thead><tbody><tr><td>\u6C38\u6676</td><td>__uni__9698c53</td><td>wRsPTyuW</td><td></td></tr><tr><td>\u683C\u6797\u8FBE</td><td>__UNI__54B7CC4</td><td>lH8AxFfq</td><td>io.dcloud.gelinda</td></tr><tr><td>\u683C\u6797\u8FBE_xc</td><td>__UNI__F5AB16D</td><td>U3NOZXUh</td><td>io.dcloud.gelinda</td></tr><tr><td>\u535A\u745E</td><td>__UNI__10AE0E7</td><td>hDV0le86</td><td></td></tr><tr><td><s>\u5357\u5927\u7279\u6C14</s></td><td>__UNI__DB8FFD5</td><td>JGdnGFBw</td><td>io.dcloud.nadateqi</td></tr><tr><td>\u5357\u5927\u7279\u6C14</td><td>__UNI__35F4499</td><td>W4Bnq35R</td><td>io.dcloud.nadateqi</td></tr></tbody></table><h2 id="\u4E8C\u3001android" tabindex="-1">\u4E8C\u3001<code>android</code> <a class="header-anchor" href="#\u4E8C\u3001android" aria-hidden="true">#</a></h2><h3 id="_1-\u5F00\u53D1\u8005\u4E2D\u5FC3\u914D\u7F6E" tabindex="-1">1. \u5F00\u53D1\u8005\u4E2D\u5FC3\u914D\u7F6E <a class="header-anchor" href="#_1-\u5F00\u53D1\u8005\u4E2D\u5FC3\u914D\u7F6E" aria-hidden="true">#</a></h3><p><img src="'+r+'" alt="dcloud"></p><h3 id="_2-\u9879\u76EE\u914D\u7F6E" tabindex="-1">2. \u9879\u76EE\u914D\u7F6E <a class="header-anchor" href="#_2-\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a></h3><ul><li>\u66F4\u6539\u9879\u76EE\u540D</li></ul><p><img src="'+l+'" alt="reName1"><img src="'+s+'" alt="reName2"></p><ul><li>\u5168\u5C40\u67E5\u627E\u5E76\u66FF\u6362 <code>Android\u5305\u540D</code> &amp; <code>\u8BC1\u4E66\u522B\u540D</code> &amp; <code>\u8BC1\u4E66\u5BC6\u94A5</code></li></ul><p><img src="'+o+'" alt="find1"><img src="'+n+'" alt="find2"></p><ul><li>\u66F4\u6539\u66FF\u6362\u5E94\u7528\u8BC1\u4E66 : <code>nandateqi/nandateqi.keystore</code></li></ul><p><img src="'+c+'" alt="keyStore"></p><ul><li>\u66F4\u6539\u8BC1\u4E66\u4E0E\u7248\u672C\u914D\u7F6E\u4FE1\u606F : <code>nandateqi/build.gradle</code></li></ul><p><img src="'+_+'" alt="keyStoreInfo"></p><ul><li>\u66F4\u6539 Android\u8BC1\u4E66\u7B7E\u540D : <code>nandateqi/src/main/AndroidManifest.xml</code></li></ul><p><img src="'+h+'" alt="key"></p><ul><li>\u66F4\u6539\u9879\u76EE\u7684\u56FE\u6807</li></ul><p><img src="'+p+'" alt="logo"></p><ul><li>\u66F4\u6539\u751F\u6210\u7684\u672C\u5730\u6253\u5305\u8D44\u6E90</li></ul><p><img src="'+u+'" alt="www"></p><h3 id="_3-\u6253\u5305\u53D1\u5E03" tabindex="-1">3. \u6253\u5305\u53D1\u5E03 <a class="header-anchor" href="#_3-\u6253\u5305\u53D1\u5E03" aria-hidden="true">#</a></h3><h4 id="\u6D4B\u8BD5\u5305" tabindex="-1">\u6D4B\u8BD5\u5305 <a class="header-anchor" href="#\u6D4B\u8BD5\u5305" aria-hidden="true">#</a></h4><ul><li>\u76F4\u63A5\u70B9\u51FB\u5DE5\u5177\u680F - \u5C0F\u9524\u5B50\u8FDB\u884C\u6253\u5305</li></ul><p><img src="'+m+'" alt="build"></p><ul><li>\u751F\u6210\u7684\u5305\u8DEF\u5F84</li></ul><p><img src="'+t+'" alt="build"></p><h4 id="\u6B63\u5F0F\u5305" tabindex="-1">\u6B63\u5F0F\u5305 <a class="header-anchor" href="#\u6B63\u5F0F\u5305" aria-hidden="true">#</a></h4><ul><li>\u70B9\u51FB\u5DE5\u5177\u680F - \u6784\u5EFA</li></ul><p><img src="'+g+'" alt="build"></p><ul><li>\u9009\u62E9 APK</li></ul><p><img src="'+b+'" alt="build"></p><ul><li>\u9009\u62E9\u8BC1\u4E66\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5E76\u586B\u5199\u8BC1\u4E66\u5BC6\u94A5 APP\u522B\u540D\u4E0E\u5BC6\u94A5</li></ul><p><img src="'+f+'" alt="build"></p><ul><li>\u9009\u62E9 release</li></ul><p><img src="'+P+'" alt="build"></p><ul><li>\u751F\u6210\u7684\u5305\u8DEF\u5F84</li></ul><p><img src="'+t+'" alt="build"></p>',43),A=[k];function x(q,y,N,I,w,S){return i(),d("div",null,A)}const T=e(v,[["render",x]]);export{D as __pageData,T as default};
