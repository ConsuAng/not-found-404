import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps ) {
  return(
    <div className="h-[calc(100vh-92px)] lg:flex lg:items-center lg:justify-center">
      {children}
    </div>
  )
}