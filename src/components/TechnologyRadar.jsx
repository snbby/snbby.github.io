import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ResponsiveRadar } from '@nivo/radar';

// Two measures per tech: Experience (proficiency/time in use) and Curiosity (desire to explore).
const radarData = [
  { technology: 'Rust', Experience: 10, Curiosity: 100 },
  { technology: 'Python', Experience: 90, Curiosity: 90 },
  { technology: 'Django', Experience: 80, Curiosity: 80 },
  { technology: 'FastAPI', Experience: 50, Curiosity: 50 },
  { technology: 'RabbitMQ', Experience: 70, Curiosity: 70 },
  { technology: 'Kafka', Experience: 70, Curiosity: 70 },
  { technology: 'Linux', Experience: 70, Curiosity: 90 },
  { technology: 'PostgreSQL', Experience: 70, Curiosity: 90 },
  { technology: 'Kubernetes', Experience: 60, Curiosity: 90 },
  { technology: 'Material UI', Experience: 40, Curiosity: 70 },
  { technology: 'React', Experience: 40, Curiosity: 70 },
  { technology: 'JavaScript', Experience: 40, Curiosity: 70 },
];

export default function TechnologyRadar() {
  return (
    <Paper sx={{ p: { xs: 2, sm: 3 } }}>
      <Box sx={{ height: { xs: 600, sm: 800 } }}>
        <ResponsiveRadar
          data={radarData}
          keys={['Experience', 'Curiosity']}
          indexBy="technology"
          maxValue={100}
          margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
          curve="linearClosed"
          gridShape="circular"
          gridLabelOffset={12}
          dotSize={8}
          dotColor={{ theme: 'background' }}
          dotBorderWidth={2}
          colors={['#42a5f5', '#ffa726']}
          blendMode="multiply"
          animate
          motionConfig="gentle"
          legends={[
            {
              anchor: 'top-left',
              direction: 'column',
              translateX: -60,
              translateY: 0,
              itemWidth: 100,
              itemHeight: 18,
              symbolShape: 'circle',
              symbolSize: 12,
            },
          ]}
          theme={{
            textColor: '#ffffff',
            grid: { line: { stroke: '#444', strokeWidth: 1 } },
            axis: { ticks: { text: { fill: '#ffffff' } } },
            legends: { text: { fill: '#ffffff' } },
            labels: { text: { fill: '#ffffff' } },
            tooltip: { container: { background: '#1f1f1f', color: '#ffffff' } },
          }}
        />
      </Box>
    </Paper>
  );
}
