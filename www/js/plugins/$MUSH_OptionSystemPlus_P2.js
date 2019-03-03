//==============================================================================================================
//--------------------------------------------------------------------------------------------------------------
// *** MUSHROOMCAKE28'S Option System Plus P2 
//  * Author: MushroomCake28
//  * Contact: last.truong@hotmail.com
//  * Version: 1.02 (2018-01-09) 
//  * File Name: $MUSH_OptionSystemPlus_P2.js
//--------------------------------------------------------------------------------------------------------------
// * INFO : This script reorganized the option menu and adds more options to the Option System. Additional 
//   		options are: Screen Resolution, Fps lock, windowskin, window color and menu background. Reorganization
//          is done by separating options into sections.
// * TERMS : This script is part of the MushroomCake Public first generation scripts. It can be used by anyone
//           for free and commercials games without requesting my permission. You just need to credit me
//           (MushroomCake28), and please be generous if I request a copy of your game ;) 
// * USAGE : Save as a javascript file (.js at the end) if it's not already a js file and insert it anywhere
//           in the plugin manager. Use the file name at the top of the script.
//--------------------------------------------------------------------------------------------------------------
// INFORMATION ON FUNCTIONALITY
//--------------------------------------------------------------------------------------------------------------
// UPDATES HISTORY
// * v.1.01
// * v.1.02:
//   - Fixed a bug that happened when no windowskin was defined in the list parameter.
//   - Added Fullscreen option under the Graphic Section
//   - Added Fps Meter option under the Graphic Section
//--------------------------------------------------------------------------------------------------------------
// SECTIONS
// * Section 1: Parameters
// * Section 2: Managers
//   - 2.01 : ConfigManager
//   - 2.02 : SceneManager
// * Section 3: Scenes
//   - 3.01 : Scene MUSH Option
//   - 3.02 : Scene Title
//   - 3.03 : Scene Menu
//   - 3.04 : Scene MenuBase
//   - 3.05 : Scene Boot
// * Section 4: Windows
//   - 4.01 : Window Options Sections
//   - 4.02 : Window Options Main Command
//   - 4.03 : Window Options Main Back
//   - 4.04 : Window Options Help 
//   - 4.05 : Window Base (adding options function for color, opacity and skin)
// * Section 5: Sprites
//   - 5.01 : Sprite Enemy
//   - 5.02 : Sprite Actor
//   - 5.03 : Spriteset Battle
//==============================================================================================================
// *** PLUGIN PARAMETERS
/*:
* 
* @plugindesc [v.1.02] Creates a new Option System and Option Menu.
* @author MushroomCake28
* @help MUSHROOMCAKE28'S OPTION SYSTEM PLUS (v.1.02)
*
* Youtube Video: https://www.youtube.com/watch?v=1USfxLTTMkM&feature=youtu.be
* Website: https://mushroomcake28.weebly.com
*
* This Plugin creates a whole new Option System. All default options are present,
* and many more options are added. The option menu is separated in 4 categories:
* Cosmetics, Graphics, Audio, and Other.
*
* Please note this plugin creates a new Option Scene and system, which means that
* options added by other plugins will not work (shouldn't cause the game to freeze
* though). If there are any other options you want, I can add them. Just leave a 
* message on in the comments in the video on my youtube channel.
*
* Little warning to keep your project from crashing: The Screen Resolution 
* parameter is a sensitive one. You need to at least keep one array inside
* it, which in that case would be your only resolution. In case of doubts,
* keep de default [ [816, 624] ]. Please be cautious of the syntax for this
* parameter. Everything should be clear, if not just leave a comment on the
* the video.
*
* @param Sections
* @text Section Names
* @desc Set the names of the option sections
*
* @param SectionCosmeticsName
* @text Cosmetics Name
* @parent Sections
* @desc Set the in-game name for the Cosmetics Section
* @default Cosmetics
*
* @param SectionGraphicsName
* @text Graphics Name
* @parent Sections
* @desc Set the in-game name for the Graphics Section
* @default Graphics
*
* @param SectionAudioName
* @text Audio Name
* @parent Sections
* @desc Set the in-game name for the Audio Section
* @default Audio
*
* @param SectionOtherName
* @text Other Name
* @parent Sections
* @desc Set the in-game name for the Other Section
* @default Miscellaneous
*
//-------------------------------
*
* @param Cosmetics
* @text Cosmetics Section
* @desc Set parameters for the cosmetics section.
*
* @param WindowRed
* @text Window Red
* @parent Cosmetics
* @desc Set parameters of the windowskin red.
*
* @param WindowRedName
* @text name
* @parent WindowRed
* @desc Set the default window red option name in-game.
* @default Window Red
*
* @param WindowRedValue
* @text Default Value
* @parent WindowRed
* @type number
* @max 255
* @min 0
* @desc Set the default red value. Between 0 and 255.
* @default 0
*
* @param WindowRedBarColor1
* @text Bar Color 1
* @parent WindowRed
* @desc Format: rgba(r, g, b, a) where rgb are between 0 and 255 and alpha is between 1 and 0.
* @default rgba(200, 100, 0, 1)
*
* @param WindowRedBarColor2
* @text Bar Color 2
* @parent WindowRed
* @desc Format: rgba(r, g, b, a) where rgb are between 0 and 255 and alpha is between 1 and 0.
* @default rgba(255, 0, 0, 1)
*
* @param WindowGreen
* @text Window Green
* @parent Cosmetics
* @desc Set parameters of the windowskin green.
*
* @param WindowGreenName
* @text name
* @parent WindowGreen
* @desc Set the default window green option name in-game.
* @default Window Green
*
* @param WindowGreenValue
* @text Default Value
* @parent WindowGreen
* @type number
* @max 255
* @min 0
* @desc Set the default green value. Between 0 and 255.
* @default 0
*
* @param WindowGreenBarColor1
* @text Bar Color 1
* @parent WindowGreen
* @desc Format: rgba(r, g, b, a) where rgb are between 0 and 255 and alpha is between 1 and 0.
* @default rgba(0, 200, 100, 1)
*
* @param WindowGreenBarColor2
* @text Bar Color 2
* @parent WindowGreen
* @desc Format: rgba(r, g, b, a) where rgb are between 0 and 255 and alpha is between 1 and 0.
* @default rgba(0, 255, 0, 1)
*
* @param WindowBlue
* @text Window Blue
* @parent Cosmetics
* @desc Set parameters of the windowskin blue.
*
* @param WindowBlueName
* @text name
* @parent WindowBlue
* @desc Set the default window blue option name in-game.
* @default Window Blue
*
* @param WindowBlueValue
* @text Default Value
* @parent WindowBlue
* @type number
* @max 255
* @min 0
* @desc Set the default blue value. Between 0 and 255.
* @default 0
*
* @param WindowBlueBarColor1
* @text Bar Color 1
* @parent WindowBlue
* @desc Format: rgba(r, g, b, a) where rgb are between 0 and 255 and alpha is between 1 and 0.
* @default rgba(100, 0, 200, 1)
*
* @param WindowBlueBarColor2
* @text Bar Color 2
* @parent WindowBlue
* @desc Format: rgba(r, g, b, a) where rgb are between 0 and 255 and alpha is between 1 and 0.
* @default rgba(0, 0, 255, 1)
*
* @param WindowOpacity
* @text Window Opacity
* @parent Cosmetics
* @desc Set parameters of the window opacity.
*
* @param WindowOpacityName
* @text name
* @parent WindowOpacity
* @desc Set the default window opacity option name in-game.
* @default Window Opacity
*
* @param WindowOpacityValue
* @text Default Value
* @parent WindowOpacity
* @type number
* @max 255
* @min 0
* @desc Set the default window opacity value. Between 0 and 255.
* @default 255
*
* @param WindowOpacityBarColor1
* @text Bar Color 1
* @parent WindowOpacity
* @desc Format: rgba(r, g, b, a) where rgb are between 0 and 255 and alpha is between 1 and 0.
* @default rgba(128, 128, 128, 1)
*
* @param WindowOpacityBarColor2
* @text Bar Color 2
* @parent WindowOpacity
* @desc Format: rgba(r, g, b, a) where rgb are between 0 and 255 and alpha is between 1 and 0.
* @default rgba(200, 200, 200, 1)
*
* @param Windowskin
* @text Windowskin 
* @parent Cosmetics
* @desc Set parameters of the windowskin.
*
* @param WindowskinName
* @text name
* @parent Windowskin
* @desc Set the default windowskin option name in-game.
* @default Windowskin
*
* @param WindowskinList
* @text Windowskin List
* @parent Windowskin
* @type text[]
* @desc Set the all the windowskins. Put the images in the system folder. The first one will be the default.
*
* @param WindowskinDefaultName
* @text Default Name
* @parent Windowskin
* @desc Set the default windowskin name in-game. Setting options in the list will display the name written in the list instead.
* @default Window
* 
* @param MenuBack
* @text Menu Background
* @parent Cosmetics
* @desc Set the parameters for the Menu Background parameter.
* 
* @param MenuBackName
* @text name
* @parent MenuBack
* @desc Set the Menu Background Option name in-game.
* @default Menu Background
*
* @param MenuBackList
* @text Background List
* @parent MenuBack
* @type text[]
* @desc Set all the possible backgrounds. Writting 'default' will introduce the default Game Map background. (Title1 folder)
*
* @param MenuBackDefaultName
* @text Default Name
* @parent MenuBack
* @desc Name of the default Background in-game.
* @default Default
*
* @param MenuBackStretch
* @text Stretch
* @parent MenuBack
* @desc Set to true if you want the background to stretch to fit the Game Screen Resolution. False if not.
* @type boolean
* @default false
*
//-------------------------------
*
* @param Graphics
* @text Graphics Section
* @desc Set Parameters for the Graphics Section
*
* @param ScreenResolution
* @text Screen Resolution
* @parent Graphics
* @desc Set the parameters for the Screen Resolution parameter.
*
* @param ScreenResolutionName
* @text name
* @parent ScreenResolution
* @desc Set the name of the option in-game. 
* @default Screen Resolution
*
* @param ScreenResolutionList
* @text Resolutions List
* @parent ScreenResolution
* @desc format: [ [x1, y1], [x2, y2], etc ]. Set all possible resolutions. The first array will be the default. 
* @default [ [816, 624] ]
*
* @param ScreenResolutionScale
* @text Resolution Scaling
* @parent ScreenResolution
* @type boolean
* @desc When true, each resolutions will keep the x/y aspect ratios from the first resolution. 
* @default false
*
* @param ScreenResolutionReposition
* @text Reposition Sprites
* @parent ScreenResolution
* @type boolean
* @desc If true, will fix most of bad sprite positions due to different resolutions. False if keeping default resolution. 
* @default false
*
* @param VSync
* @text VSync
* @parent Graphics
* @desc Set the parameters for the Vsyng parameter. 
*
* @param VSyncName
* @text Vsync Name
* @parent VSync
* @desc Set the name of the VSync option in-game. 
* @default VSync
*
* @param VSyncDefault
* @text Vsync Default
* @parent VSync
* @type boolean
* @desc Set the default Vsync (when on, fps locks at 60) 
* @default true
*
* @param VSyncNameON
* @text ON name
* @parent VSync
* @desc Set the text when VSync is ON. 
* @default ON
*
* @param VSyncNameOFF
* @text OFF name
* @parent VSync
* @desc Set the text when VSync is OFF. 
* @default OFF
*
* @param Fullscreen
* @text Fullscreen
* @parent Graphics
* @desc Turn on and off fullscreen mode.
*
* @param FullscreenName
* @text Name
* @parent Fullscreen
* @desc Set the parameter's name in-game.
* @default Fullscreen Mode
*
* @param FullscreenOn
* @text ON name
* @parent Fullscreen
* @desc Set the in-game text when Fullscreen Mode is ON.
* @default ON
*
* @param FullscreenOff
* @text OFF name
* @parent Fullscreen
* @desc Set the in-game text when Fullscreen Mode is OFF.
* @default OFF
*
* @param FpsMeter
* @text FPS Meter
* @parent Graphics
* @desc Turn on and off the fps meter.
*
* @param FpsMeterName
* @text Name
* @parent FpsMeter
* @desc Set the parameter's name in-game.
* @default FPS Meter
*
* @param FpsMeterOn
* @text ON name
* @parent FpsMeter
* @desc Set the in-game text when the Fps Meter is ON.
* @default ON
*
* @param FpsMeterOff
* @text OFF name
* @parent FpsMeter
* @desc Set the in-game text when the Fps Meter is OFF.
* @default OFF
*
//-------------------------------
*
* @param Audio
* @text Audio Section
* @desc Set the parameters for the Audio Section.
*
* @param BGM
* @text BGM
* @parent Audio
* @desc Set the parameters for the BGM parameter.
* 
* @param BGMName
* @text name
* @parent BGM
* @desc Set the BGM Volume Option name in-game
* @default BGM Volume
* 
* @param BGMColor1
* @text BGM Bar Color 1
* @parent BGM
* @desc Format: rgba(red, green, blue, alpha). Set the first BGM bar color of the gradient.
* @default rgba(128, 128, 0, 1)
*
* @param BGMColor2
* @text BGM Bar Color 2
* @parent BGM
* @desc Format: rgba(red, green, blue, alpha). Set the second BGM bar color of the gradient.
* @default rgba(168, 168, 0, 1)
*
* @param BGS
* @text BGS
* @parent Audio
* @desc Set the parameters for the BGS parameter.
* 
* @param BGSName
* @text name
* @parent BGS
* @desc Set the BSM Volume Option name in-game
* @default BSM Volume
* 
* @param BGSColor1
* @text BGS Bar Color 1
* @parent BGS
* @desc Format: rgba(red, green, blue, alpha). Set the first BGS bar color of the gradient.
* @default rgba(128, 128, 0, 1)
*
* @param BGSColor2
* @text BGS Bar Color 2
* @parent BGS
* @desc Format: rgba(red, green, blue, alpha). Set the second BGS bar color of the gradient.
* @default rgba(168, 168, 0, 1)
*
* @param ME
* @text ME
* @parent Audio
* @desc Set the parameters for the ME parameter.
* 
* @param MEName
* @text name
* @parent ME
* @desc Set the ME Volume Option name in-game
* @default ME Volume
* 
* @param MEColor1
* @text ME Bar Color 1
* @parent ME
* @desc Format: rgba(red, green, blue, alpha). Set the first ME bar color of the gradient.
* @default rgba(128, 128, 0, 1)
*
* @param MEColor2
* @text ME Bar Color 2
* @parent ME
* @desc Format: rgba(red, green, blue, alpha). Set the second ME bar color of the gradient.
* @default rgba(168, 168, 0, 1)
*
* @param SE
* @text SE
* @parent Audio
* @desc Set the parameters for the SE parameter.
* 
* @param SEName
* @text name
* @parent SE
* @desc Set the SE Volume Option name in-game
* @default SE Volume
* 
* @param SEColor1
* @text SE Bar Color 1
* @parent SE
* @desc Format: rgba(red, green, blue, alpha). Set the first SE bar color of the gradient.
* @default rgba(128, 128, 0, 1)
*
* @param SEColor2
* @text SE Bar Color 2 
* @parent SE
* @desc Format: rgba(red, green, blue, alpha). Set the second SE bar color of the gradient.
* @default rgba(168, 168, 0, 1)
*
//-------------------------------
*
* @param Other
* @text Other Section
* @desc Set the parameters for the Other Section.
*
* @param AlwaysDash 
* @text Always Dash
* @parent Other
* @desc Set the Always Dash parameters.
*
* @param AlwaysDashName
* @text name
* @parent AlwaysDash
* @desc Set the name of the Always Dash option in-game.
* @default Always Dash
*
* @param AlwaysDashNameOn
* @text ON name
* @parent AlwaysDash
* @desc Set the in-game text when Always Dash is ON.
* @default ON
*
* @param AlwaysDashNameOff
* @text OFF name
* @parent AlwaysDash
* @desc Set the in-game text when Always Dash is OFF.
* @default OFF
*
* @param CommandRemember
* @text Command Remember
* @parent Other
* @desc Set the Command Remember parameters.
*
* @param CommandRememberName
* @text name
* @parent CommandRemember
* @desc Set the name of the Command Remember option in-game.
* @default Command Remember
*
* @param CommandRememberNameOn
* @text ON name
* @parent CommandRemember
* @desc Set the in-game text when CommandRemember is ON.
* @default ON
*
* @param CommandRememberNameOff
* @text OFF name
* @parent CommandRemember
* @desc Set the in-game text when CommandRemember is OFF.
* @default OFF
*
*/
//==============================================================================================================


