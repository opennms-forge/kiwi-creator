const triggerDownload  = (imgURI: string) => {
  const evt = new MouseEvent('click', {
    view: window,
    bubbles: false,
    cancelable: true
  })

  const a = document.createElement('a')
  a.setAttribute('download', `ulf-${Date.now()}.png`)
  a.setAttribute('href', imgURI)
  a.setAttribute('target', '_blank')
  a.dispatchEvent(evt)
}

const save = () => {
  const svg = document.getElementById('kiwi') as unknown as SVGSVGElement
  const canvas = document.createElement("canvas") as HTMLCanvasElement;
  const width = 1262.84
  const height = 1262.84

  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const data = (new XMLSerializer()).serializeToString(svg)
  const DOMURL = window.URL || window.webkitURL || window

  const img = new Image()
  img.width = width
  img.height = height
  const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'})
  const url = DOMURL.createObjectURL(svgBlob)

  img.onload = function () {
    ctx.drawImage(img, 0, 0, width, height)
    DOMURL.revokeObjectURL(url)

    const imgURI = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream')

    triggerDownload(imgURI)
  }

  img.src = url
}

export {
  save
}
