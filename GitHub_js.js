(function(){
    var a,b,c,d;
    if(typeof $=="undefined"||$===null)return;
    d=!1,b=function(){
        d=!0
        },a=function(){
        d=!1
        },"onpagehide"in window?($(window).on("pageshow",a),$(window).on("pagehide",b)):($(window).on("load",a),$(window).on("beforeunload",b),$(window).on("unload",b)),c=function(){
        return $.browser!=null&&($.browser.webkit||$.browser.opera||$.browser.msie&&parseInt($.browser.version)>=8||$.browser.mozilla)&&$.browser.version!=null&&$.browser.version!=="0"
        }();
    if(!c)return;
    window.onerror=function(a,b,c){
        var e;
        if(d||!c)return;
        if(b!=null?!b.match(/assets.github.com|github.dev/):!void 0)return;
        e={
            message:a,
            filename:b,
            lineno:c,
            url:window.location.href,
            readyState:document.readyState,
            referrer:document.referrer,
            browser:$.browser
            },$.ajax({
            type:"POST",
            url:"/errors",
            data:{
                error:e
            }
        }),window.errors==null&&(window.errors=[]),window.errors.push(e)
    },window.location.hash==="#b00m"&&b00m()
    }).call(this),function(){
    $.ajaxSetup&&$.ajaxSetup({
        beforeSend:function(a,b){
            var c,d;
            if(!b.global)return;
            return c=b.context||document,d=$.Event("ajaxBeforeSend"),$(c).trigger(d,[a,b]),d.isDefaultPrevented()?!1:d.result
            }
        })
}.call(this),function(){
    $(document).bind("ajaxBeforeSend",function(a,b,c){
        if(!c.dataType)return b.setRequestHeader("Accept","*/*;q=0.5, "+c.accepts.script)
            })
    }.call(this),function(){
    $(document).delegate("a[data-confirm]","click",function(a){
        var b;
        if(b=$(this).attr("data-confirm"))if(!confirm(b))return a.stopImmediatePropagation(),!1
            })
    }.call(this),function(){
    var a;
    $(document).bind("ajaxBeforeSend",function(a,b,c){
        var d;
        if(c.crossDomain)return;
        if(c.type==="GET")return;
        if(d=$('meta[name="csrf-token"]').attr("content"))return b.setRequestHeader("X-CSRF-Token",d)
            }),$(document).delegate("form","submit",function(b){
        var c,d,e,f;
        c=$(this);
        if(c.is("form[data-remote]"))return;
        if(c.attr("method").toUpperCase()==="GET")return;
        if(!a(c.attr("action")))return;
        e=$('meta[name="csrf-param"]').attr("content"),f=$('meta[name="csrf-token"]').attr("content"),e!=null&&f!=null&&(c.find("input[name="+e+"]")[0]||(d=document.createElement("input"),d.setAttribute("type","hidden"),d.setAttribute("name",e),d.setAttribute("value",f),c.prepend(d)))
        }),a=function(a){
        var b,c;
        return b=document.createElement("a"),b.href=a,c=b.href.split("/",3).join("/"),location.href.indexOf(c)===0
        }
    }.call(this),function(){
    var a;
    (a=navigator.userAgent.match(/MSIE ([\w]+)/))&&parseInt(a[1])<=8&&$(document).delegate("form","submit",function(){
        $(this).find("input[name=utf8]").length===0&&$(this).prepend("<input type=hidden name=utf8 value=âœ“>")
        })
    }.call(this),function(){
    $(document).delegate("form","submit",function(){
        var a,b,c,d,e,f,g,h,i;
        h=$(this).find("input[type=submit][data-disable-with]");
        for(d=0,f=h.length;d<f;d++)b=h[d],b=$(b),b.attr("data-enable-with",b.val()||"Submit"),(c=b.attr("data-disable-with"))&&b.val(c),b[0].disabled=!0;
        i=$(this).find("button[type=submit][data-disable-with]");
        for(e=0,g=i.length;e<g;e++)a=i[e],a=$(a),a.attr("data-enable-with",a.html()||""),(c=a.attr("data-disable-with"))&&a.html(c),a[0].disabled=!0
            }),$(document).delegate("form","ajaxComplete",function(){
        var a,b,c,d,e,f,g,h;
        g=$(this).find("input[type=submit][data-enable-with]");
        for(c=0,e=g.length;c<e;c++)b=g[c],$(b).val($(b).attr("data-enable-with")),b.disabled=!1;
        h=$(this).find("button[type=submit][data-enable-with]");
        for(d=0,f=h.length;d<f;d++)a=h[d],$(a).html($(a).attr("data-enable-with")),a.disabled=!1
            })
    }.call(this),function(){
    $(document).delegate("a[data-method]","click",function(a){
        var b,c,d,e;
        b=$(this);
        if(b.is("a[data-remote]"))return;
        e=b.attr("data-method").toLowerCase();
        if(e==="get")return;
        return c=document.createElement("form"),c.method="POST",c.action=b.attr("href"),c.style.display="none",e!=="post"&&(d=document.createElement("input"),d.setAttribute("type","hidden"),d.setAttribute("name","_method"),d.setAttribute("value",e),c.appendChild(d)),document.body.appendChild(c),$(c).submit(),a.preventDefault(),!1
        })
    }.call(this),function(){
    $(document).delegate("a[data-remote]","click",function(a){
        var b,c,d,e,f;
        c=$(this),d={},d.context=this;
        if(e=c.attr("data-method"))d.type=e;
        if(f=c.attr("href"))d.url=f;
        if(b=c.attr("data-type"))d.dataType=b;
        return $.ajax(d),a.preventDefault(),!1
        }),$(document).delegate("form[data-remote]","submit",function(a){
        var b,c,d,e,f,g;
        d=$(this),e={},e.context=this;
        if(f=d.attr("method"))e.type=f;
        if(g=d.attr("action"))e.url=g;
        if(b=d.serializeArray())e.data=b;
        if(c=d.attr("data-type"))e.dataType=c;
        return $.ajax(e),a.preventDefault(),!1
        })
    }.call(this),function(){
    var a;
    a="form[data-remote] input[type=submit],\nform[data-remote] button[type=submit],\nform[data-remote] button:not([type]),\nform[data-remote-submit] input[type=submit],\nform[data-remote-submit] button[type=submit],\nform[data-remote-submit] button:not([type])",$(document).delegate(a,"click",function(){
        var a,b,c,d,e,f;
        e=$(this),b=e.closest("form"),c=b.find(".js-submit-button-value"),(d=e.attr("name"))?(a=e.is("input[type=submit]")?"Submit":"",f=e.val()||a,c[0]?(c.attr("name",d),c.attr("value",f)):(c=document.createElement("input"),c.setAttribute("type","hidden"),c.setAttribute("name",d),c.setAttribute("value",f),c.setAttribute("class","js-submit-button-value"),b.prepend(c))):c.remove()
        })
    }.call(this),function(){
    $(document).on("click",".js-activate-link",function(a){
        var b,c,d;
        b=$(a.target);
        if(b.is("a"))return;
        d=b.find("a:first")[0];
        if(!d)return;
        return a.originalEvent!=null?c=$.event.fix(a.originalEvent):c=$.Event("click"),c.result=void 0,c.currentTarget=void 0,c.target=d,c.srcElement=d,c.toElement=d,$.event.trigger(c,[],d,!c.bubbles),c.isDefaultPrevented()?a.preventDefault():window.location.href=d.href,c.result
        })
    }.call(this),function(){
    $(document).on("change","form[data-autosubmit]",function(){
        return $(this).submit()
        })
    }.call(this),function(){
    var a,b,c,d,e,f,g;
    b={
        8:"backspace",
        9:"tab",
        13:"enter",
        16:"shift",
        17:"ctrl",
        18:"alt",
        19:"pause",
        20:"capslock",
        27:"esc",
        32:"space",
        33:"pageup",
        34:"pagedown",
        35:"end",
        36:"home",
        37:"left",
        38:"up",
        39:"right",
        40:"down",
        45:"insert",
        46:"del",
        48:"0",
        49:"1",
        50:"2",
        51:"3",
        52:"4",
        53:"5",
        54:"6",
        55:"7",
        56:"8",
        57:"9",
        65:"a",
        66:"b",
        67:"c",
        68:"d",
        69:"e",
        70:"f",
        71:"g",
        72:"h",
        73:"i",
        74:"j",
        75:"k",
        76:"l",
        77:"m",
        78:"n",
        79:"o",
        80:"p",
        81:"q",
        82:"r",
        83:"s",
        84:"t",
        85:"u",
        86:"v",
        87:"w",
        88:"x",
        89:"y",
        90:"z",
        91:"meta",
        93:"meta",
        96:"0",
        97:"1",
        98:"2",
        99:"3",
        100:"4",
        101:"5",
        102:"6",
        103:"7",
        104:"8",
        105:"9",
        106:"*",
        107:"+",
        109:"-",
        110:".",
        111:"/",
        112:"f1",
        113:"f2",
        114:"f3",
        115:"f4",
        116:"f5",
        117:"f6",
        118:"f7",
        119:"f8",
        120:"f9",
        121:"f10",
        122:"f11",
        123:"f12",
        144:"numlock",
        145:"scroll",
        186:";",
        187:"=",
        188:",",
        189:"-",
        190:".",
        191:"/",
        192:"`",
        219:"[",
        220:"\\",
        221:"]",
        222:"'"
    },d={
        48:")",
        49:"!",
        50:"@",
        51:"#",
        52:"$",
        53:"%",
        54:"^",
        55:"&",
        56:"*",
        57:"(",
        65:"A",
        66:"B",
        67:"C",
        68:"D",
        69:"E",
        70:"F",
        71:"G",
        72:"H",
        73:"I",
        74:"J",
        75:"K",
        76:"L",
        77:"M",
        78:"N",
        79:"O",
        80:"P",
        81:"Q",
        82:"R",
        83:"S",
        84:"T",
        85:"U",
        86:"V",
        87:"W",
        88:"X",
        89:"Y",
        90:"Z",
        186:":",
        187:"+",
        188:"<",
        189:"_",
        190:">",
        191:"?",
        192:"~",
        219:"{",
        220:"|",
        221:"}",
        222:'"'
    },a=function(a){
        var c,e,f;
        return c=b[a.which],e="",a.ctrlKey&&c!=="ctrl"&&(e+="ctrl+"),a.altKey&&c!=="alt"&&(e+="alt+"),a.metaKey&&!a.ctrlKey&&c!=="meta"&&(e+="meta+"),a.shiftKey?(f=d[a.which])?""+e+f:c==="shift"?""+e+"shift":c?""+e+"shift+"+c:null:c?""+e+c:null
        },g=["keydown","keyup"];
    for(e=0,f=g.length;e<f;e++)c=g[e],$.event.special[c]={
        add:function(b){
            var c;
            return c=b.handler,b.handler=function(b){
                return b.hotkey==null&&(b.hotkey=a(b)),c.apply(this,arguments)
                }
            }
    }
}.call(this),function(){
    var a;
    a={},$(document).on("keydown",function(b){
        var c,d;
        if($(b.target).is(":input"))return;
        if(d=a[b.hotkey])c=$(d),c.fire("hotkey:activate",{
            originalEvent:b
        },function(){
            c.is("a[href]")?c.fire("click",function(){
                return window.location.href=d.href
                }):c.is("input")&&c.focus()
            }),b.preventDefault()
            }),$(document).on("pageUpdate",function(){
        var b,c,d,e,f;
        a={},f=$("[data-hotkey]");
        for(d=0,e=f.length;d<e;d++)b=f[d],c=$(b).attr("data-hotkey"),a[c]=b
            })
    }.call(this),function(){
    $.fn.fire=function(a){
        var b,c,d,e,f,g;
        if(b=arguments[1])$.isPlainObject(b)?f=b:$.isArray(b)?c=b:$.isFunction(b)&&(d=b);
        if(b=arguments[2])$.isArray(b)?c=b:$.isFunction(b)&&(d=b);
        (b=arguments[3])&&$.isFunction(b)&&(d=b),e=this[0],f==null&&(f={}),f.cancelable==null&&(f.cancelable=!!d),f.bubbles==null&&(f.bubbles=!0),c==null&&(c=[]),g=function(){
            var b;
            return b=$.Event(a,f),$.event.trigger(b,c,e,!b.bubbles),d&&!b.isDefaultPrevented()&&d.call(e,b),b
            };
            
        if(!f.async)return g();
        delete f.async,setTimeout(g,0)
        }
    }.call(this),function(){
    var a,b,c=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        },d=[].indexOf||function(a){
    for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1
    };
    
a=function(){
    function a(){
        this.onClose=c(this.onClose,this),this.onContainerClick=c(this.onContainerClick,this),this.onKeyDown=c(this.onKeyDown,this),this.onClick=c(this.onClick,this),$(document).on("click",".js-menu-container",this.onContainerClick)
        }
        return a.name="MenuBehavior",a.prototype.activate=function(a){
        var b=this;
        this.activeContainer&&this.deactivate(this.activeContainer),$(a).fire("menu:activate",function(){
            return $(document).on("keydown.menu",b.onKeyDown),$(document).on("click.menu",b.onClick),$(a).on("click.menu",".js-menu-close",b.onClose),b.activeContainer=a,$(document.body).addClass("menu-active"),$(a).addClass("active"),$(a).fire("menu:activated",{
                async:!0
                })
            })
        },a.prototype.deactivate=function(a){
        var b=this;
        $(a).fire("menu:deactivate",function(){
            return $(document).off("keydown.menu",b.onKeyDown),$(document).off("click.menu",b.onClick),$(a).off("click.menu",".js-menu-close",b.onClose),b.activeContainer=null,$(document.body).removeClass("menu-active"),$(a).removeClass("active"),$(a).fire("menu:deactivated",{
                async:!0
                })
            })
        },a.prototype.onClick=function(a){
        if(!this.activeContainer)return;
        if(!$(a.target).closest(this.activeContainer)[0])return this.deactivate(this.activeContainer)
            },a.prototype.onKeyDown=function(a){
        var b;
        if(!this.activeContainer)return;
        if(a.keyCode===27)return(b=this.activeContainer,d.call($(document.activeElement).parents(),b)>=0)&&document.activeElement.blur(),this.deactivate(this.activeContainer)
            },a.prototype.onContainerClick=function(a){
        var b,c,d;
        b=a.currentTarget;
        if(d=$(a.target).closest(".js-menu-target")[0])return b===this.activeContainer?this.deactivate(b):this.activate(b);
        if(!(c=$(a.target).closest(".js-menu-content")[0]))return this.deactivate(b)
            },a.prototype.onClose=function(a){
        return this.deactivate($(a.target).closest(".js-menu-container")[0]),!1
        },a
    }(),b=new a,$.fn.menu=function(a){
    var c,d,e=this;
    return c=$(this).closest(".js-menu-container")[0],d={
        activate:function(){
            return b.activate(c)
            },
        deactivate:function(){
            return b.deactivate(c)
            }
        },typeof d[a]=="function"?d[a]():void 0
}
}.call(this),function(){
    var a,b,c,d;
    if(!window.addEventListener)return;
    d=null,a=function(a){
        var b;
        return b=document.createEvent("CustomEvent"),b.initCustomEvent(a,!1,!1,{}),window.dispatchEvent(b)
        },b=function(){
        d=null,window.mouseHidden=!0,window.removeEventListener("keydown",b,!0),window.addEventListener("mousemove",c,!0),a("mousehide")
        },c=function(e){
        if(d&&d.x===e.clientX&&d.y===e.clientY)return;
        d={
            x:e.clientX,
            y:e.clientY
            },delete window.mouseHidden,window.removeEventListener("mousemove",c,!0),window.addEventListener("keydown",b,!0),a("mouseshow")
        },window.addEventListener("keydown",b,!0)
    }.call(this),function(){
    $(document).ready(function(){
        return $(document.body).pageUpdate()
        }),$(document).on("pjax:complete",function(a){
        return $(a.target).pageUpdate()
        }),$.pageUpdate=function(a){
        return $(window).pageUpdate(a)
        },$.fn.pageUpdate=function(a){
        return a?(this.on("pageUpdate",function(b){
            return a.apply(b.target,arguments)
            }),this):this.trigger("pageUpdate")
        }
    }.call(this),function(){
    var a;
    $(document).on("focusin","input, textarea",function(a){
        var b,c,d;
        return b=$(a.currentTarget),b.data("previousValue",b.val()),d=function(){
            var a,c;
            c=b.val(),a=b.data("previousValue"),a!==c&&(b.data("previousValue",c),b.trigger("textchange",[c,a]))
            },c=function(){
            return b.off("keyup",d),b.off("blur",c)
            },b.on("keyup",d),b.on("blur",c)
        }),a=function(a,b){
        var c,d;
        c=$(a),d=c.val(),d!==b&&(c.data("previousValue",b),setTimeout(function(){
            return c.trigger("textchange",[b,d])
            },0))
        },$.valHooks.input={
        set:a
    },$.valHooks.textarea={
        set:a
    }
}.call(this),function(a,b){
    function u(a,b){
        this._d=a,this._isUTC=!!b
        }
        function v(a,b){
        var c=a+"";
        while(c.length<b)c="0"+c;
        return c
        }
        function w(b,c,d,e){
        var f=typeof c=="string",g=f?{}:c,h,i,j,k;
        return f&&e&&(g[c]=+e),h=(g.ms||g.milliseconds||0)+(g.s||g.seconds||0)*1e3+(g.m||g.minutes||0)*6e4+(g.h||g.hours||0)*36e5,i=(g.d||g.days||0)+(g.w||g.weeks||0)*7,j=(g.M||g.months||0)+(g.y||g.years||0)*12,h&&b.setTime(+b+h*d),i&&b.setDate(b.getDate()+i*d),j&&(k=b.getDate(),b.setDate(1),b.setMonth(b.getMonth()+j*d),b.setDate(Math.min((new a(b.getFullYear(),b.getMonth()+1,0)).getDate(),k))),b
        }
        function x(a){
        return Object.prototype.toString.call(a)==="[object Array]"
        }
        function y(b){
        return new a(b[0],b[1]||0,b[2]||1,b[3]||0,b[4]||0,b[5]||0,b[6]||0)
        }
        function z(b,d){
        function r(d){
            var j,s;
            switch(d){
                case"M":
                    return e+1;
                case"Mo":
                    return e+1+p(e+1);
                case"MM":
                    return v(e+1,2);
                case"MMM":
                    return c.monthsShort[e];
                case"MMMM":
                    return c.months[e];
                case"D":
                    return f;
                case"Do":
                    return f+p(f);
                case"DD":
                    return v(f,2);
                case"DDD":
                    return j=new a(g,e,f),s=new a(g,0,1),~~((j-s)/864e5+1.5);
                case"DDDo":
                    return j=r("DDD"),j+p(j);
                case"DDDD":
                    return v(r("DDD"),3);
                case"d":
                    return h;
                case"do":
                    return h+p(h);
                case"ddd":
                    return c.weekdaysShort[h];
                case"dddd":
                    return c.weekdays[h];
                case"w":
                    return j=new a(g,e,f-h+5),s=new a(j.getFullYear(),0,4),~~((j-s)/864e5/7+1.5);
                case"wo":
                    return j=r("w"),j+p(j);
                case"ww":
                    return v(r("w"),2);
                case"YY":
                    return v(g%100,2);
                case"YYYY":
                    return g;
                case"a":
                    return i>11?q.pm:q.am;
                case"A":
                    return i>11?q.PM:q.AM;
                case"H":
                    return i;
                case"HH":
                    return v(i,2);
                case"h":
                    return i%12||12;
                case"hh":
                    return v(i%12||12,2);
                case"m":
                    return m;
                case"mm":
                    return v(m,2);
                case"s":
                    return n;
                case"ss":
                    return v(n,2);
                case"zz":case"z":
                    return(b._d.toString().match(l)||[""])[0].replace(k,"");
                case"Z":
                    return(o<0?"-":"+")+v(~~(Math.abs(o)/60),2)+":"+v(~~(Math.abs(o)%60),2);
                case"ZZ":
                    return(o<0?"-":"+")+v(~~(10*Math.abs(o)/6),4);
                case"L":case"LL":case"LLL":case"LLLL":case"LT":
                    return z(b,c.longDateFormat[d]);
                default:
                    return d.replace(/(^\[)|(\\)|\]$/g,"")
                    }
                }
        var e=b.month(),f=b.date(),g=b.year(),h=b.day(),i=b.hours(),m=b.minutes(),n=b.seconds(),o=-b.zone(),p=c.ordinal,q=c.meridiem;
    return d.replace(j,r)
    }
    function A(b,d){
    function p(a,b){
        var d;
        switch(a){
            case"M":case"MM":
                e[1]=~~b-1;
                break;
            case"MMM":case"MMMM":
                for(d=0;d<12;d++)if(c.monthsParse[d].test(b)){
                e[1]=d;
                break
            }
            break;
            case"D":case"DD":case"DDD":case"DDDD":
                e[2]=~~b;
                break;
            case"YY":
                b=~~b,e[0]=b+(b>70?1900:2e3);
                break;
            case"YYYY":
                e[0]=~~Math.abs(b);
                break;
            case"a":case"A":
                o=b.toLowerCase()==="pm";
                break;
            case"H":case"HH":case"h":case"hh":
                e[3]=~~b;
                break;
            case"m":case"mm":
                e[4]=~~b;
                break;
            case"s":case"ss":
                e[5]=~~b;
                break;
            case"Z":case"ZZ":
                h=!0,d=(b||"").match(r),d&&d[1]&&(f=~~d[1]),d&&d[2]&&(g=~~d[2]),d&&d[0]==="+"&&(f=-f,g=-g)
                }
            }
    var e=[0,0,1,0,0,0,0],f=0,g=0,h=!1,i=b.match(n),j=d.match(m),k=Math.min(i.length,j.length),l,o;
for(l=0;l<k;l++)p(j[l],i[l]);
return o&&e[3]<12&&(e[3]+=12),o===!1&&e[3]===12&&(e[3]=0),e[3]+=f,e[4]+=g,h?new a(a.UTC.apply({},e)):y(e)
}
function B(a,b){
    var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;
    for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;
    return e+d
    }
    function C(a,b){
    var c,d=a.match(n),e=[],f=99,g,h,i;
    for(g=0;g<b.length;g++)h=A(a,b[g]),i=B(d,z(new u(h),b[g]).match(n)),i<f&&(f=i,c=h);
    return c
    }
    function D(b){
    var c="YYYY-MM-DDT",d;
    if(o.exec(b)){
        for(d=0;d<3;d++)if(q[d][1].exec(b)){
            c+=q[d][0];
            break
        }
        return A(b,c+"Z")
        }
        return new a(b)
    }
    function E(a,b,d){
    var e=c.relativeTime[a];
    return typeof e=="function"?e(b||1,!!d,a):e.replace(/%d/i,b||1)
    }
    function F(a,b){
    var c=d(Math.abs(a)/1e3),e=d(c/60),f=d(e/60),g=d(f/24),h=d(g/365),i=c<45&&["s",c]||e===1&&["m"]||e<45&&["mm",e]||f===1&&["h"]||f<22&&["hh",f]||g===1&&["d"]||g<=25&&["dd",g]||g<=45&&["M"]||g<345&&["MM",d(g/30)]||h===1&&["y"]||["yy",h];
    return i[2]=b,E.apply({},i)
    }
    function G(a,b){
    c.fn[a]=function(a){
        var c=this._isUTC?"UTC":"";
        return a!=null?(this._d["set"+c+b](a),this):this._d["get"+c+b]()
        }
    }
var c,d=Math.round,e={},f=typeof module!="undefined",g="months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),h,i=/^\/?Date\((\-?\d+)/i,j=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|zz?|ZZ?|LT|LL?L?L?)/g,k=/[^A-Z]/g,l=/\([A-Za-z ]+\)|:[0-9]{2} [A-Z]{3} /g,m=/(\\)?(MM?M?M?|dd?d?d|DD?D?D?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|ZZ?|T)/g,n=/(\\)?([0-9]+|([a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+|([\+\-]\d\d:?\d\d))/gi,o=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d)?)?)?([\+\-]\d\d:?\d\d)?)?/,p="YYYY-MM-DDTHH:mm:ssZ",q=[["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],r=/([\+\-]|\d\d)/gi,s="1.5.1",t="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|");
c=function(c,d){
    if(c===null||c==="")return null;
    var e,f;
    return c&&c._d instanceof a?e=new a(+c._d):d?x(d)?e=C(c,d):e=A(c,d):(f=i.exec(c),e=c===b?new a:f?new a(+f[1]):c instanceof a?c:x(c)?y(c):typeof c=="string"?D(c):new a(c)),new u(e)
    },c.utc=function(b,d){
    return x(b)?new u(new a(a.UTC.apply({},b)),!0):d&&b?c(b+" 0",d+" Z").utc():c(b).utc()
    },c.humanizeDuration=function(a,b,d){
    var e=+a,f=c.relativeTime,g;
    switch(b){
        case"seconds":
            e*=1e3;
            break;
        case"minutes":
            e*=6e4;
            break;
        case"hours":
            e*=36e5;
            break;
        case"days":
            e*=864e5;
            break;
        case"weeks":
            e*=6048e5;
            break;
        case"months":
            e*=2592e6;
            break;
        case"years":
            e*=31536e6;
            break;
        default:
            d=!!b
            }
            return g=F(e,!d),d?(e<=0?f.past:f.future).replace(/%s/i,g):g
    },c.version=s,c.defaultFormat=p,c.lang=function(a,b){
    var d,h,i,j=[];
    if(b){
        for(d=0;d<12;d++)j[d]=new RegExp("^"+b.months[d]+"|^"+b.monthsShort[d].replace(".",""),"i");
        b.monthsParse=b.monthsParse||j,e[a]=b
        }
        if(e[a])for(d=0;d<g.length;d++)h=g[d],c[h]=e[a][h]||c[h];else f&&(i=require("./lang/"+a),c.lang(a,i))
        },c.lang("en",{
    months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    longDateFormat:{
        LT:"h:mm A",
        L:"MM/DD/YYYY",
        LL:"MMMM D YYYY",
        LLL:"MMMM D YYYY LT",
        LLLL:"dddd, MMMM D YYYY LT"
    },
    meridiem:{
        AM:"AM",
        am:"am",
        PM:"PM",
        pm:"pm"
    },
    calendar:{
        sameDay:"[Today at] LT",
        nextDay:"[Tomorrow at] LT",
        nextWeek:"dddd [at] LT",
        lastDay:"[Yesterday at] LT",
        lastWeek:"[last] dddd [at] LT",
        sameElse:"L"
    },
    relativeTime:{
        future:"in %s",
        past:"%s ago",
        s:"a few seconds",
        m:"a minute",
        mm:"%d minutes",
        h:"an hour",
        hh:"%d hours",
        d:"a day",
        dd:"%d days",
        M:"a month",
        MM:"%d months",
        y:"a year",
        yy:"%d years"
    },
    ordinal:function(a){
        var b=a%10;
        return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"
        }
    }),c.isMoment=function(a){
    return a instanceof u
    },c.fn=u.prototype={
    clone:function(){
        return c(this)
        },
    valueOf:function(){
        return+this._d
        },
    "native":function(){
        return this._d
        },
    toString:function(){
        return this._d.toString()
        },
    toDate:function(){
        return this._d
        },
    utc:function(){
        return this._isUTC=!0,this
        },
    local:function(){
        return this._isUTC=!1,this
        },
    format:function(a){
        return z(this,a?a:c.defaultFormat)
        },
    add:function(a,b){
        return this._d=w(this._d,a,1,b),this
        },
    subtract:function(a,b){
        return this._d=w(this._d,a,-1,b),this
        },
    diff:function(a,b,e){
        var f=c(a),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.month()-f.month(),k=this.date()-f.date(),l;
        return b==="months"?l=i*12+j+k/30:b==="years"?l=i+j/12:l=b==="seconds"?h/1e3:b==="minutes"?h/6e4:b==="hours"?h/36e5:b==="days"?h/864e5:b==="weeks"?h/6048e5:h,e?l:d(l)
        },
    from:function(a,b){
        return c.humanizeDuration(this.diff(a),!b)
        },
    fromNow:function(a){
        return this.from(c(),a)
        },
    calendar:function(){
        var a=this.diff(c().sod(),"days",!0),b=c.calendar,d=b.sameElse,e=a<-6?d:a<-1?b.lastWeek:a<0?b.lastDay:a<1?b.sameDay:a<2?b.nextDay:a<7?b.nextWeek:d;
        return this.format(typeof e=="function"?e.apply(this):e)
        },
    isLeapYear:function(){
        var a=this.year();
        return a%4===0&&a%100!==0||a%400===0
        },
    isDST:function(){
        return this.zone()<c([this.year()]).zone()||this.zone()<c([this.year(),5]).zone()
        },
    day:function(a){
        var b=this._isUTC?this._d.getUTCDay():this._d.getDay();
        return a==null?b:this.add({
            d:a-b
            })
        },
    sod:function(){
        return this.clone().hours(0).minutes(0).seconds(0).milliseconds(0)
        },
    eod:function(){
        return this.sod().add({
            d:1,
            ms:-1
        })
        },
    zone:function(){
        return this._isUTC?0:this._d.getTimezoneOffset()
        },
    daysInMonth:function(){
        return this.clone().month(this.month()+1).date(0).date()
        }
    };

