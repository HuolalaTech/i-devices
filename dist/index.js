import React from 'react';
import { createComponent } from '@lit-labs/react';
import { IDevices as IDevicesWC } from "./iDevices.js";

// Creates a React component from a Lit component
export var IDevicesReact = createComponent({
  react: React,
  tagName: 'i-devices',
  elementClass: IDevicesWC
});