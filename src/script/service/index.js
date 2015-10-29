/**
 * 这是一个测试模块
 * @module mainIndex
 * 
 * @example mainIndex.functionName //获取该模块的方法或者属性
 */
var mainIndex=(function(_self){

	/**
	* 初始化tab页
	*/
	_self.initTab=function(){
		$('#tab-container').easytabs();
	};

	return _self;
})(window.mainIndex||{});

$(function(){
	mainIndex.initTab();
});