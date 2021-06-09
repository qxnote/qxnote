(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{362:function(t,e,_){"use strict";_.r(e);var v=_(42),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http缓存"}},[t._v("#")]),t._v(" "),_("strong",[t._v("HTTP")]),t._v("缓存")]),t._v(" "),_("h2",{attrs:{id:"缓存的概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存的概念"}},[t._v("#")]),t._v(" 缓存的概念")]),t._v(" "),_("p",[t._v("HTTP缓存是用于临时存储web文档以减少服务器延迟的一种信息技术。\n当用户首次访问网页时，如果请求满足某些条件，资源文件会被缓存在内存中，同时也会在本地磁盘中保留一份副本。\n当用户刷新页面时，如果缓存的资源没有过期， 就可以直接从内存中读取数据并加载。当用户关闭页面后，当前页面缓存在内存中的资源就会被清空。\n当用户在一次访问页面是，如果资源文件的缓存没有过期，就可以从本地磁盘加载数据并再次缓存到内存中。")]),t._v(" "),_("h2",{attrs:{id:"缓存的作用和优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存的作用和优势"}},[t._v("#")]),t._v(" 缓存的作用和优势")]),t._v(" "),_("p",[t._v("在前端开发中，性能问题一直都是最值得重视的一点，判断一个网站的性能如何，最直观的方法就是看网页的打开速度。其中，提高网页打开速度的一个方式就是使用缓存。\n合理地利用缓存，能够最大限度地读取和利用本地已有静态资源，减少数据传输，减少延迟，从而加快网页应用的呈现。\n并且由于缓存文件可以重复利用，因此可以减少带宽，降低网络负荷。在用户较少的情况下作用并不是特别明显，但是在高并发的场景下，使用缓存对于服务器的负担非常有帮助。")]),t._v(" "),_("h2",{attrs:{id:"缓存策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[t._v("#")]),t._v(" 缓存策略")]),t._v(" "),_("p",[t._v("按照缓存策略，HTTP缓存可以分为强缓存和协商缓存两大类。如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2021/05/06/aiHjZsCJqfKrSyn.png",alt:"微信截图_20210506001452.png"}})]),t._v(" "),_("h2",{attrs:{id:"cache-control"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),_("p",[_("code",[t._v("public")])]),t._v(" "),_("p",[t._v("表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存，即使是通常不可缓存的内容。（例如：1.该响应没有max-age指令或Expires消息头；2. 该响应对应的请求方法是 POST 。）")]),t._v(" "),_("p",[_("code",[t._v("private")])]),t._v(" "),_("p",[t._v("表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。私有缓存可以缓存响应内容，比如：对应用户的本地浏览器。")]),t._v(" "),_("p",[_("code",[t._v("no-cache")])]),t._v(" "),_("p",[t._v("在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证(协商缓存验证)。")]),t._v(" "),_("p",[_("code",[t._v("no-store")])]),t._v(" "),_("p",[t._v("缓存不应存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存")]),t._v(" "),_("p",[_("code",[t._v("max-age=<seconds>")])]),t._v(" "),_("p",[t._v("设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与Expires相反，时间是相对于请求的时间。"),_("br"),t._v("\n缓存未过期, 读取本地缓存，不会向服务器发送请求。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2021/05/06/xIN42MXugnHF8bj.png",alt:"微信截图_20210506112056.png"}})]),t._v(" "),_("p",[t._v("缓存已过期，走协商缓存，向服务器发送请求验证资源是否变更。无变更-》304，有变更-》200。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2021/05/06/LtTIbClHNhWRE6m.png",alt:"image.png"}})]),t._v(" "),_("p",[_("code",[t._v("s-maxage=<seconds>")])]),t._v(" "),_("p",[t._v("覆盖max-age或者Expires头，但是仅适用于共享缓存(比如各个代理)，私有缓存会忽略它。")]),t._v(" "),_("p",[_("code",[t._v("must-revalidate")])]),t._v(" "),_("p",[t._v("一旦资源过期（比如已经超过max-age），在成功向原始服务器验证之前，缓存不能用该资源响应后续请求。")]),t._v(" "),_("p",[_("code",[t._v("proxy-revalidate")])]),t._v(" "),_("p",[t._v("与"),_("code",[t._v("must-revalidate")]),t._v("作用相同，但它仅适用于共享缓存（例如代理），并被私有缓存忽略。")]),t._v(" "),_("h2",{attrs:{id:"etag"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[t._v("#")]),t._v(" Etag")]),t._v(" "),_("p",[_("code",[t._v("ETag")]),t._v(" HTTP响应头是资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，因为如果内容没有改变，Web服务器不需要发送完整的响应。而如果内容发生了变化，使用ETag有助于防止资源的同时更新相互覆盖（“空中碰撞”）。")]),t._v(" "),_("p",[t._v("如果给定URL中的资源更改，则一定要生成新的Etag值。 因此Etags类似于指纹，也可能被某些服务器用于跟踪。 比较etags能快速确定此资源是否变化，但也可能被跟踪服务器永久存留")]),t._v(" "),_("p",[_("code",[t._v("W/ 可选")])]),t._v(" "),_("p",[t._v("'W/'(大小写敏感) 表示使用弱验证器。 弱验证器很容易生成，但不利于比较。 强验证器是比较的理想选择，但很难有效地生成。 相同资源的两个弱Etag值可能语义等同，但不是每个字节都相同。")]),t._v(" "),_("p",[_("code",[t._v("<etag_value>")])]),t._v(" "),_("p",[t._v("实体标签唯一地表示所请求的资源。 它们是位于双引号之间的ASCII字符串（如“675af34563dc-tr34”）。 没有明确指定生成ETag值的方法。\n通常，使用内容的散列，最后修改时间戳的哈希值，或简单地使用版本号。 例如，MDN使用wiki内容的十六进制数字的哈希值。\n"),_("img",{attrs:{src:"https://i.loli.net/2021/05/06/9J3prNIUL58Tunb.png",alt:"微信截图_20210506102430.png"}})]),t._v(" "),_("h2",{attrs:{id:"if-none-match"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#if-none-match"}},[t._v("#")]),t._v(" If-None-Match")]),t._v(" "),_("p",[_("code",[t._v("If-None-Match")]),t._v(" 是一个条件式请求首部。对于 "),_("code",[t._v("GET")]),t._v(" 和 "),_("code",[t._v("HEAD")]),t._v(" 请求方法来说，当且仅当服务器上没有任何资源的 "),_("code",[t._v("ETag")]),t._v(" 属性值与这个首部中列出的相匹配的时候，服务器端会才返回所请求的资源，响应码为  200  。\n对于其他方法来说，当且仅当最终确认没有已存在的资源的  "),_("code",[t._v("ETag")]),t._v(" 属性值与这个首部中所列出的相匹配的时候，才会对请求进行相应的处理。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2021/05/06/QwMXPRCrl3bfU4F.png",alt:"微信截图_20210506102701.png"}})]),t._v(" "),_("h2",{attrs:{id:"last-modified"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[t._v("#")]),t._v(" Last-Modified")]),t._v(" "),_("p",[_("code",[t._v("Last-Modified")]),t._v("  是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。 它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。\n由于精确度比  ETag 要低，所以这是一个备用机制。包含有  If-Modified-Since 或 If-Unmodified-Since 首部的条件请求会使用这个字段。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2021/05/06/wGUClImTxy7q26D.png",alt:"img.png"}})]),t._v(" "),_("h2",{attrs:{id:"if-modified-since"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#if-modified-since"}},[t._v("#")]),t._v(" If-Modified-Since")]),t._v(" "),_("p",[_("code",[t._v("If-Modified-Since")]),t._v(" 是一个条件式请求首部，服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 200 。\n如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的  304  响应，而在 "),_("code",[t._v("Last-Modified")]),t._v(" 首部中会带有上次修改时间。\n不同于 "),_("code",[t._v("If-Unmodified-Since")]),t._v(", If-Modified-Since 只可以用在 GET 或 HEAD 请求中。")]),t._v(" "),_("p",[t._v("当与 "),_("code",[t._v("If-None-Match")]),t._v(" 一同出现时，它（"),_("code",[t._v("If-Modified-Since")]),t._v("）会被忽略掉，除非服务器不支持 "),_("code",[t._v("If-None-Match")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2021/05/06/tUFu6HdaresT5MI.png",alt:"微信截图_20210506100424.png"}})]),t._v(" "),_("h2",{attrs:{id:"expires"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" Expires")]),t._v(" "),_("p",[_("code",[t._v("Expires")]),t._v(" 响应头包含日期/时间， 即在此时候之后，响应过期。")]),t._v(" "),_("p",[t._v("无效的日期，比如 0, 代表着过去的日期，即该资源已经过期。")]),t._v(" "),_("p",[t._v("如果在"),_("code",[t._v("Cache-Control")]),t._v("响应头设置了 "),_("code",[t._v("max-age")]),t._v(" 或者 "),_("code",[t._v("s-max-age")]),t._v(" 指令，那么 "),_("code",[t._v("Expires")]),t._v(" 头会被忽略。")]),t._v(" "),_("p",[_("code",[t._v("Expires")]),t._v("有一个非常大的缺陷，它使用一个固定的时间，受限于本地时间，如果修改了本地时间，可能会造成缓存失效。\n所以要求服务器与客户端的时钟保持严格的同步，并且这一天到来后，服务器还得重新设定新的时间。")]),t._v(" "),_("h2",{attrs:{id:"流程图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[t._v("#")]),t._v(" 流程图")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2021/05/05/hQ9yWkPveFMomKH.png",alt:"微信截图_20210505234825.png"}})]),t._v(" "),_("p",[t._v("如图所示， 其中强制缓存优先级最高，并且缓存有效期内浏览器不会因为资源的改动而发送请求，因此强制缓存的使用适用于比较大而且不会轻易修改的资源文件。")]),t._v(" "),_("p",[t._v("协商缓存灵活性高，适用于数据缓存，采用Etag标识比对文件内容是否发生变化的灵活都最高，也最为可靠。\n对于数据的缓存，可以重点考虑将数据缓存在内存中，因为内存加载速度最快，并且数据的体积比较小。")]),t._v(" "),_("h2",{attrs:{id:"缓存和浏览器操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存和浏览器操作"}},[t._v("#")]),t._v(" 缓存和浏览器操作")]),t._v(" "),_("p",[t._v("常见的浏览器操作对应的缓存有如下行为：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("当用户使用 "),_("kbd",[t._v("Ctrl")]),t._v(" + "),_("kbd",[t._v("F5")]),t._v(" 强制刷新网页时，浏览器会直接从服务器加载网页信息，跳过强缓存和协商缓存。")])]),t._v(" "),_("li",[_("p",[t._v("当用户使用 "),_("kbd",[t._v("F5")]),t._v(" 刷新网页时，浏览器的加载过程会跳过强缓存，但是仍然会进行协商缓存。")])])]),t._v(" "),_("p",[t._v("如下表格所示，典型的刷新操作对应的缓存行为：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("浏览器操作")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("Expires/Cache-Control")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("Last-Modified/Etag")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("地址栏中按回车键")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("有效")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("有效")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("页面跳转")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("有效")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("有效")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("新窗口打开")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("有效")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("有效")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("浏览器前进后退")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("有效")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("有效")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("浏览器刷新")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("无效")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("有效")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("强制刷新")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("无效")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("无效")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);