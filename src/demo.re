[@genType]
type objectConversion = {
  hello: string,
  [@genType.as "Name"]
  name: string,
};

[@genType.import "./faultyJs.js"] [@bs.module "./demo.gen.js"]
external objectConversion: unit => objectConversion = "";

Js.log2("Hello:", objectConversion().hello);
Js.log2("Name:", objectConversion().name);
Js.log("");
Js.log("");
Js.log("");
Js.log("========================================");

[@genType]
type stateConstant = [ | [@genType.as "Less than five"] `Less | `Yuge];

[@genType]
type objectWithVariantConversion = {
  hello: string,
  someStateConstant: stateConstant,
};

[@genType.import "./faultyJs.js"] [@bs.module "./demo.gen.js"]
external objectWithVariantConversion: unit => objectWithVariantConversion = "";

let constant = objectWithVariantConversion().someStateConstant;
Js.log3(
  "Number is:",
  switch (constant) {
  | `Yuge => "Yuuuuuuuuuuge"
  | `Less => "Small"
  },
  constant,
);
Js.log("");
Js.log("");
Js.log("");
Js.log("========================================");

[@genType.import "./faultyJs.js"] [@bs.module "./demo.gen.js"]
external arrayWithVariants: unit => array(stateConstant) = "";

Js.log2("Numbers are:", arrayWithVariants());
Js.log("");
Js.log("");
Js.log("");
Js.log("========================================");

[@genType.import "./faultyJs.js"] [@bs.module "./demo.gen.js"]
external logForMe: stateConstant => unit = "";

Js.log("Big log");
logForMe(`Yuge);
Js.log("Small log");
logForMe(`Less);
Js.log("");
Js.log("");
Js.log("");
Js.log("========================================");

[@genType]
type top = {nested1}
and nested1 = {nested2}
and nested2 = {hello: string};

[@genType.import "./faultyJs.js"] [@bs.module "./demo.gen.js"]
external nestedObjectConversion: unit => top = "";

Js.log2("Converted string:", nestedObjectConversion().nested1.nested2.hello);

[@genType]
let recordToObject = () => {
  {
    nested1: {
      nested2: {
        hello: "Wow this is amazing",
      },
    },
  };
};

[@genType]
let whatAboutNamedArguments = (str, ~hello, ~world, str2) =>
  [@genType.as "gimmeMore"]
  (
    (~moreOptions, ~evenMoreOptions) => {
      Js.log(str);
      Js.log(hello);
      Js.log(world);
      Js.log(str2);
      Js.log(moreOptions);
      Js.log(evenMoreOptions);
    }
  );
