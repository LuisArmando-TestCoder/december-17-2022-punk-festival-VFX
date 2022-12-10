import React, { useRef } from 'react'
import * as Components from '../components'
import hillPattern from '../shaders/hillPattern'
import gooeyMosaic from '../shaders/gooeyMosaic'
import zoomTest from '../shaders/zoomTest'
import planet from '../shaders/planet'
import tokyo from '../shaders/tokyo'
import gammaRay from '../shaders/gammaRay'
import hotTunnelDNA from '../shaders/hotTunnelDNA'

const shaders = {
    hillPattern,
    gooeyMosaic,
    zoomTest,
    planet,
    tokyo,
    gammaRay,
    hotTunnelDNA,
}

export default () => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )'
            }}
        >
            {
                Object.entries(shaders).map(([key]) => { 
                    const path = `/shaders/${key}`                   
                    return (    
                        <a 
                            href={path}
                            key={key}
                            style={{
                                margin: 0,
                                padding: 0,
                                display: 'inline-flex',
                            }}
                        >
                            <iframe
                                style={{
                                    margin: 0,
                                    border: 0,
                                    pointerEvents: 'none',
                                    width: '100%'
                                }}
                            src={path} />
                        </a>
                    )
                })
            }
        </div>
    )
}
