import React, { useState } from 'react';
import ImgMediaCard from './ImgMediaCard';
import Button from '@mui/material/Button';
import { Grid, Container, Typography, Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const CreateAds = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [checkedItems, setCheckedItems] = useState({});
    const [checkedIds, setCheckedIds] = useState('');

    const handleCheckboxChange = (id) => {
        setCheckedIds(id);
        setCheckedItems({
            [id]: !checkedItems[id],
        });
    };

    const handleCreateAds = () => {
        console.log(checkedIds, 'checkedIds7567576');
        if (checkedIds.length > 0) {
            navigate(`/createads/${checkedIds}`);
        } else {
            enqueueSnackbar('Please select at least one ad.', {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }
    };

    const adsData = [
        {
            id: '1',
            title: 'Text Ads',
            description: 'Description for Ad 1',
            imageUrl: 'https://callhub.io/wp-content/uploads/2020/07/Test-message-advertising-MMS.png',
        },
        {
            id: '2',
            title: 'Media Ads',
            description: 'Description for Ad 2',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgvbY0UWWEBs5vnsalCB71AJEAoE5S28qgQ&usqp=CAU',
        },
    ];

    return (
        <Container>

            <Box
            sx={{
                margin: 1,
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '600px',
                position: 'relative', // Add position relative
            }}
        >
        
            <Typography variant="h6" align="left" style={{ marginBottom: '16px' }}>
                Create Ads
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                {adsData.map((ad) => (
                    <Grid key={ad.id} item xs={12} md={4} style={{ textAlign: 'center' }}>
                        <ImgMediaCard
                            id={ad.id}
                            title={ad.title}
                            description={ad.description}
                            imageUrl={ad.imageUrl}
                            checked={checkedItems[ad.id]}
                            onChange={() => handleCheckboxChange(ad.id)}
                        />
                    </Grid>
                ))}
            </Grid>
            <Grid
                container
                spacing={2}
                justifyContent="flex-end" // Align items to the end of the container (right)
                style={{ position: 'absolute', bottom: '16px', right: '16px' }} // Absolute positioning
            >
                <Button variant="contained" color="primary" onClick={handleCreateAds}>
                    Next
                </Button>
            </Grid>
        </Box>

        </Container>
    );
};

export default CreateAds;
