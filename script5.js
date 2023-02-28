function clickCounter(e){
    countdown.start();
    if (timer.innerHTML != "00:00.00") {
        clicks = clicks + 1;
    }
}

var clicks = 0;
var timer = document.getElementById('timer');
var countdown = new Countdown(timer, 6);
const area = document.getElementById('area');
let end = document.getElementById('end');
let cpselem = document.getElementById('result-cps');
let clickselem = document.getElementById('result-clicks');
area.addEventListener('click', clickCounter
);

function Countdown(elem, seconds) {
    var that = {};
  
    that.elem = elem;
    that.seconds = seconds;
    that.totalTime = seconds * 100;
    that.usedTime = 0;
    that.startTime = +new Date();
    that.timer = null;
  
    that.count = function() {
      that.usedTime = Math.floor((+new Date() - that.startTime) / 10);
  
      var tt = that.totalTime - that.usedTime;
      if (tt <= 0) {
        that.elem.innerHTML = '00:00.00';
        clearInterval(that.timer);

        // END EVENT HERE IBABAK
        end.style.visibility = "visible";
        cpselem.innerHTML = clicks/5;
        clickselem.innerHTML = clicks;

      } else {
        var mi = Math.floor(tt / (60 * 100));
        var ss = Math.floor((tt - mi * 60 * 100) / 100);
        var ms = tt - Math.floor(tt / 100) * 100;
  
        that.elem.innerHTML = that.fillZero(mi) + ":" + that.fillZero(ss) + "." + that.fillZero(ms);
      }
    };
    
    that.init = function() {
      if(that.timer){
        clearInterval(that.timer);
        that.elem.innerHTML = '00:00.00';
        that.totalTime = seconds * 100;
        that.usedTime = 0;
        that.startTime = +new Date();
        that.timer = null;
      }
    };
  
    that.start = function() {
        if(!that.timer){
           that.timer = setInterval(that.count, 1);
        }
      };
    
    that.stop = function() {
        console.log('usedTime = ' + countdown.usedTime);
        if (that.timer) clearInterval(that.timer);
    };
    
    that.fillZero = function(num) {
        return num < 10 ? '0' + num : num;
    };
    
      return that;
  
    return that;
}
