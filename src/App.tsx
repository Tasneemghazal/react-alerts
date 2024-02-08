import Alert from "./components/alert/Alert";
import { Ban, MailCheck } from "lucide-react";

export default function App() {
  return (
    <div style={{margin:"10px"}}> 
    <Alert type={"alert-danger"} icon={<Ban size={20}/>} title={"something went wrong"} description="error"/>
    <Alert type={"alert-success"} icon={<MailCheck size={20}/>} title={"successfull"} description="your inpiuts submitted sucessfully"/>
    </div>
  )
}