for(h=0;h<t.length;h++)G(t[h].toLowerCase(),t[h]);
G("year","FullYear"),f&&(module.exports=c),typeof window!="undefined"&&(window.moment=c),typeof define=="function"&&define.amd&&define("moment",[],function(){
    return c
    })
}(Date),function(){
    var a;
    a=function(a){
        var b,c,d,e,f,g,h;
        a==null&&(a=document),g=$(a).find("time.js-relative-date"),h=[];
        for(e=0,f=g.length;e<f;e++)c=g[e],(b=moment($(c).attr("datetime"),"YYYY-MM-DDTHH:mm:ssZ"))?(d=b.fromNow(),d==="a few seconds ago"&&(d="just now"),h.push($(c).text(d))):h.push(void 0);
        return h
        },$.pageUpdate(function(b){
        return a(this)
        }),setInterval(a,6e4)
    }.call(this),function(){
    $.pageUpdate(function(){
        return $(this).find(".js-obfuscate-email").each(function(){
            var a,b,c,d;
            if(d=$(this).attr("data-email"))return a=decodeURIComponent(d),c=$(this).text().replace(/{email}/,a),b=$(this).attr("href").replace(/{email}/,a),$(this).text(c),$(this).attr("href",b)
                })
        })
    }.call(this),function(){
    var a;
    Modernizr.hashchange||(a=window.location.hash,setInterval(function(){
        if(window.location.hash!==a)return a=window.location.hash,$(window).trigger("hashchange")
            },50))
    }.call(this),window.GitHub||(window.GitHub={}),window.GitHub.debug=!1,function(){
    GitHub.commafy=function(a){
        return a.toString().replace(/(^|[^\w.])(\d{4,})/g,function(a,b,c){
            return b+c.replace(/\d(?=(?:\d\d\d)+(?!\d))/g,"$&,")
            })
        }
    }.call(this),function(a){
    a.fn.autocompleteField=function(b){
        var c=a.extend({
            searchVar:"q",
            url:null,
            delay:250,
            useCache:!1,
            extraParams:{},
            autoClearResults:!0,
            dataType:"html",
            minLength:1
        },b);
        return a(this).each(function(){
            function h(e){
                d&&d.readyState<4&&d.abort();
                if(c.useCache&&g[e])b.trigger("autocomplete:finish",g[e]);
                else{
                    var f={};
                    
                    f[c.searchVar]=e,f=a.extend(!0,c.extraParams,f),b.trigger("autocomplete:beforesend"),d=a.get(c.url,f,function(a){
                        c.useCache&&(g[e]=a),b.val()===e&&b.trigger("autocomplete:finish",a)
                        },c.dataType)
                    }
                }
            function i(a){
            a.length>=c.minLength?f!=a&&(h(a),f=a):b.trigger("autocomplete:clear")
            }
            var b=a(this),d,e,f,g={};
            
            c.url!=null&&(b.attr("autocomplete","off"),b.keyup(function(a){
            a.preventDefault(),clearTimeout(e),e=setTimeout(function(){
                clearTimeout(e),i(b.val())
                },c.delay)
            }),b.blur(function(){
            f=null
            }))
        })
    }
}(jQuery),function(a){
    a.fn.autosaveField=function(b){
        var c=a.extend({},a.fn.autosaveField.defaults,b);
        return this.each(function(){
            var b=a(this);
            if(b.data("autosaved-init"))return;
            var d=b.attr("data-field-type")||":text",e=b.find(d),f=b.attr("data-action"),g=b.attr("data-name"),h=e.val(),i=function(){
                b.removeClass("errored"),b.removeClass("successful"),b.addClass("loading"),a.ajax({
                    url:f,
                    type:"POST",
                    data:{
                        _method:c.method,
                        field:g,
                        value:e.val()
                        },
                    success:function(){
                        b.addClass("successful"),h=e.val()
                        },
                    error:function(){
                        b.attr("data-reset-on-error")&&e.val(h),b.addClass("errored")
                        },
                    complete:function(){
                        b.removeClass("loading")
                        }
                    })
            };
            
        d==":text"?(e.blur(function(){
            a(this).val()!=h&&i()
            }),e.keyup(function(){
            b.removeClass("successful"),b.removeClass("errored")
            })):d=="input[type=checkbox]"&&e.change(function(){
            b.removeClass("successful"),b.removeClass("errored"),i()
            }),b.data("autosaved-init",!0)
            })
    },a.fn.autosaveField.defaults={
    method:"put"
}
}(jQuery),function(a){
    function b(a){
        var b=Math.floor(a/1e3),c=Math.floor(b/60);
        return b%=60,b=b<10?"0"+b:b,c+":"+b
        }
        function c(a){
        var b=0;
        if(a.offsetParent)while(a.offsetParent)b+=a.offsetLeft,a=a.offsetParent;else a.x&&(b+=a.x);
        return b
        }
        BaconPlayer={
        sound:null,
        playing:!1,
        sm2:"/js/soundmanager2.js",
        flashURL:"/flash/",
        playOrPause:function(a){
            this.initSound(a,function(){
                this.playing?this.pause():this.play()
                })
            },
        play:function(){
            if(!this.sound)return;
            return this.playing=!0,this.sound.play(),a(".baconplayer .play, .baconplayer .pause").toggle(),"playing"
            },
        pause:function(){
            if(!this.sound)return;
            return this.playing=!1,this.sound.pause(),a(".baconplayer .play, .baconplayer .pause").toggle(),"paused"
            },
        initSound:function(b,c){
            if(!window.soundManager)return a.getScript(this.sm2,function(){
                soundManager.url=BaconPlayer.flashURL,soundManager.debugMode=!1,soundManager.onready(function(){
                    BaconPlayer.initSound(b,c)
                    })
                });
            this.sound=soundManager.createSound({
                id:"baconplayer",
                url:b,
                whileplaying:function(){
                    BaconPlayer.moveProgressBar(this),BaconPlayer.setPositionTiming(this)
                    },
                whileloading:function(){
                    BaconPlayer.moveLoadingBar(this),BaconPlayer.setDurationTiming(this)
                    },
                onload:function(){
                    BaconPlayer.setDurationTiming(this,!0)
                    }
                }),c.call(this)
        },
    moveProgressBar:function(b){
        var c=b.position/b.durationEstimate;
        a(".baconplayer .inner-progress").width(this.progressBar().width()*c)
        },
    moveLoadingBar:function(b){
        var c=b.bytesLoaded/b.bytesTotal;
        a(".baconplayer .loading-progress").width(this.progressBar().width()*c)
        },
    setPositionTiming:function(c){
        var d=b(c.position);
        a(".baconplayer .position").text(d)
        },
    setDurationTiming:function(c,d){
        if(!d&&this.durationTimingTimer)return;
        this.durationTimingTimer=setTimeout(function(){
            BaconPlayer.setDurationTiming(c),BaconPlayer.durationTimingTimer=null
            },2e3);
        var e=b(c.durationEstimate);
        a(".baconplayer .duration").text(e)
        },
    progressBar:function(){
        return a(".baconplayer .progress")
        },
    setPosition:function(a){
        var b=this.progressBar()[0],d=this.sound,e=parseInt(a.clientX),f=Math.floor((e-c(b)-4)/b.offsetWidth*d.durationEstimate);
        isNaN(f)||(f=Math.min(f,d.duration)),isNaN(f)||d.setPosition(f)
        },
    startDrag:function(a){
        if(this.dragging||!this.sound)return;
        this.attachDragHandlers(),this.dragging=!0,this.pause(),this.setPosition(a)
        },
    drag:function(a){
        this.setPosition(a)
        },
    stopDrag:function(a){
        this.removeDragHandlers(),this.dragging=!1,this.setPosition(a),this.play()
        },
    attachDragHandlers:function(){
        a(document).bind("mousemove.baconplayer",function(a){
            BaconPlayer.drag(a)
            }),a(document).bind("mouseup.baconplayer",function(a){
            BaconPlayer.stopDrag(a)
            })
        },
    removeDragHandlers:function(){
        a(document).unbind("mousemove.baconplayer"),a(document).unbind("mouseup.baconplayer")
        }
    },a(function(){
    var b=!0;
    $stats.increment("ui.baconplayer.loaded"),a(".baconplayer .play, .baconplayer .pause").click(function(){
        return b&&($stats.increment("ui.baconplayer.interaction"),b=!1),BaconPlayer.playOrPause(this.href),!1
        }),a(".baconplayer .progress").mousedown(function(a){
        BaconPlayer.startDrag(a)
        })
    })
}(jQuery),jQuery.cookie=function(a,b,c){
    if(typeof b=="undefined"){
        var i=null;
        if(document.cookie&&document.cookie!=""){
            var j=document.cookie.split(";");
            for(var k=0;k<j.length;k++){
                var l=jQuery.trim(j[k]);
                if(l.substring(0,a.length+1)==a+"="){
                    i=decodeURIComponent(l.substring(a.length+1));
                    break
                }
            }
            }
        return i
}
c=c||{},b===null&&(b="",c.expires=-1);
var d="";
if(c.expires&&(typeof c.expires=="number"||c.expires.toUTCString)){
    var e;
    typeof c.expires=="number"?(e=new Date,e.setTime(e.getTime()+c.expires*24*60*60*1e3)):e=c.expires,d="; expires="+e.toUTCString()
    }
    var f=c.path?"; path="+c.path:"",g=c.domain?"; domain="+c.domain:"",h=c.secure?"; secure":"";
document.cookie=[a,"=",encodeURIComponent(b),d,f,g,h].join("")
},DateInput=function(a){
    function b(c,d){
        typeof d!="object"&&(d={}),a.extend(this,b.DEFAULT_OPTS,d),this.input=a(c),this.bindMethodsToObj("show","hide","hideIfClickOutside","keydownHandler","selectDate"),this.build(),this.selectDate(),this.hide(),this.input.data("datePicker",this)
        }
        return b.DEFAULT_OPTS={
        month_names:["January","February","March","April","May","June","July","August","September","October","November","December"],
        short_month_names:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        short_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
        start_of_week:1
    },b.prototype={
        build:function(){
            var b=a('<p class="month_nav"><span class="button prev" title="[Page-Up]">&#171;</span> <span class="month_name"></span> <span class="button next" title="[Page-Down]">&#187;</span></p>');
            this.monthNameSpan=a(".month_name",b),a(".prev",b).click(this.bindToObj(function(){
                this.moveMonthBy(-1)
                })),a(".next",b).click(this.bindToObj(function(){
                this.moveMonthBy(1)
                }));
            var c=a('<p class="year_nav"><span class="button prev" title="[Ctrl+Page-Up]">&#171;</span> <span class="year_name"></span> <span class="button next" title="[Ctrl+Page-Down]">&#187;</span></p>');
            this.yearNameSpan=a(".year_name",c),a(".prev",c).click(this.bindToObj(function(){
                this.moveMonthBy(-12)
                })),a(".next",c).click(this.bindToObj(function(){
                this.moveMonthBy(12)
                }));
            var d=a('<div class="nav"></div>').append(b,c),e="<table><thead><tr>";
            a(this.adjustDays(this.short_day_names)).each(function(){
                e+="<th>"+this+"</th>"
                }),e+="</tr></thead><tbody></tbody></table>",this.dateSelector=this.rootLayers=a('<div class="date_selector"></div>').append(d,e).insertAfter(this.input),a.browser.msie&&a.browser.version<7&&(this.ieframe=a('<iframe class="date_selector_ieframe" frameborder="0" src="#"></iframe>').insertBefore(this.dateSelector),this.rootLayers=this.rootLayers.add(this.ieframe),a(".button",d).mouseover(function(){
                a(this).addClass("hover")
                }),a(".button",d).mouseout(function(){
                a(this).removeClass("hover")
                })),this.tbody=a("tbody",this.dateSelector),this.input.change(this.bindToObj(function(){
                this.selectDate()
                })),this.selectDate()
            },
        selectMonth:function(b){
            var c=new Date(b.getFullYear(),b.getMonth(),1);
            if(!this.currentMonth||this.currentMonth.getFullYear()!=c.getFullYear()||this.currentMonth.getMonth()!=c.getMonth()){
                this.currentMonth=c;
                var d=this.rangeStart(b),e=this.rangeEnd(b),f=this.daysBetween(d,e),g="";
                for(var h=0;h<=f;h++){
                    var i=new Date(d.getFullYear(),d.getMonth(),d.getDate()+h,12,0);
                    this.isFirstDayOfWeek(i)&&(g+="<tr>"),i.getMonth()==b.getMonth()?g+='<td class="selectable_day" date="'+this.dateToString(i)+'">'+i.getDate()+"</td>":g+='<td class="unselected_month" date="'+this.dateToString(i)+'">'+i.getDate()+"</td>",this.isLastDayOfWeek(i)&&(g+="</tr>")
                    }
                    this.tbody.empty().append(g),this.monthNameSpan.empty().append(this.monthName(b)),this.yearNameSpan.empty().append(this.currentMonth.getFullYear()),a(".selectable_day",this.tbody).click(this.bindToObj(function(b){
                    this.changeInput(a(b.target).attr("date"))
                    })),a("td[date='"+this.dateToString(new Date)+"']",this.tbody).addClass("today"),a("td.selectable_day",this.tbody).mouseover(function(){
                    a(this).addClass("hover")
                    }),a("td.selectable_day",this.tbody).mouseout(function(){
                    a(this).removeClass("hover")
                    })
                }
                a(".selected",this.tbody).removeClass("selected"),a('td[date="'+this.selectedDateString+'"]',this.tbody).addClass("selected")
            },
        selectDate:function(a){
            typeof a=="undefined"&&(a=this.stringToDate(this.input.val())),a||(a=new Date),this.selectedDate=a,this.selectedDateString=this.dateToString(this.selectedDate),this.selectMonth(this.selectedDate)
            },
        changeInput:function(a){
            this.input.val(a).change(),this.hide()
            },
        show:function(){
            this.rootLayers.css("display","block"),a([window,document.body]).click(this.hideIfClickOutside),this.input.unbind("focus",this.show),this.rootLayers.keydown(this.keydownHandler),this.setPosition()
            },
        hide:function(){
            this.rootLayers.css("display","none"),a([window,document.body]).unbind("click",this.hideIfClickOutside),this.input.focus(this.show),this.rootLayers.unbind("keydown",this.keydownHandler)
            },
        hideIfClickOutside:function(a){
            a.target!=this.input[0]&&!this.insideSelector(a)&&this.hide()
            },
        insideSelector:function(a){
            var b=this.dateSelector.position();
            return b.right=b.left+this.dateSelector.outerWidth(),b.bottom=b.top+this.dateSelector.outerHeight(),a.pageY<b.bottom&&a.pageY>b.top&&a.pageX<b.right&&a.pageX>b.left
            },
        keydownHandler:function(a){
            switch(a.keyCode){
                case 9:case 27:
                    this.hide();
                    return;
                case 13:
                    this.changeInput(this.selectedDateString);
                    break;
                case 33:
                    this.moveDateMonthBy(a.ctrlKey?-12:-1);
                    break;
                case 34:
                    this.moveDateMonthBy(a.ctrlKey?12:1);
                    break;
                case 38:
                    this.moveDateBy(-7);
                    break;
                case 40:
                    this.moveDateBy(7);
                    break;
                case 37:
                    this.moveDateBy(-1);
                    break;
                case 39:
                    this.moveDateBy(1);
                    break;
                default:
                    return
                    }
                    a.preventDefault()
            },
        stringToDate:function(a){
            var b;
            return(b=a.match(/^(\d{1,2}) ([^\s]+) (\d{4,4})$/))?new Date(b[3],this.shortMonthNum(b[2]),b[1],12,0):null
            },
        dateToString:function(a){
            return a.getDate()+" "+this.short_month_names[a.getMonth()]+" "+a.getFullYear()
            },
        setPosition:function(){
            var a=this.input.offset();
            this.rootLayers.css({
                top:a.top+this.input.outerHeight(),
                left:a.left
                }),this.ieframe&&this.ieframe.css({
                width:this.dateSelector.outerWidth(),
                height:this.dateSelector.outerHeight()
                })
            },
        moveDateBy:function(a){
            var b=new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),this.selectedDate.getDate()+a);
            this.selectDate(b)
            },
        moveDateMonthBy:function(a){
            var b=new Date(this.selectedDate.getFullYear
                (),this.selectedDate.getMonth()+a,this.selectedDate.getDate());
            b.getMonth()==this.selectedDate.getMonth()+a+1&&b.setDate(0),this.selectDate(b)
            },
        moveMonthBy:function(a){
            var b=new Date(this.currentMonth.getFullYear(),this.currentMonth.getMonth()+a,this.currentMonth.getDate());
            this.selectMonth(b)
            },
        monthName:function(a){
            return this.month_names[a.getMonth()]
            },
        bindToObj:function(a){
            var b=this;
            return function(){
                return a.apply(b,arguments)
                }
            },
    bindMethodsToObj:function(){
        for(var a=0;a<arguments.length;a++)this[arguments[a]]=this.bindToObj(this[arguments[a]])
            },
    indexFor:function(a,b){
        for(var c=0;c<a.length;c++)if(b==a[c])return c
            },
    monthNum:function(a){
        return this.indexFor(this.month_names,a)
        },
    shortMonthNum:function(a){
        return this.indexFor(this.short_month_names,a)
        },
    shortDayNum:function(a){
        return this.indexFor(this.short_day_names,a)
        },
    daysBetween:function(a,b){
        return a=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()),b=Date.UTC(b.getFullYear(),b.getMonth(),b.getDate()),(b-a)/864e5
        },
    changeDayTo:function(a,b,c){
        var d=c*(Math.abs(b.getDay()-a-c*7)%7);
        return new Date(b.getFullYear(),b.getMonth(),b.getDate()+d)
        },
    rangeStart:function(a){
        return this.changeDayTo(this.start_of_week,new Date(a.getFullYear(),a.getMonth()),-1)
        },
    rangeEnd:function(a){
        return this.changeDayTo((this.start_of_week-1)%7,new Date(a.getFullYear(),a.getMonth()+1,0),1)
        },
    isFirstDayOfWeek:function(a){
        return a.getDay()==this.start_of_week
        },
    isLastDayOfWeek:function(a){
        return a.getDay()==(this.start_of_week-1)%7
        },
    adjustDays:function(a){
        var b=[];
        for(var c=0;c<a.length;c++)b[c]=a[(c+this.start_of_week)%7];
        return b
        }
    },a.fn.date_input=function(a){
    return this.each(function(){
        new b(this,a)
        })
    },a.date_input={
    initialize:function(b){
        a("input.date_input").date_input(b)
        }
    },b
}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{
    def:"easeOutQuad",
    swing:function(a,b,c,d,e){
        return jQuery.easing[jQuery.easing.def](a,b,c,d,e)
        },
    easeInQuad:function(a,b,c,d,e){
        return d*(b/=e)*b+c
        },
    easeOutQuad:function(a,b,c,d,e){
        return-d*(b/=e)*(b-2)+c
        },
    easeInOutQuad:function(a,b,c,d,e){
        return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c
        },
    easeInCubic:function(a,b,c,d,e){
        return d*(b/=e)*b*b+c
        },
    easeOutCubic:function(a,b,c,d,e){
        return d*((b=b/e-1)*b*b+1)+c
        },
    easeInOutCubic:function(a,b,c,d,e){
        return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c
        },
    easeInQuart:function(a,b,c,d,e){
        return d*(b/=e)*b*b*b+c
        },
    easeOutQuart:function(a,b,c,d,e){
        return-d*((b=b/e-1)*b*b*b-1)+c
        },
    easeInOutQuart:function(a,b,c,d,e){
        return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c
        },
    easeInQuint:function(a,b,c,d,e){
        return d*(b/=e)*b*b*b*b+c
        },
    easeOutQuint:function(a,b,c,d,e){
        return d*((b=b/e-1)*b*b*b*b+1)+c
        },
    easeInOutQuint:function(a,b,c,d,e){
        return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c
        },
    easeInSine:function(a,b,c,d,e){
        return-d*Math.cos(b/e*(Math.PI/2))+d+c
        },
    easeOutSine:function(a,b,c,d,e){
        return d*Math.sin(b/e*(Math.PI/2))+c
        },
    easeInOutSine:function(a,b,c,d,e){
        return-d/2*(Math.cos(Math.PI*b/e)-1)+c
        },
    easeInExpo:function(a,b,c,d,e){
        return b==0?c:d*Math.pow(2,10*(b/e-1))+c
        },
    easeOutExpo:function(a,b,c,d,e){
        return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c
        },
    easeInOutExpo:function(a,b,c,d,e){
        return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c
        },
    easeInCirc:function(a,b,c,d,e){
        return-d*(Math.sqrt(1-(b/=e)*b)-1)+c
        },
    easeOutCirc:function(a,b,c,d,e){
        return d*Math.sqrt(1-(b=b/e-1)*b)+c
        },
    easeInOutCirc:function(a,b,c,d,e){
        return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c
        },
    easeInElastic:function(a,b,c,d,e){
        var f=1.70158,g=0,h=d;
        if(b==0)return c;
        if((b/=e)==1)return c+d;
        g||(g=e*.3);
        if(h<Math.abs(d)){
            h=d;
            var f=g/4
            }else var f=g/(2*Math.PI)*Math.asin(d/h);
        return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c
        },
    easeOutElastic:function(a,b,c,d,e){
        var f=1.70158,g=0,h=d;
        if(b==0)return c;
        if((b/=e)==1)return c+d;
        g||(g=e*.3);
        if(h<Math.abs(d)){
            h=d;
            var f=g/4
            }else var f=g/(2*Math.PI)*Math.asin(d/h);
        return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c
        },
    easeInOutElastic:function(a,b,c,d,e){
        var f=1.70158,g=0,h=d;
        if(b==0)return c;
        if((b/=e/2)==2)return c+d;
        g||(g=e*.3*1.5);
        if(h<Math.abs(d)){
            h=d;
            var f=g/4
            }else var f=g/(2*Math.PI)*Math.asin(d/h);
        return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c
        },
    easeInBack:function(a,b,c,d,e,f){
        return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c
        },
    easeOutBack:function(a,b,c,d,e,f){
        return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c
        },
    easeInOutBack:function(a,b,c,d,e,f){
        return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c
        },
    easeInBounce:function(a,b,c,d,e){
        return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c
        },
    easeOutBounce:function(a,b,c,d,e){
        return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c
        },
    easeInOutBounce:function(a,b,c,d,e){
        return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c
        }
    }),function(a){
    function b(b){
        if(a.facebox.settings.inited)return!0;
        a.facebox.settings.inited=!0,a(document).trigger("init.facebox"),e();
        var c=a.facebox.settings.imageTypes.join("|");
        a.facebox.settings.imageTypesRegexp=new RegExp(".("+c+")$","i"),b&&a.extend(a.facebox.settings,b),a("body").append(a.facebox.settings.faceboxHtml);
        var d=[new Image,new Image];
        d[0].src=a.facebox.settings.closeImage,d[1].src=a.facebox.settings.loadingImage,a("#facebox").find(".b:first, .bl").each(function(){
            d.push(new Image),d.slice(-1).src=a(this).css("background-image").replace(/url\((.+)\)/,"$1")
            }),a("#facebox .close").click(a.facebox.close).append('<img src="'+a.facebox.settings.closeImage+'" class="close_image" title="close">')
        }
        function c(){
        var a,b;
        return self.pageYOffset?(b=self.pageYOffset,a=self.pageXOffset):document.documentElement&&document.documentElement.scrollTop?(b=document.documentElement.scrollTop,a=document.documentElement.scrollLeft):document.body&&(b=document.body.scrollTop,a=document.body.scrollLeft),new Array(a,b)
        }
        function d(){
        var a;
        return self.innerHeight?a=self.innerHeight:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body&&(a=document.body.clientHeight),a
        }
        function e(){
        var b=a.facebox.settings;
        b.loadingImage=b.loading_image||b.loadingImage,b.closeImage=b.close_image||b.closeImage,b.imageTypes=b.image_types||b.imageTypes,b.faceboxHtml=b.facebox_html||b.faceboxHtml
        }
        function f(b,c){
        if(b.match(/#/)){
            var d=window.location.href.split("#")[0],e=b.replace(d,"");
            if(e=="#")return;
            a.facebox.reveal(a(e).html(),c)
            }else b.match(a.facebox.settings.imageTypesRegexp)?g(b,c):h(b,c)
            }
            function g(b,c){
        var d=new Image;
        d.onload=function(){
            a.facebox.reveal('<div class="image"><img src="'+d.src+'" /></div>',c)
            },d.src=b
        }
        function h(b,c){
        a.get(b,function(b){
            a.facebox.reveal(b,c)
            })
        }
        function i(){
        return a.facebox.settings.overlay==0||a.facebox.settings.opacity===null
        }
        function j(){
        if(i())return;
        return a("#facebox_overlay").length==0&&a("body").append('<div id="facebox_overlay" class="facebox_hide"></div>'),a("#facebox_overlay").hide().addClass("facebox_overlayBG").css("opacity",a.facebox.settings.opacity).click(function(){
            a(document).trigger("close.facebox")
            }).fadeIn(200),!1
        }
        function k(){
        if(i())return;
        return a("#facebox_overlay").fadeOut(200,function(){
            a("#facebox_overlay").removeClass("facebox_overlayBG"),a("#facebox_overlay").addClass("facebox_hide"),a("#facebox_overlay").remove()
            }),!1
        }
        a.facebox=function(b,c){
        a.facebox.loading(),b.ajax?h(b.ajax,c):b.image?g(b.image,c):b.div?f(b.div,c):a.isFunction(b)?b.call(a):a.facebox.reveal(b,c)
        },a.extend(a.facebox,{
        settings:{
            opacity:.2,
            overlay:!0,
            loadingImage:"/facebox/loading.gif",
            closeImage:"/facebox/closelabel.png",
            imageTypes:["png","jpg","jpeg","gif"],
            faceboxHtml:'    <div id="facebox" style="display:none;">       <div class="popup">         <div class="content">         </div>         <a href="#" class="close"></a>       </div>     </div>'
        },
        loading:function(){
            b();
            if(a("#facebox .loading").length==1)return!0;
            j(),a("#facebox .content").empty().append('<div class="loading"><img src="'+a.facebox.settings.loadingImage+'"/></div>'),a("#facebox").show().css({
                top:c()[1]+d()/10,
                left:a(window).width()/2-a("#facebox .popup").outerWidth()/2
                }),a(document).bind("keydown.facebox",function(b){
                return b.keyCode==27&&a.facebox.close(),!0
                }),a(document).trigger("loading.facebox")
            },
        reveal:function(b,c){
            a(document).trigger("beforeReveal.facebox"),c&&a("#facebox .content").addClass(c),a("#facebox .content").append(b),a("#facebox .loading").remove(),a("#facebox .popup").children().fadeIn("normal"),a("#facebox").css("left",a(window).width()/2-a("#facebox .popup").outerWidth()/2),a(document).trigger("reveal.facebox").trigger("afterReveal.facebox")
            },
        close:function(){
            return a(document).trigger("close.facebox"),!1
            }
        }),a.fn.facebox=function(c){
    function d(){
        a.facebox.loading(!0);
        var b=this.rel.match(/facebox\[?\.(\w+)\]?/);
        return b&&(b=b[1]),f(this.href,b),!1
        }
        if(a(this).length==0)return;
    return b(c),this.bind("click.facebox",d)
    },a(document).bind("close.facebox",function(){
    a(document).unbind("keydown.facebox"),a("#facebox").fadeOut(function(){
        a("#facebox .content").removeClass().addClass("content"),a("#facebox .loading").remove(),a(document).trigger("afterClose.facebox")
        }),k()
    })
}(jQuery),function(a){
    a.fn.cardsSelect=function(b){
        var c=a.extend({},a.fn.cardsSelect.defaults,b);
        return this.each(function(){
            var b=a(this),c=b.next("dl.form").find("input[type=text]"),d=b.find(".card"),e=b.find("input[name='billing[type]']"),f=function(b){
                d.each(function(){
                    var c=a(this);
                    c.attr("data-name")==b?c.removeClass("disabled"):c.addClass("disabled"),e.val(b)
                    })
                };
                
            c.bind("keyup blur",function(){
                var b=a(this).val();
                b.match(/^5[1-5]/)?f("master"):b.match(/^4/)?f("visa"):b.match(/^3(4|7)/)?f("american_express"):b.match(/^6011/)?f("discover"):b.match(/^(30[0-5]|36|38)/)?f("diners_club"):b.match(/^(3|2131|1800)/)?f("jcb"):(d.removeClass("disabled"),e.val(""))
                }).keyup()
            })
        },a.fn.cardsSelect.defaults={}
}(jQuery),function(a){
    a.fn.editableComment=function(){
        a(this).delegate(".comment .edit-button","click",function(b){
            var c=a(this).closest(".comment");
            return c.addClass("editing"),!1
            }),a(this).delegate(".comment .delete-button","click",function(b){
            var c=a(this).closest(".comment"),d=a(this).closest(".js-comment-container");
            return d.length||(d=c),confirm("Are you sure you want to delete this?")&&(c.addClass("loading"),c.find("button").attr("disabled",!0),c.find(".minibutton").addClass("disabled"),a.ajax({
                type:"DELETE",
                url:c.find(".form-content form").attr("action"),
                context:d,
                complete:function(){
                    c.removeClass("loading"),c.find("button").removeAttr("disabled"),c.find(".minibutton").removeClass("disabled")
                    },
                success:function(){
                    c.removeClass("error"),d.fadeOut(function(){
                        c.removeClass("editing"),d.pageUpdate()
                        })
                    },
                error:function(){
                    c.addClass("error")
                    }
                })),!1
        }),a(this).delegate(".comment .cancel","click",function(){
        return a(this).closest(".comment").removeClass("editing"),!1
        }),a(this).delegate(".comment .form-content form","submit",function(){
        var b=a(this).closest(".comment"),c=a(this).closest(".js-comment-container");
        return c.length||(c=b),b.addClass("loading"),b.find("button").attr("disabled",!0),b.find(".minibutton").addClass("disabled"),a.ajax({
            type:"PUT",
            url:b.find(".form-content form").attr("action"),
            dataType:"json",
            data:a(this).serialize(),
            context:c,
            complete:function(){
                b.removeClass("loading"),b.find("button").removeAttr("disabled"),b.find(".minibutton").removeClass("disabled")
                },
            success:function(a){
                b.removeClass("error"),a.title&&b.find(".content-title").html(a.title),b.find(".formatted-content .content-body").html(a.body),b.removeClass("editing"),c.pageUpdate()
                },
            error:function(){
                b.addClass("error")
                }
            }),!1
    })
}
}(jQuery),function(a){
    a.fn.enticeToAction=function(b){
        var c=a.extend({},a.fn.enticeToAction.defaults,b);
        return this.each(function(){
            var b=a(this);
            b.addClass("entice"),b.attr("title",c.title);
            switch(c.direction){
                case"downwards":
                    var d="n";
                case"upwards":
                    var d="s";
                case"rightwards":
                    var d="w";
                case"leftwards":
                    var d="e"
                    }
                    b.tipsy({
                gravity:d
            }),this.onclick=function(){
                return!1
                },this.href="javascript:;"
            })
        },a.fn.enticeToAction.defaults={
        title:"You must be logged in to use this feature",
        direction:"downwards"
    }
}(jQuery),function(a){
    a.fn.errorify=function(b,c){
        var d=a.extend({},a.fn.errorify.defaults,c);
        return this.each(function(){
            var c=a(this);
            c.addClass("errored"),c.find("p.note").hide(),c.find("dd.error").remove();
            var d=a("<dd>").addClass("error").text(b);
            c.append(d)
            })
        },a.fn.errorify.defaults={},a.fn.unErrorify=function(b){
        var c=a.extend({},a.fn.unErrorify.defaults,b);
        return this.each(function(){
            var b=a(this);
            b.removeClass("errored"),b.find("p.note").show(),b.find("dd.error").remove()
            })
        },a.fn.unErrorify.defaults={}
}(jQuery),function(a){
    a.fn.previewableCommentForm=function(b){
        var c=a.extend({},a.fn.previewableCommentForm.defaults,b);
        return this.each(function(){
            var b=a(this);
            if(b.hasClass("previewable-comment-form-attached"))return;
            b.addClass("previewable-comment-form-attached");
            var d=b.find("textarea"),e=b.find(".content-body"),f=b.prev(".comment-form-error"),g=b.find(".form-actions button"),h=d.val(),i=b.attr("data-repository"),j=!1,k=null,l=a.merge(b.find(".preview-dirty"),d);
            l.blur(function(){
                h!=d.val()&&(j=!0,h=d.val()),m()
                });
            var m=function(){
                if(!j)return;
                if(a.trim(h)==""){
                    e.html("<p>Nothing to preview</p>");
                    return
                }
                e.html("<p>Loading preview&hellip;</p>"),k&&k.abort();
                var b=a.extend({
                    text:h,
                    repository:i
                },c.previewOptions);
                k=a.post(c.previewUrl,b,function(a){
                    e.html(a),c.onSuccess.call(e)
                    })
                };
                
            a.trim(h)==""&&e.html("<p>Nothing to preview</p>"),f.length>0&&b.closest("form").submit(function(){
                f.hide();
                if(a.trim(d.val())=="")return f.show(),!1;
                g.attr("disabled","disabled")
                })
            })
        },a.fn.previewableCommentForm.defaults={
        previewUrl:"/preview",
        previewOptions:{},
        onSuccess:function(){}
    }
}(jQuery),function(a){
    a.fn.repoList=function(b){
        var c=a.extend({},a.fn.repoList.defaults,b);
        return this.each(function(){
            var b=a(this),d=b.find(".repo_list"),e=b.find(".show-more"),f=b.find(".filter_input").val(""),g=f.val(),h=e.length==0?!0:!1,i=null,j=!1;
            e.click(function(){
                if(j)return!1;
                var b=e.spin();
                return j=!0,a(c.selector).load(c.ajaxUrl,function(){
                    h=!0,b.parents(".repos").find(".filter_selected").click(),b.stopSpin()
                    }),b.hide(),!1
                });
            var k=function(){
                var a=d.children("li");
                i?(a.hide(),d.find("li."+i).show()):a.show(),f.val()!=""&&a.filter(":not(:Contains('"+f.val()+"'))").hide()
                };
                
            b.find(".repo_filter").click(function(){
                var c=a(this);
                return b.find(".repo_filterer a").removeClass("filter_selected"),c.addClass("filter_selected"),i=c.attr("rel"),h?k():e.click(),!1
                });
            var l="placeholder"in document.createElement("input"),m=function(){
                l||(f.val()==""?f.addClass("placeholder"):f.removeClass("placeholder"))
                };
                
            f.bind("keyup blur click",function(){
                if(this.value==g)return;
                g=this.value,h?k():e.click(),m()
                }),m()
            })
        },a.fn.repoList.defaults={
        selector:"#repo_listing",
        ajaxUrl:"/dashboard/ajax_your_repos"
    }
}(jQuery),$.fn.selectableList=function(a,b){
    return $(this).each(function(){
        var c=$(this),d=$.extend({
            toggleClassName:"selected",
            wrapperSelector:"a",
            mutuallyExclusive:!1,
            itemParentSelector:"li",
            enableShiftSelect:!1,
            ignoreLinks:!1
            },b);
        return c.delegate(a+" "+d.itemParentSelector+" "+d.wrapperSelector,"click",function(b){
            if(b.which>1||b.metaKey||d.ignoreLinks&&$(b.target).closest("a").length)return!0;
            var e=$(this),f=e.find(":checkbox, :radio"),g=c.find(a+" ."+d.toggleClassName),h=c.find(a+" *[data-last]");
            !e.is(":checkbox, :radio")&&b.target!=f[0]&&(f.attr("checked")&&!f.is(":radio")?f.attr("checked",!1):f.attr("checked",!0)),d.mutuallyExclusive&&g.removeClass(d.toggleClassName),e.toggleClass(d.toggleClassName),f.change();
            if(d.enableShiftSelect&&b.shiftKey&&g.length>0&&h.length>0){
                var i=h.offset().top,j=e.offset().top,k="#"+e.attr("id"),l=$,m=$,n=$;
                i>j?l=h.prevUntil(k):i<j&&(l=h.nextUntil(k)),m=l.find(":checkbox"),n=l.find(":checked"),n.length==m.length?(l.removeClass(d.toggleClassName),m.attr("checked",!1)):(l.addClass(d.toggleClassName),m.attr("checked",!0))
                }
                h.removeAttr("data-last"),e.attr("data-last",!0)
            }),c.delegate(a+" li :checkbox,"+a+" li :radio","change",function(b){
            var e=$(this),f=e.closest(d.wrapperSelector);
            d.mutuallyExclusive&&c.find(a+" ."+d.toggleClassName).removeClass(d.toggleClassName),$(this).attr("checked")?f.addClass(d.toggleClassName):f.removeClass(d.toggleClassName)
            }),c.find(a)
        })
    },function(a){
    a.fn.hardTabs=function(b){
        var c=a.extend({},a.fn.hardTabs.defaults,b);
        a(this).hasClass("js-large-data-tabs")&&(c.optimizeLargeContents=!0);
        var d=function(b){
            return c.optimizeLargeContents?b[0]==null?a():(b.is(":visible")&&!b[0].style.width&&b.css({
                width:b.width()+"px"
                }),b.css({
                position:"absolute",
                left:"-9999px"
            })):b.hide()
            },e=function(b){
            return c.optimizeLargeContents?b[0]==null?a():(b.is(":visible")||b.show(),b.css({
                position:"",
                left:""
            })):b.show()
            };
            
        return this.each(function(){
            var b=a(this),c=a(),f=a();
            b.find("a.selected").length==0&&a(b.find("a")[0]).addClass("selected"),b.find("a").each(function(){
                var g=a(this),h=a.fn.hardTabs.findLastPathSegment(g.attr("href")),i=g.attr("data-container-id")?g.attr("data-container-id"):h,j=a("#"+i);
                d(j);
                var k=function(h){
                    return h.which==2||h.metaKey?!0:(j=a("#"+i),j.length==0?!0:(d(f),c.removeClass("selected"),f=e(j),c=g.addClass("selected"),"replaceState"in window.history&&h!="stop-url-change"&&window.history.replaceState(null,document.title,g.attr("href")),b.trigger("tabChanged",{
                        link:g
                    }),!1))
                    };
                    
                g.click(k),a('.js-secondary-hard-link[href="'+g.attr("href")+'"]').click(k),g.hasClass("selected")&&k("stop-url-change")
                })
            })
        },a.fn.hardTabs.defaults={
        optimizeLargeContents:!1
        },a.fn.hardTabs.findLastPathSegment=function(a){
        a==null&&(a=document.location.pathname),a=a.replace(/\?.+|#.+/,"");
        var b=a.match(/[^\/]+\/?$/);
        return b.length==0&&alert("Invalid tab link!"),b[0].replace("/","")
        }
    }(jQuery),function(){
    var a;
    a={},$(document).bind("keydown",function(b){
        var c;
        if($(b.target).is(":input"))return;
        if(c=a[b.hotkey])return c.apply(this,arguments)
            }),$.hotkeys=function(a){
        var b,c;
        for(b in a)c=a[b],$.hotkey(b,c);return this
        },$.hotkey=function(b,c){
        return a[b]=c,this
        }
    }.call(this),function(a){
    function b(a,b){
        var c=a.find("a");
        if(c.length>1){
            var d=c.filter(".selected"),e=c.get().indexOf(d.get(0));
            return e+=b,e>=c.length?e=0:e<0&&(e=c.length-1),d.removeClass("selected"),c.eq(e).addClass("selected"),!0
            }
        }
    a.fn.quicksearch=function(c){
    var d=a.extend({
        url:null,
        delay:150,
        spinner:null,
        insertSpinner:null,
        loading:a(".quicksearch-loading")
        },c);
    d.insertSpinner&&!d.spinner&&(d.spinner=a('<img src="'+GitHub.Ajax.spinner+'" alt="" class="spinner" />'));
    var e=function(a){
        return d.results.html(a).show()
        };
        
    return d.results.delegate("a","mouseover",function(b){
        var c=a(this);
        c.hasClass("selected")||(d.results.find("a.selected").removeClass("selected"),c.addClass("selected"))
        }),this.each(function(){
        function f(){
            d.insertSpinner&&(d.spinner.parent().length||d.insertSpinner.call(c,d.spinner),d.spinner.show()),c.trigger("quicksearch.loading"),d.loading&&e(d.loading.html())
            }
            function g(){
            d.insertSpinner&&d.spinner.hide(),c.trigger("quicksearch.loaded")
            }
            var c=a(this);
        c.autocompleteField({
            url:d.url||c.attr("data-url"),
            dataType:d.dataType,
            delay:d.delay,
            useCache:!0,
            minLength:2
        }).bind("keyup",function(a){
            a.which!=13&&c.val().length>=2&&d.results.is(":empty")&&f()
            }).bind("autocomplete:beforesend",function(a,b){
            f()
            }).bind("autocomplete:finish",function(a,b){
            e(b||{}),g(),$stats.increment("ui.quicksearch.results")
            }).bind("autocomplete:clear",function(a){
            d.results.html("").hide(),g()
            }).bind("focus",function(a){
            c.val()&&c.trigger("keyup")
            }).bind("blur",function(a){
            setTimeout(function(){
                c.trigger("autocomplete:clear")
                },150)
            }).bind("keydown",function(c){
            switch(c.hotkey){
                case"up":
                    if(b(d.results,-1))return!1;
                    break;
                case"down":
                    if(b(d.results,1))return!1;
                    break;
                case"esc":
                    return a(this).blur(),!1;
                case"enter":
                    var e,f=d.results.find("a.selected");
                    if(f.length)return a(this).blur(),f.hasClass("initial")?f.closest("form").submit():window.location=f.attr("href"),!1;
                    a(this).trigger("autocomplete:clear")
                    }
                })
    })
}
}(jQuery),function(a){
    a.smartPoller=function(b,c){
        a.isFunction(b)&&(c=b,b=1e3),function d(){
            setTimeout(function(){
                c.call(this,d)
                },b),b*=1.1
            }()
        }
    }(jQuery),jQuery.fn.tabs=function(){
    var a=function(a){
        return/#([a-z][\w.:-]*)$/i.exec(a)[1]
        },b=window.location.hash.substr(1);
    return this.each(function(){
        var c=null,d=null;
        $(this).find("li a").each(function(){
            var b=$("#"+a(this.href));
            if(b==[])return;
            b.hide(),$(this).click(function(){
                var a=$(this),e=function(){
                    d&&d.hide(),c&&c.removeClass("selected"),c=a.addClass("selected"),d=b.show().trigger("tabChanged",{
                        link:c
                    })
                    };
                    
                return a.attr("ajax")?(a.addClass("loading"),$.ajax({
                    url:a.attr("ajax"),
                    success:function(c){
                        b.html(c),a.removeClass("loading"),a[0].removeAttribute("ajax"),e()
                        },
                    failure:function(a){
                        alert("An error occured, please reload the page")
                        }
                    })):e(),!1
                }),$(this).hasClass("selected")&&$(this).click()
            }),$(this).find("li a[href='#"+b+"']").click(),d==null&&$($(this).find("li a")[0]).click()
        })
},function(a){
    a.fn.tipsy=function(b){
        b=a.extend({
            fade:!1,
            gravity:"n",
            title:"title",
            fallback:""
        },b||{});
        var c=null;
        a(this).hover(function(){
            a.data(this,"cancel.tipsy",!0);
            var c=a.data(this,"active.tipsy");
            c||(c=a('<div class="tipsy"><div class="tipsy-inner"/></div>'),c.css({
                position:"absolute",
                zIndex:1e5
            }),a.data(this,"active.tipsy",c)),(a(this).attr("title")||!a(this).attr("original-title"))&&a(this).attr("original-title",a(this).attr("title")||"").removeAttr("title");
            var d;
            typeof b.title=="string"?d=a(this).attr(b.title=="title"?"original-title":b.title):typeof b.title=="function"&&(d=b.title.call(this)),c.find(".tipsy-inner").html(d||b.fallback);
            var e=a.extend({},a(this).offset(),{
                width:this.offsetWidth,
                height:this.offsetHeight
                });
            c.get(0).className="tipsy",c.remove().css({
                top:0,
                left:0,
                visibility:"hidden",
                display:"block"
            }).appendTo(document.body);
            var f=c[0].offsetWidth,g=c[0].offsetHeight,h=typeof b.gravity=="function"?b.gravity.call(this):b.gravity;
            switch(h.charAt(0)){
                case"n":
                    c.css({
                    top:e.top+e.height,
                    left:e.left+e.width/2-f/2
                    }).addClass("tipsy-north");
                    break;
                case"s":
                    c.css({
                    top:e.top-g,
                    left:e.left+e.width/2-f/2
                    }).addClass("tipsy-south");
                    break;
                case"e":
                    c.css({
                    top:e.top+e.height/2-g/2,
                    left:e.left-f
                    }).addClass("tipsy-east");
                    break;
                case"w":
                    c.css({
                    top:e.top+e.height/2-g/2,
                    left:e.left+e.width
                    }).addClass("tipsy-west")
                    }
                    b.fade?c.css({
                opacity:0,
                display:"block",
                visibility:"visible"
            }).animate({
                opacity:.8
            }):c.css({
                visibility:"visible"
            })
            },function(){
            a.data(this,"cancel.tipsy",!1);
            var c=this;
            setTimeout(function(){
                if(a.data(this,"cancel.tipsy"))return;
                var d=a.data(c,"active.tipsy");
                d&&(b.fade?d.stop().fadeOut(function(){
                    a(this).remove()
                    }):d.remove())
                },100)
            }),a(this).bind("tipsy.reload",function(){
            a(this).attr("title")&&a(this).attr("original-title",a(this).attr("title")||"").removeAttr("title");
            var c;
            typeof b.title=="string"?c=a(this).attr(b.title=="title"?"original-title":b.title):typeof b.title=="function"&&(c=b.title.call(this));
            var d=a.data(this,"active.tipsy");
            d.find(".tipsy-inner").text(c||b.fallback);
            var e=a.extend({},a(this).offset(),{
                width:this.offsetWidth,
                height:this.offsetHeight
                }),f=d[0].offsetWidth,g=d[0].offsetHeight,h=typeof b.gravity=="function"?b.gravity.call(this):b.gravity;
            switch(h.charAt(0)){
                case"n":
                    d.css({
                    top:e.top+e.height,
                    left:e.left+e.width/2-f/2
                    });
                break;
                case"s":
                    d.css({
                    top:e.top-g,
                    left:e.left+e.width/2-f/2
                    });
                break;
                case"e":
                    d.css({
                    top:e.top+e.height/2-g/2,
                    left:e.left-f
                    });
                break;
                case"w":
                    d.css({
                    top:e.top+e.height/2-g/2,
                    left:e.left+e.width
                    })
                }
                })
    },a.fn.tipsy.autoNS=function(){
    return a(this).offset().top>a(document).scrollTop()+a(window).height()/2?"s":"n"
    }
}(jQuery),function(a){
    function e(a){
        return"tagName"in a?a:a.parentNode
        }
        try{
        window.document.createEvent("TouchEvent")
        }catch(b){
        return!1
        }
        var c={},d;
    a(document).ready(function(){
        a(document.body).bind("touchstart",function(a){
            var b=Date.now(),f=b-(c.last||b);
            c.target=e(a.originalEvent.touches[0].target),d&&clearTimeout(d),c.x1=a.originalEvent.touches[0].pageX,f>0&&f<=250&&(c.isDoubleTap=!0),c.last=b
            }).bind("touchmove",function(a){
            c.x2=a.originalEvent.touches[0].pageX
            }).bind("touchend",function(b){
            c.isDoubleTap?(a(c.target).trigger("doubleTap"),c={}):c.x2>0?(Math.abs(c.x1-c.x2)>30&&a(c.target).trigger("swipe")&&a(c.target).trigger("swipe"+(c.x1-c.x2>0?"Left":"Right")),c.x1=c.x2=c.last=0):"last"in c&&(d=setTimeout(function(){
                d=null,a(c.target).trigger("tap"),c={}
            },250))
        }).bind("touchcancel",function(){
        c={}
    })
    }),["swipe","swipeLeft","swipeRight","doubleTap","tap"].forEach(function(b){
    a.fn[b]=function(a){
        return this.bind(b,a)
        }
    })
}(jQuery),function(a){
    function o(){
        return window.DeviceMotionEvent!=undefined
        }
        function p(b){
        if((new Date).getTime()<d+c)return;
        if(o()){
            var e=b.accelerationIncludingGravity,f=e.x,g=e.y;
            l.xArray.length>=5&&l.xArray.shift(),l.yArray.length>=5&&l.yArray.shift(),l.xArray.push(f),l.yArray.push(g),l.xMotion=Math.round((n(l.xArray)-m(l.xArray))*1e3)/1e3,l.yMotion=Math.round((n(l.yArray)-m(l.yArray))*1e3)/1e3,(l.xMotion>1.5||l.yMotion>1.5)&&i!=10&&(i=10),l.xMotion>j||l.yMotion>j?k++:k=0,k>=5?(h=!0,a(document).unbind("mousemove.plax"),a(window).bind("devicemotion",q(b))):(h=!1,a(window).unbind("devicemotion"),a(document).bind("mousemove.plax",function(a){
                q(a)
                }))
            }
        }
    function q(a){
    if((new Date).getTime()<d+c)return;
    d=(new Date).getTime();
    var b=a.pageX,j=a.pageY;
    if(h==1){
        var k=window.orientation?(window.orientation+180)%360/90:2,l=a.accelerationIncludingGravity,m=k%2==0?-l.x:l.y,n=k%2==0?l.y:l.x;
        b=k>=2?m:-m,j=k>=2?n:-n,b=(b+i)/2,j=(j+i)/2,b<0?b=0:b>i&&(b=i),j<0?j=0:j>i&&(j=i)
        }
        var o=b/(h==1?i:f),p=j/(h==1?i:g),q,k;
    for(k=e.length;k--;)q=e[k],q.invert!=1?q.obj.css("left",q.startX+q.xRange*o).css("top",q.startY+q.yRange*p):q.obj.css("left",q.startX-q.xRange*o).css("top",q.startY-q.yRange*p)
        }
        var b=25,c=1/b*1e3,d=(new Date).getTime(),e=[],f=a(window).width(),g=a(window).height(),h=!1,i=1,j=.05,k=0,l={
    xArray:[0,0,0,0,0],
    yArray:[0,0,0,0,0],
    xMotion:0,
    yMotion:0
};

a(window).resize(function(){
    f=a(window).width(),g=a(window).height()
    }),a.fn.plaxify=function(b){
    return this.each(function(){
        var c={
            xRange:0,
            yRange:0,
            invert:!1
            };
            
        for(var d in b)c[d]==0&&(c[d]=b[d]);c.obj=a(this),c.startX=this.offsetLeft,c.startY=this.offsetTop,c.invert==0?(c.startX-=Math.floor(c.xRange/2),c.startY-=Math.floor(c.yRange/2)):(c.startX+=Math.floor(c.xRange/2),c.startY+=Math.floor(c.yRange/2)),e.push(c)
        })
    };
    
var m=function(a){
    return Math.min.apply({},a)
    },n=function(a){
    return Math.max.apply({},a)
    };
    
a.plax={
    enable:function(){
        a(document).bind("mousemove.plax",function(a){
            q(a)
            }),o()&&(window.ondevicemotion=function(a){
            p(a)
            })
        },
    disable:function(){
        a(document).unbind("mousemove.plax"),window.ondevicemotion=undefined
        }
    },typeof ender!="undefined"&&a.ender(a.fn,!0)
}(function(){
    return typeof jQuery!="undefined"?jQuery:ender
    }()),function(){
    $(document).on("ajaxError","[data-remote]",function(a,b,c,d){
        if(a.isDefaultPrevented())return;
        return debug("AJAX Error",d),$(document.documentElement).addClass("ajax-error")
        }),$(document).on("ajaxBeforeSend","[data-remote]",function(a,b,c){
        return $(document.documentElement).removeClass("ajax-error")
        }),$(document).on("click",".ajax-error-dismiss",function(){
        return $(document.documentElement).removeClass("ajax-error"),!1
        })
    }.call(this),function(){
    $(document).on("ajaxSend","[data-remote]",function(a){
        if(a.isDefaultPrevented())return;
        return $(this).addClass("loading"),$(document.documentElement).addClass("ajax-loading")
        }),$(document).on("ajaxComplete","[data-remote]",function(){
        return $(document.documentElement).removeClass("ajax-loading"),$(this).removeClass("loading")
        })
    }.call(this),function(){
    $.fn.overflowContainer=function(){
        var a,b;
        if(!(a=this[0]))return;
        while(a!==document.body){
            b=$(a).css("overflow-y");
            if(b==="auto"||b==="scroll")break;
            a=$(a).offsetParent()[0]
            }
            return $(a)
        }
    }.call(this),function(){
    $.fn.positionedOffset=function(a){
        var b,c,d,e,f,g,h;
        a==null&&(a=document.body);
        if(!(c=this[0]))return null;
        g=0,e=0,d=c.offsetHeight,h=c.offsetWidth;
        while(!!c&&c!==a)g+=c.offsetTop||0,e+=c.offsetLeft||0,c=c.offsetParent;
        return b=a.scrollHeight-(g+d),f=a.scrollWidth-(e+h),{
            top:g,
            left:e,
            bottom:b,
            right:f
        }
    }
}.call(this),function(){
    $.fn.overflowOffset=function(a){
        var b,c,d,e,f,g;
        return(c=this[0])?(e=$(c).positionedOffset(a),g=e.top-a.scrollTop,d=e.left-a.scrollLeft,b=a.offsetHeight-(g+c.offsetHeight),f=a.offsetWidth-(d+c.offsetWidth),{
            top:g,
            left:d,
            bottom:b,
            right:f
        }):null
        }
    }.call(this),function(){
    var a,b=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        };
    
a=function(){
    function a(){
        this.onItemNext=b(this.onItemNext,this),this.onFocus=b(this.onFocus,this),this.onDeactivate=b(this.onDeactivate,this),this.onActivate=b(this.onActivate,this),this.onClick=b(this.onClick,this),this.onItemMouseOver=b(this.onItemMouseOver,this),this.onContainerKeyDown=b(this.onContainerKeyDown,this),this.onItemKeyDown=b(this.onItemKeyDown,this),this.onKeyDown=b(this.onKeyDown,this),this.onContainerMouseOver=b(this.onContainerMouseOver,this),this.onPageUpdate=b(this.onPageUpdate,this),$(window).on("pageUpdate",this.onPageUpdate),$(document).on("keydown",this.onKeyDown),$(document).on("click","#js-active-navigation-container .js-navigation-target",this.onClick),$(document).on("navigation:activate",".js-navigation-container",this.onActivate),$(document).on("navigation:deactivate",".js-navigation-container",this.onDeactivate),$(document).on("navigation:focus",".js-navigation-container",this.onFocus),$(document).on("navigation:keydown","#js-active-navigation-container .js-navigation-item",this.onItemKeyDown),$(document).on("navigation:keydown","#js-active-navigation-container",this.onContainerKeyDown),$(document).on("navigation:mouseover","#js-active-navigation-container .js-navigation-item",this.onItemMouseOver),$(document).on("navigation:next","#js-active-navigation-container .js-navigation-item",this.onItemNext)
        }
        return a.name="NavigationBehavior",a.prototype.ctrlBindings=navigator.userAgent.match(/Macintosh/),a.prototype.onPageUpdate=function(a){
        return $(a.target).find(".js-navigation-container").off("mouseover.navigation").on("mouseover.navigation",this.onContainerMouseOver)
        },a.prototype.onContainerMouseOver=function(a){
        if(window.mouseHidden)return;
        $(a.target).trigger("navigation:mouseover")
        },a.prototype.onKeyDown=function(a){
        var b,c,d;
        if(!(b=this.getActiveContainer()))return;
        if($(a.target).is(":input")&&!$(a.target).is(".js-navigation-enable"))return;
        return c=$.Event("navigation:keydown"),d=$(b).find(".js-navigation-item.navigation-focus")[0]||b,c.hotkey=a.hotkey,$(d).trigger(c,a),c.result
        },a.prototype.onItemKeyDown=function(a,b){
        var c;
        c=a.currentTarget;
        if($(b.target).is(":input")){
            if(this.ctrlBindings)switch(a.hotkey){
                case"ctrl+n":
                    return this.cursorDown(c);
                case"ctrl+p":
                    return this.cursorUp(c)
                    }
                    switch(a.hotkey){
                case"up":
                    return this.cursorUp(c);
                case"down":
                    return this.cursorDown(c);
                case"enter":
                    return this.open(c)
                    }
                }else{
        if(this.ctrlBindings)switch(a.hotkey){
            case"ctrl+n":
                return this.cursorDown(c);
            case"ctrl+p":
                return this.cursorUp(c);
            case"alt+v":
                return this.pageUp(c);
            case"ctrl+v":
                return this.pageDown(c)
                }
                switch(a.hotkey){
            case"up":
                return this.cursorUp(c);
            case"down":
                return this.cursorDown(c);
            case"j":
                return this.cursorDown(c);
            case"k":
                return this.cursorUp(c);
            case"o":
                return this.open(c);
            case"enter":
                return this.open(c)
                }
            }
},a.prototype.onContainerKeyDown=function(a,b){
    var c;
    c=this.getItems()[0];
    if($(b.target).is(":input")){
        if(this.ctrlBindings)switch(a.hotkey){
            case"ctrl+n":
                return this.focusItem(c)
                }
                switch(a.hotkey){
            case"down":
                return this.focusItem(c)
                }
            }else{
    if(this.ctrlBindings)switch(a.hotkey){
        case"ctrl+n":
            return this.focusItem(c);
        case"ctrl+v":
            return this.focusItem(c)
            }
            switch(a.hotkey){
        case"down":
            return this.focusItem(c);
        case"j":
            return this.focusItem(c)
            }
        }
},a.prototype.open=function(a){
    var b;
    return(b=$(a).find(".js-navigation-open").attr("href"))?window.location=b:$(a).trigger("navigation:open"),!1
    },a.prototype.onItemMouseOver=function(a){
    this.focusItem(a.currentTarget)
    },a.prototype.onClick=function(a){
    if(a.altKey||a.ctrlKey||a.metaKey)return;
    if($(a.target).is("a[href]"))return;
    return this.open(a.currentTarget)
    },a.prototype.onActivate=function(a){
    this.activate(a.currentTarget)
    },a.prototype.onDeactivate=function(a){
    this.deactivate(a.currentTarget)
    },a.prototype.onFocus=function(a){
    var b,c,d;
    b=a.currentTarget,c=this.getItems()[0],d=$(a.target).closest(".js-navigation-item")[0]||c,this.activate(b),this.focusItem(d),d&&this.scrollPageTo($(d).overflowContainer()[0],d)
    },a.prototype.activate=function(a){
    var b;
    b=this.getActiveContainer();
    if(a!==b)return b&&(b.id=null),a.id="js-active-navigation-container"
        },a.prototype.deactivate=function(a){
    return a.id=null
    },a.prototype.onItemNext=function(a){
    this.cursorDown(a.currentTarget)
    },a.prototype.cursorUp=function(a){
    var b,c,d,e;
    d=this.getItems(),c=$.inArray(a,d);
    if(e=d[c-1])this.focusItem(e),b=$(e).overflowContainer
        ()[0],this.getScrollStyle()==="page"?this.scrollPageTo(b,e):this.scrollItemTo(b,e);
    return!1
    },a.prototype.cursorDown=function(a){
    var b,c,d,e;
    d=this.getItems(),c=$.inArray(a,d);
    if(e=d[c+1])this.focusItem(e),b=$(e).overflowContainer()[0],this.getScrollStyle()==="page"?this.scrollPageTo(b,e):this.scrollItemTo(b,e);
    return!1
    },a.prototype.pageUp=function(a){
    var b,c,d,e;
    d=this.getItems(),c=$.inArray(a,d),b=$(a).overflowContainer()[0];
    while((e=d[c-1])&&$(e).overflowOffset(b).top>=0)c--;
    if(e)return this.focusItem(e),this.scrollPageTo(b,e)
        },a.prototype.pageDown=function(a){
    var b,c,d,e;
    d=this.getItems(),c=$.inArray(a,d),b=$(a).overflowContainer()[0];
    while((e=d[c+1])&&$(e).overflowOffset(b).bottom>=0)c++;
    return e&&(this.focusItem(e),this.scrollPageTo(b,e)),!1
    },a.prototype.focusItem=function(a){
    return $("#js-active-navigation-container .js-navigation-item.navigation-focus").removeClass("navigation-focus"),$(a).addClass("navigation-focus"),!1
    },a.prototype.scrollPageTo=function(a,b){
    var c,d,e;
    d=$(b).positionedOffset(a),c=$(b).overflowOffset(a);
    if(c.bottom<=0)return $(a).animate({
        scrollTop:d.top-30
        },200);
    if(c.top<=0)return e=a.scrollHeight-(d.bottom+a.offsetHeight),$(a).animate({
        scrollTop:e+30
        },200)
    },a.prototype.scrollItemTo=function(a,b){
    var c,d,e;
    d=$(b).positionedOffset(a),c=$(b).overflowOffset(a);
    if(c.bottom<=0)return e=a.scrollHeight-(d.bottom+a.offsetHeight),$(a).scrollTop(e);
    if(c.top<=0)return $(a).scrollTop(d.top)
        },a.prototype.getScrollStyle=function(){
    var a;
    return(a=$("#js-active-navigation-container").attr("data-navigation-scroll"))!=null?a:"item"
    },a.prototype.getItems=function(){
    return $("#js-active-navigation-container .js-navigation-item:visible")
    },a.prototype.getActiveContainer=function(){
    return document.getElementById("js-active-navigation-container")
    },a
}(),new a
}.call(this),function(){
    var a,b=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        };
    
a=function(){
    function a(){
        this.onNavigationOpen=b(this.onNavigationOpen,this),this.onNavigationKeyDown=b(this.onNavigationKeyDown,this),this.onClick=b(this.onClick,this),this.onResultsChange=b(this.onResultsChange,this),this.onInputChange=b(this.onInputChange,this),this.onResultsMouseDown=b(this.onResultsMouseDown,this),this.onInputBlur=b(this.onInputBlur,this),this.onInputFocus=b(this.onInputFocus,this),$(document).on("focusin","input[data-autocomplete]",this.onInputFocus),$(document).on("textchange","input[data-autocomplete]",this.onInputChange),this.focusedInput=this.focusedResults=null,this.mouseDown=!1
        }
        return a.name="Autocomplete",a.prototype.bindEvents=function(a,b){
        return $(a).on("blur",this.onInputBlur),$(b).on("mousedown",this.onResultsMouseDown),$(b).on("autocomplete:change",this.onResultsChange),$(b).on("click","[data-autocomplete-value]",this.onClick),$(b).on("navigation:open","[data-autocomplete-value]",this.onNavigationOpen),$(b).on("navigation:keydown","[data-autocomplete-value]",this.onNavigationKeyDown)
        },a.prototype.unbindEvents=function(a,b){
        return $(a).off("blur",this.onInputBlur),$(b).off("mousedown",this.onResultsMouseDown),$(b).off("autocomplete:change",this.onResultsChange),$(b).off("click","[data-autocomplete-value]",this.onClick),$(b).off("navigation:open","[data-autocomplete-value]",this.onNavigationOpen),$(b).off("navigation:keydown","[data-autocomplete-value]",this.onNavigationKeyDown)
        },a.prototype.onInputFocus=function(a){
        var b,c;
        b=a.currentTarget,c=document.getElementById($(b).attr("data-autocomplete")),this.focusedInput=b,this.focusedResults=c,this.bindEvents(b,c),$(b).trigger("autocomplete:focus"),$(b).trigger("autocomplete:search",[$(b).val()])
        },a.prototype.onInputBlur=function(a){
        var b,c;
        b=a.currentTarget,c=this.focusedResults,this.mouseDown||(this.hideResults(),this.inputValue=null,this.focusedInput=this.focusedResults=null,this.unbindEvents(b,c),$(b).trigger("autocomplete:blur"))
        },a.prototype.onResultsMouseDown=function(a){
        var b,c=this;
        this.mouseDown=!0,b=function(){
            return c.mouseDown=!1,$(document).off("mouseup",b)
            },$(document).on("mouseup",b)
        },a.prototype.onInputChange=function(a,b){
        var c;
        c=a.currentTarget,this.inputValue!==b&&($(c).removeAttr("data-autocompleted"),$(c).trigger("autocomplete:autocompleted:changed")),$(c).trigger("autocomplete:change",[b]),$(c).trigger("autocomplete:search",[b])
        },a.prototype.onResultsChange=function(a){
        var b,c;
        c=$(this.focusedInput).val(),b=$(this.focusedResults).find("[data-autocomplete-value]"),b.length===0?this.hideResults():this.inputValue!==c&&(this.inputValue=c,this.showResults(),$(this.focusedInput).is("[data-autocomplete-autofocus]")&&$(this.focusedResults).find("ul").trigger("navigation:focus"))
        },a.prototype.onClick=function(a){
        return this.onNavigationOpen(a),!1
        },a.prototype.onNavigationKeyDown=function(a){
        switch(a.hotkey){
            case"tab":
                return this.onNavigationOpen(a),!1;
            case"esc":
                return this.hideResults(),!1
                }
            },a.prototype.onNavigationOpen=function(a){
    var b,c;
    b=a.currentTarget,c=$(b).attr("data-autocomplete-value"),this.inputValue=c,$(this.focusedInput).val(c),$(this.focusedInput).attr("data-autocompleted",c),$(this.focusedInput).trigger("autocomplete:autocompleted:changed",[c]),$(this.focusedInput).trigger("autocomplete:result",[c]),$(b).removeClass("active"),this.hideResults()
    },a.prototype.showResults=function(a,b){
    var c,d,e,f,g;
    a==null&&(a=this.focusedInput),b==null&&(b=this.focusedResults);
    if($(b).is(":visible"))return;
    return g=$(a).offset(),e=g.top,d=g.left,c=e+$(a).innerHeight(),f=$(a).innerWidth(),$(b).css({
        display:"block",
        position:"absolute",
        width:f+2
        }),$(b).offset({
        top:c+5,
        left:d+1
        }),$(a).addClass("js-navigation-enable"),$(b).find("ul").trigger("navigation:activate"),$(b).show()
    },a.prototype.hideResults=function(a,b){
    a==null&&(a=this.focusedInput),b==null&&(b=this.focusedResults);
    if(!$(b).is(":visible"))return;
    return $(a).removeClass("js-navigation-enable"),$(b).find("ul").trigger("navigation:deactivate"),$(b).hide()
    },a
}(),new a
}.call(this),function(){
    GitHub.ClippableBehavior=function(){
        function a(a){
            var b=this;
            this.element=$(a);
            if(!this.detectFlashSupport())return;
            this.initializeBridge(),this.element.on("mouseover",function(){
                return b.handleHover()
                })
            }
            return a.name="ClippableBehavior",a.prototype.handleHover=function(){
            return this.htmlBridge.text(this.element.attr("data-clipboard-text")),this.flashBridge.attr("title",this.element.attr("data-copy-hint")),this.flashBridge.attr("data-copy-hint",this.element.attr("data-copy-hint")),this.flashBridge.attr("data-copied-hint",this.element.attr("data-copied-hint")),this.flashBridge.css({
                top:this.element.offset().top+"px",
                left:this.element.offset().left+"px"
                })
            },a.prototype.initializeBridge=function(){
            var a;
            this.htmlBridge=$("#global-clippy-instance"),this.htmlBridge.length===0&&(this.htmlBridge=$("<div></div>").attr("id","global-clippy-instance").hide(),$(document.body).append(this.htmlBridge)),this.flashBridge=$("#global-clippy-flash-bug");
            if(this.flashBridge.length===0)return a='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-clippy-object-tag" width="100%" height="100%">\n  <param name="movie" value="/flash/clippy.swf"/>\n  <param name="FlashVars" value="id=global-clippy-instance">\n  <param name="allowScriptAccess" value="always" />\n  <param name="scale" value="exactfit">\n\n  <embed src="/flash/clippy.swf"\n    width="100%" height="100%"\n    name="global-clippy-object-tag"\n    FlashVars="id=global-clippy-instance"\n    allowScriptAccess="always"\n    scale="exactfit">\n  </embed>\n\n</object>',this.flashBridge=$("<div>"+a+"</div>").attr("id","global-clippy-flash-bug"),this.flashBridge.css({
                position:"absolute",
                left:"-9999px",
                top:"-9999px",
                "z-index":"9998",
                width:"14px",
                height:"14px"
            }),this.flashBridge.attr("title","copy to clipboard"),this.flashBridge.attr("data-copied-title","copied!"),this.flashBridge.tipsy(),this.flashBridge.on("mouseover",function(){
                var a;
                return a=$(this),a.attr("title",a.attr("data-copy-hint")),$(this).trigger("tipsy.reload")
                }),this.flashBridge.on("mouseout",function(){
                return $(this).css({
                    left:"-9999px",
                    top:"-9999px"
                })
                }),this.flashBridge.on("clippable:copied",function(){
                return GitHub.ClippableBehavior.handleCopied(),$stats.increment("ui.clippy.copied")
                }),$stats.increment("ui.clippy.loaded"),$(document.body).append(this.flashBridge)
                },a.prototype.detectFlashSupport=function(){
            var a;
            a=!1;
            try{
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)
                }catch(b){
                navigator.mimeTypes["application/x-shockwave-flash"]!==void 0&&(a=!0)
                }
                return a||this.element.hide(),a
            },a
        }(),GitHub.ClippableBehavior.handleCopied=function(){
        var a;
        return a=$("#global-clippy-flash-bug"),a.attr("title",a.attr("data-copied-hint")),a.trigger("tipsy.reload")
        },window.clippyCopiedCallback=function(){
        return $("#global-clippy-flash-bug").trigger("clippable:copied")
        },$.pageUpdate(function(){
        return $(this).find(".js-clippy").each(function(){
            return new GitHub.ClippableBehavior(this)
            })
        })
    }.call(this),String.prototype.score=function(a,b){
    var c=0,d=a.length,e=this,f=e.length,g,h,i=1,j;
    if(e==a)return 1;
    for(var k=0,l,m,n,o,p,q;k<d;++k){
        n=a[k],o=e.indexOf(n.toLowerCase()),p=e.indexOf(n.toUpperCase()),q=Math.min(o,p),m=q>-1?q:Math.max(o,p);
        if(m===-1){
            if(b){
                i+=1-b;
                continue
            }
            return 0
            }
            l=.1,e[m]===n&&(l+=.1),m===0?(l+=.6,k===0&&(g=1)):e.charAt(m-1)===" "&&(l+=.8),e=e.substring(m+1,f),c+=l
        }
        return h=c/d,j=(h*(d/f)+h)/2,j/=i,g&&j+.15<1&&(j+=.15),j
    },function(){
    var a,b,c,d;
    $(document).on("focusin","input[data-filterable]",function(){
        var b,c,d,e,f,g;
        e=$(this).attr("data-filterable"),d={
            fuzzy:!!e.match("fuzzy")
            },c=$("[data-filterable-for="+this.id+"]");
        for(f=0,g=c.length;f<g;f++){
            b=c[f],b=$(b);
            if(b.data("filterable-original-order"))continue;
            b.data("filterable-original-order",b.children().slice(0))
            }
            return $(this).on("textchange.filterable",function(b,e){
            var f,g,h,i;
            g=$.trim(e.toLowerCase());
            for(h=0,i=c.length;h<i;h++)f=c[h],a($(f),g,d)
                }),$(this).on("blur.filterable",function(){
            return $(this).off(".filterable")
            })
        }),a=function(a,c,e){
        var f,g;
        f=a.children(":not(.js-not-filterable)"),c?(g=e.fuzzy?b(a,f,c):d(a,f,c),a.addClass("filterable-active"),a.toggleClass("filterable-empty",g===0)):(a.removeClass("filterable-active"),a.removeClass("filterable-empty"),f.show(),a.append(a.data("filterable-original-order"))),a.trigger("filterable:change")
        },c=function(a){
        return $.trim(a.textContent.toLowerCase())
        },d=function(a,b,d){
        var e,f,g,h;
        f=0;
        for(g=0,h=b.length;g<h;g++)e=b[g],c(e).indexOf(d)===0?(f++,e.style.display="block"):e.style.display="none";
        return f
        },b=function(a,b,d){
        var e,f,g,h,i;
        g=0;
        for(h=0,i=b.length;h<i;h++)e=b[h],f=c(e).score(d),e.filterableScore=f,f>0?(g++,e.style.display="block"):e.style.display="none";
        return b.sort(function(a,b){
            var c,d;
            return c=a.filterableScore,d=b.filterableScore,c>d?-1:c<d?1:0
            }),a.append(b),g
        }
    }.call(this),function(){
    var a,b=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        };
    
