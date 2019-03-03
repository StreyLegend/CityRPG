//==============================================================================================================
//--------------------------------------------------------------------------------------------------------------
// *** MUSHROOMCAKE28'S  MENU OPTION SCREEN RESOLUTION
//  * Author: MushroomCake28
//  * Contact: last.truong@hotmail.com
//  * Version: 1.03 (2017-04-25) 
//  * File Name: $MUSH_MenuOptionScreenResolution_P1.js
//--------------------------------------------------------------------------------------------------------------
// * INFO :  This script adds a new option in the the option menu: the screen resolution setting. The player 
//           will be able to ajust the screen resolution in-game to different resolution chosen by the game 
//           developper. You can choose to scale the image with the resolution or not. 
// * TERMS : This script is part of the MushroomCake Public first generation scripts. It can be used by anyone
//           for free and commercials games without requesting my permission. You just need to credit me
//           (MushroomCake28), and please be generous if I request a copy of your game ;) 
// * USAGE : Save as a javascript file (.js at the end) if it's not already a js file and insert it anywhere
//           in the plugin manager. Use the file name at the top of the script. 
//--------------------------------------------------------------------------------------------------------------
// INFORMATION ON FUNCTIONALITY
// * This script will be referred as 'MOSR' in the code for 'Menu Option Screen Resolution'.
// * Allowing the image scaling will keep the proportion of windows and srpites in game with the screen
//   resolution.
//--------------------------------------------------------------------------------------------------------------
// UPDATES HISTORY
// * v.1.01: finished ****
// * v.1.02: (2017-11-30)
//   - Added independance from Menu Option Expansion
// * v.1.03: (2018-05-15)
//   - Fixed the screen resolution change during fullscreen
//--------------------------------------------------------------------------------------------------------------
// SECTIONS
// * Section 1: Managers
//   - 1.0 : SceneManager (setting default screen Resolution)
//   - 1.1 : ConfigManager (creating new feature)
// * Section 2: Windows modifications
//   - 2.0 : Window Options (adding new features)  
// * Section 3: Scenes
//   - 3.0 : Scene Title
//   - 3.1 : Scene Boot
//   - 3.2 : Scene Menu (ajust camera position if changed screen Resolution)
// * Section 4: Sprites
//   - 4.0 : Sprite Enemy
//   - 4.1 : Sprite Actor
//   - 4.2 : Spriteset Battle
//==============================================================================================================
// *** PLUGIN PARAMETERS
/*:
* 
* @plugindesc [v.1.03] Adds the screen resolution option.
* @author MushroomCake28
* @help MushroomCake28's Screen Resolution Option plugin
*
* The Game's default Screen Resolution will be the first resolution defined in 
* the Resolution Options command.
*
* The Scale Graphics options keeps the game's default resolution proportions. This
* means that a higher screen resolution will only mean an upscaled image.
*
* From v.1.03 and forward, scaling has been fixed while in fullscreen and chaing
* the resolution.
*
* For more information, check out my youtube channel and my website:
* - youtube: https://www.youtube.com/watch?v=Vyf10-LFtjQ
* - website: https://mushroomcake28.weebly.com/
*
* @param Resolution Command Name
* @desc Set the command name that will appear the Menu Option
* @default Screen Resolution
*
* @param Resolution Options
* @desc Set all the available resolutions.
* Syntax: [ [x, y], [x, y], etc. ]
* @default [ [816, 624], [1280, 720], [1920, 1080] ]
*
* @param Scale Graphics
* @desc Set to true if you want to keep the default resolution proportions. 
* @default true
*
* @param Reposition Sprites
* @desc Set to true if you want to keep to reposition sprites on different screen resolutions.
* @default false
*
*/
//==============================================================================================================

var Imported = Imported || {};
Imported.mushFeatures = Imported.mushFeatures || {}; 
Imported.mushFeatures['MenuOptionScreenResolution_P1'] = 1.03;

var $mushFeatures = $mushFeatures || { 'imported': {}, 'params': {} };
$mushFeatures.imported['MenuOptionScreenResolution_P1'] = 1.03;

var nowParameters = PluginManager.parameters('$MUSH_MenuOptionScreenResolution_P1');
$mushFeatures.params['MOSR_ResolutionCommand']      = String(nowParameters['Resolution Command Name']);
$mushFeatures.params['MOSR_ResolutionOptions']      = eval(nowParameters['Resolution Options']);
$mushFeatures.params['MOSR_ScaleGraphics']          = eval(nowParameters['Scale Graphics']);
$mushFeatures.params['MOSR_RepositionSprites']      = eval(nowParameters['Reposition Sprites']);

