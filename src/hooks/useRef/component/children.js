import React, { forwardRef } from 'react'

export default forwardRef(function Children(props, ref) {
  return (
    <div>
      <input ref={ref} value={'test'} />
    </div>
  )
})


// const Children = forwardRef(() => {

// })