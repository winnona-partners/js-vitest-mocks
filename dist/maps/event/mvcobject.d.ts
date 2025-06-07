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
export declare class MVCObject implements google.maps.MVCObject {
    static _mockClasses: (typeof MVCObject)[];
    static mockInstances: MVCObject[];
    constructor();
    addListener: import("vitest").Mock<(...args: any[]) => any>;
    bindTo: import("vitest").Mock<(...args: any[]) => any>;
    changed: import("vitest").Mock<(...args: any[]) => any>;
    get: import("vitest").Mock<(...args: any[]) => any>;
    notify: import("vitest").Mock<(...args: any[]) => any>;
    set: import("vitest").Mock<(...args: any[]) => any>;
    setValues: import("vitest").Mock<(...args: any[]) => any>;
    unbind: import("vitest").Mock<(...args: any[]) => any>;
    unbindAll: import("vitest").Mock<(...args: any[]) => any>;
}