//==============================================================================================================
// * SECTION 1.0 : Scene Manager
//   - Set default screen Resolution
//==============================================================================================================

SceneManager._screenWidth  = $mushFeatures.params['MOSR_ResolutionOptions'][0][0] + 0;
SceneManager._screenHeight = $mushFeatures.params['MOSR_ResolutionOptions'][0][1] + 0;
SceneManager._boxWidth     = $mushFeatures.params['MOSR_ResolutionOptions'][0][0] + 0;
SceneManager._boxHeight    = $mushFeatures.params['MOSR_ResolutionOptions'][0][1] + 0;

var aliasMush_SceneManagerRun = SceneManager.run;
SceneManager.run = function(sceneClass) {
    aliasMush_SceneManagerRun.call(this, sceneClass);
    if (!Utils.isNwjs()) return;
    SceneManager.mush_updateResolution();
};

SceneManager.mush_updateResolution = function() {
    var resizeWidth = this._screenWidth - window.innerWidth;
    var resizeHeight = this._screenHeight - window.innerHeight;
    window.resizeBy(resizeWidth, resizeHeight);
    window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
};

SceneManager.mush_changeGraphicResolution = function(width, height) {
	this._screenWidth  = width;
	this._screenHeight = height;
	this._boxWidth     = width;
	this._boxHeight    = height;
	if ($mushFeatures.params['MOSR_ScaleGraphics']) {
		Graphics._width    = $mushFeatures.params['MOSR_ResolutionOptions'][0][0] + 0;
		Graphics._height   = $mushFeatures.params['MOSR_ResolutionOptions'][0][1] + 0;
		Graphics.boxWidth  = $mushFeatures.params['MOSR_ResolutionOptions'][0][0] + 0;
		Graphics.boxHeight = $mushFeatures.params['MOSR_ResolutionOptions'][0][1] + 0;
	} else {
		Graphics._width    = width;
		Graphics._height   = height;
		Graphics.boxWidth  = width;
		Graphics.boxHeight = height;
	}
	this.mush_updateResolution();
};

//==============================================================================================================
// * SECTION 1.1 : Config Manager
//   - Adding the resolution option
//==============================================================================================================

ConfigManager.mosr_screenResolution = 0;

var aliasMush_ConfigManagerMakeData2 = ConfigManager.makeData;
ConfigManager.makeData = function() {
    var config = aliasMush_ConfigManagerMakeData2.call(this);
    config.mosr_screenResolution = this.mosr_screenResolution;
    return config;
};

var aliasMush_ConfigManagerApplyData2 = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    aliasMush_ConfigManagerApplyData2.call(this, config);
    this.mosr_screenResolution = this.readConfigScreenResolution(config, 'mosr_screenResolution');
    this.mush_checkOptionMaxScreen('mosr_screenResolution');
};

ConfigManager.readConfigScreenResolution = function(config, name) {
    var value = config[name];
    if (value !== undefined) {
        return value;
    } else {
        return 0;
    }
};

ConfigManager.mush_checkOptionMaxScreen = function(symbol) {
    if (symbol == 'mosr_screenResolution') {
        if (this.mosr_screenResolution > $mushFeatures.params['MOSR_ResolutionOptions'].length - 1) this.mosr_screenResolution = 0;
    } 
};

//==============================================================================================================
// * SECTION 2.0 : Window Options
//   - Adding the resolution option
//==============================================================================================================

var aliasMush_WindowOptionsMakeCommandList2 = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
	this.addMosrOptions();
    aliasMush_WindowOptionsMakeCommandList2.call(this);
};

Window_Options.prototype.addMosrOptions = function() {
	var name = $mushFeatures.params['MOSR_ResolutionCommand'];
    this.addCommand(name, 'mosr_screenResolution');
};

Window_Options.prototype.changeValueMosr = function(symbol, operation) {
	if (symbol == 'mosr_screenResolution') {
		var filenames = $mushFeatures.params['MOSR_ResolutionOptions'];
		var value = this.getConfigValue(symbol);
		if (Number.isInteger(value) == false) {value = 0};
		if (value > filenames.length - 1) {value = 0};
		if (operation == 'add') {
			if (value < filenames.length - 1) {
				value += 1;
			} else {
				value = 0;
			}
		} else if (operation == 'sub') {
			if (value > 0) {
				value -= 1;
			} else {
				value = filenames.length - 1;
			}
		}
		this.changeValue(symbol, value);
        if (!Graphics._isFullScreen()) {
            Graphics._cancelFullScreen();
            this._hasToSwitchToFullScreen = true;
            this._htstf_timer = 4;
        } else {
            SceneManager.mush_changeGraphicResolution(filenames[value][0], filenames[value][1]);
            if (!$mushFeatures.params['MOSR_ScaleGraphics']) {
                SceneManager.goto(Scene_Options);
            }
        }
		this.refresh();
	}
};

