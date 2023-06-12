import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./form-register.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';


  


  


const FormRegister = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
 const [showPassword, setShowPassword] = useState(false);
 const [formData, setFormData] = useState({
  username: '',
  password: '',
  nama_lengkap: '',
  alamat: '',
  email: '',
  nomor_telepon: ''
});

  const onMasukDiSiniClick = useCallback(() => {
    router.push("/login");
  }, [router]);


  const toggleShowPassword = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'password') {
      setFormData((prevData) => ({
        ...prevData,
        password: value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the register API endpoint
      const response = await axios.post('/api/register', formData);
      console.log(response.data); // Log the response data
      // Handle the response as needed

      // Redirect to the login page
      router.push('/login');
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  return (
    <div  className={styles.frameParent}>
      <div className={styles.logoWrapper}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.masuk}>
        <b className={styles.daftar}>Daftar</b>
      </div>
      <form className={styles.inner} onSubmit={handleSubmit}>
      
        <div className={styles.input}>
          <div className={styles.username}>Username</div>
          <div className={styles.usernameWrapper}>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={styles.username1}
              type="text"
              placeholder="Username"
              required
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Buat Password</div>
          </div>
          <div className={styles.buatPasswordParent}>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.username1}
              type={showPassword ? "text" : "password"}
              placeholder="Buat Password"
              required
            />
            <button
              className={styles.showPasswordButton}
              onClick={toggleShowPassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.username}>Nama Lengkap</div>
          <div className={styles.usernameWrapper}>
            <input
              name="nama_lengkap" 
              value={formData.nama_lengkap}
              onChange={handleChange}
              className={styles.username1}
              type="text"
              placeholder="Nama Lengkap"
              required
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Alamat</div>
          </div>
          <div className={styles.alamatContainer}>
            <input
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className={styles.username1}
              type="text"
              placeholder="Alamat . "
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Email</div>
          </div>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputChild}
            type="email"
            placeholder="Contoh: johndee@gmail.com"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Nomor Telepon</div>
          </div>
          <div className={styles.alamatContainer}>
            <input
              name="nomor_telepon"
              value={formData.nomor_telepon}
              onChange={handleChange}
              className={styles.username1}
              type="tel"
              placeholder="+62 . "
              required
            />
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} type="submit">
            <div className={styles.terbitkan}>Daftar</div>
          </button>
        </div>
        </form>
      
      <div className={styles.register}>
        <div className={styles.sudahPunyaAkun}>Sudah punya akun?</div>
        <button className={styles.masukDiSini} onClick={onMasukDiSiniClick}>
          Masuk di sini
        </button>
      </div>
    </div>
  );
};

export default FormRegister;
