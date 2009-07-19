/**
 * @namespace
 * Base RPG components.
 */
var RPG = {}

/** @namespace */
RPG.Actions = {};

/** @namespace */
RPG.Beings = {};

/** @namespace */
RPG.Cells = {};

/** @namespace */
RPG.Dungeon = {};

/** @namespace */
RPG.Engine = {};

/** @namespace */
RPG.Factories = {};

/** @namespace */
RPG.Feats = {};

/** @namespace */
RPG.Features = {};

/** @namespace */
RPG.Items = {};

/** @namespace */
RPG.Memory = {};

/** @namespace */
RPG.Misc = {};

/** @namespace */
RPG.Races = {};

/** @namespace */
RPG.Rooms = {};

/** @namespace */
RPG.Rules = {};

/** @namespace */
RPG.UI = {};

/** @namespace */
RPG.Visual = {};


/** @constant */
RPG.CELL_OBSTACLE 		= 1 << 0; /* can not be moved onto, e.g. wall */
/** @constant */
RPG.CELL_SOLID	 		= 1 << 1; /* can not be seen through */

/** @constant */
RPG.ITEM_EDIBLE			= 1 << 0; /* can be eaten */

/** @constant */
RPG.FEATURE_OBSTACLE	= 1 << 0; /* can not be moved onto, e.g. closed door, tree */
/** @constant */
RPG.FEATURE_SOLID		= 1 << 1; /* can not be seen through, e.g. closed door */

/** @constant */
RPG.MODIFIER_PLUS		= 0;
/** @constant */
RPG.MODIFIER_TIMES		= 1;

/** @constant */
RPG.GENDER_MALE			= 0;
/** @constant */
RPG.GENDER_FEMALE		= 1;
/** @constant */
RPG.GENDER_NEUTER		= 2;

/** @constant */
RPG.UI_NORMAL			= 0;
/** @constant */
RPG.UI_LOCKED			= 1;
/** @constant */
RPG.UI_WAIT_DIRECTION	= 2;
/** @constant */
RPG.UI_WAIT_ITEMS		= 3;
/** @constant */
RPG.UI_WAIT_CHAT		= 4;
/** @constant */
RPG.UI_DONE_ITEMS		= 5;
/** @constant */
RPG.UI_DONE_CHAT		= 6;

/** @constant */
RPG.AI_OK				= 0;
/** @constant */
RPG.AI_RETRY			= 1;
/** @constant */
RPG.AI_IMPOSSIBLE		= 2;

/** @constant */
RPG.MAP_UNKNOWN			= 0;
/** @constant */
RPG.MAP_VISIBLE			= 1;
/** @constant */
RPG.MAP_REMEMBERED		= 2;

/**
 * Generates a normally distributed random number, mean = 0.
 * @param {float} stddev Standard deviation. ~95% of the absolute values will be lower than 2*stddev.
 */
Math.randomNormal = function(stddev) {
	do {
		var u = 2*Math.random()-1;
		var v = 2*Math.random()-1;
		var r = u*u + v*v;
	} while (r > 1 || r == 0);

    var gauss = u * Math.sqrt(-2*Math.log(r)/r);
    return gauss*stddev;
}

/**
 * Returns number between 1 and 100 inclusive
 */
Math.randomPercentage = function() {
	return 1 + Math.floor(Math.random() * 100);
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substring(1);
}

Array.prototype.random = function() {
	return this[Math.floor(Math.random() * this.length)];
}

RPG.init = function() {
	RPG.Factories.Gem = new RPG.Misc.Factory(RPG.Items, RPG.Items.Gem);
	RPG.World._scheduler = new RPG.Engine.Queue();
}

