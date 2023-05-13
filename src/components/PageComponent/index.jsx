import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';

export default () => {
    const menuReduer = useSelector((state) => state.menuReduer);
    const pathname = window.location.pathname.split('/').join("");
    const val = menuReduer.find(item => item.key === pathname.charAt(0)).children.find(item => item.key === pathname )
    const dispatch = useDispatch();
    const onChange = (value) => {
        val.label = value.target.value
        console.log(val, menuReduer);
         dispatch({
            type: 'EDIT',
            payload: menuReduer
        })
    }
    return <>
        <h2>{val.label}</h2>
        <Input onChange={onChange} value={val.label} style={{width:200}}/>
    </>
}