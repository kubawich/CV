window.__require=function t(e,n,c){function i(s,r){if(!n[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var u="function"==typeof __require&&__require;if(!r&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+s+"'")}}var p=n[s]={exports:{}};e[s][0].call(p.exports,function(t){return i(e[s][1][t]||t)},p,p.exports,t,e,n,c)}return n[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<c.length;s++)i(c[s]);return i}({NewScript:[function(t,e,n){"use strict";cc._RF.push(e,"6638074ZY1NPYZV1QgxTOsS","NewScript"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],game_manager:[function(t,e,n){"use strict";cc._RF.push(e,"25742lw+5xEapZyGzmOYux6","game_manager"),cc.Class({extends:cc.Component,properties:{pig1:cc.Prefab,pig2:cc.Prefab,pig3:cc.Prefab,grab:{default:null,type:cc.Node},top:{default:null,type:cc.Node},points:{default:null,type:cc.Label},pts:{default:0}},releasePig:function(){var t=cc.director.getScene(),e=cc.instantiate(this.pig1);e.parent=t,this.node.setPosition(cc.v2(540,this.node.y+130)),e.setPosition(this.grab.x+4.5*this.grab.width+90,this.top.y),this.pts++,this.points.string=this.pts+" pts."},touch:function(t){this.releasePig()},onLoad:function(){cc.director.getPhysicsManager().enabled=!0,this.node.on(cc.Node.EventType.TOUCH_START,this.touch,this),this.points.string="0 pts."},start:function(){},update:function(t){this.top.setPosition(cc.v2(0,this.node.y+730))},onDestroy:function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)}}),cc._RF.pop()},{}],grab:[function(t,e,n){"use strict";cc._RF.push(e,"84ea4Py+nZFzr+eXgzMOJr0","grab"),cc.Class({extends:cc.Component,properties:{moveDuration:{default:10},pos:{get:function(){return this.Pos}},ca:{default:null,type:cc.Node}},onLoad:function(){this.node.setPosition(this.node.x,this.ca.y)},start:function(){this.node.getComponent(cc.Sprite).enabled=!0,this.node.setPosition(2*this.node.width-540-10,this.ca.y);var t=cc.sequence(cc.moveBy(this.moveDuration,cc.v2(820,0)),cc.moveBy(this.moveDuration,cc.v2(-820,0))).repeatForever();this.node.runAction(t)},update:function(t){}}),cc._RF.pop()},{}],script:[function(t,e,n){"use strict";cc._RF.push(e,"0480cbfCmxDS5mUZx31uCPQ","script"),cc.Class({extends:cc.Component,properties:{optionsPanel:{default:null,type:cc.Node},tutPanel:{default:null,type:cc.Node}},LoadGame:function(){cc.director.loadScene("Game")},Options:function(){this.optionsPanel.active=!0},CloseOptions:function(){this.optionsPanel.active=!1},Tutorial:function(){this.tutPanel.active=!0},CloseTutorial:function(){this.tutPanel.active=!1},onLoad:function(){},start:function(){},update:function(t){}}),cc._RF.pop()},{}]},{},["NewScript","game_manager","grab","script"]);