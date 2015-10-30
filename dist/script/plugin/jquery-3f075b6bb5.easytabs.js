!function(a){a.easytabs=function(t,s){var e,i,n,l,o,c,d=this,r=a(t),h={animate:!0,panelActiveClass:"active",tabActiveClass:"active",defaultTab:"li:first-child",animationSpeed:"normal",tabs:"> ul > li",updateHash:!0,cycle:!1,collapsible:!1,collapsedClass:"collapsed",collapsedByDefault:!0,uiTabs:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",transitionInEasing:"swing",transitionOutEasing:"swing",transitionCollapse:"slideUp",transitionUncollapse:"slideDown",transitionCollapseEasing:"swing",transitionUncollapseEasing:"swing",containerClass:"",tabsClass:"",tabClass:"",panelClass:"",cache:!0,event:"click",panelContext:r},b={fast:200,normal:400,slow:600};d.init=function(){d.settings=c=a.extend({},h,s),c.bind_str=c.event+".easytabs",c.uiTabs&&(c.tabActiveClass="ui-tabs-selected",c.containerClass="ui-tabs ui-widget ui-widget-content ui-corner-all",c.tabsClass="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all",c.tabClass="ui-state-default ui-corner-top",c.panelClass="ui-tabs-panel ui-widget-content ui-corner-bottom"),c.collapsible&&void 0!==s.defaultTab&&void 0===s.collpasedByDefault&&(c.collapsedByDefault=!1),"string"==typeof c.animationSpeed&&(c.animationSpeed=b[c.animationSpeed]),a("a.anchor").remove().prependTo("body"),r.data("easytabs",{}),d.setTransitions(),d.getTabs(),u(),f(),C(),w(),T(),r.attr("data-easytabs",!0)},d.setTransitions=function(){n=c.animate?{show:c.transitionIn,hide:c.transitionOut,speed:c.animationSpeed,collapse:c.transitionCollapse,uncollapse:c.transitionUncollapse,halfSpeed:c.animationSpeed/2}:{show:"show",hide:"hide",speed:0,collapse:"hide",uncollapse:"show",halfSpeed:0}},d.getTabs=function(){var t;d.tabs=r.find(c.tabs),d.panels=a(),d.tabs.each(function(){var s=a(this),e=s.children("a"),i=s.children("a").data("target");s.data("easytabs",{}),void 0!==i&&null!==i?s.data("easytabs").ajax=e.attr("href"):i=e.attr("href"),i=i.match(/#([^\?]+)/)[1],t=c.panelContext.find("#"+i),t.length?(t.data("easytabs",{position:t.css("position"),visibility:t.css("visibility")}),t.not(c.panelActiveClass).hide(),d.panels=d.panels.add(t),s.data("easytabs").panel=t):(d.tabs=d.tabs.not(s),"console"in window&&console.warn("Warning: tab without matching panel for selector '#"+i+"' removed from set"))})},d.selectTab=function(a,t){var s=window.location,e=(s.hash.match(/^[^\?]*/)[0],a.parent().data("easytabs").panel),i=a.parent().data("easytabs").ajax;c.collapsible&&!o&&(a.hasClass(c.tabActiveClass)||a.hasClass(c.collapsedClass))?d.toggleTabCollapse(a,e,i,t):a.hasClass(c.tabActiveClass)&&e.hasClass(c.panelActiveClass)?c.cache||v(a,e,i,t):v(a,e,i,t)},d.toggleTabCollapse=function(a,t,s,e){d.panels.stop(!0,!0),p(r,"easytabs:before",[a,t,c])&&(d.tabs.filter("."+c.tabActiveClass).removeClass(c.tabActiveClass).children().removeClass(c.tabActiveClass),a.hasClass(c.collapsedClass)?(!s||c.cache&&a.parent().data("easytabs").cached||(r.trigger("easytabs:ajax:beforeSend",[a,t]),t.load(s,function(s,e,i){a.parent().data("easytabs").cached=!0,r.trigger("easytabs:ajax:complete",[a,t,s,e,i])})),a.parent().removeClass(c.collapsedClass).addClass(c.tabActiveClass).children().removeClass(c.collapsedClass).addClass(c.tabActiveClass),t.addClass(c.panelActiveClass)[n.uncollapse](n.speed,c.transitionUncollapseEasing,function(){r.trigger("easytabs:midTransition",[a,t,c]),"function"==typeof e&&e()})):(a.addClass(c.collapsedClass).parent().addClass(c.collapsedClass),t.removeClass(c.panelActiveClass)[n.collapse](n.speed,c.transitionCollapseEasing,function(){r.trigger("easytabs:midTransition",[a,t,c]),"function"==typeof e&&e()})))},d.matchTab=function(a){return d.tabs.find("[href='"+a+"'],[data-target='"+a+"']").first()},d.matchInPanel=function(a){return a&&d.validId(a)?d.panels.filter(":has("+a+")").first():[]},d.validId=function(a){return a.substr(1).match(/^[A-Za-z][A-Za-z0-9\-_:\.]*$/)},d.selectTabFromHashChange=function(){var a,t=window.location.hash.match(/^[^\?]*/)[0],s=d.matchTab(t);c.updateHash&&(s.length?(o=!0,d.selectTab(s)):(a=d.matchInPanel(t),a.length?(t="#"+a.attr("id"),s=d.matchTab(t),o=!0,d.selectTab(s)):e.hasClass(c.tabActiveClass)||c.cycle||(""===t||d.matchTab(l).length||r.closest(t).length)&&(o=!0,d.selectTab(i))))},d.cycleTabs=function(t){c.cycle&&(t%=d.tabs.length,$tab=a(d.tabs[t]).children("a").first(),o=!0,d.selectTab($tab,function(){setTimeout(function(){d.cycleTabs(t+1)},c.cycle)}))},d.publicMethods={select:function(t){var s;0===(s=d.tabs.filter(t)).length?0===(s=d.tabs.find("a[href='"+t+"']")).length&&0===(s=d.tabs.find("a"+t)).length&&0===(s=d.tabs.find("[data-target='"+t+"']")).length&&0===(s=d.tabs.find("a[href$='"+t+"']")).length&&a.error("Tab '"+t+"' does not exist in tab set"):s=s.children("a").first(),d.selectTab(s)}};var p=function(t,s,e){var i=a.Event(s);return t.trigger(i,e),i.result!==!1},u=function(){r.addClass(c.containerClass),d.tabs.parent().addClass(c.tabsClass),d.tabs.addClass(c.tabClass),d.panels.addClass(c.panelClass)},f=function(){var t,s=window.location.hash.match(/^[^\?]*/)[0],n=d.matchTab(s).parent();1===n.length?(e=n,c.cycle=!1):(t=d.matchInPanel(s),t.length?(s="#"+t.attr("id"),e=d.matchTab(s).parent()):(e=d.tabs.parent().find(c.defaultTab),0===e.length&&a.error("The specified default tab ('"+c.defaultTab+"') could not be found in the tab set ('"+c.tabs+"') out of "+d.tabs.length+" tabs."))),i=e.children("a").first(),g(n)},g=function(t){var s,n;c.collapsible&&0===t.length&&c.collapsedByDefault?e.addClass(c.collapsedClass).children().addClass(c.collapsedClass):(s=a(e.data("easytabs").panel),n=e.data("easytabs").ajax,!n||c.cache&&e.data("easytabs").cached||(r.trigger("easytabs:ajax:beforeSend",[i,s]),s.load(n,function(a,t,n){e.data("easytabs").cached=!0,r.trigger("easytabs:ajax:complete",[i,s,a,t,n])})),e.data("easytabs").panel.show().addClass(c.panelActiveClass),e.addClass(c.tabActiveClass).children().addClass(c.tabActiveClass)),r.trigger("easytabs:initialised",[i,s])},C=function(){d.tabs.children("a").bind(c.bind_str,function(t){c.cycle=!1,o=!1,d.selectTab(a(this)),t.preventDefault?t.preventDefault():t.returnValue=!1})},v=function(a,t,s,e){if(d.panels.stop(!0,!0),p(r,"easytabs:before",[a,t,c])){var i,h,b,u,f=d.panels.filter(":visible"),g=t.parent(),C=window.location.hash.match(/^[^\?]*/)[0];c.animate&&(i=y(t),h=f.length?m(f):0,b=i-h),l=C,u=function(){r.trigger("easytabs:midTransition",[a,t,c]),c.animate&&"fadeIn"==c.transitionIn&&0>b&&g.animate({height:g.height()+b},n.halfSpeed).css({"min-height":""}),c.updateHash&&!o?window.history.pushState?window.history.pushState(null,null,"#"+t.attr("id")):window.location.hash="#"+t.attr("id"):o=!1,t[n.show](n.speed,c.transitionInEasing,function(){g.css({height:"","min-height":""}),r.trigger("easytabs:after",[a,t,c]),"function"==typeof e&&e()})},!s||c.cache&&a.parent().data("easytabs").cached||(r.trigger("easytabs:ajax:beforeSend",[a,t]),t.load(s,function(s,e,i){a.parent().data("easytabs").cached=!0,r.trigger("easytabs:ajax:complete",[a,t,s,e,i])})),c.animate&&"fadeOut"==c.transitionOut&&(b>0?g.animate({height:g.height()+b},n.halfSpeed):g.css({"min-height":g.height()})),d.tabs.filter("."+c.tabActiveClass).removeClass(c.tabActiveClass).children().removeClass(c.tabActiveClass),d.tabs.filter("."+c.collapsedClass).removeClass(c.collapsedClass).children().removeClass(c.collapsedClass),a.parent().addClass(c.tabActiveClass).children().addClass(c.tabActiveClass),d.panels.filter("."+c.panelActiveClass).removeClass(c.panelActiveClass),t.addClass(c.panelActiveClass),f.length?f[n.hide](n.speed,c.transitionOutEasing,u):t[n.uncollapse](n.speed,c.transitionUncollapseEasing,u)}},y=function(t){if(t.data("easytabs")&&t.data("easytabs").lastHeight)return t.data("easytabs").lastHeight;var s,e,i=t.css("display");try{s=a("<div></div>",{position:"absolute",visibility:"hidden",overflow:"hidden"})}catch(n){s=a("<div></div>",{visibility:"hidden",overflow:"hidden"})}return e=t.wrap(s).css({position:"relative",visibility:"hidden",display:"block"}).outerHeight(),t.unwrap(),t.css({position:t.data("easytabs").position,visibility:t.data("easytabs").visibility,display:i}),t.data("easytabs").lastHeight=e,e},m=function(a){var t=a.outerHeight();return a.data("easytabs")?a.data("easytabs").lastHeight=t:a.data("easytabs",{lastHeight:t}),t},w=function(){"function"==typeof a(window).hashchange?a(window).hashchange(function(){d.selectTabFromHashChange()}):a.address&&"function"==typeof a.address.change&&a.address.change(function(){d.selectTabFromHashChange()})},T=function(){var a;c.cycle&&(a=d.tabs.index(e),setTimeout(function(){d.cycleTabs(a+1)},c.cycle))};d.init()},a.fn.easytabs=function(t){var s=arguments;return this.each(function(){var e=a(this),i=e.data("easytabs");return void 0===i&&(i=new a.easytabs(this,t),e.data("easytabs",i)),i.publicMethods[t]?i.publicMethods[t](Array.prototype.slice.call(s,1)):void 0})}}(jQuery);