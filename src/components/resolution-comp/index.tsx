import React from 'react'
import Resolutions from '@/common/Resolution'

interface ResolutionComProps {
  WIDTH?: number
}

export default class ResolutionCom extends React.Component<ResolutionComProps> {
  componentDidMount(): void {
    this.resize()
    window.onresize = this.resize
  }

  resize = (): void => {
    // Get the size of the design draft
    const design = Resolutions.getDesign()
    const html = document.documentElement
    const getHtmlFs = () =>
      parseFloat(window.getComputedStyle(html, null)['font-size'])
    const getScreenWidth = () => {
      let htmlWidth = 0
      try {
        const htmlElement = document.documentElement
        htmlWidth = Math.max(
          htmlElement.offsetWidth || 0,
          htmlElement.clientWidth || 0,
          htmlElement.getBoundingClientRect().width || 0
        )
        // Failed to read, other ways to read
        if (!htmlWidth || htmlWidth <= 0) {
          if (window.orientation == 180 || window.orientation == 0) {
            // Vertical screen
            htmlWidth =
              window.innerWidth ||
              (window.screen && window.screen.width) ||
              (window.screen && window.screen.availWidth) ||
              0
          } else if (window.orientation == 90 || window.orientation == -90) {
            // Horizontal screen
            htmlWidth =
              window.innerHeight ||
              (window.screen && window.screen.height) ||
              (window.screen && window.screen.availHeight) ||
              0
          }
        }
      } catch (e) {
        console.log('Error getting screen width')
      }
      return htmlWidth | 0
    }
    const WIDTH = this.props.WIDTH || design.WIDTH,
      // When the html tag font-size is not set for the first time
      screenWidth = getScreenWidth(),
      htmlFs = getHtmlFs(),
      // Get page width device width/fontSize=design draft (750)/100=7.5
      mediaFs = (design.RATIO / WIDTH) * screenWidth

    // Calculate font-size according to page size
    html.style.fontSize = `${mediaFs}px`
    // html.style.fontSize = '16px'

    // The following is a special treatment. After trying a certain browser under htc
    // to set the font size and then get the font-size, it will be relatively smaller than the set
    // value, so the result of setting it a little larger to make the font-size is to set the result of

    if (htmlFs !== mediaFs && Math.abs(htmlFs - mediaFs) > 2) {
      html.style.fontSize = '100px'
      html.style.fontSize = `${(100 / getHtmlFs()) * mediaFs}px`
    }
  }

  render(): React.ReactNode {
    return this.props.children
  }
}
