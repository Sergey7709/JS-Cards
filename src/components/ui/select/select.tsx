import { useState } from 'react'

import * as RadixLabel from '@radix-ui/react-label'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { ArrowDown, ArrowUp } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'

export default () => <RadixLabel.Root />

type SelectType = {
  options: string[]
  onValueChange?: (value: string) => void
  disabled?: boolean
  label?: string
  className?: string
  placeholder?: string
  variant?: 'common' | 'pagination'
  fullWidth?: boolean
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  value?: string
}

export const Select = ({
  disabled = false,
  options,
  label,
  placeholder,
  onValueChange,
  variant = 'common',
  className,
  fullWidth,
  isOpen = false,
  setIsOpen,
  value = '',
}: SelectType) => {
  const [open, setOpen] = useState(isOpen)
  const onOpenChangeHandler = () => {
    if (!disabled) {
      setIsOpen ? setIsOpen(!isOpen) : setOpen(!open)
    }
  }

  const classNames = {
    label: clsx(s.label, disabled && s.disabled),
    trigger: clsx(
      s.trigger,
      variant === 'pagination' && s.triggerPagination,
      disabled && s.disabled,
      fullWidth && s.fullWidth,
      className
    ),
    content: clsx(
      s.content,
      variant === 'pagination' && s.contentPagination,
      fullWidth && s.fullWidth,
      className
    ),
    item: clsx(s.item, variant === 'pagination' && s.itemPagination, className),
    value: s.value,
    icon: clsx(s.icon, disabled && s.disabled),
  }

  return (
    <RadixLabel.Root>
      {label && (
        <Typography
          onClick={onOpenChangeHandler}
          variant={'body2'}
          as={'label'}
          className={s.label}
        >
          {label}
        </Typography>
      )}
      <RadixSelect.Root
        onValueChange={onValueChange}
        onOpenChange={onOpenChangeHandler}
        open={open}
        disabled={disabled}
        value={value}
      >
        <RadixSelect.Trigger className={classNames.trigger}>
          <Typography variant={'body1'}>
            <RadixSelect.Value className={classNames.value} placeholder={placeholder}>
              {value}
            </RadixSelect.Value>
          </Typography>
          <RadixSelect.Icon className={classNames.icon}>
            {open ? <ArrowUp size={16} /> : <ArrowDown size={16} disabled={disabled} />}
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={classNames.content} position="popper">
            <RadixSelect.Viewport>
              {options.map(value => (
                <RadixSelect.Item key={value} value={value} className={classNames.item}>
                  <RadixSelect.ItemText>{value}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </RadixLabel.Root>
  )
}
