import { useNavigate } from 'react-router-dom';
import { Calibrate20Seconds } from '../components/Calibrate20Seconds';

export function CalibrationPage() {
  const navigate = useNavigate();

  return (
    <Calibrate20Seconds
      onBack={() => navigate('/settings')}
      onCalibrate={() => navigate('/settings/calibration/sheet')}
    />
  );
}
