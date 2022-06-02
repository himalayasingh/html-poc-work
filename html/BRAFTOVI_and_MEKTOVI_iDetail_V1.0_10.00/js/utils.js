/// <reference path="../trunk/ENBREL_00.00/scripts/jquery-1.7.2.min.js" />
var cnc = cnc || {};

var trace = function (text) {
    console.log(text);
}

cnc.veeva = {
    queue: [],
    iRepActive: true,
    getDataForObject: function (object, objid) {
        var dataStore = cnc.data.VeevaDataStore.available() ? cnc.data.VeevaDataStore : cnc.data.LocalDataStore;
        for (var objectName in object) {
            for (var fieldName in object[objectName]) {
                object[objectName][fieldName] = dataStore.getValue(objectName, fieldName, objid && objid[objectName]);
            }
        }
        return object;
    }
}

function csvJSON(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }

    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
}

cnc.data = {
    VeevaDataStore: {
        available: function () {
            if (!this._initialized) {
                this.getValue("Account","Name")
                this._available = this.getValue("Account", "FirstName") != null;
                this._initialized = true;
            }
            if(this._available){
                return this.getValue("Account", "Name")
            }
            else{
                return this._available;   
            }  
        },
        getValue: function (objectName, fieldName, objId) {
            if (!window.veevaCall) {
                function callVeeva() {
                    var uniqueId = 0;
                    var global = window;
                    var destroy = (function () {
                        var trash = document.createElement('div');
                        return function (element) {
                            trash.appendChild(element);
                            trash.innerHTML = '';
                        };
                    })();

                    return function (url) {
                        var head = document.body;
                        var tag = document.createElement('iframe'),
				handler = 'veevajscallback' + uniqueId++,
                url = url.replace('iRepCallback(result)', handler + '(result)');
                        var data2 = null;
                        global[handler] = function (data) {
                            data2 = data;
                        };
                        tag.style.position = "absolute";
                        tag.style.width = "1px";
                        tag.style.height = "1px";
                        tag.src = url;
                        head.insertBefore(tag, head.firstChild);
                        destroy(tag);
                        delete global[handler];
                        return data2;
                    }
                }
                window.veevaCall = callVeeva();
            }

            var url = "veeva:getDataForObjectV2(" + objectName + ")";
            if (objId)
                url += ",objId(" + objId + ")";
            url += ",fieldName(" + fieldName + "),iRepCallback(result)";
            var response = veevaCall(url);
            response = response ? response.success ? response[objectName][fieldName] : null : null;
            if ((response || "").toLowerCase() == (objectName + "." + fieldName).toLowerCase())
                response = "";
            return response;
        }
    },
    LocalDataStore: {
        getValue: function (objectName, fieldName, objId) {
            if (!this._tables) {
                var fileNames = { Account_Key_Message__c: "account_key_msg", Account_Key_Message_Fact__c: "account_key_msg_facts", Account: "account_vod", Product_vod__c: "product_catalog" };
                var tables = {};
                var parser = new dsv(",");
                for (var objName in fileNames) {
                    $.ajax({ async: false, dataType: 'text', url: 'scripts/cnc/csv/' + fileNames[objName] + ".csv",
                        success: $.proxy(function (result) {
                            var json = parser.parse(result);
                            tables[objName] = json;
                        }, this),
                        error: function () {
                            //alert("Error in dump tables");
                        }
                    });
                }
                this._tables = tables;
            }
            var tables = this._tables;
            var value = null;
            if (tables && tables[objectName]) {
                var obj = null;
                if (objId) {
                    obj = tables[objectName].filter(function (o) { return o.ID == objId })[0];
                } else {
                    obj = tables[objectName][0];
                }
                fieldName = fieldName.toUpperCase();
                value = obj && obj[fieldName] || null;
            }
            return value;
        }
    }
}


Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
(function () {
    function sortArray(array, args, asc) {
    
        var dup = array.slice();

        if (!args.length) return dup.sort();
        return dup.sort(function (a, b) {
            var props = args.slice();
            var prop = props.shift();
            while (a[prop] == b[prop] && props.length) prop = props.shift();
            return a[prop] == b[prop] ? 0 : (a[prop] > b[prop] ? 1 : -1) * (asc ? 1 : -1);
        });
    }
    function defineFunctions(obj, functions, callback){
        for(var fxn in functions){
            Object.defineProperty(obj, fxn, {
                enumerable: false,
                writable: true,
                value: functions[fxn]
            });
        }
    }
    defineFunctions(Array.prototype, 
        {
            flatten: function() {
                var args = Array.prototype.slice.call(arguments);
                var arr=[];
                function Flatten(array){
                    for(var nIndex=0; nIndex<array.length;nIndex++){
                        if($.isArray(array[nIndex])){
                            Flatten(array[nIndex]);
                        } else {
                            arr.push(array[nIndex]);
                        }
                    }
                }
                Flatten(this);
                return arr;
            },
            sortAsc:function() {
                var args = Array.prototype.slice.call(arguments);
                return sortArray(this, args, true);
            },
            sortDesc : function () {
                var args = Array.prototype.slice.call(arguments);
                return sortArray(this, args, false);
            },
            aggregate : function (seed, accumulator, result) {
                $.each(this, function (a, b) { seed = accumulator.call(b, seed, a, b) || seed; });
                return (result && result(seed, array)) || seed;
            },
            groupBy:function(prop) {
                var grp = {};
                for(var i = 0; i<this.length; i++){
                    if(!grp[this[i][prop]])
                        grp[this[i][prop]]=[];
                    grp[this[i][prop]].push(this[i]);
                }
                return grp;
            }
        });
})();

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

