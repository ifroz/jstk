/** @param {Object.<string, *>} css */
jasmine.Matcher.prototype.toHaveCss = function(css) {};

/** @return {void} */
jasmine.Matcher.prototype.toBeEmpty = function() {};

/** @return {void} */
jasmine.Matcher.prototype.toBeChecked = function() {};

/** @return {void} */
jasmine.Matcher.prototype.toBeHidden = function() {};

/** @return {void} */
jasmine.Matcher.prototype.toBeSelected = function() {};

/** @return {void} */
jasmine.Matcher.prototype.toBeVisible = function() {};

/** @return {void} */
jasmine.Matcher.prototype.toExist = function() {};

/**
 * @param {string} name
 * @param {*} value
 */
jasmine.Matcher.prototype.toHaveAttr = function(name, value) {};

/**
 * @param {string} name
 * @param {*} value
 */
jasmine.Matcher.prototype.toHaveProp = function(name, value) {};

/** @param {string} selector */
jasmine.Matcher.prototype.toHaveBeenTriggeredOn = function(selector) {};

/** @return {void} */
jasmine.Matcher.prototype.toHaveBeenTriggered = function() {};

/**
 * @param {string} selector
 * @param {*} params
 */
jasmine.Matcher.prototype.toHaveBeenTriggeredOnAndWith =
    function(selector, params) {};

/** @param {string} selector */
jasmine.Matcher.prototype.toHaveBeenPreventedOn = function(selector) {};

/** @return {void} */
jasmine.Matcher.prototype.toHaveBeenPrevented = function() {};

/** @param {string} name */
jasmine.Matcher.prototype.toHaveClass = function(name) {};

/**
 * @param {string} key
 * @param {string} value
 */
jasmine.Matcher.prototype.toHaveData = function(key, value) {};

/** @param {string} html */
jasmine.Matcher.prototype.toHaveHtml = function(html) {};

/** @param {string} text */
jasmine.Matcher.prototype.toContainHtml = function(text) {};

/** @param {string} id */
jasmine.Matcher.prototype.toHaveId = function(id) {};

/** @param {string} text */
jasmine.Matcher.prototype.toHaveText = function(text) {};

/** @param {string} value */
jasmine.Matcher.prototype.toHaveValue = function(value) {};

/** @param {number} value */
jasmine.Matcher.prototype.toHaveLength = function(value) {};

/** @return {void} */
jasmine.Matcher.prototype.toBeDisabled = function() {};

/** @return {void} */
jasmine.Matcher.prototype.toBeFocused = function() {};

/** @param {string} name */
jasmine.Matcher.prototype.toHandle = function(name) {};

/**
 * @param {string} name
 * @param {Function} callback
 */
jasmine.Matcher.prototype.toHandleWith = function(name, callback) {};
