import React, { useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AdForm = () => {
    const methods = useForm();
    const navigate = useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
        // Open the dialog after form submission
        setIsDialogOpen(true);

        // Automatically close the dialog and navigate after 6 seconds
        setTimeout(() => {
            setIsDialogOpen(false);
            navigate(`/dashboard`);
        }, 6000);
    };

    const handleCancleAds = () => {
        navigate(`/createads`);
    };

    return (
        <Container style={{ background: '#f0f0f0', paddingTop: '20px' }}>
            <Card style={{ background: '#ffffff', margin: 'auto' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Create Text & Media
                    </Typography>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Typography>Heading 01</Typography>
                                    <Controller
                                        name="heading01"
                                        control={methods.control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                placeholder="Add a heading that would make users interested"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography>Heading 02</Typography>
                                    <Controller
                                        name="heading02"
                                        control={methods.control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                placeholder="Add a heading that would make users interested"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Description 01</Typography>
                                    <Controller
                                        name="description01"
                                        control={methods.control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                placeholder="Add primary text to help users understand more about your products, services or offers"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography>Business Name</Typography>
                                    <Controller
                                        name="businessName"
                                        control={methods.control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                placeholder="Add your business name"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography>Button Label</Typography>
                                    <Controller
                                        name="buttonLabel"
                                        control={methods.control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                placeholder="Select a label that best suits your ad"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Website URL</Typography>
                                    <Controller
                                        name="websiteUrl"
                                        control={methods.control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                placeholder="Add the URL of the landing page you want to redirect users to"
                                                fullWidth
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} mt={2}>
                                <Grid item xs={6} md={9}>
                                    &nbsp;
                                </Grid>
                                <Grid item xs={6} md={3} display={'flex'} spacing={2}>
                                    <Button type="button" variant="outlined" color="primary" fullWidth style={{ marginRight: '10px' }} onClick={() => handleCancleAds()}>
                                        Back
                                    </Button>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                            <Dialog open={isDialogOpen} fullWidth maxWidth="xs">
                                <DialogTitle style={{ textAlign: 'center' }}>
                                    <CheckCircleOutlineIcon style={{ color: 'blue', fontSize: '48px' }} />
                                </DialogTitle>
                                <DialogContent style={{ textAlign: 'center', }}>
                                    <Typography variant="h6" gutterBottom>
                                        Submitted!
                                    </Typography>
                                </DialogContent>
                            </Dialog>
                        </form>
                    </FormProvider>
                </CardContent>
            </Card>
        </Container>
    );
};

export default AdForm;
