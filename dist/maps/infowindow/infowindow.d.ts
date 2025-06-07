/**
 * Copyright 2019 Google LLC. All Rights Reserved.
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
import { MVCObject } from "../event/mvcobject";
export declare class InfoWindow_ extends MVCObject implements google.maps.InfoWindow {
    close: import("vitest").Mock<(...args: any[]) => any>;
    focus: import("vitest").Mock<(...args: any[]) => any>;
    getContent: import("vitest").Mock<(...args: any[]) => any>;
    getHeaderContent: import("vitest").Mock<(...args: any[]) => any>;
    getHeaderDisabled: import("vitest").Mock<(...args: any[]) => any>;
    getPosition: import("vitest").Mock<(...args: any[]) => any>;
    getZIndex: import("vitest").Mock<(...args: any[]) => any>;
    isOpen: boolean;
    open: import("vitest").Mock<(...args: any[]) => any>;
    setContent: import("vitest").Mock<(...args: any[]) => any>;
    setHeaderContent: import("vitest").Mock<(...args: any[]) => any>;
    setHeaderDisabled: import("vitest").Mock<(...args: any[]) => any>;
    setOptions: import("vitest").Mock<(...args: any[]) => any>;
    setPosition: import("vitest").Mock<(...args: any[]) => any>;
    setZIndex: import("vitest").Mock<(...args: any[]) => any>;
    constructor(opts?: google.maps.InfoWindowOptions);
}
