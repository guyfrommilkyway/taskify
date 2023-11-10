// packages
import { Dispatch, ReactNode } from 'react';

export type Component =
  | (() => JSX.Element | JSX.Element[])
  | JSX.Element
  | JSX.Element[]
  | ReactNode;
export type ReactDispatch = Dispatch<TaskAction>;
