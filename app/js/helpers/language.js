function Language(lang) {
    var self = this;
    var defaultLanguage = navigator.language || navigator.userLanguage || "en";
    var language = lang;

    self.default = defaultLanguage;
    self.active = language;
}

module.exports = Language;