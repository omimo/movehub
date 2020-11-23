# Function acot

Calculate the inverse cotangent of a value.

For matrices, the function is evaluated element wise.


## Syntax

```js
math.acot(x)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | number &#124; Complex &#124; Array &#124; Matrix | Function input

### Returns

Type | Description
---- | -----------
number &#124; Complex &#124; Array &#124; Matrix | The arc cotangent of x


## Examples

```js
math.acot(0.5);           // returns number 0.4636476090008061
math.acot(math.cot(1.5)); // returns number 1.5

math.acot(2);             // returns Complex 1.5707963267948966 -1.3169578969248166 i
```


## See also

[cot](cot.md),
[atan](atan.md)


<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->