//==============================================================================================================
// * SECTION 1.0 : Parameters 
//   - Setting parameters
//==============================================================================================================

var Imported = Imported || {};
Imported.mushFeatures = Imported.mushFeatures || {}; 
Imported.mushFeatures['OptionSystemPlus_P2'] = 1.02;

var $mushFeatures = $mushFeatures || { 'imported': {}, 'params': {} };
$mushFeatures.imported['OptionSystemPlus_P2'] = 1.02;

var nowParameters = PluginManager.parameters('$MUSH_OptionSystemPlus_P2');

$mushFeatures.params['OSP_Cosmetics']      = {};
$mushFeatures.params['OSP_Cosmetics'].name = String(nowParameters['SectionCosmeticsName']);
$mushFeatures.params['OSP_Cosmetics'].wRed = {
	'name':         String(nowParameters['WindowRedName']),
	'defaultValue': Number(nowParameters['WindowRedValue']),
	'description':  String(nowParameters['WindowRedDescription']),
	'barColor1':    String(nowParameters['WindowRedBarColor1']),
	'barColor2':    String(nowParameters['WindowRedBarColor2'])
}
$mushFeatures.params['OSP_Cosmetics'].wGreen = {
	'name':         String(nowParameters['WindowGreenName']),
	'defaultValue': Number(nowParameters['WindowGreenValue']),
	'description':  String(nowParameters['WindowGreenDescription']),
	'barColor1':    String(nowParameters['WindowGreenBarColor1']),
	'barColor2':    String(nowParameters['WindowGreenBarColor2'])
}
$mushFeatures.params['OSP_Cosmetics'].wBlue = {
	'name':         String(nowParameters['WindowBlueName']),
	'defaultValue': Number(nowParameters['WindowBlueValue']),
	'description':  String(nowParameters['WindowBlueDescription']),
	'barColor1':    String(nowParameters['WindowBlueBarColor1']),
	'barColor2':    String(nowParameters['WindowBlueBarColor2'])
}
$mushFeatures.params['OSP_Cosmetics'].wOpacity = {
	'name':         String(nowParameters['WindowOpacityName']),
	'defaultValue': Number(nowParameters['WindowOpacityValue']),
	'description':  String(nowParameters['WindowOpacityDescription']),
	'barColor1':    String(nowParameters['WindowOpacityBarColor1']),
	'barColor2':    String(nowParameters['WindowOpacityBarColor2'])
}
$mushFeatures.params['OSP_Cosmetics'].wSkin = {
	'name':        String(nowParameters['WindowskinName']),
	'list':        eval(nowParameters['WindowskinList']),
	'defaultName': String(nowParameters['WindowskinDefaultName']),
	'description': String(nowParameters['WindowskinDescription']),
}
$mushFeatures.params['OSP_Cosmetics'].menuBack = {
	'name':        String(nowParameters['MenuBackName']),
	'list':        eval(nowParameters['MenuBackList']),
	'defaultName': String(nowParameters['MenuBackDefaultName']),
	'description': String(nowParameters['MenuBackDescription']),
	'stretch':     eval(nowParameters['MenuBackStretch'])
}

