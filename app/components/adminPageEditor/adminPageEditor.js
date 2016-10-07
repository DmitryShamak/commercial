(function(){

    angular.module("app").directive("adminPageEditor", ["$http", "$timeout", function($http, $timeout){
        return {
            restrict: "A",
            template: require("./adminPageEditor.html"),
            controller: function(){
                var PageSection = function PageSection(){
                    this.details = {}; //title, description

                    this.items = [];
                };
                var PageSectionItem = function PageSectionItem(){
                    this.content = {
                        items: []
                    };
                };
                var PageSectionItemText = function PageSectionItem(){
                    this.value = "";
                };

                this.data = [];
                this.itemTypes = [{
                    label: "Header",
                    value: "header"
                }, {
                    label: "Subtitle",
                    value: "subtitle"
                }, {
                    label: "List",
                    value: "list"
                }, {
                    label: "Slider",
                    value: "slider"
                }];
                this.contentTypes = [{
                    label: "Text",
                    value: "text"
                }, {
                    label: "List",
                    value: "list"
                }, {
                    label: "Table",
                    value: "table"
                }];

                this.toId = function toId(input){
                    return input.toLowerCase().trim().replace(/\./g, "").replace(/\s/g, "_")
                };
                this.appendPageSection = function appendPageSection(){
                    this.data.push(new PageSection());
                };
                this.appendPageSectionItem = function appendPageSectionItem(section){
                    section.items.push(new PageSectionItem());
                };
                this.appendPageSectionItemText = function appendPageSectionItemText(content){
                    content.items.push(new PageSectionItemText());
                };
                this.handleSubmit = function handleSubmit(){
                    this.busy = true;
                    localStorage.setItem("adminPageEditor", angular.toJson(this.data));

                    $timeout(function(){this.busy = false;}.bind(this), 3000);
                };
                this.init = function init(){
                    //get home.json
                    this.data = JSON.parse(localStorage.getItem("adminPageEditor"));
                };

                this.init();
            },
            controllerAs: "editor"
        };
    }]);

})();