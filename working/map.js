function $(el){
    return document.getElementById(el);
}
var student = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('student'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    student.move('student',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake2 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake2'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake2.move('stake2',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake3 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake3'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake3.move('stake3',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake4 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake4'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake4.move('stake4',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake5 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake5'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake5.move('stake5',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake6 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake6'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake6.move('stake6',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake7 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake7'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake7.move('stake7',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake8 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake8'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake8.move('stake8',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake9 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake9'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake9.move('stake9',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake10 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake10'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake10.move('stake10',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake11 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake11'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake11.move('stake11',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake12 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake12'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake12.move('stake12',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake13 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake13'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake13.move('stake13',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();

var stake14 = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('stake14'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    stake14.move('stake14',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();