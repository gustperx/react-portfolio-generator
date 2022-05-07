import { FC } from "react";

interface Props {
  title: string;
  textAction: string;
}

export const Header: FC<Props> = ({ title, textAction }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div>
        <button className="btn btn-ghost">{textAction}</button>
      </div>
    </div>
  );
};
