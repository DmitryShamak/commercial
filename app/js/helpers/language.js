function Language(lang) {
    var self = this;
    var defaultLanguage = navigator.language || navigator.userLanguage || "en";
    var language = lang;

    self.default = defaultLanguage.substring(0, 2);
    self.active = language;
}

module.exports = Language;