# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

<!-- Подсветить строки 2 и 4-5 -->
```js {2,4-5}
const a = 1;
const b = 2; // эта строка подсветится
const c = 3;
const d = 4; // эта тоже
const e = 5; // и эта
```

<!-- Показать добавленные и удаленные строки (diff) -->
```js
const total = 100 // [md-vue:error]
const total = 200 // [md-vue:ins]
```


## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