$mushFeatures.params['OSP_Graphics']      = {};
$mushFeatures.params['OSP_Graphics'].name = String(nowParameters['SectionGraphicsName']);
$mushFeatures.params['OSP_Graphics'].screenResolution = {
	'name':       String(nowParameters['ScreenResolutionName']),
	'list':       eval(nowParameters['ScreenResolutionList']),
	'scale':      eval(nowParameters['ScreenResolutionScale']),
	'reposition': eval(nowParameters['ScreenResolutionReposition'])
}
$mushFeatures.params['OSP_Graphics'].vSync = {
	'name':         String(nowParameters['VSyncName']),
	'defaultValue': eval(nowParameters['VSyncDefault']),
	'onName':       String(nowParameters['VSyncNameON']),
	'offName':      String(nowParameters['VSyncNameOFF'])
}
$mushFeatures.params['OSP_Graphics'].fullscreen = {
	'name':         String(nowParameters['FullscreenName']),
	'onName':       String(nowParameters['FullscreenOn']),
	'offName':      String(nowParameters['FullscreenOff'])
}
$mushFeatures.params['OSP_Graphics'].fpsMeter = {
	'name':         String(nowParameters['FpsMeterName']),
	'onName':       String(nowParameters['FpsMeterOn']),
	'offName':      String(nowParameters['FpsMeterOff'])
}

$mushFeatures.params['OSP_Audio']      = {};
$mushFeatures.params['OSP_Audio'].name = String(nowParameters['SectionAudioName']);
$mushFeatures.params['OSP_Audio'].bgm = {
	'name':         String(nowParameters['BGMName']),
	'barColor1':    String(nowParameters['BGMColor1']),
	'barColor2':    String(nowParameters['BGMColor2'])
}
$mushFeatures.params['OSP_Audio'].bgs = {
	'name':         String(nowParameters['BGSName']),
	'barColor1':    String(nowParameters['BGSColor1']),
	'barColor2':    String(nowParameters['BGSColor2'])
}
$mushFeatures.params['OSP_Audio'].me = {
	'name':         String(nowParameters['MEName']),
	'barColor1':    String(nowParameters['MEColor1']),
	'barColor2':    String(nowParameters['MEColor2'])
}
$mushFeatures.params['OSP_Audio'].se = {
	'name':         String(nowParameters['SEName']),
	'barColor1':    String(nowParameters['SEColor1']),
	'barColor2':    String(nowParameters['SEColor2'])
}

$mushFeatures.params['OSP_Other']      = {};
$mushFeatures.params['OSP_Other'].name = String(nowParameters['SectionOtherName']);
$mushFeatures.params['OSP_Other'].alwaysDash = {
	'name':         String(nowParameters['AlwaysDashName']),
	'onName':       String(nowParameters['AlwaysDashNameOn']),
	'offName':      String(nowParameters['AlwaysDashNameOff'])
}
$mushFeatures.params['OSP_Other'].commandRemember = {
	'name':         String(nowParameters['CommandRememberName']),
	'onName':       String(nowParameters['CommandRememberNameOn']),
	'offName':      String(nowParameters['CommandRememberNameOff'])
}


//==============================================================================================================
// * SECTION 2.01 : ConfigManager 
//   - Setting options
//==============================================================================================================

ConfigManager.osp_windowRed     = $mushFeatures.params['OSP_Cosmetics'].wRed.defaultValue;
ConfigManager.osp_windowGreen   = $mushFeatures.params['OSP_Cosmetics'].wGreen.defaultValue;
ConfigManager.osp_windowBlue    = $mushFeatures.params['OSP_Cosmetics'].wBlue.defaultValue;
ConfigManager.osp_windowOpacity = $mushFeatures.params['OSP_Cosmetics'].wOpacity.defaultValue;
ConfigManager.osp_windowskin    = 0;
ConfigManager.osp_menuBack      = 0;

ConfigManager.osp_sceenResolution = 0;
ConfigManager.osp_vSync           = $mushFeatures.params['OSP_Graphics'].vSync.defaultValue;

var aliasMush_ConfigManagerMakeData34 = ConfigManager.makeData;
ConfigManager.makeData = function() {
    var config = aliasMush_ConfigManagerMakeData34.call(this);
    config.osp_windowRed       = this.osp_windowRed;
    config.osp_windowGreen     = this.osp_windowGreen;
    config.osp_windowBlue      = this.osp_windowBlue;
    config.osp_windowOpacity   = this.osp_windowOpacity;
    config.osp_windowskin      = this.osp_windowskin;
    config.osp_menuBack        = this.osp_menuBack;
    config.osp_sceenResolution = this.osp_sceenResolution;
    config.osp_vSync           = this.osp_vSync;
    return config;
};

var aliasMush_ConfigManagerApplyData23 = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    aliasMush_ConfigManagerApplyData23.call(this, config);
    this.osp_windowRed       = this.readFlagWindow(config, 'osp_windowRed');
    this.osp_windowGreen     = this.readFlagWindow(config, 'osp_windowGreen');
    this.osp_windowBlue      = this.readFlagWindow(config, 'osp_windowBlue');
    this.osp_windowOpacity   = this.readFlagWindow(config, 'osp_windowOpacity');
    this.osp_windowskin      = this.readFlagWindowskin(config);
    this.osp_menuBack        = this.readFlagMenuBackground(config);
    this.osp_sceenResolution = this.readFlagScreenResolution(config);
    this.osp_vSync           = this.readFlagVSync(config);
};

