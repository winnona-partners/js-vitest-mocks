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

/* eslint-disable @typescript-eslint/no-unused-vars */

import { MapsEventListener } from "../../maps/event/event";
import { __registerMockInstance } from "../../registry";

export class AdvancedMarkerElement
  extends HTMLElement
  implements google.maps.marker.AdvancedMarkerElement
{
  public collisionBehavior?: google.maps.CollisionBehavior;
  public content?: Element;
  public gmpDraggable?: boolean;
  public element: HTMLElement;
  public map?: google.maps.Map;
  public position?:
    | google.maps.LatLng
    | google.maps.LatLngLiteral
    | google.maps.LatLngAltitudeLiteral;
  public title: string;
  public zIndex?: number;

  public addListener = vi
    .fn()
    .mockImplementation(
      (
        eventName: string,
        handler: (
          this: AdvancedMarkerElement,
          event: google.maps.MapMouseEvent
        ) => void
      ): google.maps.MapsEventListener => MapsEventListener
    );

  constructor(options?: google.maps.marker.AdvancedMarkerElementOptions) {
    super();

    this.element = document.createElement("div");

    __registerMockInstance(this.constructor, this);
    this.map = options?.map ?? undefined;
    this.position = options?.position
      ? new google.maps.LatLng(options.position)
      : undefined;
    this.zIndex = options?.zIndex ?? undefined;
    this.content = options?.content ?? undefined;
  }
}

customElements.define("gmp-advanced-marker", AdvancedMarkerElement);
