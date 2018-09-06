/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/9/6
 * @description
 */
import * as React from 'react'
import { IFunction, MixComponentClass } from '@rcp/_types'
import isComponentClass from '@rcp/util.iscompclass'

export default function displayName(
  component: MixComponentClass | React.ReactElement<any> | IFunction | string
): string {
  if (typeof component === 'string') {
    return component
  }
  if (!component) {
    return String(component)
  }

  if (isComponentClass(component)) {
    return (<MixComponentClass>component).displayName
  }
  const result = (<IFunction>component).name
  if (!result) {
    component = <React.ReactElement<any>>component
    return (component.type && displayName(component.type)) || 'Unknown'
  }
  return result
}
