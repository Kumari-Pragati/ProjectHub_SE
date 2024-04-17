import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { isUserLoading } from "../store/selectors/isUserLoading";
import {useSetRecoilState, useRecoilValue} from "recoil";
import { userState } from "../store/atoms/user.js";
import { userEmailState } from "../store/selectors/userEmail"

function Appbar({}) {
    const navigate = useNavigate()
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const setUser = useSetRecoilState(userState);

    if (userLoading) {
        return <></>
    }

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                navigate("/")
            }}>
                <Typography variant={"h6"}>STUDENT REGISTRATION SYSTEM</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10, display: "flex"}}>
                <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/addcourse")
                            }}
                        >Add Student</Button>
                    </div>

                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/courses")
                            }}
                        >All Students</Button>
                    </div>

                    <Button
                        variant={"contained"}
                        onClick={() => {
                            localStorage.setItem("token", null);
                            setUser({
                                isLoading: false,
                                userEmail: null
                            })
                            window.location = "/"
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    } else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                navigate("/")
            }}>
                <Typography variant={"h6"}>STUDENT REGISTRATION SYSTEM</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10}}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/signup")
                        }}
                    >Signup</Button>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/signin")
                        }}
                    >Signin</Button>
                </div>
            </div>
        </div>
    }
}

export default Appbar;