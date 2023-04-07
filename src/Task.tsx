import React from "react";
import { Trash, CheckCircle } from "phosphor-react";

export const Task = ({ text, handleDelete, handleChecked, completed }: any) => {
  return (
    <li className="flex justify-between text-2xl ml-4 mt-5  border-b-4 border-indigo-900 p-2 rounded-lg">
      <div
        className={
          completed
            ? " line-through italic text-slate-50 flex gap-3 items-center "
            : " text-slate-50 flex gap-3 items-center "
        }
      >
        {text}
      </div>

      <div className=" flex gap-2">
        <button type="submit" onClick={() => handleChecked(text)}>
          <CheckCircle size={30} color={"#2BB80F"} />
        </button>
        <button type="submit" onClick={() => handleDelete(text)}>
          <Trash size={30} color={"#B80F0F"} />
        </button>
      </div>
    </li>
  );
};