ConfigManager.readFlagWindow = function(config, name) {
	var value = config[name];
	if (value != undefined) {
		return Number(value).clamp(0, 255);
	} else {
		if (name == 'osp_windowRed')     return $mushFeatures.params['OSP_Cosmetics'].wRed.defaultValue;
		if (name == 'osp_windowGreen')   return $mushFeatures.params['OSP_Cosmetics'].wGreen.defaultValue;
		if (name == 'osp_windowBlue')    return $mushFeatures.params['OSP_Cosmetics'].wBlue.defaultValue;
		if (name == 'osp_windowOpacity') return $mushFeatures.params['OSP_Cosmetics'].wOpacity.defaultValue;
	}
};

ConfigManager.readFlagWindowskin = function(config) {
	var value = config.osp_windowskin;
	var lth = 0;
	if ($mushFeatures.params['OSP_Cosmetics'].wSkin.list != undefined) {
		lth = $mushFeatures.params['OSP_Cosmetics'].wSkin.list.length;
	} 
	if (value != undefined) {
		return Number(value).clamp(0, lth);
	} else {
		return 0;
	}
};

ConfigManager.readFlagMenuBackground = function(config) {
	var value = config.osp_menuBack;
	var lth = 0;
	if ($mushFeatures.params['OSP_Cosmetics'].menuBack.list != undefined) {
		lth = $mushFeatures.params['OSP_Cosmetics'].menuBack.list.length;
	}
	if (value != undefined) {
		return Number(value).clamp(0, lth);
	} else {
		return 0;
	}
};

ConfigManager.readFlagScreenResolution = function(config) {
	var value = config.osp_sceenResolution;
	var lth = 0;
	if ($mushFeatures.params['OSP_Graphics'].screenResolution.list != undefined) {
		lth = $mushFeatures.params['OSP_Graphics'].screenResolution.list.length;
	}
	if (value != undefined) {
		return Number(value).clamp(0, lth);
	} else {
		return 0;
	}
};	

ConfigManager.readFlagVSync = function(config) {
	var value = config.osp_sceenResolution;
	if (value) {
		return value;
	} else {
		return $mushFeatures.params['OSP_Graphics'].vSync.defaultValue;
	}
}; 


//==============================================================================================================
// * SECTION 2.02 : SceneManager
//   - Creating the methods for screen resolution option
//==============================================================================================================

SceneManager._screenWidth  = $mushFeatures.params['OSP_Graphics'].screenResolution.list[0][0] + 0;
SceneManager._screenHeight = $mushFeatures.params['OSP_Graphics'].screenResolution.list[0][1] + 0;
SceneManager._boxWidth     = $mushFeatures.params['OSP_Graphics'].screenResolution.list[0][0] + 0;
SceneManager._boxHeight    = $mushFeatures.params['OSP_Graphics'].screenResolution.list[0][1] + 0;

var aliasMush_SceneManagerRun48 = SceneManager.run;
SceneManager.run = function(sceneClass) {
    aliasMush_SceneManagerRun48.call(this, sceneClass);
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
	if ($mushFeatures.params['OSP_Graphics'].screenResolution.scale) {
		Graphics._width    = $mushFeatures.params['OSP_Graphics'].screenResolution.list[0][0] + 0;
		Graphics._height   = $mushFeatures.params['OSP_Graphics'].screenResolution.list[0][1] + 0;
		Graphics.boxWidth  = $mushFeatures.params['OSP_Graphics'].screenResolution.list[0][0] + 0;
		Graphics.boxHeight = $mushFeatures.params['OSP_Graphics'].screenResolution.list[0][1] + 0;
	} else {
		Graphics._width    = width;
		Graphics._height   = height;
		Graphics.boxWidth  = width;
		Graphics.boxHeight = height;
	}
	this.mush_updateResolution();
};

SceneManager.updateMainAt120Fps = SceneManager.updateMain; 
SceneManager.updateMain = function() {
    if (ConfigManager.osp_vSync) {
    	this.updateMainAt120Fps();
    } else {
    	this.updateMainNoVSync();
    }
};
 
SceneManager.updateMainNoVSync = function() {
    this.updateInputData();
    this.changeScene();
    this.updateScene();
    this.renderScene();
    this.requestUpdate();
};


//==============================================================================================================
// * SECTION 3.01 : Scene MushroomCake Options
//   - Creating an entire new Scene
//==============================================================================================================

function Scene_mushOptions_P2() {
    this.initialize.apply(this, arguments);
}

Scene_mushOptions_P2.prototype = Object.create(Scene_MenuBase.prototype);
Scene_mushOptions_P2.prototype.constructor = Scene_mushOptions_P2;

Scene_mushOptions_P2.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
    this._timer = 0;
};

Scene_mushOptions_P2.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createOptionsWindow();
};

Scene_mushOptions_P2.prototype.update = function() {
	Scene_MenuBase.prototype.update.call(this);
	this.updateSection();
	this.updateInputs();
	if (this._windowMainCommand.getSection() == 1) {
		if (this._timer < 15) {
			this._timer += 1;
		} else {
			this._timer = 0;
			this._windowMainCommand.refresh();
		}
	}
};

Scene_mushOptions_P2.prototype.terminate = function() {
    Scene_MenuBase.prototype.terminate.call(this);
    ConfigManager.save();
};

Scene_mushOptions_P2.prototype.createOptionsWindow = function() {
	var wsp_width = Math.floor(Graphics.width - Graphics.width * 0.1);
	var wsp_x     = Math.floor((Graphics.width - wsp_width) / 2);
	var wsp_y     = Math.floor((Graphics.height - 328) / 2);
	this._windowSections = new Window_mushOptionsSections_P2(wsp_x, wsp_y, wsp_width, 72);
	this.addChild(this._windowSections);
	//-----------------------
	var wmb_x     = wsp_x;
	var wmb_y     = wsp_y + this._windowSections.height;
	var wmb_width = wsp_width;
	this._windowMainBack = new Window_mushOptionsMainBack_P2(wmb_x, wmb_y, wmb_width, 256);
	this.addChild(this._windowMainBack);
	//-----------------------
	var wmc_x     = wmb_x + wmb_width / 2;
	var wmc_y     = wmb_y;
	var wmc_width = wmb_width / 2;
	this._windowMainCommand = new Window_mushOptionsMainCommand_P2(wmc_x, wmc_y, wmc_width, 256);
	this.addChild(this._windowMainCommand);
};

Scene_mushOptions_P2.prototype.repositionWindows = function() {
	var wsp_width = Math.floor(Graphics.width - Graphics.width * 0.1);
	var wsp_x     = Math.floor((Graphics.width - wsp_width) / 2);
	var wsp_y     = Math.floor((Graphics.height - 328) / 2);
	this._windowSections.x = wsp_x; this._windowSections.y = wsp_y; this._windowSections.width = wsp_width;
	this._windowSections.createContents();
	this._windowSections.refresh();
	this._windowSections.select(this._windowSections.index());
	//-----------------------
	var wmb_x     = wsp_x;
	var wmb_y     = wsp_y + this._windowSections.height;
	var wmb_width = wsp_width;
	this._windowMainBack.x = wmb_x; this._windowMainBack.y = wmb_y; this._windowMainBack.width = wmb_width;
	this._windowMainBack.createContents();
	this._windowMainBack.refresh();
	//-----------------------
	var wmc_x     = wmb_x + wmb_width / 2;
	var wmc_y     = wmb_y;
	var wmc_width = wmb_width / 2;
	this._windowMainCommand.x = wmc_x; this._windowMainCommand.y = wmc_y; this._windowMainCommand.width = wmc_width;
	this._windowMainCommand.createContents();
	this._windowMainCommand.refresh();
	this._windowMainCommand.select(this._windowMainCommand.index());
};

Scene_mushOptions_P2.prototype.updateSection = function() {
	this._windowMainCommand.changeSection(this._windowSections.index());
	this._windowMainBack.changeSection(this._windowSections.index());
};

Scene_mushOptions_P2.prototype.updateInputs = function() {
	if (Input.isTriggered('ok')) {
		SoundManager.playOk();
		if (this._windowSections.active == true) {
			this._windowSections.deactivate();
			this._windowMainCommand.activate();
			this._windowMainCommand.select(0);
		} else if (this._windowMainCommand.active == true) {
			this.updateInputOkMain();
		}
	} else if (Input.isTriggered('escape')) {
		SoundManager.playCancel();
		if (this._windowSections.active == true) {
			this.popScene();
		} else if (this._windowMainCommand.active == true) {
			this._windowSections.activate();
			this._windowMainCommand.deactivate();
			this._windowMainCommand.select(-1);
		}
	} else if (Input.isRepeated('left')) {
		if (this._windowMainCommand.active == true) {
			this.updateInputLeftRight('left');
		}
	} else if (Input.isRepeated('right')) {
		if (this._windowMainCommand.active == true) {
			this.updateInputLeftRight('right');
		}
	}
};

