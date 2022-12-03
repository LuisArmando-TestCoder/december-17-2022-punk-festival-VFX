import nightSky from "../../../VFX/nightSky"
import opaque from "../../../VFX/opaque"
import radar from "../../../VFX/radar"
import boids from "../../../VFX/boids"
import warp from "../../../VFX/warp"
import clockLines from "../../../VFX/clockLines"
import warpBoids from "../../../VFX/warpBoids"
import trappedBoids from "../../../VFX/trappedBoids"
import triangles from "../../../VFX/triangles"
import cranes from "../../../VFX/cranes"
import flash from "../../../VFX/flash"
import anarchy from "../../../VFX/anarchy"

type TriggerMap = {
  [index: string]: ((data: { [index: string]: any }) => () => void)[]
}

export const functionToTriggers: TriggerMap = {
  q: [boids],
  w: [warpBoids],
  e: [trappedBoids],
  r: [radar],
  t: [nightSky],
  y: [warp],
  u: [clockLines],
  i: [triangles],

  a: [flash],
  s: [cranes],
  d: [anarchy]
}
export const functionToNonAvailableTriggers: TriggerMap = {
  m: [
    opaque, 
  ],
}
