interface WarningProps{
    label : string;
    buttonText : string;
    to : string
}

import { Link } from "react-router-dom"
export function BottomWarning({label, buttonText, to} : WarningProps) {
    return <div className="py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
}