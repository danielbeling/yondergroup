import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import services from '../utils/services';


export default function Services() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          color: '#33333b;',
          marginBottom: '50px'
        }}
      >
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Services
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 4, maxWidth: '600px', textAlign: 'center' }}>
          Explore our wide range of professional services designed to meet your needs. From marketing consultancy to social media management, we provide comprehensive solutions to help your business thrive.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {services.map((service, index) => (
            <Card key={index} sx={{ width: '275px', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mb: 2, textAlign: 'center' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={service.icon} alt={service.title} style={{ width: '40px', height: '40px', marginBottom: '10px' }} />
                <Typography variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2">
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

    </>
  );
}
