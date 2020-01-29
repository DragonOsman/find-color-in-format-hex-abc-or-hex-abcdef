"use strict";

const str = "color: #3f3; background-color: #AA00ef; and: #abcd";
const regex = /#([0-9A-F]{3}){1,2}\b/gi;
alert(str.match(regex));
