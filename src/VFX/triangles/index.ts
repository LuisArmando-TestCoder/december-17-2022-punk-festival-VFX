import gsap from "gsap"
const triangleShape = [
  { x: 1.5, y: 2 },
  { x: 3, y: 0 },
  { x: 0, y: 0 },
  { x: 1.5, y: 2 },
]

export default presetObject => {
  const base = {
    x: presetObject.c.width / 2,
    y: presetObject.c.height / 2,
    color: "#fff",
    thickness: 0,
    group: triangleShape,
    scale: 5,
    rotation: 0,
  }
  const tl = gsap.timeline()

  window.addEventListener("keydown", event => {
    switch (event.key.toLocaleLowerCase()) {
      case "z":
        tl.to(base, {
          rotation: +!base.rotation,
          duration: 0.1,
        })

        break
      case "x":
        tl.to(base, {
          color: base.color === "#fff" ? "#f00" : "#fff",
          duration: 0.1,
        })

        break
      case "c":
        tl.to(base, {
          scale: base.scale === 5 ? 7 : 5,
          duration: 0.1,
        })
    }
  })

  return () => {
    const xSize = Math.floor(presetObject.c.width / 20)
    const ySize = Math.floor(
      (presetObject.c.height / presetObject.c.width) * xSize
    )

    for (let x = -xSize / 2; x < xSize / 2; x++) {
      for (let y = -ySize / 2; y < ySize / 2; y++) {
        presetObject.renderGroup(
          "lines",
          [base] /* recycle array */,
          object => {
            return {
              ...base,
              x: presetObject.c.width / 2 + x * base.scale * 3,
              y: presetObject.c.height / 2 + y * base.scale * 3,
              rotation: ((object.rotation + x) % 2) * 180,
            } // recycleObject
          }
        )
        presetObject.ctx.fillStyle = base.color
        presetObject.ctx.fill()
      }
    }
  }
}
