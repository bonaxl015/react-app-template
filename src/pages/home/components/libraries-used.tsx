import React from 'react'
import { listData } from '../data/libraries-data'
import { Carousel } from 'antd'
import './libraries-used.scss'

const LibrariesUsed: React.FC = () => {
  const groupSize = Math.ceil(listData.length / 4)

  const listDataGrouped = listData.reduce((result, item, index) => {
    const groupIndex = Math.floor(index / groupSize)
    if (!result[groupIndex]) {
      result[groupIndex] = []
    }
    result[groupIndex].push(item)
    return result
  }, [])

  const gotoSite = (site: string) => {
    window.open(site)
  }

  const displayLibraryList = (data: any) => (
    <>
      {data.map(item => (
        <div
          key={item.key}
          className="card-item"
          onClick={() => gotoSite(item.websiteUrl)}
        >
          <div className="card-img-container">
            <img src={item.imageUrl} alt="" className="card-img" />
          </div>
          <p className="card-title">{item.name}</p>
        </div>
      ))}
    </>
  )

  return (
    <div className="libraries-wrapper">
      <div className="libraries-data-container">
        <p className="libraries-title">Libraries Used</p>
        <Carousel autoplay>
          {listDataGrouped.map((item, index) => (
            <div>
              <div key={index} className="library-group-container">
                {displayLibraryList(item)}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default LibrariesUsed
