import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";

const LoginForm = ({history}) =>{
    const dispatch = useDispatch();
    const {form , auth, authError, user} = useSelector(({auth , user})=> ({
        form  : form , auth,
        auth : auth.auth,
        authError : auth.authError,
        user : auth.user
    }));
    const onChange = e => {

    }
    const onSubmit = e =>{
        e.preventDefault()
        const {username,password} = form;
        dispatch(login({username,password}));
    };

    useEffect(()=>{
        if (authError){
            console.log('error')
            console.log(check())
        }
        if (auth){
            console.log('로그인 성공')
            console.log(check())
        }
    }, [auth,authError,dispatch])

    useEffect(()=>{
        if (user){
            history.push('/');
        }
    },[history,user])
    return()
};

export default LoginForm;