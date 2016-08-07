function Language(lang) {
    var self = this;
    var defaultLanguage = "en";
    var language = lang;

    self.default = defaultLanguage;
    self.active = language;
}

module.exports = Language;