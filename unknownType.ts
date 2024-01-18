//using the "any and unknown" typescript 
let anyValue: any;

anyValue = true;
anyValue = 10;
anyValue = "hello world";
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

//Can assign everyhting using typeof any
let value1: unknown = anyValue;
let value2: any = anyValue;
let value3: boolean = anyValue;
let value4: number = anyValue;
let value5: string = anyValue;
let value6: object = anyValue;
let value7: any[] = anyValue;
let value8: Function = anyValue;

let valueUnknown: unknown;

valueUnknown = true;
valueUnknown = 10;
valueUnknown = "hello world";
valueUnknown = [];
valueUnknown = {};
valueUnknown = null;
valueUnknown = undefined;

//Can ristrict almot everything using typeof unknown
let value9: unknown = valueUnknown;
let value10: any = valueUnknown;
let value11: boolean = valueUnknown;
let value12: number = valueUnknown;

//Alternative by using typeof unknown
if (typeof valueUnknown == "string") {
    let value13: string = valueUnknown;
}

let value14: object = valueUnknown;
let value15: any[] = valueUnknown;
let value16: Function = valueUnknown;