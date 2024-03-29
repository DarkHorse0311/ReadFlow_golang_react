import React, { RefObject, useEffect, useState } from 'react'
import { ButtonIcon } from '.'

import styles from './ScrollToTop.module.css'

interface Props {
  title?: string
  parent: RefObject<HTMLElement>
}

export const ScrollToTop = ({ title = 'Scroll to top', parent }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    if (parent.current) {
      parent.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    if (parent && parent.current) {
      const $el = parent.current
      const toggleVisibility = () => {
        setIsVisible($el.scrollTop > 500)
      }
      $el.addEventListener('scroll', toggleVisibility)
      return () => $el.removeEventListener('scroll', toggleVisibility)
    }
  }, [parent])

  return (
    <div className={styles.scrollToTop}>
      {isVisible && <ButtonIcon icon="expand_less" onClick={scrollToTop} title={title} />}
    </div>
  )
}
