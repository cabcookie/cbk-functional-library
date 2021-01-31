import { isNotNullAndTrue } from '../boolean'
import { defaultFn } from './default-function'
import { FunctionReturningType } from '../types'

export const ifThenElse: <B extends object | unknown, C extends object | unknown>(ifFn: FunctionReturningType<boolean>, thenFn: FunctionReturningType<B>, elseFn?: FunctionReturningType<C>) => (...args: any) => B | C = (ifFn, thenFn, elseFn = defaultFn) => (...args) => isNotNullAndTrue(ifFn)(...args) ? thenFn(...args) : elseFn(...args)
