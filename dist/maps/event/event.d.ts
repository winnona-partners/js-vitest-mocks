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
export declare const MapsEventListener: google.maps.MapsEventListener;
export declare class event implements google.maps.event {
    static addDomListener: (instance: object, eventName: string, handler: Function, capture?: boolean) => google.maps.MapsEventListener;
    static addDomListenerOnce: (instance: object, eventName: string, handler: Function, capture?: boolean) => google.maps.MapsEventListener;
    static addListener: (instance: object, eventName: string, handler: Function) => google.maps.MapsEventListener;
    static addListenerOnce: (instance: object, eventName: string, handler: Function) => google.maps.MapsEventListener;
    static clearInstanceListeners: (instance: object) => void;
    static clearListeners: (instance: object, eventName: string) => void;
    static hasListeners: (instance: object, eventName: string) => boolean;
    static removeListener: (listener: google.maps.MapsEventListener) => void;
    static trigger: (instance: object, eventName: string, ...eventArgs: any[]) => void;
}
