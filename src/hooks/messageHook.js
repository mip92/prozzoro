import {useCallback} from "react"
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

export const useMessage = () => {
    return useCallback((text) => {
        if (window.M && text) {
            window.M.toast({html: text})
        }
    }, [])
}