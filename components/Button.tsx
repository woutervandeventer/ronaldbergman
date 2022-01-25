import Link from 'next/link'
import React from 'react'

interface Props {
  href: string
  title: string
}

const Button = ({ href, title }: Props) => {
  return (
    <Link href={href}>
      <a>{title}</a>
    </Link>
  )
}

export default Button