Scene_mushOptions_P2.prototype.updateInputLeftRight = function(arrow) {
	if (arrow == 'left')  var amount = -1;
	if (arrow == 'right') var amount = 1;
	if (this._windowMainCommand.getSection() == 0) {
		if (this._windowMainCommand.index() >= 0 && this._windowMainCommand.index() <= 2) {
			var symbol = ['osp_windowRed', 'osp_windowGreen', 'osp_windowBlue'];
			this._windowMainCommand.changeValueWindowColor(symbol[this._windowMainCommand.index()], amount * (-5) );
			this._windowMainCommand.refresh();
		} else if (this._windowMainCommand.index() == 3) {
			this._windowMainCommand.changeValueWindowOpacity( amount * (-5) );
			this._windowMainCommand.refresh();
			this._windowSections.opacity = this._windowMainCommand.getConfig('osp_windowOpacity');
			this._windowMainBack.opacity = this._windowMainCommand.getConfig('osp_windowOpacity');
		} else if (this._windowMainCommand.index() == 4) {
			this._windowMainCommand.changeListOption(amount, 'OSP_Cosmetics', 'osp_windowskin', 'wSkin');
			this._windowMainCommand.refresh();
			this._windowSections.loadWindowskin();
			this._windowMainBack.loadWindowskin();
		} else if (this._windowMainCommand.index() == 5) {
			this._windowMainCommand.changeListOption(amount, 'OSP_Cosmetics', 'osp_menuBack', 'menuBack');
			this._windowMainCommand.refresh();
			this.mush_refreshMenuBackground();
		}
	} else if (this._windowMainCommand.getSection() == 1) {
		if (this._windowMainCommand.index() == 0) {
			this._windowMainCommand.changeListOption(amount, 'OSP_Graphics', 'osp_sceenResolution', 'screenResolution');
			var list = $mushFeatures.params['OSP_Graphics'].screenResolution.list;
			if (list != undefined && list != null && list != '') {
				var value = ConfigManager['osp_sceenResolution'];
				SceneManager.mush_changeGraphicResolution(list[value][0], list[value][1]);
			}
			this.repositionWindows();
		} else if (this._windowMainCommand.index() == 1) {
			this._windowMainCommand.changeBoolOption('osp_vSync');
			this._windowMainCommand.refresh();
		}
	} else if (this._windowMainCommand.getSection() == 2) {
		if (this._windowMainCommand.index() >= 0 && this._windowMainCommand.index() <= 3) {
			var symbols = ['bgmVolume', 'bgsVolume', 'meVolume', 'seVolume'];
			this._windowMainCommand.changeVolumeOption( amount * (-5) , symbols[this._windowMainCommand.index()]);
			this._windowMainCommand.refresh();
		}
	} else if (this._windowMainCommand.getSection() == 3) {
		if (this._windowMainCommand.index() >= 0 && this._windowMainCommand.index() <= 1) {
			var symbols = ['alwaysDash', 'commandRemember'];
			this._windowMainCommand.changeBoolOption(symbols[this._windowMainCommand.index()]);
			this._windowMainCommand.refresh();
		}
	}
};

Scene_mushOptions_P2.prototype.updateInputOkMain = function() {
	if (this._windowMainCommand.getSection() == 0) {
		if (this._windowMainCommand.index() >= 0 && this._windowMainCommand.index() <= 2) {
			var symbol = ['osp_windowRed', 'osp_windowGreen', 'osp_windowBlue'];
			this._windowMainCommand.changeValueWindowColor(symbol[this._windowMainCommand.index()], 50 );
			this._windowMainCommand.refresh();
		} else if (this._windowMainCommand.index() == 3) {
			this._windowMainCommand.changeValueWindowOpacity( 50 );
			this._windowMainCommand.refresh();
			this._windowSections.opacity = this._windowMainCommand.getConfig('osp_windowOpacity');
			this._windowMainBack.opacity = this._windowMainCommand.getConfig('osp_windowOpacity');
		} else if (this._windowMainCommand.index() == 4) {
			this._windowMainCommand.changeListOption(1, 'OSP_Cosmetics', 'osp_windowskin', 'wSkin');
			this._windowMainCommand.refresh();
			this._windowSections.loadWindowskin();
			this._windowMainBack.loadWindowskin();
		} else if (this._windowMainCommand.index() == 5) {
			this._windowMainCommand.changeListOption(1, 'OSP_Cosmetics', 'osp_menuBack', 'menuBack');
			this._windowMainCommand.refresh();
			this.mush_refreshMenuBackground();
		}
	} else if (this._windowMainCommand.getSection() == 1) {
		if (this._windowMainCommand.index() == 0) {
			this._windowMainCommand.changeListOption(1, 'OSP_Graphics', 'osp_sceenResolution', 'screenResolution');
			var list = $mushFeatures.params['OSP_Graphics'].screenResolution.list;
			if (list != undefined && list != null && list != '') {
				var value = ConfigManager['osp_sceenResolution'];
				SceneManager.mush_changeGraphicResolution(list[value][0], list[value][1]);
			}
			this.repositionWindows();
		} else if (this._windowMainCommand.index() == 1) {
			this._windowMainCommand.changeBoolOption('osp_vSync');
			this._windowMainCommand.refresh();
		} else if (this._windowMainCommand.index() == 2) {
			Graphics._switchFullScreen();
			this._windowMainCommand.refresh();
		} else if (this._windowMainCommand.index() == 3) {
			if (!Graphics._fpsMeter.isPaused) {
				Graphics._switchFPSMeter();
			}
			Graphics._switchFPSMeter();
			this._windowMainCommand.refresh();
		}
	} else if (this._windowMainCommand.getSection() == 2) {
		if (this._windowMainCommand.index() >= 0 && this._windowMainCommand.index() <= 3) {
			var symbols = ['bgmVolume', 'bgsVolume', 'meVolume', 'seVolume'];
			this._windowMainCommand.changeVolumeOption( 20 , symbols[this._windowMainCommand.index()]);
			this._windowMainCommand.refresh();
		}
	} else if (this._windowMainCommand.getSection() == 3) {
		if (this._windowMainCommand.index() >= 0 && this._windowMainCommand.index() <= 1) {
			var symbols = ['alwaysDash', 'commandRemember'];
			this._windowMainCommand.changeBoolOption(symbols[this._windowMainCommand.index()]);
			this._windowMainCommand.refresh();
		}
	}
};


//==============================================================================================================
// * SECTION 3.02 : Scene Title
//==============================================================================================================

Scene_Title.prototype.commandOptions = function() {
    this._commandWindow.close();
    SceneManager.push(Scene_mushOptions_P2);
};

var aliasMush_SceneTitleCenterSprite47 = Scene_Title.prototype.centerSprite;
Scene_Title.prototype.centerSprite = function(sprite) {
	if ($mushFeatures.params['OSP_Graphics'].screenResolution.list[0] != [816, 624] && $mushFeatures.params['OSP_Graphics'].screenResolution.reposition == true) {
		var xCorrection = Graphics._boxWidth / sprite.width;
		var yCorrection = Graphics._boxHeight / sprite.height;
		sprite.scale.x = xCorrection;
		sprite.scale.y = yCorrection;
	} else {
		aliasMush_SceneTitleCenterSprite47.call(this, sprite);
	}
};


//==============================================================================================================
// * SECTION 3.03 : Scene Menu
//==============================================================================================================

Scene_Menu.prototype.commandOptions = function() {
    SceneManager.push(Scene_mushOptions_P2);
};