a=function(){
    function a(a){
        this.container=a,this.onTabClick=b(this.onTabClick,this),this.onFilterChange=b(this.onFilterChange,this),this.onNavigationOpen=b(this.onNavigationOpen,this),this.onDeactivate=b(this.onDeactivate,this),this.onActivated=b(this.onActivated,this),this.pane=this.container.find(".pane-selector"),this.list=this.container.find(".js-navigation-container"),this.filter=this.container.find(".filterbar input"),this.items=this.list.find(".js-navigation-item"),this.container.on("menu:activated."+this.namespace,this.onActivated),this.container.on("menu:deactivate."+this.namespace,this.onDeactivate),this.container.on("textchange."+this.namespace,".filterbar input",this.onFilterChange),this.container.on("navigation:open."+this.namespace,".js-navigation-item",this.onNavigationOpen),this.container.on("click."+this.namespace,".tabs > li > a",this.onTabClick),this.list.trigger("navigation:activate")
        }
        return a.name="ContextMenu",a.prototype.namespace="contextMenu",a.prototype.onActivated=function(){
        return this.filter.focus()
        },a.prototype.onDeactivate=function(){
        return this.filter.val(""),this.reset(),this.container.off("."+this.namespace),this.container=this.pane=this.list=this.filter=this.items=null
        },a.prototype.onNavigationOpen=function(a){
        var b,c;
        return b=$(a.currentTarget),this.items.filter(".selected").removeClass("selected"),b.addClass("selected"),b.find("input[type=radio]").prop("checked",!0).change(),c=b.find(".js-context-button-text"),c[0]&&this.container.find(".js-context-button").html(c.html()),this.pane.menu("deactivate"),!1
        },a.prototype.onFilterChange=function(a,b){
        this.reset()
        },a.prototype.onTabClick=function(a){
        var b;
        this.reset(),this.container.find(".tabs > li > a").removeClass("selected"),$(a.currentTarget).addClass("selected");
        if(b=$(a.currentTarget).attr("data-filter"))this.container.find(".js-filter-tab").hide(),this.container.find(".js-filter-"+b).show();
        return!1
        },a.prototype.reset=function(){
        return this.items.removeClass("navigation-focus"),this.list.trigger("navigation:focus")
        },a
    }(),$(document).on("menu:activate",".js-context-menu",function(){
    return new a($(this))
    })
}.call(this),function(){
    GitHub.DangerousConfirmationBehavior=function(){
        function a(a){
            var b=this;
            this.element=$(a);
            if(!this.element.length)return;
            this.input=this.element.find(".confirm-input"),this.button=this.element.find(".confirm-button").attr("disabled","disabled"),this.confirmations=this.input.attr("data-confirm").toLowerCase().split(","),this.input.on("keyup",function(){
                return b.update()
                })
            }
            return a.name="DangerousConfirmationBehavior",a.prototype.update=function(){
            var a,b,c,d,e;
            this.button.attr("disabled","disabled"),d=this.confirmations,e=[];
            for(b=0,c=d.length;b<c;b++)a=d[b],this.input.val().toLowerCase()===a.toLowerCase()?e.push(this.button.attr("disabled",!1)):e.push(void 0);
            return e
            },a
        }(),$.pageUpdate(function(){
        return $(this).find(".js-dangerous-confirmation").each(function(){
            return new GitHub.DangerousConfirmationBehavior(this)
            })
        })
    }.call(this),function(){
    var a=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        };
    
