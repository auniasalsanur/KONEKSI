import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import "../styles/login.css";
import { useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alerts from '../components/Alerts'; // Import the Alerts component
import { useNavigate } from 'react-router-dom';

function UbahPassword() {
    const navigate = useNavigate();
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);

    const [username, setUsername] = useState(''); // State for username
    const [oldPassword, setOldPassword] = useState(''); // State for old password
    const [newPassword, setNewPassword] = useState(''); // State for new password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
    const [peringatanInvalid, setPeringatanInvalid] = useState(""); // State for alerts

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };
    const togglePasswordVisibility3 = () => {
        setShowPassword3(!showPassword3);
    };

    const ubahPassword = () => {
        // Check if any fields are empty
        if (!username || !oldPassword || !newPassword || !confirmPassword) {
            setPeringatanInvalid("Semua kolom harus diisi!");
            return; // Prevent further execution
        }

        // If new password and confirm password don't match
        if (newPassword !== confirmPassword) {
            setPeringatanInvalid("Kata sandi baru dan ulangi kata sandi baru tidak cocok!");
            return;
        }

        // Reset warning and show success message
        setPeringatanInvalid(""); // Clear any previous alerts
        toast.success("Kata Sandi Berhasil Diubah!", {
            position: "top-right",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        });

        // Redirect to login after delay
        setTimeout(() => {
            navigate('/login');
        }, 3000);
    };

    return (
        <Container fluid className='login-container'>
            <Container className='form-container'>
                <h1 className='header-login'>KONEKSI</h1>
                <div className='text-center mx-4'>
                    <h5>Selamat datang di Sistem Informasi Alumni Universitas YARSI</h5>
                    <p className='mb-5'>Masukkan detail Anda untuk mengubah kata sandi Anda</p>
                </div>
                {peringatanInvalid && <Alerts peringatan={peringatanInvalid} />} {/* Display Alerts if there's a warning */}
                <Form>
                    <Form.Group className="mb-3 mx-4" controlId="formGroupUsername">
                        <Form.Control 
                            className='label-login' 
                            type="text" 
                            placeholder="Masukkan Username" 
                            value={username} // Bind state
                            onChange={(e) => setUsername(e.target.value)} // Update state
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 mx-4" controlId="formGroupPassword1">
                        <InputGroup>
                            <Form.Control
                                className='label-login'
                                type={showPassword1 ? "text" : "password"}
                                placeholder="Masukkan Kata Sandi Lama"
                                value={oldPassword} // Bind state
                                onChange={(e) => setOldPassword(e.target.value)} // Update state
                            />
                            <InputGroup.Text
                                onClick={togglePasswordVisibility1}
                                style={{ cursor: 'pointer' }}
                            >
                                <i className={showPassword1 ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3 mx-4" controlId="formGroupPassword2">
                        <InputGroup>
                            <Form.Control
                                className='label-login'
                                type={showPassword2 ? "text" : "password"}
                                placeholder="Masukkan Kata Sandi Baru"
                                value={newPassword} // Bind state
                                onChange={(e) => setNewPassword(e.target.value)} // Update state
                            />
                            <InputGroup.Text
                                onClick={togglePasswordVisibility2}
                                style={{ cursor: 'pointer' }}
                            >
                                <i className={showPassword2 ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3 mx-4" controlId="formGroupPassword3">
                        <InputGroup>
                            <Form.Control
                                className='label-login'
                                type={showPassword3 ? "text" : "password"}
                                placeholder="Ketik Ulang Kata Sandi Baru"
                                value={confirmPassword} // Bind state
                                onChange={(e) => setConfirmPassword(e.target.value)} // Update state
                            />
                            <InputGroup.Text
                                onClick={togglePasswordVisibility3}
                                style={{ cursor: 'pointer' }}
                            >
                                <i className={showPassword3 ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Form>
                <div className="d-flex justify-content-center mt-20">
                    <Button onClick={ubahPassword} size="sm" className='w-50'>
                        Ubah Kata Sandi
                    </Button>
                </div>
                <ToastContainer />
            </Container>
        </Container>
    );
}

export default UbahPassword;
