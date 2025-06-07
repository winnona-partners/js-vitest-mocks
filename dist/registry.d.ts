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
export declare const MOCKS_REGISTRY: Map<string, any[]>;
type Constructable = {
    new (...args: any[]): unknown;
};
declare function get<T extends Constructable>(item: T): InstanceType<T>[];
declare function clearAll(): void;
declare function clear<T extends Constructable, K extends Constructable[]>(item: T, ...rest: K): void;
export declare const mockInstances: {
    get: typeof get;
    clear: typeof clear;
    clearAll: typeof clearAll;
};
export declare function __registerMockInstance(ctr: Function, instance: any): void;
export {};
