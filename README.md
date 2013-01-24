JSON2QS
=======

Converting JSON to PHP-Compatible QueryString

```
var test1 = {
  "test" : "value"
};

// test=value
test1.toQS();
```

```
var test2 = {
  "test" : [
    "value1", "value2", "value3"
  ]
}

// test[]=value1&test[]=value2&test[]=value3
test2.toQS();
```

```
var test3 = {
  "key1" : {
    "child" : "value1"
  },
  "key2" : {
    "children" : ["value2", "value3", "value4"]
  }
};

// key1[child]=value1&key2[children][]=value2&key2[children][]=value3&key2[children][]=value4
test3.toQS();
```
