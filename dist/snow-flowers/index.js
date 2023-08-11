(()=>{"use strict";var t=500,i=2,n=100,e=-.75,o=30;!function(){for(var t=0,i=["ms","moz","webkit","o"],n=0;n<i.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[i[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[n]+"CancelAnimationFrame"]||window[i[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,n){var e=(new Date).getTime(),o=Math.max(0,16-(e-t)),a=window.setTimeout((function(){i(e+o)}),o);return t=e+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var a=function(){function t(t,i){this.x=void 0!==t?t:0,this.y=void 0!==i?i:0}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.length=function(t){return void 0===t?Math.sqrt(this.x*this.x+this.y*this.y):(this.normalize(),this.x*=t,this.y*=t,this)},t.prototype.normalize=function(){var t=this.length();return this.x/=t,this.y/=t,this},t}(),r=function(){function t(){this.position=new a,this.velocity=new a,this.acceleration=new a,this.age=0}return t.prototype.initialize=function(t,i,n,o){this.position.x=t,this.position.y=i,this.velocity.x=n,this.velocity.y=o,this.acceleration.x=n*e,this.acceleration.y=o*e,this.age=0},t.prototype.update=function(t){this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.age+=t},t.prototype.draw=function(t,n){var e,o=n.width*(e=this.age/i,--e*e*e+1);t.globalAlpha=1-this.age/i,t.drawImage(n,this.position.x-o/2,this.position.y-o/2,o,o)},t}(),h=function(){var t,n=0,e=0,o=i;function a(i){t=new Array(i);for(var n=0;n<t.length;n++)t[n]=new r}return a.prototype.add=function(i,o,a,r){t[e].initialize(i,o,a,r),++e==t.length&&(e=0),n==e&&n++,n==t.length&&(n=0)},a.prototype.update=function(i){if(n<e)for(var a=n;a<e;a++)t[a].update(i);if(e<n){for(a=n;a<t.length;a++)t[a].update(i);for(a=0;a<e;a++)t[a].update(i)}for(;t[n].age>=o&&n!=e;)++n==t.length&&(n=0)},a.prototype.draw=function(i,o){if(n<e)for(var a=n;a<e;a++)t[a].draw(i,o);if(e<n){for(a=n;a<t.length;a++)t[a].draw(i,o);for(a=0;a<e;a++)t[a].draw(i,o)}},a}();!function(e){var r,c=e.getContext("2d"),s=new h(t),u=t/i;function l(t){return new a(160*Math.pow(Math.sin(t),3),130*Math.cos(t)-50*Math.cos(2*t)-20*Math.cos(3*t)-10*Math.cos(4*t)+25)}var w=function(){var t=document.createElement("canvas"),i=t.getContext("2d");function n(t){var i=l(t);return i.x=o/2+i.x*o/350,i.y=o/2-i.y*o/350,i}t.width=o,t.height=o,i.beginPath();var e=-Math.PI,a=n(e);for(i.moveTo(a.x,a.y);e<Math.PI;)a=n(e+=.01),i.lineTo(a.x,a.y);i.closePath(),i.fillStyle="#ea80b0",i.fill();var r=new Image;return r.src=t.toDataURL(),r}();function d(){requestAnimationFrame(d);var t=(new Date).getTime()/1e3,i=t-(r||t);r=t,c.clearRect(0,0,e.width,e.height);for(var o=u*i,a=0;a<o;a++){var h=l(Math.PI-2*Math.PI*Math.random()),f=h.clone().length(n);s.add(e.width/2+h.x,e.height/2-h.y,f.x,-f.y)}s.update(i),s.draw(c,w)}function f(){e.width=e.clientWidth,e.height=e.clientHeight}window.onresize=f,setTimeout((function(){f(),d()}),10)}(document.getElementById("pinkboard"))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1RrRSxJQUNBUCxHQUNGLEdBQUcsR0FDSixDQTVFRCxDQTRFR2YsU0FBUzBCLGVBQWUsYSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpc2gvLi9zcmMvc25vdy1mbG93ZXJzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9pbmRleC5jc3MnXHJcbnZhciBzZXR0aW5ncyA9IHtcclxuICAgIHBhcnRpY2xlczoge1xyXG4gICAgICBsZW5ndGg6IDUwMCwgXHJcbiAgICAgIGR1cmF0aW9uOiAyLCBcclxuICAgICAgdmVsb2NpdHk6IDEwMCwgXHJcbiAgICAgIGVmZmVjdDogLTAuNzUsXHJcbiAgICAgIHNpemU6IDMwLCBcclxuICAgIH0sXHJcbiAgfTtcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGIgPSAwO1xyXG4gICAgdmFyIGMgPSBbXCJtc1wiLCBcIm1velwiLCBcIndlYmtpdFwiLCBcIm9cIl07XHJcbiAgICBmb3IgKHZhciBhID0gMDsgYSA8IGMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK2EpIHtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1tjW2FdICsgXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XHJcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XHJcbiAgICAgICAgd2luZG93W2NbYV0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8XHJcbiAgICAgICAgd2luZG93W2NbYV0gKyBcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcclxuICAgIH1cclxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGgsIGUpIHtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBmID0gTWF0aC5tYXgoMCwgMTYgLSAoZCAtIGIpKTtcclxuICAgICAgICB2YXIgZyA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGgoZCArIGYpO1xyXG4gICAgICAgIH0sIGYpO1xyXG4gICAgICAgIGIgPSBkICsgZjtcclxuICAgICAgICByZXR1cm4gZztcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGQpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcbiAgdmFyIFBvaW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcclxuICAgICAgdGhpcy54ID0gdHlwZW9mIHggIT09IFwidW5kZWZpbmVkXCIgPyB4IDogMDtcclxuICAgICAgdGhpcy55ID0gdHlwZW9mIHkgIT09IFwidW5kZWZpbmVkXCIgPyB5IDogMDtcclxuICAgIH1cclxuICAgIFBvaW50LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9O1xyXG4gICAgUG9pbnQucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcclxuICAgICAgaWYgKHR5cGVvZiBsZW5ndGggPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcbiAgICAgIHRoaXMubm9ybWFsaXplKCk7XHJcbiAgICAgIHRoaXMueCAqPSBsZW5ndGg7XHJcbiAgICAgIHRoaXMueSAqPSBsZW5ndGg7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFBvaW50LnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gUG9pbnQ7XHJcbiAgfSkoKTtcclxuICB2YXIgUGFydGljbGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFydGljbGUoKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoKTtcclxuICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBQb2ludCgpO1xyXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBQb2ludCgpO1xyXG4gICAgICB0aGlzLmFnZSA9IDA7XHJcbiAgICB9XHJcbiAgICBQYXJ0aWNsZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh4LCB5LCBkeCwgZHkpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi54ID0geDtcclxuICAgICAgdGhpcy5wb3NpdGlvbi55ID0geTtcclxuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gZHg7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IGR5O1xyXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbi54ID0gZHggKiBzZXR0aW5ncy5wYXJ0aWNsZXMuZWZmZWN0O1xyXG4gICAgICB0aGlzLmFjY2VsZXJhdGlvbi55ID0gZHkgKiBzZXR0aW5ncy5wYXJ0aWNsZXMuZWZmZWN0O1xyXG4gICAgICB0aGlzLmFnZSA9IDA7XHJcbiAgICB9O1xyXG4gICAgUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YVRpbWUpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueCAqIGRlbHRhVGltZTtcclxuICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueSAqIGRlbHRhVGltZTtcclxuICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IHRoaXMuYWNjZWxlcmF0aW9uLnggKiBkZWx0YVRpbWU7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLmFjY2VsZXJhdGlvbi55ICogZGVsdGFUaW1lO1xyXG4gICAgICB0aGlzLmFnZSArPSBkZWx0YVRpbWU7XHJcbiAgICB9O1xyXG4gICAgUGFydGljbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY29udGV4dCwgaW1hZ2UpIHtcclxuICAgICAgZnVuY3Rpb24gZWFzZSh0KSB7XHJcbiAgICAgICAgcmV0dXJuIC0tdCAqIHQgKiB0ICsgMTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgc2l6ZSA9IGltYWdlLndpZHRoICogZWFzZSh0aGlzLmFnZSAvIHNldHRpbmdzLnBhcnRpY2xlcy5kdXJhdGlvbik7XHJcbiAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxIC0gdGhpcy5hZ2UgLyBzZXR0aW5ncy5wYXJ0aWNsZXMuZHVyYXRpb247XHJcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHNpemUgLyAyLFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHNpemUgLyAyLFxyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgc2l6ZVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYXJ0aWNsZTtcclxuICB9KSgpO1xyXG4gIHZhciBQYXJ0aWNsZVBvb2wgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBhcnRpY2xlcyxcclxuICAgICAgZmlyc3RBY3RpdmUgPSAwLFxyXG4gICAgICBmaXJzdEZyZWUgPSAwLFxyXG4gICAgICBkdXJhdGlvbiA9IHNldHRpbmdzLnBhcnRpY2xlcy5kdXJhdGlvbjtcclxuXHJcbiAgICBmdW5jdGlvbiBQYXJ0aWNsZVBvb2wobGVuZ3RoKSB7XHJcbiAgICAgIHBhcnRpY2xlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7IGkrKylcclxuICAgICAgICBwYXJ0aWNsZXNbaV0gPSBuZXcgUGFydGljbGUoKTtcclxuICAgIH1cclxuICAgIFBhcnRpY2xlUG9vbC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHgsIHksIGR4LCBkeSkge1xyXG4gICAgICBwYXJ0aWNsZXNbZmlyc3RGcmVlXS5pbml0aWFsaXplKHgsIHksIGR4LCBkeSk7XHJcbiAgICAgIGZpcnN0RnJlZSsrO1xyXG4gICAgICBpZiAoZmlyc3RGcmVlID09IHBhcnRpY2xlcy5sZW5ndGgpIGZpcnN0RnJlZSA9IDA7XHJcbiAgICAgIGlmIChmaXJzdEFjdGl2ZSA9PSBmaXJzdEZyZWUpIGZpcnN0QWN0aXZlKys7XHJcbiAgICAgIGlmIChmaXJzdEFjdGl2ZSA9PSBwYXJ0aWNsZXMubGVuZ3RoKSBmaXJzdEFjdGl2ZSA9IDA7XHJcbiAgICB9O1xyXG4gICAgUGFydGljbGVQb29sLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVsdGFUaW1lKSB7XHJcbiAgICAgIHZhciBpO1xyXG4gICAgICBpZiAoZmlyc3RBY3RpdmUgPCBmaXJzdEZyZWUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gZmlyc3RBY3RpdmU7IGkgPCBmaXJzdEZyZWU7IGkrKylcclxuICAgICAgICAgIHBhcnRpY2xlc1tpXS51cGRhdGUoZGVsdGFUaW1lKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlyc3RGcmVlIDwgZmlyc3RBY3RpdmUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gZmlyc3RBY3RpdmU7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICBwYXJ0aWNsZXNbaV0udXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGZpcnN0RnJlZTsgaSsrKSBwYXJ0aWNsZXNbaV0udXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgIH1cclxuICAgICAgd2hpbGUgKFxyXG4gICAgICAgIHBhcnRpY2xlc1tmaXJzdEFjdGl2ZV0uYWdlID49IGR1cmF0aW9uICYmXHJcbiAgICAgICAgZmlyc3RBY3RpdmUgIT0gZmlyc3RGcmVlXHJcbiAgICAgICkge1xyXG4gICAgICAgIGZpcnN0QWN0aXZlKys7XHJcbiAgICAgICAgaWYgKGZpcnN0QWN0aXZlID09IHBhcnRpY2xlcy5sZW5ndGgpIGZpcnN0QWN0aXZlID0gMDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIFBhcnRpY2xlUG9vbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjb250ZXh0LCBpbWFnZSkge1xyXG4gICAgICBpZiAoZmlyc3RBY3RpdmUgPCBmaXJzdEZyZWUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gZmlyc3RBY3RpdmU7IGkgPCBmaXJzdEZyZWU7IGkrKylcclxuICAgICAgICAgIHBhcnRpY2xlc1tpXS5kcmF3KGNvbnRleHQsIGltYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmlyc3RGcmVlIDwgZmlyc3RBY3RpdmUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gZmlyc3RBY3RpdmU7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICBwYXJ0aWNsZXNbaV0uZHJhdyhjb250ZXh0LCBpbWFnZSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaXJzdEZyZWU7IGkrKykgcGFydGljbGVzW2ldLmRyYXcoY29udGV4dCwgaW1hZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBhcnRpY2xlUG9vbDtcclxuICB9KSgpO1xyXG4gIChmdW5jdGlvbiAoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgIHBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZVBvb2woc2V0dGluZ3MucGFydGljbGVzLmxlbmd0aCksXHJcbiAgICAgIHBhcnRpY2xlUmF0ZSA9XHJcbiAgICAgICAgc2V0dGluZ3MucGFydGljbGVzLmxlbmd0aCAvIHNldHRpbmdzLnBhcnRpY2xlcy5kdXJhdGlvbiwgXHJcbiAgICAgIHRpbWU7XHJcbiAgICBmdW5jdGlvbiBwb2ludE9uSGVhcnQodCkge1xyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgIDE2MCAqIE1hdGgucG93KE1hdGguc2luKHQpLCAzKSxcclxuICAgICAgICAxMzAgKiBNYXRoLmNvcyh0KSAtXHJcbiAgICAgICAgICA1MCAqIE1hdGguY29zKDIgKiB0KSAtXHJcbiAgICAgICAgICAyMCAqIE1hdGguY29zKDMgKiB0KSAtXHJcbiAgICAgICAgICAxMCAqIE1hdGguY29zKDQgKiB0KSArXHJcbiAgICAgICAgICAyNVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdmFyIGltYWdlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksXHJcbiAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHNldHRpbmdzLnBhcnRpY2xlcy5zaXplO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gc2V0dGluZ3MucGFydGljbGVzLnNpemU7XHJcbiAgICAgIGZ1bmN0aW9uIHRvKHQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBwb2ludE9uSGVhcnQodCk7XHJcbiAgICAgICAgcG9pbnQueCA9XHJcbiAgICAgICAgICBzZXR0aW5ncy5wYXJ0aWNsZXMuc2l6ZSAvIDIgK1xyXG4gICAgICAgICAgKHBvaW50LnggKiBzZXR0aW5ncy5wYXJ0aWNsZXMuc2l6ZSkgLyAzNTA7XHJcbiAgICAgICAgcG9pbnQueSA9XHJcbiAgICAgICAgICBzZXR0aW5ncy5wYXJ0aWNsZXMuc2l6ZSAvIDIgLVxyXG4gICAgICAgICAgKHBvaW50LnkgKiBzZXR0aW5ncy5wYXJ0aWNsZXMuc2l6ZSkgLyAzNTA7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgIHZhciB0ID0gLU1hdGguUEk7XHJcbiAgICAgIHZhciBwb2ludCA9IHRvKHQpO1xyXG4gICAgICBjb250ZXh0Lm1vdmVUbyhwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgd2hpbGUgKHQgPCBNYXRoLlBJKSB7XHJcbiAgICAgICAgdCArPSAwLjAxO1xyXG4gICAgICAgIHBvaW50ID0gdG8odCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgIH1cclxuICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcIiNlYTgwYjBcIjtcclxuICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH0pKCk7XHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgICB2YXIgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCxcclxuICAgICAgICBkZWx0YVRpbWUgPSBuZXdUaW1lIC0gKHRpbWUgfHwgbmV3VGltZSk7XHJcbiAgICAgIHRpbWUgPSBuZXdUaW1lO1xyXG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICB2YXIgYW1vdW50ID0gcGFydGljbGVSYXRlICogZGVsdGFUaW1lO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvaW50T25IZWFydChNYXRoLlBJIC0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB2YXIgZGlyID0gcG9zLmNsb25lKCkubGVuZ3RoKHNldHRpbmdzLnBhcnRpY2xlcy52ZWxvY2l0eSk7XHJcbiAgICAgICAgcGFydGljbGVzLmFkZChcclxuICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIgKyBwb3MueCxcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gcG9zLnksXHJcbiAgICAgICAgICBkaXIueCxcclxuICAgICAgICAgIC1kaXIueVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcGFydGljbGVzLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gICAgICBwYXJ0aWNsZXMuZHJhdyhjb250ZXh0LCBpbWFnZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcclxuICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcclxuICAgIH1cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IG9uUmVzaXplO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG9uUmVzaXplKCk7XHJcbiAgICAgIHJlbmRlcigpO1xyXG4gICAgfSwgMTApO1xyXG4gIH0pKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGlua2JvYXJkXCIpKTtcclxuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiYiIsImMiLCJhIiwibGVuZ3RoIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJoIiwiZSIsImQiLCJEYXRlIiwiZ2V0VGltZSIsImYiLCJNYXRoIiwibWF4IiwiZyIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJQb2ludCIsIngiLCJ5IiwidGhpcyIsInByb3RvdHlwZSIsImNsb25lIiwic3FydCIsIm5vcm1hbGl6ZSIsIlBhcnRpY2xlIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImFjY2VsZXJhdGlvbiIsImFnZSIsImluaXRpYWxpemUiLCJkeCIsImR5IiwidXBkYXRlIiwiZGVsdGFUaW1lIiwiZHJhdyIsImNvbnRleHQiLCJpbWFnZSIsInQiLCJzaXplIiwid2lkdGgiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsIlBhcnRpY2xlUG9vbCIsInBhcnRpY2xlcyIsImZpcnN0QWN0aXZlIiwiZmlyc3RGcmVlIiwiZHVyYXRpb24iLCJBcnJheSIsImkiLCJhZGQiLCJjYW52YXMiLCJ0aW1lIiwiZ2V0Q29udGV4dCIsInBhcnRpY2xlUmF0ZSIsInBvaW50T25IZWFydCIsInBvdyIsInNpbiIsImNvcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRvIiwicG9pbnQiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJQSSIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJJbWFnZSIsInNyYyIsInRvRGF0YVVSTCIsInJlbmRlciIsIm5ld1RpbWUiLCJjbGVhclJlY3QiLCJhbW91bnQiLCJwb3MiLCJyYW5kb20iLCJkaXIiLCJvblJlc2l6ZSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwib25yZXNpemUiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=