var aliasMush_SceneMenuPopScene24 = Scene_Menu.prototype.popScene;
Scene_Menu.prototype.popScene = function() {
    aliasMush_SceneMenuPopScene24.call(this);
    if ($mushFeatures.params['OSP_Graphics'].screenResolution.scale == false) {
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
// * SECTION 3.04 : Scene MenuBase
//==============================================================================================================

var aliasMush_SceneMenuBaseCreateBackground25 = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function() {
	var list = $mushFeatures.params['OSP_Cosmetics'].menuBack.list;
	if (list != undefined) {
		var value = ConfigManager['osp_menuBack'];
		var file = list[value];
		if (file == 'default' || file == 'Default') {
			aliasMush_SceneMenuBaseCreateBackground25.call(this);
            this.refreshStretch = true;
		} else {
			this._backgroundSprite = new Sprite();
	    	this._backgroundSprite.bitmap = ImageManager.loadTitle1(file, 0);
	    	this.addChild(this._backgroundSprite);
	    	this.refreshStretch = true;
		}
	} else {
		aliasMush_SceneMenuBaseCreateBackground25.call(this);
	}
};

Scene_MenuBase.prototype.mush_refreshMenuBackground = function() {
	var value = ConfigManager['osp_menuBack'];
	var list = $mushFeatures.params['OSP_Cosmetics'].menuBack.list;
	if (list != undefined) {
		var filename = list[value];
		if (filename == 'default' || filename == 'Default') {
			this._backgroundSprite.scale.x = 1.00;
			this._backgroundSprite.scale.y = 1.00;
			this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
	        this.refreshStretch = true;
		} else {
		   	this._backgroundSprite.bitmap = ImageManager.loadTitle1(filename, 0);
		   	this.refreshStretch = true;
		}
	}
};

Scene_MenuBase.prototype.mush_stretchMenuBackground = function() {
    if ($mushFeatures.params['OSP_Cosmetics'].menuBack.stretch == true) {
        var backWidth  = this._backgroundSprite.width;
        var backHeight = this._backgroundSprite.height;
        var scaleX = Graphics._boxWidth / backWidth;
        var scaleY = Graphics._boxHeight / backHeight;
        if (backWidth && backHeight) {
        	this._backgroundSprite.scale.x = scaleX;
        	this._backgroundSprite.scale.y = scaleY;
        	this.refreshStretch = false;
        }
    } else {
    	this.refreshStretch = false;
    }
};

var aliasMush_SceneMenuBaseUpdate75 = Scene_MenuBase.prototype.update;
Scene_MenuBase.prototype.update = function() {
    aliasMush_SceneMenuBaseUpdate75.call(this);
    if (this.refreshStretch) {
    	this.mush_stretchMenuBackground();
    }
};


//==============================================================================================================
// * SECTION 3.05 : Scene Boot
//   - Ajust starting resolution
//==============================================================================================================

var aliasMush_SceneBootStart19 = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    aliasMush_SceneBootStart19.call(this);
    var list  = $mushFeatures.params['OSP_Graphics'].screenResolution.list;
    var value = ConfigManager['osp_sceenResolution'];
    if (list != undefined && list != null && list != '') {
    	if (value < list.length) {
    		SceneManager.mush_changeGraphicResolution(list[value][0], list[value][1]);
    	}
    }
};


//==============================================================================================================
// * SECTION 4.01 : Windows MushroomCake Options Sections
//==============================================================================================================

function Window_mushOptionsSections_P2() {
    this.initialize.apply(this, arguments);
};

Window_mushOptionsSections_P2.prototype = Object.create(Window_Selectable.prototype);
Window_mushOptionsSections_P2.prototype.constructor = Window_mushOptionsSections_P2;

Window_mushOptionsSections_P2.prototype.initialize = function(x, y, width, height) {
	this.createSections();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.select(0);
    this.activate();
};

Window_mushOptionsSections_P2.prototype.maxItems = function() {
    return 4;
};

Window_mushOptionsSections_P2.prototype.maxCols = function() {
    return 4;
};

Window_mushOptionsSections_P2.prototype.createSections = function() {
	this._sections = [
	$mushFeatures.params['OSP_Cosmetics'].name,
	$mushFeatures.params['OSP_Graphics'].name,
	$mushFeatures.params['OSP_Audio'].name,
	$mushFeatures.params['OSP_Other'].name ]
};	

Window_mushOptionsSections_P2.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    this.drawText(this._sections[index], rect.x, rect.y, rect.width, 'center');
};


//==============================================================================================================
// * SECTION 4.02 : Windows MushroomCake Options Main Command
//==============================================================================================================

function Window_mushOptionsMainCommand_P2() {
    this.initialize.apply(this, arguments);
};

Window_mushOptionsMainCommand_P2.prototype = Object.create(Window_Selectable.prototype);
Window_mushOptionsMainCommand_P2.prototype.constructor = Window_mushOptionsMainCommand_P2;

Window_mushOptionsMainCommand_P2.prototype.initialize = function(x, y, width, height) {
	this.createSections();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.opacity = 0;
    this.refresh();
};

Window_mushOptionsMainCommand_P2.prototype.maxItems = function() {
    return this._sectionMaxItems[ this._section ];
};

Window_mushOptionsMainCommand_P2.prototype.maxCols = function() {
    return 1;
};

Window_mushOptionsMainCommand_P2.prototype.getSection = function() {
	return this._section;
};

Window_mushOptionsMainCommand_P2.prototype.changeSection = function(section) {
	if (this._section != section) {
		this._section = section;
		this.refresh();
		this.select(-1);
	}
};

Window_mushOptionsMainCommand_P2.prototype.createSections = function() {
	this._section = 0;
	this._sectionMaxItems = [6, 4, 4, 2];
	this._backSpace = 8;
	this.refreshSectionsContents();
};	

Window_mushOptionsMainCommand_P2.prototype.refreshSectionsContents = function() {
	this._cosmetics = [
		{'code': 1}, 
		{'code': 2},
		{'code': 3},
		{'code': 4},
		{'code': 5},
		{'code': 6} ];
	this._graphics = [
		{'code': 7},
		{'code': 8},
		{'code': 15},
		{'code': 16} ];
	this._audio = [
		{'code': 9},
		{'code': 10},
		{'code': 11},
		{'code': 12} ];
	this._other = [
		{'code': 13},
		{'code': 14} ];
};	

Window_mushOptionsMainCommand_P2.prototype.getConfig = function(symbol) {
	return ConfigManager[symbol];
};

Window_mushOptionsMainCommand_P2.prototype.getBarHeight = function() {
	return 12;
};