var aliasMush_WindowOptionsUpdate138 = Window_Options.prototype.update;
Window_Options.prototype.update = function() {
    aliasMush_WindowOptionsUpdate138.call(this);
    if (this._hasToSwitchToFullScreen) {
        if (this._htstf_timer > 0) {
            if (this._htstf_timer == 2) {
                var symbol = 'mosr_screenResolution';
                var filenames = $mushFeatures.params['MOSR_ResolutionOptions'];
                var value = this.getConfigValue(symbol);
                SceneManager.mush_changeGraphicResolution(filenames[value][0], filenames[value][1]);
            }
            this._htstf_timer -= 1;
        } else {
            Graphics._switchFullScreen();
            this._hasToSwitchToFullScreen = false;
            if (!$mushFeatures.params['MOSR_ScaleGraphics']) {
                SceneManager.goto(Scene_Options);
            }
        }
    }
};

var aliasMush_WindowOptionsProcessOk76 = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol == 'mosr_screenResolution') {
        this.changeValueMosr(symbol, 'add');
    } else {
        aliasMush_WindowOptionsProcessOk76.call(this);
    }
};

var aliasMush_WindowOptionsCursorRight45 = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol == 'mosr_screenResolution') {
        this.changeValueMosr(symbol, 'add');
    } else {
        aliasMush_WindowOptionsCursorRight45.call(this,  wrap);
    }
};

var aliasMush_WindowOptionsCursorLeft23 = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol == 'mosr_screenResolution') {
        this.changeValueMosr(symbol, 'sub');
    } else {
        aliasMush_WindowOptionsCursorLeft23.call(this, wrap);
    }
};

var aliasMush_WindowOptionsStatusText238 = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol == 'mosr_screenResolution') {
        var filename = this.getScreenResolutionText(symbol, value);
        return filename;
    } else {
        var text = aliasMush_WindowOptionsStatusText238.call(this, index);
        return text;
    }
};

Window_Options.prototype.getScreenResolutionText = function(symbol, value) {
	var data = $mushFeatures.params['MOSR_ResolutionOptions'][value];
	var text = data[0] + 'x' + data[1];
	return text;
}; 

//==============================================================================================================
// * SECTION 3.0 : Scene Title
//   - Ajust stuffs
//==============================================================================================================

var aliasMush_SceneTitleCenterSprite = Scene_Title.prototype.centerSprite;
Scene_Title.prototype.centerSprite = function(sprite) {
	if ($mushFeatures.params['MOSR_ResolutionOptions'][0] != [816, 624] && $mushFeatures.params['MOSR_RepositionSprites']) {
		var xCorrection = Graphics._boxWidth / sprite.width;
		var yCorrection = Graphics._boxHeight / sprite.height;
		sprite.scale.x = xCorrection;
		sprite.scale.y = yCorrection;
	} else {
		aliasMush_SceneTitleCenterSprite.call(this, sprite);
	}
};

//==============================================================================================================
// * SECTION 3.1 : Scene Boot
//   - Ajust starting resolution
//==============================================================================================================

var aliasMush_SceneBootStart = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    aliasMush_SceneBootStart.call(this);
    var filenames = $mushFeatures.params['MOSR_ResolutionOptions'];
    var value = ConfigManager['mosr_screenResolution'];
    SceneManager.mush_changeGraphicResolution(filenames[value][0], filenames[value][1]);
};

//==============================================================================================================
// * SECTION 3.2 : Scene Menu
//   - Ajust camera position if changed screen resolution
//==============================================================================================================

