
/**
 * Parse event constants
 */
exports.PARSE = {

    // Node types
    ROOT: 'parse:root',
    IMPORT: 'parse:import',
    RULE: 'parse:rule',
    RULESET: 'parse:ruleset',
    VARIABLE: 'parse:variable',
    SELECTOR: 'parse:selector',
    SELECTORS: 'parse:selectors',
    COMMENT: 'parse:comment',
    MIXIN: 'parse:mixin',
    MIXIN_DEFINITION: 'parse:mixinDefintion',
    MIXIN_CALL: 'parse:mixinCall',
    MEDIA: 'parse:media',

    // Fired when a node type is not matched during the parse
    NOT_RECOGNISED: 'parse:notRecognised'
}
