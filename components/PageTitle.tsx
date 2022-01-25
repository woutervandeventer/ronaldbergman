import React, { ReactNode } from 'react'

interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return <h2>{title}</h2>
}

export default PageTitle
