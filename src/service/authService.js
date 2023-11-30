import axiosInstance from '../utils/axiosInstance';

const AuthService = {
    login: async (username, password) => {
        try {
            const response = await axiosInstance.post('/login', {
                username,
                password
            });
            // Xử lý kết quả đăng nhập ở đây, ví dụ lưu token vào Local Storage.
            const { token } = response.data;
            localStorage.setItem('token', token);
            return response.data;
        } catch (error) {
            throw new Error('Đăng nhập không thành công');
        }
    },

    logout: () => {
        // Xử lý đăng xuất, ví dụ xóa token khỏi Local Storage
        localStorage.removeItem('token');
        // Có thể thực hiện các bước khác khi đăng xuất
    },

    isLoggedIn: () => {
        // Kiểm tra xem người dùng có đăng nhập hay không
        return !!localStorage.getItem('token');
    },

    // Các phương thức khác như kiểm tra quyền, lấy thông tin người dùng, v.v.
};

export default AuthService;
