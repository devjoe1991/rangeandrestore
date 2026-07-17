import * as THREE from 'three'

/**
 * Points of interest dotted around the room. A dot wakes up when the visitor is
 * within `NEAR_DISTANCE` of it, and opens its tip when clicked or tapped.
 *
 * Positions are in three.js world space — see roomBounds.ts for how that maps
 * back to the Blender source.
 */
export type Hotspot = {
  id: string
  position: THREE.Vector3
  title: string
  body: string
}

/** How close the visitor must be before a dot becomes active. */
export const NEAR_DISTANCE = 2.0

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'cabin',
    position: new THREE.Vector3(2.86, 1.55, -1.31),
    title: 'Full spectrum infrared',
    body: 'Infrared warms your body directly rather than heating the air, so you get a deep, comfortable sweat without the harsh blast of a traditional sauna. Switch between infrared and traditional heat whenever you fancy.',
  },
  {
    id: 'bench',
    position: new THREE.Vector3(3.4, 0.75, -1.31),
    title: 'Yours alone, for two',
    body: 'A private two person cabin. Book it solo and the whole room is yours, or bring one other person. No sharing with strangers, no queue, no audience.',
  },
  {
    id: 'recovery',
    position: new THREE.Vector3(1.95, 1.62, -0.06),
    title: 'Why bother sweating',
    body: 'Regular sauna sessions help ease muscle soreness and stiffness, loosen tight joints, and wind your nervous system down. Pairs well with a massage on the same visit.',
  },
  {
    id: 'privacy',
    position: new THREE.Vector3(0.55, 1.5, -1.3),
    title: 'Tucked away from the world',
    body: 'The recovery suite sits at the quiet back of the clinic, enclosed and shut off from the street. Once the door closes it is just you, the heat, and an hour that belongs to nobody else.',
  },
]
