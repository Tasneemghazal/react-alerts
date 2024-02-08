import {X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
interface IProps {
  type:string;
  icon: ReactNode;
  title:string;
  description:string;

}

const Alert = ({type,icon,title,description}: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
         <span>{icon}</span>
        <h4>{title}</h4>
        </div>
      
          <X/>
        
      </div>
      <p>
        {description}
      </p>
     
    </div>
  );
};
export default Alert;
