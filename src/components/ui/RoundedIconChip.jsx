import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles';

const RoundedIconChip = styled(Chip)({
  '& .MuiChip-icon': {
    borderRadius: '20%',
  },
});

export default RoundedIconChip;