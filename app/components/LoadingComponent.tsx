import React from 'react'

const LoadingComponent = () => {
  return (
    <div className="loading loading--in">
    <div className="loading__mask"></div>
    <div className="loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  )
}

export default LoadingComponent