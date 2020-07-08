window.__require=function t(e,n,i){function o(l,c){if(!n[l]){if(!e[l]){var a=l.split("/");if(a=a[a.length-1],!e[a]){var s="function"==typeof __require&&__require;if(!c&&s)return s(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+l+"'")}l=a}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){return o(e[l][1][t]||t)},u,u.exports,t,e,n,i)}return n[l].exports}for(var r="function"==typeof __require&&__require,l=0;l<i.length;l++)o(i[l]);return o}({CellScript:[function(t,e,n){"use strict";cc._RF.push(e,"58586C+OVVBiJurt2YcX/my","CellScript");var i=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,l=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l};Object.defineProperty(n,"__esModule",{value:!0});var r=cc._decorator,l=r.ccclass,c=r.property,a=t("./CellStatus"),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.Black=null,e.White=null,e.Status=a.CellStatus.Nothing,e}return i(e,t),e.prototype.SetStatus=function(t,e){var n=this;this.Status=t;var i=this.node.getComponent(cc.Sprite),o=this.node.getComponent(cc.Animation);switch(t){case a.CellStatus.Black:setTimeout(function(){i.spriteFrame=n.Black,o.play()},100*e);break;case a.CellStatus.White:setTimeout(function(){i.spriteFrame=n.White,o.play()},100*e);break;default:i.spriteFrame=null}},o([c(cc.SpriteFrame)],e.prototype,"Black",void 0),o([c(cc.SpriteFrame)],e.prototype,"White",void 0),e=o([l],e)}(cc.Component);n.default=s,cc._RF.pop()},{"./CellStatus":"CellStatus"}],CellStatus:[function(t,e,n){"use strict";cc._RF.push(e,"454262RhT1HWraW7tTCQSAo","CellStatus"),Object.defineProperty(n,"__esModule",{value:!0}),n.CellStatus=void 0,function(t){t[t.Nothing=0]="Nothing",t[t.Black=1]="Black",t[t.White=2]="White"}(n.CellStatus||(n.CellStatus={})),cc._RF.pop()},{}],Cell:[function(t,e,n){"use strict";cc._RF.push(e,"fe2a9ByXIVMgJ2lrzyUKOQ2","Cell"),Object.defineProperty(n,"__esModule",{value:!0});var i=t("./ReverseGrid"),o=function(){function t(t,e,n){this.Position=null,this.Rectangle=null,this.Node=null,this.Position=e,this.Node=n;var o=new cc.Rect;o.x=e.x*i.default.CellSize+i.default.CellSize/2,o.y=e.y*i.default.CellSize+i.default.CellSize/2,o.width=i.default.CellSize,o.height=i.default.CellSize,this.Rectangle=o,this.Node.setPosition(o.x,o.y)}return t.prototype.GetStatus=function(){return this.Node.getComponent("CellScript").Status},t.prototype.SetStatus=function(t,e){void 0===e&&(e=0),this.Node.getComponent("CellScript").SetStatus(t,e)},t}();n.default=o,cc._RF.pop()},{"./ReverseGrid":"ReverseGrid"}],ReverseGrid:[function(t,e,n){"use strict";cc._RF.push(e,"81078fVtkJPh698VKrTk7RQ","ReverseGrid");var i=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,l=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l};Object.defineProperty(n,"__esModule",{value:!0});var r=cc._decorator,l=r.ccclass,c=r.property,a=t("./Cell"),s=t("./CellStatus"),u=t("./ScanDirection"),C=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.Cell=null,e.Focused=null,e.LblBlackCount=null,e.LblWhiteCount=null,e.m_Cells=new Array,e.Turn=s.CellStatus.Black,e.PlayerColor=s.CellStatus.Black,e}var n;return i(e,t),n=e,e.prototype.start=function(){for(var t=this,e=0;e<n.XCount;e++){this.m_Cells[e]=new Array;for(var i=0;i<n.YCount;i++){var o=cc.instantiate(this.Cell);this.m_Cells[e][i]=new a.default(this,cc.v2(e,i),o),this.node.addChild(o)}}var r=this.getComponent(cc.Graphics);r.node.setPosition(-n.XCount*n.CellSize/2,-n.YCount*n.CellSize/4),this.node.setContentSize(n.XCount*n.CellSize,n.YCount*n.CellSize),this.ReverseGridDraw(r),this.node.on(cc.Node.EventType.TOUCH_START,function(e){var n=t.node.convertToNodeSpaceAR(e.getLocation()),i=t.CellFromPoint(n.x,n.y);t.Put(t.Turn,i.Position.x,i.Position.y)&&t.ChangeTurn()}),this.Focused.setContentSize(n.CellSize,n.CellSize);var l=this.Focused.getComponent(cc.Graphics);l.enabled=!1,this.FocusedDraw(l),this.node.on(cc.Node.EventType.MOUSE_MOVE,function(e){var n=t.node.convertToNodeSpaceAR(e.getLocation()),i=t.CellFromPoint(n.x,n.y);t.Focused.setPosition(i.Rectangle.x-i.Rectangle.width/2,i.Rectangle.y-i.Rectangle.height/2)}),this.node.on(cc.Node.EventType.MOUSE_ENTER,function(t){l.enabled=!0}),this.node.on(cc.Node.EventType.MOUSE_LEAVE,function(t){l.enabled=!1}),this.Initialize(),this.LblBlackCount.string=""+this.Count(s.CellStatus.Black),this.LblWhiteCount.string=""+this.Count(s.CellStatus.White),this.LblBlackCount.node.parent.opacity=255,this.LblWhiteCount.node.parent.opacity=100},e.prototype.Initialize=function(){for(var t=0;t<n.XCount;t++)for(var e=0;e<n.YCount;e++)this.Cells(t,e).SetStatus(s.CellStatus.Nothing);this.Cells(3,3).SetStatus(s.CellStatus.Black),this.Cells(3,4).SetStatus(s.CellStatus.White),this.Cells(4,3).SetStatus(s.CellStatus.White),this.Cells(4,4).SetStatus(s.CellStatus.Black)},e.prototype.ChangeTurn=function(){0!=this.Count(s.CellStatus.Nothing)&&(0!=this.PuttableCount(s.CellStatus.Black)||0!=this.PuttableCount(s.CellStatus.White))?0!=this.Count(s.CellStatus.Black)?0!=this.Count(s.CellStatus.White)?(this.Turn==s.CellStatus.Black?(this.Turn=s.CellStatus.White,this.LblBlackCount.node.parent.opacity=100,this.LblWhiteCount.node.parent.opacity=255):(this.Turn=s.CellStatus.Black,this.LblBlackCount.node.parent.opacity=255,this.LblWhiteCount.node.parent.opacity=100),0==this.PuttableCount(this.Turn)&&this.ChangeTurn()):setTimeout(function(){return alert("\u9ed2\u306e\u52dd\u3061\u3067\u3059\uff01")},100):setTimeout(function(){return alert("\u767d\u306e\u52dd\u3061\u3067\u3059\uff01")},100):this.Count(s.CellStatus.Black)>this.Count(s.CellStatus.White)?setTimeout(function(){return alert("\u9ed2\u306e\u52dd\u3061\u3067\u3059\uff01")},100):this.Count(s.CellStatus.Black)<this.Count(s.CellStatus.White)?setTimeout(function(){return alert("\u767d\u306e\u52dd\u3061\u3067\u3059\uff01")},100):setTimeout(function(){return alert("\u5f15\u304d\u5206\u3051\u3067\u3059\uff01\uff01")},100)},e.prototype.Put=function(t,e,n){return!!this.CanPut(t,e,n)&&(this.Cells(e,n).SetStatus(this.Turn),this.Reverse(t,u.ScanDirection.Left,e,n),this.Reverse(t,u.ScanDirection.Right,e,n),this.Reverse(t,u.ScanDirection.Up,e,n),this.Reverse(t,u.ScanDirection.Down,e,n),this.Reverse(t,u.ScanDirection.LeftUp,e,n),this.Reverse(t,u.ScanDirection.LeftDown,e,n),this.Reverse(t,u.ScanDirection.RightUp,e,n),this.Reverse(t,u.ScanDirection.RightDown,e,n),this.LblBlackCount.string=""+this.Count(s.CellStatus.Black),this.LblWhiteCount.string=""+this.Count(s.CellStatus.White),!0)},e.prototype.CanPut=function(t,e,n){return this.Cells(e,n).GetStatus()==s.CellStatus.Nothing&&0!=this.ReversibleCount(t,e,n)},e.prototype.ReversibleCount=function(t,e,n){var i=0;return i+=this.ReversibleCountDirection(t,u.ScanDirection.Left,e,n),i+=this.ReversibleCountDirection(t,u.ScanDirection.Right,e,n),i+=this.ReversibleCountDirection(t,u.ScanDirection.Up,e,n),i+=this.ReversibleCountDirection(t,u.ScanDirection.Down,e,n),i+=this.ReversibleCountDirection(t,u.ScanDirection.RightUp,e,n),i+=this.ReversibleCountDirection(t,u.ScanDirection.RightDown,e,n),i+=this.ReversibleCountDirection(t,u.ScanDirection.LeftUp,e,n),i+=this.ReversibleCountDirection(t,u.ScanDirection.LeftDown,e,n)},e.prototype.ReversibleCountDirection=function(t,e,i,o){var r=null,l=0,c=0;switch(r=t==s.CellStatus.Black?s.CellStatus.White:s.CellStatus.Black,e){case u.ScanDirection.Left:l=-1,c=0;break;case u.ScanDirection.Right:l=1,c=0;break;case u.ScanDirection.Up:l=0,c=-1;break;case u.ScanDirection.Down:l=0,c=1;break;case u.ScanDirection.RightUp:l=1,c=-1;break;case u.ScanDirection.RightDown:l=1,c=1;break;case u.ScanDirection.LeftUp:l=-1,c=-1;break;case u.ScanDirection.LeftDown:l=-1,c=1}if(i+l<0||i+l>=n.XCount||o+c<0||o+c>=n.YCount)return 0;this.Cells(i+l,o+c);var a=0;if(this.Cells(i+l,o+c).GetStatus()==r)for(var C=0;C<n.XCount;C++){var h=i+l*(C+1),p=o+c*(C+1);if(h<0||h>n.XCount-1)return 0;if(p<0||p>n.YCount-1)return 0;switch(this.Cells(h,p).GetStatus()){case t:return a;case s.CellStatus.Nothing:return 0;default:a+=1}}return 0},e.prototype.Reverse=function(t,e,i,o){var r=null,l=0,c=0;switch(r=t==s.CellStatus.Black?s.CellStatus.White:s.CellStatus.Black,e){case u.ScanDirection.Left:l=-1,c=0;break;case u.ScanDirection.Right:l=1,c=0;break;case u.ScanDirection.Up:l=0,c=-1;break;case u.ScanDirection.Down:l=0,c=1;break;case u.ScanDirection.RightUp:l=1,c=-1;break;case u.ScanDirection.RightDown:l=1,c=1;break;case u.ScanDirection.LeftUp:l=-1,c=-1;break;case u.ScanDirection.LeftDown:l=-1,c=1}if(this.ReversibleCountDirection(t,e,i,o)>0)for(var a=1,C=1;C<n.XCount;C++){var h=i+l*C,p=o+c*C;if(h<0||h>n.XCount-1)break;if(p<0||p>n.YCount-1)break;if(this.Cells(h,p).GetStatus()!=r)break;this.Cells(h,p).SetStatus(t,a),a+=1}},e.prototype.CellFromPoint=function(t,e){return t<0||t>=n.XCount*n.CellSize?null:e<0||e>=n.YCount*n.CellSize?null:this.Cells(Math.floor(t/n.CellSize),Math.floor(e/n.CellSize))},e.prototype.Cells=function(t,e){return this.m_Cells[t][e]},e.prototype.ReverseGridDraw=function(t){t.clear(),t.fillRect(0,0,n.XCount*n.CellSize,n.YCount*n.CellSize);for(var e=0;e<n.XCount+1;e++)t.moveTo(e*n.CellSize,0),t.lineTo(e*n.CellSize,n.YCount*n.CellSize),t.stroke();for(var i=0;i<n.XCount+1;i++)t.moveTo(0,i*n.CellSize),t.lineTo(n.XCount*n.CellSize,i*n.CellSize),t.stroke()},e.prototype.FocusedDraw=function(t){t.clear(),t.rect(2,2,n.CellSize-4,n.CellSize-4),t.fill(),t.stroke()},e.prototype.Count=function(t){for(var e=0,i=0;i<n.XCount;i++)for(var o=0;o<n.YCount;o++)this.Cells(i,o).GetStatus()==t&&(e+=1);return e},e.prototype.PuttableCount=function(t){for(var e=0,i=0;i<n.XCount;i++)for(var o=0;o<n.YCount;o++)this.CanPut(t,i,o)&&(e+=1);return e},e.CellSize=48,e.XCount=8,e.YCount=8,o([c(cc.Prefab)],e.prototype,"Cell",void 0),o([c(cc.Node)],e.prototype,"Focused",void 0),o([c(cc.Label)],e.prototype,"LblBlackCount",void 0),o([c(cc.Label)],e.prototype,"LblWhiteCount",void 0),e=n=o([l],e)}(cc.Component);n.default=C,cc._RF.pop()},{"./Cell":"Cell","./CellStatus":"CellStatus","./ScanDirection":"ScanDirection"}],ScanDirection:[function(t,e,n){"use strict";cc._RF.push(e,"7a30bKxJYRLXoQgpe09yzPl","ScanDirection"),Object.defineProperty(n,"__esModule",{value:!0}),n.ScanDirection=void 0,function(t){t[t.Left=0]="Left",t[t.Right=1]="Right",t[t.Up=2]="Up",t[t.Down=3]="Down",t[t.LeftUp=4]="LeftUp",t[t.LeftDown=5]="LeftDown",t[t.RightUp=6]="RightUp",t[t.RightDown=7]="RightDown"}(n.ScanDirection||(n.ScanDirection={})),cc._RF.pop()},{}]},{},["Cell","CellScript","CellStatus","ReverseGrid","ScanDirection"]);