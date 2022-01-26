import {useEffect, useState} from 'react'
import Script from 'next/script'

const KalturaPlayerComp = ({blok}) => {
    useEffect(() => {
        const kalturaPlayer = KalturaPlayer.setup({
          targetId: "target",
          provider: {
            partnerId: 2309321,
            uiConfId: 49053233
          },
          playback: {
            autoplay: true
            }
        });
        kalturaPlayer.loadMedia({entryId: '1_9hgr3og3'});
    }, [])

    return (
      <>
        <Script type="text/javascript" src="https://cdnapisec.kaltura.com/p/2309321/embedPlaykitJs/uiconf_id/49053233" strategy='beforeInteractive'/>
      <div style={{width: '500px', height: '500px'}} id='target'>
        lfdjdf
      </div>
        </>
    )
  }
  
  export default KalturaPlayerComp
  