import React from 'react';
import { Grid, Box, Typography, List, ListItem, ListItemAvatar, Avatar, Divider } from '@mui/material';
import Theme from '../Theme';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ContactForm from './ContactForm';

const expertise = [
    "I am a team player with excellent communication skills and a passion for learning.",
    "I am dedicated to delivering high-performance tools with seamless user experiences.",
    "I value precision, simplicity, and integrity in every project I undertake.",
    "I am committed to continuous learning and innovation, blending functionality with aesthetics to ensure solutions that exceed expectations.",
    "Choose reliability, effectiveness, and cutting-edge innovation."
];

const Communication = () => {
    return (
        <Grid id='communication' container sx={{ backgroundColor: Theme.color.secondaryDark, minHeight: '100vh', padding: 2 }}>
            <Grid item xs={12} md={6} sx={{ padding: 2 }}>
                <Box sx={{ maxWidth: { xs: '100%', md: '80%' }, mx: 'auto' }}>
                    <Typography 
                        variant='h4'
                        sx={{
                            fontFamily: Theme.fonts.secondaryFont,
                            color: Theme.color.white,
                            fontWeight: 'bold',
                            textAlign: 'left',
                            marginBottom: 2,
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem', lg: '4rem' }
                        }}
                    >
                        Reach out if you want to create impactful work together.
                    </Typography>
                    <Divider sx={{ my: 2, backgroundColor: Theme.color.white }} />
                    <List
                        sx={{
                            fontFamily: Theme.fonts.primaryFont,
                            textAlign: 'left',
                            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' },
                            padding: 0
                        }}
                    >
                        {expertise.map((quality, index) => (
                            <ListItem key={index} sx={{ alignItems: 'flex-start', mb: 1 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ backgroundColor: Theme.color.primaryDark }}>
                                        <StarBorderPurple500Icon sx={{ color: Theme.color.white }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <Typography variant="body1" sx={{ color: Theme.color.white }}>
                                    {quality}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <ContactForm />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Communication;
