
# Array Flatten

> Array flatten helper function, that uses recursion to flatten nested arrays.

### flatten

Deep flattens an array.

Use recursion.
Recursively flatten each element that is an array.

```js
const flatten = (arrayToFlatten) => {
  return Array.isArray(arrayToFlatten) ?
    [].concat(...arrayToFlatten.map(arrayMember => (Array.isArray(arrayMember) ? flatten(arrayMember) : arrayMember))) :
    []
};
```

<details>
<summary>Examples</summary>

```
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
</details>

[Repo link](https://github.com/rasha08/array-flatten)
