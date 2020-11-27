/**
 * polyfill / forEach
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


// ハンバーガーメニュー設定
function SetHamburger(argObj){

    /******************************
    * define
    ******************************/
   // constructor
   const config = {
        icon: '', // ハンバーガーアイコン
        nav: '', // 開閉するメニュー
        target: '', // icon以外に任意で設定する開閉ボタン
        openClass: 'open', // メニュー開閉時に設定するclass
        width: '', // メニューを利用するmediaquery 横幅
    };
    // config -> 引数上書き
    for(let key in argObj){
        if(!config.hasOwnProperty(key)) continue;
        config[key] = argObj[key];
    }
    const $icon = document.querySelector(config.icon);
    const $nav = document.querySelector(config.nav);
    // 最低限 icon,nav 要素を取得が必要
    if(!$icon || !$nav) return;
    const $targets = [].slice.call(document.querySelectorAll(config.target));
    // nav a -> nav配下のa要素を全取得
    const $links = [].slice.call(document.querySelectorAll(config.nav + ' a'));
    // openClass を付与する要素を設定
    const $openEle = $targets.concat([$icon,$nav]);
    // toggleOpen を設定する要素を設定
    const $toggleEle = $links.concat($targets,[$icon]);


    /******************************
    * function
    ******************************/
    const toggleOpen = function(){
        // window viewport と 指定したwidthを比較
        if(config.width && config.width<=window.innerWidth) return;
        $openEle.forEach(function(i){
            i.classList.toggle(config.openClass);
        });
    };

    const setEvent = function(){
        $toggleEle.forEach(function(i){
            i.addEventListener('click',toggleOpen,false);
        });
    };

    /******************************
    * run
    ******************************/
    setEvent();

}