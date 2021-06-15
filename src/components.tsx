import React, { ReactElement, ReactNode, useState } from 'react';

// Conventional props
export function Heading({title}: {title: string}) {
  return <h1>{title}</h1>
}

export function HeadingWithContent({children} : {children: ReactNode}): ReactElement {
  return <h1>{children}</h1>
}

// Default props
export const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
type ContainerProps = {children: ReactNode} & typeof defaultContainerProps

export function Container ({ heading, children} : ContainerProps): ReactElement {
  return(
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}

Container.defaultProps = defaultContainerProps

// Functional props
export function TextWithNumber({
  header,
  children,
} : {
  header?: (num: number) => ReactNode
  children: (num: number) => ReactNode
}) {
  const [state, setState] = useState<number>(1)
  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  )
}

// List
export function List<ListItem>({
  items,
  render
}: {
  items: ListItem[],
  render:(item: ListItem) => ReactNode
})
  {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{render(item)}</li>
        ))}
      </ul>
    )
  }