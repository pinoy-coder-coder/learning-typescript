//using the "any and unknown" typescript 
let anyValue;
anyValue = true;
anyValue = 10;
anyValue = "hello world";
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;
//Can assign everyhting using typeof any
let value1 = anyValue;
let value2 = anyValue;
let value3 = anyValue;
let value4 = anyValue;
let value5 = anyValue;
let value6 = anyValue;
let value7 = anyValue;
let value8 = anyValue;
let valueUnknown;
valueUnknown = true;
valueUnknown = 10;
valueUnknown = "hello world";
valueUnknown = [];
valueUnknown = {};
valueUnknown = null;
valueUnknown = undefined;
//Can ristrict almot everything using typeof unknown
let value9 = valueUnknown;
let value10 = valueUnknown;
let value11 = valueUnknown;
let value12 = valueUnknown;
//Alternative by using typeof unknown
if (typeof valueUnknown == "string") {
    let value13 = valueUnknown;
}
let value14 = valueUnknown;
let value15 = valueUnknown;
let value16 = valueUnknown;
