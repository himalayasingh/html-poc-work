/// <reference path="jquery-1.7.1.js" />
/// <reference path="utils.js" />
/// <reference path="BrandInfo.js" />
/// <reference path="Mapper.js" />
/// <reference path="../rx.js" />

var CustomerInfo = {
    primaryDocInfo: {},
    Load: function (o) {
        var _fieldMapping = {
            NAME: "Name",
            FIRSTNAME: "FirstName",
            MIDDLENAME: "MiddleName",
            LASTNAME: "LastName",
            LINE1ADDRESS: "Line1Address",
            LINE2ADDRESS: "Address_line_2_vod__c",
            CITY: "City_vod__c",
            STATE: "State_vod__c",
            COUNTRY: "Country_vod__c",
            ZIP: "Zip_4_vod__c",
            HOMEPHONE: "Home_vod__c",
            OFFICEPHONE: "OfficePhone",
            EMAIL: "PersonEmail",
            PROFTYPE: "ProfessionalType",
            TITLE: "Title",
            CORPCUSTID: "CorpCustomerID",
            SLN: "SLN",
            SPECIALTY: "Specialty",
            DEANUM: null,
            FAXPHONE: "Fax",
            custom_fields: "CustomFields"
        };
        var _custInfoObj = {};
        for (var fieldMapping in _fieldMapping) {
            if (fieldMapping == 'custom_fields')
                continue;
            _custInfoObj[_fieldMapping[fieldMapping]] = "";
        }
        _custInfoObj = cnc.veeva.getDataForObject({ Account: _custInfoObj }).Account;
        cnc.veeva.iRepActive = !!_custInfoObj.Name;
        for (var fieldMapping in _fieldMapping) {
            this.primaryDocInfo[fieldMapping] = null;
            if (fieldMapping == 'custom_fields') {
                this.primaryDocInfo[fieldMapping] = {}
                var customFields = $.extend.apply($, [{}].concat(o.keyMessages.map(function (a) { var b = {}; b[a] = ""; return b })))
                this.primaryDocInfo["custom_fields"] = cnc.veeva.getDataForObject({ Account: customFields }).Account;
            } else {
                this.primaryDocInfo[fieldMapping] = _custInfoObj[_fieldMapping[fieldMapping]];
            }
        }

        this.loaded = true;
        o.loaded.call(this, this.primaryDocInfo);
    }
}



