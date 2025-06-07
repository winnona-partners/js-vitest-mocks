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
export declare class Feature extends MVCObject implements google.maps.Data.Feature {
    constructor(options?: google.maps.Data.FeatureOptions | null);
    forEachProperty: import("vitest").Mock<(...args: any[]) => any>;
    getGeometry: import("vitest").Mock<(...args: any[]) => any>;
    getId: import("vitest").Mock<(...args: any[]) => any>;
    getProperty: import("vitest").Mock<(...args: any[]) => any>;
    removeProperty: import("vitest").Mock<(...args: any[]) => any>;
    setGeometry: import("vitest").Mock<(...args: any[]) => any>;
    setProperty: import("vitest").Mock<(...args: any[]) => any>;
    toGeoJson: import("vitest").Mock<(...args: any[]) => any>;
}
