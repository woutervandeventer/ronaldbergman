import React, { ReactNode } from 'react'

interface Props {
  title: string
}

const SectionTitle = ({ title }: Props) => {
  return <h3>{title}</h3>
}

export default SectionTitle
