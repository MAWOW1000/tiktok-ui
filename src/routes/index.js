import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/components/Layout/HeaderOnly';

// Danh cho user kh dang nhap
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly }
];

// Danh cho user dang nhap, login xong chuyen trang
const privateRoutes = [];

export { publicRoutes, privateRoutes };
