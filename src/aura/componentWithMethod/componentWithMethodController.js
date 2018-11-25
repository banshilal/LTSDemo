({
    increment : function(cmp, event, helper) {
        var value = cmp.get("v.counter");
        value = value + 1;
        cmp.set("v.counter", value);
    }
})