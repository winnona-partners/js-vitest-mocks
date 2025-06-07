/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { MVCObject } from "../../maps/event/mvcobject";
export declare class Data extends MVCObject implements google.maps.Data {
    constructor(opt?: google.maps.Data.DataOptions | null);
    static Feature: import("vitest").Mock<(...args: any[]) => any>;
    static Polygon: import("vitest").Mock<(...args: any[]) => any>;
    add: import("vitest").Mock<(...args: any[]) => any>;
    addGeoJson: import("vitest").Mock<(...args: any[]) => any>;
    contains: import("vitest").Mock<(...args: any[]) => any>;
    forEach: import("vitest").Mock<(...args: any[]) => any>;
    getControlPosition: import("vitest").Mock<(...args: any[]) => any>;
    getControls: import("vitest").Mock<(...args: any[]) => any>;
    getDrawingMode: import("vitest").Mock<(...args: any[]) => any>;
    getFeatureById: import("vitest").Mock<(...args: any[]) => any>;
    getMap: import("vitest").Mock<(...args: any[]) => any>;
    getStyle: import("vitest").Mock<(...args: any[]) => any>;
    loadGeoJson: import("vitest").Mock<(...args: any[]) => any>;
    overrideStyle: import("vitest").Mock<(...args: any[]) => any>;
    remove: import("vitest").Mock<(...args: any[]) => any>;
    revertStyle: import("vitest").Mock<(...args: any[]) => any>;
    setControlPosition: import("vitest").Mock<(...args: any[]) => any>;
    setControls: import("vitest").Mock<(...args: any[]) => any>;
    setDrawingMode: import("vitest").Mock<(...args: any[]) => any>;
    setMap: import("vitest").Mock<(...args: any[]) => any>;
    setStyle: import("vitest").Mock<(...args: any[]) => any>;
    toGeoJson: import("vitest").Mock<(...args: any[]) => any>;
}
