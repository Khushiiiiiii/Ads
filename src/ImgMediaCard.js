import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const ImgMediaCard = ({ id, title, description, imageUrl, checked, onChange }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent sx={{ position: 'relative', pb: '0px !important' }}>
                <Checkbox
                    checked={checked}
                    onChange={() => onChange(id)}
                    name={`adCheckbox-${id}`}
                    sx={{ position: 'absolute', top: 0, left: 0 }}
                />
                <CardMedia component="img" alt="Ad Image" height="140" image={imageUrl} sx={{ objectFit: 'contain' }} />
                <Box sx={{ backgroundColor: '#fafafa' }}>
                    <span style={{color:'#bdbdbd',fontSize:'13px'}}>
                        Create
                    </span>
                    <Typography gutterBottom variant="h6" component="div" >
                        {title}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ImgMediaCard;
