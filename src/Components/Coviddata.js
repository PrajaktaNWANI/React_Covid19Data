import './Coviddata.css';

import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useEffect, useState } from 'react';




const Coviddata = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const response = await fetch('https://data.covid19india.org/data.json');
            const actualData = await response.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div className='container text-center'>
            <div className='row mb-5 mt-5'>
                <div className='col-md-12 text-light'>
                    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4 mb-5 mt-3'>
                    <Card className="countryname pt-3 pb-3" sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    OUR COUNTRY
                                </Typography>
                                <Typography className="txtshadow" variant="h5" color="text.secondary">
                                    INDIA
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='col-md-4 mb-5 mt-3'>
                    <Card className="totalrecovered pt-3 pb-3" sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    TOTAL RECOVERED
                                </Typography>
                                <Typography className="txtshadow" variant="h5" color="text.secondary">
                                    {data.deltarecovered}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='col-md-4 mb-5 mt-3'>
                    <Card className="totalconfirmed pt-3 pb-3" sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    TOTAL CONFIRMED
                                </Typography>
                                <Typography className="txtshadow" variant="h5" color="text.secondary">
                                    {data.confirmed}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-md-4 mb-5 mt-3'>
                    <Card className="totaldeath pt-3 pb-3" sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    TOTAL DEATH
                                </Typography>
                                <Typography className="txtshadow" variant="h5" color="text.secondary">
                                    {data.deaths}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='col-md-4 mb-5 mt-3'>
                    <Card  className="totalactive pt-3 pb-3" sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                   TOTAL ACTIVE
                                </Typography>
                                <Typography className="txtshadow" variant="h5" color="text.secondary">
                                    {data.recovered}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='col-md-4 mb-5 mt-3'>
                    <Card className="lastupdated pt-3 pb-3" sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                   LAST UPDATED
                                </Typography>
                                <Typography className="txtshadow" variant="h5" color="text.secondary">
                                    {data.lastupdatedtime}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>

        </div>


    )

}


export default Coviddata;