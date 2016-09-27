module.exports = ["$scope", "$http", function ($scope, $http) {
    var admin = this;
    admin.busy = true;
    admin.tabs = [{
        name: "translation"
    }, {
        name: "page"
    }];

    admin.translation = [];
    admin.rates = [];
    admin.editContent = null;

    admin.activeTab = null;

    admin.translate = function(obj, lang){
        if(obj[lang]) {
            return obj[lang];
        }

        var key = Object.keys(obj)[0];
        return obj[key] || "[EMPTY]";
    };

    admin.editTabItem = function(item){
        admin.editContent = item;
    };
    admin.saveChanges = function(){
        var data = JSON.parse(angular.toJson(admin.translation)).map(function(item){
            var langItem = {};
            var key = item.en.toLowerCase().trim().replace(/\./g, "").replace(/\s/g, "_");
            langItem[key] = item;

            return langItem;
        });
        $http.post('/json', {
            data: data,
            fileName: "localization"
        }).success(function(res){
            console.log(res);
        });
    };
    admin.addNew = function(){
        var item = {};
        $scope.languages.forEach(function(lang){
            item[lang.id] = null;
        });
        admin.translation.push(item);
        admin.editTabItem(admin.translation.slice(-1)[0]);
    };

    admin.normalize = function(path, parent, source, index){
        var lastDepth = true;
        parent = parent || {items: []};
        var item = parent.items[index];
        if(!item) {
            index = parent.items.push({
                path: path,
                title: "",
                items: []
            }) - 1;
            item = parent.items[index];
        }

        if(source.title) {
            item.title = source.title
        }
        if(source.text) {
            item.items.push(source.text);
        }

        for(var key in source) {
            if(typeof source[key] === "object") {
                path.push(key);
                index = parent.items.push(item) - 1;
                lastDepth = false;
                return admin.normalize(path, parent, source[key], index || 0);
            }
        }

        if(lastDepth) {
            return parent;
        }
    };

    admin.setTab = function(tab){
        if(admin.isActiveTab(tab)) {
           return;
        }

        switch(tab) {
            case "translation":
                admin.busy = true;
                $http.get("/app/json/localization.json").success(function(res){
                    admin.translation = res.data.map(function(item){
                        var key = Object.keys(item)[0];
                        return item[key];
                    });
                    admin.busy = false;
                });
                break;
            case "page":
                admin.busy = true;
                $http.get("/app/json/home.json").success(function(res){
                    admin.page = res.data.map(function(item){
                        var data = admin.normalize([], null, item);

                        return data;
                    });
                    admin.busy = false;
                });
                break;
        }

        admin.activeTab = tab;
    };
    admin.isActiveTab = function(tab){
        return admin.activeTab === tab;
    };

    admin.setTab("translation");
}];