Window_mushOptionsMainCommand_P2.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    switch (this._section) {
    	case 0:  var s = this._cosmetics; break;
    	case 1:  var s = this._graphics;  break;
    	case 2:  var s = this._audio;     break;
    	case 3:  var s = this._other;     break;
    	default: var s = this._other;     break;
    }
    switch (s[index].code) {
    	case 1: // window red
    		var color1 = $mushFeatures.params['OSP_Cosmetics'].wRed.barColor1;
    		var color2 = $mushFeatures.params['OSP_Cosmetics'].wRed.barColor2;
    		this.drawWindowOptions(this.getConfig('osp_windowRed'), rect, color1, color2);
    		break;
    	case 2: // window green
    		var color1 = $mushFeatures.params['OSP_Cosmetics'].wGreen.barColor1;
    		var color2 = $mushFeatures.params['OSP_Cosmetics'].wGreen.barColor2;
    		this.drawWindowOptions(this.getConfig('osp_windowGreen'), rect, color1, color2);
    		break;
    	case 3: // window blue
    		var color1 = $mushFeatures.params['OSP_Cosmetics'].wBlue.barColor1;
    		var color2 = $mushFeatures.params['OSP_Cosmetics'].wBlue.barColor2;
    		this.drawWindowOptions(this.getConfig('osp_windowBlue'), rect, color1, color2);
    		break;
    	case 4: // window opacity
    		var color1 = $mushFeatures.params['OSP_Cosmetics'].wOpacity.barColor1;
    		var color2 = $mushFeatures.params['OSP_Cosmetics'].wOpacity.barColor2;
    		this.drawWindowOptions(this.getConfig('osp_windowOpacity'), rect, color1, color2);
    		break;
    	case 5: // windowskin
    		var nb = this.getConfig('osp_windowskin');
    		var arr = $mushFeatures.params['OSP_Cosmetics'].wSkin.list;
    		if (arr != undefined) {
    			var name = arr[nb];
    		} else {
    			var name = $mushFeatures.params['OSP_Cosmetics'].wSkin.defaultName;
    		}
    		this.drawText(name, rect.x, rect.y, rect.width - this._backSpace, 'right');
    		break;
    	case 6: // menu background
    		var nb = this.getConfig('osp_menuBack');
    		var arr = $mushFeatures.params['OSP_Cosmetics'].menuBack.list;
    		if (arr != undefined) {
    			var name = arr[nb];
    		} else {
    			var name = $mushFeatures.params['OSP_Cosmetics'].menuBack.defaultName;
    		}
    		this.drawText(name, rect.x, rect.y, rect.width - this._backSpace, 'right');
    		break;
    	case 7: // Screen Resolution
    		var nb = this.getConfig('osp_sceenResolution');
    		var arr = $mushFeatures.params['OSP_Graphics'].screenResolution.list;
    		var x = arr[nb][0]; var y = arr[nb][1];
    		var text = '' + x + ' : ' + y;
    		this.drawText(text, rect.x, rect.y, rect.width - this._backSpace, 'right');
    		break;
    	case 8: // VSync
    		var bool = this.getConfig('osp_vSync');
    		if (bool == true)  var text = $mushFeatures.params['OSP_Graphics'].vSync.onName;
    		if (bool == false) var text = $mushFeatures.params['OSP_Graphics'].vSync.offName;
    		this.drawText(text, rect.x, rect.y, rect.width - this._backSpace, 'right');
    		break;
    	case 9: // BGM Volume
    		var color1 = $mushFeatures.params['OSP_Audio'].bgm.barColor1;
    		var color2 = $mushFeatures.params['OSP_Audio'].bgm.barColor2;
    		this.drawAudioOptions(this.getConfig('bgmVolume'), rect, color1, color2);
    		break;
    	case 10: // BGS Volume
    		var color1 = $mushFeatures.params['OSP_Audio'].bgs.barColor1;
    		var color2 = $mushFeatures.params['OSP_Audio'].bgs.barColor2;
    		this.drawAudioOptions(this.getConfig('bgsVolume'), rect, color1, color2);
    		break;
    	case 11: // ME Volume
    		var color1 = $mushFeatures.params['OSP_Audio'].me.barColor1;
    		var color2 = $mushFeatures.params['OSP_Audio'].me.barColor2;
    		this.drawAudioOptions(this.getConfig('meVolume'), rect, color1, color2);
    		break;
    	case 12: // SE Volume
    		var color1 = $mushFeatures.params['OSP_Audio'].se.barColor1;
    		var color2 = $mushFeatures.params['OSP_Audio'].se.barColor2;
    		this.drawAudioOptions(this.getConfig('seVolume'), rect, color1, color2);
    		break;
    	case 13: // Always Dash
    		var bool = this.getConfig('alwaysDash');
    		if (bool == true)  var text = $mushFeatures.params['OSP_Other'].alwaysDash.onName;
    		if (bool == false) var text = $mushFeatures.params['OSP_Other'].alwaysDash.offName;
    		this.drawText(text, rect.x, rect.y, rect.width - this._backSpace, 'right');
    		break;
    	case 14: // Command Remember
    		var bool = this.getConfig('commandRemember');
    		if (bool == true)  var text = $mushFeatures.params['OSP_Other'].commandRemember.onName;
    		if (bool == false) var text = $mushFeatures.params['OSP_Other'].commandRemember.offName;
    		this.drawText(text, rect.x, rect.y, rect.width - this._backSpace, 'right');
    		break;
    	case 15: // Fullscreen
    		var curFull = Graphics._isFullScreen();
    		if (curFull == false) {
    			var text = $mushFeatures.params['OSP_Graphics'].fullscreen.onName;
    		} else {
    			var text = $mushFeatures.params['OSP_Graphics'].fullscreen.offName;
    		}
    		this.drawText(text, rect.x, rect.y, rect.width - this._backSpace, 'right');
    		break;
    	case 16: // Fps Meter
    		var curMeter = Graphics._fpsMeter.isPaused;
    		if (curMeter == false) {
    			var text = $mushFeatures.params['OSP_Graphics'].fpsMeter.onName;
    		} else {
    			var text = $mushFeatures.params['OSP_Graphics'].fpsMeter.offName;
    		}
    		this.drawText(text, rect.x, rect.y, rect.width - this._backSpace, 'right');
    		break;
    }
};

Window_mushOptionsMainCommand_P2.prototype.drawWindowOptions = function(value, rect, color1, color2) {
    var wd = Math.floor((value / 255) * rect.width); 
   	this.contents.fillRect(rect.x, rect.y + this.lineHeight() - this.getBarHeight() - 4, rect.width, this.getBarHeight(), this.gaugeBackColor());
   	this.contents.gradientFillRect(rect.x + (rect.width - wd), rect.y + this.lineHeight() - this.getBarHeight() - 4, wd, this.getBarHeight(), color1, color2, false);
   	this.drawText(value, rect.x, rect.y, rect.width - this._backSpace, 'right');
};

Window_mushOptionsMainCommand_P2.prototype.drawAudioOptions = function(value, rect, color1, color2) {
	var wd = Math.floor((value / 100) * rect.width); 
   	this.contents.fillRect(rect.x, rect.y + this.lineHeight() - this.getBarHeight() - 4, rect.width, this.getBarHeight(), this.gaugeBackColor());
   	this.contents.gradientFillRect(rect.x + (rect.width - wd), rect.y + this.lineHeight() - this.getBarHeight() - 4, wd, this.getBarHeight(), color1, color2, false);
   	this.drawText(value + '%', rect.x, rect.y, rect.width - this._backSpace, 'right');
};

// Changing options configuration section

Window_mushOptionsMainCommand_P2.prototype.changeValue = function(symbol, value) {
    var lastValue = this.mush_getGameSettingsMoe(symbol);
    if (lastValue !== value) {
        this.setConfigValue(symbol, value);
        SoundManager.playCursor();
    }
};

Window_mushOptionsMainCommand_P2.prototype.setConfigValue = function(symbol, volume) {
    ConfigManager[symbol] = volume;
};

Window_mushOptionsMainCommand_P2.prototype.changeValueWindowColor = function(symbol, numValue) {
	var value = this.mush_getGameSettingsMoe(symbol);
	if (value == 255 && numValue > 0) {
		value = 0;
	} else if (value == 0 && numValue < 0) {
		value = 255;
	} else {
		value += numValue;
	}
	newValue = Number(value).clamp(0, 255);
	this.changeValue(symbol, newValue);
	var t_red   = this.mush_getGameSettingsMoe('osp_windowRed');
	var t_green = this.mush_getGameSettingsMoe('osp_windowGreen');
	var t_blue  = this.mush_getGameSettingsMoe('osp_windowBlue');
	var tone = [t_red, t_green, t_blue];
	$gameSystem.setWindowTone(tone);
};

Window_mushOptionsMainCommand_P2.prototype.changeValueWindowOpacity = function(amount) {
	var value = this.getConfig('osp_windowOpacity');
	if (value == 255 && amount > 0) {
		value = 0;
	} else if (value == 0 && amount < 0) {
		value = 255;
	} else {
		value += amount;
	}
	newValue = Number(value).clamp(0, 255);
	this.changeValue('osp_windowOpacity', newValue);
};

Window_mushOptionsMainCommand_P2.prototype.changeListOption = function(amount, section, symbol, symbolParam) {
	var value = this.getConfig(symbol);
	var list  = $mushFeatures.params[section][symbolParam].list;
	if (list != undefined && list != null && list != '') {
		if (list.length > 1) {
			if (value == list.length - 1 && amount > 0) {
				value = 0;
			} else if (value == 0 && amount < 0 ) {
				value = list.length - 1;
			} else {
				value += amount;
			}
			var newValue = Number(value).clamp(0, list.length - 1);
			this.changeValue(symbol, newValue);
		} else {
			SoundManager.playBuzzer();
		}
	} else {
		SoundManager.playBuzzer();
	}
};

Window_mushOptionsMainCommand_P2.prototype.changeBoolOption = function(symbol) {
	var value = this.getConfig(symbol);
	if (value) {
		this.changeValue(symbol, false);
	} else {
		this.changeValue(symbol, true);
	}
};

Window_mushOptionsMainCommand_P2.prototype.changeVolumeOption = function(amount, symbol) {
	var value = this.getConfig(symbol);
	if (value == 100 && amount > 0) {
		value = 0;
	} else if (value == 0 && amount < 0) {
		value = 100;
	} else {
		value += amount;
	}
	newValue = Number(value).clamp(0, 100);
	this.changeValue(symbol, newValue);
};


//==============================================================================================================
// * SECTION 4.03 : Windows MushroomCake Options Main Back
//==============================================================================================================

function Window_mushOptionsMainBack_P2() {
    this.initialize.apply(this, arguments);
};

Window_mushOptionsMainBack_P2.prototype = Object.create(Window_Base.prototype);
Window_mushOptionsMainBack_P2.prototype.constructor = Window_mushOptionsMainBack_P2;

