
import  {Link} from 'react-router-dom'

const Login = () => {
return (
    <>
<div className='container'>
    <h1> Đăng Nhập </h1>
    <form action="">

    <input type='text' placeholder='Tên đăng nhập '/>
    <input type='password' placeholder='Mật khẩu'/>

    </form>

<div className='password'>
<Link to='/forgotPassword'> Quên Mật Khẩu </Link>

</div>
<button>Đăng Nhập </button>
<div className='member'>
Bạn chưa có tài khoản đăng kí tại đây <br/>
<Link to='/signup'>Đăng kí  </Link>
</div>
</div>

</>
)
}

export default Login