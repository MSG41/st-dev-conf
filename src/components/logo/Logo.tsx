import styles from '../../App.module.scss';
import { useNavigate } from 'react-router';

export default function Logo() {
  const navigate = useNavigate();
  
  return (
    <div 
      className={styles.logo} 
      onClick={() => navigate('/')}
    ></div>
  );
}