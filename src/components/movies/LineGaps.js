import React from 'react'

const LineGaps = ({bottom}) => {
  return (
    <> {window.innerHeight > 660 ? (
        <>
          <span /> <span /> <span /> 
        </>
      ) : (
        <>
          <span /> <span /> 
        </>
      )}
      {bottom && <span /> }
      </>
  )
}

export default LineGaps