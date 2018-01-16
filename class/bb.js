/**
 * 
 * @ page 为分页模块
 * @ 参数 id：分页模块所在框的id；
 		  start: 开始页
          totle: 一共几页
 * @ 使用 引入js后，jz.page(id,para)
 */
'use strict';
(function( $ ){
	var 
	 	jz = {
			page: function(id,start,totle){
				var content = '<ul><li>首页</li>';
				for(var i = start; i <= totle; i++){
					content += '<li>' + i + '</li>'
				}
				content += '<li>尾页</li></ul>';
				document.getElementById(id).innerHTML = content
			}
		};
 	$.jz = jz;
})(window)
