import { useNavigate } from 'react-router-dom';
import { CalibrationSheet } from '../components/CalibrationSheet';

export function CalibrationSheetPage() {
  const navigate = useNavigate();

  return (
    <CalibrationSheet
      onBack={() => navigate('/settings/calibration')}
    />
  );
}
