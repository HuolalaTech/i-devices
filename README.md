## 什么?

一款通过纯 CSS 代码实现手机（iphone 系列、Google 系列）、电脑（MacBook、SurfaceBook 系列）等各类设备样式效果。

## 特性

- 🎨 **多设备**: 提供多种设备样式，像 iPhone 系列、MacBook、Apple Watch。
- 🚧 **跨框架**: 完全基于纯 CSS，vue\react\原生均可使用，超易用。
- 🪄 **灵活可定制**: 内容区域支持自定义，满足个性化需求。
- 🧱 **丰富特性**: 开箱即用的颜色和组件

## 使用指南

#### 原生 Js Module

```html | pure
<!DOCTYPE html>
<head>
  <!-- src: iDevices cdn 链接 -->
  <script type="module" src="./iDevices.js"></script>
</head>
<body>
  <i-devices></i-devices>
</body>
```

#### React 使用方式

```bash | pure
yarn add i-devices
```

```jsx | pure
import React from 'react';
import { IDevicesReact } from 'i-devices';

export default function () {
  return (
    <div>
      <IDevicesReact></IDevicesReact>
    </div>
  );
}
```

#### Vue 使用方式

```bash | pure
yarn add i-devices
```

```js | pure
<template>
  <div>
    <i-devices></i-devices>
  </div>
</template>

<script>
import 'i-devices';
</script>
```

<br />

## 案例展示

更多使用方式，详见设备详情和使用 API

```tsx
import { IDevicesReact } from 'i-devices';
import React from 'react';

export default function () {
  return (
    <div style={{ width: '350px', margin: '0 auto' }}>
      <IDevicesReact modelcolor="device-silver" scale={0.9} />
    </div>
  );
}
```

## 丰富的设备样式

纯 CSS 代码实现手机、电脑等各类设备样式效果（Modern devices crafted in pure CSS）

<br />

## API

| 参数       | 说明                         | 类型                                                                | 默认值               |
| :--------- | :--------------------------- | :------------------------------------------------------------------ | :------------------- |
| modelname  | 设备名称                     | string (device-iphone-x \| device-iphone-14\| device-macbook\ 等等) | device-iphone-14-pro |
| modelcolor | 外壳颜色（详见详情）         | string (device-gold \| device-purple\| device-silver\ 等等)         | 默认                 |
| scale      | 缩放                         | string (0 - 1)                                                      | 1                    |
| modelbar   | 展示手机 tabbar 导航栏       | boolean                                                             | false                |
| bartitle   | 导航标题                     | string                                                              | 标题                 |
| usezoom    | transform 改用 zoom 进行缩放 | boolean                                                             | false                |

支持设备内容自定义，slot="slot-screen"

```jsx | pure
<IDevicesReact
  modelname="device-iphone-14-pro"
  modelcolor={actColor}
  scale={scale}
>
  <img
    slot="slot-screen"
    className="device-screen"
    src="/img/bg-iphone-14-pro.jpg"
    loading="lazy"
  />
</IDevicesReact>
```

<br />

## 问题反馈

#### 一、套了个“手机”壳影响原拖拽功能？

[根源查看](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md#warning-position-fixed) <br />
原因：position: fixed 会受到父级上的 transform 的影响，导致位置不准确。 <br />
fixed：开启 usezoom，去除 transform 缩放，改用 zoom 缩放。 或者可以将拖动项移动到 DOM 的另一个位置(document.body)

<br />
<br />

如果在使用过程中发现任何问题、或者有改善建议，欢迎在 [**GitHub Issues**](https://github.com/)进行反馈

<br />


## License

The MIT License.
