module.exports = ["$scope", "$http", function ($scope, $http) {
    var admin = this;
    admin.busy = true;
    admin.tabs = [{
        name: "translation"
    }, {
        name: "rates"
    }];

    admin.translation = [];
    admin.rates = [];
    admin.editContent = null;

    admin.activeTab = admin.tabs[0].name;

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
        $http.post('/localization', data).success(function(res){
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

    admin.setTab = function(tab){
        if(admin.isActiveTab(tab)) {
           return;
        }

        admin.activeTab = tab;
    };
    admin.isActiveTab = function(tab){
        return admin.activeTab === tab;
    };

    $http.get("/localization").success(function(res){
        admin.translation = res.data.map(function(item){
            var key = Object.keys(item)[0];
            return item[key];
        });
        admin.busy = false;
    });
}];