Window_mushOptionsMainBack_P2.prototype.initialize = function(x, y, width, height) {
	this._section = 0;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_mushOptionsMainBack_P2.prototype.refresh = function() {
    this.contents.clear();
    if (this._section == 0) {
    	this.drawCosmetics();
    } else if (this._section == 1) {
    	this.drawGraphics();
    } else if (this._section == 2) {
    	this.drawAudio();
    } else if (this._section == 3) {
    	this.drawOther();
    }
};

Window_mushOptionsMainBack_P2.prototype.drawCosmetics = function() {
	var cos = [
		$mushFeatures.params['OSP_Cosmetics'].wRed.name,
		$mushFeatures.params['OSP_Cosmetics'].wGreen.name,
		$mushFeatures.params['OSP_Cosmetics'].wBlue.name,
		$mushFeatures.params['OSP_Cosmetics'].wOpacity.name,
		$mushFeatures.params['OSP_Cosmetics'].wSkin.name,
		$mushFeatures.params['OSP_Cosmetics'].menuBack.name ];
	for (var i = 0 ; i < cos.length ; i++) {
		var rect = {'x': 6, 'y': 36 * i, 'width': this.width / 2 }
		this.drawText(cos[i], rect.x, rect.y, rect.width);
	}
};

Window_mushOptionsMainBack_P2.prototype.drawGraphics = function() {
	var cos = [
		$mushFeatures.params['OSP_Graphics'].screenResolution.name,
		$mushFeatures.params['OSP_Graphics'].vSync.name,
		$mushFeatures.params['OSP_Graphics'].fullscreen.name,
		$mushFeatures.params['OSP_Graphics'].fpsMeter.name ];
	for (var i = 0 ; i < cos.length ; i++) {
		var rect = {'x': 6, 'y': 36 * i, 'width': this.width / 2 }
		this.drawText(cos[i], rect.x, rect.y, rect.width);
	}
};

Window_mushOptionsMainBack_P2.prototype.drawAudio = function() {
	var cos = [
		$mushFeatures.params['OSP_Audio'].bgm.name,
		$mushFeatures.params['OSP_Audio'].bgs.name,
		$mushFeatures.params['OSP_Audio'].me.name,
		$mushFeatures.params['OSP_Audio'].se.name ];
	for (var i = 0 ; i < cos.length ; i++) {
		var rect = {'x': 6, 'y': 36 * i, 'width': this.width / 2 }
		this.drawText(cos[i], rect.x, rect.y, rect.width);
	}
};

Window_mushOptionsMainBack_P2.prototype.drawOther = function() {
	var cos = [
		$mushFeatures.params['OSP_Other'].alwaysDash.name,
		$mushFeatures.params['OSP_Other'].commandRemember.name ];
	for (var i = 0 ; i < cos.length ; i++) {
		var rect = {'x': 6, 'y': 36 * i, 'width': this.width / 2 }
		this.drawText(cos[i], rect.x, rect.y, rect.width);
	}
};

Window_mushOptionsMainBack_P2.prototype.changeSection = function(section) {
	if (this._section != section) {
		this._section = section;
		this.refresh();
	}
};


//==============================================================================================================
// * SECTION 4.04 : Windows MushroomCake Options Help
//==============================================================================================================

function Window_mushOptionsHelp_P2() {
    this.initialize.apply(this, arguments);
};

Window_mushOptionsHelp_P2.prototype = Object.create(Window_Base.prototype);
Window_mushOptionsHelp_P2.prototype.constructor = Window_mushOptionsHelp_P2;

Window_mushOptionsHelp_P2.prototype.initialize = function(x, y, width, height) {
	this._action      = 0;
	this._index       = 0;
	this._section     = '';
	this._symbolParam = ''; 
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_mushOptionsHelp_P2.prototype.refresh = function() {
    this.contents.clear();
    if (this._section == 0) {
    	this.drawCosmetics();
    } else if (this._section == 1) {
    	this.drawGraphics();
    } else if (this._section == 2) {
    	this.drawAudio();
    } else if (this._section == 3) {
    	this.drawOther();
    }
};


//==============================================================================================================
// * SECTION 4.05 : Window Base
//   - Adding properties for options (colors, opacity and skin)
//==============================================================================================================

var aliasMush_WindowBaseInitialize47 = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height) {
    aliasMush_WindowBaseInitialize47.apply(this, arguments);
    var t_red   = ConfigManager['osp_windowRed'];
	var t_green = ConfigManager['osp_windowGreen'];
	var t_blue  = ConfigManager['osp_windowBlue'];
	var tone = [t_red, t_green, t_blue];
	$gameSystem.setWindowTone(tone);
	this.opacity = ConfigManager['osp_windowOpacity'];
};

Window_Base.prototype.mush_getGameSettingsMoe = function(symbol) {
    return ConfigManager[symbol];
};

var aliasMush_WindowBaseLoadWindowskin86 = Window_Base.prototype.loadWindowskin;
Window_Base.prototype.loadWindowskin = function() {
	var files = $mushFeatures.params['OSP_Cosmetics'].wSkin.list;
	if (files != undefined) {
		if (files.length > 0) {
			var maxValue = files.length;
			var value = this.mush_getGameSettingsMoe('osp_windowskin');
			if (Number.isInteger(value) == false) { value = 0 ; ConfigManager['osp_windowskin'] = 0 };
			if (value > maxValue - 1) { value = 0 ; ConfigManager['osp_windowskin'] = 0 };
			this.windowskin = ImageManager.loadSystem(files[value]);
		} else {
			aliasMush_WindowBaseLoadWindowskin86.call(this);
		}
	} else {
		aliasMush_WindowBaseLoadWindowskin86.call(this);
	}
};


//==============================================================================================================
// * SECTION 5.01 : Sprite Enemy
//==============================================================================================================

var aliasMush_SpriteEnemySetBattler53 = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    aliasMush_SpriteEnemySetBattler53.call(this, battler);
    if ($mushFeatures.params['OSP_Graphics'].screenResolution.reposition == true) {
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
// * SECTION 5.02 : Sprite Actor
//==============================================================================================================

var aliasMush_SpriteActorSetActorHome23 = Sprite_Actor.prototype.setActorHome;
Sprite_Actor.prototype.setActorHome = function(index) {
    aliasMush_SpriteActorSetActorHome23.call(this, index);
    if ($mushFeatures.params['OSP_Graphics'].screenResolution.reposition == true) {
        this._homeX += Graphics.boxWidth - 816;
        this._homeY += Graphics.boxHeight - 624;
    } 
};


//==============================================================================================================
// * SECTION 5.03 : Spriteset Battle
//==============================================================================================================

var aliasMush_SpritesetBattleCreateBattlefield96 = Spriteset_Battle.prototype.createBattleField;
Spriteset_Battle.prototype.createBattleField = function() {
    if ($mushFeatures.params['OSP_Graphics'].screenResolution.reposition == true) {
        var width = Graphics.width;
        var height = Graphics.height;
        this._battleField = new Sprite();
        this._battleField.setFrame(0, 0, width, height);
        this._battleField.x = 0;
        this._battleField.y = 0;
        this._baseSprite.addChild(this._battleField);
    } else {
        aliasMush_SpritesetBattleCreateBattlefield96.call(this);
    }
};

var aliasMush_SpritesetBattleCreateBattleback13 = Spriteset_Battle.prototype.createBattleback;
Spriteset_Battle.prototype.createBattleback = function() {
    if ($mushFeatures.params['OSP_Graphics'].screenResolution.reposition == true) {
        var width = Graphics.width
        var height = Graphics.height
        this._back1Sprite = new Sprite();
        this._back2Sprite = new Sprite();
        this._back1Sprite.bitmap = this.battleback1Bitmap();
        this._back2Sprite.bitmap = this.battleback2Bitmap();
        this._battleField.addChild(this._back1Sprite);
        this._battleField.addChild(this._back2Sprite);
    } else {
        aliasMush_SpritesetBattleCreateBattleback13.call(this);
    }
};

var aliasMush_SpritesetBattleLocateBattleback25 = Spriteset_Battle.prototype.locateBattleback;
Spriteset_Battle.prototype.locateBattleback = function() {
    var width = this._battleField.width;
    var height = this._battleField.height;
    var sprite1 = this._back1Sprite;
    var sprite2 = this._back2Sprite;
    if ($mushFeatures.params['OSP_Graphics'].screenResolution.reposition == true) {
    	var xCorrection1 = Graphics.width / sprite1.width;
    	var yCorrection1 = Graphics.height / sprite1.height;
    	var xCorrection2 = Graphics.width / sprite2.width;
    	var yCorrection2 = Graphics.height / sprite2.height;
    	sprite1.scale.x = xCorrection1;
    	sprite1.scale.y = yCorrection1;
    	sprite2.scale.x = xCorrection2;
    	sprite2.scale.y = yCorrection2;
    }  else {
    	aliasMush_SpritesetBattleLocateBattleback25.call(this);
    }
};