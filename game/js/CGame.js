function CGame(){
    var _bUpdate = false;
    var _iCurHintIndex;
    var _iContTileDisappearing;
    var _iScore;
    var _iBonusTimeElaps;
    var _iTilesOnBoard;
    var _iIntervalID;
    var _aHintCouples = new Array();
    var _aTilesMc = new Array();
    var _aSelectableTiles;
    
    var _oFirstTileSelected;
    var _oSecondTileSelected;
    var _oThirdTileSelected;
    var _oFirstHintShowing;
    var _oSecondHintShowing;
    var _oThirdHintShowing;
    
    var _oInterface;
    var _oLayoutSettings = new CLayoutSettings();

    
    this.init = function(){
        
        this._setLayout();
        do{
            this._initTilesOnBoard();
            this._reset();
        }while (_aHintCouples.length === 0);

        _oInterface = new CInterface();
        _oInterface.setScore(_iScore);
        _oInterface.setHintNum(_aHintCouples.length);

        _iIntervalID = setInterval( this._update, FPS_TIME );
        
        $("#match_game_container").css("display","block");
    };
    
    this.unload = function(){
      _oInterface.unload();
      clearInterval(_iIntervalID);
      
      for(var i=0;i<_aTilesMc.length;i++){
          _aTilesMc[i].unload();
      }
    };
    
    this._setLayout = function(){
        switch(s_szLayoutSelected){
            case "classic":{
                    _oLayoutSettings.initLayoutClassic();
                    break;
            }
            case "monument":{
                    _oLayoutSettings.initLayoutMonument();
                    break;
            }
            case "pyramids":{
                    _oLayoutSettings.initLayoutPyramids();
                    break;
            }
            case "arena":{
                    _oLayoutSettings.initLayoutArena();
                    break;
            }
            case "four":{
                    _oLayoutSettings.initLayoutFour();
                    break;
            }
            case "the_wall":{
                    _oLayoutSettings.initLayoutTheWall();
                    break;
            }  
        }
    };
    
    this._initTilesOnBoard = function(){
        var aTileValues = new Array("circle1", "circle1", "circle1",
                                    "circle2", "circle2", "circle2",
                                    // "circle3", "circle3", "circle3",
                                    // "circle4", "circle4", "circle4", "circle4",
                                    // "circle5", "circle5", "circle5", "circle5",
                                    // "circle6", "circle6", "circle6", "circle6",
                                    // "circle7", "circle7", "circle7", "circle7",
                                    // "circle8", "circle8", "circle8", "circle8",
                                    // "circle9", "circle9", "circle9", "circle9",
                                    "bamboo1", "bamboo1", "bamboo1",
                                    "bamboo2", "bamboo2", "bamboo2",
                                    // "bamboo3", "bamboo3", "bamboo3",
                                    // "bamboo4", "bamboo4", "bamboo4", "bamboo4",
                                    // "bamboo5", "bamboo5", "bamboo5", "bamboo5",
                                    // "bamboo6", "bamboo6", "bamboo6", "bamboo6",
                                    // "bamboo7", "bamboo7", "bamboo7", "bamboo7",
                                    // "bamboo8", "bamboo8", "bamboo8", "bamboo8",
                                    // "bamboo9", "bamboo9", "bamboo9", "bamboo9",
                                    "characters1", "characters1", "characters1",
                                    "characters2", "characters2", "characters2",
                                    // "characters3", "characters3", "characters3",
                                    // "characters4", "characters4", "characters4", "characters4",
                                    // "characters5", "characters5", "characters5", "characters5",
                                    // "characters6", "characters6", "characters6", "characters6",
                                    // "characters7", "characters7", "characters7", "characters7",
                                    // "characters8", "characters8", "characters8", "characters8",
                                    // "characters9", "characters9", "characters9", "characters9",
                                    "wind1", "wind1", "wind1",
                                    "wind2", "wind2", "wind2",
                                    // "wind3", "wind3", "wind3", "wind3",
                                    // "wind4", "wind4", "wind4", "wind4",
                                    "dragon1", "dragon1", "dragon1",
                                    "dragon2", "dragon2", "dragon2",
                                    // "dragon3", "dragon3", "dragon3",
                                    "flower1", "flower2", "flower3",
                                    "season1", "season2", "season3"
        );
                                    
        aTileValues  = shuffle(aTileValues);                        
        var aPos = _oLayoutSettings.getTilePos();
        var aLeftBlocks = _oLayoutSettings.getLeftBlocks();
        var aRightBlocks = _oLayoutSettings.getRightBlocks();
        var aUpBlocks= _oLayoutSettings.getUpBlocks();
        var aBlockingList = _oLayoutSettings.getBlockList();
        var aTileHeight = _oLayoutSettings.getHeight();  
        var pPos = _oLayoutSettings.getPos();
        
        var szBuffer ="";
        szBuffer += "<div id='tile_container'>";
        for(var i=0;i<aPos.length;i++){
            //var iRand = Math.floor(Math.random() * aTileValues.length );
            //var szRandValue = aTileValues[iRand];
			var szRandValue = aTileValues[i];
            
            szBuffer += "<div id='tile_"+i+"' class='mahjong_tile'>";
            szBuffer += "<div id='selection_"+i+"' class='selection_tile' style=\"background-image:url("+s_oSpriteLibrary.getSpritePath('selection')+")\"></div></div>";

           _aTilesMc.push(new CTile(i,aPos[i],szRandValue,aLeftBlocks[i],aRightBlocks[i],aUpBlocks[i],aBlockingList[i],aTileHeight[i]));

            //aTileValues.splice(iRand, 1);  
        }
        szBuffer+="</div>";
        
        $("#match_game_container").html(szBuffer);
        
        for(var i=0;i<_aTilesMc.length;i++){
            _aTilesMc[i].init(pPos);
        }
        
    };

    this.getTileMessage = function(tileValue){
        var tileMessage;
        console.log(tileValue);
        switch(tileValue){
            case "circle1":{
                tileMessage = "Firefox and Chrome share a probabilistic signal with LG phone.  LG Device ID is linked to person ABC111 via a hashed email address";
                break;
            }
            case "circle2":{
                tileMessage = "iPhone device ID and firefox cookie share the same Verizon ID.  Verizon user JKL111 logs in to Verizon app on both iPhone and Samsung device.  ONE by AOL associates the iPhone and the Samsung tablet to with person JKL111";
                break;
            }
            case "bamboo1":{
                tileMessage = "User checks AOL mail on Dell Chrome browser and iPad App.  AOL email address becomes person identifier STP111.  iPhone linked probabilistically by sharing same signals at similar times of use as iPad. ONE by AOL associates the Dell browser and both iPad web/app environments with person STP111";
                break;
            }
            case "bamboo2":{
                tileMessage = "The Chrome PC cookie is linked to a hashed email address for person QRS111.  The Firefox and Safari cookies are linked probabilistically via shared signals we see consistently. ONE by AOL associates the two Lenovo browsers and the Macbook Safari as person QRS111";
                break;
            }
            case "character1":{
                tileMessage = "Firefox and Chrome share a probabilistic signal with Google phone.  Google Device ID is linked to person ABC222 via a hashed email address";
                break;
            }
            case "character2":{
                tileMessage = "Galaxy 5 device ID and firefox cookie share the same Verizon ID.  Verizon user JKL222 logs in to Verizon app on both iPhone and Galaxy device.  ONE by AOL associates the Galaxy 5 and the Samsung tablet to with person JKL222";
                break;
            }
            case "wind1":{
                tileMessage = "User checks AOL mail on HP Chrome browser and Surface browser.  AOL email address becomes person identifier STP222.  iPhone linked probabilistically by sharing same signals at similar times of use as iPad. ONE by AOL associates the Dell browser and both iPad web/app environments with person STP222";
                break;
            }
            case "wind2":{
                tileMessage = "The Chrome PC cookie is linked to a hashed email address for person QRS222.  The Firefox and Safari cookies are linked probabilistically via shared signals we see consistently. ONE by AOL associates the two Lenovo browsers and the iMac Safari as person QRS222";
                break;
            }
            case "dragon1":{
                tileMessage = "Firefox and Chrome share a probabilistic signal with HTC phone.  HTC Device ID is linked to person ABC333 via a hashed email address";
                break;
            }
            case "dragon2":{
                tileMessage = "Droid device ID and firefox cookie share the same Verizon ID.  Verizon user JKL333 logs in to Verizon app on both Droid and iPad.  ONE by AOL associates the Droid and the iPad to with person JKL333";
                break;
            }
            case "flower1":{
                tileMessage = "User checks AOL mail on Asus Chrome browser and iPad App.  AOL email address becomes person identifier STP333.  iPhone linked probabilistically by sharing same signals at similar times of use as iPad. ONE by AOL associates the Asus browser and both iPad web/app environments with person STP333.";
                break;
            }
            case "season1":{
                tileMessage = "The HP PC cookie is linked to a hashed email address for person QRS333.  The Firefox and Safari cookies are linked probabilistically via shared signals we see consistently. ONE by AOL associates the two HP browsers and the Mac Pro Safari as person QRS333";
                break;
            }
        }
        console.log(tileMessage);
        return tileMessage;
    }
    
    this._reset = function(){
       _iScore =0;
       _iCurHintIndex = 0;
       _iContTileDisappearing = 3;
       _iBonusTimeElaps = BONUS_TIME; 
       _iTilesOnBoard = _aTilesMc.length;
       
       _oFirstTileSelected=null;
       _oSecondTileSelected=null;
       _oThirdTileSelected=null;
       _oFirstHintShowing=null;
       _oSecondHintShowing=null;
       _oThirdHintShowing=null;
        
       $("#match_game_container").css("background-image", "url("+s_oSpriteLibrary.getSpritePath('game_bg')+")");

       this._storeSelectableTiles();
        _bUpdate = true;
    };
    
    this.refreshLanguage = function(){
        _oInterface.refreshLanguage();
        _oInterface.setScore(_iScore);
        _oInterface.setHintNum(_aHintCouples.length);
    };
    
    this._calculateScore = function(){
        var iValue = _oLayoutSettings.getDifficulty(); 
        var iBonus = Math.floor(_iBonusTimeElaps/100);

        if(iBonus>0){
            _oInterface.showBonusScore(iBonus);
        }

        _iScore += (iValue * iBonus);
        _oInterface.setScore(_iScore);

        _iBonusTimeElaps = BONUS_TIME;
    };
    
    this._gameOver = function(){
        _oInterface.gameOver(_iScore);
    };

    this._win = function(){
        _oInterface.win(_iScore);
    };
    //TODO update hint for triple selection
    this._storeSelectableTiles = function(){
        _aSelectableTiles = new Array();
			
        for(var i=0;i<_aTilesMc.length;i++){
            if(_aTilesMc[i].isSelectable()){
                _aSelectableTiles.push(_aTilesMc[i]);
            }
        }
        
        _aHintCouples = new Array();
        var iCont = 0;
        while(iCont<_aSelectableTiles.length){
            var oCurTile = _aSelectableTiles[iCont];

            for(var k=iCont+1;k<_aSelectableTiles.length;k++){
                if(oCurTile.getValue() === _aSelectableTiles[k].getValue()){
                    _aHintCouples.push({first:oCurTile,second:_aSelectableTiles[k]});
                }
            }
            iCont++;
        }
        if(_oInterface){
            _oInterface.setHintNum(_aHintCouples.length);
        }
    };
    
    this.removeHint = function(){
        if(_oFirstHintShowing === null || _oSecondHintShowing === null){
                return;
        }

        _oInterface.showBlock();
        
        this._checkForSimilarBlock(_oFirstHintShowing);
        _oFirstHintShowing.disable();
        this._checkForSimilarBlock(_oSecondHintShowing);
        _oSecondHintShowing.disable();

        _oFirstHintShowing = null;
        _oSecondHintShowing = null;

        _iCurHintIndex = 0;
    };
    
    this._checkForSimilarBlock = function(oTileRemoved){
        var aBlockList = oTileRemoved.getBlockList();
        for(var i=0;i<aBlockList.length;i++){
            var oTileBlocked = _aTilesMc[aBlockList[i].index];
            oTileBlocked.removeBlock(oTileRemoved.getIndex());
        }
    };
    
    this._checkTileMatching = function(){
        if(_oFirstTileSelected.getValue() === _oSecondTileSelected.getValue() && _oFirstTileSelected.getValue() === _oThirdTileSelected.getValue()){
                //MATCHING FOUND!!
            console.log(_oFirstTileSelected.getValue());
                var message = this.getTileMessage(_oFirstTileSelected.getValue());
                this._showMessage(message);

                _oInterface.showBlock();
                
                this._checkForSimilarBlock(_oFirstTileSelected);
                _oFirstTileSelected.remove();
                this._checkForSimilarBlock(_oSecondTileSelected);
                _oSecondTileSelected.remove();
                this._checkForSimilarBlock(_oThirdTileSelected);
                _oThirdTileSelected.remove();

                this._calculateScore();
        }else{
                _oFirstTileSelected.deselect();
                _oSecondTileSelected.deselect();
                _oThirdTileSelected.deselect();
        }

        _oFirstTileSelected = null;
        _oSecondTileSelected = null;
        _oThirdTileSelected = null;
    };

    this._showMessage = function(message){
        _oMsgBox.setTextButton(2,"OK");
        _oMsgBox.showMessageBox("", message, MSG_BOX_MODE_OK,
            null, ON_MSGBOX_NOT_EXIT_FROM_GAME, null);
        // $("#msg_box_text").html("Doodie");
        // $("#msg_box").toggle();
    }
    
    this.onTileRemoved = function(aUnlockList){
        //CHECK IF TILE REMOVED BLOCKED OTHER TILES

        if(aUnlockList){
            for(var i=0;i<aUnlockList.length;i++){
                var oInfo = aUnlockList[i];
                _aTilesMc[oInfo.index].decreaseBlockCounter(oInfo.decrease);
            }
        }

        _iTilesOnBoard--;
        _iContTileDisappearing--;
        
        if(_iContTileDisappearing === 0){
            this._storeSelectableTiles();

            _oInterface.hideBlock();

            if(_iTilesOnBoard === 0){
                this._win();
            }else if(_aHintCouples.length === 0){
                this._gameOver();
            }

            _iContTileDisappearing = 3;
        }
    };
    
    this.onRestartBoard = function(){
        var aLeftBlocks = _oLayoutSettings.getLeftBlocks();
        var aRightBlocks = _oLayoutSettings.getRightBlocks();
        var aUpBlocks = _oLayoutSettings.getUpBlocks();
        var aBlockingList = _oLayoutSettings.getBlockList();
        
        for(var i=0;i<_aTilesMc.length;i++){
            _aTilesMc[i].activate(aBlockingList[i],aLeftBlocks[i],aRightBlocks[i],aUpBlocks[i],"");
        }

        this._reset();
        
        _oInterface.hideBlock();
    };
    
    this.onHintReleased = function(){
        if(_aHintCouples.length === 0){
                return;
        }
        if(_oFirstHintShowing){
                _oFirstHintShowing.deselect();
        }

        if(_oSecondHintShowing){
                _oSecondHintShowing.deselect();
        }

        _oFirstHintShowing = _aHintCouples[_iCurHintIndex].first;
        _oSecondHintShowing = _aHintCouples[_iCurHintIndex].second;

        _oFirstHintShowing.showHint();
        _oSecondHintShowing.showHint();

        _iCurHintIndex++;
        if(_iCurHintIndex === _aHintCouples.length){
            _iCurHintIndex = 0;
        }
        
		_iBonusTimeElaps = 0;
		//DECREASE SCORE FOR HINT PENALTY
        _iScore -= HINT_PENALTY;
        if(_iScore<0){
                _iScore=0;
        }
        _oInterface.setScore(_iScore);
    };
    
    this.onShuffleBoard = function(){
        $("#match_game_container").css("display","none");
        
        do{
            var aTileValues = new Array("circle1", "circle1", "circle1",
                                        "circle2", "circle2", "circle2",
                                        // "circle3", "circle3", "circle3",
                                        // "circle4", "circle4", "circle4", "circle4",
                                        // "circle5", "circle5", "circle5", "circle5",
                                        // "circle6", "circle6", "circle6", "circle6",
                                        // "circle7", "circle7", "circle7", "circle7",
                                        // "circle8", "circle8", "circle8", "circle8",
                                        // "circle9", "circle9", "circle9", "circle9",
                                        "bamboo1", "bamboo1", "bamboo1",
                                        "bamboo2", "bamboo2", "bamboo2",
                                        // "bamboo3", "bamboo3", "bamboo3",
                                        // "bamboo4", "bamboo4", "bamboo4", "bamboo4",
                                        // "bamboo5", "bamboo5", "bamboo5", "bamboo5",
                                        // "bamboo6", "bamboo6", "bamboo6", "bamboo6",
                                        // "bamboo7", "bamboo7", "bamboo7", "bamboo7",
                                        // "bamboo8", "bamboo8", "bamboo8", "bamboo8",
                                        // "bamboo9", "bamboo9", "bamboo9", "bamboo9",
                                        "characters1", "characters1", "characters1",
                                        "characters2", "characters2", "characters2",
                                        // "characters3", "characters3", "characters3",
                                        // "characters4", "characters4", "characters4", "characters4",
                                        // "characters5", "characters5", "characters5", "characters5",
                                        // "characters6", "characters6", "characters6", "characters6",
                                        // "characters7", "characters7", "characters7", "characters7",
                                        // "characters8", "characters8", "characters8", "characters8",
                                        // "characters9", "characters9", "characters9", "characters9",
                                        "wind1", "wind1", "wind1",
                                        "wind2", "wind2", "wind2",
                                        // "wind3", "wind3", "wind3", "wind3",
                                        // "wind4", "wind4", "wind4", "wind4",
                                        "dragon1", "dragon1", "dragon1",
                                        "dragon2", "dragon2", "dragon2",
                                        // "dragon3", "dragon3", "dragon3",
                                        "flower1", "flower2", "flower3",
                                        "season1", "season2", "season3"
            );

            var aLeftBlocks= _oLayoutSettings.getLeftBlocks();
            var aRightBlocks= _oLayoutSettings.getRightBlocks();
            var aUpBlocks= _oLayoutSettings.getUpBlocks();
            var aBlockingList= _oLayoutSettings.getBlockList();

            for(var i=0;i<_aTilesMc.length;i++){
                var iRand = Math.floor(Math.random() * aTileValues.length );
                var szRandValue = aTileValues[iRand];

                _aTilesMc[i].activate(aBlockingList[i],aLeftBlocks[i],aRightBlocks[i],aUpBlocks[i],szRandValue);

                aTileValues.splice(iRand, 1);
            }

            this._reset();

        }while (_aHintCouples.length === 0);

        _oInterface.hideBlock();
        
        $("#match_game_container").css("display","block");
    };
    
    this.onTileSelected = function(iIndex){
        _oInterface.hideBlock();
        
        if(_oFirstHintShowing){
            _oFirstHintShowing.deselect();
            _oFirstHintShowing = null;
        }

        if(_oSecondHintShowing){
            _oSecondHintShowing.deselect();
            _oSecondHintShowing = null;
        }
        if(_oThirdHintShowing){
        	_oThirdHintShowing.deselect();
        	_oThirdHintShowing = null;
        }

        if(_oFirstTileSelected === null){
            _oFirstTileSelected = _aTilesMc[iIndex];
        }
        
        if (_aTilesMc[iIndex] != _oFirstTileSelected && _oFirstTileSelected && _oSecondTileSelected === null) {
            _oSecondTileSelected = _aTilesMc[iIndex];	
        }
        if (_aTilesMc[iIndex] != _oSecondTileSelected && _oSecondTileSelected && _oThirdTileSelected === null) {
        	_oThirdTileSelected = _aTilesMc[iIndex];
        }
        if (_aTilesMc[iIndex] != _oSecondTileSelected && _oSecondTileSelected && _oThirdTileSelected && _oFirstTileSelected) {
            this._checkTileMatching();	
        }

    };
    
    this.onTileDeselected = function(){
        _oFirstTileSelected = null;
    };
    
    this._update = function(){
        if(_bUpdate === false){
                return;
        }

        _iBonusTimeElaps -= FPS_TIME;
        
        if(_iBonusTimeElaps<0){
            _iBonusTimeElaps=0;
        }

        _oInterface.refreshTime(_iBonusTimeElaps);
    };

    s_oGame = this;

    this.init();

}

var s_oGame = null;