GitHub.DetailsBehavior=function(){
    function b(){
        this.onToggle=a(this.onToggle,this),this.onClick=a(this.onClick,this),$(document).on("click",".js-details-container .js-details-target",this.onClick),$(document).on("toggle.details",".js-details-container",this.onToggle)
        }
        return b.name="DetailsBehavior",b.prototype.onClick=function(a){
        return $(a.target).trigger("toggle.details"),!1
        },b.prototype.onToggle=function(a){
        return this.toggle(a.currentTarget)
        },b.prototype.toggle=function(a){
        return $(a).toggleClass("open")
        },b
    }(),new GitHub.DetailsBehavior
}.call(this),function(a){
    function b(b,c,d){
        d=g(c,d);
        var e=b.currentTarget;
        if(e.tagName.toUpperCase()!=="A")throw"$.fn.pjax or $.pjax.click requires an anchor element";
        if(b.which>1||b.metaKey||b.ctrlKey)return;
        if(location.protocol!==e.protocol||location.host!==e.host)return;
        if(e.hash&&e.href.replace(e.hash,"")===location.href.replace(location.hash,""))return;
        var f={
            url:e.href,
            container:a(e).attr("data-pjax"),
            target:e,
            clickedElement:a(e),
            fragment:null
        };
        
        a.pjax(a.extend({},f,d)),b.preventDefault()
        }
        function d(){
        return(new Date).getTime()
        }
        function e(a){
        return a.replace(/\?_pjax=[^&]+&?/,"?").replace(/_pjax=[^&]+&?/,"").replace(/[\?&]$/,"")
        }
        function f(a){
        var b=document.createElement("a");
        return b.href=a,b
        }
        function g(b,c){
        return b&&c?c.container=b:a.isPlainObject(b)?c=b:c={
            container:b
        },c.container&&(c.container=h(c.container)),c
        }
        function h(b){
        b=a(b);
        if(!b.length)throw"no pjax container for "+b.selector;
        if(b.selector!==""&&b.context===document)return b;
        if(b.attr("id"))return a("#"+b.attr("id"));
        throw"cant get selector for pjax container!"
        }
        function i(b,c){
        var d=a();
        return b.each(function(){
            a(this).is(c)&&(d=d.add(this)),d=d.add(c,this)
            }),d
        }
        function j(b,c,d){
        var f={};
        
        f.url=e(c.getResponseHeader("X-PJAX-URL")||d.url);
        var g=a(b);
        if(g.length===0)return f;
        f.title=i(g,"title").last().text();
        if(d.fragment){
            var h=i(g,d.fragment).first();
            h.length&&(f.contents=h.contents(),f.title||(f.title=h.attr("title")||h.data("title")))
            }else/<html/i.test(b)||(f.contents=g);
        return f.contents&&(f.contents=f.contents.not("title"),f.contents.find("title").remove()),f.title&&(f.title=a.trim(f.title)),f
        }
        function k(){
        this.mapping={},this.forwardStack=[],this.backStack=[]
        }
        a.fn.pjax=function(a,c){
        return this.live("click.pjax",function(d){
            b(d,a,c)
            })
        };
        
    var c=a.pjax=function(b){
        function p(b,c){
            var d=a.Event(b,{
                relatedTarget:e
            });
            return o.trigger(d,c),!d.isDefaultPrevented()
            }
            b=a.extend(!0,{},a.ajaxSettings,c.defaults,b),a.isFunction(b.url)&&(b.url=b.url());
        var e=b.target;
        !e&&b.clickedElement&&(e=b.clickedElement[0]);
        var g=f(b.url).hash,i=b.beforeSend,k=b.complete,m=b.success,n=b.error,o=b.context=h(b.container);
        b.data||(b.data={}),b.data._pjax=o.selector;
        var q;
        b.beforeSend=function(a,d){
            d.timeout>0&&(q=setTimeout(function(){
                p("pjax:timeout",[a,b])&&a.abort("timeout")
                },d.timeout),d.timeout=0),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Container",o.selector);
            var e;
            if(i){
                e=i.apply(this,arguments);
                if(e===!1)return!1
                    }
                    if(!p("pjax:beforeSend",[a,d]))return!1;
            b.push&&!b.replace&&(l.push(c.state.id,o.clone(!0,!0).contents()),window.history.pushState(null,"",b.url)),p("pjax:start",[a,b]),p("start.pjax",[a,b]),p("pjax:send",[a,d])
            },b.complete=function(a,c){
            q&&clearTimeout(q),k&&k.apply(this,arguments),p("pjax:complete",[a,c,b]),p("pjax:end",[a,b]),p("end.pjax",[a,b])
            },b.error=function(a,c,d){
            var e=j("",a,b);
            n&&n.apply(this,arguments);
            var f=p("pjax:error",[a,c,d,b]);
            c!=="abort"&&f&&(window.location=e.url)
            },b.success=function(e,f,h){
            var i=j(e,h,b);
            if(!i.contents){
                window.location=i.url;
                return
            }
            c.state={
                id:b.id||d(),
                url:i.url,
                title:i.title,
                container:o.selector,
                fragment:b.fragment,
                timeout:b.timeout
                },(b.push||b.replace)&&window.history.replaceState(c.state,i.title,i.url),i.title&&(document.title=i.title),o.html(i.contents),typeof b.scrollTo=="number"&&a(window).scrollTop(b.scrollTo),(b.replace||b.push)&&window._gaq&&_gaq.push(["_trackPageview"]),g!==""&&(window.location.href=g),m&&m.apply(this,arguments),p("pjax:success",[e,f,h,b])
            },c.state||(c.state={
            id:d(),
            url:window.location.href,
            title:document.title,
            container:o.selector,
            fragment:b.fragment,
            timeout:b.timeout
            },window.history.replaceState(c.state,document.title));
        var r=c.xhr;
        return r&&r.readyState<4&&(r.onreadystatechange=a.noop,r.abort()),c.options=b,c.xhr=a.ajax(b),a(document).trigger("pjax",[c.xhr,b]),c.xhr
        };
        
    c.reload=function(b,c){
        var d={
            url:window.location.href,
            push:!1,
            replace:!0,
            scrollTo:!1
            };
            
        return a.pjax(a.extend(d,g(b,c)))
        },c.defaults={
        timeout:650,
        push:!0,
        replace:!1,
        type:"GET",
        dataType:"html",
        scrollTo:0,
        maxCacheLength:20
    },k.prototype.push=function(a,b){
        this.mapping[a]=b,this.backStack.push(a);
        while(this.forwardStack.length)delete this.mapping[this.forwardStack.shift()];
        while(this.backStack.length>c.defaults.maxCacheLength)delete this.mapping[this.backStack.shift()]
    },k.prototype.get=function(a){
        return this.mapping[a]
        },k.prototype.forward=function(a,b){
        this.mapping[a]=b,this.backStack.push(a),(a=this.forwardStack.pop())&&delete this.mapping[a]
    },k.prototype.back=function(a,b){
        this.mapping[a]=b,this.forwardStack.push(a),(a=this.backStack.pop())&&delete this.mapping[a]
    };
    
    var l=new k;
    c.click=b;
    var m="state"in window.history,n=location.href;
    a(window).bind("popstate",function(b){
        var d=!m&&location.href==n;
        m=!0;
        if(d)return;
        var e=b.state;
        if(e&&e.container){
            var f=a(e.container);
            if(f.length){
                var g=l.get(e.id);
                if(c.state){
                    var h=c.state.id<e.id?"forward":"back";
                    l[h](c.state.id,f.clone(!0,!0).contents())
                    }
                    var i=a.Event("pjax:popstate",{
                    state:e,
                    direction:h
                });
                f.trigger(i);
                var j={
                    id:e.id,
                    url:e.url,
                    container:f,
                    push:!1,
                    fragment:e.fragment,
                    timeout:e.timeout,
                    scrollTo:!1
                    };
                    
                g?(a(document).trigger("pjax",[null,j]),f.trigger("pjax:start",[null,j]),f.trigger("start.pjax",[null,j]),e.title&&(document.title=e.title),f.html(g),c.state=e,f.trigger("pjax:end",[null,j]),f.trigger("end.pjax",[null,j])):a.pjax(j),f[0].offsetHeight
                }else window.location=location.href
                }
            }),a.inArray("state",a.event.props)<0&&a.event.props.push("state"),a.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),a.support.pjax||(a.pjax=function(b){
    var c=a.isFunction(b.url)?b.url():b.url,d=b.type?b.type.toUpperCase():"GET",e=a("<form>",{
        method:d==="GET"?"GET":"POST",
        action:c,
        style:"display:none"
    });
    d!=="GET"&&d!=="POST"&&e.append(a("<input>",{
        type:"hidden",
        name:"_method",
        value:d.toLowerCase()
        }));
    var f=b.data;
    if(typeof f=="string")a.each(f.split("&"),function(b,c){
        var d=c.split("=");
        e.append(a("<input>",{
            type:"hidden",
            name:d[0],
            value:d[1]
            }))
        });
    else if(typeof f=="object")for(key in f)e.append(a("<input>",{
        type:"hidden",
        name:key,
        value:f[key]
        }));a(document.body).append(e),e.submit()
    },a.pjax.click=a.noop,a.pjax.reload=window.location.reload,a.fn.pjax=function(){
    return this
    })
}(jQuery),function(){
    $.support.pjax&&($.pjax.defaults.timeout=GitHub.debug?!1:1e3,$(document).on("click","[data-pjax] a, a[data-pjax]",function(a){
        var b,c,d;
        $(this).is("[data-pjax]")?c=this:c=$(this).closest("[data-pjax]")[0],$(c).is("[data-pjax-preserve-scroll]")?d=!1:d=0;
        if(b=$(this).closest("[data-pjax-container]")[0])return $.pjax.click(a,{
            container:b,
            scrollTo:d
        })
        }))
    }.call(this),function(){
    $.support.pjax&&$(document).on("click",".js-selectable-list .js-selectable-item",function(a){
        if(!a.isDefaultPrevented())return;
        return $(this).closest(".js-selectable-list").find(".js-selectable-item.selected").removeClass("selected"),$(this).toggleClass("selected")
        })
    }.call(this),function(){
    $.support.pjax&&$(document).on("click",".js-sortable-header",function(a){
        var b;
        if(!a.isDefaultPrevented())return;
        return b=$(this).closest("li"),b.is(".asc, .desc")?b.toggleClass("asc desc"):(b.siblings(".asc, .desc").removeClass("asc desc"),b.addClass("desc"))
        })
    }.call(this),function(){
    var a,b=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        };
    
a=function(){
    function a(){
        this.onToggle=b(this.onToggle,this),this.onError=b(this.onError,this),this.onSuccess=b(this.onSuccess,this),this.onComplete=b(this.onComplete,this),this.onBeforeSend=b(this.onBeforeSend,this),this.onClick=b(this.onClick,this),$(document).on("click",".js-toggler-container .js-toggler-target",this.onClick),$(document).on("ajaxBeforeSend",".js-toggler-container",this.onBeforeSend),$(document).on("ajaxComplete",".js-toggler-container",this.onComplete),$(document).on("ajaxSuccess",".js-toggler-container",this.onSuccess),$(document).on("ajaxError",".js-toggler-container",this.onError),$(document).on("toggler:toggle",".js-toggler-container",this.onToggle)
        }
        return a.name="TogglerBehavior",a.prototype.onClick=function(a){
        return $(a.target).trigger("toggler:toggle"),!1
        },a.prototype.onBeforeSend=function(a){
        var b;
        return b=a.currentTarget,$(b).removeClass("success error"),$(b).addClass("loading")
        },a.prototype.onComplete=function(a){
        return $(a.currentTarget).removeClass("loading")
        },a.prototype.onSuccess=function(a){
        return $(a.currentTarget).addClass("success")
        },a.prototype.onError=function(a){
        return $(a.currentTarget).addClass("error")
        },a.prototype.onToggle=function(a){
        var b;
        return b=a.currentTarget,$(b).toggleClass("on")
        },a
    }(),new a
}.call(this);
if(typeof console=="undefined"||typeof console.log=="undefined")window.console={
    log:function(){}
};

