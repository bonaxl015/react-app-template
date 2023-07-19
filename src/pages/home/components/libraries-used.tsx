import React from 'react'
import { listData } from '../data/libraries-data'
import { Carousel } from 'antd'
import styles from './libraries-used.scss'

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
          className={styles.cardItem}
          onClick={() => gotoSite(item.websiteUrl)}
        >
          <div className={styles.cardImgContainer}>
            <img src={item.imageUrl} alt="" className={styles.cardImg} />
          </div>
          <p className={styles.cardTitle}>{item.name}</p>
        </div>
      ))}
    </>
  )

  return (
    <div className={styles.librariesWrapper}>
      <div className={styles.librariesDataContainer}>
        <p className={styles.librariesTitle}>Libraries Used</p>
        <Carousel autoplay>
          {listDataGrouped.map((item, index) => (
            <div>
              <div key={index} className={styles.libraryGroupContainer}>
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
