import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="max-w-6xl mx-auto px-5" style={{ paddingTop: "150px" }}>{children}</div>
}

export default Container
