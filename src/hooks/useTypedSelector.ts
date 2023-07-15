import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "@/src/redux";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector