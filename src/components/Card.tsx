import { Children } from "react";

interface CardProps {
  head: string;
  onClose?: (value: boolean) => void;
  children?: React.ReactNode;
}

const Card = ({head, onClose, children}: CardProps): JSX.Element => {
  return (
    <div className="absolute w-screen h-screen bg-black/20 backdrop-blur-sm flex justify-center items-center">
      <div className="w-96 bg-white rounded-xl flex flex-col">
        <h1 className="font-semibold p-4 text-lg">{head}</h1>
        <hr />
        <div className="h-full p-4">{children}</div>
      </div>
    </div>
  )
}

export default Card