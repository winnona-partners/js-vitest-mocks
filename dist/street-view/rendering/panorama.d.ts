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
import { MVCArray } from "../../maps/event/mvcarray";
import { MVCObject } from "../../maps/event/mvcobject";
export declare class StreetViewPanorama extends MVCObject implements google.maps.StreetViewPanorama {
    focus: import("vitest").Mock<(...args: any[]) => any>;
    controls: MVCArray<HTMLElement>[];
    getLinks: import("vitest").Mock<(...args: any[]) => any>;
    getLocation: import("vitest").Mock<(...args: any[]) => any>;
    getMotionTracking: import("vitest").Mock<(...args: any[]) => any>;
    getPano: import("vitest").Mock<(...args: any[]) => any>;
    getPhotographerPov: import("vitest").Mock<(...args: any[]) => any>;
    getPosition: import("vitest").Mock<(...args: any[]) => any>;
    getPov: import("vitest").Mock<(...args: any[]) => any>;
    getStatus: import("vitest").Mock<(...args: any[]) => any>;
    getVisible: import("vitest").Mock<(...args: any[]) => any>;
    getZoom: import("vitest").Mock<(...args: any[]) => any>;
    registerPanoProvider: import("vitest").Mock<(...args: any[]) => any>;
    setLinks: import("vitest").Mock<(...args: any[]) => any>;
    setMotionTracking: import("vitest").Mock<(...args: any[]) => any>;
    setOptions: import("vitest").Mock<(...args: any[]) => any>;
    setPano: import("vitest").Mock<(...args: any[]) => any>;
    setPosition: import("vitest").Mock<(...args: any[]) => any>;
    setPov: import("vitest").Mock<(...args: any[]) => any>;
    setVisible: import("vitest").Mock<(...args: any[]) => any>;
    setZoom: import("vitest").Mock<(...args: any[]) => any>;
}