var aliasMush_SceneMenuPopScene = Scene_Menu.prototype.popScene;
Scene_Menu.prototype.popScene = function() {
    aliasMush_SceneMenuPopScene.call(this);
    if ($mushFeatures.params['MOSR_ScaleGraphics'] == false) {
        var diff_x = Math.abs($gameMap.displayX() - $gamePlayer.x);
        var diff_y = Math.abs($gameMap.displayY() - $gamePlayer.y);
        var screenMaxDistance_x = Math.floor(Graphics._boxWidth / 48);
        var screenMaxDistance_y = Math.floor(Graphics._boxHeight / 48);
        if (diff_x > screenMaxDistance_x || diff_y > screenMaxDistance_y) {
            var tileCenter_x = Math.floor(Graphics._boxWidth / 48 / 2);
            var tileCenter_y = Math.floor(Graphics._boxHeight / 48 / 2);
            $gameMap._displayX = $gamePlayer.x - tileCenter_x;
            $gameMap._displayY = $gamePlayer.y - tileCenter_y;
        }
    }
};

//==============================================================================================================
// * SECTION 4.0 : Sprite Enemy
//   - Ajust stuffs
//==============================================================================================================

var aliasMush_SpriteEnemySetBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    aliasMush_SpriteEnemySetBattler.call(this, battler);
    if ($mushFeatures.params['MOSR_RepositionSprites']) {
    	if (!this._enemy._alteredScreenY) {
	    	this._homeY += Graphics.boxHeight - 624;
	    	this._enemy._screenY = this._homeY;
	    	this._enemy._alteredScreenY = true;
	    }
	    if ($gameSystem.isSideView()) return;
	    if (!this._enemy._alteredScreenX) {
	    	this._homeX += (Graphics.boxWidth - 816) / 2;
	    	this._enemy._screenX = this._homeX;
	    	this._enemy._alteredScreenX = true;
	    }
    }
};

//==============================================================================================================
// * SECTION 4.1 : Sprite Actor
//   - Ajust stuffs
//==============================================================================================================

var aliasMush_SpriteActorSetActorHome = Sprite_Actor.prototype.setActorHome;
Sprite_Actor.prototype.setActorHome = function(index) {
    aliasMush_SpriteActorSetActorHome.call(this, index);
    if ($mushFeatures.params['MOSR_RepositionSprites']) {
        this._homeX += Graphics.boxWidth - 816;
        this._homeY += Graphics.boxHeight - 624;
    } 
};

//==============================================================================================================
// * SECTION 4.2 : Spriteset Battle
//   - Ajust stuffs (background)
//==============================================================================================================

var aliasMush_SpritesetBattleCreateBattlefield = Spriteset_Battle.prototype.createBattleField;
Spriteset_Battle.prototype.createBattleField = function() {
    if ($mushFeatures.params['MOSR_RepositionSprites']) {
        var width = Graphics.width;
        var height = Graphics.height;
        this._battleField = new Sprite();
        this._battleField.setFrame(0, 0, width, height);
        this._battleField.x = 0;
        this._battleField.y = 0;
        this._baseSprite.addChild(this._battleField);
    } else {
        aliasMush_SpritesetBattleCreateBattlefield.call(this);
    }
};

var aliasMush_SpritesetBattleCreateBattleback = Spriteset_Battle.prototype.createBattleback;
Spriteset_Battle.prototype.createBattleback = function() {
    if ($mushFeatures.params['MOSR_RepositionSprites']) {
        var width = Graphics.width
        var height = Graphics.height
        this._back1Sprite = new Sprite();
        this._back2Sprite = new Sprite();
        this._back1Sprite.bitmap = this.battleback1Bitmap();
        this._back2Sprite.bitmap = this.battleback2Bitmap();
        this._battleField.addChild(this._back1Sprite);
        this._battleField.addChild(this._back2Sprite);
    } else {
        aliasMush_SpritesetBattleCreateBattleback.call(this);
    }
};

var aliasMush_SpritesetBattleLocateBattleback = Spriteset_Battle.prototype.locateBattleback;
Spriteset_Battle.prototype.locateBattleback = function() {
    var width = this._battleField.width;
    var height = this._battleField.height;
    var sprite1 = this._back1Sprite;
    var sprite2 = this._back2Sprite;
    if ($mushFeatures.params['MOSR_RepositionSprites']) {
    	var xCorrection1 = Graphics.width / sprite1.width;
    	var yCorrection1 = Graphics.height / sprite1.height;
    	var xCorrection2 = Graphics.width / sprite2.width;
    	var yCorrection2 = Graphics.height / sprite2.height;
    	sprite1.scale.x = xCorrection1;
    	sprite1.scale.y = yCorrection1;
    	sprite2.scale.x = xCorrection2;
    	sprite2.scale.y = yCorrection2;
    }  else {
    	aliasMush_SpritesetBattleLocateBattleback.call(this);
    }
};