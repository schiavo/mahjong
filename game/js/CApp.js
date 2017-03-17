function CApp(){
    var RESOURCE_TO_LOAD;
    
    var _iCurResource = 0;
    var szCurSection = "";
    var _oContainer;
    var _oLang;
	
    
    this.init = function(){
        s_bMobile = jQuery.browser.mobile;
            
        _oLang = new CLang(LANGUAGE);

        _oMsgBox = new CMsgBox();
        
        var szBuffer = "<div id='preloader_text'>0%</div>"
        $("#main_game_container").append(szBuffer);
        
        s_oSpriteLibrary  = new CSpriteLibrary();
        this._loadImages();
    };
	
	this._loadImages = function(){
            s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );

            s_oSpriteLibrary.addSprite("arrow_left","./css/skins/"+s_szFolder+"/arrow_left.png");
            s_oSpriteLibrary.addSprite("arrow_right","./css/skins/"+s_szFolder+"/arrow_right.png");
            s_oSpriteLibrary.addSprite("one1","./css/skins/"+s_szFolder+"/tile-c-1.png");
            s_oSpriteLibrary.addSprite("one2","./css/skins/"+s_szFolder+"/tile-d-1.png");
            s_oSpriteLibrary.addSprite("one3","./css/skins/"+s_szFolder+"/tile-e-1.png");

            s_oSpriteLibrary.addSprite("two1","./css/skins/"+s_szFolder+"/tile-c-2.png");
            s_oSpriteLibrary.addSprite("two2","./css/skins/"+s_szFolder+"/tile-d-2.png");
            s_oSpriteLibrary.addSprite("two3","./css/skins/"+s_szFolder+"/tile-e-2.png");

            s_oSpriteLibrary.addSprite("three1","./css/skins/"+s_szFolder+"/tile-c-3.png");
            s_oSpriteLibrary.addSprite("three2","./css/skins/"+s_szFolder+"/tile-d-3.png");
            s_oSpriteLibrary.addSprite("three3","./css/skins/"+s_szFolder+"/tile-e-3.png");

            s_oSpriteLibrary.addSprite("four1","./css/skins/"+s_szFolder+"/tile-c-4.png");
            s_oSpriteLibrary.addSprite("four2","./css/skins/"+s_szFolder+"/tile-d-4.png");
            s_oSpriteLibrary.addSprite("four3","./css/skins/"+s_szFolder+"/tile-e-4.png");

            s_oSpriteLibrary.addSprite("five1","./css/skins/"+s_szFolder+"/tile-c-5.png");
            s_oSpriteLibrary.addSprite("five2","./css/skins/"+s_szFolder+"/tile-d-5.png");
            s_oSpriteLibrary.addSprite("five3","./css/skins/"+s_szFolder+"/tile-e-5.png");

            s_oSpriteLibrary.addSprite("six1","./css/skins/"+s_szFolder+"/tile-c-6.png");
            s_oSpriteLibrary.addSprite("six2","./css/skins/"+s_szFolder+"/tile-d-6.png");
            s_oSpriteLibrary.addSprite("six3","./css/skins/"+s_szFolder+"/tile-e-6.png");

            s_oSpriteLibrary.addSprite("seven1","./css/skins/"+s_szFolder+"/tile-c-7.png");
            s_oSpriteLibrary.addSprite("seven2","./css/skins/"+s_szFolder+"/tile-d-7.png");
            s_oSpriteLibrary.addSprite("seven3","./css/skins/"+s_szFolder+"/tile-e-7.png");

            s_oSpriteLibrary.addSprite("eight1","./css/skins/"+s_szFolder+"/tile-c-8.png");
            s_oSpriteLibrary.addSprite("eight2","./css/skins/"+s_szFolder+"/tile-d-8.png");
            s_oSpriteLibrary.addSprite("eight3","./css/skins/"+s_szFolder+"/tile-e-8.png");

            s_oSpriteLibrary.addSprite("nine1","./css/skins/"+s_szFolder+"/tile-c-9.png");
            s_oSpriteLibrary.addSprite("nine2","./css/skins/"+s_szFolder+"/tile-d-9.png");
            s_oSpriteLibrary.addSprite("nine3","./css/skins/"+s_szFolder+"/tile-e-9.png");

            s_oSpriteLibrary.addSprite("ten1","./css/skins/"+s_szFolder+"/tile-c-10.png");
            s_oSpriteLibrary.addSprite("ten2","./css/skins/"+s_szFolder+"/tile-d-10.png");
            s_oSpriteLibrary.addSprite("ten3","./css/skins/"+s_szFolder+"/tile-e-10.png");

            s_oSpriteLibrary.addSprite("eleven1","./css/skins/"+s_szFolder+"/tile-c-11.png");
            s_oSpriteLibrary.addSprite("eleven2","./css/skins/"+s_szFolder+"/tile-d-11.png");
            s_oSpriteLibrary.addSprite("eleven3","./css/skins/"+s_szFolder+"/tile-e-11.png");

            s_oSpriteLibrary.addSprite("twelve1","./css/skins/"+s_szFolder+"/tile-c-12.png");
            s_oSpriteLibrary.addSprite("twelve2","./css/skins/"+s_szFolder+"/tile-d-12.png");
            s_oSpriteLibrary.addSprite("twelve3","./css/skins/"+s_szFolder+"/tile-e-12.png");

        s_oSpriteLibrary.addSprite("selection","./css/skins/"+s_szFolder+"/selection.png");
            s_oSpriteLibrary.addSprite("credits_text","./css/skins/"+s_szFolder+"/credits_text.png");
            s_oSpriteLibrary.addSprite("exit_but","./css/skins/"+s_szFolder+"/exit_but.png");

            s_oSpriteLibrary.addSprite("game_bg","./css/skins/"+s_szFolder+"/game_bg_option_1.jpg");

            s_oSpriteLibrary.addSprite("help_bg","./css/skins/"+s_szFolder+"/help_bg.jpg");
            s_oSpriteLibrary.addSprite("layout_bg","./css/skins/"+s_szFolder+"/layout_bg.png");
            s_oSpriteLibrary.addSprite("locker","./css/skins/"+s_szFolder+"/locker.png");
            s_oSpriteLibrary.addSprite("menu_bg","./css/skins/"+s_szFolder+"/menu_bg.jpg");
            s_oSpriteLibrary.addSprite("msg_box_bg","./css/skins/"+s_szFolder+"/msg_box_bg.png");
            s_oSpriteLibrary.addSprite("panel_bg","./css/skins/"+s_szFolder+"/panel_bg.png");
            s_oSpriteLibrary.addSprite("choose_layout","./css/skins/"+s_szFolder+"/choose_layout.png");

            RESOURCE_TO_LOAD = s_oSpriteLibrary.getNumSprites();
            s_oSpriteLibrary.loadSprites();
	};
	
	this._onImagesLoaded = function(){
            _iCurResource++;
            var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);

            $("#preloader_text").text(iPerc+"%");
            if(_iCurResource === RESOURCE_TO_LOAD){
                $("#preloader_text").remove();
                
                this.gotoMenu();
                
                $("#msg_box").css("background-image", "url("+s_oSpriteLibrary.getSpritePath('msg_box_bg')+")");
            }
	};
    
	this._onAllImagesLoaded = function(){
	
	};
	
    this.refreshLanguage = function(szLang){
        //REFRESH TEXT IN CURRENT SECTION
        switch(szLang){
            case "de_DE":{
                    _oLang.initLangDE();
                    break;
            }
            case "es_ES":
            case "es_LA":{
                    _oLang.initLangES();
                    break;
            }
            case "fr_CA":
            case "fr_FR":{
                    _oLang.initLangFR();
                    break;
            }
            case "it_IT":{
                    _oLang.initLangITA();
                    break;
            }
            case "nl_NL":{
                    _oLang.initLangNL();
                    break;
            }
            case "pt_BR":
            case "pt_PT":{
                    _oLang.initLangPOR();
                    break;
            }
            default:{
                    _oLang.initLangENG();
            }
        }
        
        _oContainer.refreshLanguage();
    };
    
    this.onClickMessageBox = function(szEvent){
        switch(szEvent){
            case ON_MSGBOX_EXIT_FROM_GAME: {
                _oMsgBox.hide();
                this.gotoMenu();
				$(s_oApp).trigger("restart");
                break;
            }

            case ON_MSGBOX_NOT_EXIT_FROM_GAME: {
                _oMsgBox.hide();
                break;
            }
        }

    };
    
    this.gotoMenu = function(){
        if(szCurSection !== ""){
            _oContainer.unload();
            $("#"+szCurSection).html("");
            $("#"+szCurSection).css("display","none");
        }
        _oContainer = new CMenu();
        
        szCurSection = "menu_container";
    };
    //TODO bypass layout selection
    this.gotoMenuLayout = function(){
        if(szCurSection !== ""){
            $("#"+szCurSection).html("");
            $("#"+szCurSection).css("display","none");
        }
        _oContainer = new CMenuLayout();
        
        szCurSection = "menu_layout";
	$(s_oApp).trigger("game_start");
    };
    
    this.gotoHelp = function(){
        if(szCurSection !== ""){
            $("#"+szCurSection).html("");
            $("#"+szCurSection).css("display","none");
        }
        
        _oContainer = new CHelp();
            
        szCurSection = "help_container";
    };
    
    this.gotoCredits = function(){
        if(szCurSection !== ""){
            $("#"+szCurSection).html("");
            $("#"+szCurSection).css("display","none");
        }
        
        _oContainer = new CCredits();
            
        szCurSection = "credits_container";
    };
    
    this.gotoGame = function(){
        if(szCurSection !== ""){
            $("#"+szCurSection).html("");
            $("#"+szCurSection).css("display","none");
        }

        _oContainer = new CGame();
        
        szCurSection = "match_game_container";
    };

    
    this.init();
    
    s_oApp = this;
}

var s_bMobile;
var s_oApp;
var s_szFolder = "deluxe";
var _oMsgBox;
var s_oSpriteLibrary;