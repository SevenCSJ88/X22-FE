import {useState} from "react";

import  {Link} from 'react-router-dom'

const SignUp = () => {
    const [data, setData] = useState({ 

        fullname: "",
        username:"",
        password: "",
        email: "",
        phone: "",

});

return (
    <>
<div className='container'>
    <h1> Đăng Kí </h1>
    <form action="">
    <input type='text' placeholder='Họ và tên'/>
    <input type='text' placeholder='Tên đăng nhập'/>
    <input type='password' placeholder='Mật khẩu'/>
    <input type='password' placeholder='Nhập lại mật khẩu'/>
    <input type='email' placeholder='Địa chỉ email'/>
    <input type='tel' placeholder='Số điện thoại'/>
    </form>

<div className='terms' >
<input type="checkbox" id ="checkbox"/>
    <label htmlFor ="checkbox">Tôi đồng ý  <a href = "#"> Điều khoản và điều kiện</a></label>
</div>
<button>Đăng Kí </button>
<div className='member'>
Bạn đã có tài khoản đăng nhập tại đây ? <Link to='/login'> Đăng nhập </Link>
</div>
</div>



</>
)
}

export default SignUp