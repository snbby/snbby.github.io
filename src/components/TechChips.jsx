import Stack from "@mui/material/Stack";
import RoundedIconChip from './ui/RoundedIconChip'
import { 
  SiPython, 
  SiDocker, 
  SiPostgresql, 
  SiLinux, 
  SiJavascript, 
  SiMui, 
  SiReact, 
  SiDjango, 
  SiFastapi, 
  SiRabbitmq 
} from "react-icons/si";

const techStack = [
  { name: "Python", color: "#3776AB", icon: SiPython },
  { name: "Django", color: "#092E20", icon: SiDjango },
  { name: "FastAPI", color: "#009688", icon: SiFastapi },
  { name: "Docker", color: "#2496ED", icon: SiDocker },
  { name: "PostgreSQL", color: "#336791", icon: SiPostgresql },
  { name: "RabbitMQ", color: "#FF6600", icon: SiRabbitmq },
  { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
  { name: "Material UI", color: "#007FFF", icon: SiMui },
  { name: "React", color: "#61DAFB", icon: SiReact },
  { name: "Linux", color: "#FCC624", icon: SiLinux },
];

export default function TechChips() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ justifyContent: "center"}}
    >
      {techStack.map(({ name, color, icon: Icon }) => (
        <RoundedIconChip
          icon={<Icon size={18} color={color} />}
          label={name}
        />
      ))}
    </Stack>
  );
}
