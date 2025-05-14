import React from 'react'

interface Props {
    label: string
    isActive?: boolean
    onClick?: () => void
}

function Tag({label, isActive, onClick}: Props) {
    const className=`px-4 m-2 cursor-pointer py-1 border-1 text-white border-white rounded-full ${isActive ? 'bg-blue-600': ''}`
  return (
    <div className={className} onClick={onClick}>{label}</div>
  )
}

export default Tag