window.debug=function(){},navigator.userAgent.match("Propane")||top!=window&&(top.location.replace(document.location),alert("For security reasons, framing is not allowed.")),GitHub.gravatar=function(a,b){
    b=b||35;
    var c=location.protocol=="https:"?"https://secure.gravatar.com":"http://gravatar.com",d=location.protocol=="https:"?"https":"http";
    return'<img src="'+c+"/avatar/"+a+"?s=140&d="+d+'%3A%2F%2Fgithub.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="'+b+'" height="'+b+'" />'
    },String.prototype.capitalize=function(){
    return this.replace(/\w+/g,function(a){
        return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()
        })
    },jQuery.expr[":"].Contains=function(a,b,c){
    return(a.textContent||a.innerText||"").toLowerCase().indexOf(c[3].toLowerCase())>=0
    },$.fn.scrollTo=function(a,b){
    var c,d;
    typeof a=="number"||!a?(b=a,c=this,d="html,body"):(c=a,d=this);
    var e=$(c).offset().top-30;
    return $(d).animate({
        scrollTop:e
    },b||1e3),this
    },$.fn.spin=function(){
    return this.after('<img src="'+GitHub.Ajax.spinner+'" id="spinner"/>')
    },$.fn.stopSpin=function(){
    return $("#spinner").remove(),this
    },GitHub.Ajax={
    spinner:"https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-16px.gif",
    error:"https://a248.e.akamai.net/assets.github.com/images/modules/ajax/error.png"
},$(function(){
    function c(){
        $("#facebox .shortcuts:visible").length?$.facebox.close():($(document).one("reveal.facebox",function(){
            navigator.appVersion.indexOf("Mac")!=-1?$("#facebox span.platform-other").hide():$("#facebox span.platform-mac").hide(),$(".js-see-all-keyboard-shortcuts").click(function(){
                return $(this).remove(),$("#facebox :hidden").show(),!1
                })
            }),$.facebox({
            div:"#keyboard_shortcuts_pane"
        },"shortcuts"))
        }
        function d(){
        $("#facebox .cheatsheet:visible").length?$.facebox.close():$.facebox({
            div:"#markdown-help"
        },"cheatsheet")
        }
        var a=new Image;
    a.src=GitHub.Ajax.spinner,$(".previewable-comment-form").previewableCommentForm(),$(".cards_select").cardsSelect(),$(document).bind("reveal.facebox",function(){
        $(".cards_select").cardsSelect(),$("#facebox .content").fire("pageUpdate")
        }),$(".flash .close").click(function(){
        $(this).closest(".flash").fadeOut(300)
        }),$(".toggle_link").click(function(){
        return $($(this).attr("href")).toggle(),!1
        }),$(".hide_div").click(function(){
        return $(this).parents("div:first").fadeOut(),!1
        });
    var b=$("#login_field");
    b.val()?b.length&&$("#password").focus():b.focus(),$("#confirm-password").focus(),$("#versions_select").change(function(){
        location.href=this.value
        }),$(".js-date-input").date_input(),$(document).on("keypress",function(a){
        if($(a.target).is(":input"))return;
        if(a.which===63)return c(),!1
            }),$(document).on("keydown",function(a){
        if(a.hotkey!=="m"||$(a.target).is(":input"))return;
        return d(),!1
        }),$(".gfm-help").click(function(a){
        a.preventDefault(),d()
        }),$("button, .minibutton").live("mousedown",function(){
        $(this).addClass("mousedown")
        }).live("mouseup mouseleave",function(){
        $(this).removeClass("mousedown")
        }),$("ul.inline-tabs").tabs(),$(".js-hard-tabs").hardTabs(),BaconPlayer.sm2="/javascripts/soundmanager/sm2.js",$("button.classy, a.button.classy").mousedown(function(){
        $(this).addClass("mousedown")
        }).bind("mouseup mouseleave",function(){
        $(this).removeClass("mousedown")
        }),$(document).editableComment()
    }),$.pageUpdate(function(){
    $(this).find("a[rel*=facebox]").each(function(){
        if($(this).data("facebox-installed"))return;
        $(this).facebox(),$(this).data("facebox-installed",!0)
        }),$(this).find(".js-entice").each(function(){
        $(this).enticeToAction({
            title:$(this).attr("data-entice")
            })
        }),$(this).find(".tooltipped").each(function(){
        var a=$(this),b=a.hasClass("downwards")?"n":"s";
        b=a.hasClass("rightwards")?"w":b,b=a.hasClass("leftwards")?"e":b,a.tipsy({
            gravity:b
        })
        })
    }),$.extend($.facebox.settings,{
    loadingImage:"https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif",
    closeImage:"https://a248.e.akamai.net/assets.github.com/images/modules/facebox/closelabel.png"
}),function(){
    $.pageUpdate(function(){
        var a,b,c;
        if(!$("#menu-about").length)return;
        a=$(".js-github-jobs");
        if(!a.length)return;
        return $(".js-github-jobs").hasClass("loading")||(a.addClass("loading"),$.getJSON(a.data("url"),function(a){
            var d,e,f,g;
            if(a.length===0)return c();
            g=[];
            for(e=0,f=a.length;e<f;e++)d=a[e],g.push(b(d));
            return g
            }).error(function(a,b,c){
            return $(".js-github-jobs .jobs").html("Had a problem pulling in our jobs. Sorry!")
            })),b=function(a){
            var b;
            return b=a.description.split("\n")[0],$(".js-github-jobs .jobs").append('      <li>        <h3><a href="'+a.url+'">'+a.title+"</a></h3>        <p>"+b+"</p>        <hr />      </li>    ")
            },c=function(){
            return $(".js-github-jobs .jobs").html("<p>We haven't posted any jobs lately. Check back later, though!</p>")
            }
        })
}.call(this),function(){
    $(function(){
        var a;
        return $(document).on("click",".section-head",function(b){
            var c;
            return c=$(b.currentTarget).next(".section-nav"),a.expand(c)
            }),a={
            collapse:function(a){
                return a.slideUp(200),a.addClass("collapsed")
                },
            expand:function(b){
                var c,d,e,f;
                d=$(".section-nav");
                for(e=0,f=d.length;e<f;e++)c=d[e],a.collapse($(c));
                return b.slideDown(200),b.removeClass("collapsed")
                }
            }
    })
}.call(this),function(){
    var a,b,c,d;
    window._gaq==null&&(window._gaq=[]),_gaq.push(["_setAccount","UA-3769691-2"]),_gaq.push(["_setDomainName","none"]),_gaq.push(["_trackPageview"]),_gaq.push(["_trackPageLoadTime"]),document.title==="404 - GitHub"&&(d=document.location.pathname+document.location.search,a=document.referrer,_gaq.push(["_trackPageview","/404.html?page="+d+"&from="+a])),b=document.createElement("script"),b.type="text/javascript",b.async=!0,c=document.location.protocol==="https:"?"https://ssl":"http://www",b.src=""+c+".google-analytics.com/ga.js",document.getElementsByTagName("head")[0].appendChild(b),window._gauges==null&&(window._gauges=[]),window.location.pathname.match(/\/blog/)===null&&$(function(){
        var a,b;
        return a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.id="gauges-tracker",a.setAttribute("data-site-id","4f5634b5613f5d0429000010"),a.src="https://secure.gaug.es/track.js",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b)
        })
    }.call(this),GitHub.Blob||(GitHub.Blob={}),GitHub.Blob.highlightLines=function(a){
    var b,c;
    $(".line").css("background-color","transparent"),a?(b=$(this).attr("rel"),a.shiftKey&&(b=window.location.hash.replace(/-\d+/,"")+"-"+b.replace(/\D/g,"")),window.location.hash=b):b=window.location.hash;
    if(c=b.match(/#?(?:L|l|-)(\d+)/g)){
        c=$.map(c,function(a){
            return parseInt(a.replace(/\D/g,""))
            });
        if(c.length==1)return $("#LC"+c[0]).css("background-color","#ffc");
        for(var d=c[0];d<=c[1];d++)$("#LC"+d).css("background-color","#ffc");
        $("#LC"+c[0]).scrollTo(1)
        }
        return!1
    },GitHub.Blob.scrollToHilightedLine=function(){
    var a,b=window.location.hash;
    if(a=b.match(/^#?(?:L|-)(\d+)$/g))a=$.map(a,function(a){
        return parseInt(a.replace(/\D/g,""))
        }),$("#L"+a[0]).scrollTo(1)
        },GitHub.Blob.show=function(){
    $(".file-edit-link").hide(),$(".frame-center .file-edit-link").show(),$.hotkeys({
        l:function(){
            return $(document).one("reveal.facebox",function(){
                var a=$("#facebox").find(":text");
                a.focus(),$("#facebox form").submit(function(){
                    return window.location="#L"+parseInt(a.val()),GitHub.Blob.highlightLines(),a.blur(),$(document).trigger("close.facebox"),!1
                    })
                }),$.facebox({
                div:"#jump-to-line"
            }),!1
            }
        });
var a=$(".repo-tree").attr("data-ref");
if(!$(document.body).hasClass("logged_in")||!a){
    $(".file-edit-link").enticeToAction({
        title:"You must be logged in and on a branch to make or propose changes",
        direction:"leftwards"
    }),$(".file-edit-link").addClass("js-edit-link-disabled");
    return
}
if($(document.body).hasClass("logged_in")&&a){
    var b=$(".file-edit-link:visible"),c=b[0];
    if(c&&!$(".btn-pull-request")[0]){
        var d=$(".file-edit-link > span");
        d.text("Fork and edit this file"),b.attr("title","Clicking this button will automatically fork this project so you can edit the file"),b.tipsy({
            gravity:"e"
        })
        }
    }
},$(function(){
    $(".file-history-tease").length&&$("#slider").prevAll(".last-commit, .commit.commit-tease").hide(),$(".page-blob").length>0&&(GitHub.Blob.scrollToHilightedLine(),GitHub.Blob.highlightLines(),GitHub.Blob.show()),$(".line_numbers span[rel]").live("mousedown",GitHub.Blob.highlightLines),$(".file").delegate(".linkable-line-number","click",function(a){
        return document.location.hash=this.id,!1
        })
    }),$(function(){
    var a=2,b=7,c=30,d=1e4;
    $(".diverge-widget").each(function(){
        var d=$(this),e=new Date(d.attr("last-updated")),f=(new Date-e)/1e3/3600/24;
        f<=a?d.addClass("hot"):f<=b?d.addClass("fresh"):f<=c?d.addClass("stale"):d.addClass("old")
        })
    }),$(function(){
    $.hotkeys({
        y:function(){
            var a=$("link[rel='permalink']").attr("href"),b=$("title");
            a&&(a+=location.hash,Modernizr.history?window.history.pushState({},b,a):window.location.href=a)
            }
        })
}),function(){
    var a,b=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        };
    
a=function(){
    function a(){
        this.setupPoller=b(this.setupPoller,this),this.checkForUpdates=b(this.checkForUpdates,this),this.error=b(this.error,this),this.success=b(this.success,this);
        if(!($("body.page-pullrequest").length>0))return;
        if(!($("#last-updated-at").length>0))return;
        this.url=window.location.href+"/poll",this.pollTime=0,this.maxPollTime=6e5,this.intervalInSeconds=10,this.interval=this.intervalInSeconds*1e3,$(document).ready(this.setupPoller)
        }
        return a.name="CommentPoller",a.prototype.success=function(a,b){
        var c;
        c=$.parseJSON($("#last-updated-at").html());
        if(a>c)return this.onChanges()
            },a.prototype.error=function(a,b){
        return console.log("error -> "+a),this.killTimer()
        },a.prototype.checkForUpdates=function(){
        var a;
        return a=$.ajax({
            url:this.url,
            success:this.success,
            error:this.error
            }),this.pollTime>this.maxPollTime?console.log("no more polling, we have reached the limit"):(this.pollTime+=this.
            interval,this.timer=setTimeout(this.checkForUpdates,this.interval))
        },a.prototype.onChanges=function(){
        return $("#live-comment-notifications").show("750"),this.killTimer()
        },a.prototype.killTimer=function(){
        return window.clearTimeout(this.timer)
        },a.prototype.setupPoller=function(){
        return this.timer=setTimeout(this.checkForUpdates,0)
        },a
    }(),new a
}.call(this),$(function(){
    $(".email-hidden-toggle a").on("click",function(a){
        a.preventDefault(),a.stopPropagation(),$(this).parent().siblings(".email-hidden-reply").toggle()
        })
    }),$(function(){
    if(!$(".js-new-comment-form")[0])return;
    $(document).delegate(".js-add-a-comment","click",function(){
        var a=$(this).attr("href");
        $(a).find("*[tabindex=1]").focus()
        }),$(document).delegate(".js-new-comment-form .action-bar a","ajaxSend",function(){
        $(this).addClass("disabled")
        }),$(document).delegate(".js-new-comment-form textarea","keydown",function(a){
        if(a.hotkey==="ctrl+enter"||a.hotkey==="meta+enter")return $(this).parents("form").submit(),!1
            }),$(document).delegate(".js-new-comment-form","ajaxBeforeSend",function(a){
        if($(a.target).is("form")&&$.trim($(this).find('textarea[name="comment[body]"]').val())=="")return!1
            }),$(document).delegate(".js-new-comment-form","ajaxSend",function(a){
        $(a.target).is("form")&&$(this).find(".form-actions button").attr("disabled","true")
        }),$(document).delegate(".js-new-comment-form","ajaxComplete",function(a){
        $(this).find(".form-actions button").attr("disabled",!1)
        }),$(document).delegate(".js-new-comment-form","ajaxSuccess",function(a,b,c,d){
        d.discussionStats&&$(".discussion-stats").html(d.discussionStats),d.discussionLabels&&$(".discussion-labels").html(d.discussionLabels),d.discussion&&$(".discussion-timeline > .new-comments").append(d.discussion),d.formActionBar&&$(".js-new-comment-form .action-bar").html(d.formActionBar),d.formActions&&$(".js-new-comment-form .form-actions").html(d.formActions),$("#discussion_bucket, #show_issue").pageUpdate(),$(a.target).is("form")&&($(this).find("textarea").val("").blur(),$(this).find("a[action=write]").click())
        }),$(document).delegate(".js-new-comment-form","ajaxError",function(){
        $(this).find(".comment-form-error").show().html("There was an error posting your comment")
        })
    }),GitHub.Commit={
    dumpEmptyClass:function(){
        $(this).removeClass("empty")
        },
    addEmptyClass:function(){
        !$(this).data("clicked")&&$(this).text()=="0"&&$(this).addClass("empty")
        },
    highlightLine:function(){
        $(this).parent().css("background","#ffc")
        },
    unhighlightLine:function(){
        $(this).data("clicked")||$(this).parent().css("background","")
        },
    jumpToHashFile:function(){
        if(!window.location.hash)return;
        var a,b,c=window.location.hash.substr(1);
        if(/^diff-\d+$/.test(c))return;
        if(c.match(/^r\d+$/)&&(b=$("#files #"+c)).length>0){
            console.log("jumping to review comment",b),$(b).addClass("selected"),$("html,body").animate({
                scrollTop:b.offset().top-200
                },1);
            return
        }(a=c.match(/(.+)-P(\d+)$/)||c.match(/(.+)/))&&(b=GitHub.Commit.files[a[1]])&&(a[2]?(b=$(b).closest(".file").find('tr[data-position="'+a[2]+'"] pre'),b.length>0&&(b.scrollTo(1),setTimeout(function(){
            GitHub.Commit.highlightLine.call(b)
            },50))):$(b).closest(".file").scrollTo(1))
        }
    },$(function(){
    function c(a){
        a.find(".inline-comment-form").show().find("textarea").focus(),a.find(".show-inline-comment-form a").hide()
        }
        var a={};
    
    $("#files.diff-view > .file > .meta").each(function(){
        a[$(this).attr("data-path")]=this
        }),GitHub.Commit.files=a;
    var b=function(a){
        a.find("ul.inline-tabs").tabs(),a.find(".show-inline-comment-form a").click(function(){
            return a.find(".inline-comment-form").show().find("textarea").focus(),$(this).hide(),!1
            }),a.delegate("textarea","keydown",function(b){
            if(b.hotkey==="ctrl+enter"||b.hotkey==="meta+enter")return $(this).parents("form").submit(),!1;
            b.hotkey==="esc"&&a.find(".show-inline-comment-form a").click()
            }),a.delegate(".close-form","click",function(){
            return a.find(".inline-comment-form").hide(),a.find(".commit-comment",".review-comment").length>0?a.find(".show-inline-comment-form a").show():(console.log(a),a.remove()),!1
            }),$.pageUpdate(function(){
            a.find(".comment-holder").children(":visible")[0]||a.remove()
            });
        var b=a.find(".previewable-comment-form").previewableCommentForm().closest("form");
        b.submit(function(){
            return b.find(".ajaxindicator").show(),b.find("button").attr("disabled","disabled"),$.ajax({
                type:"POST",
                url:b.attr("action"),
                data:b.serializeArray(),
                complete:function(){
                    b.find(".ajaxindicator").hide(),b.find("button").attr("disabled",!1)
                    },
                success:function(a){
                    var c=b.closest(".clipper"),d=c.find(".comment-holder");
                    d.length==0&&(d=c.prepend($('<div class="inset comment-holder"></div>')).find(".comment-holder")),a=$(a),d.append(a),a.pageUpdate(),b.find("textarea").val(""),c.find(".inline-comment-form").hide(),c.find(".show-inline-comment-form a").show();
                    var e=c.closest(".inline-comments").find(".comment-count .counter");
                    e.text(parseInt(e.text().replace(",",""))+1),$(c.closest(".file-box, .file")).trigger("commentChange",a)
                    },
                error:function(){
                    b.find(".comment-form-error").show().html("There was an error posting your comment")
                    }
                }),!1
        })
    };
    
$(".inline-review-comment tr.inline-comments").each(function(){
    b($(this))
    }),$("#diff-comment-data > table").each(function(){
    var c=$(this).attr("data-path"),d=$(this).attr("data-position"),e=$(a[c]).closest(".file"),f=e.find('.data table tr[data-position="'+d+'"]');
    f.after($(this).find("tr").detach()),b(f.next("tr.inline-comments")),e.find(".show-inline-comments-toggle").closest("li").show()
    }),$("#diff-comment-data > div").each(function(){
    var b=$(this).attr("data-path");
    $(a[b]).closest(".file").find(".file-comments-place-holder").replaceWith($(this).detach())
    }),$(window).bind("hashchange",GitHub.Commit.jumpToHashFile),setTimeout(GitHub.Commit.jumpToHashFile,50),$('.inline-comment-form div[id^="write_bucket_"]').live("tabChanged",function(){
    var a=$(this);
    setTimeout(function(){
        a.find("textarea").focus()
        },13)
    });
var d=!1;
$(".add-bubble").live("click",function(){
    if(d)return;
    var a=$(this).closest("tr"),e=a.next("tr.inline-comments");
    if(e.length>0){
        c(e);
        return
    }
    $(".error").remove(),d=!0,$.ajax({
        url:$(this).attr("remote"),
        complete:function(){
            d=!1
            },
        success:function(d){
            a.after(d),e=a.next("tr.inline-comments"),b(e),c(e)
            },
        error:function(){
            a.after('<tr class="error"><td colspan=3><p><img src="'+GitHub.Ajax.error+'"> Something went wrong! Please try again.</p></td></tr>')
            }
        })
}),$("#files .show-inline-comments-toggle").change(function(){
    this.checked?$(this).closest(".file").find("tr.inline-comments").show():$(this).closest(".file").find("tr.inline-comments").hide()
    }).change(),$("#inline_comments_toggle input").change(function(){
    this.checked?$("#comments").removeClass("only-commit-comments"):$("#comments").addClass("only-commit-comments")
    }).change(),$(".js-show-suppressed-diff").click(function(){
    return $(this).parent().next().show(),$(this).parent().hide(),!1
    })
}),$(function(){
    function a(a,b){
        var c=Math.min(a.canvas.width,b.canvas.width),d=Math.min(a.canvas.height,b.canvas.height),e=a.getImageData(0,0,c,d),f=b.getImageData(0,0,c,d),g=e.data,h=f.data,i,j,k,l=h.length,m,n,o,p,q,r,s,t;
        for(k=0;k<l;k+=4)i=g[k+3]/255,j=h[k+3]/255,s=i+j-i*j,h[k+3]=s*255,m=g[k]/255*i,p=h[k]/255*j,n=g[k+1]/255*i,q=h[k+1]/255*j,o=g[k+2]/255*i,r=h[k+2]/255*j,t=255/s,h[k]=(m+p-2*Math.min(m*j,p*i))*t,h[k+1]=(n+q-2*Math.min(n*j,q*i))*t,h[k+2]=(o+r-2*Math.min(o*j,r*i))*t;
        b.putImageData(f,0,0)
        }
        if($("#files .image").length){
        var b=$("#files .file:has(.onion-skin)"),c=[];
        $.each(b,function(d,e){
            function E(){
                A++,H();
                if(A>=z){
                    var a=f.find(".progress");
                    a.is(":visible")?a.fadeOut(250,function(){
                        G()
                        }):(a.hide(),G())
                    }
                }
            function F(a){
            var b=w.find(".active"),c=w.find(".active").first().index(),d=x.eq(c),e=w.children().eq(a);
            if(e.hasClass("active")==0&&e.hasClass("disabled")==0){
                b.removeClass("active"),e.addClass("active");
                if(e.is(":visible")){
                    var g=e.position(),h=e.outerWidth(),i=String(g.left+h/2)+"px 0px";
                    w.css("background-image","url(/images/modules/commit/menu_arrow.gif)"),w.css("background-position",i)
                    }
                    A>=2&&(animHeight=parseInt(x.eq(a).css("height"))+127,f.animate({
                    height:animHeight
                },250,"easeOutQuart"),d.animate({
                    opacity:"hide"
                },250,"easeOutQuart",function(){
                    x.eq(a).fadeIn(250)
                    }))
                }
            }
        function G(){
            var b=858,e=Math.max(B.width,C.width),k=Math.max(B.height,C.height),l=0;
            B.marginHoriz=Math.floor((e-B.width)/2),B.marginVert=Math.floor((k-B.height)/2),C.marginHoriz=Math.floor((e-C.width)/2),C.marginVert=Math.floor((k-C.height)/2),$.each($.getUrlVars(),function(a,b){
                b==f.attr("id")&&(diffNum=parseInt(b.replace(/\D*/g,"")),y=$.getUrlVar(b)[0],l=$.getUrlVar(b)[1]/100,c[diffNum].view=$.getUrlVar(b)[0],c[diffNum].pct=$.getUrlVar(b)[1],c[diffNum].changed=!0)
                });
            var x=1;
            e>(b-30)/2&&(x=(b-30)/2/e),m.attr({
                width:B.width*x,
                height:B.height*x
                }),n.attr({
                width:C.width*x,
                height:C.height*x
                }),g.find(".deleted-frame").css({
                margin:B.marginVert*x+"px "+B.marginHoriz*x+"px",
                width:B.width*x+2,
                height:B.height*x+2
                }),g.find(".added-frame").css({
                margin:C.marginVert*x+"px "+C.marginHoriz*x+"px",
                width:C.width*x+2,
                height:C.height*x+2
                }),g.find(".aWMeta").eq(0).text(C.width+"px"),g.find(".aHMeta").eq(0).text(C.height+"px"),g.find(".dWMeta").eq(0).text(B.width+"px"),g.find(".dHMeta").eq(0).text(B.height+"px"),C.width!=B.width&&(g.find(".aWMeta").eq(0).addClass("a-green"),g.find(".dWMeta").eq(0).addClass("d-red")),C.height!=B.height&&(g.find(".aHMeta").eq(0).addClass("a-green"),g.find(".dHMeta").eq(0).addClass("d-red"));
            var z=1,A;
            e>b-12&&(z=(b-12)/e),A=0,A=e*z+3,o.attr({
                width:B.width*z,
                height:B.height*z
                }),p.attr({
                width:C.width*z,
                height:C.height*z
                }),h.find(".deleted-frame").css({
                margin:B.marginVert*z+"px "+B.marginHoriz*z+"px",
                width:B.width*z+2,
                height:B.height*z+2
                }),h.find(".added-frame").css({
                margin:C.marginVert*z+"px "+C.marginHoriz*z+"px",
                width:C.width*z+2,
                height:C.height*z+2
                }),h.find(".swipe-shell").css({
                width:e*z+3+"px",
                height:k*z+4+"px"
                }),h.find(".swipe-frame").css({
                width:e*z+18+"px",
                height:k*z+30+"px"
                }),h.find(".swipe-bar").css("left",l*A+"px"),f.find(".swipe .swipe-shell").css("width",A-A*l),h.find(".swipe-bar").on("mousedown",function(a){
                var b=$(this),e=$(this).parent(),g=0,h=e.width()-b.width();
                a.preventDefault(),$("body").css({
                    cursor:"pointer"
                }),$(document).on("mousemove.swipe",function(a){
                    a.preventDefault();
                    var g=a.clientX-e.offset().left;
                    g<0&&(g=0),g>h&&(g=h),b.css({
                        left:g
                    });
                    var i=Math.round(g/(parseInt(f.find(".swipe-frame").css("width"))-15)*1e4)/1e4;
                    f.find(".swipe .swipe-shell").css("width",A-A*i),c[d].pct=i*100,c[d].changed=!0
                    }),$(document).on("mouseup.swipe",function(){
                    $(document).off(".swipe"),$("body").css({
                        cursor:"auto"
                    }),I()
                    })
                });
            var D=1;
            e>b-12&&(D=(b-12)/e),q.attr({
                width:B.width*D,
                height:B.height*D
                }),r.attr({
                width:C.width*D,
                height:C.height*D
                }),i.find(".deleted-frame").css({
                margin:B.marginVert*D+"px "+B.marginHoriz*D+"px",
                width:B.width*D+2,
                height:B.height*D+2
                }),i.find(".added-frame").css({
                margin:C.marginVert*D+"px "+C.marginHoriz*D+"px",
                width:C.width*D+2,
                height:C.height*D+2
                }),i.find(".onion-skin-frame").css({
                width:e*D+4+"px",
                height:k*D+30+"px"
                }),f.find(".dragger").css("left",262-l*262+"px"),f.find(".onion-skin .added-frame").css("opacity",l),f.find(".onion-skin .added-frame img").css("opacity",l),f.find(".dragger").on("mousedown",function(a){
                var b=$(this),e=$(this).parent(),g=0,h=e.width()-b.width();
                a.preventDefault(),$("body").css({
                    cursor:"pointer"
                }),$(document).on("mousemove.dragger",function(a){
                    a.preventDefault();
                    var g=a.clientX-e.offset().left;
                    g<0&&(g=0),g>h&&(g=h),b.css({
                        left:g
                    });
                    var i=Math.round(g/262*100)/100;
                    f.find(".onion-skin .added-frame").css("opacity",i),f.find(".onion-skin .added-frame img").css("opacity",i),c[d].pct=i*100,c[d].changed=!0
                    }),$(document).on("mouseup.dragger",function(){
                    $(document).off(".dragger"),$("body").css({
                        cursor:"auto"
                    }),I()
                    })
                });
            var E=1;
            e>b-4&&(E=(b-4)/e),Modernizr.canvas&&(s.attr({
                width:e*E,
                height:k*E
                }),t.attr({
                width:e*E,
                height:k*E
                }),j.find(".added-frame").css({
                width:e*E+2,
                height:k*E+2
                }),j.find(".deleted-frame").css({
                width:e*E+2,
                height:k*E+2
                }),u.drawImage(B,B.marginHoriz*E,B.marginVert*E,B.width*E,B.height*E),v.drawImage(C,C.marginHoriz*E,C.marginVert*E,C.width*E,C.height*E),a(v,u)),g.css("height",k*x+30),h.css("height",k*z+30),i.css("height",k*z+30),j.css("height",k*z+30),w.children().removeClass("disabled"),F(y)
            }
            function H(){
            var a=A/z*100+"%";
            f.find(".progress-bar").animate({
                width:a
            },250,"easeOutQuart")
            }
            function I(){
            var a="?";
            $.each(c,function(b,c){
                c["changed"]==1&&(b!=0&&(a+="&"),a+="diff-"+b+"="+c.view+"-"+Math.round(c.pct))
                }),Modernizr.history&&window.history.replaceState({},"",a)
            }
            var f=b.eq(d),g=f.find(".two-up").eq(0),h=f.find(".swipe").eq(0),i=f.find(".onion-skin").eq(0),j=f.find(".difference").eq(0),k=f.find(".deleted"),l=f.find(".added"),m=k.eq(0),n=l.eq(0),o=k.eq(1),p=l.eq(1),q=k.eq(2),r=l.eq(2),s=f.find("canvas.deleted").eq(0),t=f.find("canvas.added").eq(0),u,v,w=f.find("ul.menu"),x=f.find(".view"),y=0,z=f.find(".asset").length,A=0,B=new Image,C=new Image;
        c.push({
            name:f.attr("id"),
            view:0,
            pct:0,
            changed:!1
            }),Modernizr.canvas?(u=s[0].getContext("2d"),v=t[0].getContext("2d")):w.children().eq(3).addClass("hidden"),f.find(".two-up").hide(),f.find(".two-up p").removeClass("hidden"),f.find(".progress").removeClass("hidden"),f.find(".view-modes").removeClass("hidden"),B.src=f.find(".deleted").first().attr("src"),C.src=f.find(".added").first().attr("src"),m.attr("src",B.src).load(function(){
            E()
            }),n.attr("src",C.src).load(function(){
            E()
            }),o.attr("src",B.src).load(function(){
            E()
            }),p.attr("src",C.src).load(function(){
            E()
            }),q.attr("src",B.src).load(function(){
            E()
            }),r.attr("src",C.src).load(function(){
            E()
            }),$stats.increment("ui.slider.loaded");
        var D=!0;
        w.children("li").click(function(){
            var a=$(this).index();
            (a==1||a==2)&&D&&($stats.increment("ui.slider."+(a==1?"swipe":"onion-skin")),D=!1),F(a),c[d].view=a,c[d].changed=!0,I()
            }),$.extend({
            getUrlVars:function(){
                var a=[],b,c=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");
                for(var d=0;d<c.length;d++)b=c[d].split("="),b[1]&&(b[1]=b[1].split("-")),a.push(b[0]),a[b[0]]=b[1];
                return a
                },
            getUrlVar:function(a){
                return $.getUrlVars()[a]
                }
            })
    })
}
}),function(){
    $(document).on("navigation:open",".page-commits .commit-group-item",function(){
        return window.location=$(this).find("a").attr("href"),!1
        }),$(document).on("navigation:keydown",".page-commits .commit-group-item",function(a){
        if(a.hotkey==="c")return window.location=$(this).find("a").attr("href"),!1
            })
    }.call(this),$(function(){
    $("#imma_student").click(function(){
        return $("#student_contact").slideToggle(),!1
        }),$("#imma_teacher").click(function(){
        return $("#teacher_contact").slideToggle(),!1
        }),$("#imma_school_admin").click(function(){
        return $("#school_admin_contact").slideToggle(),!1
        })
    }),function(){
    $(document).on("pjax:send",".context-loader-container",function(){
        return $(this).addClass("loading")
        }),$(document).on("pjax:complete",".context-loader-container",function(){
        return $(this).removeClass("loading")
        }),$(document).on("pjax:timeout",".context-loader-container",function(){
        return!1
        })
    }.call(this),$(function(){
    $("#your_repos").repoList({
        selector:"#repo_listing",
        ajaxUrl:"/dashboard/ajax_your_repos"
    }),$("#watched_repos").repoList({
        selector:"#watched_repo_listing",
        ajaxUrl:"/dashboard/ajax_watched_repos"
    });
    if($("#org_your_repos").length>0){
        var a=location.pathname;
        a[a.length-1]=="/"&&(a=a.slice(0,a.length-1)),$("#org_your_repos").repoList({
            selector:"#repo_listing",
            ajaxUrl:a+"/ajax_your_repos"
            })
        }
        $(".reveal_commits, .hide_commits").live("click",function(){
        var a=$(this).parents(".details");
        return a.find(".reveal, .hide_commits, .commits").toggle(),!1
        }),$(".octofication .hide a").click(function(){
        return $.ajax({
            type:"PUT",
            url:this.href,
            success:function(){
                $(".octofication").fadeOut()
                }
            }),!1
    }),$(".dashboard-notice .dismiss").click(function(){
    var a=$(this).closest(".dashboard-notice");
    return $.ajax({
        type:"DELETE",
        url:this.href,
        success:function(){
            a.fadeOut()
            }
        }),!1
}),$(".js-dismiss-bootcamp").click(function(){
    var a=$(this).closest(".bootcamp");
    return $.ajax({
        type:"POST",
        url:this.href,
        success:function(){
            a.fadeOut()
            }
        }),!1
})
}),$(function(){
    if($(".repohead").length==0)return;
    var a=$("#repo_details"),b=GitHub.hasAdminAccess,c=GitHub.watchingRepo,d=GitHub.hasForked,e=$("#repository_description"),f=$("#repository_homepage"),g=$("#repo_details_loader");
    if($(".js-edit-details").length){
        var h=$(".repo-desc-homepage"),i=$(".edit-repo-desc-homepage"),j=i.find(".error");
        $(".repo-desc-homepage").delegate(".js-edit-details","click",function(a){
            a.preventDefault(),h.hide(),i.show(),i.find(".description-field").focus()
            }),i.find(".cancel a").click(function(a){
            a.preventDefault(),h.show(),i.hide()
            }),$("#js-update-repo-meta-form").submit(function(a){
            a.preventDefault();
            var b=$(this);
            j.hide(),g.show(),i.css({
                opacity:.5
            }),$.ajax({
                url:b.attr("action"),
                type:"put",
                data:b.serialize(),
                success:function(a){
                    i.hide(),h.html(a).show(),g.hide(),i.css({
                        opacity:1
                    })
                    },
                error:function(){
                    j.show(),g.hide(),i.css({
                        opacity:1
                    })
                    }
                })
        })
    }
    b&&($(".editable-only").show(),$(".for-owner").show()),$("#repo_details").length&&$(".pagehead ul.tabs").addClass("with-details-box")
    }),$(function(){
    $(".url-box").each(function(){
        var a=$(this),b=a.find("ul.clone-urls a"),c=a.find(".url-field"),d=a.find(".url-description span.bold"),e=a.find(".js-clippy");
        b.click(function(){
            var b=$(this);
            return c.val(b.attr("href")),e.attr("data-clipboard-text",b.attr("href")),d.text(b.attr("data-permissions")),a.find("ul.clone-urls li.selected").removeClass("selected"),b.parent("li").addClass("selected"),!1
            }),$(b[0]).click(),c.mouseup(function(){
            this.select()
            })
        })
    }),GitHub.Uploader={
    hasFlash:!1,
    hasFileAPI:!1,
    fallbackEnabled:!0,
    fallbackFileSaved:!1,
    uploadForm:null,
    defaultRow:null,
    files:{},
    init:function(){
        this.uploadForm=$("#upload_form"),this.defaultRow=this.uploadForm.find("tr.default"),this.uploadForm.submit(GitHub.Uploader.uploadFormSubmitted),GitHub.Uploader.Flash.init(),GitHub.Uploader.File.init()
        },
    disableFallback:function(){
        if(!this.fallbackEnabled)return;
        this.defaultRow.addClass("fallback-disabled"),this.defaultRow.find("input[type=text]").attr("disabled","disabled"),this.defaultRow.find("button").attr("disabled","disabled"),this.fallbackEnabled=!1
        },
    uploadFormSubmitted:function(){
        var a=GitHub.Uploader;
        if(a.fallbackEnabled){
            if(a.fallbackFileSaved)return!0;
            var b=a.uploadForm.find(".html-file-field").val();
            b=b.replace("C:\\fakepath\\","");
            if(b=="")return!1;
            var c="application/octet-stream";
            typeof FileList!="undefined"&&(c=a.uploadForm.find("input[type=file]")[0].files[0].type);
            var d=new GitHub.UploadFile({
                name:b,
                size:1,
                type:c,
                row:a.defaultRow
                });
            return a.saveFile(d),!1
            }
            return!1
        },
    addFileRow:function(a){
        var b=this.uploadForm.find("tr.template"),c=b.clone().css("display","").addClass("filechosen").removeClass("template");
        a.row=c,this.files[a.id]=a,a.row.find(".js-waiting").hide(),a.row.find(".js-filename").text(a.name.substr(0,12)).attr("title",a.escapedName).tipsy(),a.row.find(".js-filesize").text(Math.round(a.size/1048576*10)/10+"MB"),a.row.find(".js-start-upload").click(function(){
            return a.row.hasClass("error")?!1:(GitHub.Uploader.saveFile(a),!1)
            }),this.defaultRow.before(c)
        },
    showUploadStarted:function(a){
        a.row.find(".js-label").text("Uploadingâ€¦0%")
        },
    showProgress:function(a,b){
        a.row.find(".description label").text("Upload in progressâ€¦ "+b+"%")
        },
    showSuccess:function(a){
        a.row.addClass("succeeded"),a.row.find(".js-label").text("Upload complete!"),a.row.find("button").remove(),$.get(document.location.href,function(a){
            $(".nodownloads").fadeOut(),$("#uploaded_downloads").hide().html(a).fadeIn()
            })
        },
    saveFile:function(a){
        a.row.addClass("uploading"),a.row.find(".js-label").text("Preparing upload"),a.row.find(".js-description").attr("disabled","disabled"),a.row.find("button").attr("disabled","disabled").find("span").text("Uploadingâ€¦"),this.uploadForm.find(".js-not-waiting").hide(),this.uploadForm.find(".js-waiting").show();
        var b=this.uploadForm.attr("prepare_action");
        $.ajax({
            type:"POST",
            url:b,
            data:{
                file_size:a.size,
                file_name:a.name,
                content_type:a.type,
                description:a.row.find(".js-description").val(),
                redirect:this.fallbackEnabled
                },
            datatype:"json",
            success:function(b){
                GitHub.Uploader.fileSaveSucceeded(a,b)
                },
            error:function(b,c,d){
                b.status==422?GitHub.Uploader.fileSaveFailed(a,b.responseText):GitHub.Uploader.fileSaveFailed(a)
                },
            complete:function(a,b){
                GitHub.Uploader.uploadForm.find(".js-not-waiting").show(),GitHub.Uploader.uploadForm.find(".js-waiting").hide()
                }
            })
    },
fileSaveSucceeded:function(a,b){
    a.params.key=b.path,a.params.acl=b.acl,a.params.Filename=a.name,a.params.policy=b.policy,a.params.AWSAccessKeyId=b.accesskeyid,a.params.signature=b.signature,a.params["Content-Type"]=b.mime_type,a.uploader=="flash"&&(a.params.success_action_status="201",GitHub.Uploader.Flash.upload(a)),this.fallbackEnabled&&(a.params.redirect=b.redirect,this.fallbackFileSaved=!0,$("#s3_redirect").val(a.params.redirect),$("#s3_key").val(a.params.key),$("#s3_acl").val(a.params.acl),$("#s3_filename").val(a.params.Filename),$("#s3_policy").val(a.params.policy),$("#s3_accesskeyid").val(a.params.AWSAccessKeyId),$("#s3_signature").val(a.params.signature),$("#s3_mime_type").val(a.params["Content-Type"]),this.uploadForm.submit())
    },
fileSaveFailed:function(a,b){
    b==null&&(b="Something went wrong that shouldn't have. Please try again or contact support if the problem persists."),a.row.addClass("error"),a.row.find(".js-label").text(b),a.row.find("button").attr("disabled","").addClass("danger").find("span").text("Remove"),a.row.find("button").click(function(b){
        return a.row.remove(),!1
        })
    }
},GitHub.UploadFile=function(a){
    this.id=a.id,this.name=a.name,this.escapedName=$("<div>").text(a.name).html(),this.row=a.row,this.size=a.size,this.type=a.type,this.uploader=a.uploader,this.params={}
},GitHub.Uploader.Flash={
    swfupload:null,
    init:function(){
        if(typeof SWFUpload=="undefined")return!1;
        this.swfupload=new SWFUpload({
            upload_url:GitHub.Uploader.uploadForm.attr("action"),
            file_post_name:"file",
            flash_url:"/flash/swfupload.swf",
            button_cursor:SWFUpload.CURSOR.HAND,
            button_window_mode:SWFUpload.WINDOW_MODE.TRANSPARENT,
            button_placeholder_id:"flash_choose_file_btn",
            swfupload_loaded_handler:this.flashLoaded,
            file_queued_handler:this.fileQueued,
            upload_start_handler:this.uploadStarted,
            upload_progress_handler:this.uploadProgress,
            upload_error_handler:this.uploadFailure,
            upload_success_handler:this.uploadSuccess
            })
        },
    upload:function(a){
        this.swfupload.setPostParams(a.params),this.swfupload.startUpload(a.id)
        },
    flashLoaded:function(){
        GitHub.Uploader.hasFlash=!0,GitHub.Uploader.disableFallback(),GitHub.Uploader.uploadForm.addClass("swfupload-ready")
        },
    fileQueued:function(a){
        var b=new GitHub.UploadFile({
            id:a.id,
            name:a.name,
            size:a.size,
            type:a.type,
            uploader:"flash"
        });
        GitHub.Uploader.addFileRow(b)
        },
    uploadStarted:function(a){
        var b=GitHub.Uploader.files[a.id];
        GitHub.Uploader.showUploadStarted(b)
        },
    uploadProgress:function(a,b,c){
        var d=GitHub.Uploader.files[a.id],e=Math.round(b/c*100);
        GitHub.Uploader.showProgress(d,e)
        },
    uploadSuccess:function(a,b,c){
        var d=GitHub.Uploader.files[a.id];
        GitHub.Uploader.showSuccess(d)
        },
    uploadFailure:function(a,b,c){
        var d=GitHub.Uploader.files[a.id];
        GitHub.Uploader.fileSaveFailed(d,null)
        }
    },GitHub.Uploader.File={
    init:function(){
        if(typeof DataTransfer=="undefined")return!1;
        if(!("files"in DataTransfer.prototype))return!1;
        if(!Modernizr.draganddrop)return!1;
        GitHub.Uploader.hasFileAPI=!0
        }
    },$(function(){
    GitHub.Uploader.init(),$(".page-downloads .manage-button").live("click",function(){
        return $("#manual_downloads").toggleClass("managing"),!1
        })
    }),$(function(){
    $(".site .nspr .btn-pull-request").click(function(){
        return GitHub.metric("Hit Pull Request Button",{
            "Pull Request Type":"New School",
            Action:GitHub.currentAction,
            "Ref Type":GitHub.revType
            }),!0
        }),$(".test_hook").click(function(){
        var a=$(this),b=a.prev(".test_hook_message");
        b.text("Sending payload...");
        var c=a.attr("href");
        return $.post(c,{
            name:a.attr("rel")||""
            },function(){
            b.text("Payload deployed")
            }),!1
        }),$(".add_postreceive_url").click(function(){
        var a=$(this).prev("dl.form").clone();
        return a.find("input").val(""),$(this).before(a),!1
        }),$(".remove_postreceive_url").live("click",function(){
        return $(this).closest(".fields").find("dl.form").length<2?(alert("You cannot remove the last post-receive URL"),!1):($(this).closest("dl.form").remove(),!1)
        }),$(".unlock_branch").click(function(){
        var a=location.pathname.split("/"),b="/"+a[1]+"/"+a[2]+"/unlock_branch/"+a[4],c=$(this).parents(".notification");
        $(this).spin().remove();
        var d=this;
        return $.post(b,function(){
            c.hide()
            }),!1
        });
    if($("#edit_repo").length>0){
        var a=$("#change_default_branch"),b=a.find("select"),c=b.val();
        b.change(function(){
            a.removeClass("success").removeClass("error").addClass("loading"),$.ajax({
                type:"PUT",
                url:a.closest("form").attr("action"),
                data:{
                    field:"repository_master_branch",
                    value:b.val()
                    },
                success:function(){
                    a.removeClass("loading").addClass("success"),c=b.val()
                    },
                error:function(){
                    b.val(c),a.removeClass("loading").addClass("error")
                    }
                })
        }),$(".addon.feature").each(function(){
        var a=$(this);
        a.find(":checkbox").change(function(){
            var b=this;
            a.removeClass("success").removeClass("error").addClass("loading"),$.ajax({
                type:"PUT",
                url:a.closest("form").attr("action"),
                data:{
                    field:b.name,
                    value:b.checked?1:0
                    },
                success:function(){
                    a.removeClass("loading").addClass("success")
                    },
                error:function(){
                    b.checked=!b.checked,a.removeClass("loading").addClass("error")
                    }
                })
        })
    });
var d=$("#push_pull_collabs input[data-autocomplete]"),e=$("#push_pull_collabs button[type=submit]"),f=null;
    d.on("autocomplete:search",function(){
    f&&f.abort();
    var a=$(this).val();
    if(a===""){
        $("#add-user-autocomplete ul").empty(),$("#add-user-autocomplete").trigger("autocomplete:change");
        return
    }
    f=$.ajax({
        type:"GET",
        data:{
            q:a,
            limit:10
        },
        url:"/autocomplete/users",
        dataType:"html",
        success:function(a){
            f=null,$("#add-user-autocomplete ul").html(a),$("#add-user-autocomplete").trigger("autocomplete:change")
            }
        })
}),d.on("autocomplete:autocompleted:changed",function(){
    d.attr("data-autocompleted")?e.removeAttr("disabled"):e.attr("disabled","disabled")
    }),$("#push_pull_collabs form").submit(function(){
    var a=$(this).find(":text"),b=a.val();
    debug("Trying to add %s...",b);
    if(!b||!a.attr("data-autocompleted"))return!1;
    var c=function(a){
        a!=null?$("#push_pull_collabs .error").text(a).show():$("#push_pull_collabs .error").hide()
        };
        
    return c(),$.ajax({
        url:this.action,
        data:{
            member:b
        },
        type:"POST",
        dataType:"json",
        success:function(b){
            a.val(""),b.error?c(b.error):$("#push_pull_collabs ul.usernames").append(b.html)
            },
        error:function(){
            c("An unidentfied error occurred, try again?")
            }
        }),!1
}),$("#push_pull_collabs .remove-user").live("click",function(){
    return $.ajax({
        type:"DELETE",
        url:this.href
        }),$(this).closest("li").remove(),!1
    }),$("#teams form").submit(function(){
    var a=$(this).find("select"),b=a.val(),c=function(a){
        a!=null?$("#push_pull_collabs .error").text(a).show():$("#push_pull_collabs .error").hide()
        };
        
    return b==""?(c("You must select a team"),!1):(c(),$.ajax({
        url:this.action,
        data:{
            team:b
        },
        type:"POST",
        dataType:"json",
        success:function(b){
            a.val(""),b.error?c(b.error):$("#teams ul.teams").append(b.html)
            },
        error:function(){
            c("An unidentfied error occurred, try again?")
            }
        }),!1)
}),$("#teams .remove-team").live("click",function(){
    return $.ajax({
        type:"DELETE",
        url:this.href
        }),$(this).closest("li").remove(),!1
    }),$(".site").is(".vis-public")?$(".private-only").hide():$(".public-only").hide(),$("#custom_tabs .remove-tab").live("click",function(){
    return $.ajax({
        type:"DELETE",
        url:this.href
        }),$(this).closest("li").remove(),!1
    }),$(document).bind("reveal.facebox",function(){
    $("#facebox .renaming_to_field").val($("#rename_field").val())
    })
}
}),function(){
    $(function(){
        var a;
        a=$(".js-enterprise-notice-dismiss");
        if(!a[0])return;
        return a.click(function(){
            return $.ajax({
                type:"POST",
                url:a.attr("href"),
                dataType:"json",
                success:function(b){
                    return a.closest("div").fadeOut()
                    },
                error:function(a){
                    return alert("Failed to dismiss license expiration notice. Sorry!")
                    }
                }),!1
        })
    })
}.call(this),function(a){
    typeof define=="function"&&define.amd?define(["jquery"],a):a(jQuery)
    }(function(a){
    function f(){
        a(this).closest(".expandingText").find("div").text(this.value+" ")
        }
        a.expandingTextarea=a.extend({
        autoInitialize:!0,
        initialSelector:"textarea.expanding"
    },a.expandingTextarea||{});
    var b=["lineHeight","textDecoration","letterSpacing","fontSize","fontFamily","fontStyle","fontWeight","textTransform","textAlign","direction","wordSpacing","fontSizeAdjust","wordWrap","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","boxSizing","webkitBoxSizing","mozBoxSizing","msBoxSizing"],c={
        position:"absolute",
        height:"100%",
        resize:"none"
    },d={
        visibility:"hidden",
        border:"0 solid",
        whiteSpace:"pre-wrap"
    },e={
        position:"relative"
    };
    
    a.fn.expandingTextarea=function(g){
        return g==="resize"?this.trigger("input.expanding"):g==="destroy"?(this.filter(".expanding-init").each(function(){
            var b=a(this).removeClass("expanding-init"),c=b.closest(".expandingText");
            c.before(b).remove(),b.attr("style",b.data("expanding-styles")||"").removeData("expanding-styles")
            }),this):(this.filter("textarea").not(".expanding-init").each(function(){
            var g=a(this).addClass("expanding-init");
            g.wrap("<div class='expandingText'></div>"),g.after("<pre class='textareaClone'><div></div></pre>");
            var h=g.parent().css(e),i=h.find("pre").css(d);
            g.data("expanding-styles",g.attr("style")),g.css(c),a.each(b,function(a,b){
                var c=g.css(b);
                i.css(b)!==c&&i.css(b,c)
                }),g.bind("input.expanding propertychange.expanding",f),f.apply(this)
            }),this)
        },a(function(){
        a.expandingTextarea.autoInitialize&&a(a.expandingTextarea.initialSelector).expandingTextarea()
        })
    }),$(function(){
    var a=$(".community .bigcount"),b=function(){
        var b=a.width()+parseInt(a.css("padding-left"))+parseInt(a.css("padding-right"));
        a.css("margin-left","-"+b/2+"px"),a.fadeIn()
        };
        
    a.length>0&&setTimeout(b,500);
    var c=$(".js-slidy-highlight");
    if(c.length>0){
        var d=c.find("li.highlight"),e=d.width()/2;
        e+=-1;
        var f=function(a){
            var b=a.closest("li"),c=b.position(),d=c.left+b.width()/2-e;
            return d+=parseInt(b.css("margin-left")),d
            };
            
        c.bind("tabChanged",function(a,b){
            var c=f(b.link);
            d.animate({
                left:c
            },300)
            });
        var g=f(c.find(".selected"));
        d.css({
            left:g
        })
        }
    }),GitHub.FileEditForkPoller=function(a,b){
    var c=$(b||document).find(".check-for-fork");
    if(c.length==0)return;
    var d=$(b||document).find("#submit-file");
    d.attr("disabled","disabled"),c.show();
    var e=c.data("check-url");
    $.smartPoller(a||2e3,function(a){
        $.ajax({
            url:e,
            error:function(b,d,e){
                b.status==404?a():c.html('<img src="/images/modules/ajax/error.png"> Something went wrong. Please fork the project, then edit this file.')
                },
            success:function(a,b,e){
                c.hide(),d.removeAttr("disabled")
                }
            })
    })
},$(function(){
    GitHub.FileEditForkPoller()
    }),$(function(){
    if($(".business .logos").length>0){
        var a=[["Shopify","shopify.png","http://shopify.com/"],["CustomInk","customink.png","http://customink.com/"],["Pivotal Labs","pivotallabs.png","http://pivotallabs.com/"],["FiveRuns","fiveruns.png","http://fiveruns.com/"],["PeepCode","peepcode.png","http://peepcode.com/"],["Frogmetrics","frogmetrics.png","http://frogmetrics.com/"],["Upstream","upstream.png","http://upstream-berlin.com/"],["Terralien","terralien.png","http://terralien.com/"],["Planet Argon","planetargon.png","http://planetargon.com/"],["Tightrope Media Systems","tightropemediasystems.png","http://trms.com/"],["Rubaidh","rubaidh.png","http://rubaidh.com/"],["Iterative Design","iterativedesigns.png","http://iterativedesigns.com/"],["GiraffeSoft","giraffesoft.png","http://giraffesoft.com/"],["Evil Martians","evilmartians.png","http://evilmartians.com/"],["Crimson Jet","crimsonjet.png","http://crimsonjet.com/"],["Alonetone","alonetone.png","http://alonetone.com/"],["EntryWay","entryway.png","http://entryway.net/"],["Fingertips","fingertips.png","http://fngtps.com/"],["Run Code Run","runcoderun.png","http://runcoderun.com/"],["Be a Magpie","beamagpie.png","http://be-a-magpie.com/"],["Rocket Rentals","rocketrentals.png","http://rocket-rentals.de/"],["Connected Flow","connectedflow.png","http://connectedflow.com/"],["Dwellicious","dwellicious.png","http://dwellicious.com/"],["Assay Depot","assaydepot.png","http://www.assaydepot.com/"],["Centro","centro.png","http://www.centro.net/"],["Debuggable Ltd.","debuggable.png","http://debuggable.com/"],["Blogage.de","blogage.png","http://blogage.de/"],["ThoughtBot","thoughtbot.png","http://www.thoughtbot.com/"],["Viget Labs","vigetlabs.png","http://www.viget.com/"],["RateMyArea","ratemyarea.png","http://www.ratemyarea.com/"],["Abloom","abloom.png","http://abloom.at/"],["LinkingPaths","linkingpaths.png","http://www.linkingpaths.com/"],["MIKAMAI","mikamai.png","http://mikamai.com/"],["BEKK","bekk.png","http://www.bekk.no/"],["Reductive Labs","reductivelabs.png","http://www.reductivelabs.com/"],["Sexbyfood","sexbyfood.png","http://www.sexbyfood.com/"],["Factorial, LLC","yfactorial.png","http://yfactorial.com/"],["SnapMyLife","snapmylife.png"
        ,"http://www.snapmylife.com/"],["Scrumy","scrumy.png","http://scrumy.com/"],["TinyMassive","tinymassive.png","http://www.tinymassive.com/"],["SOCIALTEXT","socialtext.png","http://www.socialtext.com/"],["All-Seeing Interactive","allseeinginteractive.png","http://allseeing-i.com/"],["Howcast","howcast.png","http://www.howcast.com/"],["Relevance Inc","relevance.png","http://thinkrelevance.com/"],["Nitobi Software Inc","nitobi.png","http://www.nitobi.com/"],["99designs","99designs.png","http://99designs.com/"],["EdgeCase, LLC","edgecase.png","http://edgecase.com"],["Plinky","plinky.png","http://www.plinky.com/"],["One Design Company","onedesigncompany.png","http://onedesigncompany.com/"],["CollectiveIdea","collectiveidea.png","http://collectiveidea.com/"],["Stateful Labs","statefullabs.png","http://stateful.net/"],["High Groove Studios","highgroove.png","http://highgroove.com/"],["Exceptional","exceptional.png","http://www.getexceptional.com/"],["DealBase","dealbase.png","http://www.dealbase.com/"],["Silver Needle","silverneedle.png","http://silverneedlesoft.com/"],["No Kahuna","nokahuna.png","http://nokahuna.com/"],["Double Encore","doubleencore.png","http://www.doubleencore.com/"],["Yahoo","yahoo.gif","http://yahoo.com/"],["EMI Group Limited","emi.png","http://emi.com/"],["TechCrunch","techcrunch.png","http://techcrunch.com/"],["WePlay","weplay.png","http://weplay.com/"]],b=function(){
            var b=$(".business .logos table");
            $.each(a,function(a,c){
                b.append('<tr><td><a href="'+c[2]+'" rel="nofollow"><img src="http://assets'+a%4+".github.com/images/modules/home/customers/"+c[1]+'" alt="'+c[0]+'" /></a></td></tr>')
                });
            var c=parseInt($(".business .slide").css("top")),d=$(".business .logos td").length-4,e=0,f=function(){
                e+=1;
                var a=parseInt($(".business .slide").css("top"));
                Math.abs(a+d*75)<25?($(".business .slide").css("top",0),e=0):$(".business .slide").animate({
                    top:"-"+e*75+"px"
                    },1500)
                };
                
            setInterval(f,3e3)
            };
            
        setTimeout(b,1e3)
        }
    }),$(function(){
    $("#inbox .del a").click(function(){
        var a=$(this),b=a.parents(".item"),c=b.attr("data-type")=="message"?"inbox":"notification",d=".js-"+c+"-count";
        return a.find("span.mini-icon.delete-note").replaceWith("<img src='"+GitHub.Ajax.spinner+"'/>"),$.ajax({
            type:"DELETE",
            url:a.attr("rel"),
            error:function(){
                a.find("img").attr("src",GitHub.Ajax.error)
                },
            success:function(){
                if(b.is(".unread")){
                    var a=parseInt($(d+":first").text());
                    a>0&&$(d).text(a-=1),a==0&&$(d).each(function(){
                        var a=$(this);
                        a.is(".new")?a.removeClass("new"):a.parent().is(".new")&&a.parent().removeClass("new")
                        })
                    }
                    b.remove()
                }
            }),!1
    }),$("#reveal_deleted").click(function(){
    return $(this).parent().hide(),$(".hidden_message").show(),!1
    })
}),$(function(){
    Modernizr.canvas&&$("#impact_graph").length>0&&GitHub.ImpactGraph.drawImpactGraph()
    }),GitHub.ImpactGraph={
    colors:null,
    data:null,
    chunkVerticalSpace:2,
    initColors:function(a){
        var b=[[241,127,73],[29,179,79],[165,29,179],[215,55,35],[215,153,35],[200,210,34],[29,127,179]];
        this.colors=[];
        var c=0;
        for(var d in a){
            var e=b[c%7];
            c>6&&(e=[this.randColorValue(e[0]),this.randColorValue(e[1]),this.randColorValue(e[2])]),this.colors.push(e),c+=1
            }
        },
drawImpactGraph:function(){
    var a=this,b={},c=$("#impact_graph"),d=function(d){
        a.initColors(d.authors);
        var e=a.createCanvas(d);
        d=a.padChunks(d),a.data=d,$.each(d.buckets,function(c,d){
            a.drawBucket(b,d,c)
            });
        var f=$("<p />").addClass("meta").text(Object.keys(d.authors).length+" authors over "+d.buckets.length+" weeks");
        $("#impact_legend h3").append(f),a.drawAll(e,d,b),c.animate({
            scrollLeft:c.find("canvas").attr("width")
            },"slow")
        };
        
    GitHub.loadGraph(c,d)
    },
createCanvas:function(a){
    var b=a.buckets.length*50*2-50,c=0,d,e;
    for(d=0;d<a.buckets.length;d++){
        var f=a.buckets[d],g=0;
        for(e=0;e<f.i.length;e++){
            var h=f.i[e];
            g+=this.normalizeImpact(h[1])+this.chunkVerticalSpace
            }
            g>c&&(c=g)
        }
        $("#impact_graph div").remove();
    var i=$("#impact_graph");
    $("#caption").show(),i.append('<canvas width="'+b+'" height="'+(c+30)+'"></canvas>');
    var j=$("#impact_graph canvas")[0];
    return j.getContext("2d")
    },
padChunks:function(a){
    for(var b in a.authors){
        var c=this.findFirst(b,a),d=this.findLast(b,a);
        for(var e=c+1;e<d;e++)this.bucketHasAuthor(a.buckets[e],b)||a.buckets[e].i.push([b,0])
            }
            return a
    },
bucketHasAuthor:function(a,b){
    for(var c=0;c<a.i.length;c++)if(a.i[c][0]==parseInt(b,10))return!0;return!1
    },
findFirst:function(a,b){
    for(var c=0;c<b.buckets.length;c++)if(this.bucketHasAuthor(b.buckets[c],a))return c
        },
findLast:function(a,b){
    for(var c=b.buckets.length-1;c>=0;c--)if(this.bucketHasAuthor(b.buckets[c],a))return c
        },
colorFor:function(a){
    var b=this.colors[a];
    return"rgb("+b[0]+","+b[1]+","+b[2]+")"
    },
randColorValue:function(a){
    var b=Math.round(Math.random()*100)-50,c=a+b;
    return c>255&&(c=255),c<0&&(c=0),c
    },
drawBucket:function(a,b,c){
    var d=0,e=this;
    $.each(b.i,function(b,f){
        var g=f[0],h=e.normalizeImpact(f[1]);
        a[g]||(a[g]=[]),a[g].push([c*100,d,50,h,f[1]]),d=d+h+e.chunkVerticalSpace
        })
    },
normalizeImpact:function(a){
    return a<=9?a+1:a<=5e3?Math.round(10+a/50):Math.round(100+Math.log(a)*10)
    },
drawAll:function(a,b,c){
    this.drawStreams(a,c,null),this.drawDates(b)
    },
drawStreams:function(a,b,c){
    a.clearRect(0,0,1e4,500),$(".activator").remove();
    for(var d in b)d!=c&&this.drawStream(d,b,a,!0);c!==null&&this.drawStream(c,b,a,!1)
    },
drawStream:function(a,b,c,d){
    c.fillStyle=this.colorFor(a);
    var e=b[a];
    for(var f=0;f<e.length;f++){
        var g=e[f];
        c.fillRect(g[0],g[1],g[2],g[3]),d&&this.placeActivator(a,b,c,g[0],g[1],g[2],g[3],g[4]),f!==0&&(c.beginPath(),c.moveTo(previousChunk[0]+50,previousChunk[1]),c.bezierCurveTo(previousChunk[0]+75,previousChunk[1],g[0]-25,g[1],g[0],g[1]),c.lineTo(g[0],g[1]+g[3]),c.bezierCurveTo(g[0]-25,g[1]+g[3],previousChunk[0]+75,previousChunk[1]+previousChunk[3],previousChunk[0]+50,previousChunk[1]+previousChunk[3]),c.fill()),previousChunk=g
        }
    },
drawStats:function(a,b){
    var c=b[a];
    for(var d=0;d<c.length;d++){
        var e=c[d],f=e[4];
        f>10&&this.drawStat(f,e[0],e[1]+e[3]/2)
        }
    },
drawStat:function(a,b,c){
    c-=5;
    var d="";
    d+="position: absolute;",d+="left: "+b+"px;",d+="top: "+c+"px;",d+="width: 50px;",d+="text-align: center;",d+="color: #fff;",d+="font-size: 9px;",d+="z-index: 0;",$("#impact_graph").append('<p class="stat" style="'+d+'">'+GitHub.commafy(a)+"</p>")
    },
drawDate:function(a,b,c){
    var d=$("<p />").addClass("idate").css({
        top:c+"px",
        left:b+"px",
        position:"absolute"
    }).text(a);
    $("#impact_graph").append(d)
    },
placeActivator:function(a,b,c,d,e,f,g,h){
    var i="";
    i+="position: absolute;",i+="left: "+d+"px;",i+="top: "+e+"px;",i+="width: "+f+"px;",i+="height: "+g+"px;",i+="z-index: 100;",i+="cursor: pointer;";
    var j="a"+d+"-"+e;
    $("#impact_graph").append('<div class="activator" id="'+j+'" style="'+i+'">&nbsp;</div>');
    var k=this;
    $("#"+j).mouseover(function(a){
        $(a.target).css("background-color","black").css("opacity","0.08")
        }).mouseout(function(a){
        $(a.target).css("background-color","transparent")
        }).mousedown(function(){
        $stats.increment("graphs.impact.clickblock"),$(".stat").remove(),k.drawStreams(c,b,a),k.drawStats(a,b),k.drawSelectedAuthor(a)
        })
    },
drawDates:function(a){
    var b=this;
    $.each(a.buckets,function(a,c){
        var d=0,e=new Date;
        $.each(c.i,function(a,c){
            d+=b.normalizeImpact(c[1])+1
            }),e.setTime(c.d*1e3),b.drawDate(moment(e).format("MMM DD 'YY"),a*100,d+7)
        })
    },
authorText:function(a,b,c){
    var d=$("<p />").attr("id","author_text").addClass("person").html(a);
    $("#impact_legend").html(d)
    },
drawSelectedAuthor:function(a){
    this.clearSelectedAuthor();
    var b=this.data.authors[a],c=b.n,d=b.c,e=b.a,f=b.d,g='<span class="cmt"><a href="../commits?author='+c+'">'+GitHub.commafy(d)+" commits</a></span> / ";
    g+='<span class="a">'+GitHub.commafy(e)+"++</span> / ",g+='<span class="d">'+GitHub.commafy(f)+"--</span>",this.authorText('<h3><a href="/'+c+'">'+c+"</a>"+'<span class="ameta">'+g+"</span>",20,0)
    },
clearAuthor:function(){
    $("#author_text").remove()
    },
clearSelectedAuthor:function(){
    $("#author_text").remove()
    }
},GitHub.BaseBrowser={
    pagingLimit:99,
    showingClosed:!1,
    showingOpen:!0,
    showingRead:!0,
    activeSort:["created","desc"],
    currentPage:1,
    initialized:!1,
    errored:!1,
    lastUrl:null,
    lastPage:1,
    listings:$(),
    openListings:$(),
    closedListings:$(),
    unreadListings:$(),
    filteredListings:$(),
    listingsElement:null,
    noneShownElement:null,
    errorElement:null,
    titleElement:null,
    footerElement:null,
    sortElements:null,
    pagingElement:null,
    init:function(a){
        var b=this;
        this.wrapper=$(a);
        if(this.initialized)return alert("Only one IssueBrowser per page can exist");
        if(this.wrapper.length==0)return!1;
        this.listingsElement=this.wrapper.find(".listings"),this.noneShownElement=this.wrapper.find(".none"),this.errorElement=this.wrapper.find(".error"),this.titleElement=this.wrapper.find("h2"),this.footerElement=this.wrapper.find(".footerbar-text"),this.pagingElement=this.wrapper.find(".paging");
        var c=this.wrapper.find("ul.filters li");
        c.each(function(){
            var a=$(this);
            switch(a.attr("data-filter")){
                case"open":
                    b.showingOpen&&a.addClass("selected"),a.click(function(){
                    a.toggleClass("selected"),b.showOpen(a.hasClass("selected"))
                    });
                break;
                case"closed":
                    b.showingClosed&&a.addClass("selected"),a.click(function(){
                    a.toggleClass("selected"),b.showClosed(a.hasClass("selected"))
                    });
                break;
                case"read":
                    b.showingRead&&a.addClass("selected"),a.click(function(){
                    a.toggleClass("selected"),b.showRead(a.hasClass("selected"))
                    })
                }
                }),this.sortElements=this.wrapper.find("ul.sorts li");
    var d=null;
    this.sortElements.each(function(){
        var a=$(this);
        a.attr("data-sort")==b.activeSort[0]&&(d=a.addClass(b.activeSort[1])),a.click(function(){
            var a=$(this);
            d&&d.attr("data-sort")!=a.attr("data-sort")&&d.removeClass("asc").removeClass("desc"),a.hasClass("desc")?(b.sortBy(a.attr("data-sort"),"asc"),a.removeClass("desc").addClass("asc")):(b.sortBy(a.attr("data-sort"),"desc"),a.removeClass("asc").addClass("desc")),d=a
            })
        }),this.pagingElement.find(".button-pager").click(function(){
        return b.showMore(),!1
        }),this.initNavigation(),this.initialized=!0;
    var e=this.listingsElement.find(".preloaded-content");
    e.length>0&&(this.selectedLink=$(this.wrapper.find('a[href="'+e.attr("data-url")+'"]').get(0)),this.selectedLink.addClass("selected"),this.lastUrl=this.selectedLink.attr("href"),this.render(this.listingsElement.innerHTML))
    },
initNavigation:function(){
    var a=this;
    this.selectedLink=null,this.wrapper.find("ul.bignav a, ul.smallnav a").click(function(b){
        var c=$(this);
        return b.which==2||b.metaKey?!0:(Modernizr.history&&!c.hasClass("js-stateless")&&window.history.replaceState(null,document.title,c.attr("href")),a.selectedLink&&c.attr("href")==a.selectedLink.attr("href")&&!a.errored?!1:(a.remoteUpdate(c.attr("href")),a.selectedLink&&a.selectedLink.removeClass("selected"),a.selectedLink=$(this).addClass("selected"),!1))
        });
    var b=this.wrapper.find(".filterbox input"),c=this.wrapper.find("ul.smallnav"),d=c.find("li"),e=function(){
        d.show(),b.val()!=""&&d.filter(":not(:Contains('"+b.val()+"'))").hide()
        },f=b.val();
    b.bind("keyup blur click",function(){
        if(this.value==f)return;
        f=this.value,e()
        })
    },
getPulls:function(a,b){
    var c=this;
    b==undefined&&(b={}),a!=this.lastUrl&&(this.currentPage=1),this.startLoading(),$.ajax({
        url:a,
        data:b,
        success:function(d){
            c.errored=!1,c.cancelLoading(),c.errorElement.hide(),c.lastPage==b["page"]||b["page"]==1||b["page"]==undefined?c.render(d):c.render(d,!0),c.lastUrl=a,b.page&&(c.lastPage=b.page)
            },
        error:function(){
            c.errored=!0,c.showError()
            }
        })
},
startLoading:function(){
    this.wrapper.addClass("loading")
    },
cancelLoading:function(){
    this.wrapper.removeClass("loading")
    },
showError:function(){
    this.cancelLoading(),this.listings&&this.listings.hide(),this.noneShownElement.hide(),this.errorElement.show()
    },
render:function(a,b){
    b==undefined&&(b=!1),b?this.listingsElement.append(a):this.listingsElement.html(a),this.listings=this.listingsElement.find(".listing"),this.listingsElement.pageUpdate(),this.currentPage==1&&this.listings.length>=this.pagingLimit&&(this.pagingElement.show(),$(this.listings[this.listings.length-1]).remove(),this.listings=this.listingsElement.find(".listing"));
    if(b){
        this.pagingElement.hide();
        var c=$("<div>").append(a).find(".listing");
        c>this.pagingLimit&&(this.pagingElement.show(),$(this.listings[this.listings.length-1]).remove(),this.listings=this.listingsElement.find(".listing"))
        }
        this.closedListings=this.listings.filter("[data-state=closed]"),this.openListings=this.listings.filter("[data-state=open]"),this.readListings=this.listings.filter("[data-read=1]"),this.setCounts(this.openListings.length,this.closedListings.length),this.update()
    },
plural:function(a){
    return a==1?"request":"requests"
    },
setCounts:function(a,b){
    var c=a+" open "+this.plural(a),d=a+" open "+this.plural(a)+" and "+b+" closed "+this.plural(b);
    this.titleElement.text(c),this.footerElement.text(d)
    },
showOpen:function(a){
    this.currentPage=1,a?this.showingOpen=!0:this.showingOpen=!1,this.remoteUpdate()
    },
showRead:function(a){
    a?this.showingRead=!0:this.showingRead=!1,this.update()
    },
showClosed:function(a){
    this.currentPage=1,a?this.showingClosed=!0:this.showingClosed=!1,this.remoteUpdate()
    },
showMore:function(){
    return this.currentPage++,this.remoteUpdate(),!0
    },
sortBy:function(a,b){
    return this.activeSort=[a,b],this.currentPage=1,this.remoteUpdate()
    },
update:function(){
    if(this.listings==null)return;
    this.listings.show(),this.showingClosed||this.closedListings.hide(),this.showingOpen||this.openListings.hide(),this.showingRead||this.readListings.hide(),this.filteredListings.hide();
    var a=this.listings.filter(":visible").length;
    a==0?this.noneShownElement.show():this.noneShownElement.hide()
    },
remoteUpdate:function(a){
    a||(a=this.lastUrl);
    var b={
        sort:this.activeSort[0],
        direction:this.activeSort[1],
        page:this.currentPage,
        exclude:["none"]
        };
        
    if(!this.showingClosed||!this.showingOpen)this.showingOpen||b.exclude.push("open"),this.showingClosed||b.exclude.push("closed"),b.exclude=b.exclude.join(",");
    this.getPulls(a,b)
    }
},GitHub.PullRequestBrowser={},jQuery.extend(!0,GitHub.PullRequestBrowser,GitHub.BaseBrowser),$(function(){
    $("#js-issue-list").length>0&&GitHub.PullRequestBrowser.init("#js-issue-list")
    }),function(){
    $(function(){
        var a,b;
        a=$("#issues_list");
        if(!a.length)return;
        return b=function(){
            return $.pjax.reload(a)
            },a.on("navigation:keydown",".issues .issue",function(a){
            if(a.hotkey==="x")return $(this).click().trigger("change")
                }),a.selectableList(".js-selectable-issues",{
            wrapperSelector:"",
            itemParentSelector:".issue",
            enableShiftSelect:!0,
            ignoreLinks:!0
            }),a.on("click",".milestone-context .pane-selector .milestone",function(){
            var a;
            return a=$(this),a.closest(".milestone-context").attr("data-selected-milestone",a.attr("data-milestone")),a.menu("deactivate")
            }),a.selectableList(".sidebar ul.labels"),a.on("click",".js-editable-labels-container .js-manage-labels",function(){
            var a,b,c,d;
            return a=$(this),b=a.closest(".js-editable-labels-container"),d=b.find(".js-editable-labels-show"),c=b.find(".js-editable-labels-edit"),d.is(":visible")?(d.hide(),c.show(),a.addClass("selected"),$(document).on("keydown.manage-labels",function(b){
                if(b.keyCode===27)return a.click()
                    })):(c.hide(),d.show(),a.removeClass("selected"),$(document).off("keydown.manage-labels")),!1
            }),a.selectableList("ul.color-chooser",{
            wrapperSelector:"li.color",
            mutuallyExclusive:!0
            }),a.on("click",".js-custom-color-field a",function(){
            var a;
            return a=$(this).closest(".js-custom-color-field"),a.find(".field").show(),!1
            }),a.on("textchange",".js-custom-color-field input[type=text]",function(a,b){
            var c;
            if(b.length===6)return c=$(this).closest(".js-custom-color-field"),c.find(".field").find("input[type=radio]").val(b).attr("checked","checked"),c.find("a").html("Custom color: <strong>#"+b+"</strong>")
                }),a.on("focusin",".js-new-label-form .js-label-field",function(){
            return $(this).closest(".js-new-label-form").find(".js-color-chooser-fade-in").fadeIn(300)
            }),a.on("change",".select-toggle",function(){
            var b;
            return b=a.find(".issue.selected").length,a.find(".issues .actions .buttons").toggleClass("activated",b).toggleClass("deactivated",!b)
            }),a.find(":checked").removeAttr("checked"),a.on("click",".issues .btn-close, .issues .btn-reopen",function(){
            var c;
            return $.ajax({
                method:"put",
                url:$(this).attr("data-url"),
                data:{
                    issues:function(){
                        var b,d,e,f;
                        e=a.find(".issues :checked"),f=[];
                        for(b=0,d=e.length;b<d;b++)c=e[b],f.push($(c).val());
                        return f
                        }()
                    },
                success:b
            })
            }),a.selectableList(".label-context ul.labels"),a.on("click",".issues .btn-label",function(){
            var b,c,d,e,f,g,h;
            d=a.find(".issues :checked").closest(".issue").find(".label"),c=a.find(".label-context"),c.find(".label a.selected").removeClass("selected"),c.find(":checked").attr("checked",!1),h=[];
            for(f=0,g=d.length;f<g;f++)b=d[f],e=$(b).attr("data-name"),c.find(".label[data-name='"+e+"'] a").addClass("selected"),h.push(c.find(".label[data-name='"+e+"'] :checkbox").attr("checked",!0));
            return h
            }),a.on("click",".label-context button.update-labels",function(){
            var c;
            return $(this).menu("deactivate"),$.ajax({
                url:a.find(".label-context ul.labels").attr("data-url"),
                method:"put",
                data:{
                    labels:function(){
                        var b,d,e,f;
                        e=a.find(".label-context ul.labels :checked"),f=[];
                        for(b=0,d=e.length;b<d;b++)c=e[b],f.push($(c).val());
                        return f
                        }(),
                    issues:function(){
                        var b,d,e,f;
                        e=a.find(".issues :checked"),f=[];
                        for(b=0,d=e.length;b<d;b++)c=e[b],f.push($(c).val());
                        return f
                        }()
                    },
                complete:b
            })
            }),a.on("change",".assignee-assignment-context :radio",function(c){
            var d,e;
            return e=$(c.target).closest(".assignee-assignment-context").find(":checked"),$.ajax({
                method:"put",
                url:e.attr("data-url"),
                data:{
                    assignee:e.val(),
                    issues:function(){
                        var b,c,e,f;
                        e=a.find(".issues :checked"),f=[];
                        for(b=0,c=e.length;b<c;b++)d=e[b],f.push($(d).val());
                        return f
                        }()
                    },
                success:b
            })
            }),a.pageUpdate(function(){
            var c;
            return c=a.find(".js-filterable-milestones").milestoneSelector(),c.off(".milestoneSelector"),c.on("beforeAssignment.milestoneSelector",function(){
                var b,c;
                return c=function(){
                    var c,d,e,f;
                    e=a.find(".issues :checked"),f=[];
                    for(c=0,d=e.length;c<d;c++)b=e[c],f.push($(b).val());
                    return f
                    }(),$(this).attr("data-issue-numbers",c.join(","))
                }),c.on("afterAssignment.milestoneSelector",b)
            }),a.pageUpdate()
        })
    }.call(this),function(a){
    a.fn.milestoneSelector=function(b){
        var c=a.extend({},a.fn.milestoneSelector.defaults,b);
        return this.each(function(){
            var b=a(this),d=b.closest(".context-pane"),e=b.find(".selector-item"),f=b.find(".milestone-item"),g=f.filter(".open-milestone"),h=f.filter(".closed-milestone"),i=e.filter(".for-selected"),j=b.find(".new-milestone-item"),k=b.find(".no-results"),l=b.find(".milestone-filter"),m=a(".js-milestone-infobar-item-wrapper");
            b.closest(".js-menu-container").on("menu:activate",function(){
                b.trigger("navigation:activate")
                }).on("menu:deactivate",function(){
                b.trigger("navigation:deactivate")
                });
            if(b.find("form").length==0){
                c.newMode=!0;
                var n=a("input[name='issue[milestone_id]']"),o=a("input[name='new_milestone_title']")
                }
                var p="open",q=null;
            b.find(".tabs a").click(function(){
                return b.find(".tabs a.selected").removeClass("selected"),a(this).addClass("selected"),p=a(this).attr("data-filter"),u(),!1
                }),l.on("textchange",function(a,b){
                q=b,u()
                }),b.on("navigation:open",".milestone-item",function(){
                r(this)
                }),e.click(function(){
                r(this)
                }),d.bind("deactivated.contextPane",function(){
                y(),l.val(""),l.trigger("keyup")
                });
            var r=function(e){
                e=a(e);
                if(e.length==0)return;
                if(e.hasClass("new-milestone-item"))return s(e);
                var g=e.find("input[type=radio]");
                if(g[0].checked)return;
                g[0].checked=!0,b.trigger("beforeAssignment.milestoneSelector"),c.newMode?(n.val(g[0].value),f.removeClass("selected"),e.addClass("selected"),d.menu("deactivate"),b.trigger("afterAssignment.milestoneSelector")):t({
                    url:g[0].form.action,
                    params:{
                        milestone:g[0].value,
                        issues:b.attr("data-issue-numbers").split(",")
                        }
                    })
            },s=function(a){
            b.trigger("beforeAssignment.milestoneSelector"),c.newMode?(n.val("new"),o.val(l.val()),f.removeClass("selected"),a.addClass("selected"),d.menu("deactivate"),b.trigger("afterAssignment.milestoneSelector")):t({
                url:a.closest("form").attr("action"),
                params:{
                    new_milestone:l.val(),
                    issues:b.attr("data-issue-numbers").split(",")
                    }
                })
        },t=function(c){
            v(),a.ajax({
                type:"PUT",
                url:c.url,
                data:c.params,
                success:function(a){
                    w(),m.html(a.infobar_body).pageUpdate(),d.menu("deactivate"),b.html(a.context_pane_body).milestoneSelector().pageUpdate(),b.trigger("afterAssignment.milestoneSelector")
                    },
                error:function(){
                    w(),x()
                    }
                })
        },u=function(){
        var b=null;
        p=="open"?(i.show(),h.hide(),b=g):(i.hide(),g.hide(),b=h),q!=""&&q!=null?(b.each(function(){
            var b=a(this),c=b.find(".milestone-title").text().toLowerCase();
            c.score(q)>0?b.show():b.hasClass("selected")||b.hide()
            }),j.find(".milestone-title").text(q),j.show(),k.hide(),i.hide()):(b.each(function(){
            a(this).show()
            }),b.length==0?k.show():k.hide(),j.hide())
        };
        
    u();
    var v=function(){
        d.find(".context-body").append('<div class="loader">Loadingâ€¦</div>')
        },w=function(){
        d.find("context-.body .loader").remove()
        },x=function(a){
        a==null&&(a="Sorry, an error occured"),d.find(".context-body").append('<div class="error-message">'+a+"</div>")
        },y=function(){
        d.find(".context-body .error-message").remove()
        }
    })
},a.fn.milestoneSelector.defaults={}
}(jQuery),$(function(){
    var a=$("#issues_next #js-new-issue-form");
    if(a.length==0)return;
    a.selectableList("ul.labels");
    var b=function(b){
        var c=a.find("input.title");
        c.val().length>0?(c.addClass("valid"),$(".js-title-missing-error").hide()):(c.removeClass("valid"),$(".js-title-missing-error").show())
        };
        
    a.bind("submit",function(a){
        b();
        if($(".js-title-missing-error").is(":visible"))return!1
            }),a.find("input.title").keyup(b).change(b);
    var c=a.find(".infobar .milestone .text"),d=a.find(".js-filterable-milestones").milestoneSelector();
    d.bind("afterAssignment.milestoneSelector",function(){
        d.menu("deactivate");
        var a=d.find(".selected");
        a.hasClass("clear")?c.html("No milestone"):a.hasClass("new-milestone-item")?c.html("Milestone: <strong>"+a.find("p").text()):c.html("Milestone: <strong>"+a.find("h4").text())
        })
    }),$(function(){
    var a=$("#issues_next #issues_search");
    if(a.length==0)return;
    var b=$("#js-issues-quicksearch").val();
    a.find("input[type=radio], select").change(function(a){
        var c=$(this).closest("form");
        c.find("#search_q").val(b),c.submit()
        })
    }),$(function(){
    var a=$("#issues_next #show_issue");
    if(a.length==0)return;
    a.find(".assignee-context").on("change","input[type=radio]",function(){
        $(this).closest("form").submit()
        }),a.find(".js-filterable-milestones").milestoneSelector(),$(a).on("keyup",".js-label-filter",function(b){
        var c=a.find(".js-filterable-labels li"),d=$(this).val();
        d!=""&&d!=null?c.each(function(){
            var a=$(this),b=a.text().toLowerCase();
            b.score(d)>0?a.show():a.hide()
            }):c.show()
        }),$(a).on("keydown",".js-label-filter",function(a){
        if(a.hotkey==="enter")return!1
            }),$(a).on("change",".js-autosubmitting-labels input[type=checkbox]",function(){
        var a=$(this).closest("form");
        $.post(a.attr("action"),a.serialize(),function(a){
            $(".discussion-labels > .labels").html(a.labels)
            },"json")
        }),a.selectableList(".js-selectable-labels")
    }),function(){
    var a=location.pathname+location.hash,b=a.match(/#issue\/(\d+)(\/comment\/(\d+))?/);
    if(b){
        var c=b[1],d=b[3];
        c&&(d?window.location=a.replace(/\/?#issue\/\d+\/comment\/\d+/,"/"+c+"#issuecomment-"+d):window.location=a.replace(/\/?#issue\/\d+/,"/"+c))
        }
    }(),jQuery(function(a){
    var b=a("#issues_next");
    if(b.length==0)return;
    var c=a("#js-issues-quicksearch"),d=!0;
    if(c.length>0){
        var e=b.find(".btn-new-issue"),f=c.offset();
        b.find(".search .autocomplete-results").css({
            left:c.position().left,
            width:e.offset().left-f.left+e.outerWidth(!0)
            }),c.quicksearch({
            results:b.find(".search .autocomplete-results"),
            insertSpinner:function(a){
                c.closest("form").prepend(a)
                }
            }).bind("focus",function(b){
        d&&($stats.increment("ui.quicksearch.focused"),d=!1),a(this).closest(".fieldwrap").addClass("focused")
        }).bind("blur",function(b){
        a(this).closest(".fieldwrap").removeClass("focused")
        }).css({
        outline:"none"
    })
    }
}),$(function(){
    var a=$(".github-jobs-promotion");
    if(a.get(0)==null)return;
    a.css({
        visibility:"hidden"
    }),window.jobsWidgetCallback=function(b){
        var c=Math.floor(Math.random()*b.jobs.length),d=b.jobs[c];
        a.find(".job-link").attr("href",d.url),a.find(".job-company").text(d.company),a.find(".job-position").text(d.position),a.find(".job-location").text(d.location),a.css({
            visibility:"visible"
        })
        },$.getScript(a.attr("url"))
    }),function(){
    GitHub.loadGraph=function(a,b){
        var c,d,e,f,g,h;
        return a=$(a).css("min-height","500px"),d=$("<img />").addClass("dots").attr("src","/images/spinners/octocat-spinner-64.gif"),c=$("<div />").addClass("activity"),f=$("<p />").addClass("msg").text("Generating data for the first time.  Hang tight for a moment...").hide(),c.append(d).append(f),a.append(c),h=document.location.pathname.split("/"),g=h[h.length-1],e=""+document.location.pathname+"-data",$stats.increment("graphs."+g+".loading"),$.smartPoller(function(d){
            return $.getJSON(e,function(a){
                return $stats.increment("graphs."+g+".loaded"),c.remove(),f.remove(),b(a)
                }).error(function(b,e,g){
                var h;
                return b.status===202?(f.show(),d()):(c.remove(),h=$("<div />").addClass("error").text(""+e+": "+g),a.append(h))
                })
            })
        }
    }.call(this),function(){
    $(function(){
        return $(".site-logo").on("contextmenu",function(){
            return $.facebox({
                div:"#logo-popup"
            },"logo-popup clearfix"),!1
            })
        })
    }.call(this),GitHub=GitHub||{},GitHub.metric=function(a,b){
    if(!window.mpq)return GitHub.metric=$.noop;
    b?mpq.push([b.type||"track",a,b]):mpq.push(["track",a])
    },GitHub.trackClick=function(a,b,c){
    if(!window.mpq)return GitHub.trackClick=$.noop;
    $(a).click(function(){
        return c=$.isFunction(c)?c.call(this):c,GitHub.metric(b,c),!0
        })
    },$(function(){
    var a=GitHub.trackClick;
    a("#entice-signup-button","Entice banner clicked"),a("#coupon-redeem-link","Clicked Dec 2010 Sale Notice"),a(".watch-button","Watched Repo",{
        repo:GitHub.nameWithRepo
        }),a(".unwatch-button","Unwatched Repo",{
        repo:GitHub.nameWithRepo
        }),a(".btn-follow","Followed User",function(){
        return{
            user:$(this).attr("data-user")
            }
        }),a(".btn-unfollow","Unfollowed User",function(){
    return{
        user:$(this).attr("data-user")
        }
    })
}),DateInput.prototype.resetDate=function(){
    $(".date_selector .selected").removeClass("selected"),this.changeInput("")
    },$(function(){
    $("input.js-date-input").each(function(){
        var a=new DateInput(this);
        a.hide=$.noop,a.show(),$(this).hide(),$(".date_selector").addClass("no_shadow")
        }),$("label.js-date-input a").click(function(a){
        var b=$("input.js-date-input").data("datePicker");
        b.resetDate()
        })
    }),function(){
    var a;
    a=function(a){
        var b;
        return $(a).toggleClass("unread read"),b=$(a).closest(".content").find(".filterbar .unread-count"),b.text(b.text()-1)
        },$(document).on("click",".js-notification-target",function(){
        return a($(this).closest(".js-notification"))
        }),$(document).on("ajaxSuccess",".js-delete-notification",function(){
        return a($(this).closest(".js-notification"))
        }),$(document).on("ajaxSuccess",".js-mark-all-as-read",function(){
        var a;
        return a=$(this).closest(".content"),a.find(".unread").toggleClass("unread read"),a.find(".filterbar .unread-count").text(0)
        }),$(document).on("navigation:keydown",".js-notification",function(a){
        switch(a.hotkey){
            case"I":
                return $(this).find(".js-delete-notification").submit(),!1;
            case"y":
                return $(this).trigger("navigation:next"),$(this).find(".js-delete-notification").submit(),$(this).hide(),!1
                }
            })
}.call(this),function(){
    var a,b,c,d,e;
    if(!$.support.pjax)return;
    d=function(){
        if($("#notification-reposcreen").is(":visible"))return;
        return $(document.body).addClass("screen-active"),$("#notification-reposcreen").show(),$(document).on("click.notification-screen",".close-popup, .context-overlay",function(b){
            return b.preventDefault(),a()
            }),$(document).on("keydown.notification-screen",function(b){
            if(b.hotkey==="esc")return a()
                })
        },c=function(){
        if(!$("#notification-reposcreen").is(":visible"))return;
        return $(document).off(".notification-screen"),$(document.body).removeClass("screen-active"),$("#notification-reposcreen").hide()
        },e=function(){
        return location.pathname.match(/\/notifications$/)?d():c()
        },$(document).on("click",".notice-tab > a",function(a){
        $.pjax.click(a,"#repo-specific-notifications"),a.isDefaultPrevented()&&e()
        }),b=0,a=function(){
        return history.go(b),b=0
        },$(document).on("pjax:send","#repo-specific-notifications",function(){
        return b--
        }),$(window).on("pjax:popstate","#repo-specific-notifications",function(a){
        return a.direction==="forward"?b--:b++,e()
        })
    }.call(this),$(function(){
    var a=$("#organization-transforming");
    a.length&&$.smartPoller(100,function(b){
        $.getJSON(a.data("url"),function(a){
            a?b():window.location="/login"
            })
        }),$("#members_bucket .remove-user").click(function(){
        var a,b=$(this),c=b.parents("li:first").find(".login").text(),d="Are you POSITIVE you want to remove "+c+" from "+"your organization?";
        return confirm(d)?(b.spin().remove(),a=$("#spinner").addClass("remove"),$.ajax({
            type:"DELETE",
            url:b.attr("href"),
            success:function(){
                a.parent().remove()
                }
            }),!1):!1
    })
}),$(function(){
    $(".js-coupon-click-onload").click(),$(document).on("click",".js-add-cc",function(a){
        return $(document).one("reveal.facebox",function(){
            $("#facebox .js-thanks, #facebox .rule:first").hide()
            }),$.facebox({
            div:this.href
            }),!1
        }),$(document).on("click",".js-close-facebox",function(){
        $(document).trigger("close.facebox")
        });
    var a=$("table.upgrades");
    $(document).on("mousedown",".js-plan-change",function(a){
        var b=$(this).closest("tr").attr("data-name");
        $(".js-new-plan-name-val").val(b),$(".js-new-plan-name").text(b),b=="free"?$(".js-new-plan-card-on-file").hide():$(".js-new-plan-card-on-file").show()
        }),$(".selected .choose_plan").click(),$(".js-show-credit-card-form")[0]&&($.facebox({
        div:"#credit_card_form"
    }),$(document).unbind("close.facebox").bind("close.facebox",function(){
        window.location="/account/billing"
        })),$(document).on("submit",".js-coupon-form",function(){
        return $(this).find("button").attr("disabled",!0).after(' <img src="/images/spinners/octocat-spinner-16px.gif">'),$.ajax({
            url:this.action,
            type:this.method,
            data:{
                code:$(this).find(":text").val()
                },
            error:function(a){
                $("#facebox .content").html(a.responseText)
                },
            success:function(a){
                $("#facebox .content").html(a),$(document).unbind("close.facebox").bind("close.facebox",function(){
                    var a=window.location.pathname;
                    window.location=/organizations/.test(a)?a:"/account/billing"
                    })
                }
            }),!1
    })
}),$(function(){
    if(!$("body").hasClass("page-compare"))return!1;
    var a=function(a){
        return a.charAt(0).toUpperCase()+a.slice(1)
        },b=$("#compare").data("base"),c=$("#compare").data("head"),d=null;
    $(".compare-range .commit-ref.to").click(function(){
        return d="end",$.facebox({
            div:"#compare_chooser"
        }),!1
        }),$(".compare-range .commit-ref.from").click(function(){
        return d="start",$.facebox({
            div:"#compare_chooser"
        }),!1
        });
    var e=function(){
        var e=$("#facebox .ref-autocompleter"),f=$("#facebox button.choose-end"),g=$("#facebox button.refresh");
        e.val(d=="start"?b:c),$("#facebox .mode-upper").text(a(d)),$("#facebox .mode-lower").text(d),d=="start"?f.show():f.hide()
        },f=function(){
        var a=$("#facebox .ref-autocompleter");
        if(a.length==0)return;
        var f=$("#facebox .commit-preview-holder"),g=$("#facebox button.refresh"),h=$(".compare-range").attr("url-base");
        e(),g.click(function(){
            return d=="start"?b=a.val():c=a.val(),$(document).trigger("close.facebox"),document.location=h+b+"..."+c,!1
            }),a.click(function(){
            return this.focus(),this.select(),!1
            });
        var i=!1,j=null,k=function(){
            i&&j.abort(),i=!0,j=$.get(f.attr("url_base")+a.val(),null,function(a){
                a.length>0&&(f.html(a),f.find("a").attr("target","_blank"),f.pageUpdate()),i=!1
                })
            };
            
        k();
        var l=a.val(),m=null,n=function(){
            if(l!=a.val()||m==a.val()){
                l=a.val();
                return
            }
            k(),m=a.val()
            };
            
        a.keyup(function(){
            l=this.value,setTimeout(n,1e3)
            }),a.click()
        };
        
    $(document).bind("reveal.facebox",f),b==c&&$(".compare-range .commit-ref.from").click();
    var g=window.location.hash.substr(1);
    (/^diff-/.test(g)||/^L\d+/.test(g))&&$("li a[href='#files_bucket']").click()
    }),function(){
    $(function(){
        var a;
        if($(".js-leaving-form")[0])return a=function(){
            var a;
            return a=new WufooForm,a.initialize({
                userName:"github",
                formHash:"q7x4a9",
                autoResize:!0,
                height:"504",
                ssl:!0
                }),$(".js-leaving-form").html(a.generateFrameMarkup())
            },function(){
            var b,c;
            return b=document.location.protocol==="https:"?"https://secure.":"http://",c=document.createElement("script"),c.type="text/javascript",c.src=""+b+"wufoo.com/scripts/embed/form.js",c.onload=a,$("head")[0].appendChild(c)
            }()
            })
    }.call(this),$(function(){
    function c(){
        var a=b.find("input.title");
        a.val().length>0?(a.addClass("valid"),b.find(".js-title-missing-error").hide()):(a.removeClass("valid"),b.find(".js-title-missing-error").show())
        }
        if(!$("body").hasClass("page-newpullrequest"))return!1;
    $(".pull-form a[action=preview]").click(function(){
        var a=$(".pull-form .content-body"),b=$(".pull-form").attr("data-preview-url"),c=$(this).closest("form");
        a.html("<p>Loading preview ...</p>"),$.post(b,c.serialize(),function(b){
            a.html(b)
            })
        });
    var a=$(".btn-change");
    a.data("expand-text",a.text()),a.data("collapse-text",a.attr("data-collapse-text")),a.data("state","collapsed"),$(".editor-expander").click(function(){
        return a.data("state")=="collapsed"?(a.find("span").text(a.data("collapse-text")),a.data("state","expanded"),$(".range-editor").slideDown
            ("fast"),$(".pull-form-main .form-actions button").hide(),$(".pull-tabs, .tab-content").css({
                opacity:.45
            })):(a.find("span").text(a.data("expand-text")),a.data("state","collapsed"),$(".range-editor").slideUp("fast"),$(".pull-form-main .form-actions button").show(),$(".pull-tabs, .tab-content").css({
            opacity:1
        })),!1
        });
    var b=$(".new-pull-request form");
    b.submit(function(){
        if(!b.attr("data-update")){
            c();
            if($(".js-title-missing-error").is(":visible"))return!1;
            GitHub.metric("Sent Pull Request",{
                "Pull Request Type":"New School",
                Action:GitHub.currentAction,
                "Ref Type":GitHub.revType
                })
            }
        }),$("button#update_commit_range").click(function(){
    b.attr("data-update","yes"),b.attr("action",$(this).data("url")),b.submit()
    }),$(".range-editor").find("input, select").keypress(function(a){
    a.keyCode==13&&a.preventDefault()
    }),$(".js-refchooser").each(function(){
    $(this).refChooser({
        change:function(){
            $(this).attr("data-ref-valid",!1),$("button#update_commit_range").attr("disabled",!0)
            },
        found:function(){
            $(this).attr("data-ref-valid",!0),$(".js-refchooser[data-ref-valid=false]").length==0&&$("button#update_commit_range").removeAttr("disabled")
            }
        });
var a=$(this).find(".js-ref"),b=$(this).find("select");
    a.focus(function(){
    window.setTimeout(function(){
        a[0].selectionStart=0,a[0].selectionEnd=a.val().length
        },1)
    })
})
}),function(a){
    a.fn.refChooser=function(b){
        var c=a.extend({},a.fn.refChooser.defaults,b);
        return this.each(function(){
            function n(){
                var b=i.find("ul").empty();
                a.ajax({
                    url:"/"+e.val()+"/branches",
                    dataType:"json",
                    success:function(c){
                        b.append(a.map(c,function(b){
                            return a("<li>",{
                                "class":"autocomplete-result js-navigation-item",
                                "data-autocomplete-value":b,
                                text:b
                            })[0]
                            }))
                        }
                    })
            }
            var b=this,d=a(this),e=d.find(".js-source"),f=d.find(".js-ref"),g=d.find(".js-commit-preview"),h=d.attr("data-preview-url-base"),i=d.find(".autocomplete-results"),j={
            repo:d.attr("data-error-repo")
            },k=!1,l=null,m=function(){
            if(e.val()==""){
                g.html('<p class="error">'+j.repo+"</p>"),c.missing.call(d);
                return
            }
            var i=h+e.val().split("/")[0]+":"+f.val();
            k&&l.abort(),k=!0,l=a.get(i,null,function(a){
                a.length>0&&(g.html(a),g.pageUpdate(),g.find(".error").length==0?c.found.call(b):c.missing.call(b)),k=!1
                })
            };
            
        i.find("ul").on("filterable:change",function(){
            a(this).trigger("autocomplete:change")
            }),f.on("autocomplete:search",function(){
            c.change.call(b),m()
            });
        var o=e.val();
            e.change(function(){
            if(this.value==o)return;
            c.change.call(b),o=this.value,m(),n()
            })
        })
    },a.fn.refChooser.defaults={
    found:function(){},
    change:function(){},
    missing:function(){}
}
}(jQuery),function(){
    var a,b=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        };
    
a=function(){
    function a(){
        this.handleNameCheck=b(this.handleNameCheck,this),this.selectedPrivacyToggleElement=b(this.selectedPrivacyToggleElement,this),this.handleOwnerChange=b(this.handleOwnerChange,this);
        var a=this;
        if($("body").data("new-repo-setup"))return;
        $("body").data("new-repo-setup",!0),this.elements={
            ownerContainer:$(".js-owner-container"),
            upgradeUpsell:$("#js-upgrade-container").hide(),
            upgradeConfirmationCheckbox:$(".js-confirm-upgrade"),
            upsells:$(".js-upgrade"),
            privacyToggles:$(".js-privacy-toggle"),
            privateRadio:$(".js-privacy-toggle[value=false]"),
            publicRadio:$(".js-privacy-toggle[value=true]"),
            repoNameField:$("input[type=text].js-repo-name"),
            form:$("#new_repository"),
            ignoreContainer:$(".js-ignore-container"),
            autoInitCheckbox:$(".js-auto-init-checkbox"),
            teamBoxes:$(".js-team-select")
            },this.current_login=$("input[name=owner]:checked").prop("value"),this.privateRepo=!1,this.changedPrivacyManually=!1,this.elements.teamBoxes.hide(),this.elements.ignoreContainer.on("change","input[type=radio]",function(){
            return $(".js-auto-init-checkbox").prop("checked",!0)
            }),this.elements.ownerContainer.on("change","input[type=radio]",this.handleOwnerChange),this.elements.privacyToggles.on("change",function(b){
            return a.handlePrivacyChange(b.targetElement,b)
            }),this.elements.repoNameField.on("keyup",function(){
            return a.validate()
            }),this.elements.upgradeUpsell.on("change keyup","input",function(){
            return a.validate()
            }),this.elements.form.on("checkURL",this.handleNameCheck),this.handleOwnerChange(),this.updateUpsell(),this.validate()
        }
        return a.name="NewRepoPage",a.prototype.handleOwnerChange=function(){
        var a,b;
        return b=this.elements.ownerContainer.find(".selector-item.selected"),this.current_login=$("input[name=owner]:checked").prop("value"),this.elements.teamBoxes.hide().find("input, select").prop("disabled",!0),a=this.elements.teamBoxes.filter("[data-login="+this.current_login+"]"),a.show().find("input, select").prop("disabled",!1),this.changedPrivacyManually||(b.attr("data-default")==="private"?this.elements.privateRadio.attr("checked","checked").change():this.elements.publicRadio.attr("checked","checked").change()),this.handlePrivacyChange(),b.attr("data-permission")==="yes"?($(".with-permission-fields").show(),$(".without-permission-fields").hide()):($(".with-permission-fields").hide(),$(".without-permission-fields").show()),this.updateUpsell()
        },a.prototype.handlePrivacyChange=function(a,b){
        return a==null&&(a=this.selectedPrivacyToggleElement()),b==null&&(b=null),b&&!b.isTrigger&&(this.changedPrivacyManually=!0),a.val()==="false"?(this.privateRepo=!0,this.elements.upgradeUpsell.show(),this.elements.upgradeUpsell.find("input[type=checkbox]").attr("checked","checked"),this.elements.upgradeUpsell.find(".js-cc-upgrade").length?this.elements.form.attr("action",this.elements.form.attr("data-tr-url")):this.elements.form.attr("action",this.elements.form.attr("data-url"))):(this.privateRepo=!1,this.elements.upgradeUpsell.hide(),this.elements.upgradeUpsell.find("input[type=checkbox]").attr("checked",null),this.elements.form.attr("action",this.elements.form.attr("data-url"))),this.validate()
        },a.prototype.selectedPrivacyToggleElement=function(){
        return this.elements.privateRadio.is(":checked")?this.elements.privateRadio:this.elements.publicRadio
        },a.prototype.handleNameCheck=function(a,b,c){
        var d,e;
        d=this.elements.repoNameField.closest("dl"),e=this.elements.repoNameField.val();
        if(c==="success"&&(e===""||e===b.name))return d.unErrorify(),$("button.primary").attr("disabled",!1);
        if(c==="success")return d.errorify("Will be created as "+b.name)
            },a.prototype.updateUpsell=function(){
        var a;
        return a=this.elements.upsells.filter("[data-login="+this.current_login+"]"),this.elements.upgradeUpsell.html(a),this.elements.upgradeUpsell.find(".js-cc-upgrade").length&&this.elements.privateRadio.is(":checked")?this.elements.form.attr("action",this.elements.form.attr("data-tr-url")):(this.elements.form.attr("action",this.elements.form.attr("data-url")),console.log("updateUpsell js-cc-upgrade false"))
        },a.prototype.validate=function(){
        var a,b;
        return b=!0,this.elements.repoNameField.val().length>0||(b=!1),$("dl.reponame.errored").length&&(b=!1),a=this.elements.upgradeUpsell.find("input[type=checkbox]"),this.privateRepo&&a.length&&!a.is(":checked")&&(b=!1),$("button.primary").attr("disabled",!b)
        },a
    }(),$(document).pageUpdate(function(){
    if(!$(".page-new-repo").length)return;
    return new a
    }),$(".js-ignore-container").on("menu:activated",function(){
    var a,b,c,d;
    a=$(this).find(".js-menu-content").css({
        marginTop:0,
        height:"auto"
    }),c=a.offset().top-$("body").scrollTop(),b=a.outerHeight(),d=$(window).height();
    if(c+b>d)return a.css({
        marginTop:-b+(d-c)-10,
        height:a.height()
        })
    })
}.call(this),$(function(){
    if(!$("body").hasClass("page-profile"))return!1;
    var a=$("ul.repositories>li"),b=$(".repo-filter input").val(""),c=b.val(),d=null,e=function(){
        a.show(),b.val()!=""&&a.filter(":not(:Contains('"+b.val()+"'))").hide()
        };
        
    b.bind("keyup blur click",function(){
        if(this.value==c)return;
        c=this.value,e()
        }),$("ul.repositories>li.simple").each(function(){
        var a=$(this),b=a.find("p.description").html();
        $.trim(b)!=""&&a.find("h3").attr("title",b).tipsy({
            gravity:"w"
        })
        });
    var f=$("ul#placeholder-members li").remove();
    f.length>0&&$("ul.org-members").prepend(f)
    }),$(function(){
    if(!$("body").hasClass("page-pullrequest"))return!1;
    var a=$(".discussion-timeline");
    a.find(".assignee-context").on("change","input[type=radio]",function(){
        $(this).closest("form").submit()
        }),a.find(".js-filterable-milestones").milestoneSelector(),$(".btn-close-pull-request, .js-close-and-comment").on("click",function(a){
        $(".merge-pr").hide()
        }),$(".file, .file-box").live("commentChange",function(a){
        $(a.target).closest("#discussion_bucket").length>0?$("#files_bucket").remove():$("#discussion_bucket").remove()
        }),$("#reply-to-pr").click(function(){
        $("#comment_body").focus()
        }),$("#pull_closed_warning a").click(function(){
        return $("#pull_closed_warning").hide(),$("#pull_comment_form").show(),!1
        });
    var b=$(".js-toggle-merging");
    if(b.length>0){
        var c=$(".js-shown-merging"),d=$(".js-shown-notmerging");
        b.click(function(){
            return c.is(":visible")?(c.hide(),d.show()):(c.show(),d.hide()),!1
            })
        }
        var e=$("#js-mergeable-unknown");
    e.length>0&&e.is(":visible")&&$.smartPoller(function(a){
        $.ajax({
            url:e.data("status-url"),
            dataType:"json",
            success:function(b){
                b===!0?(e.hide(),$("#js-mergeable-clean").show()):b===!1?(e.hide(),$("#js-mergeable-dirty").show()):a()
                },
            error:function(){
                e.hide(),$("#js-mergeable-error").show()
                }
            })
    })
}),function(){
    $(function(){
        var a;
        return $("#load-readme").click(function(){
            var b,c,d,e,f,g;
            return c=$("#gollum-editor-body"),b=$("#editor-body-buffer"),e=$("#undo-load-readme"),g=b.text(),a(c,b),d=$(this),d.prop("disabled","disabled"),d.text(d.data("readme-name")+" loaded"),e.show(),f=function(){
                return $(this).val()!==g&&e.hide(),c.off("change keyup",f)
                },c.on("change keyup",f),!1
            }),$("#undo-load-readme").click(function(){
            var b;
            return a($("#gollum-editor-body"),$("#editor-body-buffer")),b=$("#load-readme"),b.removeProp("disabled"),b.text("Load "+b.data("readme-name")),$(this).hide(),!1
            }),a=function(a,b){
            var c,d,e;
            return c=$(a),d=$(b),e=c.val(),c.val(d.text()),d.text(e),c.expandingTextarea("destroy").expandingTextarea()
            }
        })
}.call(this),$(function(){
    $(".ajax_paginate a").live("click",function(){
        var a=$(this).parent(".ajax_paginate");
        return a.hasClass("loading")?!1:(a.addClass("loading"),$.ajax({
            url:$(this).attr("href"),
            complete:function(){
                a.removeClass("loading")
                },
            success:function(b){
                a.replaceWith(b),a.parent().pageUpdate()
                }
            }),!1)
    })
}),function(){
    var a=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        };
    
if(!Modernizr.canvas)return;
GitHub.ParticipationGraph=function(){
    function b(b){
        this.el=b,this.onSuccess=a(this.onSuccess,this),this.canvas=this.el.getContext("2d"),this.refresh()
        }
        return b.name="ParticipationGraph",b.prototype.barWidth=7,b.prototype.barMaxHeight=20,b.prototype.getUrl=function(){
        return $(this.el).data("source")
        },b.prototype.setData=function(a){
        var b,c;
        this.data=a;
        if(((b=this.data)!=null?b.all:void 0)==null||((c=this.data)!=null?c.owner:void 0)==null)this.data=null;
        this.scale=this.getScale(this.data)
        },b.prototype.getScale=function(a){
        var b,c,d,e,f;
        if(a==null)return;
        b=a.all[0],f=a.all;
        for(d=0,e=f.length;d<e;d++)c=f[d],c>b&&(b=c);
        return b>=this.barMaxHeight?(this.barMaxHeight-.1)/b:1
        },b.prototype.refresh=function(){
        $.ajax({
            url:this.getUrl(),
            dataType:"json",
            success:this.onSuccess
            })
        },b.prototype.onSuccess=function(a){
        this.setData(a),this.draw()
        },b.prototype.draw=function(){
        if(this.data==null)return;
        this.drawCommits(this.data.all,"#cacaca"),this.drawCommits(this.data.owner,"#336699")
        },b.prototype.drawCommits=function(a,b){
        var c,d,e,f,g,h,i,j,k;
        d=this.el.getContext("2d"),f=0;
        for(j=0,k=a.length;j<k;j++)c=a[j],g=this.barWidth,e=c*this.scale,h=f*(this.barWidth+1),i=this.barMaxHeight-e,this.canvas.fillStyle=b,this.canvas.fillRect(h,i,g,e),f++
    },b
    }(),$(document).pageUpdate(function(){
    return $(this).find(".participation-graph").each(function(){
        if($(this).is(":hidden"))return $(this).removeClass("disabled"),new GitHub.ParticipationGraph($(this).find("canvas")[0])
            })
    })
}.call(this),$(function(){
    var a=$("table.upgrades"),b=a.find("tr.current"),c=$("#plan"),d=$("#credit_card_fields"),e=function(b){
        newPlan=b,a.find("tr.selected").removeClass("selected"),b.addClass("selected"),a.addClass("selected"),c.val(newPlan.attr("data-name")),newPlan.attr("data-cost")==0?d.hide():d.show()
        };
        
    $(document).on("click",".choose_plan",function(a){
        return e($(this).closest("tr")),!1
        }),$(".selected .choose_plan").click()
    }),function(){
    $(function(){
        var a,b,c,d;
        b=$(".js-plaxify");
        if(b.length>0){
            for(c=0,d=b.length;c<d;c++)a=b[c],$(a).plaxify({
                xRange:$(a).data("xrange")||0,
                yRange:$(a).data("yrange")||0,
                invert:$(a).data("invert")||!1
                });
            return $.plax.enable()
            }
        })
}.call(this),function(){
    $(function(){
        var a,b;
        return a=/[^0-9A-Za-z_\.]/g,b=$(".js-form-note"),$("input.js-repository-name").on("keyup",function(c){
            var d;
            d=$(this),b.html("Will be created as <code>"+d.val().replace(a,"-")+"</code>");
            if(a.test(d.val())){
                if(b.is(":hidden"))return b.fadeIn()
                    }else if(!d.val())return b.fadeOut()
                })
        })
    }.call(this),function(){
    $(function(){
        var a,b,c;
        return a=$("#global-search-field"),b=$("#my-repos-autocomplete"),c=null,a.on("autocomplete:search",function(a,d){
            c&&c.abort();
            if(d===""){
                b.find("ul").empty(),b.trigger("autocomplete:change");
                return
            }
            return c=$.ajax({
                type:"GET",
                data:{
                    q:d,
                    limit:10
                },
                url:"/autocomplete/repos/mine",
                dataType:"html",
                success:function(a){
                    return c=null,b.find("ul").html(a),b.trigger("autocomplete:change")
                    }
                })
        }),a.on("autocomplete:result",function(a,b){
        return window.location="/"+b
        })
    })
}.call(this),function(){
    $(function(){
        if($(".js-settings-next").length===0)return!1;
        $("#page-settings").on("click",".js-add-email",function(a){
            return $(this).toggle(),$("#add-email-form").fadeIn(200).find(":text").focus(),!1
            }),$("#page-settings").on("click",".js-add-email-cancel",function(a){
            return $(".js-add-email").toggle(),$("#add-email-form").hide().find(":text").val(""),!1
            }),$(document).on("click",".js-notification-global-toggle",function(a){
            var b,c,d;
            return d=$(this).attr("data-url"),b=this.checked,c={},c[this.name]=b?"1":"0",$.ajax({
                url:$(this).attr("data-url"),
                type:"PUT",
                data:c,
                success:function(){
                    return b?$(this).parent("p").removeClass("ignored"):$(this).parent("p").addClass("ignored")
                    }
                })
        }),$(document).on("change","table.notifications input[type=checkbox]",function(a){
        return $.ajax({
            url:$(this).parents("table").attr("data-toggle-url"),
            type:"PUT",
            data:{
                enable:this.checked?"true":"false",
                notification_action:this.value
                }
            })
    }),$(document).on("click","button.dummy",function(a){
        return $(this).prev(".success").show().fadeOut(500),!1
        }),$(document).on("ajaxSend",".js-remove-item",function(a){
        return $(this).spin().hide()
        }),$(document).on("ajaxComplete",".js-remove-item",function(a){
        return $(this).parents("li").stopSpin().remove()
        }),$(document).on("ajaxSend",".js-remove-key",function(a){
        return $(this).addClass("disabled").find("span").text("Deletingâ€¦")
        }),$(document).on("ajaxError",".js-remove-key",function(a){
        return $(this).removeClass("disabled").find("span").text("Error. Try again.")
        }),$(document).on("ajaxSuccess",".js-remove-key",function(a){
        $(this).parents("li").remove();
        if($(".js-ssh-keys-box li").length===0)return $(".js-no-ssh-keys").show()
            }),$(document).on("click",".js-leave-collaborated-repo",function(a){
        var b,c,d,e;
        return c=$(a.currentTarget),d=c.parent("div").parent("div").attr("data-repo"),console.log(d),e=$('ul.repositories li[data-repo="'+d+'"]'),b=c.parents("div.full-button"),b.addClass("no-bg"),b.html('<img src="'+GitHub.Ajax.spinner+'"/>'),$.ajax({
            url:"/account/leave_repo/"+d,
            type:"POST",
            success:function(){
                return $.facebox.close(),e.fadeOut()
                },
            error:function(){
                return b.html('<img src="/images/modules/ajax/error.png">')
                }
            }),!1
    });
if($(".js-name-change-in-progress").length)return $.smartPoller(function(a){
    return $.ajax({
        url:$(".js-name-change-in-progress").attr("data-poll-url"),
        dataType:"json",
        success:function(b){
            return(b!=null?b.url:void 0)?window.location=b.url:b?a():location.reload()
            },
        error:function(){
            return $(".js-name-change-in-progress").hide(),$(".js-name-change-error").show()
            }
        })
})
}),$(document).on("click",".js-show-new-ssh-key-form",function(){
    return $(".js-new-ssh-key-box").toggle().find(":text").focus(),!1
    }),$.pageUpdate(function(){
    return $(this).find("dl.autosave").each(function(){
        return $(this).autosaveField()
        })
    })
}.call(this),$(function(){
    $(".plan").dblclick(function(){
        var a=$(this).find("a.classy");
        a.length>0&&(document.location=a.attr("href"))
        }),$("#signup_form").submit(function(){
        $("#signup_button").attr("disabled",!0).find("span").text("Creating your GitHub account...")
        }),$("dl.form.autocheck").each(function(){
        var a=$(this);
        a.find("input").blur(function(){
            var b=$(this);
            if(!$.trim(b.val()))return;
            if(!b.attr("check-url"))return;
            b.css("background-image",'url("/images/spinners/octocat-spinner-16px.gif")'),$.ajax({
                type:"POST",
                url:b.attr("check-url"),
                data:{
                    value:b.val()
                    },
                success:function(){
                    b.next().is(".note")&&b.next().find("strong").text(b.val()),a.unErrorify(),b.css("background-image",'url("/images/modules/ajax/success.png")'),a.trigger("checkURL",arguments)
                    },
                error:function(c){
                    a.errorify(c.responseText),b.css("background-image",'url("/images/modules/ajax/error.png")'),a.trigger("checkURL",arguments)
                    }
                })
        })
    })
}),function(){
    $(function(){
        var a,b;
        if(b=$(".js-current-repository").attr("href"))return a={
            path:"/",
            expires:1
        },$.cookie("spy_repo",b.substr(1),a),$.cookie("spy_repo_at",new Date,a)
            })
    }.call(this),function(){
    $(document).on("click",".js-approve-ssh-key",function(a){
        var b;
        return b=$(this),b.addClass("disabled").find("span").text("Approvingâ€¦"),$.ajax({
            url:b.attr("href"),
            type:"POST",
            success:function(){
                return b.parents("li").addClass("approved")
                },
            error:function(){
                return b.removeClass("disabled").find("span").text("Error. Try Again")
                }
            }),!1
    }),$(document).on("click",".js-reject-ssh-key",function(a){
    var b;
    return b=$(this),b.addClass("disabled").find("span").text("Rejectingâ€¦"),$.ajax({
        url:b.attr("href"),
        type:"DELETE",
        success:function(){
            return b.parents("li").addClass("rejected")
            },
        error:function(){
            return b.removeClass("disabled").find("span").text("Error. Try Again")
            }
        }),!1
})
}.call(this),function(){
    var a,b;
    GitHub.Stats=function(){
        function a(a){
            this.namespace=a,this.stats=[],this.flushTimer=null
            }
            return a.name="Stats",a.prototype.increment=function(a,b){
            return b==null&&(b=1),this.namespace&&(a=""+this.namespace+"."+a),this.stats.push({
                metric:a,
                type:"increment",
                count:b
            }),this.queueFlush()
            },a.prototype.timing=function(a,b){
            if(b<0)return;
            return this.namespace&&(a=""+this.namespace+"."+a),this.stats.push({
                metric:a,
                type:"timing",
                ms:b
            }),this.queueFlush()
            },a.prototype.gauge=function(a,b){
            return this.namespace&&(a=""+this.namespace+"."+a),this.stats.push({
                metric:a,
                type:"gauge",
                value:b
            }),this.queueFlush()
            },a.prototype.queueFlush=function(){
            var a=this;
            return this.flushTimer&&clearTimeout(this.flushTimer),this.flushTimer=setTimeout(function(){
                return a.flush()
                },2e3)
            },a.prototype.flush=function(){
            var a,b;
            a=$(document.body);
            if(this.stats.length&&a.hasClass("env-production")&&!a.hasClass("enterprise"))return b=this.stats,this.stats=[],$.ajax({
                url:"/_stats",
                type:"POST",
                data:JSON.stringify(b),
                contentType:"application/json; charset=utf-8",
                dataType:"json"
            })
            },a
        }(),a=GitHub.stats=new GitHub.Stats("github.browser"),typeof window!="undefined"&&window!==null&&(window.$stats=a);
    if(typeof $=="undefined"||$===null)return;
    window.performance||(b="onpagehide"in window?"pagehide":"unload",$(window).on(b,function(){
        window.name=JSON.stringify((new Date).getTime())
        })),$(function(){
        var b,c;
        if(window.performance)return b=window.performance.timing,b.navigationStart&&a.timing("performance.navigation",(new Date).getTime()-b.navigationStart),b.secureConnectionStart&&b.connectStart&&a.timing("performance.ssl",b.secureConnectionStart-b.connectStart),b.connectEnd&&b.connectStart&&(b.secureConnectionStart?a.timing("performance.tcp",b.connectEnd-b.secureConnectionStart):a.timing("performance.tcp",b.connectEnd-b.connectStart)),b.domainLookupStart!==b.domainLookupEnd&&a.timing("performance.dns",b.domainLookupEnd-b.domainLookupStart),b.requestStart&&b.responseStart&&b.responseEnd&&(a.timing("performance.request",b.responseStart-b.requestStart),a.timing("performance.response",b.responseEnd-b.responseStart)),$(window).bind("load",function(){
            b.domContentLoadedEventEnd&&b.domLoading&&a.timing("performance.DOMContentLoaded",b.domContentLoadedEventEnd-b.domLoading),b.domComplete&&b.domLoading&&a.timing("performance.load",b.domComplete-b.domLoading);
            if(b.domInteractive&&b.domLoading)return a.timing("performance.interactive",b.domInteractive-b.domLoading)
                });
        if(window.name&&window.name.match(/^\d+$/)){
            try{
                c=JSON.parse(window.name),a.timing("pageload",(new Date).getTime()-c)
                }catch(d){}
            return window.name=""
            }
        })
}.call(this),function(){
    $.support.pjax&&!location.search&&$(function(){
        var a,b;
        a=$("#issues-dashboard, #issues_list");
        if(b=a.attr("data-url"))return window.history.replaceState(null,document.title,b)
            })
    }.call(this),function(){
    $(function(){
        var a;
        if($(".js-styleguide-ace")[0])return a=new GitHub.CodeEditor(".js-styleguide-ace"),$(".js-styleguide-themes").change(function(){
            return a.setTheme($(this).find(":selected").val())
            })
        })
    }.call(this),function(){
    $(function(){
        var a;
        return a=[".auto_subscribe_to_repos","#notifications-settings input[type=checkbox]"],$(document).on("change",a.join(", "),function(a){
            var b;
            return b=$(a.currentTarget),b.parents("label").append('<img src="'+GitHub.Ajax.spinner+'"/>'),$.ajax({
                url:b.parents("form").attr("action"),
                type:"POST",
                data:b.parents("form").serialize(),
                success:function(){
                    return b.siblings("img:last-child").remove()
                    },
                error:function(){
                    return b.siblings("img:last-child").remove(),b.parents("label").append('<img src="/images/modules/ajax/error.png">')
                    }
                })
        }),$(document).on("click","#notification-subscribed .btn-unsubscribe, #notification-ignored .btn-remove-ignore",function(a){
        var b,c;
        return b=$(a.currentTarget),c=b.parents("form"),b.before('<img src="'+GitHub.Ajax.spinner+'"/>'),$.ajax({
            url:c.attr("action"),
            type:"POST",
            data:c.serialize(),
            success:function(){
                return c.parent("li.clearfix").remove()
                },
            error:function(){
                return c.find("img:first-child").remove(),c.prepend('<img src="/images/modules/ajax/error.png">')
                }
            }),!1
    })
    })
}.call(this),function(){
    $.fn.textareaSelectionPosition=function(){
        var a,b,c,d,e,f,g,h,i;
        if(!(g=this[0]))return;
        if(!$(g).is("textarea"))return;
        if(g.selectionEnd==null)return;
        e={
            position:"absolute",
            overflow:"auto",
            "white-space":"pre-wrap",
            top:0,
            left:-9999
        },f=["height","width","padding-top","padding-right","padding-bottom","padding-left","lineHeight","textDecoration","letterSpacing","font-family","font-size","font-style","font-variant","font-weight"];
        for(h=0,i=f.length;h<i;h++)c=f[h],e[c]=$(g).css(c);
        return a=document.createElement("div"),$(a).css(e),$(g).after(a),a.textContent=g.value.substring(0,g.selectionEnd),a.scrollTop=a.scrollHeight,b=document.createElement("span"),b.innerHTML="&nbsp;",a.appendChild(b),d=$(b).position(),$(a).remove(),d
        }
    }.call(this),function(){
    var a,b=function(a,b){
        return function(){
            return a.apply(b,arguments)
            }
        };
    
a=function(){
    function a(){
        this.onNavigationOpen=b(this.onNavigationOpen,this),this.onNavigationKeyDown=b(this.onNavigationKeyDown,this),this.onFocusOut=b(this.onFocusOut,this),this.onFocusIn=b(this.onFocusIn,this),this.onKeyUp=b(this.onKeyUp,this),$(document).on("keyup","textarea[data-suggester-list]",this.onKeyUp),$(document).on("focusin","textarea[data-suggester-list]",this.onFocusIn),$(document).on("focusout","textarea[data-suggester-list]",this.onFocusOut),$(document).on("navigation:keydown",".suggester [data-user]",this.onNavigationKeyDown),$(document).on("navigation:open",".suggester [data-user]",this.onNavigationOpen),this.focusedTextarea=null,this.focusedSuggester=null
        }
        return a.name="Suggester",a.prototype.subjectRegex=/(^|\s)@([\w\/]*)$/,a.prototype.onKeyUp=function(a){
        var b,c,d;
        d=this.focusedTextarea,c=this.focusedSuggester;
        if(!this.focusedTextarea||!this.focusedSuggester)return;
        b=this.searchQuery(d);
        if(b!=null){
            if(b===this.query)return;
            return this.query=b,this.activate(d,c),this.search(c,this.query),!1
            }
            this.query=null,this.deactivate()
        },a.prototype.onFocusIn=function(a){
        return this.focusTimeout&&clearTimeout(this.focusTimeout),this.focusedTextarea=a.currentTarget,this.focusedSuggester=document.getElementById($(a.currentTarget).attr("data-suggester-list"))
        },a.prototype.onFocusOut=function(a){
        var b=this;
        return this.focusTimeout=setTimeout(function(){
            return b.deactivate(),b.focusedTextarea=b.focusedSuggester=null,b.focusTimeout=null
            },200)
        },a.prototype.onNavigationKeyDown=function(a){
        switch(a.hotkey){
            case"tab":
                return this.onNavigationOpen(a),!1;
            case"esc":
                return this.deactivate(),!1
                }
            },a.prototype.onNavigationOpen=function(a){
    var b,c,d,e;
    return c=$(a.target).attr("data-user"),e=this.focusedTextarea,d=e.value.substring(0,e.selectionEnd),b=e.value.substring(e.selectionEnd),d=d.replace(/@([\w\/]*)$/,"@"+c+" "),e.value=d+b,this.deactivate(),e.focus(),e.selectionStart=d.length,e.selectionEnd=d.length,!1
    },a.prototype.activate=function(a,b){
    if($(b).is(".active"))return;
    if(!$(b).find("[data-user]")[0])return;
    return $(b).addClass("active"),$(b).css($(a).textareaSelectionPosition()),$(a).addClass("js-navigation-enable"),$(b).trigger("navigation:focus")
    },a.prototype.deactivate=function(a,b){
    a==null&&(a=this.focusedTextarea),b==null&&(b=this.focusedSuggester);
    if(!$(b).is(".active"))return;
    return $(b).removeClass("active"),$(a).removeClass("js-navigation-enable"),$(b).trigger("navigation:deactivate")
    },a.prototype.searchQuery=function(a){
    var b,c;
    c=a.value.substring(0,a.selectionEnd),b=c.match(this.subjectRegex);
    if(b)return b[2]
        },a.prototype.search=function(a,b){
    var c,d;
    return d=$(a).find("ul"),c=d.children("li"),c.sort(function(a,c){
        var d,e;
        return d=a.textContent.score(b),e=c.textContent.score(b),d>e?-1:d<e?1:0
        }),d.append(c),c.hide().slice(0,5).show(),$(a).trigger("navigation:focus")
    },a
}(),new a
}.call(this),GitHub.Team=function(a){
    this.url=window.location.pathname,this.orgUrl=this.url.split(/\/(teams|invite)/)[0],a&&(this.url=this.orgUrl+"/teams/"+a)
    },GitHub.Team.prototype={
    name:function(){
        return $("#team-name").val()
        },
    newRecord:function(){
        return!/\/invite/.test(location.pathname)&&!/\d/.test(location.pathname)
        },
    repos:function(){
        return $.makeArray($(".repositories li:visible a span").map(function(){
            return $(this).text()
            }))
        },
    addRepo:function(a,b){
        debug("Adding repo %s",a);
        if(!a||$.inArray(a,this.repos())>-1)return!1;
        this.addRepoAjax(a);
        var c=$(".repositories").find("li:first").clone(),d=c.find("input[type=hidden]");
        return c.find("a").attr("href","/"+a).text(a),c.find(".remove-repository").attr("data-repo",a),b==="private"?c.addClass("private"):c.addClass("public"),d.length>0&&d.val(a).attr("disabled",!1),$(".repositories").append(c.show()),!0
        },
    addRepoAjax:function(a){
        if(this.newRecord())return;
        debug("Ajaxily adding %s",a),$.post(this.url+"/repo/"+a)
        },
    removeRepo:function(a){
        debug("Removing %s",a);
        if(!a||$.inArray(a,this.repos())==-1)return!1;
        var b=$(".repositories li:visible a").filter(function(){
            return $(this).find("span").text()==a
            }),c=function(){
            b.parents("li:first").remove()
            },d=function(){
            b.parent().find(".remove-repository").show().removeClass("remove").html('<img class="dingus" src="/images/modules/ajax/error.png">').end().find(".spinner").hide()
            };
            
        return this.newRecord()?c():(b.parent().find(".remove-repository").after('<img class="dingus spinner" src="/images/spinners/octocat-spinner-16px.gif"/>').hide(),this.removeRepoAjax(a,c,d)),!0
        },
    removeRepoAjax:function(a,b,c){
        if(this.newRecord())return;
        debug("Ajaxily removing %s",a),$.ajax({
            type:"DELETE",
            url:this.url+"/repo/"+a,
            success:b,
            error:c
        })
        },
    users:function(){
        return $.makeArray($(".usernames li:visible").map(function(){
            return $(this).find("a:first").text()
            }))
        },
    addUser:function(a){
        debug("Adding %s",a);
        if(!a||$.inArray(a,this.users())>-1)return!1;
        this.addUserAjax(a);
        var b=$(".usernames").find("li:first").clone(),c=b.find("input[type=hidden]");
        return b.find("img").attr("src","/"+a+".png"),b.find("a").attr("href","/"+a).text(a),c.length>0&&c.val(a).attr("disabled",!1),$(".usernames").append(b.show()),!0
        },
    removeUser:function(a){
        debug("Removing %s",a);
        if(!a||$.inArray(a,this.users())==-1)return!1;
        var b=$(".usernames li:visible a:contains("+a+")"),c=function(){
            b.parents("li:first").remove()
            };
            
        return this.newRecord()?c():(b.parent().find(".remove-user").spin().remove(),$("#spinner").addClass("remove"),this.removeUserAjax(a,c)),!0
        },
    addUserAjax:function(a){
        if(this.newRecord())return;
        debug("Ajaxily adding %s",a),$.post(this.url+"/member/"+a)
        },
    removeUserAjax:function(a,b){
        if(this.newRecord())return;
        debug("Ajaxily removing %s",a),$.ajax({
            type:"DELETE",
            url:this.url+"/member/"+a,
            success:b
        })
        }
    },$(function(){
    if(!$(".js-team")[0])return;
    var a=new GitHub.Team($(".js-team").data("team")),b=$(".add-username-form input"),c=$(".add-repository-form input"),d=$(".add-username-form button"),e=$(".add-repository-form button"),f=null;
    b.on("autocomplete:search",function(a){
        f&&f.abort();
        var b=$(this).val();
        if(b===""){
            $("#add-user-autocomplete ul").empty(),$("#add-user-autocomplete").trigger("autocomplete:change");
            return
        }
        f=$.ajax({
            type:"GET",
            data:{
                q:b,
                limit:10
            },
            url:"/autocomplete/users",
            dataType:"html",
            success:function(a){
                f=null,$("#add-user-autocomplete ul").html(a),$("#add-user-autocomplete").trigger("autocomplete:change")
                }
            })
    }),b.on("autocomplete:autocompleted:changed",function(a){
    b.attr("data-autocompleted")?d.removeAttr("disabled"):d.attr("disabled","disabled")
    }),c.on("autocomplete:search",function(){
    f&&f.abort();
    var b=$(this).val();
    if(b===""){
        $("#add-repo-autocomplete ul").empty(),$("#add-repo-autocomplete").trigger("autocomplete:change");
        return
    }
    f=$.ajax({
        type:"GET",
        data:{
            q:b,
            limit:10
        },
        url:a.orgUrl+"/autocomplete/repos",
        dataType:"html",
        success:function(a){
            f=null,$("#add-repo-autocomplete ul").html(a),$("#add-repo-autocomplete").trigger("autocomplete:change")
            }
        })
}),c.on("autocomplete:autocompleted:changed",function(a){
    c.attr("data-autocompleted")?e.removeAttr("disabled"):e.attr("disabled","disabled")
    }),$(".remove-repository").live("click",function(){
    return a.removeRepo($(this).attr("data-repo")),!1
    }),$(".remove-user").live("click",function(){
    return a.removeUser($(this).prev().text()),!1
    }),$(".add-username-form button").click(function(){
    var b=$(this).parent(),c=b.find(":text"),d=c.val();
    return debug("Trying to add %s...",d),!d||!c.attr("data-autocompleted")?!1:(c.val(""),a.addUser(d),!1)
    }),$(".js-team").on("submit",function(a){
    var b=$(document.activeElement);
    if(b.is(".add-username-form input"))return b.closest(".add-username-form").find("button").click(),!1
        });
var g;
$("#add-repo-autocomplete").on("navigation:open","[data-autocomplete-value]",function(){
    g=$(this).attr("data-visibility")
    }),$(".add-repository-form button").click(function(){
    var b=$(this).parent(),c=b.find(":text"),d=c.val();
    return debug("Trying to add %s...",d),!d||!c.attr("data-autocompleted")?!1:(c.val(""),a.addRepo(d,g),!1)
    }),$(".js-team").on("submit",function(a){
    var b=$(document.activeElement);
    if(b.is(".add-repository-form input"))return b.closest(".add-repository-form").find("button").click(),!1
        })
}),$(function(){
    $(".remove-team").click(function(){
        if(!confirm("Are you POSITIVE you want to remove this team?"))return!1;
        var a=$(this).parents("li.team");
        return $.ajax({
            type:"DELETE",
            url:this.href,
            success:function(){
                a.remove()
                }
            }),$(this).spin().remove(),!1
        })
}),GitHub.Thunderhorse=function(a){
    if(!window.ace||!window.sharejs)return;
    location.hash||(location.hash=GitHub.Thunderhorse.generateSessionID());
    var b={
        host:"thunderhorse.herokuapp.com",
        secure:!0
        },c=location.pathname+location.hash;
    sharejs.open(c,"text",b,function(b,c){
        b.created&&b.submitOp({
            i:a.code(),
            p:0
        }),b.attach_ace(a.ace),a.ace.focus(),a.ace.renderer.scrollToRow(0),a.ace.moveCursorTo(0,0),GitHub.Thunderhorse.showHorse()
        })
    },GitHub.Thunderhorse.generateSessionID=function(){
    return Math.ceil(Math.random()*Math.pow(36,5)).toString(36)
    },GitHub.Thunderhorse.showHorse=function(){
    $("body").append('<img class="thunder-horse" src="https://img.skitch.com/20110810-njy5tnyabug5fn5j6sdcs9urk.png">'),$(".thunder-horse").css({
        position:"fixed",
        bottom:10,
        left:10
    })
    },$(function(){
    function d(a,b){
        arguments.length<2&&(b=location.href);
        if(arguments.length>0&&a!=""){
            if(a=="#")var c=new RegExp("[#]([^$]*)");
            else if(a=="?")var c=new RegExp("[?]([^#$]*)");else var c=new RegExp("[?&]"+a+"=([^&#]*)");
            var d=c.exec(b);
            return d==null?"":d[1]
            }
            b=b.split("?");
        var d={};
        
        return b.length>1&&(b=b[1].split("#"),b.length>1&&(d.hash=b[1]),$.each(b[0].split("&"),function(a,b){
            b=b.split("="),d[b[0]]=b[1]
            })),d
        }
        var a=$.cookie("tracker"),b=null;
    a==null&&(b=document.referrer?document.referrer:"direct");
    var c=d();
    c.utm_campaign&&$.trim(c.utm_campaign)!=""&&(b=c.utm_campaign),c.referral_code&&$.trim(c.referral_code)!=""&&(b=c.referral_code),b!=null&&$.cookie("tracker",b,{
        expires:7,
        path:"/"
    })
    }),$.pageUpdate(function(){
    var a=$(".repo-tree");
    if(!a[0])return;
    var b=a.attr("data-master-branch"),c=a.attr("data-ref");
    $(this).find("a.js-rewrite-sha").each(function(){
        var a=$(this).attr("href");
        if(!c){
            $(this).attr("rel","nofollow");
            return
        }
        var d=a.replace(/[0-9a-f]{40}/,c),e=new RegExp
        ("/tree/"+b+"$");
        d=d.replace(e,""),d!=a&&$(this).attr("href",d)
        }),$("#slider").on("slid",function(){
        $(".recently-touched-branches-wrapper").hide()
        })
    }),GitHub.CachedCommitDataPoller=function(a,b){
    var c=$(b||document).find(".js-loading-commit-data");
    if(c.length==0)return;
    var d=$("#slider .frame-center"),e=d.data("path").replace(/\/$/,"");
    $.smartPoller(a||2e3,function(a){
        $.ajax({
            url:d.data("cached-commit-url"),
            dataType:"json",
            error:function(b){
                b.status==201?a():c.html('<img src="/images/modules/ajax/error.png"> Something went wrong.')
                },
            success:function(a,c,e){
                debug("success: %s",this.url);
                var f=d.data("cached-commit-url").replace(/\/cache\/.+/,"/commit/");
                for(var g in a){
                    if($("#"+g).length==0)continue;
                    var h=$("#"+g).parents("tr:first");
                    h.find(".age").html('<time class="js-relative-date" datetime="'+moment(a[g].date).format("YYYY-MM-DDTHH:mm:ssZ")+'">'+a[g].date+"</time>");
                    var i;
                    a[g].login?i='<a href="/'+a[g].login+'">'+a[g].login+"</a>":i=a[g].author,h.find(".message").html('<a href="'+f+a[g].commit+'" class="message">'+a[g].message+"</a>"+" ["+i+"]")
                    }
                    $(b||document.body).pageUpdate()
                }
            })
    })
},$.pageUpdate(function(){
    $("#slider .frame-center #readme").length>0?$("#read_more").show():$("#read_more").hide()
    }),$(function(){
    $(".subnav-bar").delegate(".js-commitish-button","click",function(a){
        a.preventDefault()
        }),$(".pagehead .subnav-bar")[0]&&$(".pagehead .subnav-bar a[data-name]").live("mousedown",function(){
        if(GitHub.actionName!="show")return;
        var a=$(this).attr("data-name");
        console.log("REF",a);
        var b="/"+GitHub.nameWithOwner+"/"+GitHub.controllerName+"/"+a;
        GitHub.currentPath!=""&&(b+="/"+GitHub.currentPath),b!=$(this).attr("href")&&$(this).attr("href",b)
        }),GitHub.CachedCommitDataPoller()
    }),GitHub.TreeFinder=function(){
    if($("#slider").length==0)return;
    var a=this;
    $.hotkeys({
        t:function(){
            return a.show(),!1
            }
        })
},GitHub.TreeFinder.prototype={
    fileList:null,
    recentFiles:[],
    currentFinder:null,
    currentInput:null,
    currentQuery:null,
    show:function(){
        if(this.currentFinder)return;
        var a=this,b;
        a.currentFinder=$(".tree-finder").clone().show(),a.currentInput=a.currentFinder.find("input"),a.currentQuery=null,GitHub.slider.slideForwardToLoading(),b=a.currentFinder.find(".breadcrumb").detach().addClass("js-tree-finder-breadcrumb"),$("#slider .breadcrumb:visible").hide().after(b),$("#slider").bind("slid",function(){
            $("#slider .frame-center").is(":not(.tree-finder)")&&a.hide()
            }),a.attachBehaviors()
        },
    hide:function(){
        if(!this.currentFinder)return;
        var a=this;
        a.currentInput.blur(),a.currentFinder.remove(),$(".js-tree-finder-breadcrumb").remove(),a.currentFinder=a.currentInput=null,$("#slider").unbind("slid")
        },
    attachBehaviors:function(){
        var a=this,b=null,c=null;
        a.loadFileList(),$(".js-dismiss-tree-list-help").live("click",function(){
            return $.post(this.getAttribute("href")),$(this).closest(".octotip").fadeOut(function(){
                $(".tree-finder .octotip").remove()
                }),a.currentInput.focus(),!1
            }),a.currentFinder.find(".js-results-list").delegate("a","click",function(){
            var b=$(this).text(),c=$.inArray(b,a.recentFiles);
            c>-1&&a.recentFiles.splice(c,1),a.recentFiles.unshift(b),a.currentInput.blur(),$(document).unbind("keydown.treeFinder");
            if(GitHub.slider.enabled)return!0;
            document.location=$(this).attr("href")
            }),$("tr td.icon",a.currentFinder).live("click",function(){
            $(this).parents("tr:first").find("td a").click()
            }),$(document).bind("keydown.treeFinder",function(a){
            if(a.keyCode==27)return!GitHub.slider.sliding&&$("#slider .frame-center").is(".tree-finder")&&(GitHub.slider.slideBackTo(location.pathname),$(document).unbind("keydown.treeFinder")),!1
                }),a.currentFinder.on("navigation:open","tr",function(){
            $(this).find("a").click()
            }),a.currentInput.focus().keyup(function(){
            b&&clearTimeout(b),b=setTimeout(function(){
                b=null
                },250)
            }).keydown(function(){
            c&&clearTimeout(c),c=setTimeout(function(){
                c=null,a.updateResults()
                },100)
            })
        },
    loadFileList:function(){
        var a=this,b=function(){
            a.loadedFileList()
            };
            
        a.fileList?b():$.ajax({
            url:$("#slider .frame-center").data("tree-list-url"),
            error:function(c){
                a.currentFinder&&(a.fileList=[],a.currentFinder.find(".js-no-results th").text("Something went wrong"),b())
                },
            success:function(c,d,e){
                c?a.fileList=$.trim(c).split("\n"):a.fileList=[],b()
                }
            })
    },
loadedFileList:function(){
    var a=this;
    if(!a.currentFinder)return;
    $("#slider .frame-center").replaceWith(a.currentFinder),a.updateResults()
    },
updateResults:function(){
    var a=this;
    if(a.currentFinder&&a.fileList){
        var b=a.currentInput.val(),c=[],d=a.currentFinder.find(".js-results-list"),e="",f=0;
        if(this.currentQuery==b)return;
        this.currentQuery=b,b?c=a.findMatchingFiles(b):a.recentFiles.length?(c=a.recentFiles.slice(1,6),c.length<20&&(c=c.concat(a.fileList.slice(0,20-c.length)))):c=a.fileList;
        if(c.length<=0)d[0].innerHTML="",a.currentFinder.find(".js-no-results").show(),a.currentFinder.find(".js-header").hide();
        else{
            a.currentFinder.find(".js-no-results").hide(),a.currentFinder.find(".js-header").show(),c=c.slice(0,50);
            var g,h=this.regexpForQuery(b),i=function(a,b){
                return b%2==1?"<b>"+a+"</b>":a
                };
                
            for(f=0;f<c.length;f++){
                g=(c[f].match(h)||[]).slice(1).map(i).join("");
                var j=$("#slider .frame-center").data("blob-url-prefix")+"/"+c[f];
                e+='<tr class="js-navigation-item"><td class="icon"><span class="mini-icon text-file"></span></td><td><a class="js-slide-to js-rewrite-sha" href="'+j+'">'+g+"</a></td></tr>"
                }
                d[0].innerHTML=e,$(d).pageUpdate(),$(d).trigger("navigation:focus")
            }
        }
},
findMatchingFiles:function(a){
    if(!a)return[];
    var b=this,c=[],d=0,e,f,g,h;
    a=a.toLowerCase(),e=this.regexpForQuery(a);
    for(d=0;d<b.fileList.length;d++){
        f=b.fileList[d],g=f.toLowerCase();
        if(f.match(/^vendor\/(cache|rails|gems)/))continue;
        if(f.match(/(dot_git|\.git\/)/))continue;
        g.match(e)&&(h=g.score(a),h>0&&(a.match("/")||(g.match("/")?h+=g.replace(/^.*\//,"").score(a):h*=2),c.push([h,f])))
        }
        return $.map(c.sort(function(a,b){
        return b[0]-a[0]
        }),function(a){
        return a[1]
        })
    },
regexpForQuery:function(a){
    var b="+.*?[]{}()^$|\\".replace(/(.)/g,"\\$1"),c=new RegExp("\\((["+b+"])\\)","g");
    return new RegExp("(.*)"+a.toLowerCase().replace(/(.)/g,"($1)(.*?)").replace(c,"(\\$1)")+"$","i")
    }
},$(function(){
    new GitHub.TreeFinder
    }),GitHub.TreeSlider=function(){
    if(!Modernizr.history)return;
    if($("#slider").length==0)return;
    if(navigator.userAgent.match(/(iPod|iPhone|iPad)/))return;
    var a=this;
    a.enabled=!0,$("#slider a.js-slide-to, .breadcrumb a").live("click",function(b){
        return a.clickHandler(b)
        }),$(window).bind("popstate",function(b){
        a.popStateHandler(b.originalEvent)
        })
    },GitHub.TreeSlider.prototype={
    enabled:!1,
    sliding:!1,
    slideSpeed:400,
    frameForPath:function(a){
        return $(".frame").filter(function(){
            return $(this).attr("data-path")===a
            })
        },
    frameForURL:function(a){
        return this.frameForPath(this.pathFromURL(a))
        },
    pathFromURL:function(a){
        if(!a)return;
        var b=$(" .repo-tree").attr("data-ref"),c=new RegExp("/(tree|blob)/"+(b||"[^/]+")+"/"),d=a.split(c)[2]||"/";
        return d.slice(d.length-1,d.length)!="/"&&(d+="/"),unescape(d)
        },
    scrollToBreadcrumb:function(){
        this.visibleInBrowser(".breadcrumb:visible")||$(".breadcrumb:visible").scrollTo(50)
        },
    visibleInBrowser:function(a){
        var b=$(window).scrollTop(),c=b+$(window).height(),d=$(a).offset().top,e=d+$(a).height();
        return e>=b&&d<=c
        },
    clickHandler:function(a){
        if(a.which==2||a.metaKey||a.ctrlKey)return!0;
        if(this.sliding)return!1;
        var b=a.currentTarget.href,c=this.pathFromURL(b);
        return window.history.pushState({
            path:c
        },"",b),typeof _gaq!="undefined"&&_gaq.push(["_trackPageview"]),this.slideTo(b),!1
        },
    popStateHandler:function(a){
        this.slideTo(location.pathname)
        },
    doneSliding:function(){
        if(!this.sliding)return;
        this.sliding=!1,$("#slider .frame-center").nextAll(".frame").hide(),$("#slider .frame-center").prevAll(".frame").css("visibility","hidden");
        var a=$(".frame-loading:visible");
        a.length?a.removeClass("frame-loading"):$("#slider").trigger("slid")
        },
    slideTo:function(a){
        var b=this.pathFromURL(a),c=this.frameForPath(b),d=$("#slider .frame-center").attr("data-path")||"";
        c.is(".frame-center")||(d=="/"||b.split("/").length>d.split("/").length?this.slideForwardTo(a):this.slideBackTo(a))
        },
    slideForwardTo:function(a){
        debug("Sliding forward to %s",a);
        var b=this.frameForURL(a);
        if(b.length)this.slideForwardToFrame(b);
        else{
            var c=this.slideForwardToLoading();
            this.loadFrame(a,function(a){
                c.replaceWith(a.find(".frame-center"))
                })
            }
        },
slideForwardToFrame:function(a){
    if(this.sliding)return;
    this.sliding=!0;
    var b=this;
    $("#slider .frame-center").after(a.css("marginLeft",0)).addClass("frame").removeClass("frame-center").animate({
        marginLeft:"-1200px"
    },this.slideSpeed,function(){
        b.doneSliding()
        }),this.makeCenterFrame(a),this.setFrameTitle(a),this.setFrameCanonicalURL(a)
    },
slideForwardToLoading:function(){
    var a=$(".frame-loading").clone();
    return a.find("img").hide(),setTimeout(function(){
        a.find("img").show()
        },500),$(".frames").append(a),this.slideForwardToFrame(a),a
    },
slideBackTo:function(a){
    debug("Sliding back to %s",a);
    var b=this.frameForURL(a);
    if(b.length)this.slideBackToFrame(b);
    else{
        var c=this.slideBackToLoading(),d=this.pathFromURL(a);
        this.loadFrame(a,function(a){
            c.replaceWith(a.find(".frame-center"))
            })
        }
    },
slideBackToFrame:function(a){
    if(this.sliding)return;
    this.sliding=!0,$("#slider .frame-center").before(a.css("marginLeft","-1200px")).addClass("frame").removeClass("frame-center");
    var b=this;
    a.animate({
        marginLeft:"0"
    },this.slideSpeed,function(){
        b.doneSliding()
        }),this.makeCenterFrame(a),this.setFrameTitle(a),this.setFrameCanonicalURL(a)
    },
slideBackToLoading:function(){
    var a=$(".frame-loading").clone();
    return a.find("img").hide(),setTimeout(function(){
        a.find("img").show()
        },350),$(".frames").prepend(a.show()),slider.slideBackToFrame(a),a
    },
makeCenterFrame:function(a){
    a.css("visibility","visible").show().addClass("frame-center"),this.scrollToBreadcrumb(),$(".file-history-tease:visible").hide();
    var b=$('.file-history-tease[data-path="'+a.attr("data-path")+'"]');
    b.length>0&&b.show(),$(document.body).attr("data-blob-contribs-enabled")=="yes"&&(a.attr("data-path")=="/"?($(".last-commit, .commit.commit-tease").show(),$("#repo_details").show(),$(".repo-head .tabs").addClass("with-details-box")):($(".last-commit, .commit.commit-tease").hide(),$("#repo_details").hide(),$(".repo-head .tabs").removeClass("with-details-box")));
    var c=$('.breadcrumb[data-path="'+a.attr("data-path")+'"]');
    c.length>0&&($(".breadcrumb:visible").hide(),c.show());
    var d=$('.announce[data-path="'+a.attr("data-path")+'"]');
    $(".announce").fadeOut(),d.length>0&&d.fadeIn();
    var e=$(".js-ufo[data-path="+a.attr("data-path")+"]");
    $(".js-ufo").fadeOut(),e.length>0&&e.fadeIn()
    },
setFrameTitle:function(a){
    var b=a.attr("data-title");
    b&&(document.title=b)
    },
setFrameCanonicalURL:function(a){
    var b=a.attr("data-permalink-url");
    b&&$("link[rel=permalink]").attr("href",b)
    },
loadFrame:function(a,b){
    debug("Loading "+a+"?slide=1");
    var c=this;
    $.ajax({
        url:a+"?slide=1",
        cache:!1,
        success:function(d){
            var e=$("<div>"+d+"</div>");
            b.call(this,e);
            var f=$("#slider");
            f.trigger("slid"),f.find(".breadcrumb").hide().last().after(e.find(".breadcrumb"));
            var g=e.find(".file-history-tease");
            f.prevAll(".file-history-tease").hide(),g.length&&(f.prevAll(".last-commit, .commit.commit-tease").hide(),f.find(".breadcrumb:visible").after(g));
            var h=c.frameForURL(a);
            GitHub.CachedCommitDataPoller(50,h),GitHub.Blob.show(),c.setFrameTitle(h),c.setFrameCanonicalURL(h),f.pageUpdate()
            },
        error:function(){
            $("#slider .frame-center").html("<h3>Something went wrong.</h3>")
            },
        complete:function(){
            c.sliding=!1
            }
        })
}
},$(function(){
    GitHub.slider=new GitHub.TreeSlider
    }),$.fn.ufo=function(){
    if(this.length){
        var a=this.find("canvas").get(0),b=JSON.parse(this.find("div").text());
        GitHub.UFO.drawFont(a,b)
        }
        return this
    },GitHub.UFO={
    drawFont:function(a,b){
        var c=a.getContext("2d");
        for(var d=0;d<b.length;d++){
            c.save();
            var e=d%9*100,f=Math.floor(d/9)*100;
            c.translate(e+10,f+80),c.scale(.1,-0.1);
            var g=new GitHub.UFO.Glif(c,b[d]);
            g.draw(),c.restore()
            }
        }
    },GitHub.UFO.Glif=function(a,b){
    this.ctx=a,this.contours=b
    },GitHub.UFO.Glif.prototype={
    draw:function(){
        this.ctx.beginPath();
        for(var a=0;a<this.contours.length;a++)this.drawContour(this.contours[a]);
        this.ctx.fillStyle="black",this.ctx.fill()
        },
    drawContour:function(a){
        for(var b=0;b<a.length;b++)b==0?this.moveVertex(a[b]):this.drawVertex(a[b]);
        this.drawVertex(a[0])
        },
    moveVertex:function(a){
        this.ctx.moveTo(a[0],a[1])
        },
    drawVertex:function(a){
        a.length==2?this.ctx.lineTo(a[0],a[1]):a.length==4?this.ctx.quadraticCurveTo(a[2],a[3],a[0],a[1]):a.length==6&&this.ctx.bezierCurveTo(a[2],a[3],a[4],a[5],a[0],a[1])
        }
    },$(document).ready(function(){
    $(".glif_diff").each(function(el){
        var sha=$(this).attr("rel"),ctx=this.getContext("2d"),data=eval("glif_"+sha),glif=new GitHub.UFO.Glif(ctx,data);
        ctx.translate(0,240),ctx.scale(.333,-0.333),glif.draw()
        })
    }),Modernizr.canvas&&$.pageUpdate(function(){
    $(this).find(".js-ufo").ufo()
    }),$(function(){
    $(".js-repo-filter").repoList(),$("#facebox .rename-warning button").live("click",function(){
        return $("#facebox .rename-warning, #facebox .rename-form").toggle(),!1
        })
    }),$(function(){
    function b(){
        var c=$("#current-version").val();
        c&&$.get("_current",function(d){
            c==d?setTimeout(b,5e3):a||($("#gollum-error-message").text("Someone has edited the wiki since you started. Please reload this page and re-apply your changes."),$("#gollum-error-message").show(),$("#gollum-editor-submit").attr("disabled","disabled"),$("#gollum-editor-submit").attr("value","Cannot Save, Someone Else Has Edited"))
            })
        }
        $("#see-more-elsewhere").click(function(){
        return $(".seen-elsewhere").show(),$(this).remove(),!1
        });
    var a=!1;
    $("#gollum-editor-body").each(b),$("#gollum-editor-submit").click(function(){
        a=!0
        });
    var c=[];
    $("form#history input[type=submit]").attr("disabled",!0),$("form#history input[type=checkbox]").change(function(){
        var a=$(this).val(),b=$.inArray(a,c);
        if(b>-1)c.splice(b,1);
        else{
            c.push(a);
            if(c.length>2){
                var d=c.shift();
                $("input[value="+d+"]").attr("checked",!1)
                }
            }
        $("form#history tr.commit").removeClass("selected"),$("form#history input[type=submit]").attr("disabled",!0);
        if(c.length==2){
        $("form#history input[type=submit]").attr("disabled",!1);
        var e=!1;
        $("form#history tr.commit").each(function(){
            e&&$(this).addClass("selected"),$(this).find("input:checked").length>0&&(e=!e),e&&$(this).addClass("selected")
            })
        }
    })
});